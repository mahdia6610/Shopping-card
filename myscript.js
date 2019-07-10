var totalPrice=0;

var clicBoutons=document.querySelectorAll(' button');

clicBoutons.forEach(x=>x.addEventListener('click',function calcul(event){
    var bouton=event.currentTarget
    if  (bouton.name=='add-button')
    {bouton.nextElementSibling.textContent=parseInt(bouton.nextElementSibling.textContent)+1
    }

    if (bouton.name=='decrease-button')
    {if (parseInt(bouton.previousElementSibling.textContent)==0){
        bouton.previousElementSibling.textContent=0}
        else
        {bouton.previousElementSibling.textContent=parseInt(bouton.previousElementSibling.textContent)-1
    }}
if (bouton.classList.contains('delete-btn')){
    if(bouton.parentNode.querySelector('.love-btn').classList.contains('fas'))
    {alert('dislike item if you want to delete it')}
    else
    {event.currentTarget.parentNode.parentElement.remove()
console.log(event.currentTarget.parentElement.parentElement.remove())}}

if(bouton.name=='love')
bouton.getElementsByTagName('i')[0].classList.toggle('fas')

document.querySelectorAll('.ul-item').forEach(x=>totalPrice+=parseInt(x.querySelector('.amount-item').textContent)*parseInt(x.querySelector('.number-size').textContent))
console.log(totalPrice)
document.getElementById('total-number').innerText=totalPrice.toString()
totalPrice=0

}))



/*function calcul(event){
    /*totalPrice = document.querySelectorAll('.amount-item').forEach()
    if(event.target.classList.contains('add-button')){
        event.target.nextSibling.value=(parseInt(event.target.nextSibling.textContent)+1).toString()
        
    }
    if(event.target.classList.includes('fa-minus')){
        event.target.previousSibling.textContent=(parseInt(event.target.previousSibling.textContent)-1).toString()
    }

}*/