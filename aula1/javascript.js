//calculadora de orçamentos

var valorCustoTexto = prompt("Qual o valor do fornecedor que você quer converter?")

var valorCustoNumero = parseFloat(valorCustoTexto)

alert(valorCustoNumero)

var valorGraficaLura = ((valorCustoNumero * 2) + 10).toFixed(2)

alert(valorGraficaLura)

//Revisão
//var - variáveis para guardar o que desejamos: podem ser números = int; podem ser quando tem casas decimais = float; e podem ser textos = string. (int - float - string)
//alert - joga na tela a informação
//parseInt - Transforma o texto em números (para int = inteiros)
//parseFloat - Transforma em decimais (float = decimais)
//prompt - tipo alert porém recebe valor dentro pelo usuário
//operações + somar * multiplicar 




