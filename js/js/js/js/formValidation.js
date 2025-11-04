// ==========================
// VALIDACAO DE FORMULARIO
// ==========================

// Mascara para CPF, telefone e CEP
document.addEventListener("input", function (e) {
  const target = e.target;

  if (target.name === "cpf") {
    target.value = target.value.replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (target.name === "telefone") {
    target.value = target.value.replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  }

  if (target.name === "cep") {
    target.value = target.value.replace(/\D/g, "")
      .replace(/(\d{5})(\d{3})$/, "$1-$2");
  }
});

// Validacao de campos obrigatorios
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    let valido = true;
    form.querySelectorAll("input[required]").forEach(input => {
      if (!input.value.trim()) {
        valido = false;
        input.classList.add("erro");
      } else {
        input.classList.remove("erro");
      }
    });

    if (!valido) {
      alert("Por favor, preencha todos os campos obrigatorios corretamente.");
    } else {
      alert("Formulario enviado com sucesso!");
      form.reset();
    }
  });
}
