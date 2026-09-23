//Procura o elemento que possui o id "item"
let item = document.getElementById("item");
//Procura o elemento que possui o id "lista"
let lista = document.getElementById("lista");
//Procura o elemento que possui o id "busca"
let  busca = document.getElementById("busca");
//Procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("BtnAdicionar");

//Cria uma matriz vazia para guardar os itens // É a casinha
let itens = [];
//Quando clicar no botão adicionar, executa a função adicionar()
adicionar.addEventListener("click", BtnAdicionar);
//Quando o usuário digitar no campo busca,
//executa a função buscar()
busca.addEventListener("keyup", buscar);

function BtnAdicionar(){
    //Adicionar o valor digitando no array // Pega galinha e leva para casa
    itens.push(item.value);
    //Cria uma nova tag <li> //Cria etiqueta vazia
    let li = document.createElement("li")
    //Cria um texto com o valor digitado // Pega o nome "Galinha" do usuário
    let texto = document.createTextNode(item.value);
    //Coloca o texto dentro da tag <li> // Coloca o nome "Galinha" na etiqueta    
    li.appendChild(texto);
    //Coloca o <li> dentro da lista <ul> //Leva a galinha até o curral com a etiqueta
    lista.appendChild(li);

}

function buscar(){
    //Pega o valor difitado e converte para maíusculas // A Denise falou "boi"
    let nome = busca.value.toLowerCase();
    //Busca todas a stags <li> da página // vai até o curral
    let itensLista = document.getElementsByTagName("li")
    //Percorre todos os itens da lista // Ele vai percorrer o curral
    for(let i = 0; i < itensLista.length; i++){
        //Pega o texto do item atual e converte para maiúscula
        //Nesse caso, no curral, as etiquetas ficarão maiúsculas no momento em que o Elvis percorrer cada animal
        let texto = itensLista[i].textContent.toLowerCase();
        if(texto.includes(nome)){
            itensLista[i].style.display = "block";
        }
        else{
            itensLista[i].style.display = "none";
        }
    }
}