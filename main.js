/* const axios = require('axios/dist/node/axios.cjs'); */





  
  
  /*  const API_DEALS = "https://www.cheapshark.com/api/1.0/deals?storeID=1";
    
    async function getDeals (URL){
        const res = await fetch(URL, {
            method: 'GET',
            redirect: 'follow'
        })
        const data = await res.json();

        data.forEach(game => {
            const dealContainer = document.createElement('div');
            const gameLink = document.createElement('a');
            const img = document.createElement('img');
            const detContainer = document.createElement('div');
            const title = document.createElement('h3');
            const prContainer = document.createElement('div');
            const dealPrice = document.createElement('p');
            const price = document.createElement('p');
            const saving = document.createElement('p');
            const steamRating = document.createElement('p');
        
            dealContainer.classList.add('deal-container');
            gameLink.classList.add('game-link');
            gameLink.setAttribute('href', 'https://store.steampowered.com/app/' + game.steamAppID);
            gameLink.setAttribute('target', "_blank")
            img.setAttribute('src', game.thumb);
            img.classList.add('game-image');
            detContainer.classList.add('details-container')
            title.classList.add('game-title');
            title.innerHTML = game.title;
            prContainer.classList.add('prices-container');
            dealPrice.classList.add('deal-price')
            dealPrice.innerHTML = '$ ' + game.salePrice;
            price.classList.add('original-price');
            price.innerHTML =  '$ ' + game.normalPrice;
            saving.classList.add('saving');
            saving.innerHTML = '-' + Math.trunc(game.savings) + '%';
            steamRating.classList.add('steam-rating');
            steamRating.innerHTML = 'Steam rating: ' + game.steamRatingText;
          
            document.body.appendChild(dealContainer);
            dealContainer.appendChild(gameLink);
            gameLink.appendChild(img);
            dealContainer.appendChild(detContainer);
            detContainer.appendChild(title);
            detContainer.appendChild(prContainer);
            detContainer.appendChild(steamRating);
            prContainer.appendChild(dealPrice);
            prContainer.appendChild(price);
            prContainer.appendChild(saving);
        
        
        
        
        
        
        
        }); 

        
        
        
    }

    getDeals(API_DEALS); */

    
   
   

   const api = axios.create({
    method: 'get',
    maxBodyLength: Infinity,
    baseURL: 'https://www.cheapshark.com/api/1.0',
    headers: { }
   })
    
   async function getDeals(storeID){
    const res = await api('/deals?storeID=' + storeID);
    const sales = res.data;
    
    console.log(sales)
     
    sales.forEach(game => {
        const dealContainer = document.createElement('div');
        const gameLink = document.createElement('a');
        const img = document.createElement('img');
        const detContainer = document.createElement('div');
        const title = document.createElement('h3');
        const prContainer = document.createElement('div');
        const dealPrice = document.createElement('p');
        const price = document.createElement('p');
        const saving = document.createElement('p');
        const steamRating = document.createElement('p');

        
        
    
        dealContainer.classList.add('deal-container');
        gameLink.classList.add('game-link');
        
        gameLink.setAttribute('target', "_blank")
        img.setAttribute('src', game.thumb);
        img.classList.add('game-image');
        detContainer.classList.add('details-container')
        title.classList.add('game-title');
        title.innerHTML = game.title;
        prContainer.classList.add('prices-container');
        dealPrice.classList.add('deal-price')
        dealPrice.innerHTML = '$ ' + game.salePrice;
        price.classList.add('original-price');
        price.innerHTML =  '$ ' + game.normalPrice;
        saving.classList.add('saving');
        saving.innerHTML = '-' + Math.trunc(game.savings) + '%';
        steamRating.classList.add('steam-rating');
        steamRating.innerHTML = 'Steam rating: ' + game.steamRatingText;
        gameLink.setAttribute('href', 'https://cheapshark.com/redirect?dealID=' + game.dealID )
      
        document.body.appendChild(dealContainer);
        dealContainer.appendChild(gameLink);
        gameLink.appendChild(img);
        dealContainer.appendChild(detContainer);
        detContainer.appendChild(title);
        detContainer.appendChild(prContainer);
        detContainer.appendChild(steamRating);
        prContainer.appendChild(dealPrice);
        prContainer.appendChild(price);
        prContainer.appendChild(saving);
    
    
    
    
    
    
    
    });
    

    
   }


   
    
   


   
   
    
    