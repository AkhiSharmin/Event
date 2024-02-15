// const btn = document.querySelector('button');

// // btn.onclick = () => {
// //     alert('Hey Button')

// // }

// btn.addEventListener('click', function (e) {
//     alert('Hey Button')
// })


const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Purple", "Violet", "Indigo"];


const container = document.querySelector('section')
const h1 = document.querySelector('h1')
const selectColor = document.querySelector('#selectedColor')



// for (let color of colors) {

//     const div = document.createElement('div')
//     div.classList.add('box')
//     container.appendChild(div)

//     div.style.backgroundColor = color;

//     div.addEventListener('click', function (e) {
//         h1.innerText = `You selected Color`
//         selectColor.innerHTML = ` ${color}`
//         selectColor.style.backgroundColor = ` ${color}`
//         document.body.style.backgroundColor = ` ${color}`
//     })
// }



// for (let color of colors) {
//     const box = document.createElement('div');
//     box.classList.add('box')

//     container.appendChild(box)

//     box.style.backgroundColor = color;


//     box.addEventListener('click', function (e) {
//         h1.innerText = `You have Selected`
//         selectColor.innerText = `${color}`
//         selectColor.style.backgroundColor = `${color}`
//         document.body.style.backgroundColor = `${color}`;
//     })
// }



// for (let color of colors) {

//     const div = document.createElement('div');
//     div.classList.add('box')
//     container.appendChild(div)

//     div.style.backgroundColor = color;

//     div.addEventListener('click', function (e) {
//         h1.innerText = `You selected Color`
//         selectColor.innerHTML = `${color}`
//         // selectColor.style.backgroundColor = `${color}`
//         document.body.style.backgroundColor = `${color}`
//     })

// }



// for (let color of colors) {
//     const div = document.createElement('div')
//     div.classList.add('box')
//     container.appendChild(div)

//     div.style.backgroundColor = color;

//     div.addEventListener('click', function (e) {
//         h1.innerHTML = `You Selected Color`
//         selectColor.innerHTML = `${color}`
//         // selectColor.style.backgroundColor = `${color}`
//         selectColor.style.padding = `10px`
//         document.body.style.backgroundColor = `${color}`
//     })
// }



for (let color of colors) {
    const div = document.createElement('div');
    div.classList.add('box')
    container.appendChild(div)

    div.style.backgroundColor = color;

    div.addEventListener('click', function (e) {
        h1.innerText = `You Selected Color`
        selectColor.innerText = `${color}`
        selectColor.style.backgroundColor = `${color}`
        document.body.style.backgroundColor = `${color}`
    })
}