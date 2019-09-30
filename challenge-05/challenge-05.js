/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['thais', 1, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arr = [3, 2, 1];

function myFunction(){};
function myFunction(arg){
    return arg;
}

console.log(myFunction(arr));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var arr1 = [1, 5, 3];
function myFunction(arg, num){
    return arg[num];
}
console.log(myFunction(arr1,1));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myvar;
myvar = ['thais', 1, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(myvar,0));
console.log(myFunction(myvar,1));
console.log(myFunction(myvar,2));
console.log(myFunction(myvar,3));
console.log(myFunction(myvar,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var obj = {
        'O Poder do Hábito': {quantidadePaginas : 300,
                autor :'Charles Duhigg',
                editora :'Objetiva'
                },
        'O menino do pijama listrado': {quantidadePaginas : 150,
            autor : 'John Boyne',
            editora: 'Cia. Das Letras'
                },
        'O pequeno Príncipe': {quantidadePaginas : 197,
            autor : 'Antoine de Saint-Exupéry',
            editora :'Autêntica'
                }
    };
      
    return !nome? obj : obj[nome]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = 'O menino do pijama listrado';
console.log('O livro' + nome + ' tem '+ book(nome).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nome = 'O pequeno Príncipe';
console.log('O autor do livro '+ nome +' é '+ book(nome).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome = 'O Poder do Hábito';
console.log('O livro '+ nome + 'foi publicado pela editora '+ book(nome).editora);
