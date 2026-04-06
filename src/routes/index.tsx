import { Context } from "hono";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Experience } from "../components/Experience";

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Experience />
      </main>
    </div>
  )
}
