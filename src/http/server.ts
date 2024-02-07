import { app } from "./app";
import { createPoll } from "./routes/create-poll";

app.register(createPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running on Port 3333')
})