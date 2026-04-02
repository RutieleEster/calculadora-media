// Formulário e os campos onde vamos mostrar o resultado
const formulario = document.getElementById('formMedia');
const divResultado = document.getElementById('resultado');
const textoMedia = document.getElementById('valorMedia');

// Evento de quando o botão é clicado
formulario.addEventListener('submit', function(event) {
    
    // Pra página não recarregar
    event.preventDefault();

    // Valores dos inputs se transformando em números
    const nota1 = parseFloat(document.getElementById('n1').value);
    const nota2 = parseFloat(document.getElementById('n2').value);
    const nota3 = parseFloat(document.getElementById('n3').value);

    // Calculo
    const mediaFinal = (nota1 + nota2 + nota3) / 3;

    // Resultado 
    textoMedia.textContent = mediaFinal.toFixed(2);
    
    divResultado.classList.remove('hidden');

    // Limpando para usar de novo
    formulario.reset();
});