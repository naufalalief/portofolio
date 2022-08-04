const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-right');
const a = document.querySelectorAll('.nav-right a');
const input = document.querySelector('.menu-toggle input');
const content = document.querySelector('#content');

menuToggle.addEventListener('click', function () {
    if (menuToggle.classList.contains('slide')) {
        menuToggle.classList.remove('slide')
        nav.classList.remove('slide');
        console.log('removed');
    }
    else {
        menuToggle.classList.add('slide');
        nav.classList.add('slide');
        console.log('added');
    }
})

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        menuToggle.classList.remove('slide')
        nav.classList.remove('slide')
        input.checked = false;
        console.log('removed');
    })
}

content.addEventListener('click', function () {
    menuToggle.classList.remove('slide')
    nav.classList.remove('slide')
    input.checked = false;
    console.log('removed');
}
)

// a.addEventListener('click', function () {
//     menuToggle.classList.remove('slide')
//     nav.classList.remove('slide');
//     input.checked = false;
//     console.log('removed');
// }
// );

// menuToggle.addEventListener('click', function () {
//     if(menuToggle.classList.contains('slide')) {
//         menuToggle.classList.remove('slide');
//         nav.classList.remove('slide');
//     }
//     else {
//         menuToggle.classList.add('slide');
//         nav.classList.add('slide');
//     }
// });

// document.onclick = function (e) {
//     if (e.target.classList !== 'menuToggle' && e.target.classList !== 'nav-right') {
//         menuToggle.classList.remove('slide');
//         nav.classList.remove('slide');
//     }
// }
