const LIST_GROUP_OPEN = "<ul id=\"list\" class=\"list-group\">";
const LIST_GROUP_CLOSED = "</ul>";

// const ENEMY_DATA = Enemies;

const ENEMY_DATA = [
  {
    "name": "Callow Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["Prologue"],
    "minLevel": "3",
    "maxLevel": "3",
    "weaponBrand": "",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Elder Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["Prologue"],
    "minLevel": "4",
    "maxLevel": "4",
    "weaponBrand": "",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Young Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["106NE", "107N", "114NE", "116", "118NW"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Bush Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["103E/NE", "106NE", "107N", "118NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Giant Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["103NE", "110W(lo)", "118NW", "120NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Lawless Grex",
    "species": "Grex",
    "continent": "Primordia",
    "location": [
      "102N",
      "104",
      "106",
      "110(lo)",
      "111SE",
      "112W",
      "120NW",
      "Beasts'Lair"
    ],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Dieter, the Epicure",
    "species": "Grex",
    "continent": "Primordia",
    "location": ["112W on ledge"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Celestin, the Spring Storm",
    "species": "Progen",
    "continent": "Primordia",
    "location": ["104NW - Headwater Summit"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Young Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 106N", "115S"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Rock Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["106N", "107(hi)", "116", "TallpachPeak", "121S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Iron Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 110(lo) on a cliff above Sayram Lake BC"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Blitz Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": [
      "[5:00~19:00]: 116 on the rocks directly NE where Hayreddin sleeps"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Hayreddin, the Territorial",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["116E(sleeps on the rocks directly NE of 116 at night)"],
    "minLevel": "81",
    "maxLevel": "81",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Juvenile Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["107(hi)", "106N", "110", "115S", "116", "TallpachPeak"],
    "minLevel": "1",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Furious Simius",
    "species": "Simius",
    "continent": "Primordia",
    "location": ["isle N of Primordia"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Daylight Aprica",
    "species": "Aprica",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 104NW", "106N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Odsent",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["[NM] Training Day"],
    "minLevel": "30",
    "maxLevel": "33",
    "weaponBrand": "",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Brass Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["102", "107", "112", "BiahnoLake.S", "WestGatePlain"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Iron Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": [
      "103",
      "106",
      "114",
      "121",
      "ArendtBridge",
      "BiahnoLake.E",
      "JanpathLake.S",
      "StickstoneRise"
    ],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Steel Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["108SW(lo)", "115SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Adamant Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 119W", "120"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Silver Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["108"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Gugli, the Relentless",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["Janpath Lake north coast"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Megatonne, the Hell Express",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["106E"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "GG",
    "weaponWeight": "L, Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Little Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": [
      "wgate",
      "103",
      "107",
      "stickrocks",
      "108",
      "110",
      "112",
      "114",
      "115S",
      "JanpathS",
      "120",
      "121",
      "Arlent"
    ],
    "minLevel": "1",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Domestic Armored Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Hard Armored Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Bogdan, the Dense",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Brass Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["102", "BiahnoS", "107", "wgate", "112"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Iron Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": [
      "103",
      "106",
      "114",
      "121",
      "ArendtBridge",
      "BiahnoLake.E",
      "JanpathLake.S",
      "StickstoneRise"
    ],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Steel Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["108SW(lo)", "115S", "UnicornRock"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Bronze Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 119W", "120", "SayramLake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Silver Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["108"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Little Femina Suid",
    "species": "Suid",
    "continent": "Primordia",
    "location": ["108", "ArendtBridge", "WestGatePlain"],
    "minLevel": "1",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Grassland Ovis",
    "species": "Ovis",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 112", "114", "116"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Docile Ovis",
    "species": "Ovis",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 114", "JanpathN/SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Rogue Ovis",
    "species": "Ovis",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 115S", "120N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Baabara, the Evangelical",
    "species": "Ovis",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: JanpathSE"],
    "minLevel": "12",
    "maxLevel": "12",
    "weaponBrand": "GG",
    "weaponWeight": "L, ME",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Eternal Millesaur",
    "species": "Millesaur",
    "continent": "Primordia",
    "location": ["wplains", "Sairam"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Millesaur Hide",
      "Millesaur Dung",
      "Millesaur Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Neck",
      "Tail",
      "True Head"
    ]
  },
  {
    "name": "Everlasting Millesaur",
    "species": "Millesaur",
    "continent": "Primordia",
    "location": ["Biahno", "Sairam", "Janpath"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Millesaur Hide",
      "Millesaur Dung",
      "Millesaur Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Neck",
      "Tail",
      "True Head"
    ]
  },
  {
    "name": "Luciel, the Eternal",
    "species": "Millesaur",
    "continent": "Primordia",
    "location": ["Janpath"],
    "minLevel": "92",
    "maxLevel": "92",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Millesaur Hide",
      "Millesaur Dung",
      "Millesaur Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Neck",
      "Tail",
      "True Head"
    ]
  },
  {
    "name": "Quick Evello",
    "species": "Evello",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 106SE", "110SW", "114", "JanpathS"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Fast Evello",
    "species": "Evello",
    "continent": "Primordia",
    "location": ["115", "121W"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Swift Evello",
    "species": "Evello",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 110"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Roderick, the Fleet-Footed",
    "species": "Evello",
    "continent": "Primordia",
    "location": ["117S"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Durvin, the Perceptive",
    "species": "Sphinx",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: Beasts'Lair"],
    "minLevel": "72",
    "maxLevel": "72",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Pristine Bristle",
      "Blazing Gas Sac",
      "Imperial Sphinx Fang\r"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Wood Lepyx",
    "species": "Lepyx",
    "continent": "Primordia",
    "location": ["107", "West Gate", "116"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Prairie Lepyx",
    "species": "Lepyx",
    "continent": "Primordia",
    "location": ["114", "117", "118", "121", "119"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Sirene, the Lost",
    "species": "Lepyx",
    "continent": "Primordia",
    "location": ["114E"],
    "minLevel": "13",
    "maxLevel": "13",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Highland Lepyx",
    "species": "Lepyx",
    "continent": "Primordia",
    "location": ["119NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Welkin Auravis",
    "species": "Auravis",
    "continent": "Primordia",
    "location": [
      "wplains",
      "107",
      "bluecliff",
      "108",
      "116(air)",
      "120(air)",
      "Arlent"
    ],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Reaver Auravis",
    "species": "Auravis",
    "continent": "Primordia",
    "location": ["107N", "111(n)", "112N", "119W(n)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Sky Auravis",
    "species": "Auravis",
    "continent": "Primordia",
    "location": ["104NW", "unicorn cliff"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Bohdan, the Mistral",
    "species": "Auravis",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: unicorn cliff"],
    "minLevel": "37",
    "maxLevel": "37",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Nocturnal Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["107(n)", "102N(n)", "116(n)", "Drop Shaft"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Blind Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: BiahnoE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Dark Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["Arlentcave"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Mortal Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["102N(n)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Necro, the Cavelord",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["Drop Shaft"],
    "minLevel": "69",
    "maxLevel": "69",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Blood Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: bluecliff"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Carmine Vesper",
    "species": "Vesper",
    "continent": "Primordia",
    "location": ["Drop Shaft"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Lake Terebra",
    "species": "Terebra",
    "continent": "Primordia",
    "location": ["BiahnoS", "wgate"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Pit Terebra",
    "species": "Terebra",
    "continent": "Primordia",
    "location": ["BiahnoLake.E", "JanpathE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Whirling Terebra",
    "species": "Terebra",
    "continent": "Primordia",
    "location": ["112", "Janpath"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Fall Terebra",
    "species": "Terebra",
    "continent": "Primordia",
    "location": ["111"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Archibolt, the Revolutionary",
    "species": "Terebra",
    "continent": "Primordia",
    "location": ["[Rain]: Lake Biahno"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Droll Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["105", "Janpath", "unicorn cliff"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Sapara, the Laconic",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["unicorn cliff"],
    "minLevel": "22",
    "maxLevel": "22",
    "weaponBrand": "SA",
    "weaponWeight": "L, SS",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Viridian Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["Biahno River", "stickrocks", "108W", "120N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Saffron Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["MoltenHollow"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Citrine Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["MoltenHollow"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Garnet Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["106"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Zdenka, the Raucous",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["106"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Ruby Saltat",
    "species": "Saltat",
    "continent": "Primordia",
    "location": ["106"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Stone Potamus",
    "species": "Potamus",
    "continent": "Primordia",
    "location": ["102"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Rock Potamus",
    "species": "Potamus",
    "continent": "Primordia",
    "location": ["102N", "106SE", "Biahno River", "110SW", "JanpathW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Mesgen, the Fairweathered",
    "species": "Potamus",
    "continent": "Primordia",
    "location": ["Sairam"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Huge Potamus",
    "species": "Potamus",
    "continent": "Primordia",
    "location": ["104S", "Sairam", "JanpathN"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Neodymium Petramand",
    "species": "Petramand",
    "continent": "Primordia",
    "location": ["Stonelattice Cavern"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Caesar, the Hundred-Eyed",
    "species": "Petramand",
    "continent": "Primordia",
    "location": ["Stonelattice Cavern"],
    "minLevel": "68",
    "maxLevel": "68",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Europium Petramand",
    "species": "Petramand",
    "continent": "Primordia",
    "location": ["TurtleNest"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Promethium Petramand",
    "species": "Petramand",
    "continent": "Primordia",
    "location": ["101cave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Grassland Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["114"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Tree Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["114", "115", "119", "121"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Green Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["112N", "120S/NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Wood Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["110", "bigroofcave(topright)", "199W", "120"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Native Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["110SW", "111"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Yelena, the Sequestered",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["120NW"],
    "minLevel": "34",
    "maxLevel": "34",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Rapid Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["116"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Lapis Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["Headwater Cavern"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Jade Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["bigroofcave", "arlentcave"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Citrine Scirpo",
    "species": "Scirpo",
    "continent": "Primordia",
    "location": ["109S", "111"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Beach Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["107", "116E"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Sea Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["108W", "113", "116E"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Coral Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["106", "113", "NmostInlet"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Hydro Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["102N", "Sairam", "111"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Raging Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["Primordia Waters (West) - island"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Sven, the Sturdy",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["Primordia Waters (West) - island"],
    "minLevel": "59",
    "maxLevel": "59",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Tourteau, the Delectable",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 116E"],
    "minLevel": "8",
    "maxLevel": "8",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Mother Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["[Rain]: 107W", "116E"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Femme Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["[Rain]: Northpointe Cove"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Big Forfex",
    "species": "Forfex",
    "continent": "Primordia",
    "location": ["[Rain]: Sayram"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Volkampf, the Pursuer",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["Chapter 2"],
    "minLevel": "5",
    "maxLevel": "5",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Copper Cinicula",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["110", "114"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Bronze Cinicula",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["110", "JanpathW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Eckart, the Indestructible",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["110SW"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Pure Cinicula",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["109S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Young Cinicula",
    "species": "Cinicula",
    "continent": "Primordia",
    "location": ["Janpath W"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Origin Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["Prologue"],
    "minLevel": "1",
    "maxLevel": "1",
    "weaponBrand": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Pebble Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]:102", "107", "118N"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Rapid Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["unicorn cliff"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Tough Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["102NE(n)", "110SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Black Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["bigroofcave", "119W(n)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Dark Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["108", "111"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Hell Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["110(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Casper, the Unhealthy Eater",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: West Gate", "up near the crystals"],
    "minLevel": "13",
    "maxLevel": "13",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Egg Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": [
      "[19:00~5:00]:occasionally replaces Nocto Blatta at Suid corpses"
    ],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Larva Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]:bluecliff"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Young Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]:111"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Creeping Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 107", "119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Sneaking Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: bluecliff", "114"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Stalking Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 112N", "113SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Crawler Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 109", "110"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Judge Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: 108"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Curse Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["Primordia Waters (West) - island"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Agito, the Golden",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 102E"],
    "minLevel": "36",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Roimi, the Affluent",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 117SE"],
    "minLevel": "31",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "White Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["Headwater Cavern"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Metal Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["Headwater Cavern"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Wootz Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["arlentcave"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Moon Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["Drop Shaft"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Nocto Blatta",
    "species": "Blatta",
    "continent": "Primordia",
    "location": ["102E", "116", "JanpathW/N"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Raven Turba",
    "species": "Turba",
    "continent": "Primordia",
    "location": ["TurtleNest"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Miniature Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 102", "116", "119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Shadow Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["Headwater Cavern", "bigroof(night)", "120"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Savanna Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["unicorn cliff", "midroof(n)", "119"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Dusk Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["111", "119W"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Umbral Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["108", "111", "119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Photon Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: Biahnofalls(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Etutanne, the Bloodthirsty",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["bigroof"],
    "minLevel": "33",
    "maxLevel": "33",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Cursed Adsecula",
    "species": "Adsecula",
    "continent": "Primordia",
    "location": ["Castaway Cavern"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Honey Papil",
    "species": "Papil",
    "continent": "Primordia",
    "location": ["[5:00~19:00] JanpathSE"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Lake Papil",
    "species": "Papil",
    "continent": "Primordia",
    "location": ["[5:00~19:00] 103", "Biahno River"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "River Papil",
    "species": "Papil",
    "continent": "Primordia",
    "location": ["[5:00~19:00] 112N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Caranau, the Water Drake",
    "species": "Papil",
    "continent": "Primordia",
    "location": ["Biahno River"],
    "minLevel": "10",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Zeppelin Germivore",
    "species": "Germivore",
    "continent": "Primordia",
    "location": ["108NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Inferno Ictus",
    "species": "Ictus",
    "continent": "Primordia",
    "location": ["bigroof(n)", "111", "121(n)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Immortal Ictus",
    "species": "Ictus",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: RoofRock", "JanpathN", "107N", "108", "111"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Plant Mortifole",
    "species": "Mortifole",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Cave Mortifole",
    "species": "Mortifole",
    "continent": "Primordia",
    "location": ["Arlentcave"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Pit Mortifole",
    "species": "Mortifole",
    "continent": "Primordia",
    "location": ["105S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Welkin Levitath",
    "species": "Levitath",
    "continent": "Primordia",
    "location": ["108", "110", "bigroof", "120W"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Eutropio, the Sea Rumble",
    "species": "Levitath",
    "continent": "Primordia",
    "location": ["119W"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Burning Lophid",
    "species": "Lophid",
    "continent": "Primordia",
    "location": ["Castaway Cavern"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Ocean Lophid",
    "species": "Lophid",
    "continent": "Primordia",
    "location": ["109", "Janpath", "120NE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Marine Lophid",
    "species": "Lophid",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 107S", "111"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Ridill, the Arrogant",
    "species": "Lophid",
    "continent": "Primordia",
    "location": ["109 (appearances rare)"],
    "minLevel": "58",
    "maxLevel": "58",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Buoyant Lophid",
    "species": "Lophid",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: Janpath"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Cave Duoguill",
    "species": "Duoguill",
    "continent": "Primordia",
    "location": ["Headwater Cavern"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Placid Duoguill",
    "species": "Duoguill",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: Biahno River", "bigroof"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Nether Duoguill",
    "species": "Duoguill",
    "continent": "Primordia",
    "location": ["106", "108W", "midroof(d)", "Arlentcave"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Blood Duoguill",
    "species": "Duoguill",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 102N", "120NE", "Sayram-mid"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Hephaestus, the Absconder",
    "species": "Duoguill",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: midroof"],
    "minLevel": "25",
    "maxLevel": "25",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Sea Xiphias",
    "species": "Xiphias",
    "continent": "Primordia",
    "location": ["NmostInlet", "113"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Coral Xiphias",
    "species": "Xiphias",
    "continent": "Primordia",
    "location": ["120NE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Shatskiff, the Flasher",
    "species": "Xiphias",
    "continent": "Primordia",
    "location": ["northmostinlet"],
    "minLevel": "25",
    "maxLevel": "25",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Draken, the Drifting Cloud",
    "species": "Balaena",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "85",
    "maxLevel": "85",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Coral Balaena",
    "species": "Balaena",
    "continent": "Primordia",
    "location": ["121S", "northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Sea Balaena",
    "species": "Balaena",
    "continent": "Primordia",
    "location": ["121"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Rajidi, the Cumuliform",
    "species": "Balaena",
    "continent": "Primordia",
    "location": ["121S"],
    "minLevel": "52",
    "maxLevel": "52",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Shoal Balaena",
    "species": "Balaena",
    "continent": "Primordia",
    "location": ["northisle - Accompanies Draken", "the Drifting Cloud"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Elvira, the Talondrake",
    "species": "Colubrium",
    "continent": "Primordia",
    "location": [
      "[19:00~5:00]: Flies around Talon Rock [5:00~19:00]: Sleeps in the entrance to the Drop Shaft"
    ],
    "minLevel": "90",
    "maxLevel": "90",
    "weaponBrand": "OR",
    "weaponWeight": "H"
  },
  {
    "name": "Bravo Unafulge",
    "species": "Unafulge",
    "continent": "Primordia",
    "location": ["Castaway Cavern"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Marnuck Admiral",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["101S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Daril, the Eradicator",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 113SW"],
    "minLevel": "29",
    "maxLevel": "29",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Jaeger",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["101S", "119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Marksman",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["108W"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Sentinel",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 113SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Windtrooper",
    "species": "Marnuck",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 113SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Milsaadi Protobattler",
    "species": "Milsaadi",
    "continent": "Primordia",
    "location": [
      "110 - Atop Talon Rock (invisible until you walk near)",
      "415SW(hi)"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Robber",
    "species": "Milsaadi",
    "continent": "Primordia",
    "location": ["110 - Atop Talon Rock (invisible until you walk near)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Nahum, the Red Hare",
    "species": "Milsaadi",
    "continent": "Primordia",
    "location": [
      "101S(hi)",
      "Summons Nardacyon",
      "the Shadowless at 1HP (has no Enemy Index entry)"
    ],
    "minLevel": "66",
    "maxLevel": "66",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Glennar",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["Chapter 3"],
    "minLevel": "10",
    "maxLevel": "10",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Slovity Pagus",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["[NM] Slovity's Rampage"],
    "minLevel": "37",
    "maxLevel": "37",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Langul, the Alien Payload",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Major",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Butcher",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Eater",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Typhoon",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Berserker",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Trainer",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Hawk",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Griffon",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["101S", "119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Galba Vassago",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["[NM] Here Come the Brides"],
    "minLevel": "36",
    "maxLevel": "36",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Roda Gorida",
    "species": "Prone",
    "continent": "Primordia",
    "location": ["[NM] Forbidden Love - A Route"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "DE913: Dieara",
    "species": "Definian",
    "continent": "Primordia",
    "location": ["[NM] Attack on Biahno Hills"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "SN333: Jisanne",
    "species": "Definian",
    "continent": "Primordia",
    "location": ["[AM] A False Hope"],
    "minLevel": "26",
    "maxLevel": "26",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Ga Bewhe",
    "species": "Wrothian",
    "continent": "Primordia",
    "location": ["[NM] Gold Rush"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Gi Zang",
    "species": "Wrothian",
    "continent": "Primordia",
    "location": ["[NM] The Lurker"],
    "minLevel": "36",
    "maxLevel": "36",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Gu Ladha",
    "species": "Wrothian",
    "continent": "Primordia",
    "location": ["[NM] Lend an Ear - B Route"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Nardacyon, the Shadowless",
    "species": "Almandal",
    "continent": "Primordia",
    "location": ["101S (High) - Summoned by Nahum", "the Red Hare"],
    "minLevel": "96",
    "maxLevel": "96",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "Pawn Puge",
    "species": "Puge",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Prototype Puge",
    "species": "Puge",
    "continent": "Primordia",
    "location": ["101S"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Remote Puge",
    "species": "Puge",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Spear Puge",
    "species": "Puge",
    "continent": "Primordia",
    "location": ["101S", "119"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Pawn Pugilith",
    "species": "Pugilith",
    "continent": "Primordia",
    "location": ["119"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Remote Pugilith",
    "species": "Pugilith",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Gun Eagle Galdr",
    "species": "Galdr",
    "continent": "Primordia",
    "location": ["101S(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Flood Galdr",
    "species": "Galdr",
    "continent": "Primordia",
    "location": ["101S(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Drone Rook Quo",
    "species": "Quo",
    "continent": "Primordia",
    "location": ["101S", "119"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Logistical Support Quo",
    "species": "Quo",
    "continent": "Primordia",
    "location": ["101S"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Ataraxia Oc-serv",
    "species": "Oc-serv",
    "continent": "Primordia",
    "location": ["top of Talon Rock"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Talon King Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 110/Talon Rock peak"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Intermediate Arsenal Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: top bigroof"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Daril's Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["[5:00~19:00]: by your lifepod w of 102(postgame?)"],
    "minLevel": "54",
    "maxLevel": "54",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Experimental Composite Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 110N - Atop Talon Rock"],
    "minLevel": "59",
    "maxLevel": "59",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Support Trainee Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 119"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Gadaf's Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Barbed Remote Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["northisle"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Brave King Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["110N(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Rebel Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["101S", "110N(high)", "bigroof(top)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Suppressor Hermit Qmoeva",
    "species": "Qmoeva",
    "continent": "Primordia",
    "location": ["102(post)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Naguth Caladar",
    "species": "Caladar",
    "continent": "Primordia",
    "location": ["[NM] The Queen is Dead"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Girhi Caladar",
    "species": "Caladar",
    "continent": "Primordia",
    "location": ["[NM] The Queen is Dead"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Zeulbe Caladar",
    "species": "Caladar",
    "continent": "Primordia",
    "location": ["[NM] The Queen is Dead"],
    "minLevel": "42",
    "maxLevel": "42",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Ladha Caladar",
    "species": "Caladar",
    "continent": "Primordia",
    "location": ["[NM] Lend an Ear - B Route"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Lord Xe-dom",
    "species": "Xe-dom",
    "continent": "Primordia",
    "location": ["108(floatingisle)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Ji-ett, the Thunderclap",
    "species": "Fal-swo",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 119NE - Flying above the mountain"],
    "minLevel": "72",
    "maxLevel": "72",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Chromium Fal-swo",
    "species": "Fal-swo",
    "continent": "Primordia",
    "location": ["[19:00~5:00]: 111S/SW(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Tantalum Fal-swo",
    "species": "Fal-swo",
    "continent": "Primordia",
    "location": ["101S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Briggs",
    "species": "Human-Made Skell",
    "continent": "Primordia",
    "location": ["[NM] The Celeste Three"],
    "minLevel": "27",
    "maxLevel": "27",
    "weaponBrand": ""
  },
  {
    "name": "Fosdyke",
    "species": "Human-Made Skell",
    "continent": "Primordia",
    "location": ["[NM] The Celeste Three"],
    "minLevel": "23",
    "maxLevel": "24",
    "weaponBrand": ""
  },
  {
    "name": "Moorehouse",
    "species": "Human-Made Skell",
    "continent": "Primordia",
    "location": ["[NM] The Celeste Three"],
    "minLevel": "25",
    "maxLevel": "26",
    "weaponBrand": ""
  },
  {
    "name": "Leroy's Ire",
    "species": "Human-Made Skell",
    "continent": "Primordia",
    "location": ["[NM] Forbidden Love - B Route"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": ""
  },
  {
    "name": "Gold Courage",
    "species": "Human-Made Skell",
    "continent": "Primordia",
    "location": ["[NM] A Dubious Operation"],
    "minLevel": "32",
    "maxLevel": "32",
    "weaponBrand": ""
  },
  {
    "name": "Fiendish Virago",
    "species": "Virago",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 210N", "212"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Buchwald, the Guardian",
    "species": "Virago",
    "continent": "Noctilum",
    "location": ["224 - Inside Rockmole Burrow"],
    "minLevel": "77",
    "maxLevel": "77",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Hallowed Progen",
    "species": "Progen",
    "continent": "Noctilum",
    "location": ["211W(hi)", "222"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Lightning Progen",
    "species": "Progen",
    "continent": "Noctilum",
    "location": ["211SW(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Sacred Progen",
    "species": "Progen",
    "continent": "Noctilum",
    "location": ["216SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Sanctuary Progen",
    "species": "Progen",
    "continent": "Noctilum",
    "location": ["211S(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Raging Simius",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["217", "222E"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Anger Simius",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["205", "220N", "225", "Whale's Gullet"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Wrath Simius",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["202", "225"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Punishing Simius",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["220N"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Demetrio, the Tempestuous",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["Ensconced Citadel"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Striker Simius",
    "species": "Simius",
    "continent": "Noctilum",
    "location": ["202", "205", "216SW", "Whale's Gullet"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Oskar, the Summer Squall",
    "species": "Aprica",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 222"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Forest Aprica",
    "species": "Aprica",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 209NE", "211", "212", "221", "222", "225"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Nopopon Incarnate",
    "species": "Cervus",
    "continent": "Noctilum",
    "location": ["[NM] The Divine Nopopon"],
    "minLevel": "68",
    "maxLevel": "68",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Pastoral Cervus",
    "species": "Cervus",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 201", "225(high)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Seti, the Light of Stars",
    "species": "Cervus",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: Whale's Weeper"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Bar Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["209"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Forest Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["221"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Ambush Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["202"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Olegario, the Iron-Helmed",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: Whale's Weeper"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Forest Femina Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["219", "221", "222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Manuelita, the Affectionate",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["203NE"],
    "minLevel": "47",
    "maxLevel": "47",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Miniature Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["221"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Miniature Femina Suid",
    "species": "Suid",
    "continent": "Noctilum",
    "location": ["219"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Heidi, the Lively",
    "species": "Ovis",
    "continent": "Noctilum",
    "location": ["202 - Accompanies Pyotr", "the Shepherd"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Claire, the Sheltered",
    "species": "Ovis",
    "continent": "Noctilum",
    "location": ["202 - Accompanies Pyotr", "the Shepherd"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Stray Ovis",
    "species": "Ovis",
    "continent": "Noctilum",
    "location": ["Summoned by Lugalbanda", "the Wanderer-King"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Fernando, the Immobile",
    "species": "Millesaur",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 216"],
    "minLevel": "85",
    "maxLevel": "85",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Millesaur Hide",
      "Millesaur Dung",
      "Millesaur Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Neck",
      "Tail",
      "True Head"
    ]
  },
  {
    "name": "Sludge Caecus",
    "species": "Caecus",
    "continent": "Noctilum",
    "location": ["205", "220(lo)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Dirt Caecus",
    "species": "Caecus",
    "continent": "Noctilum",
    "location": ["216SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Drake, the Waypost",
    "species": "Caecus",
    "continent": "Noctilum",
    "location": ["220(lo)"],
    "minLevel": "29",
    "maxLevel": "29",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Spear Insidia",
    "species": "Insidia",
    "continent": "Noctilum",
    "location": ["204", "217", "219", "222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Pike Insidia",
    "species": "Insidia",
    "continent": "Noctilum",
    "location": ["214", "215", "222"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Lambert, the Divine Wind",
    "species": "Insidia",
    "continent": "Noctilum",
    "location": ["219"],
    "minLevel": "15",
    "maxLevel": "15",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Vermilion Insidia",
    "species": "Insidia",
    "continent": "Noctilum",
    "location": ["208", "218"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Griffus, the Tartarean",
    "species": "Insidia",
    "continent": "Noctilum",
    "location": ["218"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Wind Auravis",
    "species": "Auravis",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 211", "222(air)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Mount Jacul",
    "species": "Jacul",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: Weeping Whitewood"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Ripper Vesper",
    "species": "Vesper",
    "continent": "Noctilum",
    "location": ["224"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Froste, the Courteous",
    "species": "Vesper",
    "continent": "Noctilum",
    "location": ["Vitriol Cesspool"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Abyss[?] Vesper",
    "species": "Vesper",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 211"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Shinhwa, the Sagacious",
    "species": "Terebra",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "24",
    "maxLevel": "24",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Pound Terebra",
    "species": "Terebra",
    "continent": "Noctilum",
    "location": ["205"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Nomad Terebra",
    "species": "Terebra",
    "continent": "Noctilum",
    "location": ["216", "225"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Crusher Terebra",
    "species": "Terebra",
    "continent": "Noctilum",
    "location": ["216", "Whale's Weeper"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Taut Leather",
      "Perforated Oar",
      "Sharp Ear",
      "Terebra Water Grease",
      "Terebra Oil Grease",
      "Terebra Paw Stamp"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "All"]
  },
  {
    "name": "Mischievous Mephite",
    "species": "Mephite",
    "continent": "Noctilum",
    "location": ["Whale's Nostril"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Malicious Mephite",
    "species": "Mephite",
    "continent": "Noctilum",
    "location": ["sharkmouthcave"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Gerhardt, the Lone and Proud",
    "species": "Mephite",
    "continent": "Noctilum",
    "location": ["Whale's Nostril"],
    "minLevel": "12",
    "maxLevel": "12",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Jocular Saltat",
    "species": "Saltat",
    "continent": "Noctilum",
    "location": ["222NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Jarosch, the Sensational",
    "species": "Saltat",
    "continent": "Noctilum",
    "location": ["222E(rarely replaces Jade Saltat)"],
    "minLevel": "23",
    "maxLevel": "23",
    "weaponBrand": "SA",
    "weaponWeight": "L, SS",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Aria, the Zauberflöte",
    "species": "Saltat",
    "continent": "Noctilum",
    "location": ["222NW"],
    "minLevel": "13",
    "maxLevel": "13",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Jade Saltat",
    "species": "Saltat",
    "continent": "Noctilum",
    "location": ["222E(giantredflower?)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Wood Potamus",
    "species": "Potamus",
    "continent": "Noctilum",
    "location": ["222"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Merciful Dilus",
    "species": "Dilus",
    "continent": "Noctilum",
    "location": ["217", "222"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Acid Dilus",
    "species": "Dilus",
    "continent": "Noctilum",
    "location": ["204", "222NE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Hunter Dilus",
    "species": "Dilus",
    "continent": "Noctilum",
    "location": ["207NW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Sarchosuchus, the Iron-Eater",
    "species": "Dilus",
    "continent": "Noctilum",
    "location": ["217"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Tainted Sphinx",
    "species": "Tainted",
    "continent": "Noctilum",
    "location": ["Chapter 6", "Time Attack"],
    "minLevel": "24",
    "maxLevel": "24",
    "weaponBrand": ""
  },
  {
    "name": "Tainted Caro",
    "species": "Tainted",
    "continent": "Noctilum",
    "location": ["214NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "L"
  },
  {
    "name": "Scandium Petramand",
    "species": "Petramand",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Holmium Petramand",
    "species": "Petramand",
    "continent": "Noctilum",
    "location": ["224"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Merciful Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["Weeping Whitewood"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Garnet Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["Weeping Whitewood"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Desdemona, the Subterranean",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["222"],
    "minLevel": "11",
    "maxLevel": "11",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Elena, the Infernal",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["[Dense Fog]: Weeping Whitewood"],
    "minLevel": "79",
    "maxLevel": "79",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Soma Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["209"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Amrita Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["205", "217", "222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Surtr Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["215", "220N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Talos Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["217"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Carnal Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["220N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Breather Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["222E", "Weeping Whitewood"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Pillager Scirpo",
    "species": "Scirpo",
    "continent": "Noctilum",
    "location": ["205", "220NW(lo)", "222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Ocean Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["216SE(lo)", "218", "221SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Violet Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["212SW"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Cobalt Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Viridian Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["212"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Schneider, the Cliffpercher",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["212SW", "on a ledge down the waterfall"],
    "minLevel": "10",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Carmine Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["209", "220NW(lo)"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Garnet Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["212", "219"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Ruby Forfex",
    "species": "Forfex",
    "continent": "Noctilum",
    "location": ["209", "210"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Iron Cinicula",
    "species": "Cinicula",
    "continent": "Noctilum",
    "location": ["202", "208"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Falchion, the Vibrant",
    "species": "Cinicula",
    "continent": "Noctilum",
    "location": ["208S"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Rock Cinicula",
    "species": "Cinicula",
    "continent": "Noctilum",
    "location": ["208", "218"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Star Cinicula",
    "species": "Cinicula",
    "continent": "Noctilum",
    "location": ["212", "218"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Ghillie Falsaxum",
    "species": "Falsaxum",
    "continent": "Noctilum",
    "location": ["203", "Vitriol Cesspool"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Clemente, the Iron Meteor",
    "species": "Falsaxum",
    "continent": "Noctilum",
    "location": ["225NW"],
    "minLevel": "22",
    "maxLevel": "22",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Mirage Vivohast",
    "species": "Vivohast",
    "continent": "Noctilum",
    "location": ["225(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Pristine Insect Jaw",
      "Vivohast Crescent Hook",
      "Sharp Vivohast Jaw",
      "Moving Vivohast Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Tail"]
  },
  {
    "name": "Echo Thallus",
    "species": "Thallus",
    "continent": "Noctilum",
    "location": ["220N on tree"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Fake Thallus",
    "species": "Thallus",
    "continent": "Noctilum",
    "location": ["214", "225"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Cunning Thallus",
    "species": "Thallus",
    "continent": "Noctilum",
    "location": ["224"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Pizelle, the Purple Lightning",
    "species": "Thallus",
    "continent": "Noctilum",
    "location": ["214N"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Hermit Tectinsula",
    "species": "Tectinsula",
    "continent": "Noctilum",
    "location": ["216", "219", "221"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Negator Tectinsula",
    "species": "Tectinsula",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Silhouette Tectinsula",
    "species": "Tectinsula",
    "continent": "Noctilum",
    "location": ["205"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Stealth Tectinsula",
    "species": "Tectinsula",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Alfombra, the Transcendent",
    "species": "Tectinsula",
    "continent": "Noctilum",
    "location": ["221"],
    "minLevel": "14",
    "maxLevel": "14",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Joker, the Unknowable",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["206 - Inside the Giant Flower"],
    "minLevel": "90",
    "maxLevel": "90",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Muruse, the Opulent",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": [
      "Vitriol Cesspool - Secret passage by the wall in poisoned water"
    ],
    "minLevel": "56",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Yuiro, the Luxuriant",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": [
      "211S - Burrows out on a ledge below the gap between the two roads"
    ],
    "minLevel": "51",
    "maxLevel": "55",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Blitz Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["222", "Whale's Nostril"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Ogre Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["224"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Logi Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["216SE(lo)", "222E", "Vitriol Cesspool"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Prairie Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 211S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Raven Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["210S"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Magus Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["211S", "Vitriol Cesspool"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Squall Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["206 - Inside the Giant Flower"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Sturdy Blatta",
    "species": "Blatta",
    "continent": "Noctilum",
    "location": ["216", "220N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Dove Turba",
    "species": "Turba",
    "continent": "Noctilum",
    "location": ["205", "217", "222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Lark Turba",
    "species": "Turba",
    "continent": "Noctilum",
    "location": ["217"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Kite Turba",
    "species": "Turba",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Tormenta, the Scarlet-Clad",
    "species": "Turba",
    "continent": "Noctilum",
    "location": ["216"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Indigo Turba",
    "species": "Turba",
    "continent": "Noctilum",
    "location": ["204"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Forest Adsecula",
    "species": "Adsecula",
    "continent": "Noctilum",
    "location": ["204", "215", "218", "220"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Tree Adsecula",
    "species": "Adsecula",
    "continent": "Noctilum",
    "location": ["216SE(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Sacrum, the Noctilucent",
    "species": "Papil",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: Whale's Weeper"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Copper Papil",
    "species": "Papil",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 210(hi)", "211"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Bronze Papil",
    "species": "Papil",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 214N", "225(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Violet Germivore",
    "species": "Germivore",
    "continent": "Noctilum",
    "location": ["220NW(lo)"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Cobalt Germivore",
    "species": "Germivore",
    "continent": "Noctilum",
    "location": ["217SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Canary Germivore",
    "species": "Germivore",
    "continent": "Noctilum",
    "location": ["224"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Terrible Germivore",
    "species": "Germivore",
    "continent": "Noctilum",
    "location": ["214N", "212"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Minor Sabula",
    "species": "Sabula",
    "continent": "Noctilum",
    "location": ["211"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Scratched Jewel",
      "Nutritious Microbes",
      "Sabula Backbone"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Balduino, the Wicked-Eyed",
    "species": "Aeviter",
    "continent": "Noctilum",
    "location": ["206SE"],
    "minLevel": "89",
    "maxLevel": "89",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Gooey Gunge",
      "Active Cells",
      "Aeviter Membrane",
      "Aeviter Star Wing",
      "Aeviter Death Stone"
    ],
    "droppedSource": ["All", "All", "Tail", "Wings", "Wings"]
  },
  {
    "name": "Crazed Aeviter",
    "species": "Aeviter",
    "continent": "Noctilum",
    "location": ["206SE"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Gooey Gunge",
      "Active Cells",
      "Aeviter Membrane",
      "Aeviter Star Wing",
      "Aeviter Death Stone"
    ],
    "droppedSource": ["All", "All", "Tail", "Wings", "Wings"]
  },
  {
    "name": "Lake Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["222"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Gardener Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 215", "220"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Native Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["[5:00~19:00]: 216"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Yessenia, the Husky-Voiced",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["221"],
    "minLevel": "23",
    "maxLevel": "23",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Grotto Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["204", "211(hi)", "219", "221"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Crusher Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["205", "208", "221SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Katerina, the Cliffhanger",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["212W"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Mirage Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["212W"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Origin Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["209"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Numb Mortifole",
    "species": "Mortifole",
    "continent": "Noctilum",
    "location": ["205", "216"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Scarlet Levitath",
    "species": "Levitath",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 208NW", "222NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Antares Levitath",
    "species": "Levitath",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 222E"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Frajeel, the Purgatorial",
    "species": "Levitath",
    "continent": "Noctilum",
    "location": ["206 - Flying around the Giant Flower"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Shuravas, the Enraged",
    "species": "Millepod",
    "continent": "Noctilum",
    "location": ["[Thunderstorm]: 211"],
    "minLevel": "65",
    "maxLevel": "65",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Sturdy Drakebone",
      "Fossilized Bone",
      "Decrepit Wing",
      "Yellow Millepod Rock",
      "Millepod Ice Rock",
      "Reverse Millepod Fin"
    ],
    "droppedSource": ["All", "All", "0", "Tail", "Tail", "Inverse Fin"]
  },
  {
    "name": "Tidal Purgovent",
    "species": "Purgovent",
    "continent": "Noctilum",
    "location": ["Vitriol Cesspool", "whitetrees"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Electric Scintimure",
    "species": "Scintimure",
    "continent": "Noctilum",
    "location": ["rootycave"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Callous Scintimure",
    "species": "Scintimure",
    "continent": "Noctilum",
    "location": ["202"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Beach Xiphias",
    "species": "Xiphias",
    "continent": "Noctilum",
    "location": ["203", "isle S of 209"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Ocean Xiphias",
    "species": "Xiphias",
    "continent": "Noctilum",
    "location": ["216SE(lo)", "218"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Lunar Ceto",
    "species": "Ceto",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 210N", "221"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Selenic Ceto",
    "species": "Ceto",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 212"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Spring Unafulge",
    "species": "Unafulge",
    "continent": "Noctilum",
    "location": ["Whale's Nostril"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Drifter Unafulge",
    "species": "Unafulge",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 207"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Planetes, the Torrential",
    "species": "Unafulge",
    "continent": "Noctilum",
    "location": ["207NW - Behind the mountain"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Spore Filiavent",
    "species": "Filiavent",
    "continent": "Noctilum",
    "location": ["[19:00~5:00]: 221SE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Mollusk Mucus",
      "Quality Skin",
      "Red Filiavent Tentacle",
      "Black Filiavent Tentacle",
      "Giant Protein",
      "Filiavent Intestine"
    ],
    "droppedSource": ["All", "All", "Tentacles", "Tentacles", "Mouth", "All"]
  },
  {
    "name": "Tainted Scintimure",
    "species": "Tainted",
    "continent": "Noctilum",
    "location": ["214NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "CC",
    "weaponWeight": "M"
  },
  {
    "name": "Marnuck Support",
    "species": "Marnuck",
    "continent": "Noctilum",
    "location": ["210NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Recon",
    "species": "Marnuck",
    "continent": "Noctilum",
    "location": ["225NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Pyotr, the Shepherd",
    "species": "Sylooth",
    "continent": "Noctilum",
    "location": ["202"],
    "minLevel": "74",
    "maxLevel": "74",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Goliath Sylooth",
    "species": "Sylooth",
    "continent": "Noctilum",
    "location": ["222E"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Brobdingnagian Sylooth",
    "species": "Sylooth",
    "continent": "Noctilum",
    "location": ["204NE", "208"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Yama, the Obliviator",
    "species": "Sylooth",
    "continent": "Noctilum",
    "location": ["220S"],
    "minLevel": "33",
    "maxLevel": "33",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Blood-King Gelvo Banth",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["[AM] The King of Fear"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Rampager",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["211NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Owl",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["211NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Eagle",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["222NE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Slayer",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["211NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Bully",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["222NE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Prisoner",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["211NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Judge",
    "species": "Prone",
    "continent": "Noctilum",
    "location": ["222NE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Goetia",
    "species": "Ganglion Command",
    "continent": "Noctilum",
    "location": ["Chapter 4", "Time Attack"],
    "minLevel": "16",
    "maxLevel": "16",
    "weaponBrand": ""
  },
  {
    "name": "Border Puge",
    "species": "Puge",
    "continent": "Noctilum",
    "location": ["210NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Fighter Pugilith",
    "species": "Pugilith",
    "continent": "Noctilum",
    "location": ["210NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Guide Owl Galdr",
    "species": "Galdr",
    "continent": "Noctilum",
    "location": ["210NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Duran's Galdr",
    "species": "Galdr",
    "continent": "Noctilum",
    "location": ["[0:00~5:00]: 210NW"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Drone Knight Quo",
    "species": "Quo",
    "continent": "Noctilum",
    "location": ["210NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Rubidium Oc-serv",
    "species": "Oc-serv",
    "continent": "Noctilum",
    "location": ["211"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Si-el, the Vacuous",
    "species": "Oc-serv",
    "continent": "Noctilum",
    "location": ["212"],
    "minLevel": "19",
    "maxLevel": "19",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Cross Qmoeva",
    "species": "Qmoeva",
    "continent": "Noctilum",
    "location": ["[NM] Frontier Spirit"],
    "minLevel": "22",
    "maxLevel": "25",
    "weaponBrand": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Infantry Support Qmoeva",
    "species": "Qmoeva",
    "continent": "Noctilum",
    "location": ["Noctilum Waters - Far NW Island"],
    "minLevel": "80",
    "maxLevel": "80",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Palace Knight Qmoeva",
    "species": "Qmoeva",
    "continent": "Noctilum",
    "location": ["210S(wait) where path starts"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Multi Knight Qmoeva",
    "species": "Qmoeva",
    "continent": "Noctilum",
    "location": ["218NW(wait) on pillar"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Suppressor Knight Qmoeva",
    "species": "Qmoeva",
    "continent": "Noctilum",
    "location": ["204E(wait) N of Everwhelm Falls landmark"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Go-rha, the Guardian Deity",
    "species": "Xe-dom",
    "continent": "Noctilum",
    "location": ["221"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Running Shark",
    "species": "Human-Made Skell",
    "continent": "Noctilum",
    "location": ["[AM] My Dream"],
    "minLevel": "21",
    "maxLevel": "21",
    "weaponBrand": ""
  },
  {
    "name": "Lugalbanda, the Wanderer-King",
    "species": "Chimera",
    "continent": "Noctilum",
    "location": [
      "Vitriol Cesspool - Secret passage by the wall in poisoned water"
    ],
    "minLevel": "88",
    "maxLevel": "88",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "Telethia, the Endbringer",
    "species": "Telethia",
    "continent": "Noctilum",
    "location": ["206 - Circles the Divine Roost at near maximum altitude"],
    "minLevel": "99",
    "maxLevel": "99",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Telethia Mirror",
      "Infinite Telethia Pen",
      "Telethia Ring",
      "Telethia Stem Cell",
      "Telethia Emerald"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Awarded for Appraisals",
      "Random Appendage Fragment after Nemesis is Beaten"
    ]
  },
  {
    "name": "Soldier Grex",
    "species": "Grex",
    "continent": "Oblivia",
    "location": ["302"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Hunter Grex",
    "species": "Grex",
    "continent": "Oblivia",
    "location": ["312N", "315NE", "321", "Aaroy(mid)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Cleaner Grex",
    "species": "Grex",
    "continent": "Oblivia",
    "location": ["317N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Celedonio, the Battle-Tested",
    "species": "Grex",
    "continent": "Oblivia",
    "location": ["309SE"],
    "minLevel": "18",
    "maxLevel": "18",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Slimy Tongue",
      "Jagged Grex Tail",
      "White Mirrorglass",
      "Opaque Mirrorglass",
      "Grex Wisdom Tooth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tail",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "All"
    ]
  },
  {
    "name": "Berserk Vigent",
    "species": "Vigent",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 313SW", "315SW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Brutal Vigent",
    "species": "Vigent",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 313SW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Barnabas, the Despot",
    "species": "Vigent",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: Aaroy Plain - Wanders around"],
    "minLevel": "65",
    "maxLevel": "65",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Wise Progen",
    "species": "Progen",
    "continent": "Oblivia",
    "location": ["301", "303N", "310(lo)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Ancient Progen",
    "species": "Progen",
    "continent": "Oblivia",
    "location": ["309NE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Ernest, the Contemplative",
    "species": "Progen",
    "continent": "Oblivia",
    "location": ["309NE"],
    "minLevel": "36",
    "maxLevel": "36",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Vice Simius",
    "species": "Simius",
    "continent": "Oblivia",
    "location": ["305", "318SW", "Ibitsa(NE)", "Balancerock", "Ibra"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Mortal Simius",
    "species": "Simius",
    "continent": "Oblivia",
    "location": ["315S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Diogenes, the Covetous",
    "species": "Simius",
    "continent": "Oblivia",
    "location": ["318SW"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Stiff Hair",
      "Hard Backbone",
      "Muscled Simius Bulge",
      "Red Simius Mane",
      "Green Simius Mane",
      "Golden Simius Mane",
      "Supple Tail",
      "Simius Snack Stash"
    ],
    "droppedSource": [
      "All",
      "All",
      "Hands",
      "Head",
      "Head",
      "Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Origin Cantor",
    "species": "Cantor",
    "continent": "Oblivia",
    "location": ["Demon's Pocket"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Wise Aprica",
    "species": "Aprica",
    "continent": "Oblivia",
    "location": ["302", "312N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Primal Aprica",
    "species": "Aprica",
    "continent": "Oblivia",
    "location": ["317N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Sviatoslav, the Reproachful",
    "species": "Aprica",
    "continent": "Oblivia",
    "location": ["[Rain]: Balance Rock"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Slender Horn",
      "Evergreen Aprica Antlers",
      "Redwood Aprica Antlers",
      "Aprica Back Moss",
      "Fine Aprica Wood"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "Exposed Back"]
  },
  {
    "name": "Violet Cervus",
    "species": "Cervus",
    "continent": "Oblivia",
    "location": ["[19:00~5:00]: 319SE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Trained Armored Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["307SE", "312", "Butte"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Macho Armored Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["307"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Melanya, the Sound Sleeper",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["301NE"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Western Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["305(lo)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Bronze Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["312NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Adamant Armored Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["307"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Crazed Femina Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["305(lo)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Alba Femina Suid",
    "species": "Suid",
    "continent": "Oblivia",
    "location": ["312NE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Fleecy Fur",
      "Succulent Meat",
      "Muscled Suid Bulge",
      "Tough Humpsteak",
      "Appetising Suid Tail",
      "Suid Fillet",
      "Marbled Suid Fillet"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head",
      "Armored Head",
      "Posterior",
      "All",
      "All"
    ]
  },
  {
    "name": "Prowler Ovis",
    "species": "Ovis",
    "continent": "Oblivia",
    "location": ["312NW/SE", "Butte"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Germaine, the Treasure Keeper",
    "species": "Ovis",
    "continent": "Oblivia",
    "location": ["302E"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Innocent Ovis",
    "species": "Ovis",
    "continent": "Oblivia",
    "location": ["302E", "316S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Gradivus, the Headless Emperor",
    "species": "Millesaur",
    "continent": "Oblivia",
    "location": ["308W(post game)"],
    "minLevel": "71",
    "maxLevel": "71",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Millesaur Hide",
      "Millesaur Dung",
      "Millesaur Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Neck",
      "Tail",
      "True Head"
    ]
  },
  {
    "name": "Wasteland Evello",
    "species": "Evello",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 302", "308SW", "312S", "AaroyN"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Grand Evello",
    "species": "Evello",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 312N", "AaroyS"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Ludvik, the Picky Eater",
    "species": "Evello",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 312N"],
    "minLevel": "29",
    "maxLevel": "29",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Worn Muscle Fiber",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Robust Evello Horn",
      "Meaty Evello Egg",
      "Ebony Evello Egg"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Javelin Insidia",
    "species": "Insidia",
    "continent": "Oblivia",
    "location": ["309", "314N", "317W"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Glaive Insidia",
    "species": "Insidia",
    "continent": "Oblivia",
    "location": ["312N", "315SW", "317(lo)", "321"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Stiff Hair",
      "Chipped Talon",
      "Bone-in-Thigh Meat",
      "Insidia Mohawk",
      "Evolved Insidia Claw",
      "Ornate Insidia Claw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All"]
  },
  {
    "name": "Feliciano, the All-Seeing",
    "species": "Sphinx",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 321SW", "Central Ibra Ravine"],
    "minLevel": "70",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Pristine Bristle",
      "Blazing Gas Sac",
      "Imperial Sphinx Fang\r"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Alba Lepyx",
    "species": "Lepyx",
    "continent": "Oblivia",
    "location": ["306", "IbitsaNE", "AaroyN"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Gale Auravis",
    "species": "Auravis",
    "continent": "Oblivia",
    "location": ["301", "321SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Blast Auravis",
    "species": "Auravis",
    "continent": "Oblivia",
    "location": ["313SW(ring)", "315SE(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Typhoon Auravis",
    "species": "Auravis",
    "continent": "Oblivia",
    "location": ["315S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Tempest Auravis",
    "species": "Auravis",
    "continent": "Oblivia",
    "location": ["315SW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Gotthard, the Intimidating",
    "species": "Auravis",
    "continent": "Oblivia",
    "location": ["304NW"],
    "minLevel": "61",
    "maxLevel": "61",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Auravis Courtship Feather",
      "Auravis Horn",
      "Auravis Laughing Bag",
      "Auravis Croaking Bag",
      "Unfertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Tail", "Horn", "Back", "Back", "All"]
  },
  {
    "name": "Flow Jacul",
    "species": "Jacul",
    "continent": "Oblivia",
    "location": ["Demon's Pocket"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Strange Vesper",
    "species": "Vesper",
    "continent": "Oblivia",
    "location": ["Devil's Colony"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Marvel Vesper",
    "species": "Vesper",
    "continent": "Oblivia",
    "location": ["312SE", "W.Ibra"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "Taut Leather",
      "Black Fog Deposits",
      "Vesper Fang",
      "Vesper Hair Clip",
      "Vesper Fry"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "All"]
  },
  {
    "name": "Impish Mephite",
    "species": "Mephite",
    "continent": "Oblivia",
    "location": ["306N", "307SE", "313SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Prowler Mephite",
    "species": "Mephite",
    "continent": "Oblivia",
    "location": ["309SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Stray Mephite",
    "species": "Mephite",
    "continent": "Oblivia",
    "location": ["312E"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Ferdinand, the Fortuitous",
    "species": "Mephite",
    "continent": "Oblivia",
    "location": ["316S"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Wild Mephite",
    "species": "Mephite",
    "continent": "Oblivia",
    "location": ["306", "309SW", "312NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Itinerant Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["316", "319SE", "Ibra"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Native Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["316"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Mystic Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["311(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Sorrowful Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["311(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Rapture Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["306NE(hi)", "318NE(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Prisoner Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["318NE(hi)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Imbecile Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["306NE(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Sluggish Saltat",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["320"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Bressole, the Fugitive",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["Isle(E of 319)"],
    "minLevel": "55",
    "maxLevel": "55",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Wenzel, the Inebriated",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["306NE(hi) Cryptic Sign"],
    "minLevel": "70",
    "maxLevel": "70",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Rolf, the Sonorous",
    "species": "Saltat",
    "continent": "Oblivia",
    "location": ["315SW"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Copper Potamus",
    "species": "Potamus",
    "continent": "Oblivia",
    "location": ["309SW", "313NW", "316S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Brother Potamus",
    "species": "Potamus",
    "continent": "Oblivia",
    "location": ["316SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Lake Dilus",
    "species": "Dilus",
    "continent": "Oblivia",
    "location": ["307NE", "310(lo)", "312NW", "316", "W.Ibra"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Sheldon, the Dentally-Challenged",
    "species": "Dilus",
    "continent": "Oblivia",
    "location": ["W.Ibra"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Muddy Pelt",
      "Quality Pelt",
      "Cloudy Eyeball",
      "Pristine Dorsal Fin",
      "Moving Dilus Tail",
      "Crimson Dilus Eye",
      "Amber Dilus Eye"
    ],
    "droppedSource": ["All", "All", "Eye", "Back", "Tail", "Eye", "Eye"]
  },
  {
    "name": "Ytterby Petramand",
    "species": "Petramand",
    "continent": "Oblivia",
    "location": ["315S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Malium Petramand",
    "species": "Petramand",
    "continent": "Oblivia",
    "location": ["E.Ibra"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Prometheus Petramand",
    "species": "Petramand",
    "continent": "Oblivia",
    "location": ["318SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Logi Scirpo",
    "species": "Scirpo",
    "continent": "Oblivia",
    "location": ["305E(lo)", "309SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Bacchanal Scirpo",
    "species": "Scirpo",
    "continent": "Oblivia",
    "location": ["301SE", "312SE", "313SW(+ring)", "Devil's Colony", "Ibra"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Shade Scirpo",
    "species": "Scirpo",
    "continent": "Oblivia",
    "location": ["Devil's Colony"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Sand Forfex",
    "species": "Forfex",
    "continent": "Oblivia",
    "location": ["IbitsaSW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Land Forfex",
    "species": "Forfex",
    "continent": "Oblivia",
    "location": ["307SE", "313SE", "319", "IbitsaSW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Native Forfex",
    "species": "Forfex",
    "continent": "Oblivia",
    "location": ["314N(lo)", "317(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Lake Falsaxum",
    "species": "Falsaxum",
    "continent": "Oblivia",
    "location": ["302", "305NE", "312S"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Putrid Falsaxum",
    "species": "Falsaxum",
    "continent": "Oblivia",
    "location": ["308SW", "313NE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Recluse Thallus",
    "species": "Thallus",
    "continent": "Oblivia",
    "location": ["305(lo)", "313(lo)", "319SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Fade Thallus",
    "species": "Thallus",
    "continent": "Oblivia",
    "location": ["308", "309NE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Edgardo, the Carefree",
    "species": "Thallus",
    "continent": "Oblivia",
    "location": ["308SW"],
    "minLevel": "18",
    "maxLevel": "18",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Thallus Crescent Hook",
      "Black Thallus Antenna",
      "Red Thallus Antenna",
      "Moving Thallus Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Mouth", "Tail"]
  },
  {
    "name": "Soil Tectinsula",
    "species": "Tectinsula",
    "continent": "Oblivia",
    "location": ["309W", "312NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Clay Tectinsula",
    "species": "Tectinsula",
    "continent": "Oblivia",
    "location": ["302E", "312"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Tectonic Tectinsula",
    "species": "Tectinsula",
    "continent": "Oblivia",
    "location": ["305SE", "317N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Vittorio, the Battle-Scarred",
    "species": "Tectinsula",
    "continent": "Oblivia",
    "location": ["312SW"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Dried Seaweed Lichen",
      "Luminescent Antenna",
      "Tectinsula Shell",
      "Tectinsula Back Moss",
      "Orange Tequila",
      "Topaz Wine"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Chrysalis Blatta",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["313SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Dui, the Invaluable",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["Devil's Colony(deep)"],
    "minLevel": "21",
    "maxLevel": "25",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Tico, the Precious",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["315SE(hi)"],
    "minLevel": "26",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Zeppelin Blatta",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["312NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Crust Blatta",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 301SE", "303N", "Wayne"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Alba Blatta",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["301", "305", "312SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Striker Blatta",
    "species": "Blatta",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 301NE", "305", "312NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Drone Adsecula",
    "species": "Adsecula",
    "continent": "Oblivia",
    "location": ["Devil's Colony"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Recluse Adsecula",
    "species": "Adsecula",
    "continent": "Oblivia",
    "location": ["313SW(ring)", "AaroyS(night)", "Ibra(Climati)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Faded Adsecula",
    "species": "Adsecula",
    "continent": "Oblivia",
    "location": ["305N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Ghost Adsecula",
    "species": "Adsecula",
    "continent": "Oblivia",
    "location": ["E.Ibra"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Bertrand, the Gorge Scourge",
    "species": "Adsecula",
    "continent": "Oblivia",
    "location": ["E.Ibra"],
    "minLevel": "57",
    "maxLevel": "57",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Silver Papil",
    "species": "Papil",
    "continent": "Oblivia",
    "location": ["315SE(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Gold Papil",
    "species": "Papil",
    "continent": "Oblivia",
    "location": ["320", "Demon's Pocket"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Viridian Germivore",
    "species": "Germivore",
    "continent": "Oblivia",
    "location": ["321SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Carmine Germivore",
    "species": "Germivore",
    "continent": "Oblivia",
    "location": ["E.Ibra"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Lomoth, the Beast-Eater",
    "species": "Germivore",
    "continent": "Oblivia",
    "location": ["318NE(hi)"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Squallo, the Sand Mirer",
    "species": "Sabula",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: 305SE"],
    "minLevel": "65",
    "maxLevel": "65",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Scratched Jewel",
      "Nutritious Microbes",
      "Sabula Backbone"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Valerian, the Iron Cutter",
    "species": "Ictus",
    "continent": "Oblivia",
    "location": ["315"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Frightening Ictus",
    "species": "Ictus",
    "continent": "Oblivia",
    "location": ["309"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Fearsome Ictus",
    "species": "Ictus",
    "continent": "Oblivia",
    "location": ["310(lo)", "315S", "321"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Belenguer, the Gunhammer",
    "species": "Ictus",
    "continent": "Oblivia",
    "location": ["311"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Parasite Gerrid",
    "species": "Gerrid",
    "continent": "Oblivia",
    "location": ["Summoned by Gradivus (randomly?)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Drone Mortifole",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["302E"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Recluse Mortifole",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["318SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Jindriska, the Serene",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["302E"],
    "minLevel": "26",
    "maxLevel": "26",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Poisonous Mortifole",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["316W"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Toxic Mortifole",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["315SW", "317N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Eliane, the Unmoved",
    "species": "Mortifole",
    "continent": "Oblivia",
    "location": ["312SE"],
    "minLevel": "29",
    "maxLevel": "29",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Broken Antenna",
      "Fluffy Tuft",
      "Golden Mortifole Feather",
      "Green Mortifole Feather",
      "Red Mortifole Feather",
      "White Mortifole Feather",
      "Mortifole Pollen",
      "Shiny Mortifole Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Cataract Levitath",
    "species": "Levitath",
    "continent": "Oblivia",
    "location": ["303N", "310(lo)", "311(lo)", "321"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Abyssal Levitath",
    "species": "Levitath",
    "continent": "Oblivia",
    "location": ["315(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Silvestre, the Morning Light",
    "species": "Levitath",
    "continent": "Oblivia",
    "location": ["317SW(around ring)"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "OR",
    "weaponWeight": "M",
    "materials": [
      "Sturdy Drakebone",
      "Nutritious Microbes",
      "Levitath Feather",
      "Levitath Sun Bead",
      "Sparkling Blue Gem",
      "Sparkling Purple Gem",
      "Sparkling Red Gem"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Tail",
      "Head",
      "Tail",
      "Tail",
      "Tail"
    ]
  },
  {
    "name": "Hartmut, the Calamity",
    "species": "Millepod",
    "continent": "Oblivia",
    "location": ["abyss(flies from east edge to mid)"],
    "minLevel": "91",
    "maxLevel": "91",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Sturdy Drakebone",
      "Fossilized Bone",
      "Decrepit Wing",
      "Yellow Millepod Rock",
      "Millepod Ice Rock",
      "Reverse Millepod Fin"
    ],
    "droppedSource": ["All", "All", "0", "Tail", "Tail", "Inverse Fin"]
  },
  {
    "name": "Coral Purgovent",
    "species": "Purgovent",
    "continent": "Oblivia",
    "location": ["308", "313(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Ocean Purgovent",
    "species": "Purgovent",
    "continent": "Oblivia",
    "location": ["314N(lo)", "316S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Libra, the Long-Lived",
    "species": "Purgovent",
    "continent": "Oblivia",
    "location": ["308W"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Killer Duoguill",
    "species": "Duoguill",
    "continent": "Oblivia",
    "location": ["317(lo)", "320"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Thunder Duoguill",
    "species": "Duoguill",
    "continent": "Oblivia",
    "location": ["311(lo)", "313W"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Electro Duoguill",
    "species": "Duoguill",
    "continent": "Oblivia",
    "location": ["320"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Valeriano, the Rolling Thunder",
    "species": "Duoguill",
    "continent": "Oblivia",
    "location": ["[EMStorm]: 313W"],
    "minLevel": "26",
    "maxLevel": "26",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Bolt Duoguill",
    "species": "Duoguill",
    "continent": "Oblivia",
    "location": ["308W"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Quick Aetrygon",
    "species": "Aetrygon",
    "continent": "Oblivia",
    "location": ["309SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Fleet Aetrygon",
    "species": "Aetrygon",
    "continent": "Oblivia",
    "location": ["309E", "312SE", "313(lo)", "319", "320"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Vilem, the Gold-Scaled",
    "species": "Aetrygon",
    "continent": "Oblivia",
    "location": ["321N"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Ocean Balaena",
    "species": "Balaena",
    "continent": "Oblivia",
    "location": ["305N", "Isle(E of 319)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Giant Cavity",
      "Big Balaena Water Bag",
      "Big Balaena Sang Bag",
      "Lucky Rainbow Whisker",
      "Developed Balaena Fat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Balloons",
      "Balloons",
      "Whiskers",
      "Tail"
    ]
  },
  {
    "name": "Napopon Incarnate",
    "species": "Ceto",
    "continent": "Oblivia",
    "location": ["[NM] The Divine Nopopon"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Elaine, the Lunar Eclipse",
    "species": "Ceto",
    "continent": "Oblivia",
    "location": ["[19:00~5:00]: 316"],
    "minLevel": "55",
    "maxLevel": "55",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Gadaf, the Pulverizer",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["Ant's NestN"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Howitzer",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Vanguard",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["305", "306NW", "321SE", "Ant's NestN", "Mesa Fortress"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Guardian",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Impact",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Converger",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["304NE", "307NE", "Jair Fortress"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Mercenary",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Shield Trooper",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["311"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Damager",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Cutthroat",
    "species": "Marnuck",
    "continent": "Oblivia",
    "location": ["305N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Canyon Sylooth",
    "species": "Sylooth",
    "continent": "Oblivia",
    "location": ["316S", "321", "Ibra"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Climati, the Chilling Wind",
    "species": "Sylooth",
    "continent": "Oblivia",
    "location": ["Central Ibra Ravine"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Dadaan, the Strongest Prone",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["307"],
    "minLevel": "77",
    "maxLevel": "77",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "The Dadaan Girls",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["307"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Dadan Orchestra Members ?",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["summoned by Dadan at low health"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Ajiba Falgo",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["[NM] Kidnapped: Oll Valdileo"],
    "minLevel": "17",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Mujiba Falgo",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["[NM] Kidnapped: Rada Valdileo"],
    "minLevel": "17",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Vendura, the Spellbinder",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["[5:00~19:00]: Mesa Fortress(hi)"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Warrior",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["305", "Mesa Fortress", "Bute"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vulture",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Hawk",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["305", "309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Barbarian",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["Mesa Fortress"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Fury",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["315", "ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Admiral",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["307"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Condemned",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["Mesa Fortress"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Savage",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["307N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Guard",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["Mesa Fortress", "Bute"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Owl",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["312"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Vulture",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Crow",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["307SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Brutalizer",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Purger",
    "species": "Prone",
    "continent": "Oblivia",
    "location": ["306NW", "307SE", "312", "Ant's Nest"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "JS178: Jushe",
    "species": "Definian",
    "continent": "Oblivia",
    "location": ["[NM] Sun'celeg Rises"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "LV757: Lyvia",
    "species": "Definian",
    "continent": "Oblivia",
    "location": ["[NM] Fortun and Glory"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Zo Zazhi",
    "species": "Wrothian",
    "continent": "Oblivia",
    "location": ["[NM] A Dish Served Cold"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Almandal",
    "species": "Almandal",
    "continent": "Oblivia",
    "location": ["Chapter 7"],
    "minLevel": "28",
    "maxLevel": "28",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "Dagger Puge",
    "species": "Puge",
    "continent": "Oblivia",
    "location": ["305", "Mesa Fortress"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Sword Puge",
    "species": "Puge",
    "continent": "Oblivia",
    "location": ["321SE", "Wayne", "Ant's Nest"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Booster Puge",
    "species": "Puge",
    "continent": "Oblivia",
    "location": ["309N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Lance Puge",
    "species": "Puge",
    "continent": "Oblivia",
    "location": ["307N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Sword Pugilith",
    "species": "Pugilith",
    "continent": "Oblivia",
    "location": ["305", "306NW", "321SE", "Mesa Fortress"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Master Pugilith",
    "species": "Pugilith",
    "continent": "Oblivia",
    "location": ["304NE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Assault Model Pugilith",
    "species": "Pugilith",
    "continent": "Oblivia",
    "location": ["303N"],
    "minLevel": "22",
    "maxLevel": "22",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Spear Pugilith",
    "species": "Pugilith",
    "continent": "Oblivia",
    "location": ["309N", "322", "ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "MG062: Megisia",
    "species": "Galdr",
    "continent": "Oblivia",
    "location": ["[NM] Slovity's Rampage"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Revolver Eagle Galdr",
    "species": "Galdr",
    "continent": "Oblivia",
    "location": ["Jair Fortress", "up ramp from landmark"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Vendura's Galdr",
    "species": "Galdr",
    "continent": "Oblivia",
    "location": ["[19:00~5:00]: 307NW"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Drone King Quo",
    "species": "Quo",
    "continent": "Oblivia",
    "location": ["Jair Fortress"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Chromium Oc-serv",
    "species": "Oc-serv",
    "continent": "Oblivia",
    "location": ["315", "322"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Ro-dam, the Demon Claw",
    "species": "Oc-serv",
    "continent": "Oblivia",
    "location": ["308S"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Palace Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Oblivia",
    "location": ["ScablandFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Rebel Kaizer Qmoeva",
    "species": "Qmoeva",
    "continent": "Oblivia",
    "location": ["304NE", "322"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Nu-rhor, the Dark Deity",
    "species": "Xe-dom",
    "continent": "Oblivia",
    "location": ["322(hi)"],
    "minLevel": "65",
    "maxLevel": "65",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Strike Barrager Zig",
    "species": "Zig",
    "continent": "Oblivia",
    "location": ["309N(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Revolver Gunner Zig",
    "species": "Zig",
    "continent": "Oblivia",
    "location": ["307NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Mortar Launcher Zig",
    "species": "Zig",
    "continent": "Oblivia",
    "location": ["Jair Fortress"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Nickel Fal-swo",
    "species": "Fal-swo",
    "continent": "Oblivia",
    "location": ["311", "310(lo)", "316"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Zirconium Fal-swo",
    "species": "Fal-swo",
    "continent": "Oblivia",
    "location": ["306NE(hi)", "Jair Fortress"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "No-dhor, the Shadowcaster",
    "species": "Fal-swo",
    "continent": "Oblivia",
    "location": ["316"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Grenade Pizza F",
    "species": "Human-Made Skell",
    "continent": "Oblivia",
    "location": ["[NM] Murder Most Foul"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": ""
  },
  {
    "name": "Servant Caro",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["Badr Stronghold", "Den of the Dead"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Sand Caro",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["412E", "416", "418"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Prison Caro",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["416", "418W"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Andrei, the Cunning",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["418SW"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Little Caro",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["416", "418"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Storm Caro",
    "species": "Caro",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 415"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Seeker Vigent",
    "species": "Vigent",
    "continent": "Sylvalum",
    "location": ["404", "410SE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Goliath, the Castellated",
    "species": "Vigent",
    "continent": "Sylvalum",
    "location": ["415NW"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Nether Virago",
    "species": "Virago",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Behemoth, the Netherdweller",
    "species": "Virago",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Mighty Virago",
    "species": "Virago",
    "continent": "Sylvalum",
    "location": ["418"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Callow Virago",
    "species": "Virago",
    "continent": "Sylvalum",
    "location": ["418"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Rough Skin",
      "Warrior Race's Seal",
      "Ingrown Virago Claw",
      "Virago Alloy Plate",
      "Purple Virago Alloy Plate",
      "Virago Blood Sweat"
    ],
    "droppedSource": ["All", "All", "Claws", "Head", "Head", "Exposed Head"]
  },
  {
    "name": "Viridian Monoceros",
    "species": "Monoceros",
    "continent": "Sylvalum",
    "location": ["401", "402N", "406SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Alexei, the Jade",
    "species": "Monoceros",
    "continent": "Sylvalum",
    "location": ["406SW"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "White Progen",
    "species": "Progen",
    "continent": "Sylvalum",
    "location": ["403", "417SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Mount Progen",
    "species": "Progen",
    "continent": "Sylvalum",
    "location": ["[×Spores]: N.MagicMt"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Blaudolch, the Chalcedony",
    "species": "Progen",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Small Scale",
      "Large Hoof",
      "Golden Progen Wing",
      "Silver Progen Wing",
      "Blue Progen Wing",
      "Ornate Progen Horn",
      "Progen Hoof Seal"
    ],
    "droppedSource": ["All", "All", "Wings", "Wings", "Wings", "Horn", "All"]
  },
  {
    "name": "Canyon Cantor",
    "species": "Cantor",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 406S"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Cave Cantor",
    "species": "Cantor",
    "continent": "Sylvalum",
    "location": ["416SE(night)", "Behemoth's Shadows"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Eustachio, the Eccentric",
    "species": "Cantor",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 420"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Recluse Cantor",
    "species": "Cantor",
    "continent": "Sylvalum",
    "location": ["S.MagicMt", "Abysscave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Leandro, the Sneering",
    "species": "Cantor",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Shaman Cervus",
    "species": "Cervus",
    "continent": "Sylvalum",
    "location": ["[×Spores]: N.MagicMt"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Old Cervus",
    "species": "Cervus",
    "continent": "Sylvalum",
    "location": ["Ciel"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Asana, the Azure Star",
    "species": "Cervus",
    "continent": "Sylvalum",
    "location": ["W.CielSE"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "White Ovis",
    "species": "Ovis",
    "continent": "Sylvalum",
    "location": ["405NE", "415"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Traveler Ovis",
    "species": "Ovis",
    "continent": "Sylvalum",
    "location": ["[×Spores]: N.MagicMt"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Native Ovis",
    "species": "Ovis",
    "continent": "Sylvalum",
    "location": ["413"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Clara, the Pure White",
    "species": "Ovis",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 415SE"],
    "minLevel": "21",
    "maxLevel": "21",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Fleecy Fur",
      "Juicy Wild Meat",
      "Ovis Polishing Stone",
      "Lovely Pom Pom",
      "Hard Pom Pom",
      "Cimmerian Pom Pom",
      "Tricoloured Ovis Meat"
    ],
    "droppedSource": ["All", "All", "Head", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Ancient Coronid",
    "species": "Coronid",
    "continent": "Sylvalum",
    "location": ["[×Crimson Aurora]: Ciel"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Coronid Hide",
      "Coronid Dung",
      "Coronid Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Head",
      "Posterior",
      "Eye"
    ]
  },
  {
    "name": "Xair, the Cerulean Walker",
    "species": "Coronid",
    "continent": "Sylvalum",
    "location": ["Isle(W of 402)"],
    "minLevel": "75",
    "maxLevel": "75",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Coronid Hide",
      "Coronid Dung",
      "Coronid Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Head",
      "Posterior",
      "Eye"
    ]
  },
  {
    "name": "Frenzy Coronid",
    "species": "Coronid",
    "continent": "Sylvalum",
    "location": ["[Crimson Aurora]: Ciel"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Coronid Hide",
      "Coronid Dung",
      "Coronid Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Head",
      "Posterior",
      "Eye"
    ]
  },
  {
    "name": "Ignit, the Ultimate Chaos",
    "species": "Coronid",
    "continent": "Sylvalum",
    "location": ["[Crimson Aurora]: 411NE"],
    "minLevel": "88",
    "maxLevel": "88",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Rugged Skin",
      "Obsidian Fragment",
      "Tough Tendon",
      "Obsidian Cluster",
      "Thick Coronid Hide",
      "Coronid Dung",
      "Coronid Larynx"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Back",
      "Head",
      "Posterior",
      "Eye"
    ]
  },
  {
    "name": "Poisonous Caecus",
    "species": "Caecus",
    "continent": "Sylvalum",
    "location": ["419SE(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Villainous Caecus",
    "species": "Caecus",
    "continent": "Sylvalum",
    "location": ["405", "420(lo)", "Behemoth's Shadows"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Andrea, the Famished Hunter",
    "species": "Caecus",
    "continent": "Sylvalum",
    "location": ["402"],
    "minLevel": "51",
    "maxLevel": "51",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Pollen Lepyx",
    "species": "Lepyx",
    "continent": "Sylvalum",
    "location": ["405", "415"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Nomad Lepyx",
    "species": "Lepyx",
    "continent": "Sylvalum",
    "location": ["412SW", "413"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Giraffin, the Old Hand",
    "species": "Lepyx",
    "continent": "Sylvalum",
    "location": ["413"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Supple Leather",
      "Dull Stone",
      "Lepyx Elastic Cell",
      "Lepyx Jaw Meat",
      "Lepyx Sunstone",
      "Lepyx Moonstone"
    ],
    "droppedSource": ["All", "All", "Legs", "Head", "Back", "Back"]
  },
  {
    "name": "Jade Jacul",
    "species": "Jacul",
    "continent": "Sylvalum",
    "location": ["401"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Canyon Jacul",
    "species": "Jacul",
    "continent": "Sylvalum",
    "location": ["401(hi)", "402(hi)", "N.MagicMt"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Radovan, the Sky Baron",
    "species": "Jacul",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 406S(hi)"],
    "minLevel": "37",
    "maxLevel": "37",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Highland Jacul",
    "species": "Jacul",
    "continent": "Sylvalum",
    "location": ["414S", "S.MagicMt"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Stream Jacul",
    "species": "Jacul",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: Isle(NW 404)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Klaus Murra",
    "species": "Murra",
    "continent": "Sylvalum",
    "location": ["417SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Quiet Murra",
    "species": "Murra",
    "continent": "Sylvalum",
    "location": ["406", "415N"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Strange Murra",
    "species": "Murra",
    "continent": "Sylvalum",
    "location": ["404", "410", "415NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Uncanny Murra",
    "species": "Murra",
    "continent": "Sylvalum",
    "location": ["Sandsprint Cavity"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Camille, the Eternal",
    "species": "Murra",
    "continent": "Sylvalum",
    "location": ["417SE"],
    "minLevel": "19",
    "maxLevel": "19",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Lask, the Unscrupulous",
    "species": "Mephite",
    "continent": "Sylvalum",
    "location": ["416SE(hi)"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Thug Mephite",
    "species": "Mephite",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Prankish Mephite",
    "species": "Mephite",
    "continent": "Sylvalum",
    "location": ["S.MagicMt"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Strange Liceor",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["405", "417NE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Glowing Liceor",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["401", "411SW", "415", "417", "419SW(lo)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Dazzling Liceor",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["[×Rising Particles]: 413E", "415", "S.MagicMt"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Stola, the Champion",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["[Crimson Aurora]: 403S"],
    "minLevel": "57",
    "maxLevel": "57",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Awakened Liceor",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["[Rising Particles]: replaces Dazzling Crahla"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Divine Liceor",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["S.MagicMt", "Sandsprint Cavity"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Stola, the Unchained",
    "species": "Liceor",
    "continent": "Sylvalum",
    "location": ["[Rising Particles]: 419NE"],
    "minLevel": "57",
    "maxLevel": "57",
    "weaponBrand": "CC",
    "weaponWeight": "H"
  },
  {
    "name": "Minion Potamus",
    "species": "Potamus",
    "continent": "Sylvalum",
    "location": ["417SE"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Lively Tersqual",
    "species": "Tersqual",
    "continent": "Sylvalum",
    "location": ["Ciel"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Juicy Wild Meat",
      "Brilliant Tersqual Liquid",
      "Tersqual Eel Kebab",
      "Tersqual Fire Pouch",
      "Electric Tersqual Tear"
    ],
    "droppedSource": ["All", "All", "Back", "Head, Tail", "All", "All"]
  },
  {
    "name": "Latis, the Bristle-Scaled",
    "species": "Tersqual",
    "continent": "Sylvalum",
    "location": ["418"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "SS",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Juicy Wild Meat",
      "Brilliant Tersqual Liquid",
      "Tersqual Eel Kebab",
      "Tersqual Fire Pouch",
      "Electric Tersqual Tear"
    ],
    "droppedSource": ["All", "All", "Back", "Head, Tail", "All", "All"]
  },
  {
    "name": "Lantern Petramand",
    "species": "Petramand",
    "continent": "Sylvalum",
    "location": ["Den of the Dead"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Ceres Petramand",
    "species": "Petramand",
    "continent": "Sylvalum",
    "location": ["402", "413", "407", "415NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Lutetia Petramand",
    "species": "Petramand",
    "continent": "Sylvalum",
    "location": ["404", "419S(lo)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Candelario, the Bronze",
    "species": "Petramand",
    "continent": "Sylvalum",
    "location": ["407S"],
    "minLevel": "47",
    "maxLevel": "47",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Nectar Scirpo",
    "species": "Scirpo",
    "continent": "Sylvalum",
    "location": ["415E"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Haoma Scirpo",
    "species": "Scirpo",
    "continent": "Sylvalum",
    "location": ["406", "412SW", "413"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Kvass Scirpo",
    "species": "Scirpo",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 416SE"],
    "minLevel": "40",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Cracked Claw",
      "Pristine Insect Leg",
      "Pristine Claw",
      "Sticky Scirpo Silk",
      "Scirpo Malic Acid Sac",
      "Scirpo Cyanide Sac",
      "Scirpo Sulfuric Acid Sac",
      "Scirpo Silk\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head",
      "Acid Sac",
      "Acid Sac",
      "Acid Sac",
      "All\r"
    ]
  },
  {
    "name": "Lazuli Forfex",
    "species": "Forfex",
    "continent": "Sylvalum",
    "location": ["Isle(NW 404)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Iolite Forfex",
    "species": "Forfex",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Sapphire Forfex",
    "species": "Forfex",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Carnelian Forfex",
    "species": "Forfex",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Spinel Forfex",
    "species": "Forfex",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": [
      "Broken Pincer",
      "Small Shell",
      "Pristine Pincer",
      "Red Forfex Shell",
      "White Forfex Shell",
      "Blue Forfex Shell",
      "Forfex Miso"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claws",
      "Head Shell",
      "Head Shell",
      "Head Shell",
      "Exposed Head"
    ]
  },
  {
    "name": "Translucent Cinicula",
    "species": "Cinicula",
    "continent": "Sylvalum",
    "location": ["417"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Glow Cinicula",
    "species": "Cinicula",
    "continent": "Sylvalum",
    "location": ["407NE", "410SE", "412N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Thaddaeus, the Ultramafic",
    "species": "Cinicula",
    "continent": "Sylvalum",
    "location": ["417SW"],
    "minLevel": "42",
    "maxLevel": "42",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Jade Falsaxum",
    "species": "Falsaxum",
    "continent": "Sylvalum",
    "location": ["401E", "402N", "406"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Mikulas, the Keystone",
    "species": "Falsaxum",
    "continent": "Sylvalum",
    "location": ["402N"],
    "minLevel": "34",
    "maxLevel": "34",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Lead Carapace",
      "Refined Horn",
      "Falsaxum Shell",
      "Giant Falsaxum Jaw",
      "Thick Falsaxum Horn",
      "Gremlin Stone",
      "Green Crystal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Carrion Vivohast",
    "species": "Vivohast",
    "continent": "Sylvalum",
    "location": ["406S", "408", "419E(lo)", "Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Pristine Insect Jaw",
      "Vivohast Crescent Hook",
      "Sharp Vivohast Jaw",
      "Moving Vivohast Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Tail"]
  },
  {
    "name": "Grand Vivohast",
    "species": "Vivohast",
    "continent": "Sylvalum",
    "location": ["414N", "420(lo)"],
    "minLevel": "40",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Pristine Insect Jaw",
      "Vivohast Crescent Hook",
      "Sharp Vivohast Jaw",
      "Moving Vivohast Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Tail"]
  },
  {
    "name": "Killer Vivohast",
    "species": "Vivohast",
    "continent": "Sylvalum",
    "location": ["408NE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Pristine Insect Jaw",
      "Vivohast Crescent Hook",
      "Sharp Vivohast Jaw",
      "Moving Vivohast Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Tail"]
  },
  {
    "name": "Lockhart, the Killer of Hope",
    "species": "Vivohast",
    "continent": "Sylvalum",
    "location": ["414N"],
    "minLevel": "52",
    "maxLevel": "52",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Sticky Mucus",
      "Pristine Insect Jaw",
      "Vivohast Crescent Hook",
      "Sharp Vivohast Jaw",
      "Moving Vivohast Tail"
    ],
    "droppedSource": ["All", "All", "Arm", "Mouth", "Tail"]
  },
  {
    "name": "Nupopon Incarnate",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["[NM] The Divine Nopopon"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": "",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Smalt Arenatect",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["405E", "411SW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Cerulean Arenatect",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["411S", "413E", "418"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Turquoise Arenatect",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["406"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Man'an, the Water Whisperer",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["413SE"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Saffron Arenatect",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["410", "415NW", "418E"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Topaz Arenatect",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["Banshee Cave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Antara, the Water Diviner",
    "species": "Arenatect",
    "continent": "Sylvalum",
    "location": ["407NW"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Softimage ? (イマージ)・Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["randomly replaces mirage blatta"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Hiro, the Priceless",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: Sandsprint Cavity"],
    "minLevel": "66",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Ald, the Extravagant",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "61",
    "maxLevel": "65",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Platinum Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Diamon Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Crystal Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["Quay Hollows", "Banshee Cave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Vorpall, the Sickle-Fanged",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["Banshee Cave"],
    "minLevel": "54",
    "maxLevel": "54",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Mirage Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["411S", "416SW(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Chartreuse Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 405", "415SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Tranquil Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 418SW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Azure Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: Abysscave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Green Blatta",
    "species": "Blatta",
    "continent": "Sylvalum",
    "location": ["418SE", "Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Crane Turba",
    "species": "Turba",
    "continent": "Sylvalum",
    "location": ["407NE", "410SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Delft Turba",
    "species": "Turba",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Feld, the Indigo-Clad",
    "species": "Turba",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Gloam Turba",
    "species": "Turba",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Sparrow Adsecula",
    "species": "Adsecula",
    "continent": "Sylvalum",
    "location": ["408"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Endeavorer Adsecula",
    "species": "Adsecula",
    "continent": "Sylvalum",
    "location": [
      "414N",
      "417SE",
      "420S(lo)",
      "W.CielSW",
      "S.MagicMt",
      "Behemoth's Shadows"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Penetrator Adsecula",
    "species": "Adsecula",
    "continent": "Sylvalum",
    "location": ["406S", "411S", "416NW", "417", "419SE(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Druid Papil",
    "species": "Papil",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 403S"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Sorceror Papil",
    "species": "Papil",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Witch Papil",
    "species": "Papil",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 405", "W.Ciel"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Wizard Papil",
    "species": "Papil",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: N.MagicMt"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Magus Papil",
    "species": "Papil",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: E.Ciel"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Skulker Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["403SW"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Echo Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Shadow Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["405NW/SE"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Secret Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["405SE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Survivor Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["414", "420(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Lethal Germivore",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["Banshee Cave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Florence, the Hell Maggot",
    "species": "Germivore",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 405S(on foot only)"],
    "minLevel": "24",
    "maxLevel": "24",
    "weaponBrand": "SA",
    "weaponWeight": "H, SS",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Atreides, the Distinguished",
    "species": "Sabula",
    "continent": "Sylvalum",
    "location": ["412S"],
    "minLevel": "74",
    "maxLevel": "74",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Scratched Jewel",
      "Nutritious Microbes",
      "Sabula Backbone"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Gesserith, the Wileworm",
    "species": "Sabula",
    "continent": "Sylvalum",
    "location": ["Summoned by Atreides"],
    "minLevel": "76",
    "maxLevel": "76",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Scratched Jewel",
      "Nutritious Microbes",
      "Sabula Backbone"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Sandy Sabula",
    "species": "Sabula",
    "continent": "Sylvalum",
    "location": ["412"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Scratched Jewel",
      "Nutritious Microbes",
      "Sabula Backbone"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Chieftain Ictus",
    "species": "Ictus",
    "continent": "Sylvalum",
    "location": ["414"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Hermit Ictus",
    "species": "Ictus",
    "continent": "Sylvalum",
    "location": ["N.MagicMt(spores)", "Banshee Cave"],
    "minLevel": "41",
    "maxLevel": "90",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Sand Aeviter",
    "species": "Aeviter",
    "continent": "Sylvalum",
    "location": ["405", "412", "413", "415", "416SW(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Gooey Gunge",
      "Active Cells",
      "Aeviter Membrane",
      "Aeviter Star Wing",
      "Aeviter Death Stone"
    ],
    "droppedSource": ["All", "All", "Tail", "Wings", "Wings"]
  },
  {
    "name": "Macabre Aeviter",
    "species": "Aeviter",
    "continent": "Sylvalum",
    "location": ["Sandsprint Cavity"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Gooey Gunge",
      "Active Cells",
      "Aeviter Membrane",
      "Aeviter Star Wing",
      "Aeviter Death Stone"
    ],
    "droppedSource": ["All", "All", "Tail", "Wings", "Wings"]
  },
  {
    "name": "Berthold, the Blue-Eyed",
    "species": "Aeviter",
    "continent": "Sylvalum",
    "location": ["Sandsprint Cavity"],
    "minLevel": "75",
    "maxLevel": "75",
    "weaponBrand": "GG",
    "weaponWeight": "Sk",
    "materials": [
      "Gooey Gunge",
      "Active Cells",
      "Aeviter Membrane",
      "Aeviter Star Wing",
      "Aeviter Death Stone"
    ],
    "droppedSource": ["All", "All", "Tail", "Wings", "Wings"]
  },
  {
    "name": "Macabre Gerrid",
    "species": "Gerrid",
    "continent": "Sylvalum",
    "location": ["Den of the Dead"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Evil Gerrid",
    "species": "Gerrid",
    "continent": "Sylvalum",
    "location": ["407NE", "410SE", "420(lo)", "Den of the Dead"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Daemon, the Undertaker",
    "species": "Gerrid",
    "continent": "Sylvalum",
    "location": ["Den of the Dead"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Hell Gerrid",
    "species": "Gerrid",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Abyssal Sacrifole",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["405", "W.Ciel"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Giant Sacrifole",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["Ciel"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Mega Sacrifole",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["Ciel"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Dobromila, the Alluring",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["413S"],
    "minLevel": "63",
    "maxLevel": "63",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Lake Sacrifole",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Pyro Sacrifole",
    "species": "Sacrifole",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Albin, the Wicked Meddler",
    "species": "Purgovent",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: W.Ciel"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Darling Purgovent",
    "species": "Purgovent",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: W.Ciel"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Pugovent Jaw Meat",
      "Smooth Tail Fin",
      "Stout Purgovent Extract",
      "Strong Purgovent Extract",
      "Large Purgovent Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Plasma Duoguill",
    "species": "Duoguill",
    "continent": "Sylvalum",
    "location": ["waters around abysscave mountain"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Fine Duoguill Fishmeal",
      "Blue Electrical Tentacle",
      "Black Electrical Tentacle",
      "Duoguill Broth"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Blind Scintimure",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["[Spores]: 405", "410(air)", "411"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Zohan, the Thunderbolt",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["[Spores]: 416(hi above crystalflower)"],
    "minLevel": "64",
    "maxLevel": "64",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Glimmering Scintimure",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["418SW(air)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Bright Scintimure",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["416SE(air)", "420"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Statue Scintimure",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["407NE", "Behemoth's Shadows", "Abysscave"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Legato, the Sky Watcher",
    "species": "Scintimure",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Sky Aetrygon",
    "species": "Aetrygon",
    "continent": "Sylvalum",
    "location": ["405", "413(hi)", "E.Ciel(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Lofty Aetrygon",
    "species": "Aetrygon",
    "continent": "Sylvalum",
    "location": ["408(hi)", "413(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Ramus, the Supersonic",
    "species": "Aetrygon",
    "continent": "Sylvalum",
    "location": ["413SW(hi)"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Amber Aetrygon Horn",
      "Beryl Aetrygon Horn",
      "Light-Speed Jet Fin"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Cave Xiphias",
    "species": "Xiphias",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Brandys, the Spectral Light",
    "species": "Xiphias",
    "continent": "Sylvalum",
    "location": ["Behemoth's Shadows(elusive)"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Rotten Meat",
      "Fresh Fish Meat",
      "Sapphire Horn",
      "Emerald Horn",
      "Xiphias Mine Egg"
    ],
    "droppedSource": ["All", "All", "Horn", "Horn", "Back"]
  },
  {
    "name": "Floating Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["415"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Lethal Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["412", "413"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Abyssal Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Lava Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Ruth, the Shunner of Light",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["Secluded Lava Lake"],
    "minLevel": "42",
    "maxLevel": "42",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Creek Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Dryland Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["406NE", "411SW", "412", "413E", "417"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Young Unafulge",
    "species": "Unafulge",
    "continent": "Sylvalum",
    "location": ["403W"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Transparent Membrane",
      "Steel Unafulge Cell",
      "Unafulge Numbing Toxin",
      "Unafulge Death Toxin"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Lake Visigel",
    "species": "Visigel",
    "continent": "Sylvalum",
    "location": ["W.Ciel"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Sapphire Visigel",
    "species": "Visigel",
    "continent": "Sylvalum",
    "location": ["E.Ciel"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Yune, the Ambusher",
    "species": "Visigel",
    "continent": "Sylvalum",
    "location": ["403NW"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Aquatic Visigel",
    "species": "Visigel",
    "continent": "Sylvalum",
    "location": ["Noctilucent Sphere Interior"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Laurencio, the Fog Bow",
    "species": "Filiavent",
    "continent": "Sylvalum",
    "location": ["W.Ciel"],
    "minLevel": "59",
    "maxLevel": "59",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Mollusk Mucus",
      "Quality Skin",
      "Red Filiavent Tentacle",
      "Black Filiavent Tentacle",
      "Giant Protein",
      "Filiavent Intestine"
    ],
    "droppedSource": ["All", "All", "Tentacles", "Tentacles", "Mouth", "All"]
  },
  {
    "name": "Sadar, the Unhinged",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 409"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Ahama, the Covetous",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: Cavernous Abyss (top)"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Commander ",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["406NE(lo)", "HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Ruffian",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["419S(lo)", "HiralFort", "Badr Stronghold"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Firetrooper",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["420NW(lo)", "Anvils", "Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Loader",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["412W", "419S(lo)", "HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Burster",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["415SW(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Slayer",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["404SW", "Cavernous Abyss(top)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Evildoer",
    "species": "Marnuck",
    "continent": "Sylvalum",
    "location": ["412SE", "416", "HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Milsaadi Executioner",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": [
      "HiralFort",
      "Badr Stronghold",
      "Den of the Dead",
      "Behemoth's Shadows"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Specter",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Badul, the One-Eyed",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 409NW"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Hitman",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Champion",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Lyla, the Lustrous",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["Den of the Dead"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Herald",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["415SW(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Astran",
    "species": "Milsaadi",
    "continent": "Sylvalum",
    "location": ["Quay Hollows", "Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Mountain Sylooth",
    "species": "Sylooth",
    "continent": "Sylvalum",
    "location": ["419SE(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Territorial Sylooth",
    "species": "Sylooth",
    "continent": "Sylvalum",
    "location": ["S.MagicMt"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Anselm, the Triumphant",
    "species": "Sylooth",
    "continent": "Sylvalum",
    "location": ["419(wanders)"],
    "minLevel": "58",
    "maxLevel": "58",
    "weaponBrand": "SA",
    "weaponWeight": "H",
    "materials": [
      "White Fungal Egg",
      "Distilled Sap",
      "Quality Giant Cells",
      "Blue Sylooth Brace",
      "White Sylooth Brace",
      "Black Sylooth Brace",
      "Gold Sylooth Brace",
      "Sylooth Tonic Water"
    ],
    "droppedSource": [
      "All",
      "All",
      "Back, Hip",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Arms, Legs, Hips, Back, Exposed Back",
      "Exposed Back"
    ]
  },
  {
    "name": "Brutal Prone",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["[NM] Predator and Prey"],
    "minLevel": "30",
    "maxLevel": "31",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Soldier",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Commander",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Beta",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Alpha",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Vix Delta",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Prone Sorceror",
    "species": "Prone",
    "continent": "Sylvalum",
    "location": ["Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "GG",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "SG002: Slenna",
    "species": "Definian",
    "continent": "Sylvalum",
    "location": ["[NM] Good Fortun"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Wrothian Enacter",
    "species": "Wrothian",
    "continent": "Sylvalum",
    "location": ["Chapter 9"],
    "minLevel": "32",
    "maxLevel": "32",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Wrothian Sneaker",
    "species": "Wrothian",
    "continent": "Sylvalum",
    "location": ["Chapter 9"],
    "minLevel": "32",
    "maxLevel": "32",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Ga Jiarg",
    "species": "Wrothian",
    "continent": "Sylvalum",
    "location": ["Chapter 9"],
    "minLevel": "34",
    "maxLevel": "34",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Ga Buidhe",
    "species": "Wrothian",
    "continent": "Sylvalum",
    "location": ["Chapter 9"],
    "minLevel": "33",
    "maxLevel": "33",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Vasara",
    "species": "Vasara",
    "continent": "Sylvalum",
    "location": ["Chapter 9", "Time Attack"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "Zu Pharg",
    "species": "Zu Pharg",
    "continent": "Sylvalum",
    "location": ["Chapter 10"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": ""
  },
  {
    "name": "Knight Puge",
    "species": "Puge",
    "continent": "Sylvalum",
    "location": ["404NE", "406NE", "413N", "416", "HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Guardian Puge",
    "species": "Puge",
    "continent": "Sylvalum",
    "location": [
      "404NE",
      "412N",
      "415NW(hi)",
      "HiralFort",
      "Badr Stronghold"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Luminous Puge",
    "species": "Puge",
    "continent": "Sylvalum",
    "location": ["415SW(hi)", "Cavernous Abyss"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Dagger Pugilith",
    "species": "Pugilith",
    "continent": "Sylvalum",
    "location": ["403"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Knight Pugilith",
    "species": "Pugilith",
    "continent": "Sylvalum",
    "location": ["406NE", "413N", "416", "HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Guardian Pugilith",
    "species": "Pugilith",
    "continent": "Sylvalum",
    "location": ["412W", "Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "High-Output Pugilith",
    "species": "Pugilith",
    "continent": "Sylvalum",
    "location": ["406", "Badr Stronghold"],
    "minLevel": "47",
    "maxLevel": "47",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Lyla's Galdr",
    "species": "Galdr",
    "continent": "Sylvalum",
    "location": ["[5:00~7:00]: 419(lo)"],
    "minLevel": "55",
    "maxLevel": "55",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Green Lance Galdr",
    "species": "Galdr",
    "continent": "Sylvalum",
    "location": [
      "404NE(hi) Lesser Anvil[?]",
      "Cavernous Abyss peak(finicky)"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Green Master Galdr",
    "species": "Galdr",
    "continent": "Sylvalum",
    "location": ["415SW(hi)", "412N Anvil Rock One", "Badr Stronghold(air)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Red Master Galdr",
    "species": "Galdr",
    "continent": "Sylvalum",
    "location": ["410S(air)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Magna Galdr",
    "species": "Galdr",
    "continent": "Sylvalum",
    "location": ["410S(air)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Machine Rook Quo",
    "species": "Quo",
    "continent": "Sylvalum",
    "location": ["418SW", "Badr Stronghold"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Machine Queen Quo",
    "species": "Quo",
    "continent": "Sylvalum",
    "location": [
      "404NE(hi)",
      "407S",
      "412W(hi)/N",
      "415NW(hi)",
      "416NW",
      "420NW(lo)",
      "Badr Stronghold"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Machine King Quo",
    "species": "Quo",
    "continent": "Sylvalum",
    "location": [
      "415SW(hi)",
      "Badr Stronghold(air)",
      "Anvils",
      "Abysscave",
      "Banshee Cave"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Border King Quo",
    "species": "Quo",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Titanium Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": [
      "407NE",
      "410",
      "412N",
      "415",
      "Quay Hollows",
      "Abysssum",
      "Banshee Cave"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Oc-serv, the Ancient",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": ["420S(lo)"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Tellurium Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": ["403N"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Niobium Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": ["416"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Thallium Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": [
      "404NE",
      "412(hi)",
      "418S",
      "420NW(lo)",
      "412N Anvil Rock One",
      "HiralFort",
      "Badr Stronghold"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Bismuth Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": ["404"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Reject Oc-serv",
    "species": "Oc-serv",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Talon Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["HiralFort"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Palace King Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["410SE(lo)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Multi Rook Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["404NE", "412W(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Multi Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["404NE", "407S", "412SW", "415SW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Suppressor Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["407NE", "420NW(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "War Kaizer Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["407E(lo)", "410S(air)"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Sadar's Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["[5:00~19:00]: 419SW(lo)"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Striker Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["415NW(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "True King Qmoeva",
    "species": "Qmoeva",
    "continent": "Sylvalum",
    "location": ["Anvils"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Deva Caladar",
    "species": "Caladar",
    "continent": "Sylvalum",
    "location": ["Chapter 9", "Time Attack"],
    "minLevel": "34",
    "maxLevel": "34",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Caladar",
    "species": "Caladar",
    "continent": "Sylvalum",
    "location": ["Chapter 9", "Time Attack"],
    "minLevel": "33",
    "maxLevel": "33",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Sazon Caladar",
    "species": "Caladar",
    "continent": "Sylvalum",
    "location": ["[NM] Leaving the Nest"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Sogu Caladar",
    "species": "Caladar",
    "continent": "Sylvalum",
    "location": ["[NM] Leaving the Nest"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "De Ezich",
    "species": "Caladar",
    "continent": "Sylvalum",
    "location": ["[NM] Leaving the Nest"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Enhanced Defense Seidr",
    "species": "Seidr",
    "continent": "Sylvalum",
    "location": ["410S(air)"],
    "minLevel": "59",
    "maxLevel": "59",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Badul's Seidr",
    "species": "Seidr",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: Cavernous Abyss (top)"],
    "minLevel": "61",
    "maxLevel": "61",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Ahama's Seidr",
    "species": "Seidr",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 415SW(hi)"],
    "minLevel": "84",
    "maxLevel": "84",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Luxaar's Xern",
    "species": "Xern",
    "continent": "Sylvalum",
    "location": ["410S(air)"],
    "minLevel": "90",
    "maxLevel": "90",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Hazard Shrad",
    "species": "Shrad",
    "continent": "Sylvalum",
    "location": ["Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Avaricious Shrad",
    "species": "Shrad",
    "continent": "Sylvalum",
    "location": ["412N Anvil Rock One"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Du-rha, the Imprisoned",
    "species": "Xe-dom",
    "continent": "Sylvalum",
    "location": ["Quay Hollows"],
    "minLevel": "74",
    "maxLevel": "74",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Molybdenum Xe-dom",
    "species": "Xe-dom",
    "continent": "Sylvalum",
    "location": ["401E", "412SW/NE", "417N (wanders)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Bismuth Xe-dom",
    "species": "Xe-dom",
    "continent": "Sylvalum",
    "location": ["405E(wanders)", "415SW"],
    "minLevel": "51",
    "maxLevel": "99",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Assault Barrager Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["416"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Assault Gunner Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["404NE(hi)", "406NE", "Badr Stronghold"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Assault Launcher Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["413(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Damaged Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["409NW(hi)"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Vulcan Barrager Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["HiralFort"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Vulcan Cannon Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["415NW(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Vulcan Launcher Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": [
      "404NE(hi)",
      "405(hi)",
      "407NW(hi)",
      "409(hi)",
      "415SW/NW(hi)"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Howitzer Gunner Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["418S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Howitzer Launcher Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": [
      "401(hi)",
      "410(hi)",
      "414S",
      "420N",
      "S.MagicMt",
      "Cavernous Abyss"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Barrager Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["416", "420"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Launcher Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["410(hi)", "415SW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Frontline Surveillance Zig",
    "species": "Zig",
    "continent": "Sylvalum",
    "location": ["Isle(NW 404)"],
    "minLevel": "74",
    "maxLevel": "74",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Rubidium Fal-swo",
    "species": "Fal-swo",
    "continent": "Sylvalum",
    "location": ["403S", "416S"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Thallium Fal-swo",
    "species": "Fal-swo",
    "continent": "Sylvalum",
    "location": ["410S(air)", "Anvils"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Stainless Fal-swo",
    "species": "Fal-swo",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: 405NE(hi)", "412S"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Tellurium Fal-swo",
    "species": "Fal-swo",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: N.MagicMt"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Ga-uhl, the Precept-Keeper",
    "species": "Fal-swo",
    "continent": "Sylvalum",
    "location": ["[19:00~5:00]: Badr Stronghold(air)"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Lightning Strike",
    "species": "Human-Made Skell",
    "continent": "Sylvalum",
    "location": ["[NM] The Line of Fire"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": ""
  },
  {
    "name": "Dolba the Wrecker",
    "species": "Human-Made Skell",
    "continent": "Sylvalum",
    "location": ["[NM] Professorial"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": ""
  },
  {
    "name": "Interfearance",
    "species": "Human-Made Skell",
    "continent": "Sylvalum",
    "location": ["[AM] Serial Thriller"],
    "minLevel": "57",
    "maxLevel": "57",
    "weaponBrand": ""
  },
  {
    "name": "Harvey",
    "species": "BLADE",
    "continent": "Sylvalum",
    "location": ["[NM] Special Delivery"],
    "minLevel": "18",
    "maxLevel": "18",
    "weaponBrand": ""
  },
  {
    "name": "Gadd",
    "species": "BLADE",
    "continent": "Sylvalum",
    "location": ["[NM] Professorial"],
    "minLevel": "19",
    "maxLevel": "19",
    "weaponBrand": ""
  },
  {
    "name": "Pharsis, the Everqueen",
    "species": "Yggralith",
    "continent": "Sylvalum",
    "location": ["Noctilucent Sphere Interior"],
    "minLevel": "97",
    "maxLevel": "97",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Silver Yggralith Nut",
      "Golden Yggralith Nut",
      "Golden Yggralith Heart",
      "Noble Yggralith Scale",
      "Yggralith Gold",
      "Black Yggralith Nut",
      "Black Yggralith Scale",
      "Yggralith Horn",
      "White Yggralith Nut",
      "White Yggralith Scale",
      "Yggralith Recovery Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Awarded to party for reducing RP to 0",
      "Awarded for Appraisals",
      "Random Appendage Fragment after Nemesis is Beaten",
      "All",
      "All",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Lava Caro",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["502", "Titan's Table"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Deadland Caro",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["502E", "M'gandobaseN"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Kringe, the Hunting Arrow",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["504NW"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Spaniel, the Obedient",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["[5:00~0:00]: 511NW"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Legion Caro",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["[5:00~0:00]: 511NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Arc Caro",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["511/NW", "Wildcat Fortress"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Lost Caro",
    "species": "Caro",
    "continent": "Cauldros",
    "location": ["Old Ceremonial Hollow", "Bestial Utopia"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Taut Leather",
      "Slimy Tongue",
      "Shiny Copper Caro Plate",
      "Shiny Silver Caro Plate",
      "Shiny Black Caro Plate",
      "Caro Tail Light",
      "Pure White Caro Tusk"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Head Plate & Exposed Head",
      "Tail",
      "All"
    ]
  },
  {
    "name": "Volcannon Vigent",
    "species": "Vigent",
    "continent": "Cauldros",
    "location": ["503SE", "504NE", "509SE", "Kitsune Stronghold"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Vainamo, the Bellower",
    "species": "Vigent",
    "continent": "Cauldros",
    "location": ["511N"],
    "minLevel": "39",
    "maxLevel": "39",
    "weaponBrand": "GG",
    "weaponWeight": "H",
    "materials": [
      "Rugged Skin",
      "Warrior Race's Seal",
      "Quality Vigent Claw",
      "Red Vigent Rock Scalp",
      "Blue Vigent Rock Scalp",
      "Black Vigent Rock Scalp",
      "Vigent Blood"
    ],
    "droppedSource": [
      "All",
      "All",
      "Foreclaws, Feet",
      "Head Plate",
      "Head Plate",
      "Head Plate",
      "Exposed Head"
    ]
  },
  {
    "name": "Toy Monoceros",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["505NW"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Monoceros Colt",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["502", "503(hi)", "512NW"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Uluora, the Burgeoning",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["503(hi)"],
    "minLevel": "22",
    "maxLevel": "22",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Cliff Monoceros",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["502", "515NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Land Monoceros",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["512NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Volcannon Monoceros",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["M'gandobaseE"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Dawid, the Destrier",
    "species": "Monoceros",
    "continent": "Cauldros",
    "location": ["503(hi)"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Worn Muscle Fiber",
      "Slender Horn",
      "Monoceros Wing",
      "Gold Monoceros Horn",
      "Green Monoceros Horn",
      "Brown Monoceros Horn",
      "Monoceros Hoof Hook"
    ],
    "droppedSource": ["All", "All", "Wings", "Horn", "Horn", "Horn", "All"]
  },
  {
    "name": "Grand Cantor",
    "species": "Cantor",
    "continent": "Cauldros",
    "location": ["502E", "504NW", "M'gandopeak"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Muscled Cantor Bulge",
      "Silver Cantor Tooth",
      "Golden Cantor Tooth",
      "Luminescent Tail",
      "Hidden Cantor Hoard"
    ],
    "droppedSource": ["All", "All", "Hands", "Head", "Head", "Tail", "All"]
  },
  {
    "name": "Conjurer Cervus",
    "species": "Cervus",
    "continent": "Cauldros",
    "location": ["Bestial Utopia"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "GG",
    "weaponWeight": "L",
    "materials": [
      "Supple Leather",
      "Large Hoof",
      "Amber Cervus Antlers",
      "Purple Cervus Antlers",
      "Longevity Bough",
      "Lucky Cervus Sapling"
    ],
    "droppedSource": ["All", "All", "Horns", "Horns", "Back", "All"]
  },
  {
    "name": "Cowardly Caecus",
    "species": "Caecus",
    "continent": "Cauldros",
    "location": ["503E"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Thug Caecus",
    "species": "Caecus",
    "continent": "Cauldros",
    "location": ["502N(hi)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Precipice Caecus",
    "species": "Caecus",
    "continent": "Cauldros",
    "location": ["508SW", "509(hi)", "511"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Land Caecus",
    "species": "Caecus",
    "continent": "Cauldros",
    "location": ["508SW", "511"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Pelicollo, the Panzer",
    "species": "Caecus",
    "continent": "Cauldros",
    "location": ["508SW"],
    "minLevel": "36",
    "maxLevel": "36",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Slimy Epithelium",
      "Squishy Cartilage",
      "Bone-in-Thigh Meat",
      "Caecus Crest",
      "Black Meaty Caecus Liver",
      "White Meaty Caecus Liver",
      "Raw Meaty Caecus Liver"
    ],
    "droppedSource": ["All", "All", "Posterior", "Head", "All", "All", "All"]
  },
  {
    "name": "Burst Jacul",
    "species": "Jacul",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "509(skywalk)", "isleWof501"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Storm Jacul",
    "species": "Jacul",
    "continent": "Cauldros",
    "location": ["503SE", "M'gando/E(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Tornado Jacul",
    "species": "Jacul",
    "continent": "Cauldros",
    "location": ["507", "M'gando/E(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Jia Mian, the Beloved",
    "species": "Jacul",
    "continent": "Cauldros",
    "location": ["M'gandoE(hi)"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Filthy Wing",
      "Cracked Bill",
      "Blue Jacul Wing",
      "Green Jacul Wing",
      "Jacul Horn",
      "Jacul Waterfall Orb",
      "Fertilized Auravis Egg"
    ],
    "droppedSource": ["All", "All", "Back", "Back", "Horn", "Tail", "All"]
  },
  {
    "name": "Silent Murra",
    "species": "Murra",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Supple Leather",
      "Black Fog Deposits",
      "Brilliant Murra Liquid",
      "Multicolour Murra Wing"
    ],
    "droppedSource": ["All", "All", "Head", "All"]
  },
  {
    "name": "Lawless Mephite",
    "species": "Mephite",
    "continent": "Cauldros",
    "location": ["502NE", "504(hi)", "blackgate"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Evil Mephite",
    "species": "Mephite",
    "continent": "Cauldros",
    "location": ["511", "Kw'arah Cloister"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Fleecy Fur",
      "Lightweight Pelt",
      "Mephite Ear Hair",
      "Green Puff",
      "Black Puff",
      "Golden Puff",
      "Mephite Stinkbag"
    ],
    "droppedSource": ["All", "All", "Ears", "Tail", "Tail", "Tail", "All"]
  },
  {
    "name": "Strange Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: 502SE"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Gypsy Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: 509SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Island Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: 505NW(replaces Rust Blatta)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Crest Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: M'gandoE(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Cloud Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Rainbow]: M'gandoE(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Zorn, the Wanderer",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Rainbow]: Old Ceremonial Hollow"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Loser Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: randomly replaces Strange Saltats"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Dim Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: randomly replaces Strange Saltats"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Cage Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: randomly replaces Gypsy Saltats"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Crater Saltat",
    "species": "Saltat",
    "continent": "Cauldros",
    "location": ["[Clear]: randomly replaces Gypsy Saltats"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SS",
    "weaponWeight": "L",
    "materials": [
      "Filthy Wing",
      "Vibrant Plume",
      "Glossy Saltat Fan",
      "Golden Jewel",
      "Demonic Jewel",
      "Sky Jewel",
      "Galaxial Jewel",
      "Saltat Horn"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wing",
      "Jewel",
      "Jewel",
      "Jewel",
      "Jewel",
      "All"
    ]
  },
  {
    "name": "Companion Potamus",
    "species": "Potamus",
    "continent": "Cauldros",
    "location": ["502NE", "503SE", "509(hi)", "Ganglion Antropolis"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Rodriguez, the Twin-Tusked",
    "species": "Potamus",
    "continent": "Cauldros",
    "location": ["503E"],
    "minLevel": "35",
    "maxLevel": "35",
    "weaponBrand": "SA",
    "weaponWeight": "B",
    "materials": [
      "Muddy Pelt",
      "Succulent Meat",
      "Hulking Incisor",
      "Murky Potamus Water",
      "Hot Potamus Juice",
      "Potamus Life Lung"
    ],
    "droppedSource": ["All", "All", "Mouth", "Humps", "Humps", "All"]
  },
  {
    "name": "Volcannon Tersqual",
    "species": "Tersqual",
    "continent": "Cauldros",
    "location": ["504E", "506", "512NW(lo)", "Sunset Falls"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SS",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Juicy Wild Meat",
      "Brilliant Tersqual Liquid",
      "Tersqual Eel Kebab",
      "Tersqual Fire Pouch",
      "Electric Tersqual Tear"
    ],
    "droppedSource": ["All", "All", "Back", "Head, Tail", "All", "All"]
  },
  {
    "name": "Agnes, the Divine-Scaled",
    "species": "Tersqual",
    "continent": "Cauldros",
    "location": ["506S"],
    "minLevel": "67",
    "maxLevel": "67",
    "weaponBrand": "SS",
    "weaponWeight": "M",
    "materials": [
      "Rough Skin",
      "Juicy Wild Meat",
      "Brilliant Tersqual Liquid",
      "Tersqual Eel Kebab",
      "Tersqual Fire Pouch",
      "Electric Tersqual Tear"
    ],
    "droppedSource": ["All", "All", "Back", "Head, Tail", "All", "All"]
  },
  {
    "name": "Thulium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["501S"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Samarium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["508SW", "509(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Gadolinium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["504SW(hi)", "508SW", "Sunset Falls", "Kw'arah Cloister"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Erbium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["509SE", "M'gando"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Eisen, the Ebon Rock",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 509NW"],
    "minLevel": "51",
    "maxLevel": "51",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Praseodymium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["Old Ceremonial Hollow"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Truppe, the Ceaseless Dark",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: Old Ceremonial Hollow"],
    "minLevel": "53",
    "maxLevel": "53",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Dysprosium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["505", "506", "Infernal Ledges"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Terbium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["506", "Sunset Falls"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Lutetium Petramand",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["509NW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Piernus, the Scorcher",
    "species": "Petramand",
    "continent": "Cauldros",
    "location": ["[5:00~19:00]: 509NW"],
    "minLevel": "57",
    "maxLevel": "57",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Cracked Claw",
      "Iron Lump",
      "Ornate Petramand Claw",
      "Gray Shell",
      "Golden Petramand Silk",
      "Silver Petramand SIlk",
      "Malevolent Petramand SIlk",
      "Black Petramand SIlk",
      "Rainbow Metal"
    ],
    "droppedSource": [
      "All",
      "All",
      "Claw",
      "Head",
      "Sac",
      "Sac",
      "Sac",
      "Sac",
      "All"
    ]
  },
  {
    "name": "Lava Cinicula",
    "species": "Cinicula",
    "continent": "Cauldros",
    "location": ["M'gandobaseE"],
    "minLevel": "40",
    "maxLevel": "50",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Calore, the Lava Walker",
    "species": "Cinicula",
    "continent": "Cauldros",
    "location": ["503S(lo)"],
    "minLevel": "62",
    "maxLevel": "62",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Volcannon Cinicula",
    "species": "Cinicula",
    "continent": "Cauldros",
    "location": ["506", "Titan's Table(lo)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Gooey Gunge",
      "Refined Horn",
      "Cinicula Shell",
      "Giant Cinicula Jaw",
      "Thick Cinicula Horn",
      "Honey Oil",
      "Maple Oil",
      "Coconut Oil",
      "Melon Oil"
    ],
    "droppedSource": [
      "All",
      "All",
      "Abdomen, Tail",
      "Head",
      "Horn, Back Spines",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point",
      "Head, Weak Point"
    ]
  },
  {
    "name": "Yellow Arenatect",
    "species": "Arenatect",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Blue Fungi",
      "Luminescent Antenna",
      "Arenatect Shell",
      "Eternal Arenatect Moss",
      "Emerald Whiskey",
      "Red Brandy"
    ],
    "droppedSource": [
      "All",
      "All",
      "Antenna",
      "Head",
      "Back",
      "Underbelly",
      "Underbelly"
    ]
  },
  {
    "name": "Prinsipe, the Ravenous",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 507NW - Mining Frigate"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Camus, the Treasured",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["Bestial Utopia"],
    "minLevel": "46",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Natt, the Inestimable",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["507"],
    "minLevel": "41",
    "maxLevel": "45",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Flume Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["502E", "Titan's Table(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Seeker Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["M'gandobaseE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Sonic Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["507NW/(skywalk)", "509SE", "M'gando"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Coal Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 507"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Vampire Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["504", "506", "508WSW", "515NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Hellion Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["504", "506", "507"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Mirror Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["Bestial Utopia"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Rust Blatta",
    "species": "Blatta",
    "continent": "Cauldros",
    "location": ["[×Clear]: 505NW"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Black Blatta Wing",
      "Red Blatta Wing",
      "Green Blatta Wing",
      "Silver Blatta Wing",
      "Golden Blatta Wing",
      "Medicinal Blatta Oil\r"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "Wings",
      "All\r"
    ]
  },
  {
    "name": "Adonis Turba",
    "species": "Turba",
    "continent": "Cauldros",
    "location": ["507", "509(skywalk)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "Sk",
    "materials": [
      "Broken Antenna",
      "Musky Nectar",
      "Poisonous Needle",
      "Turba Straw",
      "Turba Nectar",
      "Black Turba Nectar"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Mirage Adsecula",
    "species": "Adsecula",
    "continent": "Cauldros",
    "location": ["M'gandobaseE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "H",
    "materials": [
      "Tatty Insect Wing",
      "Small Insect Leg",
      "Poisonous Needle",
      "Adsecula Straw",
      "Adsecula Gold Nugget",
      "Adsecula Oil Drop"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Dry Papil",
    "species": "Papil",
    "continent": "Cauldros",
    "location": ["509(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "M",
    "materials": [
      "Viscous Humour",
      "Musky Nectar",
      "Poisonous Needle",
      "Papil Straw",
      "Alluring Papil Scales",
      "Flowering Papil Scales"
    ],
    "droppedSource": ["All", "All", "Stinger", "Mouth", "All", "All"]
  },
  {
    "name": "Crazed Germivore",
    "species": "Germivore",
    "continent": "Cauldros",
    "location": ["516"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Mist Germivore",
    "species": "Germivore",
    "continent": "Cauldros",
    "location": ["509(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Sticky Mucus",
      "Insect Jaw",
      "Flowering Germivore Scales",
      "Shed Germivore Scales",
      "Sharp Germivore Jaw"
    ],
    "droppedSource": ["All", "All", "Posterior", "Posterior", "All"]
  },
  {
    "name": "Warlord Ictus",
    "species": "Ictus",
    "continent": "Cauldros",
    "location": ["509(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Daimyo Ictus",
    "species": "Ictus",
    "continent": "Cauldros",
    "location": ["M'Gando - Outside the Bestial Utopia entrance"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Terenty, the Blademaster",
    "species": "Ictus",
    "continent": "Cauldros",
    "location": ["M'gandobaseW"],
    "minLevel": "72",
    "maxLevel": "72",
    "weaponBrand": "SA",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Pristine Insect Jaw",
      "Ictus Shell",
      "Lone White Ictus Stinger",
      "Lone Purple Ictus Stinger",
      "Lone Red Ictus Stinger"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail",
      "Stingers",
      "Stingers",
      "Stingers"
    ]
  },
  {
    "name": "Bluff Gerrid",
    "species": "Gerrid",
    "continent": "Cauldros",
    "location": ["504SE", "506"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Land Gerrid",
    "species": "Gerrid",
    "continent": "Cauldros",
    "location": ["504", "506"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Bartley, the Conflagration",
    "species": "Gerrid",
    "continent": "Cauldros",
    "location": ["504SE"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": "ME",
    "weaponWeight": "L",
    "materials": [
      "Lead Carapace",
      "Active Cells",
      "Odorous Tentacle",
      "Gerrid Navel",
      "Gerrid Shell",
      "Clear Gerrid Soup",
      "Cloudy Gerrid Soup"
    ],
    "droppedSource": [
      "All",
      "All",
      "Tentacles",
      "Torso",
      "Back",
      "All",
      "All"
    ]
  },
  {
    "name": "Aquatic Sacrifole",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["515"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Puddle Sacrifole",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["502E", "515NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Foul Sacrifole",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["Bestial Utopia"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Angelita, the Blade Bouquet",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["M'gandopeak"],
    "minLevel": "61",
    "maxLevel": "61",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Lava Sacrifole",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["505"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Vegetal, the Heatcrux",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["506"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Volcannon Sacrifole",
    "species": "Sacrifole",
    "continent": "Cauldros",
    "location": ["[5:00~19:00]: 503SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "OR",
    "weaponWeight": "L",
    "materials": [
      "Scratched Jewel",
      "Shimmering Silk",
      "Azure Sacrifole Feather",
      "Silver Sacrifole Feather",
      "Crimson Sacrifole Feather",
      "Spicy Sacrifole Pollen",
      "Diamond Seed"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head (Both)",
      "Head (Both)",
      "Head (Both)",
      "Head (Second Pair of Feathers)",
      "All"
    ]
  },
  {
    "name": "Nipopon Incarnate",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["[NM] The Divine Nopopon"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": "",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Flame Lophid",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["505"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Blast Lophid",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["504E", "506"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Izgnanie, the Smoldering",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["508E"],
    "minLevel": "64",
    "maxLevel": "64",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Blazing Lophid",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Gehenna Lophid",
    "species": "Lophid",
    "continent": "Cauldros",
    "location": ["504", "506"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "L",
    "materials": [
      "Smelly Fish Meat",
      "Quirky Liver",
      "Lophid Jaw Meat",
      "Spiked Tail Fin",
      "Alluring Lophid Extract",
      "Blinding Lophid Extract",
      "Large Lophid Liver"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Tail",
      "Lantern",
      "Lantern",
      "Abdomen"
    ]
  },
  {
    "name": "Blitz Scintimure",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["504SW(lo)", "Titan's Table(lo)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Thunder Scintimure",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["504SW(lo)", "Titan's Table(lo)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Eddy, the Electric Heat",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["Titan's Table(lo)"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Coil, the Neverending",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["[EMStorm]: 504E(skywalk)"],
    "minLevel": "55",
    "maxLevel": "55",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Rain Scintimure",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["[EMStorm]: 504E(skywalk)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Storm Scintimure",
    "species": "Scintimure",
    "continent": "Cauldros",
    "location": ["[EMStorm]: 509(skywalk)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "CC",
    "weaponWeight": "M",
    "materials": [
      "Small Dorsal Fin",
      "Pristine Spicule",
      "Scintimure Fat",
      "Red Scintimure Tentacle",
      "Black Scintimure Tentacle",
      "White Scintimure Tentacle",
      "Purple Scintimure Tentacle",
      "Rich Scintimure Meat"
    ],
    "droppedSource": [
      "All",
      "All",
      "Head, Tail, Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tentacle",
      "Tail, Head, Tentacle"
    ]
  },
  {
    "name": "Valiant Ceto",
    "species": "Ceto",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 503"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Vanguard Ceto",
    "species": "Ceto",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: isleSEof507"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Polaris, the Firmamental",
    "species": "Ceto",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 505N(air)"],
    "minLevel": "63",
    "maxLevel": "63",
    "weaponBrand": "ME",
    "weaponWeight": "H",
    "materials": [
      "Fatty Fish Belly",
      "Tasty Fish Belly",
      "Large Saw Tooth",
      "Pink Ceto Membrane",
      "Gold Ceto Membrane",
      "Unlucky Black Whisker",
      "Ceto Roe"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mouth",
      "Sonar",
      "Sonar",
      "Whiskers",
      "Posterior"
    ]
  },
  {
    "name": "Vortice, the Deific Blast",
    "species": "Colubrium",
    "continent": "Cauldros",
    "location": ["[Brimstone Rain]: M'gandopeak(air)"],
    "minLevel": "94",
    "maxLevel": "94",
    "weaponBrand": "OR",
    "weaponWeight": "H"
  },
  {
    "name": "Coast Visigel",
    "species": "Visigel",
    "continent": "Cauldros",
    "location": ["515"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Cave Visigel",
    "species": "Visigel",
    "continent": "Cauldros",
    "location": ["Infernal Ledges"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Razer Visigel",
    "species": "Visigel",
    "continent": "Cauldros",
    "location": ["isleSEof507"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Poppy, the Pyromaniac",
    "species": "Visigel",
    "continent": "Cauldros",
    "location": ["Infernal Ledges"],
    "minLevel": "36",
    "maxLevel": "36",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Sizzling Visigel",
    "species": "Visigel",
    "continent": "Cauldros",
    "location": ["505"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Opaque Membrane",
      "Glowing Retina",
      "Brilliant Visigel Liquid",
      "Visigel Waterfall Orb",
      "Visigel Poison Orb"
    ],
    "droppedSource": ["All", "All", "Head", "All", "All"]
  },
  {
    "name": "Phosphorous Filiavent",
    "species": "Filiavent",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Mollusk Mucus",
      "Quality Skin",
      "Red Filiavent Tentacle",
      "Black Filiavent Tentacle",
      "Giant Protein",
      "Filiavent Intestine"
    ],
    "droppedSource": ["All", "All", "Tentacles", "Tentacles", "Mouth", "All"]
  },
  {
    "name": "Trueno, the Cataclysm",
    "species": "Filiavent",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "CC",
    "weaponWeight": "H",
    "materials": [
      "Mollusk Mucus",
      "Quality Skin",
      "Red Filiavent Tentacle",
      "Black Filiavent Tentacle",
      "Giant Protein",
      "Filiavent Intestine"
    ],
    "droppedSource": ["All", "All", "Tentacles", "Tentacles", "Mouth", "All"]
  },
  {
    "name": "Duran, the Draconian",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["[5:00~0:00]: 511NW"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Berserker Marnuck",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["O'rrh Sim Castle Ruins"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Slugger",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["507N", "Wildcat Fortress", "O'rrh Simrim"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Hornet",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["503S", "511"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Grappler",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["502E(night)", "503SE", "Boxtrap Checkpoint"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Blaster",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["502", "505NW", "511NW", "512NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Minor",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["503SE", "Wildcat Fortress"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Soldier",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["502(hi)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Imperial",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["O'rrh Sim Gate/Castle Ruins", "O'rrh Sim Keep"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Gatling",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": [
      "504E(skywalk)",
      "507",
      "516SW",
      "Kitsune Stronghold",
      "isleSEof507",
      "Old Ceremonial Hollow",
      "Ganglion Antropolis"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Pulser",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": [
      "504E(skywalk)",
      "Kitsune Stronghold",
      "Old Ceremonial Hollow"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Dynamo",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["516SW", "Bestial Utopia", "Ganglion Antropolis"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Transitioner",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["511NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Barrager",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["502(hi)", "isleWof501", "isleSEof507"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Pawn",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": ["501"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Marnuck Aspirer",
    "species": "Marnuck",
    "continent": "Cauldros",
    "location": [
      "502",
      "503SE",
      "505E(hi)509(hi)",
      "blackgate",
      "Boxtrap Checkpoint",
      "O'rrh Simgate"
    ],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Broken Buckle",
      "Fine Transparent Belt",
      "Fine White Belt",
      "Fine Red Belt",
      "Combat Boost Meds",
      "Windtrooper"
    ],
    "droppedSource": ["All", "All", "All", "All", "Back", "Evildoer"]
  },
  {
    "name": "Milsaadi Fighter",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": ["515", "Kw'arah Cloister"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Hunter",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": [
      "504E(skywalk)",
      "Sunset Falls",
      "Kw'arah Cloister",
      "O'rrh Sim Keep"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Assassin",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": [
      "Kitsune Stronghold",
      "M'gando/NW(hi)",
      "Ganglion Antropolis"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Sharnaak, the Technician",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: M'gando"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Rampager",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "512NW"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Milsaadi Savage",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": [
      "507",
      "Kitsune Stronghold",
      "M'gando",
      "Ganglion Antropolis"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Chantai, the Insect Maiden",
    "species": "Milsaadi",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 509(skywalk)"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Dirty Cloth",
      "Parasitic Capsule",
      "Red Milsaadi Hood",
      "Blue Milsaadi Hood"
    ],
    "droppedSource": ["All", "All", "Hood", "Hood"]
  },
  {
    "name": "Gaia Gularth",
    "species": "Gularth",
    "continent": "Cauldros",
    "location": ["[×Brimstone Rain]: 504", "Titan's Table"],
    "minLevel": "51",
    "maxLevel": "80",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Flaming Rock",
      "Lava Crystal",
      "Scorching Giant Cells",
      "Gularthian Flint",
      "Gularthian Everflame"
    ],
    "droppedSource": ["All", "All", "Back", "Legs", "Weak Point"]
  },
  {
    "name": "Ilithios, the Enlightened",
    "species": "Gularth",
    "continent": "Cauldros",
    "location": ["[×Brimstone Rain]: Sunset Falls"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Flaming Rock",
      "Lava Crystal",
      "Scorching Giant Cells",
      "Gularthian Flint",
      "Gularthian Everflame"
    ],
    "droppedSource": ["All", "All", "Back", "Legs", "Weak Point"]
  },
  {
    "name": "Alithios, the Indignant",
    "species": "Gularth",
    "continent": "Cauldros",
    "location": ["[Brimstone Rain]: M'gandopeak"],
    "minLevel": "81",
    "maxLevel": "81",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Flaming Rock",
      "Lava Crystal",
      "Scorching Giant Cells",
      "Gularthian Flint",
      "Gularthian Everflame"
    ],
    "droppedSource": ["All", "All", "Back", "Legs", "Weak Point"]
  },
  {
    "name": "Ymir Gularth",
    "species": "Gularth",
    "continent": "Cauldros",
    "location": ["[Brimstone Rain]: (replaces Gaia Gularth)"],
    "minLevel": "51",
    "maxLevel": "80",
    "weaponBrand": "SS",
    "weaponWeight": "H",
    "materials": [
      "Flaming Rock",
      "Lava Crystal",
      "Scorching Giant Cells",
      "Gularthian Flint",
      "Gularthian Everflame"
    ],
    "droppedSource": ["All", "All", "Back", "Legs", "Weak Point"]
  },
  {
    "name": "HH100: Hierana",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[NM] Mia is Missing!"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "ER001: Emeroa",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[NM] Definian Downfall"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "HP001: Harriess",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[NM] Definian Downfall"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "JD001: Juda",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[NM] Definian Downfall"],
    "minLevel": "38",
    "maxLevel": "38",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "MO037: Moore",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[NM] The Duel (Part IV)"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "ST816: Stalio",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[AM] Bozé's Ignorance"],
    "minLevel": "44",
    "maxLevel": "44",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Definian Copy",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["504E(skywalk) finnicky spawn"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Definian Clone",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["501(hi)", "Ganglion Antropolis"],
    "minLevel": "51",
    "maxLevel": "70",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "WR512: Urdu",
    "species": "Definian",
    "continent": "Cauldros",
    "location": ["[5:00~19:00]: Ganglion Antropolis"],
    "minLevel": "62",
    "maxLevel": "62",
    "weaponBrand": "ME",
    "weaponWeight": "M",
    "materials": ["Broken Buckle", "Fine Black Belt"],
    "droppedSource": ["All", "All"]
  },
  {
    "name": "Sentinel Satellis",
    "species": "Vita",
    "continent": "Cauldros",
    "location": ["Summoned by Leva'el"],
    "minLevel": "51",
    "maxLevel": "90",
    "weaponBrand": ""
  },
  {
    "name": "Rexoskell",
    "species": "Rexoskell",
    "continent": "Cauldros",
    "location": ["[NM] Definian Downfall", "Time Attack"],
    "minLevel": "54",
    "maxLevel": "54",
    "weaponBrand": "",
    "materials": [
      "Eerie Lightning Tentacle",
      "Creare Glyph",
      "Rexoskell Sucker"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Night Combat Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: 505(hi)"],
    "minLevel": "34",
    "maxLevel": "34",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Gate Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["501"],
    "minLevel": "1",
    "maxLevel": "10",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Porter Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["502N(hi)"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Fighter Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["502(hi)", "White Phosphor Lake"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Cavalier Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["505(hi)/NW", "508W", "511NW"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Solid Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["504/E(skywalk)", "507N", "508W"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Coffin Puge",
    "species": "Puge",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "507", "516SW", "Old Ceremonial Hollow"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Crank",
      "Energy Tube",
      "Reinforced Thruster",
      "Advanced Thruster",
      "Puge Counter",
      "Puge Self-Destruct Mechanism"
    ],
    "droppedSource": ["All", "All", "Arms", "Arms", "Head", "All"]
  },
  {
    "name": "Broadsword Pugilith",
    "species": "Pugilith",
    "continent": "Cauldros",
    "location": ["505E(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Judge Pugilith",
    "species": "Pugilith",
    "continent": "Cauldros",
    "location": ["Ganglion Antropolis"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Stripped Plating",
      "Dual Boards",
      "Genuine Crank ",
      "Used Cylinder",
      "New Cylinder",
      "Quality Fuse",
      "Pugilith Lamp"
    ],
    "droppedSource": ["All", "All", "Armour", "Puge", "Puge", "Cannon", "All"]
  },
  {
    "name": "Talon Eagle Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["O'rrh Simskies", "Ganglion Antropolis"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Armed Recon Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["Cauldros Waters (West) - Island"],
    "minLevel": "65",
    "maxLevel": "65",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Armed Engineer Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["501"],
    "minLevel": "41",
    "maxLevel": "41",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Guide Raptor Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["507N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Guide Eagle Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["O'rrh Sim Watchtowers E"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Air Support Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["[19:00~5:00]: Wildcat Fortress"],
    "minLevel": "54",
    "maxLevel": "54",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Armed Destroyer Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["505E(hi)"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Chantai's Galdr",
    "species": "Galdr",
    "continent": "Cauldros",
    "location": ["[5:00~19:00]: 511NW"],
    "minLevel": "47",
    "maxLevel": "47",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "All-Purpose Plug",
      "Multi-Wire",
      "Reinforced Plug",
      "Galdr Head",
      "O.X. Unit",
      "R.B. Unit",
      "T.P Unit",
      "S.P. Unit",
      "E.M Unit",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Arms",
      "Head",
      "Shoulders & Weapons",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons - Tyrant Only",
      "Shoulders & Weapons",
      "Weapons"
    ]
  },
  {
    "name": "Drone Pawn Quo",
    "species": "Quo",
    "continent": "Cauldros",
    "location": ["502N(hi)", "505NW"],
    "minLevel": "11",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Drone Queen Quo",
    "species": "Quo",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "507NW", "O'rrh Sim Keep"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Frontline Medic Quo",
    "species": "Quo",
    "continent": "Cauldros",
    "location": ["O'rrh Sim Keep"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Jammer",
      "Upgraded Jammer",
      "Quo Pod",
      "Reinforced Plunger",
      "Black Gyrocompass",
      "Golden Gyrocompass"
    ],
    "droppedSource": ["All", "All", "Pod", "Weapon", "Ring", "Ring"]
  },
  {
    "name": "Selenium Oc-serv",
    "species": "Oc-serv",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "505(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Rhenium Oc-serv",
    "species": "Oc-serv",
    "continent": "Cauldros",
    "location": [
      "Kitsune Stronghold",
      "M'gando Old Ceremonial Hollow",
      "Ganglion Antropolis"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Na-mulk, the Rebellious",
    "species": "Oc-serv",
    "continent": "Cauldros",
    "location": ["505(hi)"],
    "minLevel": "47",
    "maxLevel": "47",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Rebel Oc-serv",
    "species": "Oc-serv",
    "continent": "Cauldros",
    "location": ["Cauldros Gate"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Beryllium Oc-serv",
    "species": "Oc-serv",
    "continent": "Cauldros",
    "location": ["Kw'arah Cloister"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Coil",
      "Upgraded Coil",
      "Elemental Fragment",
      "Oc-serv Hand",
      "Elemental Cluster",
      "Oc-serv Northern Crest",
      "Oc-serv Southern Crest",
      "Oc-serv Western Crest",
      "Oc-serv Eastern Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Armour",
      "Hand",
      "Tail",
      "Crest",
      "Crest",
      "Crest",
      "Crest"
    ]
  },
  {
    "name": "Twin Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["[NM] Rites of Ruin"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Talon Knight Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["502(hi)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Suppressor Rook Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["505(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "War Emperor Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["O'rrh Simgate"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Urdu’s Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["[0:00~5:00]: Ganglion Antropolis"],
    "minLevel": "55",
    "maxLevel": "55",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Buster Emperor Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["[air]: 505", "O'rrh Simgate[Cauldros Gate?]"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Duel Emperor Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["[air]: 503SE"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Rebel Emperor Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": [
      "[air]: 503",
      "510S",
      "Wildcat Fortress",
      "foxfor",
      "Kw'arah Cloister",
      "O'rrh Sim"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Barbed Rook Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["509(hi)"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Barbed Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["504"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Purger Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["lavaareas(air)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Brave Rook Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["508W"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Brave Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["502"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "True Queen Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": ["512NW", "515NW", "Sunset Falls", "O'rrh Sim"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "Buster Kaizer Qmoeva",
    "species": "Qmoeva",
    "continent": "Cauldros",
    "location": [
      "504E(skywalk)",
      "507",
      "Ganglion Antropolis",
      "isleSEof507"
    ],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Crank",
      "Dual Boards",
      "Genuine Frame",
      "Reinforced Frame",
      "Qmoevan Capacitor",
      "Blood-Stained Face",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Legs",
      "Legs",
      "Weapons",
      "Head",
      "Weapons"
    ]
  },
  {
    "name": "MG068: Megisia",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["[NM] Slovity's Revenge"],
    "minLevel": "40",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Enhanced Attack Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["Kitsune Stronghold"],
    "minLevel": "68",
    "maxLevel": "68",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Armored Cruiser Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["[5:00~19:00]: O'rrh Sim rim"],
    "minLevel": "61",
    "maxLevel": "61",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Sharnaak's Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["Ganglion Antropolis"],
    "minLevel": "84",
    "maxLevel": "84",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Laser Raptor Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": [
      "[air]: 505",
      "510S",
      "Wildcat Fortress",
      "Kitsune Stronghold",
      "Kw'arah Cloister"
    ],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Aegis Raptor Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["[air]: 505", "Boxtrap Checkpoint"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Grav Raptor Seidr",
    "species": "Seidr",
    "continent": "Cauldros",
    "location": ["[air]: O'rrh Sim"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Upgraded Lens",
      "Advanced Lens",
      "Damask Metal",
      "Orichalcum Metal",
      "Amethyst Metal",
      "Turquoise Metal",
      "Advanced Crank",
      "Genuine Chamber",
      "Advanced Chamber",
      "Seidr Control Device",
      "Special Weapons"
    ],
    "droppedSource": [
      "All",
      "All",
      "Torso, Back",
      "Torso, Back - Sharnaak's Seidr Only",
      "Torso, Back - Badul's Seidr Only",
      "Torso, Back - Ahama's Seidr Only",
      "Legs",
      "Shoulders",
      "Shoulders",
      "Head",
      "Shoulder Weapons"
    ]
  },
  {
    "name": "Leva'el, the Terminus",
    "species": "Xern",
    "continent": "Cauldros",
    "location": [
      "Cauldros Waters (West) - Floating High Above an Island (Postgame)"
    ],
    "minLevel": "82",
    "maxLevel": "82",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Orion Xern",
    "species": "Xern",
    "continent": "Cauldros",
    "location": ["[air]: 503S", "505SW", "509NE", "512"],
    "minLevel": "51",
    "maxLevel": "80",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Fleet Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["White Phosphor Lake"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Quick Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["504E(skywalk)", "Boxtrap Checkpoint", "Kw'arah Cloister"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Swift Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["504(hi)", "507NW", "Kw'arah Cloister"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Jet Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["516SW"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Sector Security Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["Boxtrap Checkpoint"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Rocket Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["509(skywalk)", "M'gandoSW(hi)"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Mach Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["M'gandoW(hi)"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Experimental Flight Shrad",
    "species": "Shrad",
    "continent": "Cauldros",
    "location": ["M'gandoNW(hi)"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Crank",
      "Multi-Wire",
      "Standard Blade Module",
      "Tempered Blade Module",
      "Shrad Eye",
      "Upgraded Spindle Part"
    ],
    "droppedSource": ["All", "All", "Arm", "Arm", "Eye", "All"]
  },
  {
    "name": "Strontium Xe-dom",
    "species": "Xe-dom",
    "continent": "Cauldros",
    "location": ["505(hi)", "Kw'arah Cloister", "M'gando"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Gi-zho, the Iron Deity",
    "species": "Xe-dom",
    "continent": "Cauldros",
    "location": ["512E(skywalk)"],
    "minLevel": "79",
    "maxLevel": "79",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Quality Core",
      "Octopus Board",
      "Ancient Armor",
      "Xe-dom Hand",
      "Advanced Core",
      "Xe-dom Crimson Crest",
      "Xe-dom Jet Black Crest",
      "Xe-dom Golden Crest",
      "Xe-dom Silver Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Mantle",
      "Hands",
      "Cannon",
      "All",
      "All",
      "All",
      "All"
    ]
  },
  {
    "name": "Strike Gunner Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["511"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Strike Launcher Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["Kitsune Stronghold"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Experimental Compact Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["502(hi)"],
    "minLevel": "20",
    "maxLevel": "20",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Revolver Barrager Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["Boxtrap Checkpoint"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Search Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["Wildcat Fortress"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Mortar Sniper Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["502S(hi)"],
    "minLevel": "21",
    "maxLevel": "30",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Motor Cannon ? Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["Wildcat Fortress"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Unlimited Output Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["507N"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Palace Barrager Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["508W"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Support Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["508W"],
    "minLevel": "37",
    "maxLevel": "37",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Experimental Second-Gen Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["Kitsune Stronghold"],
    "minLevel": "58",
    "maxLevel": "58",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Howitzer Barrager Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["O'rrh Simgate"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Attack Range Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["O'rrh Sim Keep"],
    "minLevel": "37",
    "maxLevel": "37",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Enhanced Cannon ? Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["511"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Auto Gunner Zig",
    "species": "Zig",
    "continent": "Cauldros",
    "location": ["504SW(hi)", "507N"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Standard Sensor Part",
      "Upgraded Sensor Part",
      "Hi-Spec Sensor Module",
      "Standard Shaft",
      "Genuine Shaft",
      "Upgraded Shaft Part",
      "Quality Shaft",
      "Ziggian Long Antennae"
    ],
    "droppedSource": [
      "All",
      "All",
      "All",
      "Weapons - Normal and Type A Zig Tyrants Only",
      "Weapons - Type B Zig Tyrants Only",
      "Weapons - Type C Zig Tyrants Only",
      "Weapons - Type D Zig Tyrants Only",
      "All"
    ]
  },
  {
    "name": "Selenium Fal-swo",
    "species": "Fal-swo",
    "continent": "Cauldros",
    "location": ["515W"],
    "minLevel": "31",
    "maxLevel": "40",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Rhenium Fal-swo",
    "species": "Fal-swo",
    "continent": "Cauldros",
    "location": ["Kw'arah Cloister"],
    "minLevel": "51",
    "maxLevel": "60",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Ya-rhat, the Thundercloud",
    "species": "Fal-swo",
    "continent": "Cauldros",
    "location": ["Kw'arah Cloister"],
    "minLevel": "49",
    "maxLevel": "49",
    "weaponBrand": "",
    "weaponWeight": "",
    "materials": [
      "Reinforced Jet",
      "Advanced Jet",
      "Genuine Plate",
      "Golden Stabiliser",
      "Black Stabiliser",
      "Ocher Stabiliser",
      "White Stabiliser",
      "Fal-swo Solar Crest"
    ],
    "droppedSource": [
      "All",
      "All",
      "Wings",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "Stabiliser",
      "All"
    ]
  },
  {
    "name": "Prog Ares",
    "species": "Human-Made Skell",
    "continent": "Cauldros",
    "location": ["Chapter 11"],
    "minLevel": "45",
    "maxLevel": "45",
    "weaponBrand": ""
  },
  {
    "name": "Lineage",
    "species": "Human-Made Skell",
    "continent": "Cauldros",
    "location": ["[NM] Alex's Last Stand"],
    "minLevel": "43",
    "maxLevel": "43",
    "weaponBrand": ""
  },
  {
    "name": "Blood Despair",
    "species": "Human-Made Skell",
    "continent": "Cauldros",
    "location": ["[NM] Rise of the Blood Lobster"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": ""
  },
  {
    "name": "Slovity Pagus",
    "species": "Prone",
    "continent": "Other",
    "location": ["[NM] The Gauntlet"],
    "minLevel": "54",
    "maxLevel": "54",
    "weaponBrand": "",
    "materials": ["Broken Buckle", "Fine Black Belt", "Prone Coin Purse"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Gi Ziorde",
    "species": "Wrothian",
    "continent": "Other",
    "location": ["[NM] Two Warriors"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Gi Ziordo",
    "species": "Wrothian",
    "continent": "Other",
    "location": ["[NM] Two Warriors"],
    "minLevel": "48",
    "maxLevel": "48",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Dagahn",
    "species": "Ganglion Command",
    "continent": "Other",
    "location": ["Chapter 8", "Time Attack"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": ""
  },
  {
    "name": "Ryyz",
    "species": "Ganglion Command",
    "continent": "Other",
    "location": ["Chapter 8", "Time Attack"],
    "minLevel": "31",
    "maxLevel": "31",
    "weaponBrand": ""
  },
  {
    "name": "Autosentry",
    "species": "Autosentry",
    "continent": "Other",
    "location": ["[NM] Good Neighbors"],
    "minLevel": "30",
    "maxLevel": "30",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Autosentry Mk.II",
    "species": "Autosentry",
    "continent": "Other",
    "location": ["[NM] The Gauntlet"],
    "minLevel": "60",
    "maxLevel": "60",
    "weaponBrand": "",
    "materials": [],
    "droppedSource": []
  },
  {
    "name": "Neilnail Albus",
    "species": "Neilnail",
    "continent": "Other",
    "location": ["Time Attack"],
    "minLevel": "14",
    "maxLevel": "50",
    "weaponBrand": "",
    "materials": [
      "Rainbow Carving Shard",
      "Spathi Glyph",
      "Crude Neilnail Mask"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Neilnail Furvus",
    "species": "Neilnail",
    "continent": "Other",
    "location": ["Time Attack"],
    "minLevel": "14",
    "maxLevel": "50",
    "weaponBrand": "",
    "materials": [
      "Rainbow Carving Shard",
      "Spathi Glyph",
      "Crude Neilnail Mask"
    ],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Vita",
    "species": "Vita",
    "continent": "Other",
    "location": ["Chapter 12", "Time Attack"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": ""
  },
  {
    "name": "Ozuchi Caladar",
    "species": "Caladar",
    "continent": "Other",
    "location": ["[NM] The Gauntlet"],
    "minLevel": "90",
    "maxLevel": "90",
    "weaponBrand": "",
    "materials": ["Laser Light", "Dialek Glyph", "Deva Caladar's Red Ear"],
    "droppedSource": ["All", "All", "All"]
  },
  {
    "name": "Alexa Special",
    "species": "Human-Made Skell",
    "continent": "Other",
    "location": ["[AM] Weaponized"],
    "minLevel": "16",
    "maxLevel": "16",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "Gwin?",
    "species": "BLADE",
    "continent": "Other",
    "location": ["[NM] The Gauntlet"],
    "minLevel": "56",
    "maxLevel": "56",
    "weaponBrand": ""
  },
  {
    "name": "Gwin",
    "species": "BLADE",
    "continent": "Other",
    "location": ["[AM] Boot Camp"],
    "minLevel": "46",
    "maxLevel": "46",
    "weaponBrand": ""
  },
  {
    "name": "Soldier Chimera",
    "species": "Chimera",
    "continent": "Other",
    "location": ["Chapter 12"],
    "minLevel": "41",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": ""
  },
  {
    "name": "???",
    "species": "Chimera",
    "continent": "Other",
    "location": ["Chapter 12"],
    "minLevel": "50",
    "maxLevel": "50",
    "weaponBrand": "",
    "weaponWeight": ""
  }
];

const COLLECTIBLES_DATA = [
  {
    "name": "Ajira Melon",
    "location": ["108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Lacey Potato",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Sadelana Lettuce",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Mosa Cabbage",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Keppo Carrot",
    "location": ["102", "104", "107", "112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "Amidresian Tomato",
    "location": ["112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "Cranjelly",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Rock-Orange",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Strawlenny",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Starlight Apple",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Mondcherry",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Sonar Lemon",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Zesian Fleawort",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  { "name": "Noranlily", "location": ["Arendt"], "continent": "Primordia" },
  {
    "name": "Sweet Nerine",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Kiran Catnip",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Doga Dandelion",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Sona Herb",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Garudo Pellionia Minima",
    "location": ["caves"],
    "continent": "Primordia"
  },
  {
    "name": "Nirvana Jonquil",
    "location": ["112", "114", "116", "119", "120", "Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Rizattice",
    "location": ["103", "114", "caves"],
    "continent": "Primordia"
  },
  {
    "name": "Coaletri",
    "location": ["108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Grinding Squirrel",
    "location": ["Arendt"],
    "continent": "Primordia"
  },
  {
    "name": "Crawling Bat",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Golden Sardine",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Zizi Rabbit",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Ashizel",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Ball Mosquito",
    "location": ["caves"],
    "continent": "Primordia"
  },
  {
    "name": "Stretching Locust",
    "location": ["112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "Tractor Beetle",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Multi-Speckled Ladybug",
    "location": ["112", "114", "caves"],
    "continent": "Primordia"
  },
  {
    "name": "Meteo Eater",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Vagabond Ant",
    "location": ["112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "Assassin Springtail",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Logunie's Driftwood",
    "location": ["Arendt"],
    "continent": "Primordia"
  },
  {
    "name": "White Iron Sand",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Fillal Filth",
    "location": ["Arendt", "108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Sanelac Pearl",
    "location": ["caves", "108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Arnacian Orewood",
    "location": ["102", "104", "107"],
    "continent": "Primordia"
  },
  {
    "name": "Auroran Bone",
    "location": ["Arendt", "caves"],
    "continent": "Primordia"
  },
  {
    "name": "Deflection Shield Mirror",
    "location": ["117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "Anhydrous Radiator",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Heatproof Inox Pipe",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "L-002 Fuel Tank",
    "location": ["112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "L-002 Space Analyzer",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "US-X Space Suit",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Centrifugal Beam Generator",
    "location": ["112", "114"],
    "continent": "Primordia"
  },
  {
    "name": "Jagged Mortar",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Acorn Abacus",
    "location": ["Arendt", "Northern Coast"],
    "continent": "Primordia"
  },
  { "name": "Facewood", "location": ["Arendt"], "continent": "Primordia" },
  {
    "name": "Hemp Wallet",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Hummingstone",
    "location": ["102", "104", "107", "117", "118", "121"],
    "continent": "Primordia"
  },
  {
    "name": "High Accelerator",
    "location": ["108", "109", "110", "111"],
    "continent": "Primordia"
  },
  { "name": "Crush Ring", "location": ["Arendt"], "continent": "Primordia" },
  {
    "name": "T-Ray Light",
    "location": ["116", "119", "120"],
    "continent": "Primordia"
  },
  {
    "name": "Flecked Bottle",
    "location": ["108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Grosium Core",
    "location": ["101", "103", "105", "106", "108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "Meditation Powder",
    "location": ["108", "109", "110", "111"],
    "continent": "Primordia"
  },
  {
    "name": "California Sunset",
    "location": ["caves"],
    "continent": "Primordia"
  },
  { "name": "Mirage Scope", "location": ["caves"], "continent": "Primordia" },
  {
    "name": "Ancient Allure",
    "location": ["101", "103", "105", "106"],
    "continent": "Primordia"
  },
  {
    "name": "Goddess's Kiss",
    "location": ["Northern Coast"],
    "continent": "Primordia"
  },
  {
    "name": "Caseras Mushroom",
    "location": ["201", "206", "207", "213"],
    "continent": "Noctilum"
  },
  {
    "name": "Zandemo Eggplant",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Flowering Morrow Fern",
    "location": ["201", "206", "207", "212", "213", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Fodornallow Greens",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Sibercaseras Mushroom",
    "location": ["210", "211", "217", "222", "caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Socha Guava",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Prapaya",
    "location": ["201", "206", "207", "213"],
    "continent": "Noctilum"
  },
  {
    "name": "Babaco Leaf",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Amana Durian",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Lava Mango",
    "location": ["210", "211", "caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Sour Plum",
    "location": ["205", "209", "midbeach", "caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Bananaleaf",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Godmelon",
    "location": ["208", "225", "202", "203", "204", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Timid Sunflower",
    "location": ["210", "211"],
    "continent": "Noctilum"
  },
  {
    "name": "Lea Lily",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Chameleon Creeping Plant",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Muneria Flower",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "Sekka Cosmos",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "False Cedar",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Sleeping Amaryllis",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Rock Armadillo",
    "location": ["caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Morphling Flounder",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "Gluttonutan",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Iguari",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  {
    "name": "Mirrored Peacock",
    "location": ["210", "211"],
    "continent": "Noctilum"
  },
  {
    "name": "Continental Jellyfish",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Noctilucent Dragonfly",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Strobing Horsefly",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Tenacious Moth",
    "location": ["201", "206", "207", "213"],
    "continent": "Noctilum"
  },
  {
    "name": "Madame Mantis",
    "location": ["210", "211"],
    "continent": "Noctilum"
  },
  {
    "name": "Madness Hornet",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "Pardo Spider",
    "location": ["210", "211"],
    "continent": "Noctilum"
  },
  {
    "name": "Kusakiri Stag Beetle",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "Absop's Swallowtail",
    "location": ["208", "217", "222", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Katoan Leaf",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "Gluttonutan Clay",
    "location": ["225", "219", "220"],
    "continent": "Noctilum"
  },
  { "name": "Cane Soil", "location": ["caves"], "continent": "Noctilum" },
  {
    "name": "Noka Mirrorstone",
    "location": ["201", "206", "207", "213", "caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Galjim Crystal",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Harnenga Cotton",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Eternal Moss",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "Earthfreezer",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "Nostalgia L-002",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "HI9 Ion Thruster",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Mk. IX Hypercooler",
    "location": ["212", "216", "218", "224"],
    "continent": "Noctilum"
  },
  {
    "name": "Gesture Glove",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "3D Printer",
    "location": ["201", "206", "207", "210", "211", "213"],
    "continent": "Noctilum"
  },
  {
    "name": "Loathsome Blob",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "Sea Anemone Platter",
    "location": ["208", "202", "203", "204"],
    "continent": "Noctilum"
  },
  {
    "name": "Logunie's Driftwood Boat",
    "location": ["205", "209", "midbeach"],
    "continent": "Noctilum"
  },
  { "name": "Shiny Lamp", "location": ["caves"], "continent": "Noctilum" },
  {
    "name": "Brain Terminal",
    "location": ["210", "211"],
    "continent": "Noctilum"
  },
  {
    "name": "Hexagauge",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Joadtank",
    "location": ["201", "206", "207", "213"],
    "continent": "Noctilum"
  },
  {
    "name": "Resonating Madonater",
    "location": ["212", "218", "223", "224", "214", "215", "216"],
    "continent": "Noctilum"
  },
  {
    "name": "Gleaming Magnet",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Fraudulent Mirror",
    "location": ["214", "215", "223", "caves"],
    "continent": "Noctilum"
  },
  {
    "name": "Scales of Justice",
    "location": ["217", "222"],
    "continent": "Noctilum"
  },
  {
    "name": "Spherical EM Motor",
    "location": ["214", "215", "223"],
    "continent": "Noctilum"
  },
  {
    "name": "Primitive Colossus Statue",
    "location": ["201", "205", "206", "207", "209", "213", "midbeach"],
    "continent": "Noctilum"
  },
  {
    "name": "Gubura Cabbage Leaf",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Shinuyuni Garlic",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  {
    "name": "Cosse Bean",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Beagflea Squash",
    "location": ["310", "311", "316", "caves"],
    "continent": "Oblivia"
  },
  {
    "name": "Will Pepper",
    "location": ["309", "312", "Bute"],
    "continent": "Oblivia"
  },
  {
    "name": "Charupa Leaves",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Dobobora Broccoli",
    "location": ["305", "308", "320"],
    "continent": "Oblivia"
  },
  {
    "name": "Suna Watermelon",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  {
    "name": "Royal Grape",
    "location": ["309", "312", "Bute"],
    "continent": "Oblivia"
  },
  {
    "name": "Kiwegg",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Spiked Pomegranate",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  {
    "name": "Jobo Primrose",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  { "name": "Gudo Rocambole", "location": ["322"], "continent": "Oblivia" },
  {
    "name": "Blast Chard",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  { "name": "Mya Oats", "location": ["320"], "continent": "Oblivia" },
  {
    "name": "Myuena Cactus",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Kepha Holly",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  { "name": "Doragaroo", "location": ["305", "308"], "continent": "Oblivia" },
  {
    "name": "Phantom Tanuki",
    "location": ["309", "312"],
    "continent": "Oblivia"
  },
  {
    "name": "Denemozumi Mouse",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  {
    "name": "Octo-Suka",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  { "name": "Jet Turtle", "location": ["322"], "continent": "Oblivia" },
  {
    "name": "Sand Cucumber",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Gormless Monkey",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "Fleeting Baboon",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  {
    "name": "Fullbelly Gecko",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  { "name": "Moleworm", "location": ["caves"], "continent": "Oblivia" },
  {
    "name": "Imposter Bug",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Shadow Fly",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Common Stick Insect",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Whip Scorpion",
    "location": ["315", "318", "321"],
    "continent": "Oblivia"
  },
  {
    "name": "Slasher Beetle",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  {
    "name": "Wainess Fossil",
    "location": ["309", "312", "Bute", "caves"],
    "continent": "Oblivia"
  },
  {
    "name": "Zedis Twig",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Exubera Stalactite",
    "location": ["320", "322"],
    "continent": "Oblivia"
  },
  {
    "name": "Silvery Cactus Resin",
    "location": ["309", "312", "Bute"],
    "continent": "Oblivia"
  },
  {
    "name": "Kridokan Air",
    "location": ["315", "318", "321", "caves"],
    "continent": "Oblivia"
  },
  {
    "name": "Cruise Deflector AiR",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "Multi-Mirror Solar Drone",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "5th Gen Recycler",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "L-002 Degeneration Reactor",
    "location": ["306", "307", "322", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "Spine-O-Corrector",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  {
    "name": "Thornbox",
    "location": ["309", "312", "Bute"],
    "continent": "Oblivia"
  },
  {
    "name": "Perished Stone Spear",
    "location": ["320"],
    "continent": "Oblivia"
  },
  {
    "name": "Sandstone Etching",
    "location": ["309", "312", "Bute", "caves"],
    "continent": "Oblivia"
  },
  {
    "name": "Magical Finding Rod",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "Ouroboros Bracelet",
    "location": ["322"],
    "continent": "Oblivia"
  },
  { "name": "Drum of Valor", "location": ["caves"], "continent": "Oblivia" },
  {
    "name": "Nopolith",
    "location": ["316", "Bute", "309", "310", "311", "312"],
    "continent": "Oblivia"
  },
  {
    "name": "Ultra Filter",
    "location": ["310", "311", "316"],
    "continent": "Oblivia"
  },
  {
    "name": "Eradicator Eyepiece",
    "location": ["322"],
    "continent": "Oblivia"
  },
  {
    "name": "Sacrificial Reactor",
    "location": ["306", "307", "301", "302", "303", "304"],
    "continent": "Oblivia"
  },
  {
    "name": "Steel Tail Sheath",
    "location": ["322"],
    "continent": "Oblivia"
  },
  {
    "name": "Horned Helmet",
    "location": ["313", "314", "317", "319"],
    "continent": "Oblivia"
  },
  { "name": "Warbone", "location": ["322"], "continent": "Oblivia" },
  { "name": "Strong Iron", "location": ["320"], "continent": "Oblivia" },
  {
    "name": "Chameleon Sand",
    "location": ["320", "Bute"],
    "continent": "Oblivia"
  },
  { "name": "Venus Jewel", "location": ["caves"], "continent": "Oblivia" },
  {
    "name": "Echo Rock",
    "location": ["313", "314", "317", "319", "caves"],
    "continent": "Oblivia"
  },
  {
    "name": "Illogical Etchings",
    "location": ["313", "314", "317", "319", "320"],
    "continent": "Oblivia"
  },
  {
    "name": "Angel Stone",
    "location": ["305", "308"],
    "continent": "Oblivia"
  },
  {
    "name": "Lost Memory Synthesizer",
    "location": ["320"],
    "continent": "Oblivia"
  },
  {
    "name": "Ruge Daikon",
    "location": ["401", "402"],
    "continent": "Sylvalum"
  },
  {
    "name": "Dosoram Bean",
    "location": ["405", "409", "414", "417", "Ciel"],
    "continent": "Sylvalum"
  },
  { "name": "Yaya Sesame", "location": ["caves"], "continent": "Sylvalum" },
  {
    "name": "Pale Maize",
    "location": ["DelusianMt"],
    "continent": "Sylvalum"
  },
  { "name": "Mizaria Celery", "location": ["Ciel"], "continent": "Sylvalum" },
  {
    "name": "Shido Persimmon",
    "location": ["caves"],
    "continent": "Sylvalum"
  },
  {
    "name": "Coldberry",
    "location": ["401", "402", "405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "White Cassis",
    "location": ["412", "413", "415"],
    "continent": "Sylvalum"
  },
  { "name": "Emerald Grape", "location": ["caves"], "continent": "Sylvalum" },
  {
    "name": "Cluster Papaya",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "Bude Mugwort",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  { "name": "Exploding Pansy", "location": ["403"], "continent": "Sylvalum" },
  { "name": "Sese Lily", "location": ["MagicMt."], "continent": "Sylvalum" },
  {
    "name": "Antorus Rose",
    "location": ["403", "Ciel"],
    "continent": "Sylvalum"
  },
  {
    "name": "Shia Cattleya",
    "location": ["401", "402", "403"],
    "continent": "Sylvalum"
  },
  {
    "name": "Diresheep",
    "location": ["DelusianMt", "caves"],
    "continent": "Sylvalum"
  },
  { "name": "Medusa Squid", "location": ["caves"], "continent": "Sylvalum" },
  {
    "name": "Beaporge",
    "location": ["404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Penginion",
    "location": ["DelusianMt", "caves"],
    "continent": "Sylvalum"
  },
  {
    "name": "White Sand Beetle",
    "location": ["412", "413", "415"],
    "continent": "Sylvalum"
  },
  { "name": "Baibai Beetle", "location": ["Ciel"], "continent": "Sylvalum" },
  {
    "name": "Glassy Cricket",
    "location": ["DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Rainy Cricket",
    "location": ["DelusianMt"],
    "continent": "Sylvalum"
  },
  {
    "name": "Crystal Butterfly",
    "location": ["403"],
    "continent": "Sylvalum"
  },
  {
    "name": "Snowy Angelhair",
    "location": ["403", "Ciel"],
    "continent": "Sylvalum"
  },
  { "name": "Dring Slick", "location": ["caves"], "continent": "Sylvalum" },
  {
    "name": "Acton Rock Shards",
    "location": ["404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Fullerene Coral",
    "location": ["DelusianMtBase"],
    "continent": "Sylvalum"
  },
  { "name": "Taoman Acid", "location": ["403"], "continent": "Sylvalum" },
  {
    "name": "Grandan Rock",
    "location": ["401", "402"],
    "continent": "Sylvalum"
  },
  {
    "name": "Jagitos Copper",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "Pomio Spore",
    "location": ["403", "412", "413", "415"],
    "continent": "Sylvalum"
  },
  {
    "name": "Cordless Transformer",
    "location": ["Ciel"],
    "continent": "Sylvalum"
  },
  {
    "name": "Hard Skin",
    "location": ["412", "413", "415", "DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Decoy DNA",
    "location": ["404", "406", "407", "410", "Ciel"],
    "continent": "Sylvalum"
  },
  {
    "name": "L-002 Dagoo Heat Ray",
    "location": ["412", "413", "415", "DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "A-HAB Autonomous AI",
    "location": ["412", "413", "415", "DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Yabuyabu Ointment",
    "location": ["Ciel"],
    "continent": "Sylvalum"
  },
  {
    "name": "Straw Buoy",
    "location": ["401", "402"],
    "continent": "Sylvalum"
  },
  {
    "name": "Spore Balloon",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "Stargazer",
    "location": ["DelusianMt"],
    "continent": "Sylvalum"
  },
  {
    "name": "Camocloak",
    "location": ["412", "413", "415"],
    "continent": "Sylvalum"
  },
  {
    "name": "Spirit Wand",
    "location": ["401", "402"],
    "continent": "Sylvalum"
  },
  { "name": "Shimmering Skin", "location": ["403"], "continent": "Sylvalum" },
  {
    "name": "Detilid Device",
    "location": ["caves"],
    "continent": "Sylvalum"
  },
  {
    "name": "Missile Wiring",
    "location": ["404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Berzerker Unit",
    "location": ["404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Thunderbolt Emblem",
    "location": ["404", "406", "407", "410", "DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Trying Crown",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "Intelligent Liquid Metal",
    "location": ["401", "402", "404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Double Helical Salt",
    "location": ["DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Brilliant Green Liquid",
    "location": ["404", "406", "407", "410"],
    "continent": "Sylvalum"
  },
  {
    "name": "Flowering Egg",
    "location": ["412", "413", "415"],
    "continent": "Sylvalum"
  },
  {
    "name": "Queen's Rapture",
    "location": ["DelusianMt"],
    "continent": "Sylvalum"
  },
  {
    "name": "Stone Screw",
    "location": ["401", "402"],
    "continent": "Sylvalum"
  },
  {
    "name": "Starmaker",
    "location": ["405", "409", "414", "417"],
    "continent": "Sylvalum"
  },
  {
    "name": "Hello Transmitter",
    "location": ["DelusianMtBase"],
    "continent": "Sylvalum"
  },
  {
    "name": "Affinity Soulchain",
    "location": ["DelusianMt"],
    "continent": "Sylvalum"
  },
  { "name": "Kyatara Onion", "location": ["507"], "continent": "Cauldros" },
  {
    "name": "Charged Cayenne",
    "location": ["caves"],
    "continent": "Cauldros"
  },
  {
    "name": "Brambloo Shoot",
    "location": ["502", "504", "507"],
    "continent": "Cauldros"
  },
  {
    "name": "Belzadozebu Scallions",
    "location": ["503"],
    "continent": "Cauldros"
  },
  { "name": "Gyulali", "location": ["507"], "continent": "Cauldros" },
  {
    "name": "Lava Chestnut",
    "location": ["508", "512", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Iron Akebi Fruit",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Mottled Mums",
    "location": ["502", "504", "507"],
    "continent": "Cauldros"
  },
  {
    "name": "Nightmare Pineapple",
    "location": ["502", "504", "507"],
    "continent": "Cauldros"
  },
  {
    "name": "Poron Tulip",
    "location": ["503", "513", "516"],
    "continent": "Cauldros"
  },
  {
    "name": "Jaharmum",
    "location": ["512", "504", "505", "506", "507", "508"],
    "continent": "Cauldros"
  },
  {
    "name": "Bogano Weed",
    "location": ["513", "516"],
    "continent": "Cauldros"
  },
  {
    "name": "Muranadium",
    "location": ["508", "512", "513", "516", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Gun Snake",
    "location": ["502", "504"],
    "continent": "Cauldros"
  },
  { "name": "Demon Boar", "location": ["caves"], "continent": "Cauldros" },
  {
    "name": "Dulcet Goose",
    "location": ["513", "516"],
    "continent": "Cauldros"
  },
  { "name": "Lava Fox", "location": ["caves"], "continent": "Cauldros" },
  {
    "name": "Gibney Jackal",
    "location": ["503", "caves"],
    "continent": "Cauldros"
  },
  {
    "name": "Shooting Firefly",
    "location": ["507"],
    "continent": "Cauldros"
  },
  {
    "name": "Abyssal Cricket",
    "location": ["502", "504"],
    "continent": "Cauldros"
  },
  {
    "name": "Cetecegem Beetle",
    "location": ["caves"],
    "continent": "Cauldros"
  },
  {
    "name": "Bullet Fly",
    "location": ["502", "504", "caves"],
    "continent": "Cauldros"
  },
  {
    "name": "Prickly Cricket",
    "location": ["caves"],
    "continent": "Cauldros"
  },
  {
    "name": "Cooling Lava",
    "location": ["508", "512", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Zalon Dirt",
    "location": ["513", "516"],
    "continent": "Cauldros"
  },
  {
    "name": "Rogebra Shockstone",
    "location": ["509", "511", "513", "516"],
    "continent": "Cauldros"
  },
  { "name": "Autiga Powder", "location": ["503"], "continent": "Cauldros" },
  {
    "name": "Zagyrin Cragstone",
    "location": ["508", "512", "513", "516", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Cliord Oil",
    "location": ["508", "512", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Solar Wind Converter",
    "location": ["Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "Oxygen Airbrake",
    "location": ["509", "511"],
    "continent": "Cauldros"
  },
  {
    "name": "Exalting Paint",
    "location": ["509", "511"],
    "continent": "Cauldros"
  },
  {
    "name": "Autoposturizer",
    "location": ["Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "Planter",
    "location": ["503", "Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "FN Prototype 3",
    "location": ["509", "511"],
    "continent": "Cauldros"
  },
  {
    "name": "Octopus Regulator",
    "location": ["503"],
    "continent": "Cauldros"
  },
  {
    "name": "Chrampoline",
    "location": ["502", "504"],
    "continent": "Cauldros"
  },
  {
    "name": "Sharpening Stone",
    "location": ["503"],
    "continent": "Cauldros"
  },
  {
    "name": "Charred Rock",
    "location": ["508", "512", "504", "505", "506"],
    "continent": "Cauldros"
  },
  { "name": "Stone Lens", "location": ["caves"], "continent": "Cauldros" },
  { "name": "Dark Lantern", "location": ["507"], "continent": "Cauldros" },
  {
    "name": "Icarus Wings",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Bogano Sleeping Bag",
    "location": ["502", "504"],
    "continent": "Cauldros"
  },
  {
    "name": "Extra-Large Cash Box",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Pan-Analysis Chips",
    "location": ["503"],
    "continent": "Cauldros"
  },
  { "name": "Savage Claw", "location": ["Castle"], "continent": "Cauldros" },
  {
    "name": "Elemental Battery",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Spacial Control Jointer",
    "location": ["509", "511", "Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "Dithblade Fragment",
    "location": ["Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "Voltant Scanner",
    "location": ["509", "511", "Castle"],
    "continent": "Cauldros"
  },
  {
    "name": "Mega Muscle Builder",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Rod of Brutality +10",
    "location": ["513", "516"],
    "continent": "Cauldros"
  },
  {
    "name": "Capricious Kettle",
    "location": ["508", "512", "504", "505", "506"],
    "continent": "Cauldros"
  },
  {
    "name": "Megajolt Rattle",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Superior Scepter",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Doom Mask",
    "location": ["509", "511"],
    "continent": "Cauldros"
  },
  {
    "name": "Savage Sketch",
    "location": ["514", "515"],
    "continent": "Cauldros"
  },
  {
    "name": "Book of Death and Rebirth",
    "location": ["509", "511", "Castle"],
    "continent": "Cauldros"
  }
];

const RESOURCES_DATA = [
  {
    "name": "Arc Sand Ore",
    "sites": [
      "106",
      "108",
      "110",
      "115",
      "301",
      "305",
      "307",
      "405",
      "408",
      "418",
      "501",
      "504",
      "506"
    ]
  },
  {
    "name": "Aurorite",
    "sites": [
      "108",
      "110",
      "118",
      "212",
      "215",
      "217",
      "218",
      "303",
      "305",
      "320",
      "408"
    ]
  },
  { "name": "Foucaltium", "sites": ["108", "111", "207", "208", "215"] },
  { "name": "Hookoit", "sites": ["109"] },
  { "name": "Dawnstone", "sites": ["109", "110", "118"] },
  { "name": "Lionbone Bort", "sites": ["109", "115", "301", "312", "318"] },
  {
    "name": "White Cometite",
    "sites": [
      "110",
      "115",
      "118",
      "207",
      "212",
      "218",
      "219",
      "303",
      "307",
      "318"
    ]
  },
  { "name": "Cimmerian Cinnabar", "sites": ["202", "203", "207", "217"] },
  {
    "name": "Everfreeze Ore",
    "sites": ["202", "215", "220", "408", "417", "418", "420"]
  },
  {
    "name": "Infernium",
    "sites": ["207", "217", "220", "301", "307", "312", "319"]
  },
  {
    "name": "Enduron Lead",
    "sites": [
      "212",
      "215",
      "218",
      "219",
      "305",
      "307",
      "309",
      "503",
      "504",
      "508"
    ]
  },
  { "name": "Ouroboros Crystal", "sites": ["308", "309", "320"] },
  { "name": "Boiled-Egg Ore", "sites": ["312", "318", "319", "417", "418"] },
  { "name": "Parhelion Platinum", "sites": ["401", "414", "418"] },
  { "name": "Marine Rutile", "sites": ["401", "414", "418", "504", "508"] },
  { "name": "Bonjelium", "sites": ["502", "504", "506", "507", "510", "511"] }
];

export {
  LIST_GROUP_OPEN,
  LIST_GROUP_CLOSED,
  ENEMY_DATA,
  COLLECTIBLES_DATA,
  RESOURCES_DATA,
};
