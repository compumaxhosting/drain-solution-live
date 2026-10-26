<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap | Drain Solutions Plus</title>
        <style>
          :root {
            color-scheme: light;
            font-family: Arial, Helvetica, sans-serif;
            background: #f5f5f4;
            color: #292524;
          }
          * { box-sizing: border-box; }
          body { margin: 0; }
          .hero {
            background: #014485;
            border-top: 6px solid #c02f2d;
            color: #fff;
            padding: 42px 24px;
          }
          .container { width: min(100% - 32px, 1080px); margin: 0 auto; }
          .eyebrow {
            color: #ffdf20;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: .18em;
            text-transform: uppercase;
          }
          h1 { margin: 12px 0 8px; font-size: clamp(30px, 5vw, 46px); }
          .intro { margin: 0; color: #dbeafe; line-height: 1.6; }
          main { padding: 34px 0 56px; }
          .summary { margin: 0 0 18px; color: #57534e; font-size: 14px; }
          .url-list {
            overflow: hidden;
            border: 1px solid #e7e5e4;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
          }
          .url {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 18px;
            align-items: center;
            padding: 18px 20px;
            border-bottom: 1px solid #e7e5e4;
          }
          .url:last-child { border-bottom: 0; }
          .url:nth-child(even) { background: #fafaf9; }
          a {
            color: #014485;
            font-weight: 700;
            line-height: 1.5;
            overflow-wrap: anywhere;
            text-decoration-color: rgb(192 47 45 / 45%);
            text-underline-offset: 3px;
          }
          a:hover { color: #c02f2d; }
          .details { color: #78716c; font-size: 12px; text-align: right; }
          .details span { display: block; margin-top: 4px; }
          footer {
            border-top: 1px solid #e7e5e4;
            color: #78716c;
            font-size: 12px;
            padding: 20px 0;
          }
          @media (max-width: 600px) {
            .hero { padding: 32px 0; }
            .container { width: min(100% - 24px, 1080px); }
            .url { grid-template-columns: 1fr; gap: 8px; padding: 15px; }
            .details { text-align: left; }
            .details span { display: inline; margin: 0 12px 0 0; }
          }
        </style>
      </head>
      <body>
        <header class="hero">
          <div class="container">
            <div class="eyebrow">Drain Solutions Plus</div>
            <h1>XML Sitemap</h1>
            <p class="intro">
              Pages currently available on the Drain Solutions Plus website.
            </p>
          </div>
        </header>
        <main class="container">
          <p class="summary">
            <xsl:value-of select="count(s:urlset/s:url)" /> URLs listed
          </p>
          <div class="url-list">
            <xsl:for-each select="s:urlset/s:url">
              <div class="url">
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="s:loc" />
                  </xsl:attribute>
                  <xsl:value-of select="s:loc" />
                </a>
                <div class="details">
                  <xsl:if test="s:lastmod">
                    <span>
                      Updated:
                      <xsl:text> </xsl:text>
                      <xsl:value-of select="s:lastmod" />
                    </span>
                  </xsl:if>
                  <xsl:if test="s:priority">
                    <span>
                      Priority:
                      <xsl:text> </xsl:text>
                      <xsl:value-of select="s:priority" />
                    </span>
                  </xsl:if>
                </div>
              </div>
            </xsl:for-each>
          </div>
        </main>
        <footer>
          <div class="container">
            This sitemap is formatted for viewing; search engines can read the
            original XML URL list.
          </div>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
