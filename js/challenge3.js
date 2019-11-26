

$("#ch3form").submit(function(){
    var fruit = $("input[name='fruit']")
    var grade = $("input[name='standing']")
    console.log(fruit)
    console.log(grade)
    
    if(grade.is(':checked') && fruit.is(':checked'))
        return true;
    
    console.log("not both is checked")
    alert("You must pick both");
    return false;
} );
   