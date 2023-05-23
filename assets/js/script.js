// MODAL

const modal = document.getElementById("modal");

const openModal = document.getElementById("openModal");

openModal.addEventListener('click', () => {
    modal.classList.add('show')
} )

window.addEventListener("click", (event) => {
    if (event.target.id ==="modal") {
        modal.classList.remove('show')
    }
})

// PICK FAVORITE

const img1 = document.getElementById('thumb1')

function hover(thumb2){
    img1.src = "assets/images/Product/Choose-02.jpg"
}

function hover(thumb3){
    img1.src = "assets/images/Product/Choose-03.jpg"
}

function hoverOut(img){
    img1.src = "assets/images/Product/Choose-01.jpg"
}


// const img2 = document.getElementById('thumb2')

// img2.addEventListener('mouseover', (event) => {
//     img1.src = img2.src
// })

// BURGERMENU

const burgerMenu = document.getElementById("burgerMenu")
const menuList = document.getElementById("menuList")
const containerMain = document.getElementById("containerMain")
const header = document.querySelector("header")

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle("active")
    containerMain.classList.toggle("active")
    header.classList.toggle("active")
})


// GALLERY 1
window.addEventListener("load", generateGrid); 

const myImages = [ 'assets/images/Product/Chili-01.jpg', 'assets/images/Product/Chili-02.jpg', 'assets/images/Product/Chili-03.jpg', 'assets/images/Product/Chili-04.jpg', 'assets/images/Product/Chili-05.jpg', 'assets/images/Product/Chili-06.jpg']; // til array opgaven, byg dit array af billed urlér her.
const myApp = document.getElementById("gallery")

function generateGrid() {
    clearApp();

    myImages.map((imageUrl) => {
console.log('map')
        createCard(imageUrl);
    });
}

function createCard(myUrl) {
console.log('create card')
    let myArticleTag = document.createElement('article');
    myArticleTag.classList.add('galleryCard')
    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl
    myImageTag.addEventListener('click', clickSmall);


    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);

}



function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    buildBig(myUrl);
    
}

function buildBig(myUrl) {
    clearApp();
    let myArticleTag = document.createElement('article');
    myArticleTag.classList.add("detailView")
    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl
    myImageTag.addEventListener('click', generateGrid);


    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);
}

function clearApp() {
    myApp.innerHTML = ''
}

// PICK FAVORITE GALLERY


