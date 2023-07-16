import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion:'2023-07-11',
  dataset:"production",
  projectId:"wqpzghk2",
  useCdn:false, 
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);