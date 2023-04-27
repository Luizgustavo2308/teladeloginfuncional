let email = document.querySelector('#email');
let senha= document.querySelector('#senha');

let button = document.querySelector('#button');

button.addEventListener('click', (e)=> {
    e.preventDefault();

    let pessoaValida ={
        email:'',
        senha:''
    }
    const pessoas = JSON.parse(localStorage.getItem('users'));
    pessoas.forEach(element => {
        if(email.value ===element.email && senha.value ===element.password
            ){
            pessoaValida={
                
                email:element.email,
                senha:element.password
            }
            location.href ="dash.html"
        }
        
    });
})
