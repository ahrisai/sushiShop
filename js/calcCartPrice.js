function calcCartPrice(){
    const allCartItems=document.querySelectorAll('.cart-item');
    let sum=0;
    let deliveryCost=200;
    allCartItems
    .forEach((val)=>sum+=parseInt(val.querySelector('.price__currency').innerText.match(/\d+/)*parseInt(val.querySelector('[data-counter]').innerText)));
    

    if(sum>=900){
        document.querySelector('.delivery-cost').classList.add('free')
        document.querySelector('.delivery-cost').innerText='Бесплатно';
        deliveryCost=0;
    }
    else {
        document.querySelector('.delivery-cost').classList.remove('free')
        document.querySelector('.delivery-cost').innerText='200 ₽';
    }

    document.querySelector('.total-price').innerText=sum+deliveryCost;
}