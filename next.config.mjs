/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.tsn.ua',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'www.edamam.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'static.vecteezy.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'edamam-product-images.s3.amazonaws.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
