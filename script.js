// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load",function(){
   let form = document.querySelector("form");   
   form.addEventListener('submit', function(event){
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName = document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")

   //Confirm all feilds and input & gives alert if not.
      if(pilotName.value===""||copilotName.value===""||fuelLevel.value===""||cargoMass.value===""){
         alert("All elements Required");
         preventDefauplt()
      }
      if(!isNaN(pilotName.value)){
         alert("Re-enter Pilot Name with Text");
         preventDefault()
      }
      if(!isNaN(copilotName.value)){
         alert("Re-enter Pilot Name with Text");
         preventDefault()
      }
      if(isNaN(fuelLevel.value)){
         alert("Re-enter Fuel level using numerics")
         preventDefault()
      }
      if(isNaN(cargoMass.value)){
         alert("Re-enter Cargo Mass using numerics")
         preventDefault()
      }

      //if input is entered and received the correct type, verify fuel level and cargo mass.
      else{
         document.getElementById("faultyItems").style.visibility = "visible";

         if(fuelLevel.value<10000){
            document.getElementById("launchStatus").innerHTML =  'Shuttle not ready for launch'
            document.getElementById('launchStatus').style.color = "red";
            document.getElementById("fuelStatus").innerHTML = 'Fuel level NOT high enough for launch'
         }
         if(cargoMass.value>10000){
            document.getElementById("launchStatus").innerHTML =  'Shuttle not ready for launch'
            document.getElementById('launchStatus').style.color = "red";
            document.getElementById("cargoStatus").innerHTML = 'Too much Cargo Mass for launch'
         }
         if(fuelLevel.value>10000&&cargoMass.value<10000){
            document.getElementById("launchStatus").innerHTML = 'Shuttle ready for launch';

      // JSON information  https://handlers.education.launchcode.org/static/planets.json
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
         <img src="${json[0].image}">   
         `
            })
          })
         }
      }
      event.preventDefault();      
   });
});