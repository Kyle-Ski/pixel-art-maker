document.addEventListener('DOMContentLoaded', function(){
    const container = document.createElement ('div')
    const body = document.querySelector('body')
    const colorPallet = document.createElement('input')
    colorPallet.classList.add('color-pallet')
    const canvas = document.createElement('div')  
    const rowsInput = document.createElement('input')
    const colInput = document.createElement('input')
    const submit = document.createElement('button')
    const clear = document.createElement('button')
    const chooseColor = document.createElement('span')
    chooseColor.innerText = 'Choose your color!'
    body.appendChild(container).classList.add('container')
    container.append(canvas)
    canvas.classList.add('canvas')
    container.prepend(rowsInput, colInput)
    rowsInput.classList.add('input')
    colInput.classList.add('input')
    container.prepend(submit)
    container.prepend(clear)
    submit.classList.add('buttn')   
    submit.innerText = 'Create Grid'
    clear.classList.add('buttn')   
    clear.innerText = 'Clear'

    rowsInput.type = 'text'
    colInput.type = 'text'
    rowsInput.placeholder = 'How many rows?'
    colInput.placeholder = 'How many columns?'
    
    container.prepend(colorPallet)
    container.before(chooseColor)
    colorPallet.classList.add('color-pallet')
    colorPallet.type = 'color'
    colorPallet.value = '#FF0000'
    
    function createGrid(){
        let rows = rowsInput.value
        let columns = colInput.value  
        if (columns > 100){
            alert('Please choose columns less than 100')
        } else{
            for (let i = 0; i < rows; i++){
                let row = document.createElement('div')
                row.className = 'row'
                canvas.append(row)
                for (let index = 0; index < columns; index++) {
                    let col = document.createElement('div')
                    col.className = 'col'
                    row.append(col)
                }
            }    
        }    
    }
    
    function colorGrid(e){
        let currentColor = colorPallet.value
        e.target.style.backgroundColor = currentColor
    }

    function clearGrid(){
        let clearCols = document.querySelectorAll('div.col')
        for (let i = 0; i < clearCols.length; i++){
            if (clearCols[i].style.backgroundColor !== '#FFFFFF'){
                clearCols[i].style.backgroundColor = '#FFFFFF'        
            }   
        }
    }

    clear.addEventListener('click', clearGrid)
    canvas.addEventListener('click', colorGrid) 
    submit.addEventListener('click', createGrid)
})

            
    
