// js/member-header.js
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const memberMenuContainer = document.getElementById("memberMenuContainer");
  if (memberMenuContainer) {
    if (user) {
      // Falls der Nutzer angemeldet ist, zeige Memberbereich und Logout
      memberMenuContainer.innerHTML = `
        <li><a href="member.html">Memberbereich</a></li>
        <li><a href="#" id="logoutBtn">Logout</a></li>
      `;
      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          signOut(auth)
            .then(() => {
              window.location.href = "index.html";
            })
            .catch((error) => {
              alert("Logout Fehler: " + error.message);
            });
        });
      }
    } else {
      // Falls nicht angemeldet, zeige den Login-Link
      memberMenuContainer.innerHTML = `<li><a href="login.html">Login</a></li>`;
    }
  }
});
