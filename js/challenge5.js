console.log("here")
var msg = "Hover over an image below."
    
var imgs = $("img")
console.log(imgs)


imgs.each(function(){
  $(this).mouseover(function(){
      console.log("mouse over")
    $("#image").css("backgroundImage", "url('"+this.src+"')");
    $("#image").html(this.alt)
  })
    
  $(this).mouseout(function(){
      console.log("mouse out")
    $("#image").css("backgroundImage", "url('')");
	$("#image").html(msg);
  })
    

$(this).focusin(function(){
    console.log("focus in")
    $("#image").css("backgroundImage", "url('"+this.src+"')");
    $("#image").html(this.alt)
  })

	
$(this).blur(function(){
    console.log("blur")
    $("#image").css("backgroundImage", "url('')");
	$("#image").html(msg);
  });

})

