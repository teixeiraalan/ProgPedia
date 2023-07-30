function loading(){
    document.getElementsByClassName('box-load')[0].style.display = "none" 
    document.getElementsByClassName('page')[0].style.display = "block"
}

function mostrar(el){
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar(el){
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}

function mostrar0(el){
    let segundo = document.querySelector('.segundo')

    segundo.style.display = 'block';
}

function fechar0(el){
    let segundo = document.querySelector('.segundo')

    segundo.style.display = 'none';
}

function mostrar1(el){
    let terceiro = document.querySelector('.terceiro')

    terceiro.style.display = 'block';
}

function fechar1(el){
    let terceiro = document.querySelector('.terceiro')

    terceiro.style.display = 'none';
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

function alerta(){
    alert('Desculpe-nos pelo inconveniente! O conteúdo que você procura está temporariamente indisponível no momento, pois estamos trabalhando diligentemente no seu desenvolvimento. Estamos ansiosos para compartilhar o resultado final com você em breve. Agradecemos sua compreensão e paciência. Fique atento às atualizações!')
}

