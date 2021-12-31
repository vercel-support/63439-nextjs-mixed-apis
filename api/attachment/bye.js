export default function handler(req, res) {
  res.status(200).json({ name: 'Bye John Doe', path: '/api/attachment/bye.js' })
}
