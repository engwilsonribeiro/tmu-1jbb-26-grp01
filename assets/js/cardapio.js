
/* ================================================= */
/* INTERATIVIDADE DOS CARDS */
/* ================================================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");

    function selecionarCard() {
        const selecionado = card.classList.toggle("selecionado");

        card.setAttribute("aria-pressed", selecionado);
    }

    card.addEventListener("click", selecionarCard);

    card.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            selecionarCard();
        }
    });
});

const acoesProdutoCevada = document.querySelectorAll(".acao-produto");

acoesProdutoCevada.forEach((acao) => {
    acao.addEventListener("click", () => {
        const produto = acao.closest(".produto-menu");
        const selecionado = produto.classList.toggle("selecionado");
        acao.setAttribute("aria-pressed", selecionado);
        acao.textContent = selecionado
            ? "Produto selecionado"
            : "Selecionar produto";
    });
});
