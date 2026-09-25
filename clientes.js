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

            agendamento:
                "Agende seu horário",

            agendamentoSubtitulo:
                "Escolha sua unidade e horário",

            localizacao:
                "Encontre uma unidade",

            localizacaoSubtitulo:
                "Veja todas as nossas unidades",

            avaliacao:
                "Avalie no Google",

            avaliacaoSubtitulo:
                "Sua opinião é muito importante"
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

        // BOTÃO PRINCIPAL
        agendamento:
            "https://cashbarber.com.br/barbeariadomroger/inicio",

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

            agendamento:
                "Cardápio Online",

            agendamentoSubtitulo:
                "Confira nosso cardápio",

            localizacao:
                "Nossa localização",

            localizacaoSubtitulo:
                "Veja como chegar",

            avaliacao:
                "Avalie no Google",

            avaliacaoSubtitulo:
                "Sua opinião é muito importante"
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

        // BOTÃO PRINCIPAL
        agendamento:
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
            "Nome do Cliente",

        descricao:
            "Descrição do cliente",

        // TEXTOS DOS BOTÕES
        botoes: {

            agendamento:
                "Agende seu horário",

            agendamentoSubtitulo:
                "Escolha uma opção",

            localizacao:
                "Nossa localização",

            localizacaoSubtitulo:
                "Veja onde estamos",

            avaliacao:
                "Avalie no Google",

            avaliacaoSubtitulo:
                "Sua opinião é muito importante"
        },

        // IDENTIDADE VISUAL
        //
        // Coloque os arquivos nestas pastas:
        //
        // assets/logos/
        // assets/backgrounds/

        logo:
            "assets/logos/logo-cliente.png",

        fundo:
            "assets/backgrounds/fundo-cliente.png",

        // REDES SOCIAIS
        whatsapp:
            "https://wa.me/5500000000000",

        instagram:
            "https://www.instagram.com/cliente/",

        // BOTÃO PRINCIPAL
        //
        // Pode ser:
        // - agendamento
        // - cardápio
        // - reservas
        // - site
        // - qualquer outro link

        agendamento:
            "https://link-do-cliente.com",

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
                    "Endereço da unidade",

                maps:
                    "https://www.google.com/maps",

                google:
                    "https://www.google.com/"
            }

        ]

    }

,
    "teste-cliente": {
    "nome": "",
    "descricao": "",
    "botoes": {
        "agendamento": "Agende seu horário",
        "agendamentoSubtitulo": "Escolha uma opção",
        "localizacao": "Encontre uma unidade",
        "localizacaoSubtitulo": "Veja onde estamos",
        "avaliacao": "Avalie no Google",
        "avaliacaoSubtitulo": "Sua opinião é muito importante"
    },
    "logo": "assets/logos/",
    "fundo": "assets/backgrounds/",
    "whatsapp": "",
    "instagram": "",
    "agendamento": "",
    "unidades": [
        {
            "nome": "",
            "endereco": "",
            "maps": "",
            "google": ""
        }
    ]
}
};
