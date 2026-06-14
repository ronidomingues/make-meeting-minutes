# Estrutura do Projeto

Este projeto segue uma organização modular para facilitar manutenção, escalabilidade e reutilização de código.

```text
.
├── .gitignore
├── index.html
├── README.md
└── src
    ├── assets
    │   ├── fonts
    │   └── images
    │       ├── backgrounds
    │       ├── icons
    │       ├── ilustrations
    │       └── logos
    ├── data
    │   └── content.json
    ├── scripts
    │   ├── components
    │   │   ├── form.js
    │   │   └── navbar.js
    │   ├── main.js
    │   ├── services
    │   │   └── api.js
    │   └── utils
    │       └── helpers.js
    └── styles
        ├── components
        │   ├── buttons.css
        │   └── cards.css
        ├── main.css
        ├── pages
        │   └── home.css
        └── variables.css
```

---

# Arquivos da Raiz

## `.gitignore`

Arquivo utilizado pelo Git para definir quais arquivos e diretórios não devem ser versionados.

### Exemplos

```gitignore
node_modules/
.env
dist/
```

### Objetivo

Evitar que arquivos temporários, credenciais ou dependências sejam enviados para o repositório.

---

## `index.html`

Página principal da aplicação.

### Responsabilidades

- Estrutura HTML da Landing Page;
- Carregamento dos arquivos CSS;
- Carregamento dos scripts JavaScript;
- Definição do conteúdo visível ao usuário.

### Exemplo

```html
<link rel="stylesheet" href="./src/styles/main.css">
<script type="module" src="./src/scripts/main.js"></script>
```

---

## `README.md`

Documentação do projeto.

### Pode conter

- Descrição do projeto;
- Tecnologias utilizadas;
- Estrutura de pastas;
- Instruções de instalação;
- Guia para contribuição.

---

# Diretório `src`

Contém todo o código-fonte da aplicação.

---

# Diretório `assets`

Armazena recursos estáticos utilizados pelo projeto.

## Objetivo

Separar arquivos de mídia do restante da aplicação.

---

## `assets/fonts`

Armazena fontes personalizadas.

### Exemplos

```text
Inter-Regular.ttf
Poppins-Bold.ttf
Roboto-Light.ttf
```

### Utilização

```css
@font-face {
    font-family: "Inter";
    src: url("../assets/fonts/Inter-Regular.ttf");
}
```

---

## `assets/images`

Armazena imagens utilizadas pela aplicação.

---

### `backgrounds`

Imagens de fundo.

### Exemplos

```text
hero-bg.jpg
footer-bg.png
```

### Uso

```css
background-image: url("../assets/images/backgrounds/hero-bg.jpg");
```

---

### `icons`

Ícones SVG ou PNG.

### Exemplos

```text
menu.svg
close.svg
github.svg
linkedin.svg
```

### Objetivo

Fornecer elementos visuais pequenos e reutilizáveis.

---

### `illustrations`

Ilustrações decorativas ou informativas.

### Exemplos

```text
team.svg
product.svg
workflow.svg
```

### Objetivo

Apoiar a comunicação visual da página.

---

### `logos`

Logotipos da empresa, parceiros ou patrocinadores.

### Exemplos

```text
logo.svg
logo-dark.svg
partner-logo.png
```

---

# Diretório `data`

Armazena dados consumidos pela aplicação.

---

## `content.json`

Arquivo contendo conteúdo dinâmico da página.

### Exemplo

```json
{
  "title": "Minha Landing Page",
  "subtitle": "Transformando ideias em realidade"
}
```

### Objetivo

Separar conteúdo da lógica da aplicação.

Isso permite alterar textos sem modificar JavaScript ou HTML.

---

# Diretório `scripts`

Contém toda a lógica JavaScript.

---

## `main.js`

Ponto de entrada da aplicação.

### Responsabilidades

- Inicializar componentes;
- Configurar eventos globais;
- Carregar dados;
- Coordenar a execução do sistema.

### Exemplo

```javascript
import { initNavbar } from "./components/navbar.js";

initNavbar();
```

---

# Diretório `scripts/components`

Componentes reutilizáveis da interface.

Cada arquivo controla uma parte específica da página.

---

## `navbar.js`

Responsável pela barra de navegação.

### Pode controlar

- Menu responsivo;
- Menu hamburguer;
- Scroll suave;
- Destaque de seção ativa.

---

## `form.js`

Responsável pelos formulários.

### Pode controlar

- Validação;
- Máscaras;
- Envio de dados;
- Mensagens de sucesso ou erro.

---

# Diretório `scripts/services`

Camada responsável pela comunicação externa.

---

## `api.js`

Centraliza chamadas para APIs e serviços externos.

### Exemplo

```javascript
export async function getUsers() {
    const response = await fetch("/api/users");
    return response.json();
}
```

### Objetivo

Evitar espalhar chamadas HTTP pelo projeto.

---

# Diretório `scripts/utils`

Funções auxiliares reutilizáveis.

---

## `helpers.js`

Funções genéricas que podem ser usadas em vários lugares.

### Exemplos

```javascript
export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function debounce(fn, delay) {
    // implementação
}
```

### Objetivo

Evitar repetição de código.

---

# Diretório `styles`

Contém todos os arquivos CSS.

---

## `variables.css`

Centraliza variáveis globais.

### Exemplo

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #0f172a;
    --border-radius: 8px;
}
```

### Objetivo

Facilitar manutenção da identidade visual.

---

## `main.css`

Arquivo CSS principal.

### Responsabilidades

- Importar os demais arquivos CSS;
- Definir estilos globais.

### Exemplo

```css
@import "./variables.css";
@import "./components/buttons.css";
@import "./pages/home.css";
```

---

# Diretório `styles/components`

Estilos de componentes reutilizáveis.

---

## `buttons.css`

Estilos dos botões.

### Exemplo

```css
.btn {
    padding: 12px 24px;
}
```

---

## `cards.css`

Estilos dos cards.

### Exemplo

```css
.card {
    border-radius: 8px;
}
```

---

# Diretório `styles/pages`

Estilos específicos de páginas.

---

## `home.css`

Estilos exclusivos da página inicial.

### Exemplos

```css
.hero {
    min-height: 100vh;
}

.features {
    display: grid;
}
```

### Objetivo

Concentrar estilos que não serão reutilizados em outras páginas.

---

# Fluxo Geral do Projeto

```text
index.html
     │
     ▼
main.js
     │
     ├── components/
     ├── services/
     └── utils/
     │
     ▼
content.json
     │
     ▼
Renderização da Interface
     │
     ▼
CSS (styles/)
     │
     ▼
Assets (fonts e images)
```

Essa organização segue princípios utilizados em projetos front-end modernos e facilita a evolução futura para frameworks como React, Vue ou Angular sem exigir uma grande reorganização da estrutura.
