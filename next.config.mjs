/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'asset.kompas.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'pokeapi.deno.dev',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'pokeapi.deno.dev/pokemon?limit=20',
            port: '',
            //pathname: '/account123/**',
          }
        ],
      },
};

export default nextConfig;
