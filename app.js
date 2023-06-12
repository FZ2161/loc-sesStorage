const login = 'admin'
const pass = 'admin'

function loginn(){
    const formLogin = document.getElementById('login').value
    const formPass = document.getElementById('pass').value

    console.log(formLogin)

    if(formLogin==login && formPass==pass){
        alert('zalogowano')
        localStorage.setItem('czyZalogowany', 'true')
    }else{
        alert('internet został usunięty')
        localStorage.setItem('czyZalogowany', 'false')
    }
}



function admin(){
    const czyZalogowany = localStorage.getItem('czyZalogowany')

    if(czyZalogowany!='true'){
        window.location.href = 'login.html'
    }
}