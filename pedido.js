import { db } from "./firebase.js";
import { ref, push } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

document.getElementById("fomPedido").addEventListener("submit", e => {
  e.preventDefault();
 
  const pedido = {
    nome: nome.value,
    cargo: cargo.value,
    matricula: matricula.value,
    uniforme: uniforme.value,
    tamanho: tamanho.value,
    quantidade: quantidade.value,
    observacoes: observacoes.value,
    status: "processando",
    dataPedido: new Date().toLocaleString()
  };

  const novoPedido = push(ref(db, "pedidos"), pedido);

  window.location.href = `status.html?id=${novoPedido.key}`;
});
