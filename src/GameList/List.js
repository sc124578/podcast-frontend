let gameList = [
    {
        "id": 1,
        "name": "Pokemon Red Version",
        "platform": "Gameboy",
        "year": "1996",
        "episode": "1",
        "realeased": "true"
    },
    {
        "id": 2,
        "name": "Bonjo Kazooie",
        "platform": "Nintendo 64",
        "year": "1998",
        "episode": "2",
        "realeased": "true"
    },
    {
        "id": 3,
        "name": "Halo Combat Evolved",
        "platform": "xbox",
        "year": "2001",
        "episode": "3",    
        "realeased": "true"
    },
    {
        "id": 4,
        "name": "Two Worlds",
        "platform": "Xbox 360, PC",
        "year": "2007",
        "episode": "4",
        "realeased": "true"
    },
    {
        "id": 5,
        "name": "Maneater",
        "platform": "Xbox One, Xbox Series X, PS5, PS4, Nintendo Switch, PC",
        "year": "2020",
        "episode": "5",
        "realeased": "true"
    },
    {
        "id": 6,
        "name": "Slender: The Arrival",
        "platform": "Xbox 360, Xbox One, PS3, PS4, Wii U, PC",
        "year": "2013",
        "episode": "6",
        "realeased": "true"
    },
    {
        "id": 7,
        "name": "Murdered: Soul Suspect",
        "platform": "Xbox 360, Xbox One, PS3, PS4, PC, Android",
        "year": "2014",
        "episode": "7",
        "realeased": "true"
    },
    {
        "id": 8,
        "name": "Tak 2 and the Staff of Dreams",
        "platform": "Xbox, Gamecube, PS2, Gameboy Advance",
        "year": "2004",
        "episode": "8",
        "realeased": "true"
    },
    {
        "id": 9,
        "name": "Sonic 1 and Sonic 2",
        "platform": "Sega Genesis",
        "year": "1991",
        "episode": "9",
        "realeased": "true"
    },
    {
        "id": 10,
        "name": "Fable",
        "platform": "Xbox",
        "year": "2004",
        "episode": "10",
        "realeased": "true"
    },
    {
        "id": 11,
        "name": "Sleeping Dogs",
        "platform": "Xbox 360, Xbox One, PS3, PS4, PC",
        "year": "2012",
        "episode": "11",
        "realeased": "true"
    },
    {
        "id": 12,
        "name": "The Last of Us",
        "platform": "PS3, PS4",
        "year": "2013",
        "episode": "12",
        "realeased": "true"
    },
    {
        "id": 13,
        "name": "Spiderman",
        "platform": "PS4",
        "year": "2018",
        "episode": "13",
        "realeased": "true"
    },
    {
        "id": 14,
        "name": "My Friend Pedro",
        "platform": "Nintendo Switch, PC, Xbox One",
        "year": "2019",
        "episode": "14",
        "realeased": "true"
    },
    {
        "id": 15,
        "name": "Diablo 3",
        "platform": "Xbox 360, Xbox One, PS3, PS4, PC, Nintendo Switch",
        "year": "2012",
        "episode": "15",
        "realeased": "true"
    },
    {
        "id": 16,
        "name": "Billy Hatcher and the Giant Egg",
        "platform": "Gamecube",
        "year": "2003",
        "episode": "16",
        "realeased": "true"
    },
    {
        "id": 17,
        "name": "Tony Hawk's Pro Skater 1 and 2",
        "platform": "PS1, PS2, PS4, Xbox, Xbox 360, Xbox One, Nintendo 64, Gameboy Advance, Gamecube, PC",
        "year": "1999",
        "episode": "17",
        "realeased": "true"
    },
    {
        "id": 18,
        "name": "Yugioh the Sacred Cards",
        "platform": "Gameboy Advance",
        "year": "2003",
        "episode": "18",
        "realeased": "true"
    },
    {
        "id": 19,
        "name": "Vanquish",
        "platform": "Xbox 360, PS3, PC",
        "year": "2010",
        "episode": "19",
        "realeased": "true"
    },
    {
        "id": 20,
        "name": "Star Wars: The Force Unleashed",
        "platform": "Xbox 360, PS3, PSP, PC, Nintendo Wii, Ninetendo Switch, Nintendo DS",
        "year": "2008",
        "episode": "20",
        "realeased": "true"
    },
    {
        "id": 21,
        "name": "Portal",
        "platform": "Xbox 360, PS3, PC",
        "year": "2007",
        "episode": "21",
        "realeased": "true"
    },
    {
        "id": 22,
        "name": "Far Cry 3",
        "platform": "Xbox 360, PS3, PC",
        "year": "2012",
        "episode": "22",
        "realeased": "true"
    },
    {
        "id": 23,
        "name": "Scott Pilgrim vs The World",
        "platform": "Xbox 360, Xbox One, PS3, PC",
        "year": "2010",
        "episode": "23",
        "realeased": "true"
    },
    {
        "id": 24,
        "name": "GoldenEye 007",
        "platform": "Nintendo 64, Nintendo Switch, Xbox Series X, PS5, PC,",
        "year": "1997",
        "episode": "24",
        "realeased": "true"
    },
    {
        "id": 25,
        "name": "Night Trap",
        "platform": "Sega CD, PC, Nintendo Switch, PS4",
        "year": "1992",
        "episode": "25",
        "realeased": "true"
    },
    {
        "id": 26,
        "name": "Superhot",
        "platform": "Xbox One, PS4, PC, Nintendo Switch",
        "year": "2016",
        "episode": "26",
        "realeased": "true"
    },
    {
        "id": 27,
        "name": "It Takes Two",
        "platform": "Xbox One, PS4, PS5, Xbox Series X, PC",
        "year": "2021",
        "episode": "27",
        "realeased": "true"
    },
    {
        "id": 28,
        "name": "A Link Between Worlds",
        "platform": "Nintendo 3DS",
        "year": "2013",
        "episode": "28",
        "realeased": "true"
    },
    {
        "id": 29,
        "name": "Mortal Kombat",
        "platform": "Sega Genesis,Super Nintendo, Arcade",
        "year": "1992",
        "episode": "29",
        "realeased": "true" 
    },
    {
        "id": 30,
        "name": "Split/Second",
        "platform": "Xbox 360, PS3, PC",
        "year": "2010",
        "episode": "30",
        "realeased": "true"
    },
    {
        "id": 31,
        "name": "Ori and the Blind Forest",
        "platform": "Xbox One, Xbox Series X, PC, Nintendo Switch",
        "year": "2015",
        "episode": "31",
        "realeased": "true"
    },
    {
        "id": 32,
        "name": "Dream Daddy",
        "platform": "PC, PS4, Nintendo Switch, iOS, Android",
        "year": "2017",
        "episode": "32",
        "realeased": "true"
    },
    {
        "id": 33,
        "name": "Life is Strange: Before the Storm",
        "platform": "Xbox One, PS4, PC",
        "year": "2017",
        "episode": "33",
        "realeased": "true"
    },
    {
        "id": 34,
        "name": "Battlefield Hardline",
        "platform": "Xbox 360, Xbox One, PS3, PS4, PC",
        "year": "2015",
        "episode": "34",
        "realeased": "true"
    },
    {
        "id": 35,
        "name": "Questions for the Hosts",
        "realeased": "true"
    },
    {
        "id": 36,
        "name": "Superliminal",
        "platform": "PC, PS4, Xbox One, Nintendo Switch",
        "year": "2019",
        "episode": "36",
        "realeased": "true"
    },
    {
        "id": 37,
        "name": "Spyro the Dragon",
        "platform": "PS1, PS4, Nintendo Switch, Xbox One, PC",
        "year": "1998",
        "episode": "37",
        "realeased": "true"
    },
    {
        "id": 38,
        "name": "Crash Team Racing",
        "platform": "PS1, PS4, Xbox One, Nintendo Switch, PC",
        "year": "1999",
        "episode": "38",
        "realeased": "true"
    },
    {
        "id": 39,
        "name": "Resident Evil 2 Remake",
        "platform": "PS4, Xbox One, Nintendo Switch, PC",
        "year": "2019",
        "episode": "39",
        "realeased": "true"
    },
    {
        "id": 40,
        "name": "Donkey Kong Country",
        "platform": "Super Nintendo, Nintendo Switch, Gameboy Advance",
        "year": "1994",
        "episode": "40",
        "realeased": "true"
    },
    {
        "id": 41,
        "name": "Hatoful Boyfriend",
        "platform": "PC, PS4, PS Vita, Nintendo Switch, iOS, Android",
        "year": "2011",
        "episode": "41",
        "realeased": "true"
    },
    {
        "id": 42,
        "name": "Dark Sector",
        "platform": "Xbox 360, PS3, PC",
        "year": "2008",
        "episode": "42",
        "realeased": "true"
    },
    {
        "id": 43,
        "name": "Limbo",
        "platform": "Xbox 360, PS3, PC, Xbox One, PS4, Nintendo Switch",
        "year": "2010",
        "episode": "43",
        "realeased": "true"
    },
    {
        "id": 44,
        "name": "Conkers Bad Fur Day",
        "platform": "Nintendo 64",
        "year": "2001",
        "episode": "44",
        "realeased": "true"
    },
    {
        "id": 45,
        "name": "Twisted Metal Black",
        "platform": "PS2",
        "year": "2001",
        "episode": "45",
        "realeased": "true"
    },
    {
        "id": 46,
        "name": "Layers of Fear",
        "platform": "Xbox One, PS4, PC, Nintendo Switch",
        "year": "2016",
        "episode": "46",
        "realeased": "true"
    },
    {
        "id": 47,
        "name": "Forgotten City",
        "platform": "Xbox One, PS4, PC, Nintendo Switch",
        "year": "2020",
        "episode": "47",
        "realeased": "true"
    },
    {
        "id": 48,
        "name": "Injustice Gods Among Us",
        "platform": "Xbox 360, PS3, Wii U, PS4, Xbox One, PC",
        "year": "2013",
        "episode": "48",
        "realeased": "true"
    },
    {
        "id": 49,
        "name": "Spec Ops: The Line",
        "platform": "Xbox 360, PS3, PC",
        "year": "2012",
        "episode": "49",
        "realeased": "true"
    },
    {
        "id": 50,
        "name": "Demolition Girl",
        "platform": "PS2",
        "year": "2002",
        "episode": "50",
        "realeased": "true"
    },
    {
        "id": 51,
        "name": "Star Wars: Knights of the Old Republic",
        "platform": "Xbox, PC, Xbox One, PS4, Nintendo Switch, IOS, Android",
        "year": "2003",
        "episode": "51",
        "realeased": "true"
    },
    {
        "id": 52,
        "name": "SSX Remake",
        "platform": "Xbox 360, PS3",
        "year": "2012",
        "episode": "52",
        "realeased": "true"
    },
    {
        "id": 53,
        "name": "Inscryption",
        "platform": "PC, Nintendo Switch, Xbox One, PS4, PS5",
        "year": "2021",
        "episode": "53",
        "realeased": "true"
    },
    {
        "id": 54,
        "name": "Psychonauts",
        "platform": "Xbox, PS2, PC, Xbox One, PS4, Nintendo Switch",
        "year": "2005",
        "episode": "54",
        "realeased": "true"
    },
    {
        "id": 55,
        "name": "Soul Calibur",
        "platform": "Arcade, Dreamcast, Xbox 360, PS3, Xbox One, PS4, PC, Nintendo Switch",
        "year": "1998",
        "episode": "55",
        "realeased": "true"
    },
    {
        "id": 56,
        "name": "Goat Simulator",
        "platform": "Xbox 360, Xbox One, PS3, PS4, PC, Nintendo Switch",
        "year": "2014",
        "episode": "56",
        "realeased": "true"
    },
    {
        "id": 57,
        "name": "Titanfall 2",
        "platform": "Xbox One, PS4, PC",
        "year": "2016",
        "episode": "57",
        "realeased": "true"
    },
    {
        "id": 58,
        "name": "Catherine",
        "platform": "Xbox 360, PS3, PS4, PC, Nintendo Switch",
        "year": "2011",
        "episode": "58",
        "realeased": "true"
    },
    {
        "id": 59,
        "name": "Marvels Guardians of the Galaxy",
        "platform": "Xbox One, PS4, PC, Nintendo Switch",
        "year": "2021",
        "episode": "59",
        "realeased": "true"
    },
    {
        "id": 60,
        "name": "Crimsom Skies: High Road to Revenge",
        "platform": "Xbox",
        "year": "2003",
        "episode": "60",
        "realeased": "true"
    },
    {
        "id": 61,
        "name": "Rayman Legends",
        "platform": "Xbox 360, PS3, Wii U, PS4, Xbox One, PC, Nintendo Switch",
        "year": "2013",
        "episode": "61",
        "realeased": "true"
    },
    {
        "id": 62,
        "name": "Dead or Alive 2",
        "platform": "Arcade, Dreamcast, PS2, Xbox, PS3, Xbox 360, Xbox One, PS4, PC, Nintendo Switch",
        "year": "1999",
        "episode": "62",
        "realeased": "true"
    },
    {
        "id": 63,
        "name": "The Walking Dead Season 1",
        "platform": "Xbox 360, PS3, PC, Xbox One, PS4, Nintendo Switch",
        "year": "2012",
        "episode": "63",
        "realeased": "true"
    },
    {
        "id": 64,
        "name": "Mass Effect",
        "platform": "Xbox 360, Xbox One, Xbox Series S/X, PS3, PC",
        "year": "2007",
        "episode": "64",
        "realeased": "true"
    },
    {
        "id": 65,
        "name": "Lollipop Chainsaw",
        "platform": "Xbox 360, PS3",
        "year": "2012",
        "episode": "65",
        "realeased": "true"
    },
    {
        "id": 66,
        "name": "Paradise Killer",
        "platform": "PC, Nintendo Switch, Xbox One, PS4, Xbox Series X, PS5",
        "year": "2020",
        "episode": "66",
        "realeased": "true"
    },
    {
        "id": 67,
        "name": "Midnight Fight Express",
        "platform": "PC, Xbox One, PS4, Xbox Series X, PS5",
        "year": "2022",
        "episode": "67",
        "realeased": "false"
    },
    {
        "id": 68,
        "name": "Tomb Raider",
        "platform": "Xbox 360, PS3, PC",
        "year": "2013",
        "episode": "68",
        "realeased": "true"
    },
    {
        "id": 69,
        "name": "Hooked on You: Dead by Daylight Dating Sim",
        "platform": "PC",
        "year": "2021",
        "episode": "69",
        "realeased": "true"
    },
    {
        "id": 70,
        "name": "Dragon Ball Z: The Legacy of Goku",
        "platform": "Gameboy Advance",
        "year": "2002",
        "episode": "70",
        "realeased": "true"
    },
    {
        "id": 71,
        "name": "Double Switch",
        "platform": "Sega CD, PC, PS4, Nintendo Switch",
        "year": "1993",
        "episode": "71",
        "realeased": "true"
    },
    {
        "id": 72,
        "name": "Hellblade: Senua's Sacrifice",
        "platform": "Xbox One, PS4, PC, Xbox Series X, PS5, Nintendo Switch",
        "year": "2017",
        "episode": "72",
        "realeased": "true"
    },
    {
        "id": 73,
        "name": "High on Life",
        "platform": "PC, Xbox One, PS4, Xbox Series X, PS5",
        "year": "2021",
        "episode": "73",
        "realeased": "true"
    },
    {
        "id": 74,
        "name": "Max Payne",
        "platform": "Xbox, PS2, PC, Xbox 360, PS3",
        "year": "2001",
        "episode": "74",
        "realeased": "true"
    },
    {
        "id": 75,
        "name": "Shadow of the Colossus",
        "platform": "PS2, PS3, PS4",
        "year": "2005",
        "episode": "75",
        "realeased": "true"
    },
    {
        "id": 76,
        "name": "Injustice 2",
        "platform": "Xbox One, PS4, PC",
        "year": "2017",
        "episode": "76",
        "realeased": "true"
    },
    {
        "id": 77,
        "name": "Lost in Random",
        "platform": "PC, Xbox One, PS4, Nintendo Switch",
        "year": "2021",
        "episode": "77",
        "realeased": "true"
    },
    {
        "id": 78,
        "name": "Pokemon Gold Version",
        "platform": "Gameboy",
        "year": "1999",
        "episode": "78",
        "realeased": "true"
    },
    {
        "id": 79,
        "name": "Little Misfortune",
        "platform": "PC, Xbox One, PS4, Nintendo Switch",
        "year": "2019",
        "episode": "79",
        "realeased": "true"
    },
    {
        "id": 80,
        "name": "Yugioh: Nightmare Troubadour",
        "platform": "Nintendo DS",
        "year": "2005",
        "episode": "80",
        "realeased": "true"
    },
    {
        "id": 81,
        "name": "Prototype",
        "platform": "Xbox 360, PS3, PC",
        "year": "2009",
        "episode": "81",
        "realeased": "true"
    },
    {
        "id": 82,
        "name": "Tier List of all the Games We've Played",
        "realeased": "true"
    },
    {
        "id": 83,
        "name": "Far Cry 5",
        "platform": "Xbox One, PS4, PC",
        "year": "2018",
        "episode": "83",
        "realeased": "true"
    },
    {
        "id": 84,
        "name": "The Artful Escape",
        "platform": "Xbox One, PC",
        "year": "2021",
        "episode": "84",
        "realeased": "true"
    },
    {
        "id": 85,
        "name": "Spyro 3: Year of the Dragon",
        "platform": "PS1, PS4, Nintendo Switch, Xbox One, PC",
        "year": "2000",
        "episode": "85",
        "realeased": "true"
    },
    {
        "id": 86,
        "name": "Asura's Wrath",
        "platform": "Xbox 360, PS3",
        "year": "2012",
        "episode": "86",
        "realeased": "true"
    },
    {
        "id": 87,
        "name": "Resident Evil 4",
        "platform": "Gamecube, PS2, PS3, Xbox 360, Xbox One, PS4, Nintendo Switch, PC",
        "year": "2005",
        "episode": "87",
        "realeased": "true"
    },
    {
        "id": 88,
        "name": "Enslave: Odyssey to the West",
        "platform": "Xbox 360, PS3, PC",
        "year": "2010",
        "episode": "88",
        "realeased": "true"
    },
    {
        "id": 89,
        "name": "Journey",
        "platform": "PS3, PS4, PC, iOS",
        "year": "2012",
        "episode": "89",
        "realeased": "true"
    },
    {
        "id": 90,
        "name": "Ori and the Will of the Wisps",
        "platform": "Xbox One, PC, Xbox Series X, Nintendo Switch",
        "year": "2020",
        "episode": "90",
        "realeased": "true"
    },
    {
        "id": 91,
        "name": "Sonic Adventure",
        "platform": "Dreamcast, Xbox 360, PS3, PC, Gamecube, Xbox One, PS4, Nintendo Switch",
        "year": "1998",
        "episode": "91",
        "realeased": "true"
    },
    {
        "id": 92,
        "name": "Until Dawn",
        "platform": "PS4",
        "year": "2015",
        "episode": "92",
        "realeased": "true"
    },
    {
        "id": 93,
        "name": "Dragon Ball Z: Legacy of Goku 2",
        "platform": "Gameboy Advance",
        "year": "2003",
        "episode": "93",
        "realeased": "true"
    },
    {
        "id": 94,
        "name": "Alice: Madness Returns",
        "platform": "Xbox 360, Xbox One, PS3, PC",
        "year": "2011",
        "episode": "94",
        "realeased": "true"
    },
    {
        "id": 95,
        "name": "Mortal Kombat 11",
        "platform": "Xbox One, PS4, PC, Nintendo Switch, Xbox Series X, PS5",
        "year": "2019",
        "episode": "95",
        "realeased": "true"
    },
    {
        "id": 96,
        "name": "Amnesia: The Dark Descent",
        "platform": "PC, Xbox One, PS4, Nintendo Switch",
        "year": "2010",
        "episode": "96",
        "realeased": "true"
    },
    {
        "id": 97,
        "name": "Max Payne 2: The Fall of Max Payne",
        "platform": "Xbox, PS2, PC, Xbox 360, PS3",
        "year": "2003",
        "episode": "97",
        "realeased": "true"
    },
    {
        "id": 98,
        "name": "Beyond Two Souls",
        "platform": "PS3, PS4, PC",
        "year": "2013",
        "episode": "98",
        "realeased": "true"
    },
]


export default gameList;