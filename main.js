// Show and hide login and register form
const LoginForm = document.getElementById('login-form'), 
    RegisterForm = document.getElementById('register-form')
    LoginBtn = document.getElementById('login-btn'),
    RegisterBtn = document.getElementById('register-btn')

// Show register
if (RegisterBtn) {
    RegisterBtn.addEventListener('click', () => {
        LoginForm.classList.remove('form-active')
        RegisterForm.classList.add('form-active')
    })
}

// Show Login
if (LoginBtn) {
    LoginBtn.addEventListener('click', () => {
        RegisterForm.classList.remove('form-active')
        LoginForm.classList.add('form-active')
    })
}

// Show and hide password
const showHiddenPassword = (LoginPassword, LoginEye) => {
    const input = document.getElementById(LoginPassword),
        IconEye = document.getElementById(LoginEye)

    IconEye.addEventListener('click', () => {
        // change password to text
        if (input.type === 'password') {
            // switch to text
            input.type = 'text'
            
            // icon change
            IconEye.classList.add('ri-eye-line')
            IconEye.classList.remove('ri-eye-off-line')
        }
        else {
            // switch to password
            input.type = 'password'

            // icon change
            IconEye.classList.add('ri-eye-off-line')
            IconEye.classList.remove('ri-eye-line')
        }
    })
}

showHiddenPassword('login_password', 'login-eye')
showHiddenPassword('register_password', 'register-eye')