fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios")
 .then(function(responde) {
    return responde.json();
 })
 .then(function(json) {

    console.log(json);
    return json;
 })
 .catch(function(error){
    console.log(error)
 });