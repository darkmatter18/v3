import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arkadip',
    short_name: 'Arkadip',
    description: 'Arkadip\'s Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#112240',
    theme_color: '#9254C8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}