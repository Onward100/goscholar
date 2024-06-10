
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '8or71iga',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-10-14'
});
