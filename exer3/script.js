
function aplicaDesconto(preco=10, desconto=5) {
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    
      console.log('preço original : '+preco+'\ndesconto : '+desconto+'\npreço final : '+precoFinal)
      alert('preço original : '+preco+'\ndesconto : '+desconto+'\npreço final : '+precoFinal)
}

