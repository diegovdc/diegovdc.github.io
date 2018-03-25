# 21 Nubes

> Charles Shere: ... Most of the people I’ve talked to seem to think that total serialisation was a historical necessity at one point, but is no longer viable.
>
> Morton Feldman: It’s a very interesting thing, you know, this whole business of historical necessity comes around only because there’s very little alternative... but once you go to indeterminate music, with all the new alternatives, what’s wrong with the total serialisation of these alternatives? 
>
> CS: Well, then what’s wrong with writing a piece in E Major?
>
> MF: I wouldn’t mind a piece in E Major, but they’re just not happy with just staying in that E Major.

<a href="http://www.cnvill.net/mfshere.pdf">Fuente</a>



## Nota al programa
En veintiún melodías, esbozo de una metáfora del momento, del crecimiento y de lo efímero. 

La primera melodía es un sonido, la segunda es de dos, la tercera lleva tres y así sucesivamente. 

El material melódico más característico es el intervalo de tercera menor, que aparece cuatro veces en la escala diatónica, y conecta con sus siete sonidos. 

Los motivos emergen del material mismo, van y vienen, se transforman, y no dejar de estar ahí (aun cuando retornan irreconocibles).

Las nubes aparecen, crecen, se desintegran, saben ser y dejar de ser. Y cuando la mirada se detiene sobre ellas, parecería que sólo están ahí para hablarnos de un tiempo sin tiempo.

## Introducción
_21 Nubes_ forma parte de una serie de piezas qué trabajar variaciones de una serie de conceptos comunes: las series armónicas (particularmente aplicadas a la forma), la exploración del concepto de red, aplicado a la melodía, la armonía y la forma, la limitación de recursos extrema y con ella, la propuesta de retomar elementos que parecerían superados por la música contemporánea y mostrarlos bajo la luz y el potencial de los procesos anteriormente mencionados. Con esto último nos referimos particularmente al interés de esta pieza por trabajar únicamente con los sonidos correspondientes a las notas blancas del piano.

_21 Nubes_ puede y debe comprenderse (al menos) de tres maneras simultáneas:
1. Serie ordinaria de 21 miniaturas

2. Serie compuesta de y como variaciones (menos de 21???????? ESPECIFICAR NÚMERO)

3. Serie algorítimica infinita


### Una serie ordinaria de 21 miniaturas.
La primera serie involucra la secuencia armónica _1, 2, 3... 21_. Esta secuencia sirve para designar el número de notas que cada una de las 21 piezas deberá contener.  Si bien, el que una minitura contenga más notas que otra no la hace necesariamente mayor en duración, el proceso implica un gradual complejización de la escucha: cada unidad contiene un elemento más que el oído debe de analizar. Por consiguiente cada unidad transforma el contexto anterior, redimensionándolo. 

### Una serie menor de variaciones (menos de 21???????? ESPECIFICAR NÚMERO)
La segunda serie refiere a un proceso que se desenvuelve en tres niveles disintos:
1.  Primero, la pieza elabora una tipología de materiales a desarrollar (que describiremos más adelante), y en tanto se explora un material armónico-melódico muy limitado, la variación emerge, casi por fuerza, en toda su inmediatez.  

2. Segundo, ciertas minituras hacen referencia a miniaturas anteriores, y en tanto el contexto cambia necesariamente (la cantidad de notas de una variación a otra aumenta siempre), la variación consiste en la adaptación de esta condición a la variación de refencia. 

3. Tercero, ciertos conjuntos de miniaturas hacen referencia a otros conjuntos de miniaturas, lo cuál involucra los dos niveles previos: 

    3.1  El primero en tanto un conjunto de tipos de material sirve para identificar a una variación.
    
    3.2 el segundo en tanto que la elaboración del discurso, como una sóla extensa melodía compone las variaciones en distinas frases.
    
        3.2.1 Por ejemplo, las variaciones 7 (melodía ascendente) y 8 (melodía descendente), donde la segunda es variación de la primera. Estas además se componen naturalmente en un frase, la cuál se verá variada en las variaciones 18 (melodía descendente) y 19 (melodía ascendente), proceso que se puede analizar tanto como una retrogradación al nivel de las variaciones (_variación ascendente_ seguida por _variación descendente_ --> _variación descendente_ seguida por _variación ascendente_), o como una inversión (necesariamente variada) del contorno de la frase compuesta (). Hablamos así de juego de variaciones elaborado como variaciones de variaciones, una especie de juego de espejos donde cada relejo multiplica los elementos previamente reflejados.

