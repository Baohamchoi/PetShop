function formLogin() {
    const loginString =  `
    <link rel="stylesheet" href="../../Boostrap/bootstrap.min.css">
    <script src="../../Boostrap/bootstrap.bundle.min.js"></script>
    <span  class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#formModal"
        ><img class="mt-2" src="../../Images/Logo/Logo tài khoản.png" alt=""
    /></span>`;
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.innerHTML = loginString;
    }
}  

formLogin();

