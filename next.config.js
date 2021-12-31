module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/api/download/:id',
          destination: '/pages/api/download/[id].js',
        },
      ]
    }
  },
}
