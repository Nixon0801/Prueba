document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usuarioInput = document.getElementById('usuario');
    const contraseñaInput = document.getElementById('contraseña');
    const toggle = document.querySelector(".toggle"),
    passwordInput = document.querySelector("input[type='password']");

toggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggle.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        passwordInput.type = "password";
        toggle.classList.replace("uil-eye", "uil-eye-slash");
    }
});


    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = 'nixon'; 
        const contraseña = '123';

        if (usuarioInput.value === usuario && contraseñaInput.value === contraseña) {
            window.location.href ='index.html';
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });
});





