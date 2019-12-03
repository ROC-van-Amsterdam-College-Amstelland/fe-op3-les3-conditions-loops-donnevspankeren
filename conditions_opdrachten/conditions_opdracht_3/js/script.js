//javascript code
function myFunction(){
    var Saldo = parseInt(document.getElementById("saldo").value);
    
    if (Saldo == 500){
        alert(" Uw salaris is gestort.")
    }  else if ( Saldo >= 500){
        alert("U salaris is gestort en U heeft een bonus gekregen!")
    } else {
        alert("U salaris is nog niet gestort.")
    }
}