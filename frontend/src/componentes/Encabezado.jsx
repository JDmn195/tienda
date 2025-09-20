
import { useTheme } from "../context/ThemeContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Encabezado({ vista, onGoCatalogo, onGoAdmin, onGoDatos, onToggleCarrito }) {
  const { theme, toggleTheme } = useTheme();
  const { count } = useCart();
  const is = (v)=> vista===v;

  return (
    <header>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
        <h1 style={{margin:0, fontSize: "2.2rem", letterSpacing: "-1px"}}>🛍️ Mi Tienda</h1>
        <nav style={{display:"flex",gap:12,alignItems:"center"}}>
          <button className={is("catalogo") ? "active" : ""} onClick={onGoCatalogo} disabled={is("catalogo")}>Ver tienda</button>
          <button className={is("datos") ? "active" : ""} onClick={onGoDatos} disabled={is("datos")}>Datos</button>
          <button onClick={toggleTheme} title="Cambiar tema">🌓 {theme==="dark"?"Oscuro":"Claro"}</button>
          <button onClick={onToggleCarrito} title="Ver carrito">🛒 <b>{count}</b></button>
          <button onClick={onGoAdmin}>Admin</button>
        </nav>
      </div>
    </header>
  );
}
