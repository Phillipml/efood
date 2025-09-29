import type { Meta, StoryObj } from '@storybook/react-vite'
import CardList from '.'
import type { RestaurantList, Menu } from '@/types'
import Card from '@/components/ui/Card'

const mockCardsData: RestaurantList[] = [
  {
    id: 1,
    titulo: 'Bella Tavola Italiana',
    destacado: true,
    tipo: 'italiana',
    avaliacao: 4.7,
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    capa: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    cardapio: [
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
        preco: 69.9,
        id: 1,
        nome: 'Ravioli al Tartufo Nero',
        descricao:
          'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//2.jpg',
        preco: 56.9,
        id: 2,
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//3.jpg',
        preco: 74.9,
        id: 3,
        nome: 'Risotto ai Funghi Porcini',
        descricao:
          'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//4.jpg',
        preco: 89.9,
        id: 4,
        nome: 'Ossobuco alla Milanese',
        descricao:
          'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//5.jpg',
        preco: 62.9,
        id: 5,
        nome: 'Melanzane alla Parmigiana',
        descricao:
          'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//6.jpg',
        preco: 84.9,
        id: 6,
        nome: 'Frutti di Mare Linguine',
        descricao:
          'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//7.jpg',
        preco: 49.9,
        id: 7,
        nome: 'Insalata Caprese',
        descricao:
          'A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.',
        porcao: '1 a 2 pessoas'
      }
    ]
  },
  {
    id: 2,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'árabe',
    avaliacao: 4.8,
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    capa: 'https://ebac-fake-api.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    cardapio: [
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/casa_delicias_arabes//1.jpg',
        preco: 49.9,
        id: 8,
        nome: 'Mezze Platter',
        descricao:
          'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
        porcao: '2 a 4 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/casa_delicias_arabes//2.jpg',
        preco: 54.9,
        id: 9,
        nome: 'Kebab de Cordeiro',
        descricao:
          'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
        porcao: '1 a 2 pessoas'
      },
      {
        foto: 'https://ebac-fake-api.vercel.app/efood/casa_delicias_arabes//3.webp',
        preco: 45.9,
        id: 10,
        nome: 'Shawarma de Frango',
        descricao:
          'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.',
        porcao: '1 pessoa'
      }
    ]
  }
]

const restaurantCardsData: Menu[] = [
  {
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 69.9,
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//2.jpg',
    preco: 56.9,
    id: 2,
    nome: 'Spaghetti alla Carbonara',
    descricao:
      'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//3.jpg',
    preco: 74.9,
    id: 3,
    nome: 'Risotto ai Funghi Porcini',
    descricao:
      'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
    porcao: '1 a 2 pessoas'
  },
  {
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//4.jpg',
    preco: 89.9,
    id: 4,
    nome: 'Ossobuco alla Milanese',
    descricao:
      'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
    porcao: '1 a 2 pessoas'
  }
]

export default {
  title: 'layout/Card List',
  component: CardList,
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    children: {
      control: false,
      description: 'Conteúdo dos cards (componentes Card)'
    },
    key: {
      control: false,
      description: 'Chave única para o componente'
    }
  }
} as Meta

type Story = StoryObj<typeof CardList>

export const Default: Story = {
  render: () => (
    <CardList>
      {mockCardsData.map((restaurant) => (
        <Card
          key={restaurant.id}
          image={restaurant.capa}
          name={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          isFeatured={restaurant.destacado}
          foodType={restaurant.tipo}
          buttonTxt="Saiba Mais"
          $lgButtonPercent={24}
          $mdButtonPercent={28}
          onClick={() => console.log('Card clicked:', restaurant.id)}
        />
      ))}
    </CardList>
  )
}

export const HomePage: Story = {
  render: () => (
    <CardList>
      {mockCardsData.map((restaurant) => (
        <Card
          key={restaurant.id}
          image={restaurant.capa}
          name={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          isFeatured={restaurant.destacado}
          foodType={restaurant.tipo}
          buttonTxt="Saiba Mais"
          $lgButtonPercent={24}
          $mdButtonPercent={28}
          onClick={() => console.log('Card clicked:', restaurant.id)}
        />
      ))}
    </CardList>
  )
}

export const RestaurantPage: Story = {
  render: () => (
    <CardList>
      {restaurantCardsData.map((menuItem) => (
        <Card
          key={menuItem.id}
          image={menuItem.foto}
          name={menuItem.nome}
          description={menuItem.descricao}
          buttonTxt="Adicionar"
          $lgButtonPercent={100}
          $mdButtonPercent={100}
          $smButtonPercent={100}
          onClick={() => console.log('Menu item clicked:', menuItem.id)}
        />
      ))}
    </CardList>
  )
}

export const Mobile: Story = {
  render: () => (
    <CardList>
      {mockCardsData.map((restaurant) => (
        <Card
          key={restaurant.id}
          image={restaurant.capa}
          name={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          isFeatured={restaurant.destacado}
          foodType={restaurant.tipo}
          buttonTxt="Saiba Mais"
          $lgButtonPercent={24}
          $mdButtonPercent={28}
          onClick={() => console.log('Card clicked:', restaurant.id)}
        />
      ))}
    </CardList>
  ),
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}

export const Tablet: Story = {
  render: () => (
    <CardList>
      {mockCardsData.map((restaurant) => (
        <Card
          key={restaurant.id}
          image={restaurant.capa}
          name={restaurant.titulo}
          rating={restaurant.avaliacao}
          description={restaurant.descricao}
          isFeatured={restaurant.destacado}
          foodType={restaurant.tipo}
          buttonTxt="Saiba Mais"
          $lgButtonPercent={24}
          $mdButtonPercent={28}
          onClick={() => console.log('Card clicked:', restaurant.id)}
        />
      ))}
    </CardList>
  ),
  parameters: {
    viewport: { defaultViewport: 'tablet' }
  }
}
