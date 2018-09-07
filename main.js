document.addEventListener('DOMContentLoaded', function(){
    // create box to hold everything
    var container = document.createElement ('div')
    var body = document.querySelector('body')
    var colorPallet = document.createElement('input')
    var canvas = document.createElement('div')  
    var rowsInput = document.createElement('input')
    var colInput = document.createElement('input')
    var rowSubmit = document.createElement('button')
    var colSubmit = document.createElement('button')
    body.appendChild(container).classList.add('container')
    // create canvas
    container.append(canvas)
    canvas.classList.add('canvas')
    canvas.append(rowsInput, colInput)
    canvas.append(rowSubmit, colSubmit)
    rowSubmit.innerText = 'Submit'
    colSubmit.innerText = 'Submit'
    rowsInput.type = 'text'
    colInput.type = 'text'
    rowsInput.placeholder = 'How many rows?'
    colInput.placeholder = 'How many columns?'
    
    // create color pallet
    container.append(colorPallet)
    colorPallet.type = 'color'
    
    for(let i = 0; i < 148; i++){
        var canvasBox = document.createElement('div')
        // var 
    }
})
