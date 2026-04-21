import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connection } from './connectDB.js'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(3000, () => {
  console.log('web server listening on port 3000')
})