
// ==========================================
// CONFIGURAÇÕES
// ==========================================

const WHATSAPP = "5567996760185";

// ==========================================
// MENU RESPONSIVO
// ==========================================

const menu = document.getElementById("menu");
const menuMobile = document.getElementById("menuMobile");

function fecharMenu() {
    menu.classList.remove("active");
    menuMobile.setAttribute("aria-expanded", "false");
}

menuMobile.addEventListener("click", () => {
    const aberto = menu.classList.toggle("active");

    menuMobile.setAttribute(
        "aria-expanded",
        String(aberto)
    );
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", fecharMenu);
});

// ==========================================
// FORMULÁRIO DE ORÇAMENTO
// ==========================================

const formulario = document.getElementById("formOrcamento");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validação nativa do HTML
    if (!formulario.reportValidity()) return;

    const nome = document.getElementById("clienteNome").value.trim();
    const servico = document.getElementById("clienteServico").value;
    const orcamento = document.getElementById("clienteOrcamento").value;
    const detalhes = document.getElementById("clienteDetalhes").value.trim();

    if (!nome || !servico || !orcamento || !detalhes) {
        alert("Preencha todos os campos.");
        return;
    }

    // Mensagem personalizada
    const mensagem = [
        "Olá, Gustavo! Gostaria de solicitar um orçamento.",
        "",
        `*Nome:* ${nome}`,
        `*Serviço:* ${servico}`,
        `*Orçamento aproximado:* ${orcamento}`,
        `*Descrição do projeto:* ${detalhes}`
    ].join("\n");

    // Abre o WhatsApp com a mensagem preenchida
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
});
