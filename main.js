var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
		{
			fabric.image.fromURL('Birthday.jpg', function(IMG){
			block_image_object = Img;
			block_image_object.scaleToWidth(700);
			block_image_object.scaleToHeight(500);
			block_image_object.set({
				top:0,
				left:0,
			});
			cannvas.add(block_image_object);
			});
		}

function playSound(){
    x.play();
}
