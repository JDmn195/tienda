
export default function ItemCarrito({ item, onInc, onDec, onRemove }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr auto auto auto", gap:8, alignItems:"center", background: "#f6f8fa", borderRadius: 8, padding: "8px 6px" }}>
      <div>
        <div style={{ fontWeight:600, fontSize:"1rem" }}>{item.titulo}</div>
        <div style={{ fontSize:12, opacity:.7, color: "#16a34a" }}>${new Intl.NumberFormat("es-CO").format(item.precio)}</div>
      </div>
      <div style={{ display:"flex", gap:6, alignItems:"center" }}>
        <button onClick={onDec} style={{ background: "#d1d5db", color: "#222", minWidth:28 }}>-</button>
        <span style={{ fontWeight:600 }}>{item.qty}</span>
        <button onClick={onInc} style={{ background: "#d1d5db", color: "#222", minWidth:28 }}>+</button>
      </div>
      <div style={{ fontWeight:600 }}>${new Intl.NumberFormat("es-CO").format(item.precio * item.qty)}</div>
      <button onClick={onRemove} style={{ color:"crimson", background: "#fee2e2", borderRadius:6 }}>Quitar</button>
    </div>
  );
}
