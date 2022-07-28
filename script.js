let openClose = document.querySelectorAll('.for-open-close');
let cartToggle = document.querySelector('.product-cart-count');
let myCart = document.querySelector('.cart');
let myNotification = document.querySelector('.notification');
let productSection = document.querySelectorAll('section');
let plusMinusTarget = document.querySelectorAll('.plus-minus');
let forNoProduct = document.querySelector('.no-product');
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
       let contentOfCart = document.querySelectorAll('.cart-content');
       if (contentOfCart.length > 0) {
        cartCloseOpen = forNoProduct.classList.add('hide-no-product')
        } else{
            forNoProduct.classList.remove('hide-no-product');
        }

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
    let thisImage = theTargetSection.querySelector('.active-product>img').src;
    let pos = +thisImage.indexOf('image');
    let imageLink = thisImage.slice(pos);
    // alert(imageLink)
    let thePrice = theTargetSection.querySelector('.for-price h1').innerHTML;
    let normalAmount = +thePrice.slice(1);
    let normalAmountNumber = normalAmount.toFixed(2);
    let totalAmount = (normalAmountNumber * numberDisplay).toFixed(2);
    let totalAmountToDisplay = `$${totalAmount}`;
    theTargetSection.querySelector('b').innerHTML = 0;
    myCart.insertAdjacentHTML("beforeend", `
    <div class="cart-content" id = "${'cart' + plusClickId}">
    <div class="cart-item">
        <img src="${imageLink}" alt="">
        <div>
            <p>Autumn Limited Edition...</p> 
            <div class="show-price">
                <span>${thePrice} x ${numberDisplay}</span> <h3>${totalAmountToDisplay}</h3>
            </div>
        </div>
       
        <div class="delete">
            <img src="images/icon-delete.svg" alt="">
        </div>
        
    </div>
    <div class="for-checkout">Checkout</div>
</div> 
    `)
  
 }