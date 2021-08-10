function logar(){
    const login = document.getElementById('login')
    const senha = document.getElementById('senha')
    const mudar = document.getElementById('mudar')
    if(login.value == "Pedro" || "Rodrigo" && senha.value == "34970994" || senha.value == "784512"){
        localStorage.setItem("acesso",true);
        alert("usuário autenticado!")
        window.location.href = "https://www.google.com/"
    } else {
        mudar.innerHTML = '<br><center style="font-size:17px"> Usuário ou Senha inválidos!</center>'
        mudar.innerHTML += '<center style="font-size:17px">Tente novamente.</center>'
    } 
}
