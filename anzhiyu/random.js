var posts=["2025/07/13/Getting-Started-for-hexo/","2025/07/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };