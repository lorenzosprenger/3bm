let image = document.getElementById( "image" );

image.addEventListener("mouseenter", function(){
  image.src = "ligou.png";
});

image.addEventListener("mouseleave", function(){
  image.src = "desligou.png";
});