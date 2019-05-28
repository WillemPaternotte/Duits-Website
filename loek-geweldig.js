/**
 * Stopt een artikel van JSON in je website owowowowowo
 * @param  {object} JSON Artikel object
 */
function insertArticle(article) {
    var html = `<div class="article" style="break-inside: avoid-column; -webkit-column-break-inside: avoid;">`
    for (key in article) {
        html += `<${key} class="articleElement">${article[key]}</${key}>`
    }
    html += `</div>`
    $("#articleContainer").append(html)
}

/**
 * Artikelen toevoegen vanaf lokaal bestand
 * @param  {string} filename
 */
function insertArticleFromFile(file) {
    var data = jsonGet(file);
    for (let i = 0; i < data.length; i++) {
        insertArticle(data[i])
    }
}

/**
 * JSON Data van lokaal bestand krijgen
 * @param  {string} path
 */
function jsonGet(path) {
    var request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);

    var json;
    try {
        json = JSON.parse(request.responseText)
    } catch (error) {
        console.error(error)
    }
    if (json) {
        return json;
    }
};