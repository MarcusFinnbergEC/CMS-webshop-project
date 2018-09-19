function getSortUrl(sortAndFilter) {
    console.log("setURL körs");
    let newURL = [];
    if (sortAndFilter.length > 1) {
        sortAndFilter.map((path, i) => {
            if (i === 0) {
                return newURL.push(path.replace("&", "?"));
            }
            else {
                return newURL.push(path.replace("?", "&"));
            }
        })

    }
    else {
        sortAndFilter.map((path, i) => {
            if (i === 0) {
                return newURL.push(path.replace("&", "?"));
            }
            else {
                return newURL.push(path.replace("?", "&"));
            }
        })
    }
    return newURL.join('');
}

module.exports.getSortUrl = getSortUrl;