import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'n4crhqi8',    
  dataset: 'production',
  apiVersion: '2024-07-01',          
  useCdn: true,
})
