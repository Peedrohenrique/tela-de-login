/*variável JSON.*/
var usuarios = [
    { "login": "pedro", "senha": "34970994" },
    { "login": "rodrigo", "senha": "784512" },
    { "login": "henrique", "senha": "henrique" },
    { "login": "sarah", "senha": "teamopedro" },
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    const mudar = document.getElementById('mudar')

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            localStorage.setItem("acesso", true);
            alert("usuário autenticado!")
            window.location = "Home.html"
            return true;
        }
    }
    mudar.innerHTML = '<br><center style="font-size:17px"> Usuário ou Senha inválidos!</center>'
    mudar.innerHTML += '<center style="font-size:17px">Tente novamente.</center>'
    return false;
}



/*function logar(){
    const login = document.getElementById('login')
    const senha = Number(document.getElementById('senha'))
    const mudar = document.getElementById('mudar')
    if(login.value == 'Pedro' || 'Hendrio' && senha.value == '34970994' || senha.value == 'pedro'){
        localStorage.setItem("acesso",true);
        alert("usuário autenticado!")
        window.location.href = "https://www.google.com/"
    } else{

        mudar.innerHTML = '<br><center style="font-size:17px"> Usuário ou Senha inválidos!</center>'
        mudar.innerHTML += '<center style="font-size:17px">Tente novamente.</center>'
    }
}
*/
