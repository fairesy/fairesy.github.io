---
title: Facebook 담벼락 카운팅 놀이(1) : Facebook SDK 설정   
updated: 2016-03-26 12:03
tags: sososimim facebook graph api 
---

### Facebook SDK for Javascript
별도의 파일을 다운로드 할 필요 없이 SDK가 필요한 부분에 다음 코드를 추가해서 바로 쓴다.

```javascript
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '내가 만든 Facebook App Id',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

이 스크립트 하나가 SDK를 불러오고, 제일 기본적인 세팅값으로 초기화하는 것까지 알아서 해결해준다. `'내가 만든 Facebook App Id'`부분에 [App Dashboard](https://developers.facebook.com/apps)에서 확인한 ID를 적으면 끝!!~~(굉장하군....저 15줄따위가.....)~~

### Graph API를 불러오자 
Graph API를 사용해서 뭔가 불러오거나, 글을 쓴다거나 하는 일들을 시키려면 `FB.api()`를 사용한다. 아까 SDK를 불러오기 위해 사용했던 `FB.init()`안에 정의한 `version` 파라미터의 값으로 쓰인 게, 사용하고자 하는 Graph API의 버전을 지정해주는 부분이다.    

담벼락에 글을 쓸 수 있도록 해보자. 먼저 publish_actions을 수행할 수 있도록 허락을 얻어야 한다. 그니까, 로그인을 하면 된다. `FB.login()`이 필요한 허락을 얻어다 준다. 

```javascript
<script>
// Only works after `FB.init` is called
function myFacebookLogin() {
  FB.login(function(){}, {scope: 'publish_actions'});
}
</script>
<button onclick="myFacebookLogin()">Login with Facebook</button>
```

여기에 Graph API를 불러서 일을 시키는 코드를 추가한다.

```javascript
FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
```

담벼락에 message 부분에 적은 **"Hello, world"**가 게시된다. ~~그놈의 Hello, world....~~  

출처 : [Facebook for developers](https://developers.facebook.com/docs/javascript/examples)
