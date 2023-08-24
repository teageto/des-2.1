let mostrar = document.getElementById('data');
let dato = localStorage.getItem("dato");
mostrar.innerHTML =  `
    ${dato}
    `;