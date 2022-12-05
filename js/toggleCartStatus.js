function toggleCartStatus(){

   const cartWrapper=document.querySelector('.cart-wrapper');
   const cartEmptyBadge=document.querySelector('[data-cart-empty]');
   const order=document.querySelector('#order-form');
   const total=document.querySelector('.cart-total');


    if(cartWrapper.children.length!=0) {
        total.hidden=false;
        cartEmptyBadge.hidden=true;
        order.hidden=false;
        
    }

    else {
        total.hidden=true;
        cartEmptyBadge.hidden=false;
        order.hidden=true;

    };

}