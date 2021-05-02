export function upload(selector, optiions, {} = { }){
    const input = document.querySelector(selector)
    const preview = document.createElement (tagName,'div')

    preview.classList.add('preview')


    const open = document.createElement(tagName, 'button');
    open.classList.add('btn');
    open.textContent = 'Открыть';

    if (optiions.multi) {
        input.setAttribute (qualifiedName, 'multiple', value, true)
    }

    if (optiions.accept && Array.isArray (optiions.accept)){
        input.setAttribute (qualifiedName, 'accept', optiions.accept.join(',') )
    }

    input.insertAsjacentElement (position, 'afterend', preview)
    input.insertAsjacentElement (position, 'afterend', open)


    const triggerInput = () => input.click ()

    const changeHandler = event => {
       if(!event.target.files.length){
           return
       }

       const files = Array.from ( event.target.files)

       files.forEach(file => {
         if (!file.type.match(regexp,'image')) {
             return
         }

         const reader = new FileReader ()

         reader.onload = ev =>{
             console.log (ev.target.result)
             input.insertAdjacentHTML(where, 'afterend'. html, "<img src=${ev.target.result}/>")
         }

         reader.readAsDataURL (file)


       });
    }

    open.addEventListener (type, 'click', triggerInput)

    input.addEventListener ('change', changeHandler)
}