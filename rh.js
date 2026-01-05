import { db } from "./firebase.js";
import { ref, onValue, update } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

onValue(ref(db, "pedidos"), snap => {
  lista.innerHTML = "";

  snap.forEach(child => {
    const p = child.val();

    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${p.nome}</strong> – ${p.uniforme}</p>
      <p>Status: ${p.status}</p>
      ${p.status === "processando"
        ? `<button onclick="confirmar('${child.key}')">Confirmar</button>`
        : ""}
      <hr>
    `;
    lista.appendChild(div);
  });
});

window.confirmar = id => {
  update(ref(db, `pedidos/${id}`), {
    status: "confirmado",
    dataConfirmacao: new Date().toLocaleString()
  });
};
