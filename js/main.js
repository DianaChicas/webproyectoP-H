/************************* VARIABLES *************************/
/********* buscador variables *********/
const buscador = document.querySelector('.buscador');
const buscadorInput = document.querySelector('.buscador input');
const buscarIcon = document.querySelector('.buscar-icon');
const quitarBuscador = document.querySelector('.quitar-buscador');
const userIcon = document.querySelector('.user-icon');
const carritoIcon = document.querySelector('.carrito-icon');
const menuIcon = document.querySelector('.menu-icon');
/********* variables *********/
const iniciarSesion = document.querySelector('.iniciar-sesion');
const shoppingCar = document.querySelector('.shopping-car');
const menuItem = document.querySelectorAll('.menu-item');
/********* carrousel variables *********/
const slidesContainer = document.querySelector('.productos-container');
const slide = document.querySelectorAll('.slide-trick');
const prevButton = document.querySelector('#btn-left');
const nextButton = document.querySelector('#btn-right');
const offsetWidth = '';
/********* rating *********/
const sliceContainers = document.querySelectorAll('.slide');
/********* carrito de compras variables *********/
const root = document.querySelector('.cantidad')
const precio = document.querySelector('.precio');
const total = document.querySelector('.total-producto');
let data = 1;

/************************* BUSCADOR *************************/
document.querySelector('.buscar-icon').addEventListener('click', () => {
    buscador.classList.add('active');
    buscarIcon.classList.add('active');
    userIcon.classList.add('active');
    carritoIcon.classList.add('active');
    menuIcon.classList.add('active');
    quitarBuscador.classList.add('active');
    iniciarSesion.classList.remove('active');
    shoppingCar.classList.remove('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add('active');       
    }
})

document.querySelector('.quitar-buscador').addEventListener('click', () => {
    buscador.classList.remove('active');
    buscarIcon.classList.remove('active');
    userIcon.classList.remove('active');
    carritoIcon.classList.remove('active');
    menuIcon.classList.remove('active');
    quitarBuscador.classList.remove('active');
    buscadorInput.value = '';
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active');       
    }
})

/************************* INICIO DE SESION *************************/

document.querySelector('.user-icon').addEventListener('click', () => {    
    iniciarSesion.classList.toggle('active'); 
    shoppingCar.classList.remove('active');
    buscador.classList.remove('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('active');       
    }
})

/************************* CARRITO DE COMPRAS *************************/

document.querySelector('.carrito-icon').addEventListener('click', () => {
    shoppingCar.classList.toggle('active');
    iniciarSesion.classList.remove('active');
    buscador.classList.remove('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('active');       
    }
})

/************************* MENU *************************/

document.querySelector('.menu-icon').addEventListener('click', () => {
    iniciarSesion.classList.remove('active');
    shoppingCar.classList.remove('active');
    buscador.classList.remove('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('active');       
    }
})



/************************* CARRITO DE COMPRAS *************************/

document.querySelector('#decrement').addEventListener('click', () => {
        if (data > 1) {
            data-=1;
            root.value = data;
            total.value = data * precio.value
        }
})

document.querySelector('#increment').onclick = () => {
    if (data === 1 || data <= 20 ) {
        data+=1
        root.value = data;

        total.value = data * precio.value
    }
}

document.querySelector('.eliminar').onclick = () => {
    let productoCarrito = document.querySelector('.producto-carrito');
    let totalCarrito = document.querySelector('.total-carrito');
    let botonComprar = document.querySelector('.comprar-producto');

    productoCarrito.remove()
    totalCarrito.remove()
    botonComprar.remove()
    total.remove()
    
}

/************************* CARROUSEL *************************/

nextButton.addEventListener('click', () => {
    for (let i = 0; i < slide.length; i--) {
        const slideWidth = slide[i].offsetWidth;
        slidesContainer.scrollLeft += slideWidth;
    }
})

prevButton.addEventListener('click', () => {

    for (let i = 0; i < slide.length; i--) {
        const slideWidth = slide[i].offsetWidth;
        slidesContainer.scrollLeft -= slideWidth;
        
    }    
})

/************************* CALIFICAR PRODUCTO *************************/

        for(const sliceContainer of sliceContainers){
        const allStars = sliceContainer.querySelectorAll('.rating .star');
        const heartIcon = sliceContainer.querySelectorAll('.heart-icon #heart-slide')

            heartIcon.forEach((heart) => {
                heart.addEventListener('click', () => {
                    heartIcon.forEach((heart) => {
                        heart.className = 'fa-solid fa-heart heart-2';
                    })
                    
                    console.log('prueba corazon')
                })   
            })
            
            allStars.forEach((star, i) => {
                star.addEventListener('click', () => {
                    console.log(i + 1)
                    let current_star_level = i - 1;
                    allStars.forEach((star, j) => {
                        console.log(j + 1)
                        if (current_star_level <= j - 1) {
                            star.style.color = 'orange';
                            star.style.fontSize = '1.2rem';
                        } else {
                            
                            star.style.color = '#aaa';
                            star.style.fontSize = '1.2rem';
                        }
                    })
                })
            })       
        }

        
window.addEventListener('load', () => {
    let reveal = document.querySelector('.reveal');

    reveal.classList.add('active');
})

window.addEventListener('scroll', () => { 
    let reveal = document.querySelectorAll('.reveal');
    let revealPoint = 10;

    for (let i = 0; i < reveal.length; i++) {
        
        let windowHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                reveal[i].classList.add('active');
            } else  {
                reveal[i].classList.remove('active');
            }
            
    }


    iniciarSesion.classList.remove('active'); 
    shoppingCar.classList.remove('active');
    buscador.classList.remove('active');
    buscarIcon.classList.remove('active');
    userIcon.classList.remove('active');
    carritoIcon.classList.remove('active');
    menuIcon.classList.remove('active');
    quitarBuscador.classList.remove('active');
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active');       
    }
})


let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


