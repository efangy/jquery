
$("#useBilling").click(function() {
    
    if(this.checked) {
        console.log("true");
        $("#home").val($("#billing").val())
        $("#home").prop('disabled', true)
        
    }
    else {
        console.log("false");
        $("#home").val("")
        $("#home").prop('disabled', false);  
        
    }
});

