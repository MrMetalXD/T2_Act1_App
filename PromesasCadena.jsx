
function MyPromises() {
    function fcnSumarUno(numero) {
        var promesa = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(numero + 1); 
            }, 800);
        });
        return promesa; 
    }

   
    function fcnSumarUno(numero) {
        var promesa = new Promise(function(resolve, reject) {
            if (numero >= 7) {
                reject('El numero ya es muy alto');
            }
            setTimeout(function() {
                resolve(numero + 1);
            }, 800);
        });
        return promesa;
    };

    fcnSumarUno(5)
        .then(fcnSumarUno)
        .then(fcnSumarUno)
        .then(nuevoNumero => {
            console.log("Resultado:", nuevoNumero);
        })
        .catch(error => {
            console.log("Error en la promesa", error);
        });

    fcnSumarUno(5)
        .then(fcnSumarUno)
        .then(fcnSumarUno)
        .then(nuevoNumero => {
            console.log("Resultado:", nuevoNumero); // Imprime el resultado final.
        });

    fcnSumarUno(5).then(nuevoNumero => {
        console.log("Resultado:", nuevoNumero); 
        return fcnSumarUno(nuevoNumero); 
    }).then(nuevoNumero => {
        console.log("Resultado:", nuevoNumero); 
        return fcnSumarUno(nuevoNumero); 
    }).then(nuevoNumero => {
        console.log("Resultado:", nuevoNumero); 
        return fcnSumarUno(nuevoNumero); 
    });

    fcnSumarUno(5).then(nuevoNumero => {
        console.log(nuevoNumero); 
    });

  
    fcnSumarUno(5).then(function(nuevoNumero) {
        console.log(nuevoNumero); 
    });

    return (
        <>
            <div>
                <h1>Programa de Funciones</h1>
            </div>
        </>
    );
}

export default MyPromises;
