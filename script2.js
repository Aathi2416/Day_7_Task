//d.Print the total population of countries using reduce function

var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v2/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);

}


//e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }



    