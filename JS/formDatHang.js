$(document).ready(function() {
    var name = localStorage.getItem('name');
    var img = localStorage.getItem('img');
    var price = localStorage.getItem('price');
    var amount = localStorage.getItem('amount');

    $('#name').text(name);
    $('#img').attr('src', img);
    $('#price').text(price);
    $('#amount').text(amount);

    // Tổng tiền
    $('#total').text(price);

    // Hàm kiểm tra họ tên
    function checkTen() {
        var ten = document.getElementById('hoten').value;
        var regexHaiTu = /^[A-Z][a-z]+(\s[A-Z][a-z]+){1,}$/;

        if (ten.trim().length == 0 || ten == null) {
            $('#errHoTen').text('Họ tên không được để trống');
            return false;
        } else if (!regexHaiTu.test(ten)) {
            $('#errHoTen').text('Họ tên phải có ít nhất 2 từ');
            return false;
        } else {
            $('#errHoTen').text('');
            return true;
        }
    }
    $("#hoten").blur(function() {
        checkTen();
    });

    // Hàm kiểm tra số điện thoại
    function checkSDT() {
        var sdt = document.getElementById('sdt').value;
        var regexSDT = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        if (sdt.trim().length == 0 || sdt == null) {
            $('#errSDT').text('Số điện thoại không được để trống');
            return false;
        } else if (!regexSDT.test(sdt)) {
            $('#errSDT').text('Số điện thoại không hợp lệ');
            return false;
        } else {
            $('#errSDT').text('');
            return true;
        }
    }

    $("#sdt").blur(function() {
        checkSDT();
    });

    // Hàm kiểm tra email
    function checkEmail() {
        var email = document.getElementById('email').value;
        var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim().length == 0 || email == null) {
            $('#errEmail').text('Email không được để trống');
            return false;
        } else if (!regexEmail.test(email)) {
            $('#errEmail').text('Email không hợp lệ');
            return false;
        } else {
            $('#errEmail').text('');
            return true;
        }
    }

    $("#email").blur(function() {
        checkEmail();
    });

    // Hàm kiểm tra địa chỉ
    function checkDiaChi() {
        var diaChi = document.getElementById('diachi').value;

        if (diaChi.trim().length == 0 || diaChi == null) {
            $('#errDiaChi').text('Địa chỉ không được để trống');
            return false;
        } else {
            $('#errDiaChi').text('');
            return true;
        }
    }

    $("#diachi").blur(function() {
        checkDiaChi();
    });

    $('#datHang').on('click', function(event) {
        event.preventDefault(); // Chặn hành động mặc định (hiển thị alert)
        alert('Đặt hàng thành công');
      
        // Chuyển hướng trang sau khi hiển thị thông báo
        window.location.href = 'products.html';
      });
});