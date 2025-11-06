// main.min.js - ONG Conecta (versão acessível)

document.addEventListener("DOMContentLoaded", () => {

  /* --- Menu Mobile com acessibilidade --- */
  const btn = document.querySelector('.hamburger');
  const navList = document.querySelector('nav ul');
  const ariaLive = document.getElementById('aria-live'); // região viva para mensagens

  if (btn && navList) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      navList.classList.toggle('active');
      btn.classList.toggle('open');

      // Feedback auditivo e visual para leitores de tela
      if (ariaLive) {
        ariaLive.textContent = expanded ? 
          'Menu fechado.' : 'Menu aberto. Use Tab para navegar pelas opções.';
      }

      // Foco no primeiro link quando abrir o menu
      if (!expanded) {
        const firstLink = navList.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Fecha o menu com tecla ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
        navList.classList.remove('active');
        btn.classList.remove('open');
        if (ariaLive) ariaLive.textContent = 'Menu fechado.';
        btn.focus();
      }
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

  /* --- Validação simples e feedback acessível de formulário --- */
  const form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Verificação de campos obrigatórios
      const invalid = [...form.querySelectorAll('input[required]')].some(input => !input.value.trim());
      if (invalid) {
        if (ariaLive) ariaLive.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      // Feedback auditivo e visual
      if (ariaLive) ariaLive.textContent = 'Cadastro enviado com sucesso!';
      alert('Cadastro enviado com sucesso!');
      form.reset();
    });
  }

  /* --- Foco visível ao navegar com teclado --- */
  document.body.addEventListener('keyup', e => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });
});
