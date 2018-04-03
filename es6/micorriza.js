
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

const pdfURL = 'https://github.com/diegovdc/mini-echoic-space/raw/master/public/scores/'


import obras from '../data/obras.json'
import conceptosGenerales from '../data/conceptos-generales.json'
import presentacionTexto from '../data/presentacion.json'
import QuintoSemestre from '../data/examenes.json'


const findWorkAttrs = R.curry((id, obras) => R.pipe(
     R.find(R.pathEq(['attributes', 'id'], id)),
     tap,
    R.prop('attributes'),
)(obras))

const homeWork = isFeatured => work => [
    h3('.semestre-work-ttl' + (isFeatured ? '.featured' : ''),
        a({href: `/obras/${work.slug}.html`}, [work.title])),
    p('.semestre-p', [work.description])
]

const indexObras = () =>  [
    div('.semestre-container.featured', div('.semestre-work-container', [
        h2('.semestre-ttl', ['Octavo Semestre']),
        div(
             R.pipe(
                findWorkAttrs('videcoic-one'),
                homeWork(true)
            )(obras)
        )
    ])),
    div('.semestre-container', [
        div(
            h2('.semestre-ttl', ['Septimo Semestre']),
            ['25-campanas', 'memories-of-a-wedding']
                .map(w => 
                    div('.semestre-work-container',
                        R.pipe(
                            findWorkAttrs(w),
                            homeWork(false)
                        )(obras)
                    )
                )
            ),
        div(
            h2('.semestre-ttl', ['Sexto Semestre']),
            ['21-nubes', '28-palabras']
                .map(w => 
                    div('.semestre-work-container',
                        R.pipe(
                            findWorkAttrs(w),
                            homeWork(false)
                        )(obras)
                    )
                )
            ),
        div(
            h2('.semestre-ttl', ['Quinto Semestre']),
            ['espiritu-penetrando-en-arbol']
                .map(w => 
                    div('.semestre-work-container',
                        R.pipe(
                            findWorkAttrs(w),
                            homeWork(false)
                        )(obras)
                    )   
                )
            )
        ],
    ),
]

const home = div('.main', [
    h1('.main-ttl', ['Diego Villaseñor']),
    p('.main-sbttl', ['Examenes de Composición, Facultad de Música, UNAM']),
    p('.main-presetacion__link-container', a({href: '/presentacion'}, ['Ver presentación'])),
    indexObras(),
    img('.main-logo', {src: '/public/images/logo-fam.jpg'}),
])

const asMarkdownContent = content => {
    let container  = div()
    container.innerHTML = content
    return div('.markdown-body', container)
}

const menu = () =>  div('.menu', [a({href: '/'}, ['Regresar'])])
const presentacion = div('.presentacion', [
    menu(),
    asMarkdownContent(presentacionTexto[0].body),
    h2('.presentacion__ir-a', ['Obras']),
    indexObras()
])

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
    obra => div('.obra-container', [
        menu(),
        asMarkdownContent(obra)
    ])
)(obras)

const appendMd = (selector_id, content) => {
    document.getElementById(selector_id).appendChild(content)
    
    //Abrir el mapa de Videcoic en una nueva ventana
    setTimeout(() => {
        $('[src="/public/images/videcoic-one/mapa.png"]').on('click', () => window.open("/public/images/videcoic-one/mapa.png"))
    }, 200)
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



window.app = { home, conceptos, quintoSemestre, appendMd, getById, obras, printObrasIndex, presentacion }
//  if (module.hot) {
//     module.hot.accept();
// } //permite hacer Hot Module Replacement

