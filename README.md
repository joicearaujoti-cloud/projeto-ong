# ONG Conecta

## Descrição
O projeto **ONG Conecta** é uma plataforma que tem como objetivo conectar pessoas e organizações que desejam colaborar em ações sociais. A aplicação apresenta páginas institucionais, um cadastro de voluntários/doadores e informações sobre os projetos em andamento.

---

## Estrutura do Projeto

```
ong-conecta/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   ├── ong-style.css
│   └── ong-style.min.css
├── js/
│   ├── main.js
│   └── main.min.js
├── imagens/
│   (arquivos de imagem)
│
├── html-otimizado/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
```

---

## Tecnologias Utilizadas
- **HTML5** para estrutura semântica das páginas  
- **CSS3** para estilização e responsividade  
- **JavaScript** puro para interatividade  
- **Padrões de Acessibilidade** seguindo WCAG 2.1 Nível AA

---

## Acessibilidade (WCAG 2.1 Nível AA)
- Navegação completa por teclado  
- Estrutura semântica adequada com landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)  
- Contraste mínimo de 4.5:1 para texto normal  
- Suporte a leitores de tela com atributos ARIA e rótulos descritivos  
- Versão em alto contraste e modo escuro  
- Foco visível em todos os elementos interativos

---

## Otimização para Produção
- Arquivos CSS, JavaScript e HTML **minificados**  
- **Compressão de imagens** em formato otimizado (usando TinyPNG ou Squoosh)  
- Estrutura de pastas separada para versões otimizadas  
- Configuração de cache via meta tags para melhor desempenho

---

## Estrutura Semântica
As páginas utilizam marcação semântica com:
- `<header>` para cabeçalho e navegação  
- `<main>` como região principal do conteúdo  
- `<section>` e `<article>` para blocos de conteúdo distintos  
- `<footer>` para informações de rodapé

---

## Navegação e Interatividade
- Menu acessível com suporte a teclado  
- Ícone de menu mobile com controle de foco e aria-expanded  
- Máscaras de entrada para CPF, telefone e CEP  
- Validação simples de formulário com mensagem de confirmação

---

## Instruções de Uso
1. Faça o download do repositório e extraia o conteúdo.  
2. Abra o arquivo `index.html` no navegador.  
3. Utilize o menu para navegar entre as páginas “Projetos” e “Cadastro”.  
4. No formulário de cadastro, preencha os campos obrigatórios e envie as informações.  

---

## Deploy
As versões minificadas e otimizadas devem ser utilizadas para publicação:
```
dist/html/
dist/css/
dist/js/
imagens-otimizadas/
```
Essas versões garantem melhor desempenho e carregamento em ambiente de produção.

---

## Licença
Este projeto está licenciado sob a licença **MIT**.
