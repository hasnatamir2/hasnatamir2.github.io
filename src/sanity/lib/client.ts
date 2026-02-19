import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // False for ISR - ensures fresh data on revalidation
  perspective: 'published', // Only fetch published content
  stega: {
    enabled: false, // Disable for production
  },
})

// Separate client for draft/preview mode (optional)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts', // Include draft content
  token: process.env.SANITY_API_READ_TOKEN,
})
