$(document).ready(function() {
    // Lấy dữ liệu từ Local Storage
    const products = JSON.parse(localStorage.getItem('products'));
    
    // Sử dụng dữ liệu products cho mục đích của bạn
    // console.log(products);


    hienThiDSSanPham(products);

    const datHang = $('#btn-datHang');
    datHang.on('click', function() {

        window.location.href = 'formDatHang.html';
    });
});

function hienThiDSSanPham(products) {
    const productsContainer = document.getElementById('products-contain');
    let productsHTML = '';

    products.forEach(product => {
        const name = product.name;
        const img = product.img;
        const price = product.price;
        const quantity = product.quantity;

        console.log(name, img, price, quantity);

        productsHTML += hienThiDSSanPhamDaChon(name, img, price, quantity);
    });

    productsContainer.innerHTML = productsHTML;
}

function hienThiDSSanPhamDaChon(name, img, price, quantity) {
    return `<div class="product d-flex flex-row align-items-center ps-5">
    <div class="square sp1"></div>
    <img src="${img}" alt="" class="img ms-2">
    <label for="" class="name ms-4">${name}</label>
    <select name="" id="" class="phanLoaiSelect">
        <option value="0">Phân loại hàng</option>
        <option value="">400 (gr)</option>
        <option value="">1 (kg)</option>
        <option value="">2 (kg)</option>
        <option value="">10 (kg)</option>
    </select>
    <label for="" class="donGia text-light">${price}</label>
    <div>
        <div class="amountCo d-flex flex-row justify-content-center align-items-center bg-light">
            <img class="me-2" src="../Images/Logo/minus.png" alt="" id="removeAmount">
            <input type="text" value="${quantity}" id="amountNum" class="">
            <img class="ms-2" src="../Images/Logo/plus.png" alt="" id="addAmount">
        </div>
    </div>
    <label for="" class="soTien text-light">120.000 VND</label>
    <div>
        <button class="delete text-light btn btn-danger">Xóa</button>
    </div>
</div>`;
}
