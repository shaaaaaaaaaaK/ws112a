import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
books.set("2", {
  id: "2",
  title: "The Old Man",
  author: "Lee Ear",
});
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/nqu", (context) => {
    ctx.response.body=`
    <html>
      <body>
        <a href="https://www.nqu.edu.tw/">金門大學</a>
      </body>
    </html>`
  })
  .get("/nqu/csie", (context) => {
    ctx.response.body=`
    <html>
      <body>
        <a href="https://csie.nqu.edu.tw/">金門大學資工系</a>
      </body>
    </html>`
  })
  .get("/to/nqu/csie", (context) => {
    ctx.response.body=
        ctx.response.redirect('https://csie.nqu.edu.tw/')
  })
  .get("/to/nqu", (context) => {
    ctx.response.body=
        ctx.response.redirect('https://www.nqu.edu.tw/')
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
