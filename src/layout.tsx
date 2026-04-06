import { jsxRenderer } from "hono/jsx-renderer";

export const RootHtml = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Ethan Kennedy — Software Engineer & AI Engineer. Building across applied ML, generative audio, and full-stack products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ethan Kennedy</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/static/tailwind.css" />

        <script type="importmap" dangerouslySetInnerHTML={{ __html: `{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
  }
}` }} />
      </head>
      <body class="bg-bg text-primary font-sans antialiased">
        <div hx-boost="true">
          {children}
        </div>
        <script src="/static/js/htmx.2.0.1.js" defer />
        <script type="module" src="/static/js/hero-animation.js" defer />
        <script type="module" src="/static/js/scroll-animations.js" defer />
      </body>
    </html>
  )
})
