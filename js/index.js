document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('buttonText');
    boton.addEventListener("click", function(){
        let datos = document.getElementById('inputText').value;
        localStorage.setItem("dato", datos)
    })  
});
