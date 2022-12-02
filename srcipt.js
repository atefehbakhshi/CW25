
const counntries = document.getElementById("countries");
const search = document.getElementById("search-box");
const container2=document.getElementById("container2");
const loadData = async (country) => {

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const searchcountrie = await res.json();
    counntries.innerHTML = "";
    container2.innerHTML=""
    searchcountrie.forEach((item) => {
    
      const html = `
              <div class="country" id="${item.ccn3}">
              <img src="${item.flags.png}" alt="" class="imag">
              <p>${item.name.official} </p>
              </div>
              `;
      counntries.insertAdjacentHTML("beforeend", html);
    });

   
  } catch (e) {
    console.log(e);
  }
};
// loadData("iran")

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    loadData(e.target.value);
  }
});

async function loadConunties() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const countryInformation = await res.json();
    // console.log(countryInformation[1]);
    
    countryInformation.forEach((item) => {
      // console.log(item.name.official);
      const html = `
        <div class="country" id="${item.ccn3}">
        <img src="${item.flags.png}" alt="" class="imag">
        <p>${item.name.official} </p>
        </div>
        `;
      counntries.insertAdjacentHTML("beforeend", html);
    });
  } catch (e) {
    console.log(e);
  }
}
loadConunties();

counntries.addEventListener("click", (e)=>{
const ccn = e.target.closest("div").id;
// result (ccn)
window.location.href = "details.html?ccn="+ccn;
})


