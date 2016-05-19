---
title: svg_animation
date: 2016-04-28 21:07
tag: svg animation
---

### SVG가 이미지(png,jpg,etc.)보다 좋은 이유 

1 SVG는 압축률이 좋다.    
같은 이미지여도 SVG형식으로 저장된 이미지는 jpg/png보다 용량이 작다. 

2 SVG는 어떤 해상도에서도 깨지지 않는다.    
해상도마다 다르게 대응해야 하는 이미지와 달리, 어떤 화면 크기에서든 깨지지 않고 적용할 수 있다. 데스크탑이든, 모바일이든 뭐든.

3 SVG는 각각의 요소를 일일히 컨트롤 할 수 있다.(Javascript와 CSS를 사용해서 가능하다)

### SVG Animation 
jQuery, CSS 둘 다 
SVG-specific styling properties(positional&dimensional properties)를 벽히 지원하지는 않고 있다. 게다가 CSS transition은 IE9에서의 svg animation을 지원하지 않으며 **transform** 은 IE의 어떤 버전에서도 사용할 수 없다.     

따라서 SVG 엘리먼트를 움직이고 싶다면, SVG를 조작하는 전용 라이브러리를 사용하거나 SVG를 지원하는 Javascript animation 라이브러리를 사용해야 한다.     

이를 위해 가장 널리 쓰이는 SVG 전용 라이브러리는 [Snap.svg](http://snapsvg.io/), Javascript animation 라이브러리로는 [Velocity.js](http://velocityjs.org/)가 있다. 

**Velocity.js** 가 강력한 cross-browser SVG를 지원하면서도 가볍고, 게다가 웹 애니메이션을 포함하는 프로젝트라면 이미 사용하고 있을 확률이 높으므로 이 글에서는 이를 사용하여 이야기를 이어나가도록 하겠다. 

Velocity.js는 SVG엘리먼트에 적용될 경우 알아서 SVG임을 알아채고, SVG관련 속성을 적용해준다.(~~똑똑한 녀석~~)

### SVG Styling



### Positional Attributes vs. CSS Transforms
**x/cx**, **y/cy** 를 쓰는 것과 **CSS transform** 을 쓰는 것이 어떻게 다를까?(translateX, translateY를 쓰는 것과 똑같은 거 아닌가?) 하는 의문이 생길 수 있다. 답은 **브라우저 지원 browser support** 에 있다. IE(심지어 IE11에서조차도)에서는 SVG엘리먼트에 대해서 CSS transform을 지원하지 않고 있다. 

 As for the topic of hardware acceleration, all browsers (including IE) hardware-accelerate positional attributes by default -- so, when it comes to SVG animation performance, attributes are equivalent to CSS properties.

 ```javascript
 // The x and y attributes work everywhere that SVG elements do (IE8+, Android 3+)
 $("rect").velocity({ x: 100, y: 100 });

 // Alternatively, positional transforms (such as *translateX* and *translateY*) work everywhere EXCEPT IE
 $("rect").velocity({ translateX: 100, translateY: 100 });
 ```

### Diving Deeper
이 글을 통해 SVG를 맛보았다면, 이제 [MDN's SVG guide](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial) 글을 통해 SVG에 대해 보다 상세하게 배워보자. 

### 참고 링크
[The Simple Intro to SVG Animation](https://davidwalsh.name/svg-animation)    
[Working with SVG](http://www.sitepoint.com/designers-guide-working-with-svg/)

