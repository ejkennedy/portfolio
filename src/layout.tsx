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
      </head>
      <body class="bg-background">
        <div hx-boost="true">
        
        
          <nav>
            <div class="flex flex-row m-5 text-pretty">
              <div class="mr-[30%]">
                <a href="/" alt="home" class=""><img></img></a>
              </div>
              <div class="flex flex-row justify-stretch">
                <div>
                  <a href="/about" class="flex flex-row text-turquoise mr-5">
                  01.<div class="text-blue-300">About</div>
                  </a>
                </div>
                <div>
                  <a href="/projects" class="flex flex-row text-turquoise mr-5">02.
                    <div class="text-blue-300">Projects</div>
                  </a>
                </div>
                <div>
                  <a href="/experience" class="flex flex-row text-turquoise mr-5">03.
                    <div class="text-blue-300">Experience</div>
                  </a>
                </div>
                <div>
                  <a href="/contact" class="flex flex-row text-turquoise mr-5">04.
                    <div class="text-blue-300">Contact</div>
                  </a>
                </div>
                <div>
                  <a href="/cv">
                    <div class="text-turquoise border border-spacing-9 border-turquoise p-2">My CV</div>
                  </a>
                </div>
              </div>
            </div>
            <span></span>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
})