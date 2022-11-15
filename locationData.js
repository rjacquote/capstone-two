window.onload = function (){

let location = [{ state: "Alabama", short: "AL" },
{ state: "American Samoa", short: "American Samoa" },
{ state: "Arizona", short: "AZ" },
{ state: "Arkansas", short: "AR" },
{ state: "California", short: "CA" },
{ state: "Colorado", short: "CO" },
{ state: "Florida", short: "FL" },
{ state: "Hawaii", short: "HI" },
{ state: "Idaho", short: "ID" },
{ state: "Kentucky", short: "KY" },
{ state: "Michigan", short: "MI" },
{ state: "Minnesota", short: "MN" },
{ state: "Montana", short: "MT" },
{ state: "Neveda", short: "NV" },
{ state: "New Mexico", short: "NM" },
{ state: "North Carolina", short: "NC" },
{ state: "North Dakota", short: "ND" },
{ state: "Ohio", short: "OH" },
{ state: "Oregon", short: "OR" },
{ state: "South Carolina", short: "SC" },
{ state: "South Dakota", short: "SD" },
{ state: "Texas", short: "TX" },
{ state: "Virgin Islands", short: "VI" },
{ state: "Utah", short: "UT" },
{ state: "Virginia", short: "VA" },
{ state: "Washington", short: "WA" },
{ state: "Wyoming", short: "WY" },
];

let selectMenu = document.getElementById('states');

let numStates = location.length;
for (let i = 0; i < numStates; i++) {
    let option = new Option(location[i].state);
    selectMenu.appendChild(option);
}
}