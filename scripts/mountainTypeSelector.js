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

    function displayMountain() {
        let mountainDisplay = document.getElementById('mountainDisplay');
        let mountHeader = document.getElementById('mountHeader');
        let optionSelected = mountMenu.options[mountMenu.selectedIndex].text;

        let imageElement = document.getElementById('imageElement');

    
        while (mountainDisplay.firstChild) {
            mountainDisplay.removeChild(mountainDisplay.firstChild);
        }
        // let optionSelected = mountMenu.options[mountMenu.selectedIndex].text;

        for (let i = 0; i < mountainsArray.length; i++) {
            if (mountainsArray[i].name == optionSelected) {

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
