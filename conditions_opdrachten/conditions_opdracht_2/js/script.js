//javascript code
function myFunction(){
    var Saldo = parseInt(document.getElementById("saldo").value);
    
    if (Saldo >= 25){
        alert("Je hebt voldoende saldo om 25 euro op te nemen.")
    } else{
        alert("Sorry, je hebt te weinig saldo!")
    }
}