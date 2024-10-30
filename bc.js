let a=document.getElementById('bill')
let b=document.getElementById('given')
let c=document.getElementById('btn')
let f=document.getElementById('p')
c.addEventListener('click',function(){
 
   let d=b.value-a.value
    f.append(d)
    f.innerHTML=`Balance Amount ${d}`
})


