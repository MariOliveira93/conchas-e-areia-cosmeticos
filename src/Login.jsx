import React from 'react';
import './App.css'; 

function Login() {
  return (
    <div className="main-content" style={{ padding: '80px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center', border: '1px solid #eee', padding: '40px', borderRadius: '4px' }}>
        <h2 style={{ letterSpacing: '3px', marginBottom: '30px' }}>LOGIN</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="email" 
            placeholder="E-mail" 
            style={{ padding: '12px', border: '1px solid #000', borderRadius: '2px', fontSize: '0.8rem' }} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            style={{ padding: '12px', border: '1px solid #000', borderRadius: '2px', fontSize: '0.8rem' }} 
          />
          <button 
            type="submit" 
            style={{ backgroundColor: '#000', color: '#fff', padding: '15px', border: 'none', cursor: 'pointer', letterSpacing: '2px', fontSize: '0.8rem' }}
          >
            ENTRAR
          </button>
        </form>
        <div style={{ marginTop: '20px', fontSize: '0.7rem' }}>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Esqueceu a senha?</a>
          <p style={{ marginTop: '10px' }}>Não tem conta? <a href="#" style={{ fontWeight: 'bold', color: '#000' }}>Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;