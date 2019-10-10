const $valorInicial = document.getElementById("valor_inical");
const $valorFinal = document.getElementById("moeda_final");



const converterMoeda = (valorInical, json, valorFinal) =>{

    const url = "https://api.hgbrasil.com/finance?key=development";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    fetch(proxy + url)
        .then( res => res.json())
        .then( res =>  mostrarMoedas(res));

    const mostrarMoedas = (end) =>{
    // alert(valorInical);
        console.log(end);
    
    }
    // console.log($nullsim);
    // let teste2 =  $nullsim.results.currencies.USD.buy;
    // let resultado = teste2 * valorInical;
    // $valorFinal.value = resultado;
    
}







$valorInicial.addEventListener('blur', () => converterMoeda());