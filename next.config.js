module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/download/:id',
          destination: '/api/attachment/[id].js',
        },
      ]
    }
  },
}
