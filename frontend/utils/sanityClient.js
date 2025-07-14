import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'n4crhqi8',    // your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-07-01',          // use a fixed date for caching
  useCdn: true,
})
