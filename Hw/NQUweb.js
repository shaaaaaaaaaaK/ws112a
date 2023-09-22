import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
    ctx.response.body = `
    <html>
      <body>
        <p>輸入http://127.0.0.1:8000/nqu/</p>
        <p> 將取得金門大學網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/nqu/csie/</p>
        <p> 將取得金門大學資工系網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/</p>
        <p> 將直接進入金門大學網站</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/csie/</p>
        <p> 將直接進入金門大學資工系網站</p>      
      </body>
    </html>`
    if(ctx.request.url.pathname==="/nqu/"){
        ctx.response.body=`
        <html>
      <body>
        <p>輸入http://127.0.0.1:8000/nqu/</p>
        <p> 將取得金門大學網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/nqu/csie/</p>
        <p> 將取得金門大學資工系網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/</p>
        <p> 將直接進入金門大學網站</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/csie/</p>
        <p> 將直接進入金門大學資工系網站</p>
        <a href="https://www.nqu.edu.tw/">金門大學</a>
      </body>
    </html>`
    }
    else if(ctx.request.url.pathname==="/nqu/csie/"){
        ctx.response.body=`
        <html>
      <body>
        <p>輸入http://127.0.0.1:8000/nqu/</p>
        <p> 將取得金門大學網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/nqu/csie/</p>
        <p> 將取得金門大學資工系網站的超連結</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/</p>
        <p> 將直接進入金門大學網站</p>
        <p> 輸入http://127.0.0.1:8000/to/nqu/csie/</p>
        <p> 將直接進入金門大學資工系網站</p>
        <a href="https://csie.nqu.edu.tw/">金門大學資工系</a>
      </body>
    </html>`
    }
    else if(ctx.request.url.pathname==="/to/nqu/"){
        ctx.response.body=
        ctx.response.redirect('https://www.nqu.edu.tw/')
    }
    else if(ctx.request.url.pathname==="/to/nqu/csie/"){
        ctx.response.body=
        ctx.response.redirect('https://csie.nqu.edu.tw/')
    }
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
