const nav= document.querySelector('nav');
const header =document.querySelector('header');

const options={

};
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            nav.classList.remove('changecolor');
        }
        else{
            nav.classList.add('changecolor');
        }
    })
},options)

observer.observe(header)
