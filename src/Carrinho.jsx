import React from 'react';
import './App.css';

function Carrinho({ itens, adicionar, remover, excluir }) {
  // Cálculo do valor total
  const total = itens.reduce((acc, item) => {
    const precoNum = parseFloat(item.preco.replace(',', '.'));
    return acc + precoNum * item.quantidade;
  }, 0);

  return (
    <div className="main-content">
      <div className="section-title">
        <h2>Seu Carrinho</h2>
        <p>Revise suas escolhas de luxo</p>
      </div>

      {itens.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Seu carrinho está vazio no momento.</p>
          <a href="/" style={{ color: '#000', fontWeight: 'bold' }}>Voltar às compras</a>
        </div>
      ) : (
        <div className="cart-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {itens.map((item) => (
            <div key={item.id} className="product-card" style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '20px', padding: '20px', border: '1px solid #eee' }}>
              <img src={item.img} alt={item.nome} style={{ width: '100px', borderRadius: '10px' }} />
              
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h3 style={{ fontSize: '1rem' }}>{item.nome}</h3>
                <p className="price">R$ {item.preco}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Botões arredondados conforme o estilo da marca */}
                <button className="buy-button" style={{ padding: '5px 12px' }} onClick={() => remover(item)}>-</button>
                <span style={{ fontWeight: 'bold' }}>{item.quantidade}</span>
                <button className="buy-button" style={{ padding: '5px 12px' }} onClick={() => adicionar(item)}>+</button>
                
                <button 
                  onClick={() => excluir(item.id)}
                  style={{ marginLeft: '20px', background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  REMOVER
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '40px', borderTop: '2px solid #000', paddingTop: '20px', textAlign: 'right' }}>
            <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
            <button className="buy-button" style={{ marginTop: '20px', width: '100%', padding: '15px' }}>
              Finalizar Pedido Especial
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;