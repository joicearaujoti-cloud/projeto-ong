// main.js - ONG Conecta
document.addEventListener("DOMContentLoaded", () => {
  /* --- Menu Mobile --- */
  const btn = document.querySelector('.hamburger');
  const navList = document.querySelector('nav ul');

  if (btn && navList) {
    btn.addEventListener('click', () => {
      navList.classList.toggle('active');
      btn.classList.toggle('open');
    });
  }

  /* --- Máscaras de Campos (CPF, Telefone, CEP) --- */
  const masks = {
    cpf: v => v.replace(/\D/g, '')
               .replace(/(\d{3})(\d)/, '$1.$2')
               .replace(/(\d{3})(\d)/, '$1.$2')
               .replace(/(\d{3})(\d{1,2})$/, '$1-$2'),

    telefone: v => v.replace(/\D/g, '')
                    .replace(/^(\d{2})(\d)/g, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2'),

    cep: v => v.replace(/\D/g, '')
               .replace(/(\d{5})(\d)/, '$1-$2')
  };

  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  if (cpfInput) cpfInput.addEventListener('input', e => e.target.value = masks.cpf(e.target.value));
  if (telInput) telInput.addEventListener('input', e => e.target.value = masks.telefone(e.target.value));
  if (cepInput) cepInput.addEventListener('input', e => e.target.value = masks.cep(e.target.value));

  /* --- Validação simples de formulário --- */
  const form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Cadastro enviado com sucesso!');
      form.reset();
    });
  }
});
