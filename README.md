# eFood

Uma aplicação moderna de delivery de comida construída com React, TypeScript e Styled Components.

## Funcionalidades

- **Página Inicial** - Catálogo de restaurantes com navegação
- **Página de Restaurantes** - Lista detalhada de estabelecimentos
- **Roteamento** - Navegação entre páginas com React Router
- **Tema Escuro/Claro** - Toggle entre temas
- **Design Responsivo** - Desktop, tablet e mobile
- **Sistema de Design** - Componentes reutilizáveis
- **Testes Completos** - Cobertura de testes unitários e E2E

## Tecnologias

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS
- **React Router** - Roteamento
- **Storybook** - Desenvolvimento de componentes
- **Jest** - Testes unitários
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
│   └── layout/         # Componentes de layout
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados
├── utils/              # Funções utilitárias
├── styles/             # Estilos globais
├── types/              # Definições de tipos
├── assets/             # Recursos estáticos
└── *.test.tsx          # Testes unitários

testes/
├── e2e/                # Testes end-to-end (Playwright)
└── components/         # Testes de componentes

configuração/
├── .jest/              # Configuração do Jest
├── jest.config.cjs     # Configuração principal do Jest
└── playwright.config.ts # Configuração do Playwright
```

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
```

#### Cobertura de Testes

- **Rotas** - Testes completos de navegação e renderização
- **Componentes** - Testes de renderização e interação
- **Utilitários** - Testes de funções auxiliares
- **Hooks** - Testes de lógica customizada

#### Exemplo de Teste de Rotas

```tsx
describe('Routes', () => {
  it('renderiza rota home corretamente', () => {
    renderWithProviders(<RoutesApp />, ['/'])
    expect(screen.getByTestId('card-button')).toHaveTextContent('Saiba Mais')
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

O projeto mantém alta cobertura de testes:

- **Rotas**: 100% - Navegação e renderização
- **Componentes**: Cobertura completa dos props e interações
- **Utilitários**: 100% - Funções auxiliares testadas
- **Hooks**: Cobertura completa da lógica customizada

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
