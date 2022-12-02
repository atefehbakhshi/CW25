

const container2=document.getElementById("container2");
const countryId=location.search.split("ccn=")[1];
async function result (ccn){

    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${ccn}`);
        const [searchcountrie] = await res.json();
       
        console.log(searchcountrie);
       const neighbours=searchcountrie.borders
         let borders=""
         neighbours.forEach((item)=>{
            borders+=` <span> ${item}- </span>`
         })
          const html = `
          <img src="${searchcountrie.flags.png}" alt="ContryFlag">
          <div class="information">
              <p>Name:${searchcountrie.name.official} </p>
              <p>Region:${searchcountrie.region}</p>
              <p>Population: ${+(searchcountrie.population)/1000000} M </p>
              <p>Language: ${searchcountrie.languages[Object.keys(searchcountrie.languages)[0]]
              }</p>
             <p>neighbours: ${borders}  </p>

             
          </div>
                  `;
                  container2.insertAdjacentHTML("beforeend", html);
        
       ;
    
       
      } catch (e) {
        console.log(e);
      }}
      result(countryId)