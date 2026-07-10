import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '@/lib/sanity'

/* Server-only Sanity client with write access. Import this ONLY from API
   route handlers or other server code; the token must never reach the
   browser. Stub-safe: when the project id or token is missing, this is
   null and the API routes respond with a clear 503 instead of crashing. */

const token = process.env.SANITY_API_TOKEN

export const writeClient =
  projectId && token
    ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
    : null
