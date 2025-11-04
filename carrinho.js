// Usando o 'export' para que outros arquivos '.js' possam importar sua função 

export function calcularTotalCarrinho(itens, cupom) {
    let total = 0;

    if(!itens || itens.length === 0) {
        return 0; // Se não há itens o seu total é 0 'ZERO'
    }

    // Soma o preço X a quantidade
    for(const item of itens) {
        total += item.preco * item.qtd;
    }

    // 1.1 Soma o preço X quantidade com outra forma do para
    // for(let i = 0; i <= itens.length; i++) {
    //     total = total + (itens[i][0] * itens[i][1])
    // }

    // 2. Aplicar o cupom de desconto
    if(cupom && cupom.toUpperCase() === "DEZOFF" ) {
        total = total * 0.90 // Aplica no cálculo 10% de desconto direto
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
        return Math.round(total * 100) / 100;



    }
}


console.log(1 == "1");