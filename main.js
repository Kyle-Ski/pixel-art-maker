document.addEventListener('DOMContentLoaded', function(){
    // create box to hold everything
    var container = document.createElement ('div')
    var body = document.querySelector('body')
    body.appendChild(container).classList.add('container')
    // create canvas
    var canvas = document.createElement('div')  
    container.append(canvas)
    canvas.classList.add('canvas')
    // create color pallet
    var colorPallet = document.createElement('div')
    container.append(colorPallet)
    colorPallet.classList.add('color-pallet')
})