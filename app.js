alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto)
{
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
    
    // se numeroSecrete for igual ao chute
    if (numeroSecreto == chute)
    { 
        break;
    }
    else
    {
        if (numeroSecreto > chute)
        {
            alert(`O número secreto é maior que o ${chute}`);
        }
        else
        {
            alert(`O número secreto é menor que o ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


/*
if(tentativas > 1)
{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}
else
{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/