

// Váriavel para teste de desenvolvimento
    // const itens = [
    //     {nome: 'Produto A', preco: 10, qtd: 2}, // resultado da multiplicacao 20
    //     {nome: 'Produto B', preco: 5, qtd: 1}   // resultado da multiplicacao 5
    // ];
   


// Usando o 'export' para que outros arquivos '.js' possam importar sua função 
export function calcularTotalCarrinho(itens, cupom){

    // 1. Calcula o total de itens 
    let total = 0;
 
    if(!itens || itens.length === 0 ){
        return 0; // Se nã há itens o seu total é 0 'ZERO'
    }

    // 1. Soma o preço X quantidade
    for (const item of itens){
        total += item.preco * item.qtd;
    }

    //console.log(`O total de itens calculado é: ${total}`);
    // 1.1 Soma o preço X quantidade com outra forma do para
    // for(let i = 0; i <= itens.length; i++) {
    //     total = total + (itens[i][0] * itens[i][1])
    // }

    // 2. Aplicar o cupom de desconto
    if((cupom && cupom.toUpperCase() === "DEZOFF" )) {
        total = total * 0.90; // Aplica no cálculo 10% de desconto direto
        // total = total - (total * 0.10);
        // total = total - ((total * 10) / 100);

        // Acrescentando 5%
        // total = total * 1.05;
        // total = total + (total * 0.05);
        // total = total + ((total * 5) / 100);


        // Acrescentando 50%
        // total = total * 1.5;

        // 3. Arredonda para 2 casas decimais
        // Fazemos o arredondamento por causa do sistema monetário brasileiro, onde o valor possui restritamente 2 casas decimais

    }
        
    return Math.round(total * 100) / 100;
    //console.log(`O total de itens calculado é: ${total}`);
}

//calcularTotalCarrinho(itens, null);