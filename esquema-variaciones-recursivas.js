const variacionesRecursivas = (totalDeVariaciones, material, variacionActual = 1) => 
    variacionActual === totalDeVariaciones
        ? material//si ya tenemos todas las variaciones necesarias devolvemos el resultado
        : material.concat(//si aun no tenemos las variaciones requeridas generamos la siguiente variación y la concatenamos
            variacionesRecursivas(
                totalDeVariaciones,
                [`Variacion ${variacionActual}, usando ${material} mas "Material Nuevo" de la variación ${variacionActual},`],
                variacionActual+ 1, 
            )
        )

a = variacionesRecursivas(6, ["Material Inicial"])
a


const serieArmonica = (armonicoInicial, armonicoFinal, listaDeArmonicos = []) => 
    armonicoInicial === armonicoFinal //sólo lo necesitamos para evitar que la lista crezca al infinito
        ? listaDeArmonicos.concat(armonicoInicial)
        : serieArmonica(armonicoInicial + 1, armonicoFinal, listaDeArmonicos.concat(armonicoInicial))



b = serieArmonica(1, 5)
b
