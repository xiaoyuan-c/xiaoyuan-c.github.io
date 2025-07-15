var posts=["2025/07/14/hello-world/","2025/07/13/Getting-Started-for-hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };