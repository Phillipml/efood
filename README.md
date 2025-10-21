# 🍕 eFood - Delivery de Comida

Uma aplicação moderna de delivery de comida construída com React, TypeScript e Styled Components. Interface responsiva com sistema de temas, carrinho de compras e integração completa de restaurantes.

# 📸 Screenshots

# 🌞 Tema Claro

![Screenshot Tema Claro](https://raw.githubusercontent.com/Phillipml/efood/main/public/screenshotLightTheme.png)
_Interface do eFood em tema claro com catálogo de restaurantes_

# 🌙 Tema Escuro

![Screenshot Tema Escuro](https://raw.githubusercontent.com/Phillipml/efood/main/public/screenshotDarkTheme.png)
_Interface do eFood em tema escuro com sistema de delivery_

# 🚀 Funcionalidades

## Catálogo de Restaurantes:
Lista dinâmica de estabelecimentos com dados da API
## Páginas de Restaurantes:
Detalhes completos de cada estabelecimento
## Carrinho de Compras:
Sistema completo de adicionar/remover itens
## Checkout Integrado:
Fluxo de finalização de pedidos
## Sistema de Temas:
Toggle entre tema escuro/claro com persistência
## Design Responsivo:
Otimizado para desktop, tablet e mobile
## Tags Dinâmicas:
Sistema de tags condicionais (Destaque da semana, tipo de comida)
## Rating Opcional:
Sistema de avaliação flexível por restaurante
## Loading States:
Estados de carregamento para melhor UX
## Roteamento Avançado:
Navegação fluida com React Router

# 🛠️ Tecnologias Utilizadas

## React 19.1.0:
Biblioteca para construção da interface
## TypeScript 5.8.3:
Superset do JavaScript com tipagem estática
## Vite 7.0.4:
Build tool e servidor de desenvolvimento
## Styled Components 6.1.19:
CSS-in-JS para estilização
## React Router 7.7.1:
Roteamento e navegação
## Redux Toolkit 2.9.0:
Gerenciamento de estado global
## Formik + Yup:
Formulários e validação
## Jest + Playwright:
Testes unitários e E2E
## Storybook:
Desenvolvimento de componentes

# 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

# 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd efood
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e acesse `http://localhost:3000`

# 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run test` - Executa os testes unitários
- `npm run test:playwright` - Executa os testes E2E
- `npm run storybook` - Inicia o Storybook
- `npm run lint` - Executa o linter ESLint

# 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/             # Componentes de interface (Button, Card, Text, etc.)
│   └── layout/         # Componentes de layout (Header, Footer, SideMenu)
├── pages/              # Páginas da aplicação (Home, Restaurant)
├── hooks/              # Hooks customizados (useTheme, useOverlay)
├── services/           # Integração com APIs
├── store/              # Gerenciamento de estado (Redux)
├── styles/             # Estilos globais e temas
├── types/              # Definições de tipos TypeScript
└── assets/             # Recursos estáticos (imagens, ícones)
```

# 🎯 Como Usar

1. **Explore Restaurantes**: Navegue pela página inicial para ver o catálogo de restaurantes
2. **Visualize Detalhes**: Clique em "Saiba Mais" para ver detalhes de um restaurante
3. **Adicione ao Carrinho**: Selecione itens do cardápio e adicione ao carrinho
4. **Finalize Pedido**: Use o sistema de checkout para completar seu pedido
5. **Alterne Temas**: Use o botão de tema para alternar entre modo claro/escuro

# 🏪 Funcionalidades do Delivery

# 🍽️ **Catálogo de Restaurantes**

- Lista dinâmica de estabelecimentos
- Sistema de tags (Destaque da semana, tipo de comida)
- Ratings opcionais por restaurante
- Navegação fluida entre páginas

# 🛒 **Sistema de Carrinho**

- Adicionar/remover itens do cardápio
- Cálculo automático de valores
- Persistência do estado
- Checkout integrado

# 🎨 **Sistema de Temas**

- Toggle entre tema claro/escuro
- Persistência da preferência
- Componentes adaptáveis
- Design responsivo

# 🧪 Testes

O projeto possui cobertura completa de testes:

- **147+ testes unitários** com Jest
- **507 testes E2E** com Playwright
- **97.41% de cobertura** geral
- **Sistema de mocks** organizados
- **Testes cross-browser** (Chromium, Firefox, WebKit)

```bash
# Executar testes unitários
npm run test

# Executar testes E2E
npm run test:playwright

# Ver cobertura de testes
npm run test:coverage
```

# 🎨 Características do Design

- **Styled Components**: CSS-in-JS para estilização modular
- **Design System**: Componentes reutilizáveis e acessíveis
- **Responsividade**: Adaptação automática para diferentes dispositivos
- **Temas Dinâmicos**: Sistema completo de temas claro/escuro
- **UX Otimizada**: Interface intuitiva e moderna

# 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

**Desenvolvido por:**
Phillip Menezes

**Email:**
contato.phillip.menezes@gmail.com  
**LinkedIn:**
[Phillip Menezes](https://www.linkedin.com/in/phillip-menezes-063a39227/)  
**GitHub:**
[Phillipml](https://github.com/Phillipml/)
---

**Nota**: Este é um projeto de demonstração de delivery desenvolvido com as melhores práticas de React e TypeScript.
