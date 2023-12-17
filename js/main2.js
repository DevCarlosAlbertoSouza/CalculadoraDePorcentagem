let precoFinal
let desconto = 0
let validar_postivo = document.getElementById('positivo');
let validar_negativo = document.getElementById('negativo');

// Solicita ao usuário o valor do produto e a porcentagem de desconto
document.getElementById("validacaoMax").onclick = function() {
    
  // valor postivo
  let valorProdutos = Number(document.getElementById('valorProdutos').value);
  let porcentagem_positiva = Number(document.getElementById('porcentagemProdutos').value)
  if (isNaN(valorProdutos) || isNaN(porcentagem_positiva)) {
    alert("Por favor, insira valores numéricos válidos.");
    
  } else if(porcentagem_positiva > 0 || porcentagem_positiva < 100)
  // Calcula o preço final com base no desconto
  desconto = (porcentagem_positiva / 100) * valorProdutos
  precoFinal = valorProdutos + desconto;
  
  
  // Verifica se os valores inseridos são válidos
  
  document.getElementById('produtos').textContent = valorProdutos
  document.getElementById('porcentagem').textContent = porcentagem_positiva
  document.getElementById("precoFinal").textContent = precoFinal.toFixed(2)
  document.getElementById("texto_final").textContent =` O Valor Tera o valor  de R$ ${precoFinal.toFixed(2)}`
  
  
};



document.getElementById("validacaoMin").onclick = function(){


  
    // valor negativo
    let valorProdutos = Number(document.getElementById('valorProdutos').value);
    let porcentagem_positiva = Number(document.getElementById('porcentagemProdutos').value)
     if (isNaN(valorProdutos) || isNaN(porcentagem_positiva)) {
      alert("Por favor, insira valores numéricos válidos.");
      
      } else if(porcentagem_positiva > 0 || porcentagem_positiva < 100)
      // Calcula o preço final com base no desconto
      desconto = (porcentagem_positiva / 100) * valorProdutos
      precoFinal = valorProdutos - desconto;
  
   
    // Verifica se os valores inseridos são válidos
  
   document.getElementById('produtos').textContent = valorProdutos
   document.getElementById('porcentagem').textContent = porcentagem_positiva
   document.getElementById("precoFinal").textContent = precoFinal.toFixed(2)
   document.getElementById("texto_final").textContent =` O Valor Tera o valor  de R$ ${precoFinal.toFixed(2)}`

   
   }





 




