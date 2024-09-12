function MyFetchAPIs() {
    // Definición de un objeto
    let usuario = {
        nombre: 'Aitana',
        edad: 25
    }

    // Uso de la función fetch para hacer una petición POST a una API
    fetch('https://reqres.in/', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json' // Especifica que el contenido es JSON
        }
    })
    .then(resp => resp.json()) 
    .then(console.log) 
    .catch(error => { 
        console.log('Error en la petición API POST'); 
        console.log(error); 
    });

    return (
        <>
            <div>
                <h1>
                    Fundamentos de Promesas y Fetch
                </h1>
            </div>
        </>
    );
};

export default MyFetchAPIs;
