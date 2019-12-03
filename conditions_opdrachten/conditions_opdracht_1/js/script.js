//javascript code
function myFunction(){
    var Saldo = parseInt(document.getElementById("saldo").value);
    
    if (Saldo < 25){
        alert("niet genoeg saldo.")
    } else{
        alert("neem geld.")
    }
}