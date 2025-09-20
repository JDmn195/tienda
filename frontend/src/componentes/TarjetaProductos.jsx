
import { useCart } from "../context/CartContext.jsx";

export default function TarjetaProductos({ producto }) {
  const { add } = useCart();

  return (
    <article>
      <h4 style={{ margin:0, fontSize: "1.2rem" }}>{producto.titulo}</h4>
      <div style={{ opacity:.8, fontWeight:600, fontSize:"1.1rem", color: "#16a34a" }}>
        ${new Intl.NumberFormat("es-CO").format(producto.precio)}
      </div>
      <button onClick={() => add({ ...producto, qty: 1 })} style={{ marginTop:8 }}>
        <span role="img" aria-label="carrito">🛒</span> Agregar al carrito
      </button>
    </article>
  );
}
