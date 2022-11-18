import { parkTypesArray } from './parkTypeData.js';
import { locationsArray } from './locationData.js';
import { nationalParksArray } from './nationalParkData.js';

window.onload = function () {

    let parkChecked = document.getElementById('park');
    let statesChecked = document.getElementById('state');
    // let searchChecked = document.getElementById('search');

    let menuListOne = document.getElementById('menuOne');
    let menuListTwo = document.getElementById('menuTwo');
    let searchInput = document.getElementById('searchInput');
    // let searchButton = document.getElementById('searchButton');

    const divElementOne = document.getElementById('firstMenu');
    const divElementTwo = document.getElementById('secondMenu');
    // const divElementThree = document.getElementById('searchBar');

    parkChecked.onclick = firstMenuList;
    statesChecked.onclick = firstMenuList;
    // searchChecked.onclick = searchBarNav;
    // searchButton.onclick = displayPark;

    menuListOne.onchange = secondMenuList;
    menuListTwo.onchange = displayPark;
    // searchInput.onkeyup = searchBarDisplay;

    function firstMenuList() {

        divElementOne.style.display = 'block';
        divElementTwo.style.display = 'none';

        while (menuListOne.options.length) {
            menuListOne.remove(0);
        }

        let defaultOpt = new Option('Select Options');
        menuListOne.appendChild(defaultOpt);

        if (parkChecked.checked) {
            for (let i = 0; i < parkTypesArray.length; i++) {
                let parkOption = new Option(parkTypesArray[i]);
                menuListOne.appendChild(parkOption);
            }
        }
        else if (statesChecked.checked) {
            for (let i = 0; i < locationsArray.length; i++) {
                let stateOption = new Option(locationsArray[i]);
                menuListOne.appendChild(stateOption);
            }
        }
    }

    function secondMenuList() {
        divElementTwo.style.display = 'block';
        let selectOption = menuListOne.options[menuListOne.selectedIndex].text;
        while (menuListTwo.options.length) {
            menuListTwo.remove(0);
        }

        let defaultOpt = new Option('Select Options');
        menuListTwo.appendChild(defaultOpt);

        if (parkChecked.checked) {
            for (let i = 0; i < nationalParksArray.length; i++) {

                if (nationalParksArray[i].LocationName.includes(selectOption)) {
                    if (!(nationalParksArray[i].LocationName.includes('Virgin Islands'))) {
                        let options = new Option(nationalParksArray[i].LocationName);
                        menuListTwo.appendChild(options);
                    }
                }
            }
        }
        else if (statesChecked.checked) {
            for (let i = 0; i < nationalParksArray.length; i++) {

                if (nationalParksArray[i].State.includes(selectOption)) {
                    let options = new Option(nationalParksArray[i].LocationName);
                    menuListTwo.appendChild(options);
                }
            }
        }
    }

    // function searchBarNav() {
    //     divElementOne.style.display = 'none';
    //     divElementTwo.style.display = 'none';
    //     divElementThree.style.display = 'block';
    // }

    // function parkName(park) {
    //     return `${park.LocationName}`;
    // }

    // let nationalPark = nationalParksArray.map(parkName);
    // console.log(nationalPark);

    // function searchBarDisplay() {
    //     removeDropDown();

    //     const filter = searchInput.value.toLowerCase();

    //     if(filter.length == 0) return;

    //     let filterSearch = [];

    //     nationalPark.forEach((nationalPark) => {
    //         if(nationalPark.substring(0, filter.length).toLowerCase() === filter){
    //             filterSearch.push(nationalPark);
    //         }
    //     })

    //     autoCompleteDropDown(filterSearch);
    // }
    
    // function autoCompleteDropDown(parks) {
    //     const list = document.createElement('ul');
    //     list.id = 'autocomplete'     

    //     parks.forEach((nationalPark) => {
    //         const listItem = document.createElement('li');
    //         const listButton = document.createElement('button');
    //         listButton.addEventListener('click', onButtonClick);
    //         listButton.innerHTML = nationalPark;
    //         listItem.appendChild(listButton);

    //         list.appendChild(listButton);
    //     })

    //     divElementThree.appendChild(list);
    // }

    // function removeDropDown(){
    //     const list = document.getElementById('autocomplete');
    //     if(list) divElementThree.remove();
    // }

    // function onButtonClick(){

    // }

    function displayPark() {
        //parkDisplay.empty();
        let parkDisplay = document.getElementById('parkDisplay');
        let parkHeader = document.getElementById('parkHeader');

        // if(parkHeader.firstChild) {
        //     parkHeader.remove(parkHeader.firstChild);
        // }
        while (parkDisplay.firstChild) {
            parkDisplay.removeChild(parkDisplay.firstChild);
        }
        // let parkName = document.createElement('h3');
        let optionSelected = menuListTwo.options[menuListTwo.selectedIndex].text;
        for (let i = 0; i < nationalParksArray.length; i++) {
            if (nationalParksArray[i].LocationName == optionSelected) {
                {
                    parkHeader.innerText = `${nationalParksArray[i].LocationName}`;
                    // parkHeader.style.textAlign = 'center';

                    let parkAddress = document.createElement('p');
                    parkAddress.innerText = `Address: ${nationalParksArray[i].Address}`;
                    parkDisplay.appendChild(parkAddress);

                    let parkCity = document.createElement('p');
                    parkCity.innerText = `City: ${nationalParksArray[i].City}`;
                    parkDisplay.appendChild(parkCity);

                    let parkState = document.createElement('p');
                    parkState.innerText = `State: ${nationalParksArray[i].State}`;
                    parkDisplay.appendChild(parkState);

                    let parkZipCode = document.createElement('p');
                    parkZipCode.innerText = `Zip Code: ${nationalParksArray[i].ZipCode}`;
                    parkDisplay.appendChild(parkZipCode);

                    let parkPhone = document.createElement('p');
                    parkPhone.innerText = `Phone: ${nationalParksArray[i].Phone}`;
                    parkDisplay.appendChild(parkPhone);

                    let parkFax = document.createElement('p');
                    parkFax.innerText = `Fax: ${nationalParksArray[i].Fax}`;
                    parkDisplay.appendChild(parkFax);

                    let parkVisit = document.createElement('p');
                    parkVisit.innerText = `Visit: ${nationalParksArray[i].Visit}`;
                    parkDisplay.appendChild(parkVisit);

                    let parkLatitude = document.createElement('p');
                    parkLatitude.innerText = `Latitude: ${nationalParksArray[i].Latitude}`;
                    parkDisplay.appendChild(parkLatitude);

                    let parkLong = document.createElement('p');
                    parkLong.innerText = `Longitude: ${nationalParksArray[i].Longitude}`;
                    parkDisplay.appendChild(parkLong);

                    let parkLocation = document.createElement('p');
                    parkLocation.innerText = `Location - Coordinates: ${nationalParksArray[i].Location.coordinates}, type: ${nationalParksArray[i].Location.type}`;
                    parkDisplay.appendChild(parkLocation);

                    const paraOne = document.createElement('p');
                    paraOne.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quasi animi iure, repellendus
                    expedita, blanditiis sit sint ut adipisci aspernatur corrupti. Ex corrupti necessitatibus beatae
                    voluptatibus magnam nostrum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    quam praesentium nihil sed obcaecati facere fuga laudantium magni labore voluptate reprehenderit,
                    veritatis tempora. Ut autem, molestiae architecto laudantium quidem deserunt.`;
                    parkDisplay.appendChild(paraOne);

                    const paraTwo = document.createElement('p');
                    paraTwo.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quasi animi iure, repellendus
                    expedita, blanditiis sit sint ut adipisci aspernatur corrupti. Ex corrupti necessitatibus beatae
                    voluptatibus magnam nostrum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    quam praesentium nihil sed obcaecati facere fuga laudantium magni labore voluptate reprehenderit,
                    veritatis tempora. Ut autem, molestiae architecto laudantium quidem deserunt.`;
                    parkDisplay.appendChild(paraTwo);

                    break;
                }
            }
        }
    }
}