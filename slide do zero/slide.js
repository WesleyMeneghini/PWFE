// instanciar os elementos da pagina html
const $next = document.getElementById("next");
const $prev = document.getElementById("prev");

const loadImagens = () => {
    const arrImg = [];

    for(let i=10; i<=15; i++){
        arrImg.push(`./img/imagem (${i}).jpg`);
    }
    return arrImg;
}


const insertSlide = (arr, $el) =>{

    // transformar o array em string
    const htmlImg = arr.map( img => `<img class="imagens" src="${img}"/>`).join(" ");
    // alert(htmlImg);
    // instanciar o elemento da pagina html
    const $container = document.getElementById("container");
    // criando um elemento,  que é uma div
    const $containerImagens = document.createElement("div");
    // colocando atributo no elemento criado
    $containerImagens.id = "containerImagens";

    $containerImagens.innerHTML = htmlImg;

    $container.insertBefore($containerImagens, $el);

}


const next = () => {
    const $img = document.querySelectorAll(".imagens");
    const max = (50 * ($img.length-1)) * -1;
    // alert(max);

    let marginLeft = $img[0].style.marginLeft.replace("vw", "");
    alert(marginLeft);

    marginLeft = marginLeft == max ? 0 : marginLeft - 50;

    $img[0].style.marginLeft =  `${marginLeft}vw`;

    
}
const prev = () => {
    const $img = document.querySelectorAll(".imagens");
    const min = 0;
    // alert(min);
    let marginLeft = $img[0].style.marginLeft.replace("vw", "");
    // alert(marginLeft);
    if(!(marginLeft == "")){
        marginLeft = parseInt(marginLeft);
    }
    marginLeft = marginLeft == min ? -250 : marginLeft + 50;
    // alert(marginLeft);
    $img[0].style.marginLeft =  `${marginLeft}vw`;

    
}

// Inserindo slides passando elemento do html
insertSlide(loadImagens(), $next);

// Deixar os slides no modo automatico
setInterval(prev, 2000);

$next.addEventListener('click', next);
$prev.addEventListener('click', prev);

