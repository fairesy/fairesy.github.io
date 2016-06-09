
var Canvas = function(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = width;
	this.canvas.height = height;
	this.context = this.canvas.getContext("2d");
}

Canvas.prototype.createFromFile = function(path, parentNode){
    var ctx = this.context;
    var img = new Image();
    img.src = path;
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 400, 300);
        testRun();
    }
    parentNode.appendChild(this.canvas);
}

var Filter = function(ctx, data){
    this.context = ctx;
    this.imageData = data;
    this.pixelData = this.imageData.data;
    this.numPixels = this.imageData.width * this.imageData.height;
    this.r, this.g, this.b;
}

Filter.prototype.invert = function(){
    for(var i=0; i<this.numPixels; i++){
        r = this.pixelData[i*4];
        g = this.pixelData[i*4+1];
        b = this.pixelData[i*4+2];
        
        this.pixelData[i*4] = 255 - r;
        this.pixelData[i*4+1] = 255 - g;
        this.pixelData[i*4+2] = 255 - b;
    }
    this.context.putImageData(this.imageData, 0, 0);
}

Filter.prototype.grayscale = function(){
    for(var i=0; i<this.numPixels; i++){
        r = this.pixelData[i*4];
        g = this.pixelData[i*4+1];
        b = this.pixelData[i*4+2];
        
        this.pixelData[i*4] = this.pixelData[i*4+1] = this.pixelData[i*4+2] = (r+g+b)/3;
    }
    this.context.putImageData(this.imageData, 0, 0);
}

Filter.prototype.sepia = function(){
    for(var i=0; i<this.numPixels; i++){
        r = this.pixelData[i*4];
        g = this.pixelData[i*4+1];
        b = this.pixelData[i*4+2];

        this.pixelData[i*4] = r*0.393 + g*0.769 + b*0.189;
        this.pixelData[i*4+1] = r*0.349 + g*0.686 + b*0.168;
        this.pixelData[i*4+2] = r*0.272 + g*0.534 + b*0.131;
    }
    this.context.putImageData(this.imageData, 0, 0);
}

Filter.prototype.brightness = function(offset){
    for(var i=0; i<this.numPixels; i++){
        r = this.pixelData[i*4];
        g = this.pixelData[i*4+1];
        b = this.pixelData[i*4+2];
        
        this.pixelData[i*4] = offset*r;
        this.pixelData[i*4+1] = offset*g;
        this.pixelData[i*4+2] = offset*b;
    }
    this.context.putImageData(this.imageData, 0, 0);
}
          
function testRun(){
    var currentCanvas = document.getElementById("canvasWrapper").lastChild;
    var currentContext = currentCanvas.getContext("2d");
    var currentImgData = currentContext.getImageData(0,0,currentCanvas.width, currentCanvas.height);

    var filterButtons = document.querySelectorAll(".filter");
    var filter = new Filter(currentContext, currentImgData);
    filterButtons[0].addEventListener("click", filter.invert.bind(filter), false);
    filterButtons[1].addEventListener("click", filter.grayscale.bind(filter), false);
    filterButtons[2].addEventListener("click", filter.sepia.bind(filter), false);
    filterButtons[3].addEventListener("click", filter.brightness.bind(filter,1.5), false);
    filterButtons[4].addEventListener("click", filter.brightness.bind(filter,0.5), false);
}
