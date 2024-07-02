import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productsRoute } from './app/modules/products/product.route'
const app : Application = express()



// parsers
app.use(express.json())
app.use(cors())



app.post('/api/products', productsRoute);

// will call a getAController
const getAcontroller = (req:Request, res:Response) => {
  const a =10;
  res.send(a)
}

app.get('/', getAcontroller)

// console.log(process.cwd())
export default app;