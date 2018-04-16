
var obj;
 const getweather=(cityname)=> {
    var url='https://openweathermap.org/find?q=${cityname}';    //https://www.metaweather.com/api/
    fetch(url) 
          .then(response => 
               response.json())
          .then(json=>  obj=json)
              .then(() =>
                console.log(obj)
              )
              .catch(error => console.log('error: ',error))

              return{
                  type:'GET_WEATHER',
                  payload:obj
              }
 }
  

export {getweather};



