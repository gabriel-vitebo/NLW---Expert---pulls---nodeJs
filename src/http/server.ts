import { app } from "./app";

app.get('/hello', () => {
  return 'Hello NLW'
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running on Port 3333')
})