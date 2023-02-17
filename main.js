const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartAside = document.querySelector("#shoppingCart");
const menuEmail = document.querySelector(".navbar-email");
const menuBurgerIcon = document.querySelector(".menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#product-detail");
const closeButton = document.querySelector(".product-detail-close")

menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);
closeButton.addEventListener('click',removeProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    if(!shoppingCartAside.classList.contains('inactive')){
        shoppingCartAside.classList.toggle('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.toggle('inactive')
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    if(!shoppingCartAside.classList.contains('inactive')){
        shoppingCartAside.classList.toggle('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.toggle('inactive')
    }
}

function toggleShoppingCart() {
    shoppingCartAside.classList.toggle('inactive')

    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.toggle('inactive')
    }
}
function activeProductDetail() {
    if(productDetail.classList.contains('inactive')){
        productDetail.classList.remove('inactive')
    }
    
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }
    if(!shoppingCartAside.classList.contains('inactive')){
        shoppingCartAside.classList.toggle('inactive')
    }   
}
function removeProductDetail() {
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive')
    }
}


const productList = [];
productList.push({
    name: 'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'computador',
    price: '1200',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

renderProducts(productList)

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click',activeProductDetail);

        const productImg = document.createElement('img'); 
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}


