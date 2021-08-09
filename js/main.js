function logar(){
    const login = document.getElementById('login')
    const senha = Number(document.getElementById('senha'))
    const mudar = document.getElementById('mudar')
    if(login.value == 'Pedro'||'hendrio' && senha.value == '34970994'){
        localStorage.setItem("acesso",true);
        alert("usuário autenticado!")
        window.location.href = "https://www.google.com/"
    } else{
        mudar.innerHTML = 'Usuário ou Senha inválidos! <br>'
        mudar.innerHTML += 'Tente novamente.'
    }
}