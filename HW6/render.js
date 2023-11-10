export function layout(title, content) {
    return `
    <html>
    <head>
      <title>${title}</title>
      <style>
        body {
          padding: 80px;
          font: 16px Helvetica, Arial;
        }
    
        h1 {
          font-size: 2em;
        }
    
        h2 {
          font-size: 1.2em;
        }
    
        #posts {
          margin: 0;
          padding: 0;
        }
    
        #posts li {
          margin: 40px 0;
          padding: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
        }
    
        #posts li:last-child {
          border-bottom: none;
        }
    
        textarea {
          width: 500px;
          height: 300px;
        }
    
        input[type=text],input[type=password],
        textarea {
          border: 1px solid #eee;
          border-top-color: #ddd;
          border-left-color: #ddd;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
        }
    
        input[type=text],input[type=password] {
          width: 500px;
        }
      </style>
    </head>
    <body>
      <section id="content">
        ${content}
      </section>
    </body>
    </html>
    `
  }
  
  export function loginUi() {
    return layout('Login', `
<<<<<<< HEAD
    <h1>登入</h1>
    <form action="/login" method="post">
      <p><input type="text" placeholder="用戶名稱" name="username"></p>
      <p><input type="password" placeholder="密碼" name="password"></p>
      <p><input type="submit" value="登入"></p>
      <p>新用戶? <a href="/signup">建立新帳戶</p>
=======
    <h1>Login</h1>
    <form action="/login" method="post">
      <p><input type="text" placeholder="用戶名稱" name="username"></p>
      <p><input type="password" placeholder="密碼" name="password"></p>
      <p><input type="submit" value="Login"></p>
      <p>New user? <a href="/signup">Create an account</p>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    </form>
    `)
  }
  
  export function signupUi() {
    return layout('Signup', `
<<<<<<< HEAD
    <h1>註冊</h1>
=======
    <h1>Signup</h1>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    <form action="/signup" method="post">
      <p><input type="text" placeholder="用戶名稱" name="username"></p>
      <p><input type="password" placeholder="密碼" name="password"></p>
      <p><input type="text" placeholder="Email" name="email"></p>
<<<<<<< HEAD
      <p><input type="submit" value="註冊"></p>
=======
      <p><input type="submit" value="Signup"></p>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    </form>
    `)
  }
  
  export function success() {
    return layout('Success', `
    <h1>註冊成功!</h1>
<<<<<<< HEAD
    你可以 <a href="/">查看所有聯絡人</a> / <a href="/login">再次登入</a>!
=======
    You may <a href="/">read all Post</a> / <a href="/login">login</a> again !
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    `)
  }
  
  export function fail() {
    return layout('Fail', `
    <h1>Fail!</h1>
    You may <a href="/">read all Post</a> or <a href="JavaScript:window.history.back()">go back</a> !
    `)
  }
  
  export function list(posts, user) {
    console.log('list: user=', user)
    let list = []
    for (let post of posts) {
      list.push(`
      <li>
        <h2>${ post.title } -- by ${post.username}</h2>
<<<<<<< HEAD
        <p><a href="/post/${post.id}">查看聯絡人</a></p>
=======
        <p><a href="/post/${post.id}">Read post</a></p>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
      </li>
      `)
    }
    let content = `
<<<<<<< HEAD
    <h1>通訊錄</h1>
    <p>${(user==null)?'<a href="/login">登入</a> 來添加聯絡人!':'Welcome '+user.username+', You may <a href="/post/new">Create a Post</a> or <a href="/logout">Logout</a> !'}</p>
    <p>你有 <strong>${posts.length}</strong> 位聯絡人</p>
=======
    <h1>Posts</h1>
    <p>${(user==null)?'<a href="/login">Login</a> to Create a Post!':'Welcome '+user.username+', You may <a href="/post/new">Create a Post</a> or <a href="/logout">Logout</a> !'}</p>
    <p>There are <strong>${posts.length}</strong> posts!</p>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
  }
  
  export function newPost() {
    return layout('New Post', `
<<<<<<< HEAD
    <h1>新聯絡人</h1>
    <p>建立新聯絡人</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="姓名" name="title"></p>
      <p><textarea placeholder="電話" name="body"></textarea></p>
      <p><input type="submit" value="新增"></p>
=======
    <h1>New Post</h1>
    <p>Create a new post.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
>>>>>>> 964c9135fe2702c7eb8949c0f67f83b02a427ce0
    </form>
    `)
  }
  
  export function show(post) {
    return layout(post.title, `
      <h1>${post.title} -- by ${post.username}</h1>
      <p>${post.body}</p>
    `)
  }
  