### Serie algorítimica infinita
La tercera serie refiere al método de construcción melódico-armónica de la obra. Todas las armonías y melodías son derivaciónes de las siguientes dos reglas:

1. Los únicos intervalos posibles son el _unísono_, la _segunda menor_, la _segunda mayor_ y la _tercera menor_, sus inversiones y sus transposiciones de octava, quincena, etc.: 0, 1, 2, 3, 9, 10, 11

2. Los intervalos sólo pueden usarse dentro de las notas blancas del piano: a,b,c,d,e,f,g

La primera es una regla generativa, la segunda es un filtro aplicado sobre la primera.

Vista como una tabla, las notas de la escala pueden conectar unas con otras de la manera siguiente.

| Nota Inicial       | Conexiones 
| ------------- |:-------------:|
| **a**      |a, b, c, g |
| **b**      |a, b, c, d |
| **c**      |a, b, c, d |
| **d**      |b, c, d, e, f |
| **e**      |d, e, f, g |
| **f**      |d, e, f, g |
| **g**      |a, e, f, g |

También puede verse como una matriz, lo que revela una simetría peculiar:

|  | a |  b  | c |  d  | e |  f  | g |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**a** | x   |  x  | x |    |  |     | x |
|**b** | x   |  x  | x |  x  |  |    |  |
|**c** | x   |  x  | x |  x  |  |    |  |
|**d** |     |  x  | x |  x  | x |  x  |  |
|**e** |    |   |  |  x  | x |  x  | x |
|**f** |  |   |  |  x  | x |  x  | x |
|**g** | x |    |  |    | x |  x  | x |

Es de notar que una de las cualidades melódicas más relevantes, que se derivan de estas reglas, es que después de un intervalo de 2da menor, es imposible un salto de 3era menor en la misma dirección, es decir, un salto pequeño. Lo que significa que si se desea un salto en la misma dirección, este tiene que ser necesariamente un salto grande, mínimo una 6ta mayor. Lo mismo se sostiene a la inversa, después de un salto de 3era menor, una segunda menor es imposible en la misma dirección, aunque en este caso, sí hay varias posibilidades para un movimiento de 2da mayor en la misma dirección, lo que le da preponderancia a esta combinación interválica (como vermos más adelante).

Otro aspecto a notar es que tomada esta estructura como fuente de materiales, es posible construir, con extrema fácilidad una infinidad de melodías, cada una de las cuales comparte una estructura genética idéntica a la otra. Lo que le da especificidad a estas construcciones melódicas y las distingue de cualquier otra son justamente las conexiones faltantes entre intervalos, es decir, los límites precisos que se tienen. O en otras palabas, si cualquier nota pudiera ir a cualquier otra, entonces las melodías producidas por esta red de conexiones no se distinguirían necesariamente de ninguna otra melodía construida a partir de una escala diatónica, lo que característicamente, no es el caso aquí.

## Consideraciones Generales
### Armonía y Polifonía
A pesar de que la tabla y la matriz nos hacen pensar en el uso de pares de intervalos como nuestra unidad principal, en realidad, también podemos pensar en tener unidades mayores que serían el resultado de posibles conjuntos de secuencias, lo que abre las puertas a la generación de acordes y como veremos, de polifonía.

A este respecto tenemos una atracción particular por armonías que guardan simetrías y paralelismos entre sí, interés que se deriva quizás de las simetrías observables en la matriz mostrada anteriormente.

### Armonía
para generar una armonía, podemos tomar una secuencia melódica **x** y tocarla simultaneamente, pudiendo además variar en la disposición vertical (graves -> agudos) el orden de las notas.

