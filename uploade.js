export function uploade(selector, optiions: {} = {}){
    const input = document.querySelector(selector);


    const open = document.createElement(tagName: 'button');
    open.classList.add('btn');
    open.textContent = 'Открыть';

    if (optiions.multi) {
        input.setAttribute (qualifiedName: 'multiple', value: true)
    }

    input.insertAsjacentElement (position: 'afterend', open);


    const triggerInput = () => input.click ()

    const changeHandler = event => {
        console.log(event)
    }

    open.addEventListener (type: 'click', triggerInput)

    input.addEventListener ('change', changeHandler)
}