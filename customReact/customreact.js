
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    // ye function reactElement ko leke aayega aur usko domElement me convert karke container me append kar dega
    // ye rendering ka kaam karega
}
    const reactElement={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    Children: 'Click me to viste google'
}

const mainCointainer=document.querySelector('#root')