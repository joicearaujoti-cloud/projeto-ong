
# ONG Conecta — Frontend (Projeto)

README completo preparado para o repositório **ong-conecta**. Este README foi adaptado à estrutura de pastas que você informou e inclui instruções de uso, referências de caminhos relativos (importantes para o seu `index.html`) e dicas para teste local.

---

## 📁 Estrutura de pastas (corrigida)
Você informou que a estrutura do projeto é a seguinte. Ela deve permanecer assim para que os caminhos relativos funcionem com as páginas HTML atuais:

```
ong-conecta/
├── html/
│   └── index.html
│   └── projetos.html
│   └── cadastro.html
├── css/
│   └── ong-style.css
├── imagens/
└── js/
    └── main.js
```

## 🧭 Referências de caminho (exemplos para `<head>` e `<body>` no `html/index.html`)

No topo do seu `html/index.html` inclua o CSS assim:
```html
<link rel="stylesheet" href="../css/ong-style.css">
```

No final do `body` inclua o JavaScript assim:
```html
<script src="../js/main.js"></script>
```

Para imagens (por exemplo dentro de `html/index.html`):
```html
<img src="../imagens/imagens.jpeg" alt="Descrição da imagem">
```

Esses caminhos são relativos ao local do HTML (`html/`), por isso o `..` para subir ao diretório raiz do projeto e acessar `css/`, `js/` e `imagens/`.

---

## 🚀 Como abrir e testar localmente

### Opção 1 — Abrir diretamente (método simples)
1. No sistema de arquivos, abra `ong-conecta/html/index.html` com um navegador (duplo clique ou `Abrir com...`).
2. Verifique se o CSS, imagens e JS carregaram corretamente. Se não carregaram, verifique os caminhos usando a ferramenta DevTools (Console / Network).

### Opção 2 — Usar servidor local (recomendado para rotas, CORS e recursos)
Recomendado: instalar a extensão **Live Server** no VS Code ou usar um pequeno servidor HTTP. Abaixo há duas opções via terminal.

#### Python 3 (método rápido)
Abra o terminal no diretório `ong-conecta` e rode:
```bash
# a maioria das máquinas com Python 3 usa:
python -m http.server 8000
```
Depois abra no navegador: `http://localhost:8000/html/index.html`

#### Node (http-server)
Se tiver Node.js instalado:
```bash
npm install -g http-server
http-server -c-1
```
Abra `http://localhost:8080/html/index.html` (ou a porta mostrada pelo comando).

---

## ✅ Checklist de verificação (se algo não carregar)

1. Caminho do CSS no `<head>` deve ser `../css/ong-style.css` (relativo ao `html/`).  
2. Caminho do JS antes de `</body>` deve ser `../js/main.js`.  
3. Imagens devem apontar para `../imagens/nome-do-arquivo.ext`.  
4. Nomes de arquivos e letras maiúsculas/minúsculas são sensíveis em servidores UNIX — verifique `imagens.jpeg` vs `Imagens.jpeg`.  
5. Abra o DevTools (F12) → `Console` para ver erros de JS e `Network` para ver se recursos 404.  

---

## 🧩 Conteúdo dos arquivos (resumo)

- `html/index.html` — Página principal / estrutura HTML. Deve referenciar o CSS e o JS com `../css/` e `../js/` respectivamente.  
- `css/ong-style.css` — Estilos principais do projeto (variáveis CSS, responsividade, layout).  
- `js/main.js` — Script principal: menu mobile, máscaras de formulário, validação rápida, handlers.  
- `imagens/imagens.jpeg` — Imagens usadas no site (banners, logotipo ou fotos).

---

## 🛠️ Sugestões de melhoria (rápido)
- Adote nomes mais específicos para as imagens (ex.: `logo.png`, `hero.jpg`) ao invés de `imagens.jpeg` — facilita manutenção.  
- Separar imagens por finalidade: `imagens/logo/`, `imagens/banners/` se o projeto crescer.  
- Criar `html/projetos.html` e `html/cadastro.html` com os mesmos padrões de caminhos.  
- Usar `<meta name="theme-color">` e tags Open Graph para melhor integração social.

---

## 📄 Licença
Este projeto pode ser distribuído sob a licença **MIT** por padrão (se quiser, eu incluo um arquivo `LICENSE` com o texto).

---

## 🤝 Contato / Créditos
Desenvolvido para o propósito da ONG Conecta. Para ajustes, me avise quais páginas adicionais (ex.: `cadastro.html`, `projetos.html`) você tem na pasta `html/` que eu ajusto os caminhos e o conteúdo.

---

### Versão do README
- Gerado: 2025-11-03

---
