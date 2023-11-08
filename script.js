const bemvindo = document.querySelector(".bem-vindo");
const loginbtn = document.querySelector(".login-btn");
const registerbtn = document.querySelector(".register-btn");

const login = document.querySelector(".login");
const register = document.querySelector(".register");

loginbtn.style.display = 'none';
register.style.opacity = '0';

function moveToLogin() {
    bemvindo.style.transform = 'translateX(0)';
    bemvindo.style.transition = 'all 700ms ease';

    loginbtn.style.display = 'none';
    login.style.opacity = '1';
    login.style.transition = 'all 700ms ease';

    register.style.opacity = '0';
    registerbtn.style.display = 'flex';
}

function moveToRegister() {
    bemvindo.style.transform = 'translateX(100%)'
    bemvindo.style.transition = 'all 700ms ease';

    loginbtn.style.display = 'flex';
    login.style.opacity = '0';
    login.style.transition = 'all 700ms ease';

    register.style.opacity = '1';
    registerbtn.style.display = 'none';
}

const anchor = window.location.hash;

if (anchor === '#register') {
    bemvindo.style.transform = 'translateX(100%)';

    login.style.opacity = '0';
    register.style.opacity = '1';

    loginbtn.style.display = 'flex';
    registerbtn.style.display = 'none';
} else {
    bemvindo.style.transform = 'translateX(0)';
    login.style.opacity = '1';
    register.style.opacity = '0';

    loginbtn.style.display = 'none';
    registerbtn.style.display = 'flex';
}

const nohave = document.querySelector('.nohave');

nohave.addEventListener('click', () => {

    bemvindo.style.transform = 'translateX(100%)'
    bemvindo.style.transition = 'all 700ms ease';

    loginbtn.style.display = 'flex';
    login.style.opacity = '0';
    login.style.transition = 'all 700ms ease';

    register.style.opacity = '1';
    registerbtn.style.display = 'none';

});