$(window).on('load', () => {
    // Hier doe je functies die runnen als de website geladen is (geen functie declaraties)

    insertArticle({
        "h1": "gert",
        "h2": "wat heeft hij nu weer gedaan?!",
        "p": "omg ik kan het niet geloven"
    })

    insertArticleFromFile('artikelen.json')
})