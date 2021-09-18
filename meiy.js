// key:6348d1f9-edc7-4e09-b4f6-2bdc6d6d8e8d
// api-1:curl -XPOST -H "Content-type: application/json" -d '{ "key": "value" }' 'https://getpantry.cloud/apiv1/pantry/9d47b070-69f7-4c58-a0ad-3b67d2fa8e17/basket/testBasket' 
// api-2:https://getpantry.cloud/apiv1/pantry/YOUR_PANTRY_ID

var data = {
    "name":"meiy",
    "mobile":"9876543210"
    
  }
  fetch(`https://getpantry.cloud/apiv1/pantry/6348d1f9-edc7-4e09-b4f6-2bdc6d6d8e8d/basket/sree`, {
     method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; Charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json=> {
      let pantry=document.createElement("div")
      pantry.setAttribute("class","pantry")
      pantry.innerHTML=``
  document.body.append(pantry)
})
    .catch(error => console.log(error))