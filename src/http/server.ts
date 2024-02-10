import { app } from "./app";

import cookie from "@fastify/cookie";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { env } from "../env";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";

app.register(cookie, {
  secret: env.COOKIE_SECRET,
  hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP Server Running on Port ${env.PORT}`)
})