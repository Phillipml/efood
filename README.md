# eFood

Uma aplicação moderna de delivery de comida construída com React, TypeScript e Styled Components.

## Funcionalidades

- **Página Inicial** - Catálogo de restaurantes com navegação
- **Página de Restaurantes** - Lista detalhada de estabelecimentos
- **Roteamento** - Navegação entre páginas com React Router
- **Sistema de Temas** - Toggle entre tema escuro/claro com persistência
- **Design Responsivo** - Desktop, tablet e mobile
- **Sistema de Design** - Componentes reutilizáveis e acessíveis
- **Testes Completos** - 147+ testes unitários + E2E
- **Cobertura Total** - 97.41% de cobertura geral (113/116 statements)
- **Mocks Organizados** - Sistema de mocks reutilizáveis e centralizados
- **TypeScript** - Tipagem forte em todo o projeto

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS
- **React Router** - Roteamento
- **Storybook** - Desenvolvimento de componentes
- **Jest** - Testes unitários com cobertura completa
- **Testing Library** - Testes de componentes React
- **Playwright** - Testes E2E

## Como Executar

```bash
# Clone e instale
git clone https://github.com/Phillipml/efood.git
cd efood
npm install

# Execute o projeto
npm run dev

# Acesse http://localhost:3000
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run dev-host         # Com acesso externo

# Build
npm run build            # Build de produção
npm run preview          # Preview do build

# Testes
npm run test             # Testes unitários
npm run test:watch       # Testes em modo watch
npm run test:coverage    # Testes com cobertura
npm run test:playwright  # Testes E2E

# Storybook
npm run storybook        # Inicia Storybook
npm run build-storybook  # Build do Storybook

# Qualidade
npm run lint             # ESLint
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface
│   │   ├── Button/     # Botão com testes completos
│   │   ├── Text/       # Texto com testes completos
│   │   ├── Card/       # Card com testes completos
│   │   ├── ThemeButton/# Botão de tema com testes
│   │   └── Brand/      # Logo e Icon com testes
│   └── layout/         # Componentes de layout com testes completos
│       ├── Header/     # Header principal e RestaurantHeader
│       ├── CardList/   # Lista de cards de restaurantes
│       └── Footer/     # Rodapé com redes sociais
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados (useTheme, useThemeState)
├── utils/              # Funções utilitárias com testes
│   └── __mocks__/      # Sistema de mocks organizados
├── styles/             # Estilos globais
├── types/              # Definições de tipos
├── assets/             # Recursos estáticos
└── *.test.tsx          # Testes unitários (147+ testes)

testes/
├── e2e/                # Testes end-to-end (Playwright)
└── components/         # Testes de componentes

configuração/
├── .jest/              # Configuração do Jest
├── jest.config.cjs     # Configuração principal do Jest
└── playwright.config.ts # Configuração do Playwright
```

## Sistema de Mocks

O projeto possui um sistema completo de mocks organizados em `src/utils/__mocks__/`:

### **Estrutura de Mocks**

- **`components.tsx`** - Mocks de componentes React reutilizáveis
- **`hooks.ts`** - Mocks de hooks customizados (useTheme, useNavigate, etc.)
- **`router.ts`** - Mocks do React Router
- **`render-utils.tsx`** - Utilitários de renderização para testes
- **`jest-setup.ts`** - Configurações globais do Jest
- **`themes.ts`** - Temas mock para testes
- **`index.ts`** - Exporta todos os mocks centralizadamente

### **Como Usar os Mocks**

```tsx
// Importar utilitários de teste
import {
  renderWithThemeAndRouter,
  mockNavigate,
  MockHeader,
  resetAllMocks
} from '@/utils/test-utils'

// Importar mocks específicos
import { mockUseThemeState } from '@/utils/__mocks__/hooks'

// Exemplo de teste
describe('MeuComponente', () => {
  beforeEach(() => {
    resetAllMocks()
  })

  it('testa navegação', () => {
    renderWithThemeAndRouter(<MeuComponente />)

    fireEvent.click(screen.getByText('Navegar'))
    expect(mockNavigate).toHaveBeenCalledWith('/rota')
  })
})
```

### **Benefícios**

