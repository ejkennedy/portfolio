import { Context } from "hono";

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="h-screen w-full">
      <div class="flex flex-col justify-center items-center w-full h-full text-turquoise font-mono">Hi, my name is</div>
    </div>
  )
}