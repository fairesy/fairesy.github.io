---
title: "print CSS 맛보기"
updated: "2016-04-29 16:59"
tags: css layout print
---

[Tips and tricks for print style sheets](https://www.smashingmagazine.com/2013/03/tips-and-tricks-for-print-style-sheets/)의 번역본입니다.

### Design For Print, Not Screen

**@media print**     
프린트용 css는 미디어 쿼리를 사용한다.

```css
@media print{

}
```

그러니까 웹사이트를 프린트용으로 디자인하기 위해 CSS를 쌩으로 새로 만들 필요는 없다는 거다. 기본적으로는 그대로 쓰고, 인쇄를 위해 특별히 바뀌어야하는 부분만 `@media print`부분에 따로 명시해준다.

**color setting**    
대부분의 브라우저는 프린트를 하려고 할 때 알아서 흑백 대조를 시켜주지만, 혹시 모르니 색을 명확히 다시 정의해주는 것이 좋다. 그러니까 최소한 기본적인 프린트용 미디어 쿼리라면 다음과 같은 부분이 포함되게 된다.

```css
@media print {
   body {
      color: #000;
      background: #fff;
   }
}
```

**프린트되지 않을 부분들 숨기기**    
`display:none`은 프린트용 css를 만들 때 유용하게 쓰이는 친구다. 우리의 목적은 프린트 버전을 위해 완전히 새로운 css를 만들지 않아도 되도록 하는 것이므로, nav바나 background image같은 부분을 적절히 숨기는 작업이 필요하다.

```css
/* Default styles */

h1 {
   color: #fff;
   background: url(banner.jpg);
}

@media print {
   h1 {
      color: #000;
      background: none;
   }

   nav, aside {
      display: none;
   }
}
```

**CSS에서 cm 구경하기**    
print 버전을 위한 스타일시트를 만드는 건 CSS에서 cm나 inch같은 단위를 구경하는 매우 희귀한 작업이다.
스크린이 아니라 실제 인쇄물에 맞도록, CSS에게 이 컨텐츠들을 이제 종이에 맞추어야 하니 웹페이지에서 썼던 padding/margin같은 건 무시하라고 알려주기 위해 `@page`로 필요한 수치들을 명시해준다.

```css
@media print {
   h1 {
      color: #000;
      background: none;
   }

   nav, aside {
      display: none;
   }

   body, article {
      width: 100%;
      margin: 0;
      padding: 0;
   }

   @page {
      margin: 2cm;
   }
}
```

**컨텐츠가 싹둑 잘리지 않게**    
다양한 형태로 컨텐츠가 잘리지 않도록 처리해줄 필요가 있다.

* 텍스트가 잘리지 않도록,    

```css
h2, h3 {
   page-break-after: avoid;
}
```

* 이미지도,    

```css
img {
   max-width: 100% !important;
}
```

* 만약 어떤 부분부터는 새로운 페이지로 넘기고 싶다면,
(ex. article은 새로운 페이지에서 시작)   

```css
article {
   page-break-before: always;
}
```

* 리스트나 이미지 묶음이 페이지가 넘어가면서 중간에 잘리지 않게 하기 위해,    

```css
ul, img {
   page-break-inside: avoid;
}
```

이 외에도 필요에 따라 추가로 처리되어야할 부분이 많겠지만, 기본적으로는 이정도로 해도 충분할 듯 싶다.

### Force Background Images And Colors
background image는 숨기고 배경은 흰색을 기본으로 삼았지만, 어떤 사이트들은 배경색/배경이미지가 중요한 요소일 수 있다. 이 경우 `print-color-adjust`속성을 사용하여 사이트의 배경색/배경이미지를 그대로 출력할 수 있도록 설정할 수 있다. 다만 Webkit브라우저(Chrome,Safari)에서만 가능하고, Firefox, Opera, IE에서는 동작하지 않는다. + 이렇게 하는건 컬러프린터를 염두에 둔 것이므로, 별도의 미디어쿼리를 사용한다.    

```css
@media print and (color) {
   * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
   }
}
```

* Expand External Links For Print
* Print QR Codes For Easy URL References
* Use CSS3 Filters To Improve Print Quality

와 같은 항목이 추가로 포함된 글입니다. 이건 별로 볼 필요 없었어서...
