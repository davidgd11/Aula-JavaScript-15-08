//Lista de usuarios
let listadados= [];

//criando

function Campos(campo1, campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}

//Disparar o botão
const btnEnviar = document.querySelector("#btnsubmit")


//Evento do click
btnEnviar.addEventListener('click',()=>{
    const inputCampo1 = document.querySelector('#campo1');
    const inputCampo2 = document.querySelector('#campo2');
    //instanciando o objeto para receber no campo
    let info = new Campos(inputCampo1.value, inputCampo2.value)

    //pega oq estiver dentro do listados
    listadados.push(info);
    //armazena tudo oq for adicionado na lista dados convertidos com JSON
    localStorage.setItem("dados",JSON.stringify(listadados))
})