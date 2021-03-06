/**
 * Ya no se usa
 */
const intro = `En los últimos dos años he estado explorando la música hecha de músicas. Mi interés se ha centrado en la  manera en que una pieza puede relacionarse con otra. Esta relación con la otredad de la pieza puede llevarse hasta el punto en que la misma pieza se vuelve otra para sí misma (25 Campanas).
Se trata de que la relación suceda de modo que una obra pueda transformar a la otra, lo que implica que las obras están en sí mismas abiertas y en constante transformación,incluso evolución.
Explorar la interacción como sucede a nivel humano, cada obra es cómo una persona en sus relaciones cambiantes con las otras (una pieza no es la misma en un para una pieza que para otra, del mismo modo en que yo no soy el mismo para una colaboradora que para un amigo)`.split('\n').map(par => p([par]))

// const pdfURL = 'https://github.com/diegovdc/mini-echoic-space/blob/master/public/scores/'
const pdfURL = 'https://github.com/diegovdc/mini-echoic-space/raw/master/public/scores/'
const tracks = [
    {
        name: '25 campanas (para Ramis Lao)',
        track: 'public/tracks/25 campanas (con Ramis Lao).mp3',
        img: '',
        score: pdfURL + '25Campanas-DiegoVillase%C3%B1orDeCortina.pdf',
        description: `Superposición de una pieza sobre sí misma (guitarras, Ramis Lao y Diego Villaseñor)`,
    },
    {
        name: 'Exploración del Sueño',
        track: 'public/tracks/exploracion-del-sueno-m1.mp3',
        img: '',
        score: '',
        description: `Cánones sobre una melodía para ondas senoidales.  Exploración de la síntesis por contrapunto y de la escritura de melodías a través de redes de relaciones. Se recomienda ampliamente escuchar esta pieza en un buen equipo de sonido, porque tiene frecuencias graves que de otro modo no sonarán'`,
    },
    {
        name: '21 clouds & 28 palabras',
        track: 'public/tracks/21 clouds & 28 palabras take 1 (w_ Andrew Jamieson).mp3',
        img: '',
        score: pdfURL + '21%20Nubes%20%2B%2028%20Palabras.pdf',
        description: `Dos piezas superpuestas e interactuando: 21 nubes (piano, Andrew Jamieson) y 28 palabras (voz, Diego Villaseñor).`
    },
    {
        name: 'Memories of a Wedding',
        track: '',
        img: '',
        score:pdfURL+'memories-of-a-wedding.pdf',
        description: `Para dos voces y uno o más instrumentos. Serie de ecos para poemas de 4 palabras`
    }
]

const videos = [
    {
        name: '{Videcoic One}',
        iframe: iframe('.video-iframe',{
            src:"https://www.youtube.com/embed/s15OA9nZ7AY",
            frameborder:"0" ,
            allow:"autoplay; encrypted-media" ,
            allowfullscreen: true,
        }),
        score: pdfURL + 'Videcóico%20Uno%20-%20ensamblado.pdf',
        description: `Combinación de 5 piezas para conformar una sexta como resultado de la intercción de las otras 5. "Espiritu penetrando en Árbol", "21 Nubes", "25 Campanas", "28 palabras" y "Memories of a Wedding" (voces, Danishta Rivero y Diego Villaseñor, guitarra, Jakob Pek, piano Andrew Jamieson, percusiones Nava Dunkelman, electrónica Jeannie Aprille Tang y Aaron Oppenheim)`,
    }
]