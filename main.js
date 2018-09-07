document.addEventListener('DOMContentLoaded', function(){
    // create box to hold everything
    var container = document.createElement ('div')
    var body = document.querySelector('body')
    var colorPallet = document.createElement('input')
    var canvas = document.createElement('div')  
    var rowsInput = document.createElement('input')
    var colInput = document.createElement('input')
    var submit = document.createElement('button')
    body.appendChild(container).classList.add('container')
    // create canvas
    container.append(canvas)
    canvas.classList.add('canvas')
    canvas.append(rowsInput, colInput)
    canvas.append(submit)
    submit.classList.add('buttn')
    submit.innerText = 'Submit'
    rowsInput.type = 'text'
    colInput.type = 'text'
    rowsInput.placeholder = 'How many rows?'
    colInput.placeholder = 'How many columns?'
    
    // create color pallet
    container.append(colorPallet)
    colorPallet.type = 'color'
    submit.addEventListener('click', function(){
        //function generateGrid(rows, cols){
            var rows = rowsInput.value
            var columns = colInput.value
            for (var i = 0; i < rows; i++){
                var row = document.createElement('div')
                row.className = 'row'
                // for(var j = 1; j <= rows; j++){
                //     var cell = document.createElement('div')
                //     cell.className = 'grid-square'
                //     row.append(cell)
                // }
                canvas.append(row)
                console.log('i clicked')
            }
        //}    
    })
})
