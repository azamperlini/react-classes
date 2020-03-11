// Declarar uma variável qualquer, que receba um objeto vazio.

var pessoa = new Object();

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: "Alexandre",
    sobrenome: "Zamperlini",
    sexo: "Masculino",
    idade: 46,
    altura: 1.73,
    peso: 84,
    andando: false,
    caminhouQuantosMetros: 0;
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }
}

s = new Pessoa('Alexandre', 'Zamperlini', 'Masculino', 46, 1.73, 84, false, 0);
s.felizAniversario();

//"Feliz aniversário você acaba de completar 47 anos. Parabéns!"

/*
s
Pessoa {nome: "Alexandre", sobrenome: "Zamperlini", sexo: "Masculino", idade: 47, altura: 1.73, …}
*/



/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }
}


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }
}


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }

    Pessoa.prototype.nomeCompleto = function(){
        return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
    }
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }

    Pessoa.prototype.nomeCompleto = function(){
        return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
    }

    Pessoa.prototype.mostrarIdade = function(){
        return "Olá! Eu tenho " + this.idade + " anos.";
    }

}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }

    Pessoa.prototype.nomeCompleto = function(){
        return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
    }

    Pessoa.prototype.mostrarIdade = function(){
        return "Olá! Eu tenho " + this.idade + " anos.";
    }

    Pessoa.prototype.mostrarPeso = function(){
        return "Eu peso " + this.peso + "Kg.";
    }

}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }

    Pessoa.prototype.nomeCompleto = function(){
        return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
    }

    Pessoa.prototype.mostrarIdade = function(){
        return "Olá! Eu tenho " + this.idade + " anos.";
    }

    Pessoa.prototype.mostrarPeso = function(){
        return "Eu peso " + this.peso + "Kg.";
    }

    Pessoa.prototype.mostrarAltura = function(){
        return "Minha altura é " + this.altura + ".";
    }

}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
a.nomeCompleto();
"Olá! Meu nome é Alexandre Zamperlini!"
*/

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
a.mostrarIdade();
"Olá! Eu tenho 46 anos."
*/

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
a.mostrarPeso();
"Eu peso 84Kg."
*/

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
a.mostrarAltura();
"Minha altura é 1.73."
*/

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/*
a.felizAniversario();
"Feliz aniversário você acaba de completar 47 anos. Parabéns!"
a.felizAniversario();
"Feliz aniversário você acaba de completar 48 anos. Parabéns!"
a.felizAniversario();
"Feliz aniversário você acaba de completar 49 anos. Parabéns!"
*/

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

/*
a.mostrarIdade();
"Olá! Eu tenho 49 anos."
*/

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
/*
a.andar(20);
"Parabéns, você caminhou 20 metros."
a.andar(30);
"Parabéns, você caminhou 50 metros."
a.andar(10);
"Parabéns, você caminhou 60 metros."
*/

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
a.andando
true
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
a.parar();
"Você parou de caminhar."
*/

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
/*
a.andando
false
*/

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
a.caminhouQuantosMetros
60
*/

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando;
    this.caminhouQuantosMetros = caminhouQuantosMetros;

    Pessoa.prototype.felizAniversario = function(){
        this.idade += 1;
        return `Feliz aniversário você acaba de completar ${this.idade} anos. Parabéns!`;
    }

    Pessoa.prototype.andar = function(quantidade){
        this.caminhouQuantosMetros += quantidade;
        this.andando = true;
        return `Parabéns, você caminhou ${this.caminhouQuantosMetros} metros.`;
    }

    Pessoa.prototype.parar = function(){
        this.andando = false;
        return `Você parou de caminhar.`;
    }

    Pessoa.prototype.nomeCompleto = function(){
        return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!";
    }

    Pessoa.prototype.mostrarIdade = function(){
        return "Olá! Eu tenho " + this.idade + " anos.";
    }

    Pessoa.prototype.mostrarPeso = function(){
        return "Eu peso " + this.peso + "Kg.";
    }

    Pessoa.prototype.mostrarAltura = function(){
        return "Minha altura é " + this.altura + ".";
    }

    Pessoa.prototype.apresentacao = function(){
        /*
        Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
        return "Olá, eu sou o " + this.nome + " " + this.sobrenome + ", tenho " + this.idade + " anos, " + this.altura + " de altura, meu peso é " + this.peso + "Kg, e só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metros!"
    }

}

// Agora, apresente-se ;)
