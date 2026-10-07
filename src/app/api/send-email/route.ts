import { NextResponse } from "next/server";
import { Resend } from "resend";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // ==================================================
    // ENVIRONMENT VARIABLES
    // ==================================================

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_RECEIVER_EMAIL) {
      console.error("CONTACT_RECEIVER_EMAIL is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Recipient email is not configured.",
        },
        { status: 500 },
      );
    }

    const receiverEmails = process.env.CONTACT_RECEIVER_EMAIL.split(",")
      .map((email) => email.trim())
      .filter(Boolean);

    if (receiverEmails.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No valid recipient email configured.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    // ==================================================
    // READ FORM DATA
    // ==================================================

    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const address = String(formData.get("address") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const notes = String(formData.get("notes") || "").trim();

    // ==================================================
    // VALIDATION
    // ==================================================

    if (!fullName || !phone || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide your name, phone number, email address, and service.",
        },
        { status: 400 },
      );
    }

    // Correct email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    // ==================================================
    // PROCESS CUSTOMER IMAGE ATTACHMENTS
    // ==================================================

    const attachments: Array<{
      filename: string;
      content: string;
      contentType?: string;
      contentId?: string;
    }> = [];

    const imageEntries = formData.getAll("images");

    for (const entry of imageEntries) {
      if (!(entry instanceof File)) {
        continue;
      }

      // Maximum 5 MB per image
      if (entry.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          {
            success: false,
            error: `Image "${entry.name}" is larger than 5 MB.`,
          },
          { status: 400 },
        );
      }

      // Only allow images
      if (!entry.type.startsWith("image/")) {
        return NextResponse.json(
          {
            success: false,
            error: `Invalid file type: ${entry.name}`,
          },
          { status: 400 },
        );
      }

      const arrayBuffer = await entry.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");

      attachments.push({
        filename: entry.name,
        content: base64,
        contentType: entry.type,
      });
    }

    // ==================================================
    // LOAD LOGO FROM /public/images/logo.png
    // ==================================================

    let logoAttachment:
      | {
          filename: string;
          content: string;
          contentType: string;
          contentId: string;
        }
      | undefined;

    try {
      const logoPath = path.join(process.cwd(), "public", "images", "logo.png");

      const logoBuffer = await readFile(logoPath);

      logoAttachment = {
        filename: "drain-solutions-plus-logo.png",
        content: logoBuffer.toString("base64"),
        contentType: "image/png",
        contentId: "drain-solutions-plus-logo",
      };

      console.log("Email logo loaded successfully.");
    } catch (logoError) {
      console.error(
        "Could not load logo from /public/images/logo.png:",
        logoError,
      );
    }

    // ==================================================
    // URGENCY
    // ==================================================

    const isUrgent =
      service.toLowerCase().includes("emergency") ||
      notes.toLowerCase().includes("emergency") ||
      notes.toLowerCase().includes("urgent");

    const urgencyLabel = isUrgent ? "URGENT REQUEST" : "NEW SERVICE REQUEST";

    const urgencyColor = isUrgent ? "#c02f2d" : "#014484";

    // ==================================================
    // EMAIL HTML
    // ==================================================

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Service Request</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#eef2f6;
    font-family:Arial,Helvetica,sans-serif;
    color:#1e293b;
  "
