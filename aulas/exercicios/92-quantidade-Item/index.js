const produtos = [
    { codigo: 1, espeficicacao: "Batata Frita", preco:4.23 },
    { codigo: 2, espeficicacao: "X-Salada", preco:3.56 },
    { codigo: 3, espeficicacao: "X-Bacon", preco:4.41 },
    { codigo: 4, espeficicacao: "Cachorro Quente", preco:8.99 },
    { codigo: 5, espeficicacao: "Refigerante", preco:0.50 }
  ];


  function total(cod, quant) {
      if( cod <= produtos.length){
          return `Total: R$ ${(produtos[cod - 1].preco * quant).toFixed(2)}`
      }else {
          console.log('Código inválido!')
      }
  };

console.log(total(6, 5));
