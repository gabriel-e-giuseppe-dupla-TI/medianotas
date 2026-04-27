// Recuperando o Formulário
// Escutador para o evento Submit - Ele ficará escutando quando o envento for disparado
// Quando for disparado ele vai executar uma função
document.querySelector('#form-notas').addEventListener('submit', function(e) {
    // Cancelar o envio
    e.preventDefault();

    // Resultado final
    let resultadoFinal;

    // Pegando cada informação digitada e armazenando em variáveis
    const nomeAluno = document.querySelector('#nome-aluno').value;
    console.log(nomeAluno);

    const disciplina = document.querySelector('#disciplina').value;
    console.log(disciplina);

    // Verificando se o usuário escolheu a discplina
    if(disciplina.length === 0){
        alert("Selecione uma disciplina válida")
        return;
        
    }

    const nota1 = Number(document.querySelector('#nota1').value);
    console.log(nota1);

    const nota2 = Number(document.querySelector('#nota2').value);
    console.log(nota2);

    const nota3 = Number(document.querySelector('#nota3').value);
    console.log(nota3);

    const nota4 = Number(document.querySelector('#nota4').value);
    console.log(nota4);

    // Calculando a média
    const media = (nota1 + nota2 + nota3 + nota4)/4;
    console.log(media);

    if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10){
        alert('Notas precisam estar entre 0 e 10');
        return
    
    }

    // Calcular o resultado
    if(media >= 6){
        resultadoFinal = "Aprovado";
    } else if(media < 4) {
        resultadoFinal = "Reprovado";
    } else {
        resultadoFinal = "Recuperação";
    }

    console.log(resultadoFinal);

    // Gravar na tabela
    document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${nomeAluno}</td>
            <td>${disciplina}</td>
            <td>${nota1.toFixed(1)}</td>
            <td>${nota2.toFixed(1)}</td>
            <td>${nota3.toFixed(1)}</td>
            <td>${nota4.toFixed(1)}</td>
            <td>${media.toFixed(1)}</td>
            <td>${resultadoFinal}</td>
        </tr>
    `
    // Limpar o formulário
    this.reset();

    // Exibir a data da atualização
    document.querySelector('#data').textContent = new Intl.DateTimeFormat('pt-BR').format(new Date());
})