//Navbar

$(document).ready(function () {
  $(".navigation__item").click(function() {
    $(".navigation__checkbox").prop('checked', false);
    })
  });

 
//Loader




//Videos
window.onload = function(){
  let iceland = document.getElementById("iceland"),
      georgia = document.getElementById("georgia"),
      poland = document.getElementById("poland")
      playIceland = document.getElementById("play-1");
      playGeorgia = document.getElementById("play-2");
      playPoland = document.getElementById("play-3");
      stopIceland = document.getElementById("stop-1");
      stopGeorgia = document.getElementById("stop-2");
      stopPoland = document.getElementById("stop-3");

  stopIceland.addEventListener("click", function() {
    iceland.pause();
    
  })
  stopGeorgia.addEventListener("click", function() {
    georgia.pause();
    
  })
  stopPoland.addEventListener("click", function() {
    poland.pause();
    
  })

  playIceland.addEventListener("click", function(){
    iceland.currentTime = 0;
    iceland.play();
  });

  playGeorgia.addEventListener("click", function(){
    georgia.currentTime = 0;
    georgia.play();
  });

  playPoland.addEventListener("click", function(){
    poland.currentTime = 0;
    poland.play();  
  });

  
}
