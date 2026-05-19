document.querySelectorAll(".policy-date").forEach(el => {
    el.textContent = CONFIG.lastatt;
});

console.log("Configurações carregadas:", CONFIG);