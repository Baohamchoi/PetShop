// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfUNFkMldAkdyMprfW20xoyD-HtXtz6RE",
  authDomain: "petshopdb-8fc3d.firebaseapp.com",
  projectId: "petshopdb-8fc3d",
  storageBucket: "petshopdb-8fc3d.appspot.com",
  messagingSenderId: "719810590943",
  appId: "1:719810590943:web:2f385e37ca17de869a116a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// Kết nối db
const db = getFirestore(app);

// Collection Food
async function getDataFood() {
  const foodCol = collection(db, "food");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain);
    console.log(productItems);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection clothes
async function getDataCleaning() {
  const foodCol = collection(db, "cleaning");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection cosmetic
async function getDataCosmetic() {
  const foodCol = collection(db, "cosmetic");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection cleaning
async function getDataClothes() {
  const foodCol = collection(db, "clothes");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Hàm renderFoodCard
function renderProductCard(name, price, imgMain) {
  return `<div class="thumbnail border border-black" style="height: 250px; width: 180px; margin-right: 32px" id="pets">
            <div class="frameImg">
                <img class="lazy" src="${imgMain}">
            </div>
            <h6 class="nameProduct">${name}</h6>
                <h5 class="price text-danger">${price}</h5>
                <button class="btn btn-success themGioHang">Thêm vào giỏ hàng</button>
          </div>`;
}

const food = document.querySelector('#food');
const clothes = document.querySelector('#clothes');
const cleaning = document.querySelector('#cleaning');
const cosmetic = document.querySelector('#cosmetic');

food.addEventListener('click', function() {
  getDataFood();
});

clothes.addEventListener('click', function() {
  getDataClothes();
});

cleaning.addEventListener('click', function() {
  getDataCleaning();
});

cosmetic.addEventListener('click', function() {
  getDataCosmetic();
});

getDataFood();

// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages = document.querySelectorAll("img.lazy");    
  let lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        console.log(scrollTop);
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});