import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel"; 
import SobreNos from "./SobreNos";
import Login from "./Login";
import Carrinho from "./Carrinho"; // Você precisará criar este arquivo

// Imports de Imagens
import batomImg from "./assets/batom-vermelho.png";
import paletaImg from "./assets/paleta-sombra.png";
import rimelImg from "./assets/rimel.png"; 
import lapisImg from "./assets/lapis-olho.png";
import pinceisImg from "./assets/conjunto-pinceis.png";
import primaveraImg from "./assets/perfume-primavera.png";
import invernoImg from "./assets/perfume-inverno.png";
import outonoImg from "./assets/perfume-outono.png";
import veraoImg from "./assets/perfume-verao.png";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar ou aumentar quantidade
  const adicionarAoCarrinho = (produto) => {
    const itemExiste = carrinho.find((item) => item.id === produto.id);
    if (itemExiste) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...itemExiste, quantidade: itemExiste.quantidade + 1 } : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  // Função para diminuir quantidade ou remover se for o último
  const removerDoCarrinho = (produto) => {
    const itemExiste = carrinho.find((item) => item.id === produto.id);
    if (itemExiste.quantidade === 1) {
      setCarrinho(carrinho.filter((item) => item.id !== produto.id));
    } else {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...itemExiste, quantidade: itemExiste.quantidade - 1 } : item
        )
      );
    }
  };

  // Função para excluir totalmente o item
  const excluirDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const produtos = [
    { id: 1, nome: "Batom Matte", img: batomImg, preco: "59,90", categoria: "maquiagem" },
    { id: 2, nome: "Paleta de Sombras", img: paletaImg, preco: "119,90", categoria: "maquiagem" },
    { id: 3, nome: "Máscara de Cílios", img: rimelImg, preco: "69,90", categoria: "maquiagem" },
    { id: 4, nome: "Lápis de Olho", img: lapisImg, preco: "49,90", categoria: "maquiagem" },
    { id: 5, nome: "Kit de Pincéis", img: pinceisImg, preco: "199,90", categoria: "maquiagem" },
    { id: 6, nome: "Perfume Primavera", img: primaveraImg, preco: "189,90", categoria: "perfume" },
    { id: 7, nome: "Perfume Inverno", img: invernoImg, preco: "195,90", categoria: "perfume" },
    { id: 8, nome: "Perfume Outono", img: outonoImg, preco: "189,90", categoria: "perfume" },
    { id: 9, nome: "Perfume Verão", img: veraoImg, preco: "175,90", categoria: "perfume" },
  ];

  const ProductGrid = ({ lista }) => (
    <section className="product-grid">
      {lista.map((produto) => (
        <div key={produto.id} className="product-card">
          <div className="product-image-wrapper">
            <img src={produto.img} alt={produto.nome} />
          </div>
          <div className="product-info">
            <h3>{produto.nome}</h3>
            <span className="price">R$ {produto.preco}</span>
            <button className="buy-button" onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <Router>
      <div className="app-container">
        {/* Agora passamos o total de itens (soma das quantidades) para o Header */}
        <Header quantidadeCarrinho={carrinho.reduce((acc, item) => acc + item.quantidade, 0)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <main className="main-content">
                <div className="section-title"><h2>Nossa Coleção</h2></div>
                <ProductGrid lista={produtos} />
              </main>
            </>
          } />

          <Route path="/maquiagem" element={
            <main className="main-content">
              <div className="section-title"><h2>Maquiagens</h2></div>
              <ProductGrid lista={produtos.filter(p => p.categoria === "maquiagem")} />
            </main>
          } />

          <Route path="/perfumes" element={
            <main className="main-content">
              <div className="section-title"><h2>Perfumes</h2></div>
              <ProductGrid lista={produtos.filter(p => p.categoria === "perfume")} />
            </main>
          } />

          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/login" element={<Login />} />
          
          {/* Rota para a página de gerenciamento do carrinho */}
          <Route path="/carrinho" element={
            <Carrinho 
              itens={carrinho} 
              adicionar={adicionarAoCarrinho} 
              remover={removerDoCarrinho} 
              excluir={excluirDoCarrinho} 
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;