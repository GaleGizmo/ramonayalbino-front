import "./Header.css";

function Header({onTicketsClick}) {
  return (
    <nav className="header-bar">
      <button
        type="button"
        className="header header-tickets"
        onClick={onTicketsClick}
      >
        🎟️ Comprar Entrada
      </button>
    </nav>
  );
}

export default Header
