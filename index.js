document.getElementById("mybutton").onclick = function(){

    const visabtn = document.getElementById("visabtn")
    const mastercard = document.getElementById("mastercard")
    const pix = document.getElementById("pix")

    if(visabtn.checked){
        console.log("You are paying with visa");
    }
    else if(mastercard.checked){
        console.log("You are paying with mastercard")
    }
    else if(pix.checked){
        console.log("You are paying with pix")
    }
    else{
        console.log("You must select something")
    }
}