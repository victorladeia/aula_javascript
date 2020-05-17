
function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar()
{
    window.open("https://www.casanobrebrewshop.com.br/");
    window.location.href = "https://www.casanobrebrewshop.com.br/";
}

function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load()
{
    alert("Página Carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}

/*
function validaIdade(idade)
{
    var validar;
    if (idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade:");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2)
{
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth() + 1);
alert(d.getMinutes());
*/

/*
var count;
for (count = 0; count <= 5; count++)
{
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5)
{
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade:");
if (idade > 18)
{
    alert("Maior de Idade.");
}
else
{
    alert("Menor de Idade.");
}
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();


//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Anna Clara";
//var n1 = 21;
//var n2 = 10; 
//var frase = "Minha filha terá olhos azuis.";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("azuis", "azuis escuro"));