function formLogin() {
    const loginString =  `
    <span  class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#formModal"
        ><img class="mt-2" src="../../Images/Logo/Logo tài khoản.png" alt=""
    /></span>
    
    <div class="modal fade modal-lg" id="formModal">
    <div class="modal-dialog">
      <div class="modal-content bg-transparent border-0 ">
        <div class="modal-header border-0">
         
        </div>
        <div class="modal-body ">
          <div class="container-sign" id="container">
            <div class="form-container sign-up">
                <form >
                    <h1>Create Account</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in">
                <form >
                    <h1>Sign in</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                  
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <a href="#">Forget Your Password</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button class="hidden" id="login">Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h1>Hello Friend!</h1>
                        <p>Register with your pesonal details to use all of site features</p>
                        <button class="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="modal-footer border-0">
        </div>
      </div>
    </div>
</div>`;
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.innerHTML = loginString;
    }
}

formLogin();

