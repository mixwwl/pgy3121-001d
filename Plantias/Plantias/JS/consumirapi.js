consumirApi();
function consumirApi(){
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
        console.log("Informacion API ", data);
        let dolar = document.getElementById("dolar",data);
        dolar.innerHTML += data.dolar.valor;
    })
}

