const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const car = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer  = document.querySelector('.cards-container');

//EVENT
menuEmail.addEventListener('click',toggleDesktopMenu); //MOSTRAR Y OCULTAR MENU
menuHamIcon.addEventListener('click',toggleMobileMenu); // MOSTAR Y OCULTAR MOBILE
car.addEventListener('click',toggleCarritoAside); // MOSTAR Y OCULTAR PRODUCT DETAIL
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)


function toggleDesktopMenu(){
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoAsideClosed){
        shoppingCartContainer.classList.add('inactive')}

    desktopmenu.classList.toggle('inactive');}

function toggleMobileMenu(){
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoAsideClosed){
        shoppingCartContainer.classList.add('inactive')}
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive');}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive');
   // 
     

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed)
    {
        desktopmenu.classList.add('inactive');}
        shoppingCartContainer.classList.toggle('inactive');
    
    const isproductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isproductDetailClosed)
    {
        productDetailContainer.classList.add('inactive');}}
        
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');}   

const productList = [];

productList.push({
    name:'Bike',
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'TV',
    price:2500,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'PC',
    price:8000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'PC',
    price:8000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'PC',
    price:8000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'PC',
    price:8000,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}); 


function renderProducts(arr)
{
    for(product of arr)
{
  const productCard = document.createElement('div'); 
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src',product.image);
  productImg.addEventListener('click',openProductDetailAside);

  const productInfo = document.createElement('div'); 
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.appendChild(productName);
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);
  cardsContainer.appendChild(productCard);}}

renderProducts(productList);


