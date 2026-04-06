import { Context } from "hono";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}
