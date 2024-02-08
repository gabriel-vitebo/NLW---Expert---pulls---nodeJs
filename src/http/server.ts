import { app } from "./app";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

app.register(createPoll)
app.register(getPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running on Port 3333')
})