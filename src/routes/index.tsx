import { Context } from "hono";

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="h-screen w-full bg-[#2E2E2E]">
      <h1 class="flex flex-col justify-center">Hello</h1>
      <div class="bg-base-100 w-10"></div>
    </div>
  )
}