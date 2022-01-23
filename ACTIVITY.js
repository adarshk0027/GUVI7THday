//REST COUNTRY API
//COUNTRY NAME OF ASIA CONTINENT

let req= new XMLHttpRequest();
let url="https://restcountries.com/v3.1/all";
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let result=JSON.parse(req.response)
    let continents=result.filter((country)=> country.continents=="Asia").map(fcountry=> fcountry.name["common"])
    console.log(continents.join(" || "));
}

//REST COUNTRY API
//COUNTRY NAME OF POPULATION LESS THAN 2 LAKH

let req= new XMLHttpRequest();
let url="https://restcountries.com/v3.1/all";
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let result=JSON.parse(req.response)
    let population=result.filter(country=>country.population<=200000).map(fCountry=> fCountry.name["common"])
    console.log(population.join( " || " ));
}

//REST COUNTRY API
//Print the following details name, capital, flag using forEach function

let req= new XMLHttpRequest();
let url="https://restcountries.com/v3.1/all";
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let result=JSON.parse(req.response)
    result.forEach(element => {
        let name=element.name["common"];
        let capital=element.capital;
        let flag=element.flag;
        console.log(`NAME - ${name}  CAPITAL - ${capital}  FLAG - ${flag}`);
    });
}


//TOTAL POPULATION USING REDUCE

//REST COUNTRY API

let req= new XMLHttpRequest();
let url="https://restcountries.com/v3.1/all";
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let result=JSON.parse(req.response)
    let total=result.reduce((initial,item)=>{
        let population=item.population;
        return initial+population
    },0) 
   console.log(total); 
}

//COUNTRY NAME HAVE CURRENCY UNITED STATES DOLARS



let req= new XMLHttpRequest();
let url="https://restcountries.com/v3.1/all";
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
let msg="Not Get data"
req.onload=function(){
    let result=JSON.parse(req.response)
    result.forEach(element => {
        try{
            let currency=element.currencies
        if(currency.hasOwnProperty("USD")) console.log(element.name["common"]);
        }
        catch(e){
           console.log(msg)
        }
    });
}


