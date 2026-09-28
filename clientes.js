const clientes = {

    // ============================================================
    // CLIENTE: DOM ROGER
    // ============================================================

    "dom-roger": {

        // INFORMAÇÕES PRINCIPAIS
        nome: "Barbearia Dom Roger",

        descricao:
            "Corte • Barba • Estilo.<br>🥇 A 1ª barbearia por assinatura de Cotia",

        // TEXTOS DOS BOTÕES
       botoes: {
            botao1: "Agende seu horário",
            botao1Tipo: "agendamento",
            botao1Subtitulo: "Escolha sua unidade e horário",
        
            localizacao: "Encontre uma unidade",
            localizacaoSubtitulo: "Veja todas as nossas unidades",
        
            avaliacao: "Avalie no Google",
            avaliacaoSubtitulo: "Sua opinião é muito importante"
        },
        // IDENTIDADE VISUAL
        logo:
            "assets/logos/logo-dom-roger.png",

        fundo:
            "assets/backgrounds/fundo-barbearia.png",

        // REDES SOCIAIS
        whatsapp:
            "https://wa.me/5511988734659?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barbearia%20Dom%20Roger%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.",

        instagram:
            "https://www.instagram.com/barbeariadom.roger/",

        // BOTÕES VARIÁVEIS
        botao1link:
            "https://cashbarber.com.br/barbeariadomroger/inicio/agendamento",

        // UNIDADES
        unidades: [

            {
                nome:
                    "Jardim da Glória",

                endereco:
                    "Av. João Paulo Ablas, 45 - Lj 26 - Jardim da Gloria, Cotia - SP",

                maps:
                    "https://www.google.com/maps/dir/?api=1&destination=Av.+João+Paulo+Ablas,+45+-+Lj+26,+Jardim+da+Gloria,+Cotia+-+SP,+06711-250",

                google:
                    "https://search.google.com/local/writereview?placeid=ChIJHXMq4pmrz5QRXBABiIJ_vms"
            },

            {
                nome:
                    "Matriz",

                endereco:
                    "Av. Eid Mansur, 803 - Parque Sao George, Cotia - SP",

                maps:
                    "https://www.google.com/maps/dir/?api=1&destination=Av.+Eid+Mansur,+803,+Parque+Sao+George,+Cotia+-+SP",

                google:
                    "https://search.google.com/local/writereview?placeid=ChIJB-MjKwCrz5QR3dY_ddG2Nng"
            },

            {
                nome:
                    "Vianna Village",

                endereco:
                    "R. Mesopotâmia, 109 - Sl 10 - Jardim Passargada I, Cotia - SP",

                maps:
                    "https://www.google.com/maps/dir/?api=1&destination=Rua+Mesopotamia,+109+-+Sl+10,+Jardim+Passargada+I,+Cotia+-+SP",

                google:
                    "https://search.google.com/local/writereview?placeid=ChIJ-wvg1QWrz5QRJvcvKOGjQck"
            },

            {
                nome:
                    "Capuava",

                endereco:
                    "Estr. do Capuava, 4421 - Paisagem Renoir, Cotia - SP",

                maps:
                    "https://www.google.com/maps/dir/?api=1&destination=Estrada+do+Capuava,+4421+-+Paisagem+Renoir,+Cotia+-+SP",

                google:
                    "https://search.google.com/local/writereview?placeid=ChIJH8PqU9Crz5QReQl_Gn1aRiM"
            }

        ]

    },


    // ============================================================
    // CLIENTE: VILA AMÉRICO
    // ============================================================

    "vila-americo": {

        // INFORMAÇÕES PRINCIPAIS
        nome:
            "Vila Américo Bar e Restaurante",

        descricao:
            "Bar e Restaurante",

        // TEXTOS DOS BOTÕES
        botoes: {
            botao1: "Cardápio Online",
            botao1Tipo: "cardapio",
            botao1Subtitulo: "Confira nosso cardápio",
        
            localizacao: "Nossa localização",
            localizacaoSubtitulo: "Veja como chegar",
        
            avaliacao: "Avalie no Google",
            avaliacaoSubtitulo: "Sua opinião é muito importante"
        },

        // IDENTIDADE VISUAL
        logo:
            "assets/logos/logo-vila-americo.png",

        fundo:
            "assets/backgrounds/fundo-vila-americo.png",

        // REDES SOCIAIS
        whatsapp:
            "https://wa.me/551151821830",

        instagram:
            "https://www.instagram.com/vila_americo/",

        // BOTÕES
        botao1link:
            "https://www.canva.com/design/DAHMM-6Yx4M/qVRgqQWGN9NyCrSsq2fWiw/view?utm_content=DAHMM-6Yx4M&utm_campaign=designshare&utm_medium=link&utm_source=viewer&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf2uCPIAotyMXgPpyx62jbODmeRJ9MhoeHF4VRqoJxH2ji6vHtMolqvyi7YXQ_aem_A4zcxwz53VmDHj1B3CpD-w",

        // UNIDADES
        unidades: [

            {
                nome:
                    "Vila Américo",

                endereco:
                    "R. Américo Brasiliense, 1831 - Chácara Santo Antônio (Zona Sul), São Paulo - SP",

                maps:
                    "https://www.google.com/maps/dir/?api=1&destination=R.+Américo+Brasiliense,+1831,+Chácara+Santo+Antônio,+São+Paulo+-+SP",

                google:
                    "https://search.google.com/local/writereview?placeid=ChIJl3hzGHRRzpQRbwN_W_U7zF4"
            }

        ]

    },


    // ============================================================
    // MODELO PARA NOVOS CLIENTES
    // ============================================================
    //
    // Para criar um novo cliente:
    //
    // 1. Copie o bloco abaixo
    // 2. Cole antes do último "};"
    // 3. Troque "novo-cliente" pelo identificador
    // 4. Preencha os campos
    //
    // A página ficará:
    //
    // https://taply-6f2.pages.dev/?cliente=novo-cliente
    //
    // ============================================================

    "modelo": {

        // INFORMAÇÕES PRINCIPAIS
        nome:
            "Taply",

        descricao:
            "Sua presença digital, simples, profissional e personalizada",

        // TEXTOS DOS BOTÕES
       botoes: {
            botao1: "Seu link",
            botao1Tipo: "link",
            botao1Subtitulo: "Seu link personalizável aqui",
        
            localizacao: "Nossa localização",
            localizacaoSubtitulo: "Veja como chegar",
        
            avaliacao: "Avalie no Google",
            avaliacaoSubtitulo: "Sua opinião é muito importante"
        },

        // IDENTIDADE VISUAL
        //
        // Coloque os arquivos nestas pastas:
        //
        // assets/logos/
        // assets/backgrounds/

        logo:
            "",

        fundo:
            "",

        // REDES SOCIAIS
        whatsapp:
            "https://wa.me/5511959874525",

        instagram:
            "https://www.instagram.com",

        // BOTÃO PRINCIPAL
        //
        // Pode ser:
        // - agendamento
        // - cardápio
        // - reservas
        // - site
        // - qualquer outro link

        botao1link:
            "h",

        // UNIDADES
        //
        // Se tiver apenas 1 unidade:
        // localização e avaliação abrem diretamente.
        //
        // Se tiver 2 ou mais:
        // aparece o popup para escolher a unidade.

        unidades: [

            {
                nome:
                    "Unidade 1",
                endereco:
                    "Endereço da unidade 1",
                maps:
                    "https://www.google.com/maps",
                google:
                    "https://www.google.com/"
            },

             {
                nome:
                    "Unidade 2",
                endereco:
                    "Endereço da unidade 2",
                maps:
                    "https://www.google.com/maps",
                google:
                    "https://www.google.com/"
            }

        ]

    }

,
    "teste-teste": {
    "nome": "tyeste",
    "descricao": "teste",
    "botoes": {
        "botao1": "faça seu pedido",
        "botao1Tipo": "personalizado",
        "botao1Subtitulo": "peça pelo whatsapp",
        "botao1Icone": "whatsapp",
        "localizacao": "Nossa localização",
        "localizacaoSubtitulo": "Veja como chegar",
        "avaliacao": "Avalie no Google",
        "avaliacaoSubtitulo": "Sua opinião é muito importante"
    },
    "logo": "assets/logos/",
    "fundo": "assets/backgrounds/",
    "whatsapp": "",
    "instagram": "",
    "botao1Link": "google.com.br",
    "unidades": [
        {
            "nome": "",
            "endereco": "",
            "maps": "",
            "google": "",
            "latitude": "",
            "longitude": ""
        }
    ]
}
};
