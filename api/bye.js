export default function handler(req, res) {
  res.status(200).json({ name: 'Bye John Doe', path: '/api/bye.js' })
}
