import express from 'express'

const app: express.Application = express()
const port: number = Number(process.env.PORT) || 3001

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})

app.listen(port, (err: Error) => {
  if (err) {
    console.error(err)
  } else {
    console.log('NODE_ENV =', process.env.NODE_ENV)
  }
})
