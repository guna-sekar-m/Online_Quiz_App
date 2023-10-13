/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js','jsx'],
    reactStrictMode: false,

    compiler: {
        styledComponents: true,
    },
    images: {
      domains: ['localhost'],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: true,
          },
          {
            source: '/admin',
            destination: '/admin/dashboard',
            permanent: true,
          },
        ]
      },
      env: {
        LOCALSTORAGE_KEY:'quizapptoken',
        IMAGE_PATH:'http://localhost:5000'
      },

      
}

module.exports = nextConfig
