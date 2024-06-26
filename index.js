const btn=document.querySelector('.s');
const resultt=document.querySelector('.result')
const synonym=document.querySelector('.syn')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const val=(document.querySelector('.l').value)  
    async function zohaib()
{
    let url ='https://api.dictionaryapi.dev/api/v2/entries/en/'
    let word =url + val
    // alert(word)
    const response =await fetch(word)
    const result=await response.json()
    
        console.log(result);
        const meaninggg= result[0].meanings[0].definitions[0].definition;
        const p=document.createElement('div');
        p.innerHTML=`${meaninggg}` 
        const sy= result[0].meanings[0].synonyms;
        const k=document.createElement('div');
        k.innerHTML=`${sy}` 
        synonym.appendChild(k)
        resultt.appendChild(p)

}

console.log(val);
zohaib();
})