Por ejemplo, si tomamos **a-b-d-f-e** y la convertimos en un conjunto de notas que suenan simultáneamente, entonces podríamos reordenarlas, de graves a agudas, de la siguiente manera **[a-e-f-b-d]** (los corchetes denotan un conjunto permutable o un acorde). 

Esto es posible bajo la regla de que al menos una de las notas de acorde previo conecten legalmente con **a**, y que alguna de la notas del acorde subsiguiente conecten con la nota **e**. En el caso de que a la agrupación vertical le anteceda o le siga una nota sola, la regla aplica de la misma manera. Como se podrá observar todas las sonoridades verticales de la obra se comportan de esta manera.

### Simetrías
Por otra parte hay ciertos subconjuntos que nos parecen sumamente interesantes y que ocasionalmente son explotados.

Por ejemplo, tomemos las triadas de tipo interválico **[2-3]** o **[3-2]**: Con **[a-c-d]** y **[d-e-g]** tenemos una retrogradacíon cuyo eje, o nota espejo es **d**. Su uso se puede apreciar particularmente en la última variación, la cuál se desarolla como símbolo de esta propiedad. En el mismo sentido, aunque con mayor peculiaridad tenemos las triadas, del mismo tipo que las anteriores  **[e-g-a]** y **[g-a-c]**, donde el eje de retrogradación se encuentra sobre un fantasmal **g#**. 

El uso de este segundo par de tríadas no es tan notorio a primera vista, sin embargo, con frecuencia se utilizan de manera colorística al oponerlos a un conjunto totalmente contrastante: **[b-d-f]** (interválicamente **[3-3]**) , el cual no es otra cosa que la diferencia entre **[e-g-a-c]** y **[a-b-c-d-e-f-g]**. La oposición genera desde luego una alternancia de tipo Tonica-Dominante, sin ser estrictamente tal cosa (auditivamente se reduce al contraste entre la cuarta o quinta justas y la cuarta aumentada, es decir entre los intervalos 3:2, y 4:3 contra algo cuando menos tan complicado como 25:18). 

Ejemplos de uso pueden observarse generalmente con subconjuntos de estos grupos.  Por ejemplo, en la miniatura 5, donde **b** se toma por el conjunto **[b-d-f]**  y **[a-c]** por el conjunto **[e-g-a-c]**. También en las miniaturas 7 y 8 se pueden apreciar muy claramente secciónes con uno u otro tipo de conjuntos.

## Polifonía y permutaciónes de los subconjuntos armónicos
La obra hace uso de lo que se podría llamar polifonía fluctuante, es decir, que la cantidad de voces _independientes_ varia constantemente. Aunque en este momento del análisis no nos detendremos en analizar esto (cosa en la que más adelante abundaremos), es importante mencionarlo aquí para explicar un recurso polifónico particular ligado a la red melódica que usamos y a los subconjuntos armónicos que derivamos de ella.

La regla de los procesos polifónico que aquí seguimos es la siguiente:  Es posible separar un conjunto armónico en dos secuencias melódicas relativamente independientes, siempre y cuando el punto de convergencia o divergencia de ambas melodías sea un punto legal, y cada una de estas secuencias sea legal en si misma (a pesar de que a momentos aparezcan intervalos ilegales). Por ejemplo tomando el conjunto **[e-g-a]** podemos generar una melodía que vaya de **a-g** y otra que vaya de **e-g** (siendo ambas **g** la misma), y esto es legal a pesar de que en cierto momento se produza simultanea o secuencialmente el intervalo de 4 justa **a-e**.

Esta regla por ende nos permite tratar a dos segmentos melódicos como si se tratara de subconjuntos armónicos, tratando a las notas al interior de los conjuntos mediante permutaciones como cuando las reordenamos al generar un acorde, lo cual generaría secuencias melódicas que no aparecen cuando se derivan de la tabla de conexiones, pero si cuando se derivan de subconjuntos armónicos derivados de ésta. 

Puesto que estos procedimientos son claramente delicados en tanto pueden poner en riesgo la coherencia armónica y melódica de la pieza, su aparición debe estar justificada en un proceso polifónico, claramente auditivo, cuyos miembros refuerzen las principios melódicos con los que operamos.

