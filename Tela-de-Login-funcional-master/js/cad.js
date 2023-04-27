let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let button = document.querySelector('#button');

let usuario = []

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (nome.value == "" || email.value == "" || senha.value == "") {
        alert("coloque os dados para continuar")

    } else {
        let pessoa = {
            name: nome.value,
            email: email.value,
            password: senha.value
        }
        usuario = local()
        usuario.push(pessoa)
        localStorage.setItem('users', JSON.stringify(usuario))
        location.href = "login.html"
    }
})
const local = () =>{
let dados =JSON.parse(localStorage.getItem('users') || '[]')
return dados
}