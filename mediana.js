function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(listaNums) {
    // Ordeno la lista de menor a mayor
    listaNums.sort(function(a, b) {
        return a - b;
    })

    const mitadLista = parseInt(listaNums.length / 2);
    let mediana;

    if (esPar(listaNums.length)) {
        const elemento1 = listaNums[mitadLista - 1];
        const elemento2 = listaNums[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = listaNums[mitadLista];
    }

    return mediana;
}


function ordenarListas(lista) {
    let a1;
    let a2;

    for (let v = 0; v < lista.length; v++) {
        for (let i = 0; i < lista.length; i++) {
            a1 = lista[i];
            a2 = lista[i + 1];

            if (a1 > a2) {
                lista[i] = a2;
                lista[i + 1] = a1;
            }
        }
    }

    return lista;
}