Por ejemplo, al final de la _miniatura 13_ tenemos los conjutos: **[f-d-b]** y **[a-g-e]**. Ambos conectan mediante **b-a**, pero el segundo conjunto se presenta permutando la secuencia de sus notas, por lo tanto aparece como una secuencia "melodica" **a-e-g**, lo cuál a primera vista sería contrario a nuestras reglas. 

Sin embargo, ciertos procedimientos polifónicos nos permiten darle sentido a esta secuencia melódica que parecería ilegal.  A nivel de la notación hay que observar la ligadura que va de **e-g**, pero no de **a-e**.  Más importante aun es que a nivel _auditivo_  se generan la posibilidad de escuchar dos voces: observamos que dentro del contexto de la obra el intervalo de tercera menor aparece como un intervalo melódico muy característico (al igual que los de segunda), por lo que el oído esta acostumbrado a asociar en una sóla voz las secuencias que usan estos intervalos dentro de la misma línea, mientras que el intervalo de cuarta justa al ser un intervalo extraño (dentro del contexto), hacer que el oido tienda a separar lo que proviene de este intervalo y lo asigne a una línea melódica distinta (cf. la discusión de  la polifonía y el concepto de _stream_ (flujo) en _Auditory Scene Analysis_).  Así, la interpretación polifónica de este pasaje sugiere que tenemos dos líneas convergentes: **f-d-b-a-g** y **e-g**. Es de notar, además, que esta segunda linea, tiene también su justificación en tanto es una variación-eco del intervalo ascendente  **g-e** que se escucha en el registro grave de la _miniatura 11_. No es coincidencia que ambas apariciones del conjunto **[e-g]** se den en registro más grave de cada miniatura y al final de las mismas, ambas dispociones teniendo como objetivo el dar unidad e identidad a este conjunto para que pueda aparece como un voz independiente.

En la variación que va de las _miniaturas 18 a 20_ tenemos un caso relativamente similar, pero que ejemplica otro uso de las voces. La composición de una _voz armónica_ contra una _voz melóica_, es decir, el de una voz que lleva terceras y otra que no lleva intervalo alguno. En esta secuencia podemos tomar todas las apariciónes del intervalo armónico de tercera menor como una voz que va en constante ascenso y cuya tensión se rompe en la miniatura _20_ al llegar a dos intervalos armónicos de quinta producidos por el movimiento melódico de dos intervalos de tercera menor, o más precisamente, el de una tercer menor y el de su inversión. La otra voz (más adelante argumentaremos que son múltiples voces), por contraste siempre se mueve en notas sólas envolviendo a la otra, por encima y por debajo, como un tejido.

En la _miniatura 19_ podemos ver la secuencia siguiente **d-e-g-a-[d-f]**. La coherencia de **[d-f]** no se puede seguir de **a** de ninguna manera, pero encuentra su justificación en dos procesos. Primero porque la secuencia citada puede interpretarse como implicando una divergencia de una a dos voces, vista de la siguiente manera, **e-[g-a]** y **e-[d-f]**, donde **e** supone un punto de convergancia para ambos conjuntos. Segundo, porque dentro de a _voz armónica_ como entidad auditivamente distinta, en realidad esta precedida por **[a-c]**, de la cual, ambas voces se siguen. 

Este segundo aspecto denota otra regla para el trabajo polifónico de la obra: voces distintas pueden emerger e identificarse, en tanto haya secuencias de entidades motivicas que operen con independencia y establezcan diálogos con otras. 

¿Qué elementos pueden distinguir a una voz de otra? 

1. Densidad de voces (como ya mostramos)
2. Registro (quiza la principal en la obra)
3. Constitución motívica (hay estructuras morfológicas predominantes, especialmente en razón de las limitaciones extremas de los materiales de la obra)
4. Fraseo, esta no puede concebirse como únicamente pertenciente al proceso de escritura, sino que depende también del proceso de interpretación, pero la obra es suficientemente abierta como para admitir diversas interpretaciónes.

