// Use esse mock para os profissionais da LaPag
export const professionalMocks = [
  {
    _id: "4b6BEEvCCH8zAGSyY",
    name: "Ana Claudia Silveira",
    nickname: "Ana",
    document_number: "11158031076"
  },
  {
    _id: "BzDQS9nob9rjNppf5",
    name: "Antonio Carlos Martins",
    nickname: "Antonio",
    document_number: "97976183079"
  },
  {
    _id: "CbyCKeE6eJeBKjrq2",
    name: "Camila Silva",
    nickname: "Camila",
    document_number: "82053478837"
  },
  {
    _id: "SvBETG3Xzd2dpt58R",
    name: "Marcos Castro",
    nickname: "Marcos",
    document_number: "37164522000139"
  },
  {
    _id: "kdprotTsBgkLhaiXM",
    name: "Lelo Prado",
    nickname: "Lelo",
    document_number: "45810821880"
  },
  {
    _id: "mBwMzFoJCEuqJJfaa",
    name: "Pedro Costa",
    nickname: "Pepe",
    document_number: "45810281820"
  },
  {
    _id: "m28SyncYfCoGmL2nN",
    name: "Teste",
    nickname: "Te",
    document_number: "48511230321"
  },
  {
    _id: "EAGzMEL7bL8q6mSz2",
    name: "Modric",
    nickname: "Mô",
    document_number: "96133358000161"
  }
];

// Use esse mock para os serviços da LaPag
export const servicesMocks = [
  {
    _id: "2zt6YKZZA7dCvaZjZ",
    name: "Perna Inteira",
    duration: null,
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "CrP8u4WQaD7Qf7Nyw",
    name: "Lavagem",
    duration: null,
    available_professionals: [
      {
        commission: "30",
        cpf: "97976183079"
      },
      {
        commission: "30",
        cpf: "37164522000139"
      },
      {
        commission: "50",
        cpf: "45810821880"
      }
    ]
  },
  {
    _id: "F2ke4teiMDzxKrrKn",
    name: "Escova",
    duration: "60",
    available_professionals: [
      {
        commission: "50",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      },
      {
        cpf: "45810281820",
        commission: "50"
      },
      {
        cpf: "96133358000161",
        commission: "50"
      }
    ]
  },
  {
    _id: "F56xwREr6sLhmEAuX",
    name: "Intima",
    duration: "60",
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "HjQQZpitq4JSwCi5m",
    name: "Body Piercing",
    duration: "60",
    available_professionals: [
      {
        cpf: "45810281820",
        commission: "50"
      }
    ]
  },
  {
    _id: "JZLePaegZxrDRCjzd",
    name: "Axila",
    duration: "60",
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "JkZ9QPgXbcZZNt2rq",
    name: "Buço",
    duration: "60",
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "SDnJhi87Jznjhowd7",
    name: "Manicure",
    duration: "60",
    available_professionals: [
      {
        commission: "50",
        cpf: "11158031076"
      },
      {
        commission: "50",
        cpf: "82053478837"
      },
      {
        cpf: "45810281820",
        commission: "42.5"
      }
    ]
  },
  {
    _id: "WPXeE6jQedTKaBPRZ",
    name: "Meia Perna",
    duration: "90",
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "ZYhdxNpdf5K6H323j",
    name: "Hidratação",
    duration: "90",
    available_professionals: [
      {
        commission: "45",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      },
      {
        cpf: "48511230321",
        commission: "45"
      }
    ]
  },
  {
    _id: "ZnorgRGH5cpce3mcW",
    name: "Corte Masculino",
    duration: "90",
    available_professionals: [
      {
        commission: "50",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      },
      {
        commission: "50",
        cpf: "37164522000139"
      }
    ]
  },
  {
    _id: "ZpDGht4zJP2yNBHit",
    name: "Sobrancelha",
    duration: "90",
    available_professionals: [
      {
        commission: "50",
        cpf: "82053478837"
      }
    ]
  },
  {
    _id: "bjmmPPjqKdWfwJqtC",
    name: "Pedicure",
    duration: "90",
    available_professionals: [
      {
        commission: "53",
        cpf: "11158031076"
      },
      {
        commission: "50",
        cpf: "82053478837"
      },
      {
        cpf: "45810281820",
        commission: "50"
      }
    ]
  },
  {
    _id: "brFYvuqaWdWXDmupm",
    name: "Luzes",
    duration: "90",
    available_professionals: [
      {
        commission: "55",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      }
    ]
  },
  {
    _id: "cYzRrK8SM8SZr6LiG",
    name: "Francesinha",
    duration: "30",
    available_professionals: [
      {
        commission: "50",
        cpf: "11158031076"
      },
      {
        commission: "50",
        cpf: "82053478837"
      },
      {
        cpf: "45810281820",
        commission: "50"
      }
    ]
  },
  {
    _id: "pi2gymqqHWpF7ywjf",
    name: "Escova Progressiva",
    duration: "30",
    available_professionals: [
      {
        commission: "50",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      },
      {
        cpf: "45810281820",
        commission: "50"
      }
    ]
  },
  {
    _id: "qCrXrzCAqk33N8sLD",
    name: "Corte Feminino",
    duration: "30",
    available_professionals: [
      {
        commission: "50",
        cpf: "97976183079"
      },
      {
        commission: "50",
        cpf: "45810821880"
      }
    ]
  },
  {
    _id: "rZWMhr7dHqeMRpwNq",
    name: "Troca",
    duration: "30",
    available_professionals: [
      {
        cpf: "97976183079",
        commission: "100"
      }
    ]
  },
  {
    _id: "vEsRR5f4zaMmMW7CH",
    name: "Tintura",
    duration: null,
    available_professionals: [
      {
        commission: "52.54",
        cpf: "97976183079"
      },
      {
        commission: "100",
        cpf: "45810821880"
      },
      {
        cpf: "82053478837",
        commission: "52"
      }
    ]
  },
  {
    _id: "d4FimDkbjYwWRzXvx",
    name: "Escova",
    duration: null,
    available_professionals: [
      {
        commission: "40",
        cpf: "97976183079"
      }
    ]
  },
  {
    _id: "oamPeuM929dkuqBBB",
    name: "Maquiagem",
    duration: null,
    available_professionals: [
      {
        commission: "40",
        cpf: "97976183079"
      }
    ]
  },
  {
    _id: "YiFz5Mj5fab5StX3Q",
    name: "Unha refresh",
    duration: null,
    available_professionals: [
      {
        commission: "50",
        cpf: "97976183079"
      }
    ]
  }
];

