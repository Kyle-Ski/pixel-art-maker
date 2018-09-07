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
    container.prepend(rowsInput, colInput)
    container.prepend(submit)
    submit.classList.add('buttn')
    submit.innerText = 'Submit'
    rowsInput.type = 'text'
    colInput.type = 'text'
    rowsInput.placeholder = 'How many rows?'
    colInput.placeholder = 'How many columns?'
    
    
    // create color pallet
    container.prepend(colorPallet)
    colorPallet.type = 'color'
    submit.addEventListener('click', function(){
        var rows = rowsInput.value
        var columns = colInput.value
        //set defalut for rows if the rows is zero
       
        console.log(col)
        for (var i = 0; i < rows; i++){
            var row = document.createElement('div')
            row.className = 'row'
            // row.innerText = i
            canvas.append(row)
            for (let index = 0; index < columns; index++) {
                var col = document.createElement('div')
                col.className = 'col'
                row.append(col)


            }
        }
        // if(document.getElementsByClassName('col')){
        //     canvas.removeChild()
        // }
    })
})
