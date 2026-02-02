import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "./assets/logo.png"; 
import { User, ShoppingBag } from 'lucide-react';

function Header({ quantidadeCarrinho }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo Conchas e Areia" className="logo-img" />
        </Link>

        <nav className="nav-menu">
          <Link to="/maquiagem">MAQUIAGEM</Link>
          <Link to="/perfumes">PERFUMES</Link>
          <Link to="/sobre">SOBRE NÓS</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="icon-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
            <User size={20} />
            <span>LOGIN</span>
          </Link>
          
          {/* Alterado de <button> para <Link> para permitir o acesso à página do carrinho */}
          <Link to="/carrinho" className="icon-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ShoppingBag size={20} />
            <div className="cart-badge">{quantidadeCarrinho}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;