document.addEventListener('click',function(e){
    if(e.target.dataset.action==='plus'){
        const counterWrapper=e.target.closest('.counter-wrapper');
        const counter=counterWrapper.querySelector('[data-counter]');

        counter.innerText=++counter.innerText;
    }

    if(e.target.dataset.action==='minus'){

        const counterWrapper=e.target.closest('.counter-wrapper');
        const counter=counterWrapper.querySelector('[data-counter]');

        if(e.target.closest('.cart-item')){
            
            if(counter.innerText==1){
            const cartItem=e.target.closest('.cart-item');
            cartItem.remove();
            toggleCartStatus()
            }
        }
        
        if(counter.innerText>1){
        counter.innerText=--counter.innerText;
        }
        
    }
    if(e.target.hasAttribute('data-action')&&e.target.closest('.cart-item')) calcCartPrice();
})