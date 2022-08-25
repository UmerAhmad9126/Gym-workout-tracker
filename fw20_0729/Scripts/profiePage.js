 
 
 // days
 let day= document.getElementById("b-day")
 
 for (let i = 1; i <= 30; i++) {
     let option=document.createElement("option")
     option.innerText=i
     day.append(option)
 }

 // months
 let months= document.getElementById("b-month")

 let Months=["January","February","March","April","March","April","May","June","July","August","September","October","November","December"]
 for (let i = 1; i <= 12; i++) {
     let option=document.createElement("option")
     option.innerText=Months[i]
     months.append(option)
 }

 // years
 let years= document.getElementById("b-year")

 for (let i = 1; i <= 150; i++) {
     let option=document.createElement("option")
     let year=2023
     option.innerText=year-i
     years.append(option)
 }

// timezone

 let timezone=[

       "Abidjan",
       "Accra",
       "Addis Ababa",
       "Algiers",
       "Asmara",
       "Bamako",
       "Bangui",
       "Banjul",
       "Bissau",
       "Blantyre",
       "Brazzaville",
       "Bujumbura",
       "Cairo",
       "Casablanca",
       "Ceuta",
       "Conakry",
       "Dakar",
       "Dar es Salaam",
       "Djibouti",
       "Douala",
       "El Aaiun",
       "Freetown",
       "Gaborone",
       "Harare",
       "Johannesburg",
       "Juba",
       "Kampala",
       "Khartoum",
       "Kigali",
       "Kinshasa",
       "Lagos",
       "Libreville",
       "Lome",
       "Luanda",
       "Lubumbashi",
       "Lusaka",
       "Malabo",
       "Maputo",
       "Maseru",
       "Mbabane",
       "Mogadishu",
       "Monrovia",
       "Nairobi",
       "Ndjamena",
       "Niamey",
       "Nouakchott",
       "Ouagadougou",
       "Porto-Novo",
       "Sao Tome",
       "Tripoli",
       "Tunis",
       "Windhoek",
       "Adak",
       "Anchorage",
       "Anguilla",
       "Antigua",
       "Araguaina",
       "Argentina",
       "Aruba",
       "Asuncion",
       "Atikokan",
       "Bahia",
       "Bahia Banderas",
       "Barbados",
       "Belem",
       "Belize",
       "Blanc-Sablon",
       "Boa Vista",
       "Bogota",
       "Boise",
       "Cambridge Bay",
       "Campo Grande",
       "Cancun",
       "Caracas",
       "Cayenne",
       "Cayman",
       "Chicago",
       "Chihuahua",
       "Costa Rica",
       "Creston",
       "Cuiaba",
       "Curacao",
       "Danmarkshavn",
       "Dawson",
       "Dawson Creek",
       "Denver",
       "Detroit",
       "Dominica",
       "Edmonton",
       "Eirunepe",
       "El Salvador",
       "Fort Nelson",
       "Fortaleza",
       "Glace Bay",
       "Goose Bay",
       "Grand Turk",
       "Grenada",
       "Guadeloupe",
       "Guatemala",
       "Guayaquil",
       "Guyana",
       "Halifax",
       "Havana",
       "Hermosillo",
       "Indiana",
       "Inuvik",
       "Iqaluit",
       "Jamaica",
       "Juneau",
       "Kentucky",
       "Kralendijk",
       "La Paz",
       "Lima",
       "Los Angeles",
       "Lower Princes",
       "Maceio",
       "Managua",
       "Manaus",
       "Marigot",
       "Martinique",
       "Matamoros",
       "Mazatlan",
       "Menominee",
       "Merida",
       "Metlakatla",
       "Mexico City",
       "Miquelon",
       "Moncton",
       "Monterrey",
       "Montevideo",
       "Montserrat",
       "Nassau",
       "New York",
       "Nipigon",
       "Nome",
       "Noronha",
       "North Dakota",
       "Nuuk",
       "Ojinaga",
       "Panama",
       "Pangnirtung",
       "Paramaribo",
       "Phoenix",
       "Port-au-Prince",
       "Port of Spain",
       "Porto Velho",
       "Puerto Rico",
       "Punta Arenas",
       "Rainy River",
       "Rankin Inlet",
       "Recife",
       "Regina",
       "Resolute",
       "Rio Branco",
       "Santarem",
       "Santiago",
       "Santo Domingo",
       "Sao Paulo",
       "Scoresbysund",
       "Sitka",
       "St Barthelemy",
       "St Johns",
       "St Kitts",
       "St Lucia",
       "St Thomas",
       "St Vincent",
       "Swift Current",
       "Tegucigalpa",
       "Thule",
       "Thunder Bay",
       "Tijuana",
       "Toronto",
       "Tortola",
       "Vancouver",
       "Whitehorse",
       "Winnipeg",
       "Yakutat",
       "Yellowknife",
       "Casey",
       "Davis",
       "DumontDUrville",
       "Macquarie",
       "Mawson",
       "McMurdo",
       "Palmer",
       "Rothera",
       "Syowa",
       "Troll",
       "Vostok",
       "Longyearbyen",
       "Aden",
       "Almaty",
       "Amman",
       "Anadyr",
       "Aqtau",
       "Aqtobe",
       "Ashgabat",
       "Atyrau",
       "Baghdad",
       "Bahrain",
       "Baku",
       "Bangkok",
       "Barnaul",
       "Beirut",
       "Bishkek",
       "Brunei",
       "Chita",
       "Choibalsan",
       "Colombo",
       "Damascus",
       "Dhaka",
       "Dili",
       "Dubai",
       "Dushanbe",
       "Famagusta",
       "Gaza",
       "Hebron",
       "Ho Chi Minh",
       "Hong Kong",
       "Hovd",
       "Irkutsk",
       "Jakarta",
       "Jayapura",
       "Jerusalem",
       "Kabul",
       "Kamchatka",
       "Karachi",
       "Kathmandu",
       "Khandyga",
       "Kolkata",
       "Krasnoyarsk",
       "Kuala Lumpur",
       "Kuching",
       "Kuwait",
       "Macau",
       "Magadan",
       "Makassar",
       "Manila",
       "Muscat",
       "Nicosia",
       "Novokuznetsk",
       "Novosibirsk",
       "Omsk",
       "Oral",
       "Phnom Penh",
       "Pontianak",
       "Pyongyang",
       "Qatar",
       "Qostanay",
       "Qyzylorda",
       "Riyadh",
       "Sakhalin",
       "Samarkand",
       "Seoul",
       "Shanghai",
       "Singapore",
       "Srednekolymsk",
       "Taipei",
       "Tashkent",
       "Tbilisi",
       "Tehran",
       "Thimphu",
       "Tokyo",
       "Tomsk",
       "Ulaanbaatar",
       "Urumqi",
       "Ust-Nera",
       "Vientiane",
       "Vladivostok",
       "Yakutsk",
       "Yangon",
       "Yekaterinburg",
       "Yerevan",
       "Azores",
       "Bermuda",
       "Canary",
       "Cape Verde",
       "Faroe",
       "Madeira",
       "Reykjavik",
       "South Georgia",
       "St Helena",
       "Stanley",
       "Adelaide",
       "Brisbane",
       "Broken Hill",
       "Darwin",
       "Eucla",
       "Hobart",
       "Lindeman",
       "Lord Howe",
       "Melbourne",
       "Perth",
       "Sydney",
       "Amsterdam",
       "Andorra",
       "Astrakhan",
       "Athens",
       "Belgrade",
       "Berlin",
       "Bratislava",
       "Brussels",
       "Bucharest",
       "Budapest",
       "Busingen",
       "Chisinau",
       "Copenhagen",
       "Dublin",
       "Gibraltar",
       "Guernsey",
       "Helsinki",
       "Isle of Man",
       "Istanbul",
       "Jersey",
       "Kaliningrad",
       "Kiev",
       "Kirov",
       "Lisbon",
       "Ljubljana",
       "London",
       "Luxembourg",
       "Madrid",
       "Malta",
       "Mariehamn",
       "Minsk",
       "Monaco",
       "Moscow",
       "Oslo",
       "Paris",
       "Podgorica",
       "Prague",
       "Riga",
       "Rome",
       "Samara",
       "San Marino",
       "Sarajevo",
       "Saratov",
       "Simferopol",
       "Skopje",
       "Sofia",
       "Stockholm",
       "Tallinn",
       "Tirane",
       "Ulyanovsk",
       "Uzhgorod",
       "Vaduz",
       "Vatican",
       "Vienna",
       "Vilnius",
       "Volgograd",
       "Warsaw",
       "Zagreb",
       "Zaporozhye",
       "Zurich",
       "Antananarivo",
       "Chagos",
       "Christmas",
       "Cocos",
       "Comoro",
       "Kerguelen",
       "Mahe",
       "Maldives",
       "Mauritius",
       "Mayotte",
       "Reunion",
       "Apia",
       "Auckland",
       "Bougainville",
       "Chatham",
       "Chuuk",
       "Easter",
       "Efate",
       "Enderbury",
       "Fakaofo",
       "Fiji",
       "Funafuti",
       "Galapagos",
       "Gambier",
       "Guadalcanal",
       "Guam",
       "Honolulu",
       "Kiritimati",
       "Kosrae",
       "Kwajalein",
       "Majuro",
       "Marquesas",
       "Midway",
       "Nauru",
       "Niue",
       "Norfolk",
       "Noumea",
       "Pago Pago",
       "Palau",
       "Pitcairn",
       "Pohnpei",
       "Port Moresby",
       "Rarotonga",
       "Saipan",
       "Tahiti",
       "Tarawa",
       "Tongatapu",
       "Wake",
       "Wallis",
    ]

    let continents=["Africa","America","Antarctica","Arctic","Asian","Australia","Atlantic","Europe","Indian","Pacific"]

    let timezones= document.getElementById("timezones")
    let optgroup=document.createElement("optgroup")
    for (let i = 0; i <timezone.length ; i++) {
        let option=document.createElement("option")
        
        // i==0?optgroup.setAttribute("label",continents[0]):option.innerText=timezone[i]
        if(i==0){
            optgroup.setAttribute("label",continents[0])
            // timezones.append(optgroup)
        }
        option.innerText=timezone[i]
        optgroup.append(option)
        timezones.append(optgroup)
    }