---
title: 인쇄 버튼 만들기   
updated: 2016-04-19 17:13
tags: css print 
---

### '인쇄'버튼을 만들어보자 
인쇄를 위한 css를 따로 만들 수 있다는 걸 최근에 처음 알았다. 
그러면 인쇄하는 동작은 어떻게 실행시키지?? 
뭐..인터넷 옵션에 인쇄라거나, ctrl/cmd + p 를 누른다거나 하는 식으로 할 수 있지만....그래도 인쇄 버튼이 떡하니 있으면 편하지 않나.     

cmd + p 키를 누른 것처럼 simulating key event니 뭐니 하는 걸로 검색해봤는데, 사실은 훨씬 간단했다. 

일단 인쇄를 위한 css는 다음과 같이 넣어준다. 
<pre><code class="language-html">
<link rel="stylesheet" href="../../stylesheets/coloringpageprint.css" type="text/css" media="print" />
</code></pre>

**media="print"** 부분이, 인쇄할 경우에 이 css를 사용하도록 해준다.

다음은 인쇄 버튼.
```html
<a href="javascript:window.print()"><button id="print-button">인쇄하기</button></a>
```
<a href="javascript:window.print()"><button style="posirion:relative;margin:0 auto;width:200px;height:45px;background-color:rgb(200,200,200);font-size:15px;cursor:pointer;border-radius:5px;">인쇄하기</button></a>

이렇게 만든 버튼을 클릭하면 '인쇄'를 클릭한 것과 같은 인쇄 옵션 창이 뜬다.    

인쇄버튼은 인쇄되지 않도록 하기 위해 print CSS에서 `#print-button`가 보이지 않도록 수정한다!
<pre><code class="language-css">
#print-button{
  display : none;
}
</code></pre>    


### 참고 링크 
[Quick Tip: Making a ‘Print This Page’ Button](https://css-tricks.com/quick-tip-making-a-print-this-page-button/)
