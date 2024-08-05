//ex1 Crie um objeto carro com as propriedades marca, modelo e ano. Exiba a marca do carro no console.
let carro = {
    marca: "fiat",
    modelo: "uno",
    ano: "2024"
}
console.log(carro.marca);



//ex2 Crie um objeto pessoa com as propriedades nome, idade e profissao. Exiba a profissão da pessoa no console.
let pessoa = {
    nome: "pedro",
    idade: "17",
    profissao: "gay"
}
console.log(pessoa.profissao);


//ex3 Crie um objeto livro com as propriedades titulo, autor e paginas. Exiba o título do livro no console.
let livro = {
    titulo: "sim",
    autor: "pedro",
    pagina: "576"
}
console.log(livro.titulo);


//ex4 Crie um objeto endereco com as propriedades rua, numero, cidade e estado. Exiba a cidade no console.
let endereco = {
    rua: "omega",
    numero: "17",
    cidade: "sergipe",
    estado: "maranhao"
}
console.log(endereco.cidade);


//ex5  Crie um objeto aluno com as propriedades nome, matricula, curso e ano. Exiba o ano do aluno no console.

let aluno = {
    nome: "omega",
    matricula: "123214",
    curso: "docente",
    ano: "2025"
}
console.log(aluno.ano);


//ex6  Crie um objeto produto com as propriedades nome, preco e categoria, e adicione um método desconto que retorna o preço com 10% de desconto.
//Exiba o resultado do método desconto no console.

let produto = {
    nome: "cebola",
    preco: 20.00,
    categoria: "fruto"
}
function desconto(preco){
    var precodesc = preco * 0.90;
    return precodesc;
}
console.log(desconto(produto.preco));


//ex7 Crie um objeto filme com as propriedades titulo, anoLancamento e diretor (que é um objeto com nome e idade).
 //Exiba o nome do diretor no console.

let filme = {
    titulo: "borderlands",
    ano: 1989,
    diretor:{
        nome: "pedro",
        idade: 34
    }
};
console.log(filme.diretor.nome);


//ex8   Crie um objeto computador com as propriedades marca, configuracao (um objeto com processador e memoriaRAM), e adicione um
//método descricao que retorna uma string descrevendo o computador. Exiba o resultado do método descricao no console.


let computador = {
    marca: "hp",
    configuracao: {
        cpu: "ryzen5",
        ram: "32gb"
    }
};

function descricao(a){
    return ("Marca:" +a.marca+" CPU:"+a.configuracao.cpu+" Ram:"+a.configuracao.ram);
}
console.log(descricao(computador));

//ex9   Crie um objeto jogo com as propriedades nome, desenvolvedor e plataforma. Exiba a primeira plataforma no console.


let jogo={
    nome:"valorant",
    desenvolvedor:"riot games",
    plataforma:"PlayStation 5"
};
console.log(jogo.plataforma);

//ex10 Crie um objeto cursoOnline com as propriedades titulo, instrutor (um objeto com nome e experiencia), 
//duracao, e adicione uma função descricao que retorna uma string descrevendo o curso e o instrutor.
//Exiba o resultado do método descricao no console.


let cursoOnline={
    titulo: "Programação",
    instrutor:{
        nome:"Eliane",
        experiencia:"Dev FullStack"
    },
    descricao:function(){
        return `O curso ${cursoOnline.titulo}, com a intrutora ${cursoOnline.instrutor.nome} e experiencia de ${cursoOnline.instrutor.experiencia}.`;
    }
};

console.log(cursoOnline.descricao());
