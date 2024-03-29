/*
    Author: Thế Bảo.
    Day: 10/03/2024.
*/

function renderMenu() {
    const menuString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>PETSHOP</title>
            <!-- Favicon -->
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="../Favicon/apple-icon-57x57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="../Favicon/apple-icon-60x60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="../Favicon/apple-icon-72x72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="../Favicon/apple-icon-76x76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="../Favicon/apple-icon-114x114.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="../Favicon/apple-icon-120x120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="../Favicon/apple-icon-144x144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="../Favicon/apple-icon-152x152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="../Favicon/apple-icon-180x180.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="../Favicon/android-icon-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="../Favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="../Favicon/favicon-96x96.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="../Favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="../Favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
    
            <!-- Embed font -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <!-- CSS -->
            <link rel="stylesheet" href="../CSS/navbar.css" />
            <link rel="stylesheet" href="../Boostrap/bootstrap.min.css" />
            <script src="../Boostrap/bootstrap.bundle.min.js"></script>
        </head>
        <body style="height: 10000000px">
            <!-- Header -->
            <header class="header">
                <nav class="navbar navbar-expand-sm px-5 fixed-top pb-0">
                    <div class="container">
                        <a href="./home.html">
                            <img
                                src="../Images/Logo/Logo_2.png"
                                alt=""
                                class="logo-img"
                            />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#idNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
    
                        <div class="collapse navbar-collapse" id="idNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="" class="nav-link">Giới Thiệu</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        href=""
                                        class="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        >Dịch Vụ</a
                                    >
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Khám Thú Y</a
                                            >
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Khách Sạn Cho Thú Cưng</a
                                            >
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Grooming - Cắt Tỉa</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        href=""
                                        class="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Sản phẩm
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link">Thức Ăn</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Quần Áo & Phụ Kiện</a
                                            >
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Mỹ Phẩm & Làm Đẹp</a
                                            >
                                        </li>
                                        <li class="dropdown-item">
                                            <a href="" class="nav-link"
                                                >Dụng Cụ Vệ Sinh</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="pets.html" class="nav-link">Thú Cưng</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">Liên Hệ</a>
                                </li>
                            </ul>
                            <div class="input-group search">
                                <span
                                    class="input-group-text bg-white border-black"
                                    style="
                                        border-top-left-radius: 20px;
                                        border-bottom-left-radius: 20px;
                                        border-right: none;
                                    "
                                    ><img src="../Images/Logo/Union.png" alt=""
                                /></span>
                                <input
                                    class="form-control border-black"
                                    type="text"
                                    name=""
                                    id=""
                                    style="
                                        margin-right: 60px;
                                        border-left: none;
                                        border-top-right-radius: 20px;
                                        border-bottom-right-radius: 20px;
                                        outline: none; /* tắt hiển thị viền ngoài khi select đang được focus */
                                        box-shadow: none;
                                    "
                                    placeholder="Tìm kiếm..."
                                />
                            </div>
                            <div class="header-action">
                                <a href=""
                                    ><img
                                        src="../Images/Logo/logo giỏ hàng.png"
                                        alt=""
                                        class="cart-icon"
                                /></a>
                                <a href=""
                                    ><img
                                        src="../Images/Logo/Logo tài khoản.png"
                                        alt=""
                                        class="account-icon"
                                /></a>
                            </div>
                        </div>
                    </div>
                </nav>
                
            </header>
            <!-- Main -->
           
        </body>
    </html>`;

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