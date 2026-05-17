const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cota de Volta",
    "description": "Especialistas em análise de extrato de consórcio. Identificamos cobranças indevidas, descontos abusivos e valores a recuperar. Atendimento Online em todo o Brasil.",
    "url": "https://cotadevolta.netlify.app/",
    "telephone": "+55-11-99161-4791",
    "areaServed": "BR",
    "priceRange": "R$49,90",
    "serviceType": "Análise de Extrato de Consórcio",
    "sameAs": [
      "https://www.instagram.com/cotadevolta/",
      "https://www.facebook.com/profile.php?id=61588958471957"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Análise de Consórcio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Análise Completa de Extrato de Consórcio",
            "description": "Auditoria técnica detalhada de cada lançamento do extrato, identificando cobranças indevidas e valores a recuperar."
          },
          "price": "49.90",
          "priceCurrency": "BRL"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mariana A." },
        "reviewBody": "Recuperei um valor que considerava perdido há anos. Atendimento técnico, claro e sem promessas vazias.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Roberto L." },
        "reviewBody": "Profissionalismo do início ao fim. A análise do extrato foi precisa e o processo, transparente.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Camila S." },
        "reviewBody": "Confiança é a palavra. Explicaram cada etapa e entregaram o que prometeram, com seriedade.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "É possível recuperar valores de um consórcio cancelado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Mesmo após o cancelamento, valores podem ser restituídos, como parcelas pagas, taxas e correções aplicadas indevidamente. A Cota de Volta analisa o extrato e informa exatamente o que há a receber."
        }
      },
      {
        "@type": "Question",
        "name": "É possível analisar um consórcio ainda ativo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Também realizamos a análise de consórcios ativos. Identificamos cobranças irregulares e indicamos o melhor caminho para preservar seus direitos."
        }
      },
      {
        "@type": "Question",
        "name": "Como é feita a análise do extrato de consórcio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa equipe realiza uma auditoria técnica detalhada do extrato fornecido pela administradora, verificando cada lançamento, taxa e correção sob a ótica financeira e jurídica."
        }
      },
      {
        "@type": "Question",
        "name": "É sempre necessária ação judicial para recuperar valores de consórcio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Sempre que possível, buscamos solução administrativa. A via judicial é adotada apenas quando representa o caminho mais eficaz para o resultado desejado."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva a análise do extrato de consórcio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A análise inicial é feita em poucos dias. A duração da recuperação varia conforme a complexidade do caso e o caminho adotado, seja administrativo ou judicial."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa a análise do extrato de consórcio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Cota de Volta realiza a análise completa do extrato do seu consórcio por R$49,90. O serviço inclui auditoria detalhada, identificação de valores a recuperar e orientação sobre os próximos passos."
        }
      }
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Análise de Extrato de Consórcio",
    "provider": {
      "@type": "Organization",
      "name": "Cota de Volta"
    },
    "description": "Serviço de auditoria técnica de extratos de consórcio. Identificamos cobranças indevidas, descontos abusivos e valores passíveis de recuperação para consórcios cancelados ou ativos.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "price": "49.90",
      "priceCurrency": "BRL",
      "description": "Análise completa do extrato de consórcio com identificação de valores a recuperar."
    }
  }
];

schemas.forEach(schema => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
});
