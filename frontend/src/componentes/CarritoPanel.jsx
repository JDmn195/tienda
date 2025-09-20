
import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import ItemCarrito from "./ItemCarrito.jsx";
import Checkout from "./Checkout.jsx";

export default function CarritoPanel({ abierto, onClose }) {
  const { items, remove, clear, inc, dec, total } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  function onSuccess(pedidoId) {
    clear();
    alert("Pedido #" + pedidoId + " creado. ¡Gracias!");
  }

  return (
    <>
      {abierto && (
        <aside style={styles.panel}>
          <header style={styles.header}>
            <h3 style={{ margin:0, fontSize: "1.3rem", color: "#16a34a" }}>🛒 Tu carrito</h3>
            <button onClick={onClose} style={{ background: "#d1d5db", color: "#222" }}>Cerrar</button>
          </header>

          {items.length === 0 ? (
            <p style={{ textAlign: "center", opacity: 0.7 }}>Está vacío.</p>
          ) : (
            <div style={{ display:"grid", gap:12 }}>
              {items.map(it => (
                <ItemCarrito
                  key={it.id ?? it.titulo}
                  item={it}
                  onRemove={() => remove(it)}
                  onInc={() => inc(it)}
                  onDec={() => dec(it)}
                />
              ))}

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8 }}>
                <button onClick={clear} style={{ background: "#d1d5db", color: "#222" }}>Vaciar</button>
                <div style={{ fontWeight:600, fontSize:"1.1rem" }}>Total: <b>${new Intl.NumberFormat("es-CO").format(total)}</b></div>
              </div>

              <button onClick={() => setCheckoutOpen(true)} style={styles.payBtn}>
                <span role="img" aria-label="pagar">💳</span> Pagar
              </button>
            </div>
          )}
        </aside>
      )}

      <Checkout abierto={checkoutOpen} onClose={()=>setCheckoutOpen(false)} items={items} total={total} onSuccess={onSuccess} />
    </>
  );
}

const styles = {
  panel: { position:"fixed", right:0, top:0, bottom:0, width:360, background:"#fff", boxShadow:"-8px 0 24px rgba(0,0,0,.1)", padding:16, zIndex:999 },
  header:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 },
  payBtn:{ background:"#16a34a", color:"#fff", border:"none", padding:"10px 12px", borderRadius:8 }
};
