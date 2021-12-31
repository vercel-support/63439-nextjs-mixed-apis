module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/download/:id',
        destination: 'https://nask.hk/',
      },
    ]
  },
}
