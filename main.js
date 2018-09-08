document.addEventListener('DOMContentLoaded', function(){
    // create box to hold everything
    var container = document.createElement ('div')
    var body = document.querySelector('body')
    var colorPallet = document.createElement('input')
    colorPallet.classList.add('color-pallet')
    var canvas = document.createElement('div')  
    var rowsInput = document.createElement('input')
    var colInput = document.createElement('input')
    var submit = document.createElement('button')
    body.appendChild(container).classList.add('container')
    container.append(canvas)
    canvas.classList.add('canvas')
    container.prepend(rowsInput, colInput)
    rowsInput.classList.add('row-input')
    colInput.classList.add('col-input')
    container.prepend(submit)
    submit.classList.add('buttn')   
    submit.innerText = 'Submit'
    rowsInput.type = 'text'
    colInput.type = 'text'
    rowsInput.placeholder = 'How many rows?'
    colInput.placeholder = 'How many columns?'
    
    container.prepend(colorPallet)
    colorPallet.classList.add('color-pallet')
    colorPallet.type = 'color'
    submit.addEventListener('click', function(){
        var rows = rowsInput.value
        var columns = colInput.value
        //set defalut for rows if the rows is zero
       
        for (var i = 0; i < rows; i++){
            var row = document.createElement('div')
            row.className = 'row'
            canvas.append(row)
            for (let index = 0; index < columns; index++) {
                var col = document.createElement('div')
                col.className = 'col'
                row.append(col)
                
                col.addEventListener('mousedown', function(e){
                    var currentColor = colorPallet.value
                    col.classList.add('colored')
                    e.target.style.backgroundColor = currentColor
                    console.log(currentColor)
                }) 
                // col.addEventListener('mouseenter',function(e){
                //     var currentColor = colorPallet.value
                //     col.classList.add('colored')
                //     e.target.style.backgroundColor = currentColor
                //     console.log(currentColor) 
                // }) 
            }
        }
        
        // if(document.getElementsByClassName('col')){
        //     canvas.removeChild()
        // }
       
    })
    
})
