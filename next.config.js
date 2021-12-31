module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/download/:id',
          destination: '/api/attachment/[id].js',
        },
      ]
    }
  },
}
