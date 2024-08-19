
export default class Products {
  async getAllGroupedByType() {

    const data = {
      product_hive: {
        id: 1,
        type: "product_hive",
        title: "Favo de mel",
        description:
          "A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes. Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.",
        image:
          "http://localhost:3001/assets/images/abelhas-em-um-favo-de-mel-que-e-feito-pela-colmeia.jpg",
        value: "50.00",
      },
      product_honey_pot: {
        id: 2,
        type: "product_honey_pot",
        title: "Pote de mel",
        description:
          "A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes. Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.",
        image: "http://localhost:3001/assets/images/pote.png",
        value: "50.00",
        value_ml: 2.5,
        minimum_ml: 300,
        maximum_ml: 1200,
      },
      product_bee: {
        id: 3,
        title: "Abelha",
        type: "product_bee",
        value: "50.00",
        amount: 300,
        options: [
          {
            id: 1,
            image: "http://localhost:3001/assets/images/abelha-jandaira.jpg",
            title: "Abelha Jandaira",
            value: 30.0,
            description:
              " A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes. Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.",
          },
          {
            id: 2,
            image:
              "http://localhost:3001/assets/images/abelha-urussu-urucu.jpg",
            title: "Abelha Urussu",
            value: 130.0,
            description:
              " A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes. Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.",
          },
          {
            id: 3,
            image:
              "http://localhost:3001/assets/images/abelhas-mandassaia-mandacaia.jpg",
            title: "Abelha Mandassaia",
            value: 50.0,
            description:
              " A loja especializada em produtos relacionados à apicultura oferece uma variedade de itens artesanais, incluindo colmeias, potes de mel e abelhas. Com um enfoque em produtos de qualidade e produção caseira, os clientes podem encontrar uma seleção diversificada de colmeias feitas à mão, projetadas para atender às necessidades de diferentes tipos de apicultores, desde iniciantes até experientes. Além disso, a loja oferece uma ampla gama de potes de mel, variando em tamanhos, formas e estilos, todos produzidos com ingredientes naturais e cuidadosamente selecionados. Esses potes de mel são ideais tanto para uso pessoal quanto para presentear, garantindo a autenticidade e a qualidade do produto.",
          },
        ],
      },
    };

    return data
  }
}
