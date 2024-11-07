const gallery = document.getElementById('gallery')
const fullView = document.getElementById('fullView')
const fvclose = document.getElementById('fvclose')
const back = document.getElementById('back')
const right = document.getElementById('right')
const left = document.getElementById('left')



const files = [
    'images/i1.png', 'images/i2.png', 'images/i3.png', 'images/i4.png', 'images/i5.jpg'
]

files.forEach(image => {
    const img = document.createElement('img')
    img.className = 'mini'
    img.src = image

    img.addEventListener('click', () => {
        fullView.src = image
        fullView.style.display = 'flex'
        fvclose.style.display = 'flex'
        back.style.display = 'flex'
    })

    gallery.appendChild(img)
})

fvclose.addEventListener('click', () => {
    fullView.style.display = 'none'
    fvclose.style.display = 'none'
    back.style.display = 'none'
})

