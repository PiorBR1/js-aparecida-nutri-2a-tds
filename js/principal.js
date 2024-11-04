var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");
    
    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;

    pacienteTr.appendChild(nometd);
    pacienteTr.appendChild(pesotd);
    pacienteTr.appendChild(alturatd);
    pacienteTr.appendChild(gorduratd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
});