- ✅ **Reutilização** - Mocks centralizados e reutilizáveis
- ✅ **Consistência** - Padrões uniformes em todos os testes
- ✅ **Manutenibilidade** - Fácil de atualizar e manter
- ✅ **Produtividade** - Menos código repetitivo
- ✅ **Type Safety** - Mocks tipados com TypeScript

## Componentes Principais

### Button

Botão customizável com suporte a temas e responsividade.

```tsx
<Button
  $buttonColor="primary"
  $lgButtonPercent={50}
  onClick={() => console.log('Clicado!')}
>
  Clique aqui
</Button>
```

### Card

Card para exibir informações de restaurantes.

```tsx
<Card
  image="/restaurant.jpg"
  name="Restaurante Exemplo"
  rating={4.5}
  description="Deliciosa comida caseira"
  buttonTxt="Ver Cardápio"
/>
```

### Text

Componente de texto flexível.

```tsx
<Text as="title" $textColor="tertiary" $lgFontSize="xl" $alignCenter={true}>
  Título Principal
</Text>
```

### Sistema de Temas

Sistema completo de gerenciamento de temas com hooks customizados.

```tsx
// Hook para gerenciar estado do tema
const { isDarkTheme, toggleTheme, currentTheme } = useThemeState()

// Hook para acessar tema em componentes (requer ThemeProvider)
const { currentTheme, toggleTheme } = useTheme()
```

### Componentes de Layout

#### Header

Header principal com navegação e logo.

```tsx
<Header /> // Renderiza automaticamente baseado na rota
```

#### RestaurantHeader

Header específico para páginas de restaurantes.

```tsx
<RestaurantHeader /> // Título, logo e contador de carrinho
```

#### CardList

Lista de cards de restaurantes com dados dinâmicos.

```tsx
<CardList
  buttonTxt="Ver Cardápio"
  onClick={() => console.log('Card clicado')}
/>
```

#### Footer

Rodapé com logo e links de redes sociais.

```tsx
<Footer /> // Logo, texto institucional e ícones sociais
```

## Testes

### Testes Unitários (Jest)

O projeto utiliza Jest para testes unitários com cobertura completa dos componentes e funcionalidades.

```bash
# Executar todos os testes
npm run test

# Testes em modo watch
npm run test:watch

# Testes com cobertura de código
npm run test:coverage

# Executar teste específico
npm test -- src/routes.test.tsx

# Executar testes de componentes UI
npm test -- --testPathPatterns="components/ui"

# Executar testes de utilitários
npm test -- --testPathPatterns="utils"

# Executar testes de componentes de layout
npm test -- --testPathPatterns="layout"

# Executar testes de páginas
npm test -- --testPathPatterns="pages"

# Executar testes com mocks organizados
npm test -- --testPathPatterns="mocks"
```

#### Cobertura de Testes

- **Rotas** - Testes completos de navegação e renderização
- **Componentes UI** - Testes de renderização e interação
- **Componentes Layout** - Testes de estrutura e funcionalidade
- **Páginas** - Testes de renderização e navegação
- **Utilitários** - Testes de funções auxiliares
- **Hooks** - Testes de lógica customizada
- **Mocks** - Sistema organizado de mocks reutilizáveis

#### Exemplo de Teste de Rotas

```tsx
describe('Routes', () => {
  it('renderiza rota home corretamente', () => {
    renderWithProviders(<RoutesApp />, ['/'])
    expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
  })
})
```

#### Exemplo de Teste de Componentes UI

