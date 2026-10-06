"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  ImagePlus,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  AlertCircle,
  X,
} from "lucide-react";

const serviceOptions = [
  "Drain Cleaning & Rooter",
  "Sewer / Main Line Repairs",
  "Toilet Repairs & Replacements",
  "Main Line Video Sewer Inspection",
  "Clog & Blockage Clearing",
  "Faucet & Leak Repairs",
  "Commercial Jetting",
  "Other / Emergency Service",
];

const credentials = [
  {
    title: "10% Discount Program",
    desc: "Available for seniors, veterans, law enforcement, and first responders.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Emergency Response",
    desc: "Priority assistance is available for urgent drain and sewer problems.",
    icon: Clock3,
  },
  {
    title: "Experienced Technicians",
    desc: "Professional service for residential and commercial drain and sewer needs.",
    icon: Wrench,
  },
];

export default function ContactBookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: serviceOptions[0],
    date: "",
    isUrgent: false,
    notes: "",
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setUploadedImages((prev) => [...prev, ...files].slice(0, 5));

    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) =>
      prev.filter((_, imageIndex) => imageIndex !== index)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /*
      The selected images are available in `uploadedImages`.

      When connecting this form to your backend/email service,
      send `uploadedImages` together with `formData`.
    */

    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f7fa] py-14 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#014484]/[0.035]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#c02f2d]/[0.025]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#014484]/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#014484] shadow-sm sm:text-[11px]">
            <CalendarDays className="h-3.5 w-3.5" />
            Service Request
          </div>

          <h2 className="text-[30px] font-bold leading-[1.12] tracking-tight text-[#014484] sm:text-4xl lg:text-5xl">
            Schedule Your Drain &amp; Sewer Service
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-7">
            Tell us about your service needs and our team will review your
            request and contact you to confirm the details.
          </p>
        </div>

        {/* ================================================== */}
        {/* MAIN CONTENT */}
        {/* ================================================== */}

        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* ================================================== */}
          {/* FORM - FIRST ON MOBILE */}
          {/* ================================================== */}

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.09)]">
              {/* Top accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#014484] via-[#014484] to-[#c02f2d]" />

              <div className="p-5 sm:p-8 lg:p-9">
                {submitted ? (
                  <div className="flex min-h-[600px] flex-col items-center justify-center px-3 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-[#014484]">
                      Request Received
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                      Thank you,{" "}
                      <span className="font-semibold text-slate-700">
                        {formData.fullName}
                      </span>
                      . We&apos;ve received your service request and our team
                      will contact you to confirm the details.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setUploadedImages([]);
                      }}
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#014484] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#c02f2d]"
                    >
                      Submit Another Request
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Form heading */}
                    <div className="mb-7 border-b border-slate-100 pb-6 sm:mb-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c02f2d]" />
                            Request Service
                          </div>

                          <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#014484] sm:text-3xl">
                            Tell Us What You Need
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                            Complete the form below and we&apos;ll get back to
                            you shortly.
                          </p>
                        </div>

                        <div className="hidden shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700 sm:flex">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          No Obligation
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-7">
                      {/* ================================================== */}
                      {/* 01 CONTACT */}
                      {/* ================================================== */}

                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#014484] text-[11px] font-bold text-white shadow-sm">
                            01
                          </span>

                          <div>
                            <h4 className="text-sm font-bold text-slate-800">
                              Contact Information
                            </h4>

                            <p className="text-[11px] text-slate-400">
                              How can we reach you?
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Full Name */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              Full Name
                            </label>

                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="First & last name"
                              className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                            />
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              Phone Number
                            </label>

                            <div className="relative">
                              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#014484]/60" />

                              <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(201) 000-0000"
                                className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              Email Address
                            </label>

                            <div className="relative">
                              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#014484]/60" />

                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                              />
                            </div>
                          </div>

                          {/* City */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              City / ZIP Code
                            </label>

                            <div className="relative">
                              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#014484]/60" />

                              <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="City, NJ 00000"
                                className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ================================================== */}
                      {/* 02 SERVICE */}
                      {/* ================================================== */}

                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#014484] text-[11px] font-bold text-white shadow-sm">
                            02
                          </span>

                          <div>
                            <h4 className="text-sm font-bold text-slate-800">
                              Service Information
                            </h4>

                            <p className="text-[11px] text-slate-400">
                              Help us understand the job
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Service */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              Service Needed
                            </label>

                            <div className="relative">
                              <Wrench className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#014484]/60" />

                              <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="h-[52px] w-full appearance-none rounded-xl border border-slate-200 bg-[#f8fafc] px-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                              >
                                {serviceOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>

                              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <ArrowRight className="h-4 w-4 rotate-90" />
                              </span>
                            </div>
                          </div>

                          {/* Date */}
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-600">
                              Preferred Date
                            </label>

                            <div className="relative">
                              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#014484]/60" />

                              <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="h-[52px] w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ================================================== */}
                      {/* 03 ISSUE DETAILS */}
                      {/* ================================================== */}

                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#014484] text-[11px] font-bold text-white shadow-sm">
                            03
                          </span>

                          <div>
                            <h4 className="text-sm font-bold text-slate-800">
                              Issue Details
                            </h4>

                            <p className="text-[11px] text-slate-400">
                              Describe the problem
                            </p>
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="relative">
                          <FileText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[#014484]/60" />

                          <textarea
                            name="notes"
                            rows={4}
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Describe the issue, symptoms, backup, blockage, leak, or anything our technician should know..."
                            className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] py-3.5 pl-11 pr-4 text-sm leading-6 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-[#014484] focus:bg-white focus:ring-4 focus:ring-[#014484]/10 focus:shadow-[0_5px_20px_rgba(1,68,132,0.08)]"
                          />
                        </div>

                        {/* ================================================== */}
                        {/* IMAGE UPLOAD */}
                        {/* ================================================== */}

                        <div className="mt-4">
                          <label className="mb-2 block text-xs font-bold text-slate-600">
                            Add Photos{" "}
                            <span className="font-normal text-slate-400">
                              (Optional)
                            </span>
                          </label>

                          <label
                            htmlFor="service-images"
                            className="group flex min-h-[125px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-[#f8fafc] px-5 py-6 text-center transition-all duration-300 hover:border-[#014484]/40 hover:bg-[#014484]/[0.025]"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#014484] shadow-sm transition-all duration-300 group-hover:bg-[#014484] group-hover:text-white">
                              <ImagePlus className="h-5 w-5" />
                            </div>

                            <p className="mt-3 text-sm font-bold text-slate-700">
                              Upload photos of the issue
                            </p>

                            <p className="mt-1 max-w-sm text-[11px] leading-5 text-slate-400">
                              Photos of leaks, damaged pipes, clogged drains,
                              fixtures, or other problem areas can help our
                              team better understand the issue.
                            </p>

                            <span className="mt-3 rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-[#014484] shadow-sm ring-1 ring-slate-200">
                              Choose Images
                            </span>

                            <input
                              id="service-images"
                              type="file"
                              accept="image/jpeg,image/png,image/webp,image/heic"
                              multiple
                              onChange={handleImageUpload}
                              className="sr-only"
                            />
                          </label>

                          {/* Uploaded images */}
                          {uploadedImages.length > 0 && (
                            <div className="mt-3 space-y-2">
                              <div className="flex items-center justify-between">
                                <p className="text-[11px] font-bold text-slate-600">
                                  Selected Photos
                                </p>

                                <p className="text-[10px] text-slate-400">
                                  {uploadedImages.length}/5
                                </p>
                              </div>

                              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                {uploadedImages.map((file, index) => (
                                  <div
                                    key={`${file.name}-${index}`}
                                    className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
                                  >
                                    <div className="flex h-20 items-center gap-2 px-2">
                                      <ImagePlus className="h-4 w-4 shrink-0 text-[#014484]" />

                                      <span className="min-w-0 truncate text-[10px] font-medium text-slate-600">
                                        {file.name}
                                      </span>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => removeImage(index)}
                                      aria-label={`Remove ${file.name}`}
                                      className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-colors hover:bg-[#c02f2d] hover:text-white"
                                    >
                                      <X className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ================================================== */}
                      {/* URGENT OPTION */}
                      {/* ================================================== */}

                      <label
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all duration-200 ${
                          formData.isUrgent
                            ? "border-[#c02f2d]/30 bg-red-50 shadow-[0_5px_20px_rgba(192,47,45,0.07)]"
                            : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="isUrgent"
                          checked={formData.isUrgent}
                          onChange={handleChange}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#c02f2d] focus:ring-[#c02f2d]"
                        />

                        <span>
                          <span className="flex items-center gap-2 text-sm font-bold text-slate-800">
                            <AlertCircle className="h-4 w-4 text-[#c02f2d]" />
                            This is an urgent service request
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-slate-500">
                            Select this if you are experiencing an active
                            backup, severe blockage, or another time-sensitive
                            issue.
                          </span>
                        </span>
                      </label>

                      {/* ================================================== */}
                      {/* SUBMIT */}
                      {/* ================================================== */}

                      <div className="border-t border-slate-100 pt-6">
                        <button
                          type="submit"
                          className="group flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#c02f2d] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(192,47,45,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a92523] hover:shadow-[0_15px_35px_rgba(192,47,45,0.25)] active:translate-y-0"
                        >
                          Request Service
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] leading-4 text-slate-400 sm:text-[11px]">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          Your information is only used to respond to your
                          service request.
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* LEFT INFORMATION - SECOND ON MOBILE */}
          {/* ================================================== */}

          <div className="order-2 space-y-6 lg:order-1">
            {/* Emergency Card */}
            <div className="relative overflow-hidden rounded-2xl bg-[#014484] p-7 text-white shadow-[0_18px_50px_rgba(1,68,132,0.16)] sm:p-8">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/[0.05]" />

              <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-white/[0.04]" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">
                      Need Immediate Help?
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Emergency drain &amp; sewer service
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <h3 className="text-2xl font-bold tracking-tight">
                  24/7 Emergency Response
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                  For active sewer backups, severe drain blockages, or urgent
                  line problems, call our team for priority assistance.
                </p>

                <a
                  href="tel:2018819622"
                  className="mt-7 flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 text-[#014484] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#014484]/[0.07]">
                      <Phone className="h-4 w-4" />
                    </span>

                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Call Dispatch
                      </span>

                      <span className="mt-0.5 block text-sm font-bold">
                        (201) 881-9622
                      </span>
                    </span>
                  </span>

                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.045)] sm:p-7">
              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c02f2d]">
                  Why Choose Us
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#014484]">
                  Professional service from start to finish
                </h3>
              </div>

              <div className="space-y-5">
                {credentials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#014484]/[0.07] text-[#014484]">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-800">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.045)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c02f2d]/[0.07] text-[#c02f2d]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Have a Question?
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#014484]">
                    Email our team
                  </p>
                </div>
              </div>

              <a
                href="mailto:info@drainsolutionsplus.com"
                className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-semibold text-[#014484] transition-colors hover:text-[#c02f2d]"
              >
                <Mail className="h-4 w-4" />
                info@drainsolutionsplus.com
              </a>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* BOTTOM TRUST STRIP */}
        {/* ================================================== */}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm sm:mt-10 sm:px-7">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <p className="text-xs leading-5 text-slate-500 sm:text-sm">
              <span className="font-bold text-slate-700">
                Ready when you need us.
              </span>{" "}
              Submit your service request and our team will review the details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}