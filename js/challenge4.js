

$("#ch4form").submit(function(){
    var validInput = true;
    if ($("#fullname").val().length == 0){
        console.log("no name inputed")
        $("#nameerrormsg").css("display", "block")
        validInput = false;
    }
    else {
        console.log("name inputed")
        console.log("name inputed")
        $("#nameerrormsg").css("display", "none")
    }
    if ($("#streetaddr").val().length == 0){
        console.log("no address inputed")
        $("#addrerrormsg").css("display", "block")
        validInput = false;
        }
    else {
        console.log("address inputed")
        $("#addrerrormsg").css("display", "none")
    }

    return validInput;
       
        
    });
    

