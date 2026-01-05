const seccionNosotros = document.querySelector('#nosotros');
const textoNosotros = document.querySelector('.nosotros_texto');

const menuHamburguer = document.querySelector('#btn_hamburguesa');
const menu = document.getElementById("menuLista");

menuHamburguer.addEventListener('click', () => {
    // Si tiene la clase 'activo' la saca, si no la tiene la agrega
    menu.classList.toggle("activo");
});