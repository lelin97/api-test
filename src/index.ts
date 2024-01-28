import { server } from "./server/server";

server.listen(process.env.PORT, () => {
  console.log(`App running ${process.env.PORT}`);
});
