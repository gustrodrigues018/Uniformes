import { db } from "./firebase.js";
import { ref, onValue } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 
const id = new URLSearchParams(window.location.search).get("id");

onValue(ref(db, `pedidos/${id}`), snap => {
  const p = snap.val();

  dados.innerHTML = `
    <strong>${p.nome}</strong><br>
    ${p.cargo} – Matrícula ${p.matricula}<br>
    Uniforme: ${p.uniforme} (${p.tamanho})
  `;

  status.innerText =
    p.status === "processando"
      ? "Pedido em processamento"
      : "Pedido confirmado – pronto para coleta";

  status.className =
    p.status === "processando"
      ? "status processando"
      : "status confirmado";
});
