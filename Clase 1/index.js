//Content to show on hmtl
/* <body>
<h1>Con lo visto hasta ahora</h1>
<h2>Replica este HTML</h2>
<h3>Usando</h3>
<h4>React.js</h4>
<footer>Suerte!</footer>
</body> */

const create = React.createElement

let rootH1 = create('h1', {key: 'h1'}, 'Con lo visto hasta ahora')
let rootH2 = create('h2', {key: 'h2'}, 'Replica este HTML')
let rootH3 = create('h3', {key: 'h3'}, 'Usando')
let rootH4 = create('h4', {key: 'h4'}, 'React.js')
let rootFooter = create('footer', {key: 'footer'}, 'Suerte!')

// ReactDOM.render([rootH1, rootH2, rootH3, rootH4, rootFooter], document.getElementById("root"))

let elementsArray = [rootH1, rootH2, rootH3, rootH4, rootFooter]
ReactDOM.render(elementsArray, document.getElementById("root"))