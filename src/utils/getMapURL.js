function urlForMap(map, pixelRatio) {
    if (!map) {
        return '';
    }
    switch (pixelRatio) {
        case 1: return map.x1.url;
        case 2: return map.x2.url;
        case 3: return map.x3.url;
        default: return map.x3.url;
    }
}

module.exports = urlForMap;
