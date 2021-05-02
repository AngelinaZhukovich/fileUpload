export function uploade(selector){
    const input = document.querySelector(selector);


    const open = document.createElement(tagName: 'button');
    open.classList.add('btn');
    open.textContent = 'Открыть';

    input.insertAsjacentElement (position: 'afterend', open);




    open.addEventListener (type: 'click', triggerInput)
}