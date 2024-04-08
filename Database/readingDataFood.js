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

// Mảng dữ liệu áp cứng cho data

// Lấy collection PetData

// async function getDataProducts() {

async function getDataFoods() {
  let allItems = []; // Tạo một mảng để lưu trữ tất cả các mặt hàng thức ăn từ tất cả các bộ sưu tập

  for (let i = 1; i <= 10; i++) {
    let productCollection = "product_" + i;
    const productCol = collection(db, productCollection);
    const querySnapshot = await getDocs(productCol);
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      // Kiểm tra nếu giá trị của trường "category" là "food"
      if (item.category === "food") {
        allItems.push(item); // Thêm mỗi mặt hàng thức ăn vào mảng allFoodItems
        console.log(doc.id, " => ", doc.data());
      }
    });
  }

  // Gọi hàm renderItems để render tất cả các mặt hàng thức ăn trong mảng allFoodItems
  renderItems(allItems);
}

function renderItems(items) {
  let itemProducts = "";
  items.forEach(item => {
    const { name, price, imgMain } = item;
    itemProducts += renderFoodCard(name, price, imgMain);
  });
  document.getElementById('foods').innerHTML = itemProducts;
}

// Hàm renderFoodCard
function renderFoodCard(name, price, imgMain) {

  return `<div class="thumbnail border border-black" style="height: 250px; width: 180px; margin-right: 32px" id="pets">
            <div class="frameImg">
                <img src="${imgMain}">
            </div>
 
            <h6 class="nameProduct">${name}</h6>
                <h5 class="price text-danger">${price} VND</h5>
                <!-- <button class="btn btn-success themGioHang">Thêm vào giỏ hàng</button>--> 
          </div>`;
}

getDataFoods();