>

  <div
    style="
      width:100%;
      background:#eef2f6;
      padding:35px 15px;
      box-sizing:border-box;
    "
  >

    <div
      style="
        max-width:700px;
        margin:0 auto;
        background:#ffffff;
        border-radius:18px;
        overflow:hidden;
        border:1px solid #e2e8f0;
        box-shadow:0 8px 30px rgba(15,23,42,0.08);
      "
    >

      <!-- TOP BRAND BAR -->
      <div
        style="
          height:6px;
          background:#014484;
          font-size:0;
          line-height:0;
        "
      ></div>

      <!-- HEADER -->
      <div
        style="
          padding:28px 32px;
          border-bottom:1px solid #e8edf3;
          background:#ffffff;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >
          <tr>

            <td
              style="
                vertical-align:middle;
                width:60%;
              "
            >

              ${
                logoAttachment
                  ? `
                <img
                  src="cid:drain-solutions-plus-logo"
                  alt="Drain Solution Plus"
                  width="190"
                  style="
                    display:block;
                    width:190px;
                    max-width:100%;
                    height:auto;
                    border:0;
                  "
                />
              `
                  : `
                <div
                  style="
                    font-size:21px;
                    line-height:28px;
                    font-weight:800;
                    color:#014484;
                  "
                >
                  Drain Solutions Plus
                </div>
              `
              }

            </td>

            <td
              align="right"
              style="
                vertical-align:middle;
              "
            >

              <span
                style="
                  display:inline-block;
                  padding:7px 12px;
                  border-radius:20px;
                  background:${isUrgent ? "#fff1f2" : "#eff6ff"};
                  color:${urgencyColor};
                  font-size:10px;
                  line-height:14px;
                  font-weight:800;
                  letter-spacing:1px;
                  text-transform:uppercase;
                "
              >
                ${urgencyLabel}
              </span>

            </td>

          </tr>
        </table>

      </div>


      <!-- TITLE -->
      <div
        style="
          padding:30px 32px 22px;
        "
      >

        <div
          style="
            color:#c02f2d;
            font-size:10px;
            line-height:14px;
            font-weight:800;
            letter-spacing:2px;
            text-transform:uppercase;
            margin-bottom:8px;
          "
        >
          Website Lead
        </div>

        <h1
          style="
            margin:0;
            color:#014484;
            font-size:25px;
            line-height:34px;
            font-weight:800;
          "
        >
          New Service Request
        </h1>

        <p
          style="
            margin:8px 0 0;
            color:#64748b;
            font-size:13px;
            line-height:21px;
          "
        >
          A customer has submitted a new drain and sewer service request
          through the website.
        </p>

      </div>


      <!-- CUSTOMER INFORMATION -->
      <div
        style="
          padding:0 32px 28px;
        "
      >

        <div
          style="
            border:1px solid #e2e8f0;
            border-radius:12px;
            overflow:hidden;
          "
        >

          <div
            style="
              background:#f8fafc;
              padding:14px 16px;
              border-bottom:1px solid #e2e8f0;
            "
          >

            <h2
              style="
                margin:0;
                color:#014484;
                font-size:15px;
                line-height:20px;
                font-weight:800;
              "
            >
              Customer Information
            </h2>

          </div>


          <div style="padding:6px 16px 12px;">

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
            >

              <tr>
                <td
                  style="
                    padding:10px 0;
                    width:145px;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Full Name
                </td>

                <td
                  style="
                    padding:10px 0;
                    color:#0f172a;
                    font-size:13px;
                    font-weight:700;
                  "
                >
                  ${escapeHtml(fullName)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding:10px 0;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Phone
                </td>

                <td
                  style="
                    padding:10px 0;
                    font-size:13px;
                  "
                >
                  <a
                    href="tel:${escapeHtml(phone)}"
                    style="
                      color:#014484;
                      font-weight:700;
                      text-decoration:none;
                    "
                  >
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding:10px 0;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Email
                </td>

                <td
                  style="
                    padding:10px 0;
                    font-size:13px;
                  "
                >
                  <a
                    href="mailto:${escapeHtml(email)}"
                    style="
                      color:#014484;
                      text-decoration:none;
                    "
                  >
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding:10px 0;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  City / ZIP
                </td>

                <td
                  style="
                    padding:10px 0;
                    color:#0f172a;
                    font-size:13px;
                  "
                >
                  ${escapeHtml(address || "Not provided")}
                </td>
              </tr>

            </table>

          </div>

        </div>

      </div>


      <!-- SERVICE INFORMATION -->
      <div
        style="
          padding:0 32px 28px;
        "
      >

        <div
          style="
            border:1px solid #e2e8f0;
            border-radius:12px;
            overflow:hidden;
          "
        >

          <div
            style="
              background:#f8fafc;
              padding:14px 16px;
              border-bottom:1px solid #e2e8f0;
            "
          >

            <h2
              style="
                margin:0;
                color:#014484;
                font-size:15px;
                line-height:20px;
                font-weight:800;
              "
            >
              Service Information
            </h2>

          </div>


          <div style="padding:6px 16px 12px;">

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
            >

              <tr>
                <td
                  style="
                    padding:10px 0;
                    width:145px;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Service Needed
                </td>

                <td
                  style="
                    padding:10px 0;
                    color:#0f172a;
                    font-size:13px;
                    font-weight:700;
                  "
                >
                  ${escapeHtml(service)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding:10px 0;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Preferred Date
                </td>

                <td
                  style="
                    padding:10px 0;
                    color:#0f172a;
                    font-size:13px;
                  "
                >
                  ${escapeHtml(date || "As soon as possible")}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding:10px 0;
                    color:#64748b;
                    font-size:12px;
                    font-weight:700;
                  "
                >
                  Priority
                </td>

                <td
                  style="
                    padding:10px 0;
                    font-size:13px;
                    font-weight:800;
                    color:${urgencyColor};
                  "
                >
                  ${isUrgent ? "URGENT" : "STANDARD"}
                </td>
              </tr>

            </table>

          </div>

        </div>

      </div>


      <!-- ISSUE DETAILS -->
      <div
        style="
          padding:0 32px 28px;
        "
      >

        <h2
          style="
            margin:0 0 12px;
            color:#014484;
            font-size:15px;
            line-height:20px;
            font-weight:800;
          "
        >
          Issue Details
        </h2>

        <div
          style="
            background:#f8fafc;
            border:1px solid #e2e8f0;
            border-radius:12px;
            padding:16px;
            color:#334155;
            font-size:13px;
            line-height:22px;
            white-space:pre-wrap;
          "
        >
          ${escapeHtml(notes || "No additional details provided.")}
        </div>

      </div>


      <!-- PHOTOS -->
      <div
        style="
          padding:0 32px 30px;
        "
      >

        <div
          style="
            background:#f8fafc;
            border:1px solid #e2e8f0;
            border-radius:12px;
            padding:16px;
          "
        >

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
          >

            <tr>

              <td>

                <h2
                  style="
                    margin:0 0 4px;
                    color:#014484;
                    font-size:14px;
                    line-height:20px;
                    font-weight:800;
                  "
                >
                  Uploaded Photos
                </h2>

                <p
                  style="
                    margin:0;
                    color:#64748b;
                    font-size:12px;
                    line-height:18px;
                  "
                >
                  ${
                    attachments.length > 0
                      ? `${attachments.length} photo(s) attached to this email.`
                      : "No photos were uploaded."
                  }
                </p>

              </td>

              <td
                align="right"
                style="
                  vertical-align:middle;
                "
              >

                <span
                  style="
                    display:inline-block;
                    padding:6px 10px;
                    border-radius:8px;
                    background:#ffffff;
                    border:1px solid #e2e8f0;
                    color:#014484;
                    font-size:11px;
                    font-weight:800;
                  "
                >
                  ${attachments.length} ${
                    attachments.length === 1 ? "PHOTO" : "PHOTOS"
                  }
                </span>

              </td>

            </tr>

          </table>

        </div>

      </div>


      <!-- QUICK ACTIONS -->
      <div
        style="
          padding:0 32px 32px;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >

          <tr>

            <td
              style="
                width:50%;
                padding-right:6px;
              "
            >

              <a
                href="tel:${escapeHtml(phone)}"
                style="
                  display:block;
                  background:#014484;
                  color:#ffffff;
                  text-decoration:none;
                  text-align:center;
                  padding:13px 10px;
                  border-radius:9px;
                  font-size:12px;
                  font-weight:800;
                "
              >
                Call Customer
              </a>

            </td>

            <td
              style="
                width:50%;
                padding-left:6px;
              "
            >

              <a
                href="mailto:${escapeHtml(email)}"
                style="
                  display:block;
                  background:#c02f2d;
                  color:#ffffff;
                  text-decoration:none;
                  text-align:center;
                  padding:13px 10px;
                  border-radius:9px;
                  font-size:12px;
                  font-weight:800;
                "
              >
                Email Customer
              </a>

            </td>

          </tr>

        </table>

      </div>


      <!-- FOOTER -->
      <div
        style="
          background:#014484;
          padding:22px 30px;
          text-align:center;
        "
      >

        <div
          style="
            color:#ffffff;
            font-size:13px;
            line-height:20px;
            font-weight:800;
          "
        >
          Drain Solutions Plus
        </div>

        <div
          style="
            margin-top:5px;
            color:#dbeafe;
            font-size:11px;
            line-height:18px;
          "
        >
          Professional Drain &amp; Sewer Services
        </div>

        <div
          style="
            margin-top:10px;
            color:#bfdbfe;
            font-size:10px;
            line-height:16px;
          "
        >
          This request was submitted through
          drainsolutionsplus.com
        </div>

      </div>

    </div>

  </div>

</body>
</html>
`;

    // ==================================================
    // SEND EMAIL
    // ==================================================

    const finalAttachments = [
      ...(logoAttachment ? [logoAttachment] : []),
      ...attachments,
    ];

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Drain Solutions Plus <noreply@drainsolutionplus.com>",

      to: receiverEmails,

      replyTo: email,

      subject: `${isUrgent ? "🚨 URGENT - " : ""}New Service Request: ${service} - ${fullName}`,

      html,

      ...(finalAttachments.length > 0
        ? {
            attachments: finalAttachments,
          }
        : {}),
    });

    // ==================================================
    // RESEND ERROR
    // ==================================================

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message || "Resend could not send the email.",
        },
        { status: 500 },
      );
    }

    console.log("Service request email sent:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Service request sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Send email route error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send service request.",
      },
      { status: 500 },
    );
  }
}

// ==================================================
// ESCAPE HTML
// ==================================================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
