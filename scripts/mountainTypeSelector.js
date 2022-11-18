import { mountainsArray } from "./mountainData.js";

window.onload = function () {

    let mountMenu = document.getElementById('menu');

    mountMenu.onclick = menuList;
    mountMenu.onchange = displayMountain;

    function menuList() {

        for (let i = 0; i < mountainsArray.length; i++) {
            let mountainOption = new Option(mountainsArray[i].name);
            mountMenu.appendChild(mountainOption);
        }

    }

    async function getSunsetForMountain(mount) {
        let response = await fetch(
            `https://api.sunrise-sunset.org/json?lat=${mount.coords.lat}&lng=${mount.coords.lng}&date=today`);
        let data = await response.json();
        return data;
    }


    function displayMountain() {
        let mountainDisplay = document.getElementById('mountainDisplay');
        let mountHeader = document.getElementById('mountHeader');
        let optionSelected = mountMenu.options[mountMenu.selectedIndex].text;

        let imageElement = document.getElementById('imageElement');


        while (mountainDisplay.firstChild) {
            mountainDisplay.removeChild(mountainDisplay.firstChild);
        }



        for (let i = 0; i < mountainsArray.length; i++) {
            if (mountainsArray[i].name == optionSelected) {

                getSunsetForMountain(mountainsArray[i]).then(data => {
                    console.log(data.results);

                    let beginTwilight = document.createElement('p');
                    beginTwilight.innerText = `Astronomical Twilight Begin: ${data.results.astronomical_twilight_begin}`;
                    mountainDisplay.appendChild(beginTwilight);

                    let endTwilight = document.createElement('p');
                    endTwilight.innerText = `Astronomical Twilight End: ${data.results.astronomical_twilight_end}`
                    mountainDisplay.appendChild(endTwilight);
                    
                    let civilBegin = document.createElement('p');
                    civilBegin.innerText = `Civil Twilight Begin: ${data.results.civil_twilight_begin}`;
                    mountainDisplay.appendChild(civilBegin);

                    let civilEnd = document.createElement('p');
                    civilEnd.innerText = `Civil Twilight End: ${data.results.civil_twilight_end}`;
                    mountainDisplay.appendChild(civilEnd);

                    let dayLength = document.createElement('p');
                    dayLength.innerText = `Day Length: ${data.results.day_length}`;
                    mountainDisplay.appendChild(dayLength);

                    let nauticalBegin = document.createElement('p');
                    nauticalBegin.innerText = `Nautical Begin: ${data.results.nautical_twilight_begin}`;
                    mountainDisplay.appendChild(nauticalBegin);
            
                    let nauticalEnd = document.createElement('p');
                    nauticalEnd.innerText = `Nautical End: ${data.results.nautical_twilight_end}`;
                    mountainDisplay.appendChild(nauticalEnd);

                    let solarNoon = document.createElement('p');
                    solarNoon.innerText = `Solar Noon: ${data.results.nautical_solar_noon}`;
                    mountainDisplay.appendChild(solarNoon);

                    let sunRise = document.createElement('p');
                    sunRise.innerText = `Sunrise: ${data.results.sunrise}`;
                    mountainDisplay.appendChild(sunRise);
                    
                    let sunSet = document.createElement('p');
                    sunSet.innerText = `Sunset: ${data.results.sunset}`;
                    mountainDisplay.appendChild(sunSet);
                });

                imageElement.src = `./images/${mountainsArray[i].img}`;
                console.log(imageElement.src);
                mountHeader.innerText = `${mountainsArray[i].name}`;
                // let mountName = document.createElement('h3');
                // mountName.innerText = `${mountainsArray[i].name}`;
                // // mountName.style.textAlign = 'center';
                // mountainDisplay.appendChild(mountName);

                let elevation = document.createElement('p');
                elevation.innerText = `Elevation: ${mountainsArray[i].elevation}`;
                // elevation.style.paddingLeft = '75px';
                // elevation.style.paddingTop = '50px';
                mountainDisplay.appendChild(elevation);

                let effort = document.createElement('p');
                effort.innerText = `Effort: ${mountainsArray[i].effort}`;
                // effort.style.paddingLeft = '75px';
                mountainDisplay.appendChild(elevation);

                let mountLocation = document.createElement('p');
                mountLocation.innerText = `Coordinates - Latitude: ${mountainsArray[i].coords.lat}, 
                Longitude: ${mountainsArray[i].coords.lng}`;
                // mountLocation.style.paddingLeft = '75px';
                mountainDisplay.appendChild(mountLocation);

                // imageElement.src = `./images/${mountainsArray[i].img}`;
                // console.log(imageElement.src);

                let description = document.createElement('p');
                description.innerText = `Description: ${mountainsArray[i].desc}`;
                // description.style.paddingLeft = '75px';
                mountainDisplay.appendChild(description);

                const paraOne = document.createElement('p');
                paraOne.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quasi animi iure, repellendus
                    expedita, blanditiis sit sint ut adipisci aspernatur corrupti. Ex corrupti necessitatibus beatae
                    voluptatibus magnam nostrum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    quam praesentium nihil sed obcaecati facere fuga laudantium magni labore voluptate reprehenderit,
                    veritatis tempora. Ut autem, molestiae architecto laudantium quidem deserunt.`;
                // paraOne.style.paddingLeft = '75px';
                mountainDisplay.appendChild(paraOne);

                const paraTwo = document.createElement('p');
                paraTwo.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quasi animi iure, repellendus
                    expedita, blanditiis sit sint ut adipisci aspernatur corrupti. Ex corrupti necessitatibus beatae
                    voluptatibus magnam nostrum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    quam praesentium nihil sed obcaecati facere fuga laudantium magni labore voluptate reprehenderit,
                    veritatis tempora. Ut autem, molestiae architecto laudantium quidem deserunt.`;
                // paraTwo.style.paddingLeft = '75px';
                mountainDisplay.appendChild(paraTwo);

                break;
            }
        }
    }

}
