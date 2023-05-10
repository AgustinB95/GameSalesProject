

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
    
    if(storeID == '1'){
    steamElements(sales);
    steamHeader();
    }
    else if (storeID == '11'){
        getElements(sales);
        humbleHeader();
    }
    else if (storeID == '8'){
        getElements(sales);
        originHeader();
    }
    
    hideBtns();

    
}


function steamElements(game){
    game.forEach(game => {

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
        

        
        
        gameLink.classList.add('game-link');
        
        dealContainer.classList.add('deal-container')
        
        gameLink.setAttribute('target', "_blank")
        img.setAttribute('src', game.thumb);
        img.classList.add('game-image');
        detContainer.classList.add('details-container')
        title.classList.add('game-title--steam');
        title.innerHTML = game.title;
        prContainer.classList.add('prices-container--steam');
        dealPrice.classList.add('deal-price')
        dealPrice.innerHTML = '$ ' + game.salePrice;
        price.classList.add('original-price');
        price.innerHTML =  '$ ' + game.normalPrice;
        saving.classList.add('saving');
        saving.innerHTML = '-' + Math.trunc(game.savings) + '%';
        
        gameLink.setAttribute('href', 'https://cheapshark.com/redirect?dealID=' + game.dealID )

        
        steamRating.classList.add('steam-rating');
        steamRating.innerHTML = 'Steam rating: ' + game.steamRatingText;
        
        
      
        document.body.appendChild(dealContainer);
        dealContainer.appendChild(gameLink)
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

function getElements(game){
    game.forEach(game => {

        const dealContainer = document.createElement('div');
        
        const gameLink = document.createElement('a');
        const img = document.createElement('img');
        const detContainer = document.createElement('div');
        const title = document.createElement('h3');
        const prContainer = document.createElement('div');
        const dealPrice = document.createElement('p');
        const price = document.createElement('p');
        const saving = document.createElement('p');
        
        
        
        

        
        
        gameLink.classList.add('game-link');
        
        dealContainer.classList.add('deal-container')
        
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
        
        gameLink.setAttribute('href', 'https://cheapshark.com/redirect?dealID=' + game.dealID )

        document.body.appendChild(dealContainer);
        dealContainer.appendChild(gameLink)
        gameLink.appendChild(img);
        dealContainer.appendChild(detContainer);
        
        detContainer.appendChild(title);
        detContainer.appendChild(prContainer);
        
        prContainer.appendChild(dealPrice);
        prContainer.appendChild(price);
        prContainer.appendChild(saving);
        
        
});

}

function hideBtns(){
    const steamBtn = document.getElementById('steamBtn');
    const humbleBtn = document.getElementById('humbleBtn');
    const origBtn = document.getElementById('originBtn');
    const btnCont = document.querySelector('.btn-container');

    steamBtn.classList.add('inactive');
    humbleBtn.classList.add('inactive');
    origBtn.classList.add('inactive');
    btnCont.classList.add('inactive');

    
} 

function steamHeader(){
    const header = document.getElementById('header');
    const headerImg = document.getElementById('steam-header');
    header.classList.remove('inactive');
    headerImg.classList.remove('inactive');
}
 
function humbleHeader(){
    const header = document.getElementById('header');
    const headerImg = document.getElementById('humble-header');
    header.classList.remove('inactive');
    headerImg.classList.remove('inactive');
}
 
function originHeader(){
    const header = document.getElementById('header');
    const headerImg = document.getElementById('origin-header');
    header.classList.remove('inactive');
    headerImg.classList.remove('inactive');
}
    