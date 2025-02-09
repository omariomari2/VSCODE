if (!document.referrer.includes('verify.html')) {
    window.location.href = 'verify.html';
}

const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const btn = document.getElementById("btn");

registerForm.style.left = "450px";

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btn.style.left = "0";
}

function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUser(username, password) {
    const users = getUsers();
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        window.location.href = '../teammate/index.html';
    } else {
        alert('Invalid username or password!');
    }
});


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    const users = getUsers();
    if (users.some(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    saveUser(username, password);
    alert('Registration successful! Please login.');

    registerForm.reset();
    login();
});


document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});
