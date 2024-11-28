import { jsxRenderer } from "hono/jsx-renderer";

export const RootHtml = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="EEFAN"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio</title>
        <script src="/static/js/htmx.2.0.1.js"></script>
        <link rel="stylesheet" href="/static/tailwind.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inter:wght@100..900&family=Poppins:ital,wght@0,300;0,400;0,700;1,700&family=Titillium+Web:ital,wght@0,300;0,400;0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div hx-boost="true">
          {children}
        </div>
      </body>
    </html>
  )
})