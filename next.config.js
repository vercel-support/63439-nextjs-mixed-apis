module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/api/download/:id',
          destination: '/api/download/[id]',
        },
      ]
    }
  },
}
