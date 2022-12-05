const cartWrapper=document.querySelector('.cart-wrapper');
toggleCartStatus();
document.addEventListener('click',function(e){
    
    let productInfo;
    if(e.target.hasAttribute('data-cart')){
        
        const card=e.target.closest('.card');

         productInfo={
            id:card.dataset.id,
            imgSrc:card.querySelector('.product-img').getAttribute('src'),
            title:card.querySelector('.item-title').innerText,
            amountInBox:card.querySelector('[data-items-in-box]').innerText,
            counter:card.querySelector('[data-counter]').innerText,
            weight:card.querySelector('.price__weight').innerText,
            currency:card.querySelector('.price__currency').innerText
        }
        let cartItemHTML;
        if(cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)){

            cartItemHTML=cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
            counterElement=cartItemHTML.querySelector('[data-counter]');
            counterElement.innerText=Number(counterElement.innerText)+Number(productInfo.counter);
           
            
        }
        else{
       cartItemHTML=`<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.amountInBox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.currency}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;
        cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);
       
        card.querySelector('[data-counter]').innerText='1';
        
    }
    }
    toggleCartStatus();
    calcCartPrice();
})