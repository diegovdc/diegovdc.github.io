
import tap from 'tap-logger'
import h from 'hyperscript'
import hh from 'hyperscript-helpers'
import $ from 'jquery'
import * as R  from 'ramda'

window.tap = tap
window.$ = $
window.R = R
window.hh = hh


const {
    div,
    p,
    a,
    h3,
    iframe,
    br,
    h1,
    h2,
    img,
    audio,
    span,
} = hh(h)

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

const index = div('.main', [
    h1('.main-ttl', ['Diego Villaseñor, ', a({href:"http://echoic.space"}, ['echoic.space'])]),
    div('.intro', intro),
    videos.map(v => div('.video', [
        h2('.track-ttl', [v.name]),
        a('.track-score', {href: v.score, target: '_blank'}, ['Partitura']),
        div('.description', v.description),
        div('.video-iframe-container', v.iframe),
    ])),
    tracks.map(t => div('.track', [
        h2('.track-ttl', [t.name]),
        t.track !== '' ? audio({src:  t.track, controls: true}) : div(),
        a('.track-score', { href: t.score, target: '_blank' }, ['Partitura']),
        div('.description', t.description),
    ])),
])

const asMarkdownContent = content => {
    let container  = div()
    container.innerHTML = content
    return div('.markdown-body', container)
}

import obras from '../data/obras.json'
console.log('obras', obras)

import conceptosGenerales from '../data/conceptos-generales.json'
import QuintoSemestre from '../data/examenes.json'


const conceptos = div('.main', [
    h1(['Conceptos Generales']),
    div('.markdown-body',
        conceptosGenerales.map(c => asMarkdownContent(c.body)))
])

const quintoSemestre = div('.main', [
    div('.markdown-body',
        QuintoSemestre.map(c => asMarkdownContent(c.body)))
])

const getById = (id, obras) => R.pipe(
    R.find(o => o.attributes.id === id),
    R.pathOr(
        `<h1 class="Not Found">La obra que buscas no se ha encontrado</h1>`, 
        ['body']
    ),
    asMarkdownContent
)(obras)

const appendMd = (selector_id, content) => {
    document.getElementById(selector_id).appendChild(content)
}

const printObrasIndex = (selector_id, obras) => R.pipe(
    obras => Array.isArray(obras) ? obras : [],
    R.filter(R.path(['attributes', 'title'])),
    R.sort((a, b) => a.attributes.order < b.attributes.order ? -1 : 1),
    R.map(o => p('.obras-index__link', [
        a({href: `/obras/${o.attributes.slug}.html`}, [o.attributes.title]),
        br(),
        span('.obras-index__description', [o.attributes.description])
    ])),
    os => div('#obras-index', os),
    tap.c('printing obras'),
    index => {document.getElementById(selector_id).appendChild(index)}
)(obras)


window.app = { index, conceptos, quintoSemestre, appendMd, getById, obras, printObrasIndex }
//  if (module.hot) {
//     module.hot.accept();
// } //permite hacer Hot Module Replacement
