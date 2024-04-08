// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
async function getDataProducts() {
  // const numCollections = await getDocs(productCol).size; // Lấy số lượng collection trong db
  // const numCollections = await getDocs(productCol).length; // Lấy số lượng document trong collection

  

  const productCol = collection(db, "product_1");
  let itemProducts = "";
  const querySnapshot = await getDocs(productCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    itemProducts += renderProductCard(item.name, item.price, item.imgMain);
    console.log(doc.id, " => ", doc.data());
  });

  document.getElementById('pets').innerHTML = itemProducts;
}

function renderProductCard(name, price, imgMain) {
  return `<div class="thumbnail border border-black" style="height: 250px; width: 180px;" id="pets">
            <div style="display: flex; justify-content: center;">
                <img src="${imgMain}" style="height: 130px;">
            </div>
            <div class="review">
                <div class="stars">
                    <svg width="10" height="10" viewBox="0 0 940.688 940.688">
                      <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 940.688 940.688">
                      <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 940.688 940.688">
                        <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 940.688 940.688">
                        <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 940.688 940.688">
                        <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                    </svg>
                    <div class="overlay" style="width: 37%"></div>
                </div>
                <div class="reviewNum">(132)</div>
            </div>
                <h6 class="nameProduct">${name}</h6>
                <h5 class="price text-success">Giá: ${price}</h5>
                <!-- <button class="btn btn-success themGioHang">Thêm vào giỏ hàng</button>--> 
          </div>`;
}

getDataProducts();