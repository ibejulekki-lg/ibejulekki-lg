import { defineCliConfig } from 'sanity/cli'

/* CLI project context so commands like `npx sanity dataset export` work
   both locally and inside the GitHub Actions backup workflow. The project
   id is public information (it already ships to every browser). */

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sgw7lo2z',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
})
