function renderMenu() {
    const menuString = `<link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <div class="container">
      <header
        class="navbar navbar-expand-sm bg-light rounded-5"
        style="box-shadow: 2px 2px 15px black; height: 70px;"
      >
        <a href="#" class="navbar-brand">
          <img
            src="../../Images/Logo/logo.png"
            alt="Avatar logo"
            style="width: 120px; padding-left: 10px"
          />
        </a>
        <div class="container-fluid">
          <ul class="navbar-nav" style="color: black; font-size: 18px">
            <li class="navbar-item ps-5 pe-3">
              <a href="#" class="nav-link">Giới thiệu</a>
            </li>
            <li class="navbar-item dropdown pe-3">
              <a
                href="trangchu.html"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Dịch vụ</a
              >
              <ul class="navbar-item dropdown-menu">
                <li><a href="#" class="dropdown-item">Spa thú cưng</a></li>
                <li><a href="#" class="dropdown-item">Khám sức khỏe</a></li>
                <li>
                  <a href="#" class="dropdown-item">Khách sạn thú cưng</a>
                </li>
              </ul>
            </li>
            <li class="navbar-item pe-3">
              <a href="#" class="nav-link">Sản phẩm</a>
            </li>
            <li class="navbar-item pe-3">
              <a href="#" class="nav-link">Thú cưng</a>
            </li>
            <li class="navbar-item pe-3">
              <a href="#" class="nav-link">Liên hệ</a>
            </li>
          </ul>
          <form action="" class="d-flex">
            <div class="input-group h-25" style="padding-top: 4px">
              <span
                class="input-group-text border-black"
                style="
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                  border-right: none;
                "
                ><img src="/Images/Logo/Union.png" alt=""
              /></span>
              <input
                class="form-control border-black"
                type="text"
                name=""
                id=""
                style="
                  width: 300px;
                  margin-right: 80px;
                  border-left: none;
                  border-top-right-radius: 20px;
                  border-bottom-right-radius: 20px;
                "
                placeholder="Tìm kiếm..."
              />
            </div>
            <a href=""
              ><img src="../../Images/Logo/logo giỏ hàng.png" alt=""
            /></a>
            <a href=""
              ><img src="../../Images/Logo/Logo tài khoản.png" alt=""
            /></a>
          </form>
        </div>
      </header>
    </div>`;

    const headerMenu = document.getElementById("headerMenu");
    if (headerMenu) {
        headerMenu.innerHTML = menuString;
    }
}  // Lưu ý là bỏ vô cặp dấu `` thì code bên trong mới kh bị báo lỗi, đây không phải chuỗi bình thường.

function renderFooter() {
    const footer = `<link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
      <!-- Embed font -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
      />
      <!-- CSS -->
      <link rel="stylesheet" href="../CSS/footer.css" />
      <link rel="stylesheet" href="../Boostrap/bootstrap.min.css" />
      <script src="../Boostrap/bootstrap.bundle.min.js"></script>
</head>
<body>
    <footer class="footer">
        <div class="container">
            <div class="row footer-row">
                <div class="col footer-col">
                    <a href="../HTML/home.html">
                        <img
                            src="../Images/Logo/Logo.png"
                            alt=""
                            class="logo"
                        />
                        <span class="logo-title">PET SHOP</span>
                    </a>
                </div>
                <div class="col footer-col">
                    <h3 class="footer-title">CHÍNH SÁCH DỊCH VỤ</h3>
                    <ul class="footer-list">
                        <li>
                            <a href="">Chính Sách Bảo Mật</a>
                        </li>
                        <li>
                            <a href="">Chính Sách Đổi Trả Hàng</a>
                        </li>
                        <li>
                            <a href="">Chính Sách Đưa Đón & Giao Hàng</a>
                        </li>
                    </ul>
                </div>
                <div class="col footer-col">
                    <h3 class="footer-title">LIÊN HỆ CHÚNG TÔI</h3>
                    <ul class="footer-list">
                        <li>
                            <a href=""
                                >Địa Chỉ: 116 Đường 3 Tháng 2, Phường 12,
                                Quận 10, TP.Hồ Chí Minh</a
                            >
                        </li>
                        <li>
                            <a href="">Hotline: 097430095</a>
                        </li>
                        <li>
                            <a href="">Email: petshop@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div class="col footer-col">
                    <h3 class="footer-title">MẠNG XÃ HỘI</h3>
                    <ul class="footer-list">
                        <li>
                            <a href="" class="footer-social">
                                <img
                                    src="../Images/TrangChinh/Facebook.svg"
                                    alt=""
                                />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer-social">
                                <img
                                    src="../Images/TrangChinh/Instargram.svg"
                                    alt=""
                                />
                                <span>Instargram</span>
                            </a>
                        </li>
                        <li>
                            <a href="" class="footer-social">
                                <img
                                    src="../Images/TrangChinh/Linked-in.svg"
                                    alt=""
                                />
                                <span>Linked-in</span>
                            </a>
                        </li>
                        <li>
                            <a href=" " class="footer-social">
                                <img
                                    src="../Images/TrangChinh/Twitter.svg"
                                    alt=""
                                />
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright 2024 © PET SHOP © All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

    const footerMenu = document.getElementById("footerMenu");
    if (footerMenu) {
        footerMenu.innerHTML = footer;
    }
}

renderMenu();
renderFooter();