
function MyFunctions() {
    
    function fncSumarUno(numero, fcnResultadoCallBack){
        setTimeout(function(){
            fcnResultadoCallBack(numero +1);
        },800);
    }
    
    console.log("Programa de Funciones");
 
    fncSumarUno(5, function(nuevoValor1){
        fncSumarUno(nuevoValor1, function(nuevoValor2){
            fncSumarUno(nuevoValor2, function(nuevoValor3){
                console.log("Resultado:", nuevoValor3);
            });
        });
    });
    
    return (
        <>
            <div>
                <h1>Programa de Funciones</h1>
            </div>
        </>
    );
};

export default MyFunctions;
