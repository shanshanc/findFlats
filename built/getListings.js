var fetch = require('node-fetch');
var getData = function () {
    var results = fetch('https://api.nestoria.es/api?action=search_listings&country=es&encoding=json&listing_type=rent&page=1&place_name=Barcelona&pretty=1&number_of_results=1000')
        .then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
            console.log('response not ok');
        }
    })
        .then(function (data) {
        if (data.response) {
            var output_1 = [];
            // for normalization
            var minPrice_1 = 0;
            var maxPrice_1 = 0;
            var minSize_1 = 0;
            var maxSize_1 = 0;
            var minRoomNum_1 = 0;
            var maxRoomNum_1 = 0;
            data.response.listings.forEach(function (listing) {
                output_1.push(listing);
                var tempPrice = listing.price;
                if (tempPrice > maxPrice_1)
                    maxPrice_1 = tempPrice;
                if (tempPrice < minPrice_1)
                    minPrice_1 = tempPrice;
                var tempSize = listing.size;
                if (tempSize > maxSize_1)
                    maxSize_1 = tempSize;
                if (tempSize < minSize_1)
                    minSize_1 = tempSize;
                var tempRoomNum = listing.room_number;
                if (tempRoomNum > maxRoomNum_1)
                    maxRoomNum_1 = tempRoomNum;
                if (tempRoomNum < minRoomNum_1)
                    minRoomNum_1 = tempRoomNum;
            });
            // find ranges
            var rangePrice = maxPrice_1 - minPrice_1;
            var rangeSize = maxSize_1 - minSize_1;
            var ragneRoomNum = maxRoomNum_1 - minRoomNum_1;
            // calculate scores
            for (var i = 0; i < output_1.length; i++) {
                var priceScore = (output_1[i].price - minPrice_1) / rangePrice;
                var sizeScore = (output_1[i].size - minSize_1) / rangeSize;
                var roomNumeScore = (output_1[i].room_number - minRoomNum_1) / ragneRoomNum;
                output_1[i].overallScore = sizeScore + roomNumeScore - priceScore;
                // console.log('price, size, roomNum, overall', output[i].title, priceScore, sizeScore, roomNumeScore, output[i].overallScore);
            }
            // sort by overall score and return the top 10
            output_1.sort(function (a, b) { return b.overallScore - a.overallScore; });
            return output_1.slice(0, 10);
        }
        else {
            console.log('no listing found');
        }
        ;
    })
        .catch(function (err) { return console.error(err); });
    return results;
};
module.exports = { myFunc: myFunc, getData: getData };
