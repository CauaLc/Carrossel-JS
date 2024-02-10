
//Localizar os elemento para manipular
const imagens = document.querySelectorAll(".slide");//as imagens são uma array, pois possuem 4
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0; //identificador da imagem

setaAvancar.addEventListener('click', function () {
    
    //um if para que a imagemAtual pare no número 4, que é o número de imagens e retorne. O -1 é usado porque o array é de 4 elementos, pórem começa com 0 na ordem de indice
    if (imagemAtual === imagens.length -1){
        return; //return pro código parar aq
    }
    //sempre aumentar o numero da imagemAtual +1
    imagemAtual++;
    
    esconderImagemAberta();
    mostrarImagemAtual();
    mostrarOuEsconderSetas();

   

    
    
})

setaVoltar.addEventListener('click', function () {
    
  if(imagemAtual === 0){
    return;
  }
    //Agora para voltar usaremos o -- para decrementar
    imagemAtual--;
    
    esconderImagemAberta();
    mostrarImagemAtual();
    mostrarOuEsconderSetas();

   

    
    
})

//função para esconder a imagem com a classe mostrar
function esconderImagemAberta () {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar')
}

function mostrarImagemAtual(){
    imagens[imagemAtual].classList.add('mostrar')
}

function mostrarOuEsconderSetas(){
    //se a imagem atual for diferente de 0, tiramos a opacidade da setaVoltar
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade');
    }else{
        setaVoltar.classList.add('opacidade');
    }

    //se a imagem atual for identica ao ultimo numero do array(4), acrescentar opacidade na setaAvancar
    const chegouNaUltimaImagem = imagemAtual === imagens.length -1;

    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}