```tsx
describe('Button Component', () => {
  it('executa onClick quando clicado', () => {
    const handleClick = jest.fn()
    renderWithTheme(<Button onClick={handleClick}>Clique</Button>)

    fireEvent.click(screen.getByText('Clique'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

#### Exemplo de Teste de Componentes Layout

```tsx
describe('CardList Component', () => {
  it('renderiza múltiplos Cards', () => {
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" />)

    const cards = screen.getAllByText('Hioki Sushi')
    expect(cards).toHaveLength(7)
  })

  it('executa onClick quando especificado', () => {
    const mockOnClick = jest.fn()
    renderWithTheme(<CardList buttonTxt="Ver Cardápio" onClick={mockOnClick} />)

    const buttons = screen.getAllByText('Ver Cardápio')
    fireEvent.click(buttons[0])
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
```

#### Exemplo de Teste de Páginas

```tsx
describe('Home Page', () => {
  it('executa navegação quando onClick é chamado', () => {
    renderWithTheme(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    fireEvent.click(buttons[0])

    expect(mockNavigate).toHaveBeenCalledWith('/restaurant')
  })

  it('passa props corretas para CardList', () => {
    renderWithTheme(<Home />)

    const buttons = screen.getAllByText('Saiba Mais')
    expect(buttons).toHaveLength(7)
  })
})
```

#### Exemplo de Teste do App Component

```tsx
describe('App Component', () => {
  it('renderiza sem quebrar', () => {
    render(<App />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('routes')).toBeInTheDocument()
    expect(screen.getByTestId('theme-button')).toBeInTheDocument()
  })

  it('toggle de tema funciona', () => {
    render(<App />)

    const themeButton = screen.getByTestId('theme-button')
    fireEvent.click(themeButton)

    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })
})
```

### Testes E2E (Playwright)

Testes end-to-end para validar fluxos completos da aplicação.

```bash
npm run test:playwright
```

## Storybook

Acesse o Storybook para ver todos os componentes:

```bash
npm run storybook
```

## Qualidade de Código

### Linting e Formatação

```bash
# Executar ESLint
npm run lint

# Verificar tipos TypeScript
npx tsc --noEmit
```

### Cobertura de Testes

O projeto mantém alta cobertura de testes com **147+ testes passando**:

#### **Componentes UI (49 testes)**

- **Button Component** (8 testes) - Renderização, props, onClick, estilos
- **Text Component** (9 testes) - Elementos HTML, props, children, ícones
- **Card Component** (12 testes) - Imagem, rating, descrição, botões, temas
- **ThemeButton Component** (7 testes) - Ícones de tema, onClick, estilos
- **Brand Components** (13 testes) - Logo e Icon com props responsivas

#### **Componentes Layout (28 testes)**

- **Header Component** (6 testes) - HeaderWrapper, Container, Logo, Text, rota home
- **RestaurantHeader Component** (7 testes) - HeaderRestaurantWrap, RestaurantContainer, título, Logo, contador de carrinho
- **CardList Component** (7 testes) - Container, múltiplos Cards, props, onClick, dados corretos
- **Footer Component** (8 testes) - Footer, conteúdo, ícones sociais, Container, logo, texto, links

#### **Páginas (13 testes)**

- **Home Page** (6 testes) - CardList, props, navegação, renderização
- **Restaurant Page** (7 testes) - CardList, props, renderização, estilos

#### **App Component (11 testes)**

- **App Component** (11 testes) - Renderização, ThemeProvider, BrowserRouter, Header, RoutesApp, Footer, ThemeButton, toggle de tema

#### **Funcionalidades Core (38+ testes)**

- **Rotas** (7 testes) - Navegação e renderização com React Router
- **Utilitários** (31 testes) - Funções de cor e tamanho com 100% de cobertura
- **Hooks** (10+ testes) - useTheme e useThemeState com cobertura completa

#### **Estatísticas de Cobertura**

- ✅ **147+ testes passando**
- ✅ **0 testes falhando**
- ✅ **17+ suites de teste**
- ✅ **97.41% Statements** (113/116)
- ✅ **88.23% Branches** (90/102)
- ✅ **100% Functions** (40/40)
- ✅ **97.36% Lines** (111/114)

#### **Cobertura por Categoria**

- ✅ **Componentes UI** - 100% de cobertura
- ✅ **Componentes Layout** - 100% de cobertura
- ✅ **Páginas** - 100% de cobertura
- ✅ **App Component** - 100% de cobertura
- ✅ **Utilitários** - 98.07% de cobertura
- ✅ **Sistema de temas** totalmente testado

### Boas Práticas

- **TypeScript** - Tipagem forte em todo o projeto
- **Testes** - Cobertura completa com Jest e Playwright
- **Componentes** - Design system consistente
- **Performance** - Otimizações com Vite
- **Acessibilidade** - Componentes acessíveis

## Deploy

```bash
# Build de produção
npm run build

# Preview local
npm run preview
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com React + TypeScript**
