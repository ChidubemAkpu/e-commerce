const forOpenClose = document.querySelectorAll('.for-open-close');
const productImage = document.querySelectorAll('.product-image');
const myCartItems = document.querySelectorAll('.cart-content');
const myProductCount = document.querySelector('.product-cart-count');
let myCart = document.querySelector('.cart');
let forPrice = document.querySelector('.for-price h1');
let count = 0;


let cartUpdate = document.querySelector('.click-to-update-cart');
cartUpdate.addEventListener('click', addItemToCart)

myProductCount.addEventListener('click', toggleCart)
function toggleCart(){
    myCart.classList.toggle('hide-cart')
}

function addItemToCart(){
    let productTotal = forPrice.innerHTML.slice(1) * document.querySelector('.plus-minus b').innerHTML;
    let productTotalEx = forPrice.innerHTML + ' x ' + document.querySelector('.plus-minus b').innerHTML;
    let createClass = document.createElement('div');
    createClass.className = 'cart-item';
    let cloneImage = document.querySelector('.active-product>img').cloneNode(true);
    createClass.append(cloneImage);
    // myCart.append(createClass);
    createClass.insertAdjacentHTML("beforeend",`<div>
    <p>Autumn Limited Edition...</p> 
    <div class="show-price">
        <span>${productTotalEx}</span> <h3>${productTotal}</h3>
    </div>
</div>

<div class="delete">
    <img src="images/icon-delete.svg" alt="">
</div>

`);

myCartItems[0].append(createClass);
myCartItems[0].insertAdjacentHTML('beforeend','<div class="for-checkout">Checkout</div>')

}
if (myCartItems.length == 0) {
    let noItem = document.createElement('div');
    noItem.className = 'no-product';
    noItem.innerHTML = 'Your cart is empty';
    noItem.style.fontWeight = '700'
    noItem.style.color = 'hsl(219, 9%, 45%)'
    noItem.style.textAlign = 'center';
    myCart.append(noItem);
}

const plusOne = document.querySelector('.for-plus');
const minusOne = document.querySelector('.for-minus');
plusOne.addEventListener('click', myPlusCount);
minusOne.addEventListener('click', myMinusCount);
function myMinusCount(){
    --count;
    if (count < 0) {
        count = 0;
        
    }
    document.querySelector('.plus-minus b').innerHTML = count;
    document.querySelector('.notification').innerHTML = count;
}
function myPlusCount(){
    ++count;
    document.querySelector('.plus-minus b').innerHTML = count;
    document.querySelector('.notification').innerHTML = count;
}
for (let openClose of forOpenClose) {
    openClose.addEventListener('click',openCloseMenu);
   
}

function openCloseMenu() {
    document.querySelector('.menu-items').classList.toggle('hide');
    setTimeout(() => document.querySelector('.for-transparent').classList.toggle('remove'),500)
}

for (var eachImage of productImage) {
    eachImage.addEventListener('click', openTransparentProduct); 
}

function openTransparentProduct(){
    document.querySelector('.transparent-product').style.display='grid';
    let addMe = eachImage.cloneNode(true);
    document.querySelector('.transparent-product').append(addMe)
    document.querySelector('.close-transparent').addEventListener('click', closeTransparentProduct)
    function closeTransparentProduct() {
        addMe.remove();
        document.querySelector('.transparent-product').style.display='none';

    }   
}

// alert(document.querySelector('.active-product>img'))