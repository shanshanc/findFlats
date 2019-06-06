const fetch = require('node-fetch');

const getData = () => {
  let results = fetch('https://api.nestoria.es/api?action=search_listings&country=es&encoding=json&listing_type=rent&page=1&place_name=Barcelona&pretty=1&number_of_results=1000')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('response not ok');
      }
    })
    .then(data => {
      if (data.response) {
        let output = [];

        // for normalization
        let minPrice = 0;
        let maxPrice = 0;
    
        let minSize = 0;
        let maxSize = 0;
    
        let minRoomNum = 0;
        let maxRoomNum = 0;

        data.response.listings.forEach(listing => {
          output.push(listing);
          let tempPrice = listing.price;
          if (tempPrice > maxPrice) maxPrice = tempPrice;
          if (tempPrice < minPrice) minPrice = tempPrice;
    
          let tempSize = listing.size;
          if (tempSize > maxSize) maxSize = tempSize;
          if (tempSize < minSize) minSize = tempSize;
    
          let tempRoomNum = listing.room_number;
          if (tempRoomNum > maxRoomNum) maxRoomNum = tempRoomNum;
          if (tempRoomNum < minRoomNum) minRoomNum = tempRoomNum;
        });
        
        // find ranges
        const rangePrice = maxPrice - minPrice;
        const rangeSize = maxSize - minSize;
        const ragneRoomNum = maxRoomNum - minRoomNum;

        // calculate scores
        for (let i = 0; i < output.length; i++) {
          const priceScore = (output[i].price - minPrice) / rangePrice;
          const sizeScore = (output[i].size - minSize) / rangeSize;
          const roomNumeScore = (output[i].room_number - minRoomNum) / ragneRoomNum;
          output[i].overallScore = sizeScore + roomNumeScore - priceScore;
          // console.log('price, size, roomNum, overall', output[i].title, priceScore, sizeScore, roomNumeScore, output[i].overallScore);
        }
    
        // sort by overall score and return the top 10
        output.sort((a,b) => b.overallScore - a.overallScore);
        return output.slice(0,10);

      } else {
        console.log('no listing found');
      };
    })
    .catch(err => console.error(err));
  
  return results;
}

module.exports = { myFunc, getData };
