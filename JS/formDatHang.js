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

    $('#datHang').on('click', function(event) {
        event.preventDefault(); // Chặn hành động mặc định (hiển thị alert)
        alert('Đặt hàng thành công');
      
        // Chuyển hướng trang sau khi hiển thị thông báo
        window.location.href = 'products.html';
      });
});