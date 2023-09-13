let quote=document.getElementById('quote');
let authorName=document.getElementById('author');
let button=document.getElementById('generate');
const fetchData=async function(){
    const response=await fetch('https://type.fit/api/quotes',{
        method:'GET'
    })
    const array=await response.json()
    button.addEventListener('click',function(){
        let x = Math.floor((Math.random() * array.length) + 1);
        //console.log(x);
        
        quote.textContent=`${array[x].text}`
        // authorName.textContent=`${array[x].author}`
        console.log(array[x].author);
        authorName.textContent=array[x].author;
    })
}
fetchData()