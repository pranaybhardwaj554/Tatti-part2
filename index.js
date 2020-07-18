var a=[];
var b=[];
var color=["green","red","yellow","blue"];
var start=false;
$(".btn").click(function () {
    start=true;
    a=[];
    b=[];
    level();
    $(".btn").text("Reset");
    $(".btn").addClass("btn2");
    $(".btn").removeClass("btn");
  });
$(".btn1").click(function(){
  if(start){
    b.push($(this).attr("id"));
    if(a[b.length-1]==$(this).attr("id")){
      var p=this;
      $(this).addClass("pressed");
      setTimeout(function () {
        $(p).removeClass("pressed");
        }, 100);
      var audio = new Audio('sounds/'+$(this).attr("id")+'.mp3');
      audio.play();
      if(a.length==b.length){
        setTimeout(function () {
          level();
          }, 100);
        b=[];
      }
    }
    else{
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
        }, 100);
      $("h1").text("Game-over press Reset button to restart the game");
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();
      start=false;
      a=[];
      b=[];
    }
  }
});
function level() {
  $("h1").text("Level "+(a.length+1));
  sound();
}
function sound() {
  var x=Math.random();
  x=Math.floor(x*4);
  a.push(color[x]);
  $("."+color[x]).fadeOut(100).fadeIn(100);
  var audio = new Audio('sounds/'+color[x]+'.mp3');
  audio.play();
}
