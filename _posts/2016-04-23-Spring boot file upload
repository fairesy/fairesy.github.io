---
title: Spring | Spring boot - jQuery File Upload를 사용한 파일 업로드 컨트롤러    
updated: 2016-04-23 17:00
tags: spring jquery file-upload 
---

## [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload) 라이브러리를 사용해서 파일 업로드 기능 구현하기 

### 1 설치하기

우리팀은 bower로 외부 라이브러리를 관리하기로 했으므로, bower를 통해 라이브러리를 설치한다.     
```
> bower install fileupload --save
```

### 2 적용하기 : frontend
설치했으면, [라이브러리 위키](https://github.com/blueimp/jQuery-File-Upload/wiki/Basic-plugin)의 샘플을 가지고 와서 테스트해본다. 

### 샘플 html

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>jQuery File Upload Example</title>
</head>
<body>
<input id="fileupload" type="file" name="files[]" data-url="server/php/" multiple>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/vendor/jquery.ui.widget.js"></script>
<script src="js/jquery.iframe-transport.js"></script>
<script src="js/jquery.fileupload.js"></script>
<script>
$(function () {
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
});
</script>
</body> 
</html>
```

여기에 쓰인 `script`들의 src를 변경해주어야 한다.      

일단 bower로 받아온 fileupload라이브러리는 **bower_components** 폴더 아래에 **blueimp-file-upload**로 들어와 있다.     

설치한 라이브러리는 프로젝트 내에 **src/main/resouces**/**static**/**lib**폴더로 가지고 와서 사용할 수 있다.     

[bower-installer](https://github.com/blittle/bower-installer)라는 도구를 사용하여 프로젝트 루트에서 `bower-installer` 명령을 실행하면, bower dependency가 `static/lib` 폴더로 설치됩니다.

이 안에 들어있는 것들 중에서 필요한 js파일들을 프로젝트 **src/main/resouces**/**static**/**lib** 로 복사해온다.  
```
//bower.json
"install": {
    "path": "src/main/resources/static/lib",
    "sources": {
      "blueimp-file-upload": ["bower_components/blueimp-file-upload/js/jquery.fileupload.js",
      "bower_components/blueimp-file-upload/js/jquery.iframe-transport.js",
      "bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js"
      ]
    }
  }
```

```
src/main/resouces
|_static
  |_lib
    |_blueimp-file-upload
      |_jquery.fileupload.js
      |_jquery.iframe-transport.js
      |_jquery.ui.widget.js
```

그리고 타임리프 문법에 맞춰서 스크립트 파일들의 src를 변경해준다.     
```html
<script th:src="@{/lib/blueimp-file-upload/jquery.ui.widget.js}"></script>
<script th:src="@{/lib/blueimp-file-upload/jquery.iframe-transport.js}"></script>
<script th:src="@{/lib/blueimp-file-upload/jquery.fileupload.js}"></script>
```

#### 파일 업로드 요청을 보낼 url 설정 
- 샘플 html에 있는 그대로 input[type="file"]에 **data-url**로 설정하거나,    

  ```html
  <input id="fileupload" type="file" name="files[]" data-url="/upload" multiple>
  ```
- jQuery로 요청을 보내는 부분에서 **url**옵션으로 설정할 수 있다.     

  ```javascript
  $('#fileupload').fileupload({
      url: '/upload', //파일 업로드 요청을 받아줄 곳 
      //다른 옵션들 
  });
  ```

#### 프로젝트 코드 
```html
<input id="fileupload" type="file" name="files[]" multiple>
```

<pre class="language-javascript"><code>
$(function () {
	    $('#fileupload').fileupload({
	    	url: 'uploads',
	        dataType: 'json',
	       	singleFileUploads: false,
	        done: function (e, data) {
	            console.log(data);
	        }
	    });
	});
</code></pre>
  - **singleFileUploads : false**    
  라이브러리에서 **sigleFileUploads**라는 옵션을 dafault **true**로 세팅해두었다. 이러면 파일 여러개를 보낼 때 파일 하나마다 새로운 요청을 보내게 된다. 즉, 사진 4장을 업로드하면 /uploads에 4번 각각 요청을 보닌다. 한 번에 여러 파일을 받으려면 옵션값을 **false**로 바꿔준다. 

### 3 적용하기 : backend(Controller)

#### jQuery File Upload는 서버에 **Multipartfile**을 던져주고, **JSON**으로 응답해주기를 바란다. 

그러니까, 이런 형태의 응답을 기대한단다. ~~(다른 형식으로 응답받을 수 있는건진 자세히 안봤..)~~
```json
{"files": [
  {
    "name": "picture1.jpg",
    "size": 902604,
    "url": "http:\/\/example.org\/files\/picture1.jpg",
    "thumbnailUrl": "http:\/\/example.org\/files\/thumbnail\/picture1.jpg",
    "deleteUrl": "http:\/\/example.org\/files\/picture1.jpg",
    "deleteType": "DELETE"
  },
  {
    "name": "picture2.jpg",
    "size": 841946,
    "url": "http:\/\/example.org\/files\/picture2.jpg",
    "thumbnailUrl": "http:\/\/example.org\/files\/thumbnail\/picture2.jpg",
    "deleteUrl": "http:\/\/example.org\/files\/picture2.jpg",
    "deleteType": "DELETE"
  }
]}
```

이를 위해 컨트롤러는 이런 모양새가 된다. 
<pre class="language-java"><code>
@RequestMapping(value="/works/uploads", method = RequestMethod.POST)
  public @ResponseBody Map<String, List<Object>> uploads(
                  @RequestParam("files[]") List<MultipartFile> files){

  //클라이언트가 보내준 MultipartFile 리스트를 순회하면서
  //기대하는 응답값의 형태로 만들어준다. -> @ResponseBody + Map
  return result;
}
</code></pre>
