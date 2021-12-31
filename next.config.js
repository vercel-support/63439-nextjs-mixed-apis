module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/download/:id*',
        destination: '/pages/api/download/:id*',
      },
    ]
  },
}
