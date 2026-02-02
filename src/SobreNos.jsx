import React from 'react';
import './App.css'; // Usaremos os mesmos estilos base

function SobreNos() {
  return (
    <div className="main-content" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h2 style={{ letterSpacing: '5px', textTransform: 'uppercase' }}>Nossa História</h2>
      <p style={{ maxWidth: '800px', margin: '40px auto', lineHeight: '1.8', color: '#555' }}>
        A <strong>Conchas e Areia</strong> nasceu da fusão entre a sofisticação urbana e a pureza do oceano. 
        Nossa missão é trazer o luxo minimalista para a rotina de beleza, com fórmulas exclusivas 
        que evocam a serenidade do mar e a elegância da areia branca. Cada perfume e maquiagem é 
        desenhado para ser uma joia na sua coleção.
      </p>
    </div>
  );
}

export default SobreNos;