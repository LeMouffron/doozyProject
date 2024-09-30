//! system.01=localhostLOginx-server(To-DoList)

//TODO/ Login sytem
/*legend languages:=
    //? blue line comments = English
    //* comentários de linha verde = Português 
*/

//? ./en-us: Simulating a registration and login system with LocalStorage
//* ./pt-br: Simulando um sistema de cadastro e login com LocalStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

//? ./en-us: References to elements on the page
//* ./pt-br: Referências aos elementos da página
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const registerBtn = document.getElementById('register-btn');

//? ./en-us: Function to redirect to the main To-Do List interface
//* ./pt-br: Função para redirecionar para a interface principal do To-Do List
function redirectToTodoList() {
  window.location.href = 'todolist.html';
}

//? ./en-us: Login function
//* ./pt-br: Função de login
function login(event) {
  event.preventDefault();
  
  const email = emailInput.value;
  const password = passwordInput.value;
  
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    message.textContent = 'Login bem-sucedido! Redirecionando...';
    message.style.color = 'green';
    setTimeout(redirectToTodoList, 1000); // 1 sec to redirect
  } else {
    message.textContent = 'Email ou senha incorretos!';
    message.style.color = 'red';
  }
}

//? ./en-us: Registration function
//* ./pt-br: Função de cadastro
function register() {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (email === '' || password === '') {
    message.textContent = 'Preencha todos os campos!';
    message.style.color = 'red';
    return;
  }
  
  const userExists = users.some(user => user.email === email);
  
  if (userExists) {
    message.textContent = 'Usuário já cadastrado!';
    message.style.color = 'red';
  } else {
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users)); // LocalStorage
    message.textContent = 'Cadastro bem-sucedido! Redirecionando...';
    message.style.color = 'green';
    setTimeout(redirectToTodoList, 1000); // 1 sec to redirect
  }
}

//! Events
loginForm.addEventListener('submit', login);
registerBtn.addEventListener('click', register);

//!endingOfSystem ///////////////////////////////////////////////////////////////////////////