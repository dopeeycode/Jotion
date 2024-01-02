import 'dotenv/config'
import { z } from 'zod'

const envShema = z.object({
  NEXT_PUBLIC_CONVEX_URL: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
})

const _env = envShema.safeParse(process.env)

if (_env.success === false) {
  console.error('😢 Invalid environment variables!', _env.error.format())

  throw new Error('😢 Invalid environment variables!')
}

export const env = _env.data
