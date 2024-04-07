async function fetchDataAllProduct() {
  const docRef = collection(db, "Bánh thưởng cho chó vị khoai môn VEGEBRAND Orgo Dental Bites Milky Taro");
  let itemProducts = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    itemProducts += renderProductCard(item.name, item.price, item.imgMain);
    console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = itemProducts;
  });
}