// Use esse mock para os clientes da lapag
export const clientsMocks = [
  {
    _id: "mt5mSb5oukK6Bu3Yh",
    name: "Marcelito"
  },
  {
    _id: "DopLRWKEz4zLpudJ",
    name: "leticia maciel dos santos"
  },
  {
    _id: "acovnuzcU0RHWRQT",
    name: "Adaline Silva Viana"
  },
  {
    _id: "qL3xTjfHxfeg7xdJ",
    name: "Adelir"
  },
  {
    _id: "DqmA4RMg1WOv3QjN",
    name: "adriana  de oliveira guanabarino santos"
  },
  {
    _id: "3TF52e3pK5qMr5Zc",
    name: "adriana almeida mengngoy fellows"
  },
  {
    _id: "bNbsb3kkmrxvGLGt",
    name: "Adriana Alves de Lima"
  },
  {
    _id: "KaauQAMfqIUXlVPU",
    name: "Adriana Azevedo da Conceição"
  },
  {
    _id: "qlKhXB6MLdFGU5Hx",
    name: "Adriana Ferreira Silva"
  },
  {
    _id: "qTPw2ypC64ffWNqW",
    name: "adriana maria duarte "
  },
  {
    _id: "NlL8Avws9pVMulWr",
    name: "Adriana Maria Vasconcelos M. Souto"
  },
  {
    _id: "43E5xJsZxpnrbo38",
    name: "Adriana Pestre Vieira Young Tolomes"
  },
  {
    _id: "PweMYTdNnlQwURFS",
    name: "Adriana Vasconcellos de Farias"
  },
  {
    _id: "vRAZw9AppeginwMk",
    name: "Adriano Blackman"
  },
  {
    _id: "bKi1YtzXMUIZDVPB",
    name: "Agnes Padua da Costa"
  },
  {
    _id: "wFqm0PsqGQEDNWCn",
    name: "Agnes Teixeira Wasem"
  },
  {
    _id: "aTVuF2Vq3TMAPBcN",
    name: "aida de gouvê cirqueira"
  },
  {
    _id: "GANb7Re4XclF2zHj",
    name: "Alan D´Angelo"
  },
  {
    _id: "rwsuSgQNfZlcBmPb",
    name: "alan falcão"
  },
  {
    _id: "xssAGI2qGhG0fpgC",
    name: "Alana Caroline Gamba Maia"
  },
  {
    _id: "npNWuvqcVKaNVZKu",
    name: "Alane Saldanha"
  },
  {
    _id: "to3ABjqbC1J1ZisB",
    name: "Alba Ferreira da Silva"
  },
  {
    _id: "UdqR3Xee8Gf6j2EO",
    name: "Alejandro Gruneisen"
  },
  {
    _id: "YDGQnq8RDfMeo2pi",
    name: "Alessandra Ceccato"
  },
  {
    _id: "aKSs8d9kn0oupXIb",
    name: "alessandra clemente da silva"
  },
  {
    _id: "EeKs6WclMPQ7mijX",
    name: "Alessandra de Oliveira Correa Fernandes"
  },
  {
    _id: "Grj1Hsy03u2INVj1",
    name: "Alessandra Korenchendler"
  },
  {
    _id: "8aH8tyuqbbyb4DR6",
    name: "Alessandro M. de Freitas"
  },
  {
    _id: "0iQvc9eT3wm7nKh1",
    name: "Alessandro Moraes da Costa e Silva"
  },
  {
    _id: "2Otjp4jtgk8fxGo0",
    name: "Alex Rodrigo"
  },
  {
    _id: "pNwqZmXRjVWqyETf",
    name: "Alexandra Beloti Silva "
  },
  {
    _id: "F2PSjpcyKlvh4vGY",
    name: "Alexandra Esteves Velloso"
  },
  {
    _id: "39MNDfXF4Mh4mKCk",
    name: "Alexandra Penna Alves"
  },
  {
    _id: "zcBsfhIWSDuQx5YH",
    name: "Alexandre do Vale Faria"
  },
  {
    _id: "hRnLQXdYseG0zMNr",
    name: "Alexandre Honaiser"
  },
  {
    _id: "ODCDWCsOGTGT8FLG",
    name: "Alexandre Marsillac"
  },
  {
    _id: "9suSSccTRcAtKq3Q",
    name: "Alexandre Mauricio de Freitas Duarte"
  },
  {
    _id: "W8iGXETAlQeIR5KC",
    name: "Alexandre Ramos e Ferreira"
  },
  {
    _id: "jR5BoHguyAh1u6wG",
    name: "Alexandre Rocha Burlá"
  },
  {
    _id: "lAMm3Vae3TVoJrOC",
    name: "Alexandre Rodrigues"
  },
  {
    _id: "QfgXbh4nk5oFV6lm",
    name: "Alice Aragon Ribeiro"
  },
  {
    _id: "k4DPQ3xF3SvaQImE",
    name: "alice regina monnerat vianna de freitas"
  },
  {
    _id: "bnGaWHi2yFXUF5PA",
    name: "aliette maria do vale souza"
  },
  {
    _id: "HL9lDKGbDg9BYa7y",
    name: "Aline Coutinho da Silva"
  },
  {
    _id: "m0GxPtHvDT7f2g2K",
    name: "Aline Fatima de Castro Souza"
  },
  {
    _id: "t1wrA5Oo3ziyr1aa",
    name: "Aline Lopes"
  },
  {
    _id: "2OdVvDqJVrKluxBE",
    name: "Aline Maria Barbosa Rangel"
  },
  {
    _id: "23BwLBEVf41QelNN",
    name: "aline siqueira ferri"
  },
  {
    _id: "8mkeqaMMS7ozehw7",
    name: "Alini Pereira Brito "
  },
  {
    _id: "lC0fjhjZpPSHeNBI",
    name: "Allan Ceccato"
  }
];
