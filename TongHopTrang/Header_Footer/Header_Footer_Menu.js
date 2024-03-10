/*
    Author: Thế Bảo.
    Day: 10/03/2024.
*/

function renderMenu() {
    const menuString = `<link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <header class="navbar navbar-expand-sm bg-light rounded-5 p-0 fixed-top" style="box-shadow: 2px 2px 15px black;">
    <a href="#" class="navbar-brand">
        <img src="../../Images/Logo/logo.png" alt="Avatar logo" style="width: 120px; padding-left: 10px;">
    </a>
    <div class="container-fluid">
        <ul class="navbar-nav" style="color: black; font-size: 18px;">
            <li class="navbar-item ps-5 pe-3"><a href="#" class="nav-link">Giới thiệu</a></li>
            <li class="navbar-item pe-3"><a href="#" class="nav-link">Dịch vụ</a></li>
            <li class="navbar-item pe-3"><a href="#" class="nav-link">Sản phẩm</a></li>
            <li class="navbar-item pe-3"><a href="#" class="nav-link">Thú cưng</a></li>
            <li class="navbar-item pe-3"><a href="#" class="nav-link">Liên hệ</a></li>
        </ul>
        <form action="" class="d-flex">
            <div class="input-group h-25" style="padding-top: 4px;">
                <span class="input-group-text border-black" style="border-top-left-radius: 20px; border-bottom-left-radius: 20px;"><img src="/Images/Logo/Union.png" alt=""></span>
                <input class="form-control border-black" type="text" name="" id="" style="width: 300px; margin-right: 80px; border-top-right-radius: 20px; border-bottom-right-radius: 20px;" placeholder="Tìm kiếm...">
            </div>
            <a href=""><img src="../../Images/Logo/logo giỏ hàng.png" alt=""></a>
            <a href=""><img src="../../Images/Logo/Logo tài khoản.png" alt=""></a>
        </form>
    </div>
</header>`;

    const headerMenu = document.getElementById("headerMenu");
    if (headerMenu) {
        headerMenu.innerHTML = menuString;
    }
}  // Lưu ý là bỏ vô cặp dấu `` thì code bên trong mới kh bị báo lỗi, đây không phải chuỗi bình thường.

function renderFooter() {
    const footer = `<link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <nav class="navbar navbar-expand-sm justify-content-center" style="background-color: #FCE7AD;">
    <div class="col-sm-12">
        <div class="row-sm-12" style="display: flex; justify-content: center; font-size: 24px;">
        <b>LIÊN HỆ HỖ TRỢ</b>
        </div>
        <div class="row-sm-12">
            <ul class="navbar-nav" style="display: flex; justify-content: center;">
                <li class="nav-item pe-5"><a href="" class="nav-link">
                    <img src="/Images/Logo/whatsapp.png" alt=""><b> +8430041975</b></a>
                </li>
                <li class="nav-item pe-5"><a href="" class="nav-link">
                    <img src="/Images/Logo/icons8-zalo-50 1.png" alt="">
                    <b>Pet Shop</b>
                </a></li>
                <li class="nav-item pe-5"><a href="" class="nav-link">
                    <img src="/Images/Logo/Vector.png" alt="">
                    <b>Pet Shop</b>
                </a></li>
                <li class="nav-item"><a href="" class="nav-link">
                    <img src="/Images/Logo/Group.png" alt="">
                    <b>petshopvn@gmail.com</b>
                </a></li>
            </ul>
        </div>
    </div>
</nav>`;

    const footerMenu = document.getElementById("footerMenu");
    if (footerMenu) {
        footerMenu.innerHTML = footer;
    }
}

renderMenu();
renderFooter();

// Đoạn code có chứa Boostrap nên cần import thư viện js, css của Boostrap rồi mới chạy