### Polifonía fluctuante
Puesto que con trabajamos una polifonía estricta (donde el número de voces permanece estable durante un periodo de tiempo razonable), la escucha polifónica de la obra está llena de ambiguedades (que por cierto nos interesa aprovechar al máximo): la definción del momento preciso en el que ya escuchamos más de una voz es o bien imposible, o bien se basa en un momento furtivo y dependiente del estado de la atención del intérprete y del escucha (esta es cuando menos mi experiencia después de haber tocado y escuchado muchas veces la obra y sus partes). Además hay que agregar, que esta ambiguedad se exhacerba aun más, cuando la escucha de las distintas voces no resulta de su convivencia simultanea, sino de intervenciones que se escuchan en alternancia. 

Un ejemplo claro de esto es la _miniatura 11_ donde contanmos 3 voces.
1. Una linea en la voz media **e-d-b** cuyas primeras dos notas aparecen a al principio, y la última casi al final. La independencia de esta línea melódica se ve reforzada por momento previos donde el mismo motivo aparece, e.g. al principio de _5_ **d-c-a** o las repeticiones en _8_ **d-c-a**, **a-g-e** y **e-(g)-d-b**.  

2. Una segunda voz en el bajo, justo al final: **g-e**. Ésta podría escucharse como continuando la voz media-grave de la minitaura 8, el intervalo **[a-c]**. Sea como sea demasiado distinta de todo lo demás de la miniatura _11_ como para considerar que se puede asociar a algo más. 

3. Y finalmente hay una voz superior, de la cual no podriamos decir con certeza si comienza en la primera nota, **e** o en la tercera de la secuancia, **g**, pero sí sabemos, con toda claridad, que  constituye la melodía ascendente. 

    3.1. Esta melodía ascendente por cierto, podría interpretarse como continuando su ascenso en la _miniatura 13_. 

    3.2 En ese sentido la _minitatura 12_ consituye algo completamente independiente (morfológicamente lo parece) de las otras dos secuencias, pero interpretada polifónicamente, esta miniatura repite tres veces, la secuencia **b-c-d** (podría interpretarse como minicanon a 3 voces), la cual es identica al comienzo de la _minitaura 13_, por lo que el oído podría dudar respecto del número de voces que está escuchando: ¿se trata de una imitación en _13_ o de un salto de octava de la misma voz? 

(Evidentemente, para lograr este efecto polifónico en el piano, la manera más efectiva es dejando el pedal sostenido todo el tiempo). 

¿Cuántas voces podríamos contar de _11_ al comienzo de _13_?  Aparentemente, en la partitura, hay una sola voz, la cual en cierto momento tiene una duplicación trivial de tercera. Pero con lo descrito anteriormente, y referiendo a una escucha concentrada en las distintas morfologías de las cada una de voces descritas, podríamos contar hasta 6 voces: las 3 de la polifonía libre de _11_ y las 3 del microcanon de _12_, o incluso 7, si pensamos, escuchamos, o interpretamos, que ni _11_  ni _12_ tienen su continuación en _13_.

El efecto general es de voces que se ramifican y "desramifican", que divergen y convergen de un modo vago. No se trata de una diferencia de grados discretos y bien definidos: "ahora 2, ahora 3". Sino más bien de una diferencia de tipo difuso, casi continuo, aparente y perceptual: "no sé donde hay 2 o 3 o _n_, pero sé que hay más de una y sé que no siempre son las mismas". 

En efecto, estas son las mismas preguntas que podemos hacernos cuando miramos las nubes en el cielo: ¿en qué momento se separan... y _qué tan separadas están realmente_, son una o múltiples... o más bien multiplicidades (cf. _Rizoma_, Gilles Deleuze y Félix Guattari)?

## Conclusiones
Personalmente encuentro que este procedimiento muestra, casi en aislamiento, una de las maneras en que el oído puede analizar un contexto sonoro, y la relación entre los eventos de una secuencia, a saber qué el oído es capaz de analizar una música sobre una base casi exclusivamente cuantitiva (en términos de tonos)