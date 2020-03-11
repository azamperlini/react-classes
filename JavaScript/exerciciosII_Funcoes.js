// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x, y){
    var totalSoma = x + y;
    return totalSoma;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var resultado = (soma(3,2)+5);

// Qual o valor atualizado dessa variável?

//Valor atual é 10

// Declare uma nova variável, sem valor.

var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function add(){
    var nova = 3;
    return 'O valor da variável nova agora é um VALOR. \n Onde ' + nova + ' é o novo valor da variável nova.'
}

// Invoque a função criada acima.

add();

// Qual o retorno da função? (Use comentários de bloco).

/*
"O valor da variável nova agora é um VALOR. 
 Onde 3 é o novo valor da variável nova."
 */

/*

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function argumentos(x, y, z){

    if(x ==='' || y === '' || z ===''){
        return 'Preencha todos os valores corretamente!'
    }else{
        return total = ((x * y * z) + 2);
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

argumentos(2, 2);
argumentos('', 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// A primeira chamada o valor  é NaN
// A segunda chamada o valor é 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

argumentos(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// O resultado é 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function recebeArgumentos(){
    var resultado = false;
    for (var i = 0, j = arguments.length; i < j; i++){
        if(i == 0){
            resultado += arguments[i];
        }if(i == 1){
            resultado += arguments[i];
        }if(i == 2){
            resultado = ((arguments[0] + arguments[1])/ arguments[2]);
        }if(i > 2){
            resultado = null;
        }
    }
    return resultado;
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

/*
recebeArgumentos();
false

recebeArgumentos(2,2,2,2);
null

recebeArgumentos(4,5,3);
3

recebeArgumentos(2,2);
4
*/