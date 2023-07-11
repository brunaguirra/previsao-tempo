
const key ="c0d9a0b9a56a888ba496c1c80b33331b"

function MostrarDados(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) +"°C" //Math.floor arredondar temperatura
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: "+ dados.main.humidity+"%"
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    /*constante dados é para quando for pegar dados de outro servidor e não se sabe quanto tempo vai demorar, 
    importante colocar lang-pt_br, pois a response do servidor é em inglês, units = metric, ser em celsius e não em fahreheint*/
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json())

    MostrarDados(dados)
} 

function cliqueiNoBotao(){

    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
