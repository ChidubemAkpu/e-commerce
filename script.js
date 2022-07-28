let openClose = document.querySelectorAll('.for-open-close');
let cartToggle = document.querySelector('.product-cart-count');
let myCart = document.querySelector('.cart');
let myNotification = document.querySelector('.notification');
let productSection = document.querySelectorAll('section');
let plusMinusTarget = document.querySelectorAll('.plus-minus');
let num = 1;


for (let openAndClose of openClose){
    openAndClose.addEventListener('click', openCloseMenu);
}

for (let eachProductSection of productSection ){
    eachProductSection.id = 'section' + num;
    num++;
}

for (let eachPlusMinus of plusMinusTarget) {
    eachPlusMinus.querySelector('.for-plus').addEventListener('click', increaseQuantity);
    eachPlusMinus.querySelector('.for-minus').addEventListener('click', decreaseQuantity);
    eachPlusMinus.nextElementSibling.addEventListener('click', updateCart)
}

cartToggle.addEventListener('click', openCloseCart);





// Function that opens and close the menu items when hamburger/x is clicked
function openCloseMenu() {
    document.querySelector('.menu-items').classList.toggle('hide');
    setTimeout(() => document.querySelector('.for-transparent').classList.toggle('remove'),500)
}

// Function that opens and closes the cart when cart icon is clicked.
function openCloseCart() {
       myCart.classList.toggle('hide-cart')
}
// if (myNotification.innerHTML >= 1) {
//     myNotification.classList.toggle('hide-notification');
// }

// Functions that increases and decreases quantity of each product

function increaseQuantity(el) {
    let plusClick = el.currentTarget.parentElement.parentElement.parentElement;
    let plusClickId = plusClick.id;
    // console.log(plusClickId)
    let theTargetSection = document.querySelector('#' + plusClickId);
    let numberDisplay = +theTargetSection.querySelector('b').innerHTML;
    numberDisplay++;
    theTargetSection.querySelector('b').innerHTML = numberDisplay;
    return numberDisplay; 
}

function decreaseQuantity(el) {
    let plusClick = el.currentTarget.parentElement.parentElement.parentElement;
    let plusClickId = plusClick.id;
    //  console.log(plusClickId)
    let theTargetSection = document.querySelector('#' + plusClickId);
    let numberDisplay = +theTargetSection.querySelector('b').innerHTML;
     if( numberDisplay <= 0){
        numberDisplay = 0;
     }else{
        numberDisplay--;
     }
     theTargetSection.querySelector('b').innerHTML = numberDisplay;
}

// Function that updates the number of items in the cart

 function updateCart(el) {
    let cartUpdate = el.currentTarget.parentElement.parentElement;
    let plusClickId = cartUpdate.id;
    let theTargetSection = document.querySelector('#' + plusClickId);
    let numberDisplay = +theTargetSection.querySelector('b').innerHTML;
    let  displayNotification = +myNotification.innerHTML;
    if (displayNotification <= 0) {
        displayNotification = 0;
    }
    displayNotification += numberDisplay;
    myNotification.innerHTML = displayNotification;
    if (myNotification.innerHTML >= 1) {
        myNotification.classList.add('hide-notification');
    }
    theTargetSection.querySelector('b').innerHTML = 0;
 }