exports.up = function(knex) {
  const data = [
    {
      ARTISTS: "System of a Down",
      "ALBUM TITLE": "Toxicity",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Burial",
      "ALBUM TITLE": "Untrue",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Cannibal Ox",
      "ALBUM TITLE": "The Cold Vein",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Sleater-Kinney",
      "ALBUM TITLE": "The Woods",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "The Postal Service",
      "ALBUM TITLE": "Give Up",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Meek Mill",
      "ALBUM TITLE": "Championships",
      SCORE: 5
    },
    {
      ARTISTS: "Soap&Skin",
      "ALBUM TITLE": "From Gas to Solid / You Are My Friend",
      SCORE: 4
    },
    {
      ARTISTS: "Black Thought, Salaam Remi",
      "ALBUM TITLE": "Streams of Thought, Vol. 2",
      SCORE: 7
    },
    {
      ARTISTS: "XXXTENTACION",
      "ALBUM TITLE": "Skins",
      SCORE: 2
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      "ALBUM TITLE": "Stokeley",
      SCORE: 6
    },
    {
      ARTISTS: "The 1975",
      "ALBUM TITLE": "A Brief Inquiry Into Online Relationships",
      SCORE: 6
    },
    {
      ARTISTS: "Earl Sweatshirt",
      "ALBUM TITLE": "Some Rap Songs",
      SCORE: 8
    },
    {
      ARTISTS: "Kai Whiston",
      "ALBUM TITLE": "Kai Whiston Bitch",
      SCORE: 7
    },
    {
      ARTISTS: "J.I.D",
      "ALBUM TITLE": "DiCaprio 2",
      SCORE: 8
    },
    {
      ARTISTS: "Onxy Collective",
      "ALBUM TITLE": "Lower East Side Suite Part Three",
      SCORE: 7
    },
    {
      ARTISTS: "6ix9ine",
      "ALBUM TITLE": "Dummy Boy",
      SCORE: 4
    },
    {
      ARTISTS: "Tyler, the Creator",
      "ALBUM TITLE": "Music Inspired by Illumination & Dr. Seuss' The Grinch",
      SCORE: 3
    },
    {
      ARTISTS: "Muse",
      "ALBUM TITLE": "Simulation Theory",
      SCORE: 5
    },
    {
      ARTISTS: "Trippie Redd",
      "ALBUM TITLE": "A Love Letter To You 3",
      SCORE: 7
    },
    {
      ARTISTS: "Jaden Smith",
      "ALBUM TITLE": "The Sunset Tapes: A Cool Tape Story",
      SCORE: 2
    },
    {
      ARTISTS: "Anderson .Paak",
      "ALBUM TITLE": "Oxnard",
      SCORE: 8
    },
    {
      ARTISTS: "Action Bronson",
      "ALBUM TITLE": "White Bronco",
      SCORE: 5
    },
    {
      ARTISTS: "Lil Peep",
      "ALBUM TITLE": "Come On Over When You're Sober, Pt.2",
      SCORE: 4
    },
    {
      ARTISTS: "Jeffrey Lewis",
      "ALBUM TITLE": "Works by Tuli Kupferberg (1923-2010)",
      SCORE: 7
    },
    {
      ARTISTS: "Imagine Dragons",
      "ALBUM TITLE": "Origins",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Sun Kil Moon",
      "ALBUM TITLE": "This Is My Dinner",
      SCORE: 6
    },
    {
      ARTISTS: "Metro Boomin",
      "ALBUM TITLE": "Not All Heroes Wear Capes",
      SCORE: 6
    },
    {
      ARTISTS: "Takeoff",
      "ALBUM TITLE": "The Last Rocket",
      SCORE: 4
    },
    {
      ARTISTS: "Curren$y, Freddie Gibbs, The Alchemist",
      "ALBUM TITLE": "Fetti",
      SCORE: 7
    },
    {
      ARTISTS: "Poppy",
      "ALBUM TITLE": "Am I a Girl?",
      SCORE: 7
    },
    {
      ARTISTS: "Rosalía",
      "ALBUM TITLE": "El mal querer",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      "ALBUM TITLE": "FM!",
      SCORE: 7
    },
    {
      ARTISTS: "Julia Holter",
      "ALBUM TITLE": "Aviary",
      SCORE: 8
    },
    {
      ARTISTS: "Daughters",
      "ALBUM TITLE": "You Won't Get What You Want",
      SCORE: 10
    },
    {
      ARTISTS: "Current 93",
      "ALBUM TITLE": "The Light Is Leaving Us All",
      SCORE: 8
    },
    {
      ARTISTS: "Kurt Vile",
      "ALBUM TITLE": "Bottle It In",
      SCORE: 6
    },
    {
      ARTISTS: "Joji",
      "ALBUM TITLE": "Ballads 1",
      SCORE: 5
    },
    {
      ARTISTS: "Greta Van Fleet",
      "ALBUM TITLE": "Anthem of the Peaceful Army",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Lil Yatchy",
      "ALBUM TITLE": "Nuthin' 2 Prove",
      SCORE: 2
    },
    {
      ARTISTS: "Little Big",
      "ALBUM TITLE": "Antipositive Part 2",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle",
      "ALBUM TITLE": "What Happens When I Try To Relax",
      SCORE: 7
    },
    {
      ARTISTS: "Future, Juice WRLD",
      "ALBUM TITLE": "WRLD on Drugs",
      SCORE: 5
    },
    {
      ARTISTS: "High on Fire",
      "ALBUM TITLE": "Electric Messiah",
      SCORE: 6
    },
    {
      ARTISTS: "Polyphia",
      "ALBUM TITLE": "New Levels New Devils",
      SCORE: 8
    },
    {
      ARTISTS: "City Morgue",
      "ALBUM TITLE": "Vol. 1: Hell or High Water",
      SCORE: 6
    },
    {
      ARTISTS: "Quavo",
      "ALBUM TITLE": "Quavo Huncho",
      SCORE: 4
    },
    {
      ARTISTS: "Clarence Clarity",
      "ALBUM TITLE": "Think: Peace",
      SCORE: 7
    },
    {
      ARTISTS: "Horrendous",
      "ALBUM TITLE": "Idol",
      SCORE: 9
    },
    {
      ARTISTS: "Lil Baby, Gunna",
      "ALBUM TITLE": "Drip Harder",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Sheck Wes",
      "ALBUM TITLE": "Mudboy",
      SCORE: 6
    },
    {
      ARTISTS: "Behemoth",
      "ALBUM TITLE": "I Loved You at Your Darkest",
      SCORE: 7
    },
    {
      ARTISTS: "Marissa Nadler",
      "ALBUM TITLE": "For My Crimes",
      SCORE: 7
    },
    {
      ARTISTS: "twenty one pilots",
      "ALBUM TITLE": "Trench",
      SCORE: 8
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "YSIV",
      SCORE: 5
    },
    {
      ARTISTS: "Kero Kero Bonito",
      "ALBUM TITLE": "Time 'n' Place",
      SCORE: 8
    },
    {
      ARTISTS: "Tim Hecker",
      "ALBUM TITLE": "Konoyo",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Wayne",
      "ALBUM TITLE": "Tha Carter V",
      SCORE: 6
    },
    {
      ARTISTS: "Lupe Fiasco",
      "ALBUM TITLE": "DROGAS Wave",
      SCORE: 7
    },
    {
      ARTISTS: "JMSN",
      "ALBUM TITLE": "Velvet",
      SCORE: 7
    },
    {
      ARTISTS: "Hozier",
      "ALBUM TITLE": "Nina Cried Power",
      SCORE: 6
    },
    {
      ARTISTS: "milo",
      "ALBUM TITLE": "budding ornithologists are weary of tired analogies",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      "ALBUM TITLE": "iridescense",
      SCORE: 7
    },
    {
      ARTISTS: "Guerilla Toss",
      "ALBUM TITLE": "Twisted Crystal",
      SCORE: 8
    },
    {
      ARTISTS: "Spiritualized",
      "ALBUM TITLE": "And Nothing Hurt",
      SCORE: 7
    },
    {
      ARTISTS: "6LACK",
      "ALBUM TITLE": "East Atlanta Love Letter",
      SCORE: 4
    },
    {
      ARTISTS: "Noname",
      "ALBUM TITLE": "Room 25",
      SCORE: 8
    },
    {
      ARTISTS: "Aphex Twin",
      "ALBUM TITLE": "Collaspe",
      SCORE: 8
    },
    {
      ARTISTS: "Russ",
      "ALBUM TITLE": "Zoo",
      SCORE: 3
    },
    {
      ARTISTS: "Yves Tumor",
      "ALBUM TITLE": "Safe in the Hands of Love",
      SCORE: 7
    },
    {
      ARTISTS: "$uicideBoy$",
      "ALBUM TITLE": "I Want To Die in New Orleans",
      SCORE: 6
    },
    {
      ARTISTS: "Thou",
      "ALBUM TITLE": "Magnus",
      SCORE: 6
    },
    {
      ARTISTS: "Okonolo",
      "ALBUM TITLE": "Cantos",
      SCORE: 7
    },
    {
      ARTISTS: "Armand Hammer",
      "ALBUM TITLE": "Paraffin",
      SCORE: 8
    },
    {
      ARTISTS: "IDLES",
      "ALBUM TITLE": "Joy as an Act of Resistance",
      SCORE: 9
    },
    {
      ARTISTS: "George Clinton",
      "ALBUM TITLE": "Slide",
      SCORE: 7
    },
    {
      ARTISTS: "Eminem",
      "ALBUM TITLE": "Kamikaze",
      SCORE: 4
    },
    {
      ARTISTS: "Interpol",
      "ALBUM TITLE": "Marauder",
      SCORE: 4
    },
    {
      ARTISTS: "Blood Orange",
      "ALBUM TITLE": "Negro Swan",
      SCORE: 8
    },
    {
      ARTISTS: "Oh Sees",
      "ALBUM TITLE": "Smote Reverser",
      SCORE: 6
    },
    {
      ARTISTS: "Hermit and the Recluse",
      "ALBUM TITLE": "Orpheus vs. the Sirens",
      SCORE: 8
    },
    {
      ARTISTS: "Louis Cole",
      "ALBUM TITLE": "Time",
      SCORE: 8
    },
    {
      ARTISTS: "Ariana Grande",
      "ALBUM TITLE": "Sweetener",
      SCORE: 7
    },
    {
      ARTISTS: "Mitski",
      "ALBUM TITLE": "Be The Cowboy",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "Slime Language",
      SCORE: 5
    },
    {
      ARTISTS: "Iglooghost",
      "ALBUM TITLE": "Steel Mogu",
      SCORE: 7
    },
    {
      ARTISTS: "Iglooghost",
      "ALBUM TITLE": "Clear Tamei",
      SCORE: 8
    },
    {
      ARTISTS: "Trippie Redd",
      "ALBUM TITLE": "Life's a Trip",
      SCORE: 5
    },
    {
      ARTISTS: "HMLTD",
      "ALBUM TITLE": "Hate Music Last Time Delete",
      SCORE: 8
    },
    {
      ARTISTS: "Nicki Minaj",
      "ALBUM TITLE": "Queen",
      SCORE: 5
    },
    {
      ARTISTS: "Valee",
      "ALBUM TITLE": "Good Job, You Found Me",
      SCORE: 3
    },
    {
      ARTISTS: "Imperial Triumphant",
      "ALBUM TITLE": "Vile Luxury",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "Swimming",
      SCORE: 3
    },
    {
      ARTISTS: "YG",
      "ALBUM TITLE": "Stay Dangerous",
      SCORE: 5
    },
    {
      ARTISTS: "Travis Scott",
      "ALBUM TITLE": "Astroworld",
      SCORE: 7
    },
    {
      ARTISTS: "James Ferraro",
      "ALBUM TITLE": "Four Pieces for Mirai",
      SCORE: 7
    },
    {
      ARTISTS: "Let's Eat Grandma",
      "ALBUM TITLE": "I'm All Ears",
      SCORE: 7
    },
    {
      ARTISTS: "Denzel Curry",
      "ALBUM TITLE": "TA13OO",
      SCORE: 8
    },
    {
      ARTISTS: "Melody's Echo Chamber",
      "ALBUM TITLE": "Bon Voyage",
      SCORE: 7
    },
    {
      ARTISTS: "88rising",
      "ALBUM TITLE": "Head in the Clouds",
      SCORE: 5
    },
    {
      ARTISTS: "The Internet",
      "ALBUM TITLE": "Hive Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Busdriver",
      "ALBUM TITLE": "Electricity is on our Side",
      SCORE: 5
    },
    {
      ARTISTS: "Dirty Projectors",
      "ALBUM TITLE": "Lamp Lit Prose",
      SCORE: 6
    },
    {
      ARTISTS: "Snail Mail",
      "ALBUM TITLE": "Lush",
      SCORE: 7
    },
    {
      ARTISTS: "Haru Nemuri",
      "ALBUM TITLE": "Haru to Shura",
      SCORE: 8
    },
    {
      ARTISTS: "Deafheaven",
      "ALBUM TITLE": "Ordinary Corrupt Human Love",
      SCORE: 5
    },
    {
      ARTISTS: "serpentwithfeet",
      "ALBUM TITLE": "soil",
      SCORE: 7
    },
    {
      ARTISTS: "Florence + The Machine",
      "ALBUM TITLE": "High As Hope",
      SCORE: 7
    },
    {
      ARTISTS: "Zeal & Ardor",
      "ALBUM TITLE": "Stranger Fruit",
      SCORE: 8
    },
    {
      ARTISTS: "The Carters",
      "ALBUM TITLE": "Everything Is Love",
      SCORE: 5
    },
    {
      ARTISTS: "Teyena Taylor",
      "ALBUM TITLE": "K.T.S.E.",
      SCORE: 6
    },
    {
      ARTISTS: "Vein",
      "ALBUM TITLE": "Errorzone",
      SCORE: 6
    },
    {
      ARTISTS: "Kamasi Washington",
      "ALBUM TITLE": "Heaven and Earth",
      SCORE: 6
    },
    {
      ARTISTS: "Gorillaz",
      "ALBUM TITLE": "The Now Now",
      SCORE: 6
    },
    {
      ARTISTS: "Jay Rock",
      "ALBUM TITLE": "Redemption",
      SCORE: 4
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "Scorpion",
      SCORE: 4
    },
    {
      ARTISTS: "Nine Inch Nails",
      "ALBUM TITLE": "Bad Witch",
      SCORE: 7
    },
    {
      ARTISTS: "Freddie Gibbs",
      "ALBUM TITLE": "Freddie",
      SCORE: "meh"
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Year of the Snitch",
      SCORE: 9
    },
    {
      ARTISTS: "Rico Nasty",
      "ALBUM TITLE": "Nasty",
      SCORE: 6
    },
    {
      ARTISTS: "SOPHIE",
      "ALBUM TITLE": "Oil of Every Pearl's Un-Insides",
      SCORE: 8
    },
    {
      ARTISTS: "Nas",
      "ALBUM TITLE": "Nasir",
      SCORE: 6
    },
    {
      ARTISTS: "Bladee",
      "ALBUM TITLE": "Red Light",
      SCORE: 1
    },
    {
      ARTISTS: "LUMP",
      "ALBUM TITLE": "LUMP",
      SCORE: 7
    },
    {
      ARTISTS: "Tropical Fuckstorm",
      "ALBUM TITLE": "A Laughing Death in Meatspace",
      SCORE: 8
    },
    {
      ARTISTS: "Big Ups",
      "ALBUM TITLE": "Two Parts Together",
      SCORE: 6
    },
    {
      ARTISTS: "Black Thought, 9th Wonder",
      "ALBUM TITLE": "Streams of Thought, Vol. 1",
      SCORE: 8
    },
    {
      ARTISTS: "Tierra Whack",
      "ALBUM TITLE": "Tierra Whack",
      SCORE: 7
    },
    {
      ARTISTS: "Godsmack",
      "ALBUM TITLE": "When Legends Rise",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "KIDS SEE GHOSTS",
      "ALBUM TITLE": "KIDS SEE GHOSTS",
      SCORE: 10
    },
    {
      ARTISTS: "Ghost",
      "ALBUM TITLE": "Prequelle",
      SCORE: 8
    },
    {
      ARTISTS: "Father John Misty",
      "ALBUM TITLE": "God's Favorite Customer",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      "ALBUM TITLE": "Age Of",
      SCORE: 6
    },
    {
      ARTISTS: "Juice WRLD",
      "ALBUM TITLE": "Goodbye & Good Riddance",
      SCORE: 5
    },
    {
      ARTISTS: "Kanye West",
      "ALBUM TITLE": "ye",
      SCORE: 8
    },
    {
      ARTISTS: "NIKI",
      "ALBUM TITLE": "Zephyr",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Rocky",
      "ALBUM TITLE": "Testing",
      SCORE: 4
    },
    {
      ARTISTS: "BTS",
      "ALBUM TITLE": "Tear",
      SCORE: 6
    },
    {
      ARTISTS: "Park Jiha",
      "ALBUM TITLE": "Communion",
      SCORE: 6
    },
    {
      ARTISTS: "Pusha T",
      "ALBUM TITLE": "Daytona",
      SCORE: 8
    },
    {
      ARTISTS: "Lil B",
      "ALBUM TITLE": "Platinum Flame",
      SCORE: "based"
    },
    {
      ARTISTS: "Mark Kozelek",
      "ALBUM TITLE": "Mark Kozelek",
      SCORE: 7
    },
    {
      ARTISTS: "Nav",
      "ALBUM TITLE": "Reckless",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Parquet Courts",
      "ALBUM TITLE": "Wide Awake!",
      SCORE: 9
    },
    {
      ARTISTS: "Courtney Barnett",
      "ALBUM TITLE": "Tell Me How You Really Feel",
      SCORE: 6
    },
    {
      ARTISTS: "Frank Ocean",
      "ALBUM TITLE": "Endless",
      SCORE: 8
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      "ALBUM TITLE": "Beware the Book of Eli",
      SCORE: 7
    },
    {
      ARTISTS: "Artic Monkeys",
      "ALBUM TITLE": "Tranquillity Based Hotel + Casino",
      SCORE: 5
    },
    {
      ARTISTS: "Beach House",
      "ALBUM TITLE": 7,
      SCORE: 7
    },
    {
      ARTISTS: "Playboi Carti",
      "ALBUM TITLE": "Die Lit",
      SCORE: 7
    },
    {
      ARTISTS: "Jon Hopkins",
      "ALBUM TITLE": "Singularity",
      SCORE: 7
    },
    {
      ARTISTS: "Wiley",
      "ALBUM TITLE": "Godfather II",
      SCORE: 5
    },
    {
      ARTISTS: "Ice Age",
      "ALBUM TITLE": "Beyondless",
      SCORE: 7
    },
    {
      ARTISTS: "Slim Jxmmi",
      "ALBUM TITLE": "Jxmtro",
      SCORE: 5
    },
    {
      ARTISTS: "Swae Lee",
      "ALBUM TITLE": "Swaecation",
      SCORE: 1
    },
    {
      ARTISTS: "Rae Sremmurd",
      "ALBUM TITLE": "SR3MM",
      SCORE: 7
    },
    {
      ARTISTS: "Daniel Avery",
      "ALBUM TITLE": "Song For Alpha",
      SCORE: 5
    },
    {
      ARTISTS: "Kimbra",
      "ALBUM TITLE": "Primal Heart",
      SCORE: 7
    },
    {
      ARTISTS: "Panopticon",
      "ALBUM TITLE": "The Scars of Man on the Once Nameless Wilderness",
      SCORE: 4
    },
    {
      ARTISTS: "Janelle Monáe",
      "ALBUM TITLE": "Dirty Computer",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      "ALBUM TITLE": "beerbongs & bentleys",
      SCORE: 7
    },
    {
      ARTISTS: "Sleep",
      "ALBUM TITLE": "The Sciences",
      SCORE: 8
    },
    {
      ARTISTS: "Felix Blume",
      "ALBUM TITLE":
        "Death In Haiti: Funeral Brass Bands & Sounds From Port Au Prince",
      SCORE: "none"
    },
    {
      ARTISTS: "A Perfect Circle",
      "ALBUM TITLE": "Eat the Elephant",
      SCORE: 5
    },
    {
      ARTISTS: "Hop Along",
      "ALBUM TITLE": 8,
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      "ALBUM TITLE": "KOD",
      SCORE: 5
    },
    {
      ARTISTS: "Unkown Mortal Orchestra",
      "ALBUM TITLE": "Sex & Food",
      SCORE: 5
    },
    {
      ARTISTS: "Princess Nokia",
      "ALBUM TITLE": "A Girl Cried Red",
      SCORE: 4
    },
    {
      ARTISTS: "John Prine",
      "ALBUM TITLE": "The Tree of Forgiveness",
      SCORE: 7
    },
    {
      ARTISTS: "Saba",
      "ALBUM TITLE": "CARE FOR ME",
      SCORE: "meh"
    },
    {
      ARTISTS: "Sons of Kemet",
      "ALBUM TITLE": "Your Queen is a Reptile",
      SCORE: 8
    },
    {
      ARTISTS: "Kali Uchis",
      "ALBUM TITLE": "Isolation",
      SCORE: 8
    },
    {
      ARTISTS: "Flatbush Zombies",
      "ALBUM TITLE": "Vacation in Hell",
      SCORE: 6
    },
    {
      ARTISTS: "Cardi B",
      "ALBUM TITLE": "Invasion of Privacy",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Xan",
      "ALBUM TITLE": "Total Xanarchy",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ruin",
      "ALBUM TITLE": "Plague Transmissions Vol. 1",
      SCORE: "awesomely nasty"
    },
    {
      ARTISTS: "Kacey Musgraves",
      "ALBUM TITLE": "Golden Hour",
      SCORE: 4
    },
    {
      ARTISTS: "Jean Grae, Quelle Chris",
      "ALBUM TITLE": "Everything's Fine",
      SCORE: 8
    },
    {
      ARTISTS: "Czarface, MF Doom",
      "ALBUM TITLE": "Czarface Meets Metal Face",
      SCORE: 7
    },
    {
      ARTISTS: "The Voidz",
      "ALBUM TITLE": "Virtue",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "My Dear Melancholy",
      SCORE: 5
    },
    {
      ARTISTS: "Superorganism",
      "ALBUM TITLE": "Superorganism",
      SCORE: 7
    },
    {
      ARTISTS: "Preoccupations",
      "ALBUM TITLE": "New Material",
      SCORE: 5
    },
    {
      ARTISTS: "PRhyme",
      "ALBUM TITLE": "PRhyme 2",
      SCORE: 6
    },
    {
      ARTISTS: "Jack White",
      "ALBUM TITLE": "Boarding House Reach",
      SCORE: 9
    },
    {
      ARTISTS: "Mount Eerie",
      "ALBUM TITLE": "Now Only",
      SCORE: 7
    },
    {
      ARTISTS: "Wendy's",
      "ALBUM TITLE": "We Beefin?",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Keiji Haino + Sumac",
      "ALBUM TITLE": "American Dollar Bill",
      SCORE: 7
    },
    {
      ARTISTS: "The Neighborhood",
      "ALBUM TITLE": "The Neighborhood",
      SCORE: 4
    },
    {
      ARTISTS: "Judas Priest",
      "ALBUM TITLE": "Firepower",
      SCORE: 8
    },
    {
      ARTISTS: "Young Fathers",
      "ALBUM TITLE": "Cocoa Sugar",
      SCORE: 6
    },
    {
      ARTISTS: "XXXTENTACION",
      "ALBUM TITLE": "?",
      SCORE: 4
    },
    {
      ARTISTS: "Remo Drive",
      "ALBUM TITLE": "Pop Music",
      SCORE: "notbad"
    },
    {
      ARTISTS: "Natalia Lafourcade",
      "ALBUM TITLE": "Musas Vol. 2",
      SCORE: 8
    },
    {
      ARTISTS: "David Byrne",
      "ALBUM TITLE": "American Utopia",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Yatchy",
      "ALBUM TITLE": "Lil Boat 2",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "Bobby Tarantino II",
      SCORE: 5
    },
    {
      ARTISTS: "Anna von Hausswolff",
      "ALBUM TITLE": "Dead Magic",
      SCORE: 8
    },
    {
      ARTISTS: "Titus Andronicus",
      "ALBUM TITLE": "A Productive Cough",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew W.K.",
      "ALBUM TITLE": "You’re Not Alone",
      SCORE: 8
    },
    {
      ARTISTS: "Tory Lanez",
      "ALBUM TITLE": "Memories Don’t Die",
      SCORE: 3
    },
    {
      ARTISTS: "Rejjie Snow",
      "ALBUM TITLE": "Dear Annie",
      SCORE: "lukewarm"
    },
    {
      ARTISTS: "Turnstile",
      "ALBUM TITLE": "Time & Space",
      SCORE: 5
    },
    {
      ARTISTS: "A.A.L. (Against All Logic)",
      "ALBUM TITLE": "2012 - 2017",
      SCORE: 9
    },
    {
      ARTISTS: "SOB x RBE",
      "ALBUM TITLE": "Gangin",
      SCORE: 6
    },
    {
      ARTISTS: "Screaming Females",
      "ALBUM TITLE": "All at Once",
      SCORE: 8
    },
    {
      ARTISTS: "6ix9ine",
      "ALBUM TITLE": "Day69",
      SCORE: 3
    },
    {
      ARTISTS: "U.S. Girls",
      "ALBUM TITLE": "In a Poem Unlimited",
      SCORE: 8
    },
    {
      ARTISTS: "Kero Kero Bonito",
      "ALBUM TITLE": "TOTEP",
      SCORE: "disappointing"
    },
    {
      ARTISTS: "Ought",
      "ALBUM TITLE": "Room Inside the World",
      SCORE: 6
    },
    {
      ARTISTS: "Car Seat Headrest",
      "ALBUM TITLE": "Twin Fantasy (Face to Face)",
      SCORE: 8
    },
    {
      ARTISTS: "Ravyn  Lenae",
      "ALBUM TITLE": "Crush",
      SCORE: "solid"
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Black Panther The Album",
      SCORE: 6
    },
    {
      ARTISTS: "Daymé Arocena",
      "ALBUM TITLE": "Cubafonía",
      SCORE: 8
    },
    {
      ARTISTS: "MGMT",
      "ALBUM TITLE": "Little Dark Age",
      SCORE: 8
    },
    {
      ARTISTS: "Tribulation",
      "ALBUM TITLE": "Down Below",
      SCORE: 7
    },
    {
      ARTISTS: "Tiny Moving Parts",
      "ALBUM TITLE": "Swell",
      SCORE: 4
    },
    {
      ARTISTS: "No Age",
      "ALBUM TITLE": "Snares Like A Haircut",
      SCORE: 7
    },
    {
      ARTISTS: "Rich Brian",
      "ALBUM TITLE": "Amen",
      SCORE: 6
    },
    {
      ARTISTS: "Justin Timberlake",
      "ALBUM TITLE": "Man of the Woods",
      SCORE: 3
    },
    {
      ARTISTS: "Gucci Mane",
      "ALBUM TITLE": "El Gato, The Human Glacier",
      SCORE: "it's solid"
    },
    {
      ARTISTS: "Portal",
      "ALBUM TITLE": "Ion",
      SCORE: 9
    },
    {
      ARTISTS: "Ty Segall",
      "ALBUM TITLE": "Freedom's Goblin",
      SCORE: 7
    },
    {
      ARTISTS: "Migos",
      "ALBUM TITLE": "Culture II",
      SCORE: 4
    },
    {
      ARTISTS: "Fall Out Boy",
      "ALBUM TITLE": "Mania",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "EDEN",
      "ALBUM TITLE": "vertigo",
      SCORE: "none"
    },
    {
      ARTISTS: "Tune-Yards",
      "ALBUM TITLE": "I Can Feel You Creep Into My Private Life",
      SCORE: 5
    },
    {
      ARTISTS: "First Aid Kit",
      "ALBUM TITLE": "Ruins",
      SCORE: 7
    },
    {
      ARTISTS: "JPEGMAFIA",
      "ALBUM TITLE": "Veteran",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Skies",
      "ALBUM TITLE": "Life of a Dark Rose",
      SCORE: "dime-a-dozen"
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      "ALBUM TITLE": "Gumboot Soup",
      SCORE: 7
    },
    {
      ARTISTS: "CupcakKe",
      "ALBUM TITLE": "Ephorize",
      SCORE: 7
    },
    {
      ARTISTS: "Jeff Rosenstock",
      "ALBUM TITLE": "Post",
      SCORE: 6
    },
    {
      ARTISTS: "Aphex Twin",
      "ALBUM TITLE": "Selected Ambient Works 85-92",
      SCORE: "classic"
    },
    {
      ARTISTS: "Ween",
      "ALBUM TITLE": "Chocolate and Cheese",
      SCORE: "classic"
    },
    {
      ARTISTS: "Lauryn Hill",
      "ALBUM TITLE": "The Miseducation of Lauryn Hill",
      SCORE: "classic"
    },
    {
      ARTISTS: "Michael Jackson",
      "ALBUM TITLE": "Thriller",
      SCORE: "classic"
    },
    {
      ARTISTS: "Daft Punk",
      "ALBUM TITLE": "Discovery",
      SCORE: "classic"
    },
    {
      ARTISTS: "Charlie XCX",
      "ALBUM TITLE": "Pop 2",
      SCORE: 7
    },
    {
      ARTISTS: "N.E.R.D.",
      "ALBUM TITLE": "NO_ONE EVER REALLY DIES",
      SCORE: 7
    },
    {
      ARTISTS: "Travis Scott, Quavo",
      "ALBUM TITLE": "Huncho Jack, Jack Huncho",
      SCORE: 6
    },
    {
      ARTISTS: "Eminem",
      "ALBUM TITLE": "Revival",
      SCORE: 2
    },
    {
      ARTISTS: "Chris Stapleton",
      "ALBUM TITLE": "From A Room: Volume 2",
      SCORE: 7
    },
    {
      ARTISTS: "Brockhampton",
      "ALBUM TITLE": "Saturation III",
      SCORE: 8
    },
    {
      ARTISTS: "Big Sean, Metro Boomin",
      "ALBUM TITLE": "Double or Nothing",
      SCORE: 5
    },
    {
      ARTISTS: "Quality Control",
      "ALBUM TITLE": "Control the Streets, Vol. 1",
      SCORE: "really inconsistent comp, pick out the best tracks"
    },
    {
      ARTISTS: "Princess Nokia",
      "ALBUM TITLE": "1992 Deluxe",
      SCORE: 8
    },
    {
      ARTISTS: "Makaya McCraven",
      "ALBUM TITLE": "Highly Rare",
      SCORE: 7
    },
    {
      ARTISTS: "Prurient",
      "ALBUM TITLE": "Rainbow Mirror",
      SCORE: 6
    },
    {
      ARTISTS: "Ibeyi",
      "ALBUM TITLE": "Ash",
      SCORE: 7
    },
    {
      ARTISTS: "Glassjaw",
      "ALBUM TITLE": "Material Control",
      SCORE: 6
    },
    {
      ARTISTS: "Cyhi the Prince",
      "ALBUM TITLE": "No Dope on Sundays",
      SCORE: 5
    },
    {
      ARTISTS: "GFOTY",
      "ALBUM TITLE": "GFOTYBUCKS",
      SCORE: "banging"
    },
    {
      ARTISTS: "Rosalía",
      "ALBUM TITLE": "Los Ángeles",
      SCORE: 8
    },
    {
      ARTISTS: "Hopsin",
      "ALBUM TITLE": "No Shame",
      SCORE: 4
    },
    {
      ARTISTS: "Björk",
      "ALBUM TITLE": "Utopia",
      SCORE: 7
    },
    {
      ARTISTS: "Sharon Jones & The Dap-Kings",
      "ALBUM TITLE": "Soul of a Woman",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      "ALBUM TITLE": "Polygonwanaland",
      SCORE: 7
    },
    {
      ARTISTS: "Jaden Smith",
      "ALBUM TITLE": "SYRE",
      SCORE: 4
    },
    {
      ARTISTS: "Armand Hammer",
      "ALBUM TITLE": "Rome",
      SCORE: 6
    },
    {
      ARTISTS: "Liars",
      "ALBUM TITLE": "TFCF",
      SCORE: 5
    },
    {
      ARTISTS: "Destroyer",
      "ALBUM TITLE": "ken",
      SCORE: 5
    },
    {
      ARTISTS: "Yung Lean",
      "ALBUM TITLE": "Stranger",
      SCORE: 6
    },
    {
      ARTISTS: "Taylor Swift",
      "ALBUM TITLE": "Reputation",
      SCORE: 4
    },
    {
      ARTISTS: "Benjamin Clementine",
      "ALBUM TITLE": "I Tell a Fly",
      SCORE: 5
    },
    {
      ARTISTS: "Skepta",
      "ALBUM TITLE": "Vicous",
      SCORE: 5
    },
    {
      ARTISTS: "Sam Smith",
      "ALBUM TITLE": "The Thrill of It All",
      SCORE: 4
    },
    {
      ARTISTS: "Converge",
      "ALBUM TITLE": "The Dusk in Us",
      SCORE: 8
    },
    {
      ARTISTS: "Rina Sawayama",
      "ALBUM TITLE": "RINA",
      SCORE: 9
    },
    {
      ARTISTS: "Julien Baker",
      "ALBUM TITLE": "Turn Out the Lights",
      SCORE: 7
    },
    {
      ARTISTS: "Joji",
      "ALBUM TITLE": "In Tounges",
      SCORE: "none"
    },
    {
      ARTISTS: "21 Savage, Offset, Metro Boomin",
      "ALBUM TITLE": "Without Warning",
      SCORE: 7
    },
    {
      ARTISTS: "Weezer",
      "ALBUM TITLE": "Pacific Daydream",
      SCORE: 4
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "4eva Is a Might Long Time",
      SCORE: 9
    },
    {
      ARTISTS: "Fever Ray",
      "ALBUM TITLE": "Plunge",
      SCORE: 5
    },
    {
      ARTISTS: "The World Is A Beautiful Place & I Am No Longer Afraid To Die",
      "ALBUM TITLE": "Always Foreign",
      SCORE: 6
    },
    {
      ARTISTS: "Liam Gallagher",
      "ALBUM TITLE": "As You Were",
      SCORE: 6
    },
    {
      ARTISTS: "Future, Young Thug",
      "ALBUM TITLE": "Super Slimey",
      SCORE: 5
    },
    {
      ARTISTS: "Lou the Human",
      "ALBUM TITLE": "Humaniac",
      SCORE: "PGOODMAYBEA7"
    },
    {
      ARTISTS: "Primitive Man",
      "ALBUM TITLE": "Caustic",
      SCORE: 8
    },
    {
      ARTISTS: "Beck",
      "ALBUM TITLE": "Colors",
      SCORE: 4
    },
    {
      ARTISTS: "Gucci Mane",
      "ALBUM TITLE": "Mr. Davis",
      SCORE: 5
    },
    {
      ARTISTS: "King Krule",
      "ALBUM TITLE": "The OOZ",
      SCORE: 4
    },
    {
      ARTISTS: "St. Vincent",
      "ALBUM TITLE": "MASSEDUCATION",
      SCORE: 6
    },
    {
      ARTISTS: "Protomartyr",
      "ALBUM TITLE": "Relatives in Descent",
      SCORE: 8
    },
    {
      ARTISTS: "Trippie Redd",
      "ALBUM TITLE": "A Love Letter To You 2",
      SCORE: 5
    },
    {
      ARTISTS: "Marilyn Manson",
      "ALBUM TITLE": "Heaven Upside Down",
      SCORE: 5
    },
    {
      ARTISTS: "Poppy",
      "ALBUM TITLE": "Poppy.Computer",
      SCORE: 6
    },
    {
      ARTISTS: "Kelela",
      "ALBUM TITLE": "Take Me Apart",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Pump",
      "ALBUM TITLE": "Lil Pump",
      SCORE: 7
    },
    {
      ARTISTS: "Uncommon Nasa",
      "ALBUM TITLE": "Written at Night",
      SCORE: 8
    },
    {
      ARTISTS: "Iglooghost",
      "ALBUM TITLE": "Neō Wax Bloom",
      SCORE: 8
    },
    {
      ARTISTS: "Smokepurpp",
      "ALBUM TITLE": "Deadstar",
      SCORE: 6
    },
    {
      ARTISTS: "Injury Reserve",
      "ALBUM TITLE": "Drive It Like It's Stolen",
      SCORE: 7
    },
    {
      ARTISTS: "The Killers",
      "ALBUM TITLE": "Wonderful Wonderful",
      SCORE: 6
    },
    {
      ARTISTS: "Wolves in the Throne Room",
      "ALBUM TITLE": "Thrice Woven",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug, Carnage",
      "ALBUM TITLE": "Young Martha",
      SCORE: 8
    },
    {
      ARTISTS: "Chelsea Wolfe",
      "ALBUM TITLE": "Hiss Spun",
      SCORE: 7
    },
    {
      ARTISTS: "Macklemore",
      "ALBUM TITLE": "Gemini",
      SCORE: 3
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      "ALBUM TITLE": "Luciferian Towers",
      SCORE: 5
    },
    {
      ARTISTS: "Rapsody",
      "ALBUM TITLE": "Laila's Widsom",
      SCORE: 8
    },
    {
      ARTISTS: "Foo Fighters",
      "ALBUM TITLE": "Concrete and Gold",
      SCORE: 6
    },
    {
      ARTISTS: "Mykrur",
      "ALBUM TITLE": "Maredidt",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle",
      "ALBUM TITLE": "Brick Body Kids Still Daydream",
      SCORE: 8
    },
    {
      ARTISTS: "Daniel Caeser",
      "ALBUM TITLE": "Freudian",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink",
      "ALBUM TITLE": "Dedicated to Bobby Jameson",
      SCORE: 8
    },
    {
      ARTISTS: "Brain",
      "ALBUM TITLE": "I'm Brain",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "The National",
      "ALBUM TITLE": "Sleep Well Beast",
      SCORE: 7
    },
    {
      ARTISTS: "Nmesh",
      "ALBUM TITLE": "Pharma",
      SCORE: 7
    },
    {
      ARTISTS: "Alex Cameron",
      "ALBUM TITLE": "Forced Witness",
      SCORE: 8
    },
    {
      ARTISTS: "Corbin",
      "ALBUM TITLE": "Mourn",
      SCORE: 7
    },
    {
      ARTISTS: "Alvvays",
      "ALBUM TITLE": "Antisocialites",
      SCORE: 8
    },
    {
      ARTISTS: "Zola Jesus",
      "ALBUM TITLE": "Okovi",
      SCORE: 6
    },
    {
      ARTISTS: "Death From Above",
      "ALBUM TITLE": "Outrage! Is Now",
      SCORE: 8
    },
    {
      ARTISTS: "wifisfuneral",
      "ALBUM TITLE": "Boy Who Cried Wolf",
      SCORE: 7
    },
    {
      ARTISTS: "Bicep",
      "ALBUM TITLE": "Bicep",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      "ALBUM TITLE": "Blue Chips 7000",
      SCORE: 6
    },
    {
      ARTISTS: "LCD Soundsystem",
      "ALBUM TITLE": "American Dream",
      SCORE: 6
    },
    {
      ARTISTS: "The War on Drugs",
      "ALBUM TITLE": "A Deeper Understanding",
      SCORE: 5
    },
    {
      ARTISTS: "Oh Sees",
      "ALBUM TITLE": "Orc",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Mob",
      "ALBUM TITLE": "Cozy Tapes Vol. 2",
      SCORE: 4
    },
    {
      ARTISTS: "Queens of the Stone Age",
      "ALBUM TITLE": "Villains",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      "ALBUM TITLE": "Saturation II",
      SCORE: 8
    },
    {
      ARTISTS: "XXXTentacion",
      "ALBUM TITLE": 17,
      SCORE: 2
    },
    {
      ARTISTS: "Lil Uzi Vert",
      "ALBUM TITLE": "Luv is Rage 2",
      SCORE: 3
    },
    {
      ARTISTS: "Grizzly Bear",
      "ALBUM TITLE": "Painted Ruins",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard, Mild High Club",
      "ALBUM TITLE": "Sketches of Brunswick East",
      SCORE: 5
    },
    {
      ARTISTS: "Everything Everything",
      "ALBUM TITLE": "A Fever Dream",
      SCORE: 6
    },
    {
      ARTISTS: "A$ap Ferg",
      "ALBUM TITLE": "Still Striving",
      SCORE: 6
    },
    {
      ARTISTS: "Brand New",
      "ALBUM TITLE": "Science Fiction",
      SCORE: 7
    },
    {
      ARTISTS: "Alice Glass",
      "ALBUM TITLE": "Alice Glass",
      SCORE: 7
    },
    {
      ARTISTS: "Kodak Black",
      "ALBUM TITLE": "Project Baby 2",
      SCORE: 5
    },
    {
      ARTISTS: "Lil B",
      "ALBUM TITLE": "Black Ken",
      SCORE: 5
    },
    {
      ARTISTS: "Lil Peep",
      "ALBUM TITLE": "Come Over When You're Sober, Pt. 1",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Richard Dawson",
      "ALBUM TITLE": "Peasant",
      SCORE: 8
    },
    {
      ARTISTS: "Milo",
      "ALBUM TITLE": "Who Told You To Think??!!?!?!?!",
      SCORE: 7
    },
    {
      ARTISTS: "Kesha",
      "ALBUM TITLE": "Rainbow",
      SCORE: 7
    },
    {
      ARTISTS: "Igorrr",
      "ALBUM TITLE": "Savage Sinusoid",
      SCORE: 7
    },
    {
      ARTISTS: "Dead Cross",
      "ALBUM TITLE": "Dead Cross",
      SCORE: 7
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      "ALBUM TITLE": "You Will Regret",
      SCORE: 6
    },
    {
      ARTISTS: "Black Lips",
      "ALBUM TITLE": "Satan's Graffiti or God's Art?",
      SCORE: 7
    },
    {
      ARTISTS: "Ugly God",
      "ALBUM TITLE": "The Booty Tape",
      SCORE: 5
    },
    {
      ARTISTS: "Oxbow",
      "ALBUM TITLE": "Thin Black Duke",
      SCORE: 8
    },
    {
      ARTISTS: "Dying Fetus",
      "ALBUM TITLE": "Wrong One to Fuck With",
      SCORE: 8
    },
    {
      ARTISTS: "Vic Mensa",
      "ALBUM TITLE": "The Autobiography",
      SCORE: 6
    },
    {
      ARTISTS: "Aminé",
      "ALBUM TITLE": "Good For You",
      SCORE: 5
    },
    {
      ARTISTS: "Arcade Fire",
      "ALBUM TITLE": "Everything Now",
      SCORE: 4
    },
    {
      ARTISTS: "Nine Inch Nails",
      "ALBUM TITLE": "Add Violence",
      SCORE: 6
    },
    {
      ARTISTS: "Dizzee Rascal",
      "ALBUM TITLE": "Raskit",
      SCORE: 6
    },
    {
      ARTISTS: "Shabazz Palaces",
      "ALBUM TITLE": "Quazarz vs. The Jealous Machines",
      SCORE: 5
    },
    {
      ARTISTS: "Shabazz Palaces",
      "ALBUM TITLE": "Quazarz: Born on a Gangster Star",
      SCORE: 3
    },
    {
      ARTISTS: "Integrity",
      "ALBUM TITLE": "Howling, For The Nightmare Shall Consume",
      SCORE: 7
    },
    {
      ARTISTS: "Lana Del Ray",
      "ALBUM TITLE": "Lust For Life",
      SCORE: 6
    },
    {
      ARTISTS: "Tyler, the Creator",
      "ALBUM TITLE": "Flower Boy",
      SCORE: 8
    },
    {
      ARTISTS: "Pissed Jeans",
      "ALBUM TITLE": "Why Love Now",
      SCORE: 7
    },
    {
      ARTISTS: "Billy Woods",
      "ALBUM TITLE": "Known Unknowns",
      SCORE: 8
    },
    {
      ARTISTS: "Toro y Moi",
      "ALBUM TITLE": "Boo Boo",
      SCORE: "none"
    },
    {
      ARTISTS: "Beach House",
      "ALBUM TITLE": "B-Sides and Rarities",
      SCORE: "none"
    },
    {
      ARTISTS: "Broken Social Scene",
      "ALBUM TITLE": "Hug of Thunder",
      SCORE: 7
    },
    {
      ARTISTS: "Haim",
      "ALBUM TITLE": "Something to Tell You",
      SCORE: 5
    },
    {
      ARTISTS: "21 Savage",
      "ALBUM TITLE": "Issa Album",
      SCORE: 3
    },
    {
      ARTISTS: "Jay-Z",
      "ALBUM TITLE": "4:44",
      SCORE: 8
    },
    {
      ARTISTS: "Calvin Harris",
      "ALBUM TITLE": "Funk Wav Bounces Vol. 1",
      SCORE: "none"
    },
    {
      ARTISTS: "Denzel Curry",
      "ALBUM TITLE": 13,
      SCORE: "none"
    },
    {
      ARTISTS: "Guerilla Toss",
      "ALBUM TITLE": "GT Ultra",
      SCORE: 8
    },
    {
      ARTISTS: "DJ Khaled",
      "ALBUM TITLE": "Grateful",
      SCORE: "none"
    },
    {
      ARTISTS: "Portugal. The Man",
      "ALBUM TITLE": "Woodstock",
      SCORE: "none"
    },
    {
      ARTISTS: "Algiers",
      "ALBUM TITLE": "The Underside of Power",
      SCORE: 8
    },
    {
      ARTISTS: "Fleet Foxes",
      "ALBUM TITLE": "Crack Up",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      "ALBUM TITLE": "Big Fish Theory",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      "ALBUM TITLE": "Murder of the Universe",
      SCORE: 6
    },
    {
      ARTISTS: "2 Chainz",
      "ALBUM TITLE": "Pretty Girls Like Trap",
      SCORE: "none"
    },
    {
      ARTISTS: "The I.L.Y's",
      "ALBUM TITLE": "Bodyguard",
      SCORE: "none"
    },
    {
      ARTISTS: "Elder",
      "ALBUM TITLE": "Reflections of a Floating World",
      SCORE: 8
    },
    {
      ARTISTS: "Lorde",
      "ALBUM TITLE": "Melodrama",
      SCORE: 7
    },
    {
      ARTISTS: "The Mountain Goats",
      "ALBUM TITLE": "Goths",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      "ALBUM TITLE": "Renaissance",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "Beautiful Thugger Girls",
      SCORE: 5
    },
    {
      ARTISTS: "Kirin J Callinan",
      "ALBUM TITLE": "Bravado",
      SCORE: 8
    },
    {
      ARTISTS: "SZA",
      "ALBUM TITLE": "Ctrl",
      SCORE: 7
    },
    {
      ARTISTS: "James McAlister, Sufjan Stevens, Nico Mulhy, Bryce Dessner",
      "ALBUM TITLE": "Planetarium",
      SCORE: 5
    },
    {
      ARTISTS: "Katy Perry",
      "ALBUM TITLE": "Witness",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      "ALBUM TITLE": "Saturation",
      SCORE: 9
    },
    {
      ARTISTS: "Omar Souleyman",
      "ALBUM TITLE": "To Syria, With Love",
      SCORE: "none"
    },
    {
      ARTISTS: "Bleachers",
      "ALBUM TITLE": "Gone Now",
      SCORE: "none"
    },
    {
      ARTISTS: "Beach Fossils",
      "ALBUM TITLE": "Somersault",
      SCORE: 5
    },
    {
      ARTISTS: "Roger Waters",
      "ALBUM TITLE": "Is This the Life We Really Want?",
      SCORE: 7
    },
    {
      ARTISTS: "alt-J",
      "ALBUM TITLE": "Relaxer",
      SCORE: 5
    },
    {
      ARTISTS: "Gucci Mane & Metro Boomin",
      "ALBUM TITLE": "Drop Top Wop",
      SCORE: "none"
    },
    {
      ARTISTS: "Bryson Tiller",
      "ALBUM TITLE": "True to Self",
      SCORE: "none"
    },
    {
      ARTISTS: "Sinjin Hawke",
      "ALBUM TITLE": "First Opus",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Yachty",
      "ALBUM TITLE": "Teenage Emotions",
      SCORE: 2
    },
    {
      ARTISTS: "Snoop Dogg",
      "ALBUM TITLE": "Neva Left",
      SCORE: "none"
    },
    {
      ARTISTS: "Wavves",
      "ALBUM TITLE": "You're Welcome",
      SCORE: "none"
    },
    {
      ARTISTS: "Linkin Park",
      "ALBUM TITLE": "One More Light",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "(Sandy) Alex G",
      "ALBUM TITLE": "Rocket",
      SCORE: 5
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Steroids (Crouching Tiger Hidden Gabber Megamix)",
      SCORE: "none"
    },
    {
      ARTISTS: "B.o.B.",
      "ALBUM TITLE": "Ether",
      SCORE: "b.o.b. album"
    },
    {
      ARTISTS: "Forest Swords",
      "ALBUM TITLE": "Compassion",
      SCORE: 8
    },
    {
      ARTISTS: "Paramore",
      "ALBUM TITLE": "After Laughter",
      SCORE: 7
    },
    {
      ARTISTS: "Harry Styles",
      "ALBUM TITLE": "Harry Styles",
      SCORE: 4
    },
    {
      ARTISTS: "Perfume Genius",
      "ALBUM TITLE": "No Shape",
      SCORE: 8
    },
    {
      ARTISTS: "At The Drive-In",
      "ALBUM TITLE": "in•ter a•li•a",
      SCORE: "none"
    },
    {
      ARTISTS: "Chris Stapleton",
      "ALBUM TITLE": "From A Room: Volume 1",
      SCORE: "none"
    },
    {
      ARTISTS: "Slowdive",
      "ALBUM TITLE": "Slowdive",
      SCORE: 4
    },
    {
      ARTISTS: "Full of Hell",
      "ALBUM TITLE": "Trumpeting Ecstasy",
      SCORE: 6
    },
    {
      ARTISTS: "Mac DeMarco",
      "ALBUM TITLE": "This Old Dog",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "Everybody",
      SCORE: 5
    },
    {
      ARTISTS: "Wale",
      "ALBUM TITLE": "Shine",
      SCORE: "opinion"
    },
    {
      ARTISTS: "Cashmere Cat",
      "ALBUM TITLE": 9,
      SCORE: "none"
    },
    {
      ARTISTS: "Colin Stetson",
      "ALBUM TITLE": "All This I Do For Glory",
      SCORE: 7
    },
    {
      ARTISTS: "Feist",
      "ALBUM TITLE": "Pleasure",
      SCORE: 8
    },
    {
      ARTISTS: "Gorillaz",
      "ALBUM TITLE": "Humanz",
      SCORE: 5
    },
    {
      ARTISTS: "The Smith Street Band",
      "ALBUM TITLE": "More Scared Than You Than You Are of Me",
      SCORE: 5
    },
    {
      ARTISTS: "Gas",
      "ALBUM TITLE": "Narkopop",
      SCORE: 2
    },
    {
      ARTISTS: "Timber Timbre",
      "ALBUM TITLE": "Sincerely, Future Pollution",
      SCORE: 5
    },
    {
      ARTISTS: "The Magnetic Fields",
      "ALBUM TITLE": "50 Song Memoir",
      SCORE: 7
    },
    {
      ARTISTS: "Pile",
      "ALBUM TITLE": "A Hairshirt of Purpose",
      SCORE: "none"
    },
    {
      ARTISTS: "Playboi Carti",
      "ALBUM TITLE": "Playboi Carti",
      SCORE: "none"
    },
    {
      ARTISTS: "Kendrick Lamar",
      "ALBUM TITLE": "DAMN.",
      SCORE: 7
    },
    {
      ARTISTS: "The Chainsmokers",
      "ALBUM TITLE": "Memories... Do Not Open",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Arca",
      "ALBUM TITLE": "Arca",
      SCORE: 5
    },
    {
      ARTISTS: "Joey Bada$$",
      "ALBUM TITLE": "All Amerikkkan Bada$$",
      SCORE: 8
    },
    {
      ARTISTS: "Future Islands",
      "ALBUM TITLE": "The Far Field",
      SCORE: 6
    },
    {
      ARTISTS: "Father John Misty",
      "ALBUM TITLE": "Pure Comedy",
      SCORE: 9
    },
    {
      ARTISTS: "J.I.D",
      "ALBUM TITLE": "The Never Story",
      SCORE: "none"
    },
    {
      ARTISTS: "Kodak Black",
      "ALBUM TITLE": "Painting Pictures",
      SCORE: 4
    },
    {
      ARTISTS: "Mastodon",
      "ALBUM TITLE": "Emperor of Sand",
      SCORE: 4
    },
    {
      ARTISTS: "Freddie Gibbs",
      "ALBUM TITLE": "You Only Live 2wice",
      SCORE: 6
    },
    {
      ARTISTS: "GoldLink",
      "ALBUM TITLE": "At What Cost",
      SCORE: 5
    },
    {
      ARTISTS: "Ibibio Sound Machine",
      "ALBUM TITLE": "Uyai",
      SCORE: 8
    },
    {
      ARTISTS: "Ondatrópica",
      "ALBUM TITLE": "Baile Bucanero",
      SCORE: 7
    },
    {
      ARTISTS: "Pallbearer",
      "ALBUM TITLE": "Heartless",
      SCORE: 8
    },
    {
      ARTISTS: "Mount Eerie",
      "ALBUM TITLE": "A Crow Looked At Me",
      SCORE: 9
    },
    {
      ARTISTS: "Remo Drive",
      "ALBUM TITLE": "Greatest Hits",
      SCORE: 7
    },
    {
      ARTISTS: "Havok",
      "ALBUM TITLE": "Comformicide",
      SCORE: 7
    },
    {
      ARTISTS: "Spoon",
      "ALBUM TITLE": "Hot Thoughts",
      SCORE: 7
    },
    {
      ARTISTS: "Real Estate",
      "ALBUM TITLE": "In Mind",
      SCORE: 5
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "More Life",
      SCORE: 5
    },
    {
      ARTISTS: "Rick Ross",
      "ALBUM TITLE": "Rather You Than Me",
      SCORE: 6
    },
    {
      ARTISTS: "Your Old Droog",
      "ALBUM TITLE": "Packs",
      SCORE: 7
    },
    {
      ARTISTS: "Laura Marling",
      "ALBUM TITLE": "Semper Fermina",
      SCORE: 5
    },
    {
      ARTISTS: "Idles",
      "ALBUM TITLE": "Brutalism",
      SCORE: 8
    },
    {
      ARTISTS: "Blanck Mass",
      "ALBUM TITLE": "World Eater",
      SCORE: 7
    },
    {
      ARTISTS: "Charlie XCX",
      "ALBUM TITLE": "Number 1 Angel",
      SCORE: 7
    },
    {
      ARTISTS: "Ed Sheeran",
      "ALBUM TITLE": "Divide",
      SCORE: 4
    },
    {
      ARTISTS: "Sleaford Mods",
      "ALBUM TITLE": "English Tapas",
      SCORE: 7
    },
    {
      ARTISTS: "Xiu Xiu",
      "ALBUM TITLE": "Forget",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      "ALBUM TITLE": "Flying Microtonal Banana",
      SCORE: 8
    },
    {
      ARTISTS: "Dirty Projecters",
      "ALBUM TITLE": "Dirty Projecters",
      SCORE: 7
    },
    {
      ARTISTS: "Power Trip",
      "ALBUM TITLE": "Nightmare Logic",
      SCORE: 7
    },
    {
      ARTISTS: "Thundercat",
      "ALBUM TITLE": "Drunk",
      SCORE: 6
    },
    {
      ARTISTS: "Future",
      "ALBUM TITLE": "HNDRXX",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Jens Lekman",
      "ALBUM TITLE": "Life Will See You Now",
      SCORE: 6
    },
    {
      ARTISTS: "Animal Collective",
      "ALBUM TITLE": "The Painters",
      SCORE: "none"
    },
    {
      ARTISTS: "Flume",
      "ALBUM TITLE": "Skin Companion II",
      SCORE: "none"
    },
    {
      ARTISTS: "Jonwayne",
      "ALBUM TITLE": "Rap Album Two",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      "ALBUM TITLE": "Future",
      SCORE: 5
    },
    {
      ARTISTS: "Sun Kil Moon",
      "ALBUM TITLE": "Common As Light And Love Are Red Valleys Of Blood",
      SCORE: 9
    },
    {
      ARTISTS: "Quelle Chris",
      "ALBUM TITLE": "Being You Is Great, I Wish I Could Be You More Often",
      SCORE: 8
    },
    {
      ARTISTS: "Jesca Hoop",
      "ALBUM TITLE": "Memories Are Now",
      SCORE: 7
    },
    {
      ARTISTS: "Lupe Fiasco",
      "ALBUM TITLE": "DROGAS Light",
      SCORE: 6
    },
    {
      ARTISTS: "Paul White ft. Danny Brown",
      "ALBUM TITLE": "Accelerator",
      SCORE: "none"
    },
    {
      ARTISTS: "Sampha",
      "ALBUM TITLE": "Process",
      SCORE: 8
    },
    {
      ARTISTS: "Iron Reagan",
      "ALBUM TITLE": "Crossover Ministry",
      SCORE: 6
    },
    {
      ARTISTS: "Big Sean",
      "ALBUM TITLE": "I Decided",
      SCORE: 6
    },
    {
      ARTISTS: "Bedwetter",
      "ALBUM TITLE":
        "Flick Your Tongue Against Your Teeth and Describe the Present",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall",
      "ALBUM TITLE": "Ty Segall",
      SCORE: 6
    },
    {
      ARTISTS: "Migos",
      "ALBUM TITLE": "Culture",
      SCORE: 7
    },
    {
      ARTISTS: "William Basinski",
      "ALBUM TITLE": "A Shadow In Time",
      SCORE: 7
    },
    {
      ARTISTS: "Neil Cicierega",
      "ALBUM TITLE": "Mouth Moods",
      SCORE: 9
    },
    {
      ARTISTS: "Foxygen",
      "ALBUM TITLE": "Hang",
      SCORE: 7
    },
    {
      ARTISTS: "Wiley",
      "ALBUM TITLE": "Godfather",
      SCORE: 8
    },
    {
      ARTISTS: "Yucky Duster",
      "ALBUM TITLE": "Duster's Lament",
      SCORE: 7
    },
    {
      ARTISTS: "Code Orange",
      "ALBUM TITLE": "Forever",
      SCORE: 8
    },
    {
      ARTISTS: "The Flaming Lips",
      "ALBUM TITLE": "Oczy Mlody",
      SCORE: 5
    },
    {
      ARTISTS: "The xx",
      "ALBUM TITLE": "I See You",
      SCORE: 6
    },
    {
      ARTISTS: "Little Simz",
      "ALBUM TITLE": "Stillness In Wonderland",
      SCORE: 5
    },
    {
      ARTISTS: "David Bowie",
      "ALBUM TITLE": "No Plan",
      SCORE: "none"
    },
    {
      ARTISTS: "Pink Guy",
      "ALBUM TITLE": "Pink Season",
      SCORE: "MYSCOREWHENTHEPU$$YISTOOGOOD"
    },
    {
      ARTISTS: "Nine Inch Nails",
      "ALBUM TITLE": "Not The Actual Events",
      SCORE: 8
    },
    {
      ARTISTS: "Emperor",
      "ALBUM TITLE": "In The Nightslide Eclipse",
      SCORE: "classic"
    },
    {
      ARTISTS: "Tom Waits",
      "ALBUM TITLE": "Rain Dogs",
      SCORE: "classic"
    },
    {
      ARTISTS: "Talking Heads",
      "ALBUM TITLE": "Remain In Light",
      SCORE: "classic"
    },
    {
      ARTISTS: "Outkast",
      "ALBUM TITLE": "ATLiens",
      SCORE: "classic"
    },
    {
      ARTISTS: "Captain Beefheart",
      "ALBUM TITLE": "Trout Mask Replica",
      SCORE: "classic"
    },
    {
      ARTISTS: "Run the Jewels",
      "ALBUM TITLE": "RTJ3",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      "ALBUM TITLE": "Passion, Pain & Demon Slayin'",
      SCORE: 4
    },
    {
      ARTISTS: "Injury Reserve",
      "ALBUM TITLE": "Floss",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      "ALBUM TITLE": "Stoney",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ab-Soul",
      "ALBUM TITLE": "Do What Thou Wilt.",
      SCORE: 7
    },
    {
      ARTISTS: "J. Cole",
      "ALBUM TITLE": "4 Your Eyez Only",
      SCORE: 6
    },
    {
      ARTISTS: "Common",
      "ALBUM TITLE": "Black America Again",
      SCORE: 5
    },
    {
      ARTISTS: "Childish Gambino",
      "ALBUM TITLE": "Awaken, My Love!",
      SCORE: 7
    },
    {
      ARTISTS: "The Wytches",
      "ALBUM TITLE": "All Your Happy Life",
      SCORE: 6
    },
    {
      ARTISTS: "Sleigh Bells",
      "ALBUM TITLE": "Jessica Rabbit",
      SCORE: 7
    },
    {
      ARTISTS: "Czarface",
      "ALBUM TITLE": "a Fistful of Peril",
      SCORE: 6
    },
    {
      ARTISTS: "Thee Oh Sees",
      "ALBUM TITLE": "An Odd Entrance",
      SCORE: "none"
    },
    {
      ARTISTS: "Deathspell Omega",
      "ALBUM TITLE": "The Synarchy of Molten Bones",
      SCORE: "none"
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "Starboy",
      SCORE: 5
    },
    {
      ARTISTS: "Metallica",
      "ALBUM TITLE": "Hard Wired...To Self Destruct",
      SCORE: 6
    },
    {
      ARTISTS: "Justice",
      "ALBUM TITLE": "Women",
      SCORE: 5
    },
    {
      ARTISTS: "Bruno Mars",
      "ALBUM TITLE": "24k Magic",
      SCORE: 7
    },
    {
      ARTISTS: "A Tribe Called Quest",
      "ALBUM TITLE": "We Got It from Here... Thank You 4 Your Service",
      SCORE: 9
    },
    {
      ARTISTS: "Marching Church",
      "ALBUM TITLE": "Telling It Like It Is",
      SCORE: 7
    },
    {
      ARTISTS: "Kero Kero Bonito",
      "ALBUM TITLE": "Bonito Generation",
      SCORE: 8
    },
    {
      ARTISTS: "Tove Lo",
      "ALBUM TITLE": "Lady Wood",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Swain",
      "ALBUM TITLE": "The Long Dark Blue",
      SCORE: 8
    },
    {
      ARTISTS: "Wormrot",
      "ALBUM TITLE": "Voices",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Mob",
      "ALBUM TITLE": "The Cozy Tapes Vol. 1: Friends",
      SCORE: 5
    },
    {
      ARTISTS: "Korn",
      "ALBUM TITLE": "The Serenity of Suffering",
      SCORE: 4
    },
    {
      ARTISTS: "D.R.A.M.",
      "ALBUM TITLE": "Big Baby D.R.A.M.",
      SCORE: 7
    },
    {
      ARTISTS: "Conor Oberst",
      "ALBUM TITLE": "Ruminations",
      SCORE: 8
    },
    {
      ARTISTS: "Lady Gaga",
      "ALBUM TITLE": "Joanne",
      SCORE: 6
    },
    {
      ARTISTS: "The Game",
      "ALBUM TITLE": 1992,
      SCORE: 5
    },
    {
      ARTISTS: "The Dillinger Escape Plan",
      "ALBUM TITLE": "Dissociation",
      SCORE: 7
    },
    {
      ARTISTS: "Crying",
      "ALBUM TITLE": "Beyond the Fleeting Gate",
      SCORE: 8
    },
    {
      ARTISTS: "Jeff Rosenstock",
      "ALBUM TITLE": "Worry",
      SCORE: 8
    },
    {
      ARTISTS: "American Football",
      "ALBUM TITLE": "American Football",
      SCORE: 5
    },
    {
      ARTISTS: "NxWorries",
      "ALBUM TITLE": "Yes Lawd!",
      SCORE: 7
    },
    {
      ARTISTS: "Green Day",
      "ALBUM TITLE": "Revolution Radio",
      SCORE: 3
    },
    {
      ARTISTS: "Meshuggah",
      "ALBUM TITLE": "The Violent Sleep of Reason",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Oathbreaker",
      "ALBUM TITLE": "Rheia",
      SCORE: 4
    },
    {
      ARTISTS: "Solange",
      "ALBUM TITLE": "A Seat At The Table",
      SCORE: 8
    },
    {
      ARTISTS: "Brain Tenticles",
      "ALBUM TITLE": "Brain Tenticles",
      SCORE: "none"
    },
    {
      ARTISTS: "Ty Dolla $ign",
      "ALBUM TITLE": "The Campaign",
      SCORE: "none"
    },
    {
      ARTISTS: "Banks",
      "ALBUM TITLE": "The Altar",
      SCORE: 5
    },
    {
      ARTISTS: "Regina Spektor",
      "ALBUM TITLE": "Remember Us To Life",
      SCORE: 8
    },
    {
      ARTISTS: "Nicolas Jaar",
      "ALBUM TITLE": "Sirens",
      SCORE: 6
    },
    {
      ARTISTS: "Bon Iver",
      "ALBUM TITLE": "22, A Million",
      SCORE: 5
    },
    {
      ARTISTS: "Danny Brown",
      "ALBUM TITLE": "Atrocity Exhibition",
      SCORE: 9
    },
    {
      ARTISTS: "Neurosis",
      "ALBUM TITLE": "Flames Within Flames",
      SCORE: 8
    },
    {
      ARTISTS: "Mick Jenkins",
      "ALBUM TITLE": "The Healing Component",
      SCORE: 5
    },
    {
      ARTISTS: "Corey Feldman",
      "ALBUM TITLE": "Angelic 2 The Core",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Wilco",
      "ALBUM TITLE": "Schmilco",
      SCORE: 6
    },
    {
      ARTISTS: "Preoccupations",
      "ALBUM TITLE": "Preoccupations",
      SCORE: 8
    },
    {
      ARTISTS: "Touché Amoré",
      "ALBUM TITLE": "Stage Four",
      SCORE: 8
    },
    {
      ARTISTS: "Ghost",
      "ALBUM TITLE": "Popestar",
      SCORE: "none"
    },
    {
      ARTISTS: "Street Sects",
      "ALBUM TITLE": "End Position",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "The Divine Feminine",
      SCORE: 4
    },
    {
      ARTISTS: "Nick Cave & The Bad Seeds",
      "ALBUM TITLE": "Skeleton Tree",
      SCORE: 8
    },
    {
      ARTISTS: "M.I.A.",
      "ALBUM TITLE": "A.I.M.",
      SCORE: 4
    },
    {
      ARTISTS: "De La Soul",
      "ALBUM TITLE": "And The Anonymous Nobody",
      SCORE: "none"
    },
    {
      ARTISTS: "$uicideBoy$",
      "ALBUM TITLE": "Eternal Grey",
      SCORE: "none"
    },
    {
      ARTISTS: "clipping.",
      "ALBUM TITLE": "Splendor & Misery",
      SCORE: 8
    },
    {
      ARTISTS: "Trisha Paytas",
      "ALBUM TITLE": "Show Time",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Glass Animals",
      "ALBUM TITLE": "How To Be a Human Being",
      SCORE: 6
    },
    {
      ARTISTS: "Isaiah Rashad",
      "ALBUM TITLE": "The Sun's Tirade",
      SCORE: 6
    },
    {
      ARTISTS: "of Montreal",
      "ALBUM TITLE": "Innocence Reaches",
      SCORE: 5
    },
    {
      ARTISTS: "Angel Olson",
      "ALBUM TITLE": "My Woman",
      SCORE: 8
    },
    {
      ARTISTS: "Travis Scott",
      "ALBUM TITLE": "Birds in the Trap Sing McKnight",
      SCORE: 3
    },
    {
      ARTISTS: "Vince Staples",
      "ALBUM TITLE": "Prima Donna",
      SCORE: 7
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "Jefferey",
      SCORE: 7
    },
    {
      ARTISTS: "Carly Rae Jepsen",
      "ALBUM TITLE": "Emotion: Side B",
      SCORE: 8
    },
    {
      ARTISTS: "Ka",
      "ALBUM TITLE": "Honor Killed the Samurai",
      SCORE: 8
    },
    {
      ARTISTS: "Gonjasufi",
      "ALBUM TITLE": "Callus",
      SCORE: "none"
    },
    {
      ARTISTS: "Tobacco",
      "ALBUM TITLE": "Sweatbox Dynasty",
      SCORE: "none"
    },
    {
      ARTISTS: "AJJ",
      "ALBUM TITLE": "The Bible 2",
      SCORE: 5
    },
    {
      ARTISTS: "Crystal Castles",
      "ALBUM TITLE": "Amnesty (I)",
      SCORE: 4
    },
    {
      ARTISTS: "Frank Ocean",
      "ALBUM TITLE": "Blonde/Endless",
      SCORE: 8
    },
    {
      ARTISTS: "Thee Oh Sees",
      "ALBUM TITLE": "A Wierd Exits",
      SCORE: 8
    },
    {
      ARTISTS: "Rae Sremmurd",
      "ALBUM TITLE": "SremmLife2",
      SCORE: 6
    },
    {
      ARTISTS: "PartyNextDoor",
      "ALBUM TITLE": "P3",
      SCORE: 4
    },
    {
      ARTISTS: "Lil Uzi Vert",
      "ALBUM TITLE": "The Perfect Luv Tape",
      SCORE: 3
    },
    {
      ARTISTS: "JPEGMAFIA x Freaky",
      "ALBUM TITLE": "The 2nd Amendment",
      SCORE: "none"
    },
    {
      ARTISTS: "Dinosaur Jr.",
      "ALBUM TITLE": "Give a Glimpse of What Yer Not",
      SCORE: "none"
    },
    {
      ARTISTS: "Noname",
      "ALBUM TITLE": "Telefone",
      SCORE: 8
    },
    {
      ARTISTS: "Skillet",
      "ALBUM TITLE": "Unleashed",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ghoul",
      "ALBUM TITLE": "Dungeon Bastards",
      SCORE: 7
    },
    {
      ARTISTS: "Descendents",
      "ALBUM TITLE": "Hypercaffium Spazzinate",
      SCORE: 5
    },
    {
      ARTISTS: "2 8 1 4",
      "ALBUM TITLE": "Rain Temple",
      SCORE: 6
    },
    {
      ARTISTS: "Show Me The Body",
      "ALBUM TITLE": "Body War",
      SCORE: 8
    },
    {
      ARTISTS: "Bones",
      "ALBUM TITLE": "PaidProgramming2",
      SCORE: 7
    },
    {
      ARTISTS: "DJ Khaled",
      "ALBUM TITLE": "Major Key",
      SCORE: 6
    },
    {
      ARTISTS: "Kemba",
      "ALBUM TITLE": "Negus",
      SCORE: 7
    },
    {
      ARTISTS: "Roy Woods",
      "ALBUM TITLE": "Waking at Dawn",
      SCORE: "none"
    },
    {
      ARTISTS: "$uicideBoy$",
      "ALBUM TITLE": "Radical $uicide",
      SCORE: "none"
    },
    {
      ARTISTS: "Gucci Mane",
      "ALBUM TITLE": "Everybody Looking",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Yachty",
      "ALBUM TITLE": "Summer Songs 2",
      SCORE: 5
    },
    {
      ARTISTS: "Bat For Lashes",
      "ALBUM TITLE": "The Bride",
      SCORE: 5
    },
    {
      ARTISTS: "The I.L.Y's",
      "ALBUM TITLE": "Scum With Bounderies",
      SCORE: 8
    },
    {
      ARTISTS: "21 Savage and Metro Boomin",
      "ALBUM TITLE": "Savage Mode",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Apathy",
      "ALBUM TITLE": "Handshakes With Snakes",
      SCORE: 7
    },
    {
      ARTISTS: "Clams Casino",
      "ALBUM TITLE": "32 Levels",
      SCORE: 7
    },
    {
      ARTISTS: "ScHoolboy Q",
      "ALBUM TITLE": "Blank Face",
      SCORE: 5
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      "ALBUM TITLE": "IV",
      SCORE: 7
    },
    {
      ARTISTS: "Woods",
      "ALBUM TITLE": "City Sun Eater in the River of Light",
      SCORE: 7
    },
    {
      ARTISTS: "Deerhoof",
      "ALBUM TITLE": "The Magic",
      SCORE: 7
    },
    {
      ARTISTS: "Blink-182",
      "ALBUM TITLE": "California",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "The Avalanches",
      "ALBUM TITLE": "Wildflower",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "Bobby Tarantino",
      SCORE: 5
    },
    {
      ARTISTS: "Blood Orange",
      "ALBUM TITLE": "Freetown Sound",
      SCORE: 6
    },
    {
      ARTISTS: "Desiigner",
      "ALBUM TITLE": "New English",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "case/lang/veirs",
      "ALBUM TITLE": "case/lang/veirs",
      SCORE: 7
    },
    {
      ARTISTS: "Riff Raff",
      "ALBUM TITLE": "Peach Panther",
      SCORE: 4
    },
    {
      ARTISTS: "Red Hot Chilli Peppers",
      "ALBUM TITLE": "The Getaway",
      SCORE: 5
    },
    {
      ARTISTS: "Kodak Black",
      "ALBUM TITLE": "Lil Big Pac",
      SCORE: 3
    },
    {
      ARTISTS: "Swans",
      "ALBUM TITLE": "The Glowing Man",
      SCORE: 9
    },
    {
      ARTISTS: "clipping.",
      "ALBUM TITLE": "Wriggle",
      SCORE: 7
    },
    {
      ARTISTS: "Jon Bellion",
      "ALBUM TITLE": "The Human Condition",
      SCORE: 5
    },
    {
      ARTISTS: "Nails",
      "ALBUM TITLE": "You Will Never Be One of Us",
      SCORE: 8
    },
    {
      ARTISTS: "YG",
      "ALBUM TITLE": "Still Brazy",
      SCORE: 8
    },
    {
      ARTISTS: "Daivd Bowie",
      "ALBUM TITLE":
        "The Rise and Fall of Ziggy Stardust and Spiders From Mars",
      SCORE: "classic"
    },
    {
      ARTISTS: "The Microphones",
      "ALBUM TITLE": "The Glow Pt. 2",
      SCORE: "classic"
    },
    {
      ARTISTS: "Yes",
      "ALBUM TITLE": "Close to the Edge",
      SCORE: "classic"
    },
    {
      ARTISTS: "Niravana",
      "ALBUM TITLE": "In Utero",
      SCORE: "classic"
    },
    {
      ARTISTS: "Nas",
      "ALBUM TITLE": "Illmatic",
      SCORE: "classic"
    },
    {
      ARTISTS: "Patti Smith",
      "ALBUM TITLE": "Horses",
      SCORE: "classic"
    },
    {
      ARTISTS: "Xenia Rubinos",
      "ALBUM TITLE": "Black Terry Cat",
      SCORE: 8
    },
    {
      ARTISTS: "Joey Purps",
      "ALBUM TITLE": "iiiDrops",
      SCORE: 7
    },
    {
      ARTISTS: "Olga Bell",
      "ALBUM TITLE": "Tempo",
      SCORE: 7
    },
    {
      ARTISTS: "Vic Mensa",
      "ALBUM TITLE": "There's Alot Going On",
      SCORE: 5
    },
    {
      ARTISTS: "The Strokes",
      "ALBUM TITLE": "Future Present Past",
      SCORE: 3
    },
    {
      ARTISTS: "Flume",
      "ALBUM TITLE": "Skin",
      SCORE: 5
    },
    {
      ARTISTS: "PUP",
      "ALBUM TITLE": "The Dream is Over",
      SCORE: 6
    },
    {
      ARTISTS: "Moonsorrow",
      "ALBUM TITLE": "Jumalten Aika",
      SCORE: 8
    },
    {
      ARTISTS: "Marissa Nadler",
      "ALBUM TITLE": "Strangers",
      SCORE: 8
    },
    {
      ARTISTS: "Car Seat Headrest",
      "ALBUM TITLE": "Teens of Denial",
      SCORE: 8
    },
    {
      ARTISTS: "Modern Baseball",
      "ALBUM TITLE": "Holy Ghost",
      SCORE: 7
    },
    {
      ARTISTS: "Kvelertak",
      "ALBUM TITLE": "Nattesferd",
      SCORE: 6
    },
    {
      ARTISTS: "Kaytranada",
      "ALBUM TITLE": "99.9%",
      SCORE: 6
    },
    {
      ARTISTS: "Chance The Rapper",
      "ALBUM TITLE": "Coloring Book",
      SCORE: 7
    },
    {
      ARTISTS: "ANOHNI",
      "ALBUM TITLE": "Hopelessness",
      SCORE: 6
    },
    {
      ARTISTS: "Gorguts",
      "ALBUM TITLE": "Pleaides'",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      "ALBUM TITLE": "August 26th",
      SCORE: "whitegirlturnupmusic"
    },
    {
      ARTISTS: "Skepta",
      "ALBUM TITLE": "Konnichiwa",
      SCORE: 7
    },
    {
      ARTISTS: "James Blake",
      "ALBUM TITLE": "The Colour In Everything",
      SCORE: 5
    },
    {
      ARTISTS: "Vektor",
      "ALBUM TITLE": "Terminal Redux",
      SCORE: 8
    },
    {
      ARTISTS: "Radiohead",
      "ALBUM TITLE": "A Moon Shaped Pool",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Uzi Vert",
      "ALBUM TITLE": "Lil Uzi Vert vs. The World",
      SCORE: 4
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Bottomless Pit",
      SCORE: 9
    },
    {
      ARTISTS: "Aesop Rock",
      "ALBUM TITLE": "The Impossible Kid",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      "ALBUM TITLE": "Nonagon Infinity",
      SCORE: 8
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "Views",
      SCORE: 4
    },
    {
      ARTISTS: "Xiu Xiu",
      "ALBUM TITLE": "Plays the Music of Twin Peaks",
      SCORE: 9
    },
    {
      ARTISTS: "Beyonce",
      "ALBUM TITLE": "Lemonade",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Ferg",
      "ALBUM TITLE": "Always Strive and Prosper",
      SCORE: 2
    },
    {
      ARTISTS: "Sturgill Simpson",
      "ALBUM TITLE": "A Sailor's Guide To Earth",
      SCORE: 8
    },
    {
      ARTISTS: "Spark Master Tape",
      "ALBUM TITLE": "Silhouete of a Sunkken City",
      SCORE: 2
    },
    {
      ARTISTS: "Deakin",
      "ALBUM TITLE": "Sleep Cycle",
      SCORE: 7
    },
    {
      ARTISTS: "PJ Harvey",
      "ALBUM TITLE": "The Hope Six Demolution Project",
      SCORE: 7
    },
    {
      ARTISTS: "M83",
      "ALBUM TITLE": "JUNK",
      SCORE: 3
    },
    {
      ARTISTS: "Parquet Courts",
      "ALBUM TITLE": "Human Preformance",
      SCORE: 7
    },
    {
      ARTISTS: "Deftones",
      "ALBUM TITLE": "Gore",
      SCORE: 4
    },
    {
      ARTISTS: "Tim Hecker",
      "ALBUM TITLE": "Love Streams",
      SCORE: 5
    },
    {
      ARTISTS: "Babymetal",
      "ALBUM TITLE": "Metal Resistance",
      SCORE: 6
    },
    {
      ARTISTS: "Babyfather",
      "ALBUM TITLE": "BBF",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle & Paul White",
      "ALBUM TITLE": "Hella Personal Film Festival",
      SCORE: 7
    },
    {
      ARTISTS: "Explosions in the Sky",
      "ALBUM TITLE": "The Wilderness",
      SCORE: 4
    },
    {
      ARTISTS: "Ash Koosha",
      "ALBUM TITLE": "I AKA I",
      SCORE: 6
    },
    {
      ARTISTS: "Weezer",
      "ALBUM TITLE": "Weezer (The White Album)",
      SCORE: 8
    },
    {
      ARTISTS: "Domo Genesis",
      "ALBUM TITLE": "Genesis",
      SCORE: 4
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Southern Family",
      SCORE: 8
    },
    {
      ARTISTS: "Black Mountain",
      "ALBUM TITLE": "IV",
      SCORE: 7
    },
    {
      ARTISTS: "Zayn",
      "ALBUM TITLE": "Mind of Mine",
      SCORE: 4
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "Slime Season 3",
      SCORE: 5
    },
    {
      ARTISTS: "Kano",
      "ALBUM TITLE": "Made In the Manor",
      SCORE: 7
    },
    {
      ARTISTS: "The Body and Full of Hell",
      "ALBUM TITLE": "One Day You Will Ache Like I Ache",
      SCORE: 7
    },
    {
      ARTISTS: "Baauer",
      "ALBUM TITLE": "Aa",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Yachty",
      "ALBUM TITLE": "Lil Boat",
      SCORE: 7
    },
    {
      ARTISTS: "The Drones",
      "ALBUM TITLE": "Feelin' Kinda Free",
      SCORE: 8
    },
    {
      ARTISTS: "Iggy Pop",
      "ALBUM TITLE": "Post-Pop Depression",
      SCORE: 7
    },
    {
      ARTISTS: "Denzel Curry",
      "ALBUM TITLE": "Imperial",
      SCORE: 8
    },
    {
      ARTISTS: "Flatbush Zombies",
      "ALBUM TITLE": "3001: A Laced Odysses",
      SCORE: 6
    },
    {
      ARTISTS: "ORANSSI PAZUZU",
      "ALBUM TITLE": "Värähtelijä",
      SCORE: 7
    },
    {
      ARTISTS: "Bas",
      "ALBUM TITLE": "Too High To Riot",
      SCORE: 5
    },
    {
      ARTISTS: "Lemon Demon",
      "ALBUM TITLE": "Spirit Phone",
      SCORE: 8
    },
    {
      ARTISTS: "The 1975",
      "ALBUM TITLE":
        "I Like It When You Sleep, for You Are So Beautiful Yet So Unaware of It",
      SCORE: 4
    },
    {
      ARTISTS: "Mr. Yote",
      "ALBUM TITLE": "The Terrible Tales of Scurvy Jones",
      SCORE: 7
    },
    {
      ARTISTS: "Kendrick Lamar",
      "ALBUM TITLE": "untitled unmastered",
      SCORE: 8
    },
    {
      ARTISTS: "Big Ups",
      "ALBUM TITLE": "Before A Million Universes",
      SCORE: 8
    },
    {
      ARTISTS: "Wild Nothing",
      "ALBUM TITLE": "Life of Pause",
      SCORE: 5
    },
    {
      ARTISTS: "Charli XCX",
      "ALBUM TITLE": "Vroom Vroom",
      SCORE: 8
    },
    {
      ARTISTS: "Macklemore & Ryan Lewis",
      "ALBUM TITLE": "This Unruly Mess I've Made",
      SCORE: 6
    },
    {
      ARTISTS: "Yung Lean",
      "ALBUM TITLE": "Warlord",
      SCORE: 3
    },
    {
      ARTISTS: "VARIOUS ARTISTS",
      "ALBUM TITLE": "Space Heads",
      SCORE: 2
    },
    {
      ARTISTS: "Matmos",
      "ALBUM TITLE": "Ultimate Care II",
      SCORE: 8
    },
    {
      ARTISTS: "Nevemn",
      "ALBUM TITLE": "Nevemn",
      SCORE: 7
    },
    {
      ARTISTS: "Santigold",
      "ALBUM TITLE": "99 Cents",
      SCORE: 7
    },
    {
      ARTISTS: "Animal Collective",
      "ALBUM TITLE": "Painting With",
      SCORE: 5
    },
    {
      ARTISTS: "Porches",
      "ALBUM TITLE": "Pool",
      SCORE: 5
    },
    {
      ARTISTS: "Kanye West",
      "ALBUM TITLE": "The Life of Pablo",
      SCORE: 8
    },
    {
      ARTISTS: "Lucinda Williams",
      "ALBUM TITLE": "The Ghosts of Highway 20",
      SCORE: 6
    },
    {
      ARTISTS: "Bones",
      "ALBUM TITLE": "Useless",
      SCORE: 7
    },
    {
      ARTISTS: "Majid Jordan",
      "ALBUM TITLE": "Majid Jordan",
      SCORE: 4
    },
    {
      ARTISTS: "Future",
      "ALBUM TITLE": "EVOL",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "I'm Up",
      SCORE: 5
    },
    {
      ARTISTS: "DIIV",
      "ALBUM TITLE": "Is The Is Are",
      SCORE: 6
    },
    {
      ARTISTS: "Bloc Party",
      "ALBUM TITLE": "Hymns",
      SCORE: 6
    },
    {
      ARTISTS: "Rihanna",
      "ALBUM TITLE": "ANTI",
      SCORE: 4
    },
    {
      ARTISTS: "Massive Attack",
      "ALBUM TITLE": "Ritual Spirit",
      SCORE: 8
    },
    {
      ARTISTS: "Chairlift",
      "ALBUM TITLE": "Moth",
      SCORE: 7
    },
    {
      ARTISTS: "Savages",
      "ALBUM TITLE": "Adore Life",
      SCORE: 6
    },
    {
      ARTISTS: "Daughter",
      "ALBUM TITLE": "Not To Disappear",
      SCORE: 3
    },
    {
      ARTISTS: "Jesu / Sun Kil Moon",
      "ALBUM TITLE": "Jesu / Sun Kil Moon",
      SCORE: 6
    },
    {
      ARTISTS: "Ander .Paak",
      "ALBUM TITLE": "Malibu",
      SCORE: 7
    },
    {
      ARTISTS: "Ty Segall",
      "ALBUM TITLE": "Emotional Mugger",
      SCORE: 8
    },
    {
      ARTISTS: "Boots",
      "ALBUM TITLE": "AQUɅRIA",
      SCORE: 6
    },
    {
      ARTISTS: "Meridian Brothers",
      "ALBUM TITLE": "Los Suicidas",
      SCORE: 7
    },
    {
      ARTISTS: "Hinds",
      "ALBUM TITLE": "Leave Me Alone",
      SCORE: 6
    },
    {
      ARTISTS: "David Bowie",
      "ALBUM TITLE": "★ (Blackstar)",
      SCORE: 9
    },
    {
      ARTISTS: "Benjamin Clementine",
      "ALBUM TITLE": "At Least For Now",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Ugly Mane",
      "ALBUM TITLE": "Oblivion Access",
      SCORE: 5
    },
    {
      ARTISTS: "Krallice",
      "ALBUM TITLE": "Hyperion",
      SCORE: 7
    },
    {
      ARTISTS: "Cage the Elephant",
      "ALBUM TITLE": "Tell Me I'm Pretty",
      SCORE: 6
    },
    {
      ARTISTS: "Radiohead",
      "ALBUM TITLE": "Kid A",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "DJ Shadow",
      "ALBUM TITLE": "Endtroducing.....",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "NWA",
      "ALBUM TITLE": "Straight Outta Compton",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Slint",
      "ALBUM TITLE": "Spiderland",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Bob Dylan",
      "ALBUM TITLE": "Highway 61 Revisited",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Tangerine Dream",
      "ALBUM TITLE": "Phaedra",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Pusha T",
      "ALBUM TITLE": "King Push – Darkest Before Dawn: The Prelude",
      SCORE: 7
    },
    {
      ARTISTS: "Baroness",
      "ALBUM TITLE": "Purple",
      SCORE: 8
    },
    {
      ARTISTS: "Willow Smith",
      "ALBUM TITLE": "Ardipithecus",
      SCORE: 3
    },
    {
      ARTISTS: "Christian Scott aTunde Adjuah",
      "ALBUM TITLE": "Stretch Music",
      SCORE: 7
    },
    {
      ARTISTS: "Beach Slang",
      "ALBUM TITLE": "The Things We Do To Find People Who Feel Like Us",
      SCORE: 7
    },
    {
      ARTISTS: "Wiki",
      "ALBUM TITLE": "Lil Me",
      SCORE: 7
    },
    {
      ARTISTS: "Archy Marshall",
      "ALBUM TITLE": "A New Place 2 Drown",
      SCORE: 4
    },
    {
      ARTISTS: "G-Eazy",
      "ALBUM TITLE": "When it's Dark Out",
      SCORE: 4
    },
    {
      ARTISTS: "Cavanaugh",
      "ALBUM TITLE": "Time & Materials",
      SCORE: 6
    },
    {
      ARTISTS: "Coldplay",
      "ALBUM TITLE": "A Head Full of Dreams",
      SCORE: 5
    },
    {
      ARTISTS: "Erykah Badu",
      "ALBUM TITLE": "But You Caint Use My Phone",
      SCORE: 6
    },
    {
      ARTISTS: "Sophie",
      "ALBUM TITLE": "Product",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      "ALBUM TITLE": "Speedin' Bullet 2 Heaven",
      SCORE: 0
    },
    {
      ARTISTS: "James Ferraro",
      "ALBUM TITLE": "Skid Row",
      SCORE: 4
    },
    {
      ARTISTS: "Sunn o)))",
      "ALBUM TITLE": "Kannon",
      SCORE: 6
    },
    {
      ARTISTS: "Jon Benjamin",
      "ALBUM TITLE": "well, i should have...*",
      SCORE: "BUTTSECKS"
    },
    {
      ARTISTS: "Waka Flocka Flame",
      "ALBUM TITLE": "Flockaveli 1.5",
      SCORE: 7
    },
    {
      ARTISTS: "Arca",
      "ALBUM TITLE": "Mutant",
      SCORE: 6
    },
    {
      ARTISTS: "Freddie Gibbs",
      "ALBUM TITLE": "Shadow of a Doubt",
      SCORE: 7
    },
    {
      ARTISTS: "Adele",
      "ALBUM TITLE": 25,
      SCORE: 7
    },
    {
      ARTISTS: "Ty Dolla $ign",
      "ALBUM TITLE": "Free TC",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & the Lizard Wizard",
      "ALBUM TITLE": "Paper Mâché Dream Balloon",
      SCORE: 7
    },
    {
      ARTISTS: "Anna Von Hausswolff",
      "ALBUM TITLE": "The Miraculous",
      SCORE: 6
    },
    {
      ARTISTS: "Justin Bieber",
      "ALBUM TITLE": "Purpose",
      SCORE: 5
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "The Incredible True Story",
      SCORE: 6
    },
    {
      ARTISTS: "The Garden",
      "ALBUM TITLE": "Haha",
      SCORE: 5
    },
    {
      ARTISTS: "Revenge",
      "ALBUM TITLE": "Behold.Total.Rejection",
      SCORE: "6(66)"
    },
    {
      ARTISTS: "Goldlink",
      "ALBUM TITLE": "And After That, We Didn't Talk",
      SCORE: 2
    },
    {
      ARTISTS: "Busdriver",
      "ALBUM TITLE": "Thumbs",
      SCORE: 6
    },
    {
      ARTISTS: "Kylesa",
      "ALBUM TITLE": "Exhausting Fire",
      SCORE: 7
    },
    {
      ARTISTS: "Grimes",
      "ALBUM TITLE": "Art Angels",
      SCORE: 7
    },
    {
      ARTISTS: "Car Seat Headrest",
      "ALBUM TITLE": "Teens of Style",
      SCORE: 7
    },
    {
      ARTISTS: "Panopticon",
      "ALBUM TITLE": "Autumn Eternal",
      SCORE: 8
    },
    {
      ARTISTS: "M.E.D. Blu and Madlib",
      "ALBUM TITLE": "Bad Neighbor",
      SCORE: 4
    },
    {
      ARTISTS: "Iglooghost",
      "ALBUM TITLE": "Chinese Nü Yr",
      SCORE: 8
    },
    {
      ARTISTS: "Foxing",
      "ALBUM TITLE": "Dealer",
      SCORE: 3
    },
    {
      ARTISTS: "Kirk Knight",
      "ALBUM TITLE": "Late Knight Special",
      SCORE: 5
    },
    {
      ARTISTS: "Twitching Tongues",
      "ALBUM TITLE": "Disharmony",
      SCORE: 3
    },
    {
      ARTISTS: "Protomartyr",
      "ALBUM TITLE": "The Agent Intellect",
      SCORE: 7
    },
    {
      ARTISTS: "Machine Gun Kelly",
      "ALBUM TITLE": "General Admission",
      SCORE: 3
    },
    {
      ARTISTS: "Joanna Newsom",
      "ALBUM TITLE": "Divers",
      SCORE: 8
    },
    {
      ARTISTS: "Uncommon Nasa",
      "ALBUM TITLE": "Halfway",
      SCORE: 7
    },
    {
      ARTISTS: "The Game",
      "ALBUM TITLE": "The Documentary 2.5",
      SCORE: 8
    },
    {
      ARTISTS: "Raury",
      "ALBUM TITLE": "All We Need",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "It's Better This Way",
      SCORE: 5
    },
    {
      ARTISTS: "Deerhunter",
      "ALBUM TITLE": "Fading Frontier",
      SCORE: 6
    },
    {
      ARTISTS: "Beach House",
      "ALBUM TITLE": "Thank Your Lucky Stars",
      SCORE: 5
    },
    {
      ARTISTS: "Neon Indian",
      "ALBUM TITLE": "VEGA INTL. Night School",
      SCORE: 7
    },
    {
      ARTISTS: "The World Is A Beautiful Place & I Am No Longer Afraid To Die",
      "ALBUM TITLE": "Harmlessness",
      SCORE: 7
    },
    {
      ARTISTS: "CHVRCHES",
      "ALBUM TITLE": "Every Open Eye",
      SCORE: 5
    },
    {
      ARTISTS: "New Order",
      "ALBUM TITLE": "Music Complete",
      SCORE: 6
    },
    {
      ARTISTS: "Alex G",
      "ALBUM TITLE": "Beach Music",
      SCORE: 6
    },
    {
      ARTISTS: "The Game",
      "ALBUM TITLE": "The Documentary 2",
      SCORE: 6
    },
    {
      ARTISTS: "Loma Prieta",
      "ALBUM TITLE": "Self Portrait",
      SCORE: 7
    },
    {
      ARTISTS: "Disclosure",
      "ALBUM TITLE": "Caracal",
      SCORE: 6
    },
    {
      ARTISTS: "Wavves",
      "ALBUM TITLE": "V",
      SCORE: 4
    },
    {
      ARTISTS: "Kurt Vile",
      "ALBUM TITLE": "B'lieve I'm Goin Down...",
      SCORE: 6
    },
    {
      ARTISTS: "Fetty Wap",
      "ALBUM TITLE": "Fetty Wap",
      SCORE: 5
    },
    {
      ARTISTS: "Black Breath",
      "ALBUM TITLE": "Slaves Beyond Death",
      SCORE: 6
    },
    {
      ARTISTS: "Run the Jewels",
      "ALBUM TITLE": "Meow the Jewels",
      SCORE: "http://www.runthejewels.net"
    },
    {
      ARTISTS: "Deafheaven",
      "ALBUM TITLE": "New Bermuda",
      SCORE: 6
    },
    {
      ARTISTS: "milo",
      "ALBUM TITLE": "So the Flies Don't Come",
      SCORE: 8
    },
    {
      ARTISTS: "The Front Bottoms",
      "ALBUM TITLE": "Back On Top",
      SCORE: 6
    },
    {
      ARTISTS: "Julia Holter",
      "ALBUM TITLE": "Have You In My Wilderness",
      SCORE: 9
    },
    {
      ARTISTS: "Ought",
      "ALBUM TITLE": "Sun Coming Down",
      SCORE: 8
    },
    {
      ARTISTS: "Drake & Future",
      "ALBUM TITLE": "What A Time To Be Alive",
      SCORE: 6
    },
    {
      ARTISTS: "Lana Del Rey",
      "ALBUM TITLE": "Honeymoon",
      SCORE: 5
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "GO:OD AM",
      SCORE: 7
    },
    {
      ARTISTS: "The Underachievers",
      "ALBUM TITLE": "Evermore: The Art of Duality",
      SCORE: 8
    },
    {
      ARTISTS: "Battles",
      "ALBUM TITLE": "La Di Da Di",
      SCORE: 6
    },
    {
      ARTISTS: "The Libertines",
      "ALBUM TITLE": "Anthems For Doomed Youth",
      SCORE: 6
    },
    {
      ARTISTS: "Whitey Morgan and the 78's",
      "ALBUM TITLE": "Sonic Ranch",
      SCORE: 7
    },
    {
      ARTISTS: "Myrkur",
      "ALBUM TITLE": "M",
      SCORE: 6
    },
    {
      ARTISTS: "Jay Rock",
      "ALBUM TITLE": 90059,
      SCORE: 6
    },
    {
      ARTISTS: "FIDLAR",
      "ALBUM TITLE": "Too",
      SCORE: 4
    },
    {
      ARTISTS: "The Wonder Years",
      "ALBUM TITLE": "No Closer To Heaven",
      SCORE: 5
    },
    {
      ARTISTS: "Iron Maiden",
      "ALBUM TITLE": "The Book of Souls",
      SCORE: 6
    },
    {
      ARTISTS: "Dam-Funk",
      "ALBUM TITLE": "Invite the Light",
      SCORE: 7
    },
    {
      ARTISTS: "Travis Scott",
      "ALBUM TITLE": "Rodeo",
      SCORE: 8
    },
    {
      ARTISTS: "Miley Cyrus",
      "ALBUM TITLE": "Miley Cyrus and Her Dead Petz",
      SCORE: 1
    },
    {
      ARTISTS: "Foals",
      "ALBUM TITLE": "What Went Down",
      SCORE: 5
    },
    {
      ARTISTS: "Krallice",
      "ALBUM TITLE": "Ygg Huur",
      SCORE: 6
    },
    {
      ARTISTS: "Deradoorian",
      "ALBUM TITLE": "The Expanding Flower Planet",
      SCORE: 6
    },
    {
      ARTISTS: "Destroyer",
      "ALBUM TITLE": "Poison Season",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "Beauty Behind the Madness",
      SCORE: 5
    },
    {
      ARTISTS: "Dope Body",
      "ALBUM TITLE": "Kunk",
      SCORE: 7
    },
    {
      ARTISTS: "Carly Rae Jepsen",
      "ALBUM TITLE": "Emotion",
      SCORE: 7
    },
    {
      ARTISTS: "Beach House",
      "ALBUM TITLE": "Depression Cherry",
      SCORE: 6
    },
    {
      ARTISTS: "Cal Chuchesta",
      "ALBUM TITLE": "The New CALassic",
      SCORE: 3
    },
    {
      ARTISTS: "Ghost",
      "ALBUM TITLE": "Meliora",
      SCORE: 9
    },
    {
      ARTISTS: "Health",
      "ALBUM TITLE": "Death Magic",
      SCORE: 5
    },
    {
      ARTISTS: "Mick Jenkins",
      "ALBUM TITLE": "Wave[s]",
      SCORE: 6
    },
    {
      ARTISTS: "FKA twigs",
      "ALBUM TITLE": "M3LL155X",
      SCORE: 9
    },
    {
      ARTISTS: "Cattle Decapitation",
      "ALBUM TITLE": "The Anthropocene Extinction",
      SCORE: 8
    },
    {
      ARTISTS: "Grave Babies",
      "ALBUM TITLE": "Holographic Violence",
      SCORE: 6
    },
    {
      ARTISTS: "Dr. Dre",
      "ALBUM TITLE": "Compton",
      SCORE: 7
    },
    {
      ARTISTS: "Chelsea Wolfe",
      "ALBUM TITLE": "Abyss",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Dicky",
      "ALBUM TITLE": "Professional Rapper",
      SCORE: 2
    },
    {
      ARTISTS: "Lee Scott",
      "ALBUM TITLE": "Butter Fly",
      SCORE: 6
    },
    {
      ARTISTS: "Lianne La Havas",
      "ALBUM TITLE": "Blood",
      SCORE: 8
    },
    {
      ARTISTS: "Wilco",
      "ALBUM TITLE": "Star Wars",
      SCORE: 6
    },
    {
      ARTISTS: "Pissgrave",
      "ALBUM TITLE": "Suicide Euphoria",
      SCORE: 7
    },
    {
      ARTISTS: "Mac DeMarco",
      "ALBUM TITLE": "Another One",
      SCORE: 7
    },
    {
      ARTISTS: "Titus Andronicus",
      "ALBUM TITLE": "The Most Lamentable Tragedy",
      SCORE: 4
    },
    {
      ARTISTS: "Sleaford Mods",
      "ALBUM TITLE": "Key Markets",
      SCORE: 8
    },
    {
      ARTISTS: "Hopsin",
      "ALBUM TITLE": "Pound Syndrome",
      SCORE: 3
    },
    {
      ARTISTS: "Injury Reserve",
      "ALBUM TITLE": "Live From the Dentist Office",
      SCORE: 8
    },
    {
      ARTISTS: "Quelle Chris",
      "ALBUM TITLE": "Innocent Country",
      SCORE: 7
    },
    {
      ARTISTS: "RP Boo",
      "ALBUM TITLE": "Fingers, Bank Pads & Shoeprints",
      SCORE: 7
    },
    {
      ARTISTS: "Corpo-Mente",
      "ALBUM TITLE": "Corpo-Mente",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      "ALBUM TITLE": "DS2",
      SCORE: 6
    },
    {
      ARTISTS: "The Chemical Brothers",
      "ALBUM TITLE": "Born In the Echoes",
      SCORE: 7
    },
    {
      ARTISTS: "Ratatat",
      "ALBUM TITLE": "Magnifique",
      SCORE: 7
    },
    {
      ARTISTS: "Everything Everything",
      "ALBUM TITLE": "Get to Heaven",
      SCORE: 8
    },
    {
      ARTISTS: "Tame Impala",
      "ALBUM TITLE": "Currents",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Wayne",
      "ALBUM TITLE": "Free Weezy Album",
      SCORE: 4
    },
    {
      ARTISTS: "The Internet",
      "ALBUM TITLE": "Ego Death",
      SCORE: 5
    },
    {
      ARTISTS: "Miguel",
      "ALBUM TITLE": "Wildheart",
      SCORE: 5
    },
    {
      ARTISTS: "Meek Mill",
      "ALBUM TITLE": "Dreams Worth More Than Money",
      SCORE: 7
    },
    {
      ARTISTS: "Refused",
      "ALBUM TITLE": "Freedom!",
      SCORE: 4
    },
    {
      ARTISTS: "King Los",
      "ALBUM TITLE": "God, Money, War",
      SCORE: 6
    },
    {
      ARTISTS: "Desaparecidos",
      "ALBUM TITLE": "Payola",
      SCORE: 5
    },
    {
      ARTISTS: "Citizen",
      "ALBUM TITLE": "Everybody Is Going To Heaven",
      SCORE: 3
    },
    {
      ARTISTS: "Czarface",
      "ALBUM TITLE": "Every Hero Needs A Villain",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      "ALBUM TITLE": "Summertime 06",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Ugly Mane",
      "ALBUM TITLE": "Third Side of Tape",
      SCORE: 8
    },
    {
      ARTISTS: "Thundercat",
      "ALBUM TITLE": "The Beyond / Where the Giants Roam",
      SCORE: 6
    },
    {
      ARTISTS: "KEN mode",
      "ALBUM TITLE": "Success",
      SCORE: 8
    },
    {
      ARTISTS: "mewithoutYOU",
      "ALBUM TITLE": "Pale Horses",
      SCORE: 5
    },
    {
      ARTISTS: "Ash Koosha",
      "ALBUM TITLE": "GUUD",
      SCORE: 8
    },
    {
      ARTISTS: "Hudson Mohawke",
      "ALBUM TITLE": "Lantern",
      SCORE: 5
    },
    {
      ARTISTS: "Denzel Curry",
      "ALBUM TITLE": "32 Zel / Planet Shrooms",
      SCORE: 6
    },
    {
      ARTISTS: "High On Fire",
      "ALBUM TITLE": "Luminiferous",
      SCORE: 8
    },
    {
      ARTISTS: "Florence + The Machine",
      "ALBUM TITLE": "How Big, How Blue, How Beautiful",
      SCORE: 7
    },
    {
      ARTISTS: "Muse",
      "ALBUM TITLE": "Drones",
      SCORE: 5
    },
    {
      ARTISTS: "Sun Kil Moon",
      "ALBUM TITLE": "Universal Themes",
      SCORE: 6
    },
    {
      ARTISTS: "Jamie xx",
      "ALBUM TITLE": "In Colour",
      SCORE: 7
    },
    {
      ARTISTS: "Thee Oh Sees",
      "ALBUM TITLE": "Mutilator Defeated At Last",
      SCORE: 6
    },
    {
      ARTISTS: "Donnie Trumpet & the Social Experiment",
      "ALBUM TITLE": "Surf",
      SCORE: 4
    },
    {
      ARTISTS: "Algiers",
      "ALBUM TITLE": "Algiers",
      SCORE: 8
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      "ALBUM TITLE": "Multi-Love",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Rocky",
      "ALBUM TITLE": "At. Long. Last. A$AP",
      SCORE: 5
    },
    {
      ARTISTS: "Hot Chip",
      "ALBUM TITLE": "Why Make Sense?",
      SCORE: 6
    },
    {
      ARTISTS: "Hop Along",
      "ALBUM TITLE": "Painted Shut",
      SCORE: 8
    },
    {
      ARTISTS: "Dr. Yen Lo",
      "ALBUM TITLE": "Days With Dr. Yen Lo",
      SCORE: 6
    },
    {
      ARTISTS: "Shamir",
      "ALBUM TITLE": "Ratchet",
      SCORE: 5
    },
    {
      ARTISTS: "Twenty One Pilots",
      "ALBUM TITLE": "Blurryface",
      SCORE: 4
    },
    {
      ARTISTS: "Prurient",
      "ALBUM TITLE": "Frozen Niagara Falls",
      SCORE: 8
    },
    {
      ARTISTS: "Faith No More",
      "ALBUM TITLE": "Sol Invictus",
      SCORE: 6
    },
    {
      ARTISTS: "Jim O'Rourke",
      "ALBUM TITLE": "Simple Songs",
      SCORE: 6
    },
    {
      ARTISTS: "Snoop Dogg",
      "ALBUM TITLE": "Bush",
      SCORE: 5
    },
    {
      ARTISTS: "Blanck Mass",
      "ALBUM TITLE": "Dumb Flesh",
      SCORE: 6
    },
    {
      ARTISTS: "Holly Herndon",
      "ALBUM TITLE": "Platform",
      SCORE: 6
    },
    {
      ARTISTS: "Peste Noire",
      "ALBUM TITLE": "La Chaise-Dyable",
      SCORE: 7
    },
    {
      ARTISTS: "Hiatus Kaiyote",
      "ALBUM TITLE": "Choose Your Weapon",
      SCORE: 5
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      "ALBUM TITLE": "Dark Bird Is Home",
      SCORE: 6
    },
    {
      ARTISTS: "Wale",
      "ALBUM TITLE": "The Album About Nothing",
      SCORE: 4
    },
    {
      ARTISTS: "Torres",
      "ALBUM TITLE": "Sprinter",
      SCORE: 5
    },
    {
      ARTISTS: "Kamasi Washington",
      "ALBUM TITLE": "The Epic",
      SCORE: 9
    },
    {
      ARTISTS: "Blur",
      "ALBUM TITLE": "The Magic Whip",
      SCORE: 7
    },
    {
      ARTISTS: "Paul de Jong",
      "ALBUM TITLE": "IF",
      SCORE: 7
    },
    {
      ARTISTS: "Colin Stetson and Sarah Neufeld",
      "ALBUM TITLE": "Never Were the Way She Was",
      SCORE: 8
    },
    {
      ARTISTS: "Yelawolf",
      "ALBUM TITLE": "Love Story",
      SCORE: 3
    },
    {
      ARTISTS: "Tribulation",
      "ALBUM TITLE": "The Children of the Night",
      SCORE: 7
    },
    {
      ARTISTS: "Toro Y Moi",
      "ALBUM TITLE": "What For?",
      SCORE: 7
    },
    {
      ARTISTS: "Marching Church",
      "ALBUM TITLE": "This World Is Not Enough",
      SCORE: 6
    },
    {
      ARTISTS: "Alabama Shakes",
      "ALBUM TITLE": "Sound & Color",
      SCORE: 8
    },
    {
      ARTISTS: "Young Thug",
      "ALBUM TITLE": "Barter 6",
      SCORE: 5
    },
    {
      ARTISTS: "Dance Gavin Dance",
      "ALBUM TITLE": "Instant Gratification",
      SCORE: 1
    },
    {
      ARTISTS: "Squarepusher",
      "ALBUM TITLE": "Damogen Furies",
      SCORE: 6
    },
    {
      ARTISTS: "The Mountain Goats",
      "ALBUM TITLE": "Beat The Champ",
      SCORE: 8
    },
    {
      ARTISTS: "Drenge",
      "ALBUM TITLE": "Undertow",
      SCORE: 5
    },
    {
      ARTISTS: "Death Cab For Cutie",
      "ALBUM TITLE": "Kintsugi",
      SCORE: 5
    },
    {
      ARTISTS: "Tyler, The Creator",
      "ALBUM TITLE": "Cherry Bomb",
      SCORE: 3
    },
    {
      ARTISTS: "Twin Shadow",
      "ALBUM TITLE": "Eclipse",
      SCORE: 3
    },
    {
      ARTISTS: "Shlohmo",
      "ALBUM TITLE": "Dark Red",
      SCORE: 6
    },
    {
      ARTISTS: "Young Fathers",
      "ALBUM TITLE": "White Men Are Black Men Too",
      SCORE: 8
    },
    {
      ARTISTS: "Courtney Barnett",
      "ALBUM TITLE": "Sometimes I Sit and Think, and Sometimes I Just Sit",
      SCORE: 5
    },
    {
      ARTISTS: "Portico",
      "ALBUM TITLE": "Living Fields",
      SCORE: 3
    },
    {
      ARTISTS: "Billy Woods",
      "ALBUM TITLE": "Today, I Wrote Nothing",
      SCORE: 7
    },
    {
      ARTISTS: "Purity Ring",
      "ALBUM TITLE": "Another Eternity",
      SCORE: 4
    },
    {
      ARTISTS: "Earl Sweatshirt",
      "ALBUM TITLE": "I Don't Like Shit, I Don't Go Outside",
      SCORE: 6
    },
    {
      ARTISTS: "Liturgy",
      "ALBUM TITLE": "The Ark Work",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      "ALBUM TITLE": "Mr. Wonderful",
      SCORE: 5
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      "ALBUM TITLE": "Asunder, Sweet and Other Distress",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      "ALBUM TITLE": "Carrie & Lowell",
      SCORE: 7
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "The Powers That B (Niggas On the Moon / Jenny Death)",
      SCORE: 9
    },
    {
      ARTISTS: "Laura Marling",
      "ALBUM TITLE": "Short Movie",
      SCORE: 7
    },
    {
      ARTISTS: "Kendrick Lamar",
      "ALBUM TITLE": "To Pimp A Butterfly",
      SCORE: 10
    },
    {
      ARTISTS: "Ratking",
      "ALBUM TITLE": "700-FILL",
      SCORE: 4
    },
    {
      ARTISTS: "Modest Mouse",
      "ALBUM TITLE": "Strangers To Ourselves",
      SCORE: 5
    },
    {
      ARTISTS: "of Montreal",
      "ALBUM TITLE": "Aureate Gloom",
      SCORE: 6
    },
    {
      ARTISTS: "Lightning Bolt",
      "ALBUM TITLE": "Fantasy Empire",
      SCORE: 7
    },
    {
      ARTISTS: "Clarence Clarity",
      "ALBUM TITLE": "No Now",
      SCORE: 8
    },
    {
      ARTISTS: "Steven Wilson",
      "ALBUM TITLE": "Hand. Cannot. Erase.",
      SCORE: 6
    },
    {
      ARTISTS: "Heems",
      "ALBUM TITLE": "Eat Pray Thug",
      SCORE: 4
    },
    {
      ARTISTS: "Leviathan",
      "ALBUM TITLE": "Scar Sighted",
      SCORE: 8
    },
    {
      ARTISTS: "Pile",
      "ALBUM TITLE": "You're Better Than This",
      SCORE: 6
    },
    {
      ARTISTS: "Cannibal Ox",
      "ALBUM TITLE": "Blade of the Ronin",
      SCORE: 5
    },
    {
      ARTISTS: "Fashawn",
      "ALBUM TITLE": "The Ecology",
      SCORE: 5
    },
    {
      ARTISTS: "Swain",
      "ALBUM TITLE": "Heavy Dancing",
      SCORE: 7
    },
    {
      ARTISTS: "Jeff Rosenstock",
      "ALBUM TITLE": "We Cool?",
      SCORE: 8
    },
    {
      ARTISTS: "Dan Deacon",
      "ALBUM TITLE": "Gliss Riffer",
      SCORE: 5
    },
    {
      ARTISTS: "Negură Bunget",
      "ALBUM TITLE": "TĂU",
      SCORE: 5
    },
    {
      ARTISTS: "The Pop Group",
      "ALBUM TITLE": "Citizen Zombie",
      SCORE: 9
    },
    {
      ARTISTS: "Big Sean",
      "ALBUM TITLE": "Dark Sky Paradise",
      SCORE: "no"
    },
    {
      ARTISTS: "Screaming Females",
      "ALBUM TITLE": "Rose Mountain",
      SCORE: 6
    },
    {
      ARTISTS: "THEESatisfaction",
      "ALBUM TITLE": "EarthEE",
      SCORE: 7
    },
    {
      ARTISTS: "Adventures",
      "ALBUM TITLE": "Supersonic Home",
      SCORE: 7
    },
    {
      ARTISTS: "BADBADNOTGOOD & Ghostface Killah",
      "ALBUM TITLE": "Sour Soul",
      SCORE: 6
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "If You're Reading This, It's Too Late",
      SCORE: 8
    },
    {
      ARTISTS: "Pond",
      "ALBUM TITLE": "Man, It Feels Like Space Again",
      SCORE: 6
    },
    {
      ARTISTS: "Your Old Droog",
      "ALBUM TITLE": "Kinison",
      SCORE: 8
    },
    {
      ARTISTS: "Father John Misty",
      "ALBUM TITLE": "I Love You, Honeybear",
      SCORE: 8
    },
    {
      ARTISTS: "Open Mike Eagle",
      "ALBUM TITLE": "A Special Episode Of",
      SCORE: 8
    },
    {
      ARTISTS: "Matana Roberts",
      "ALBUM TITLE": "Coin Coin Chapter 3: River Run Thee",
      SCORE: 6
    },
    {
      ARTISTS: "John Carpenter",
      "ALBUM TITLE": "Lost Themes",
      SCORE: 7
    },
    {
      ARTISTS: "Zs",
      "ALBUM TITLE": "Xe",
      SCORE: 8
    },
    {
      ARTISTS: "Xibalba",
      "ALBUM TITLE": "Tierra Y Libertad",
      SCORE: 6
    },
    {
      ARTISTS: "Mount Eerie",
      "ALBUM TITLE": "Sauna",
      SCORE: 6
    },
    {
      ARTISTS: "Title Fight",
      "ALBUM TITLE": "Hyperview",
      SCORE: 4
    },
    {
      ARTISTS: "Björk",
      "ALBUM TITLE": "Vulnicura",
      SCORE: 8
    },
    {
      ARTISTS: "Lupe Fiasco",
      "ALBUM TITLE": "Tetsuo & Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Napalm Death",
      "ALBUM TITLE": "Apex Predator -- Easy Meat",
      SCORE: 8
    },
    {
      ARTISTS: "Belle and Sebastian",
      "ALBUM TITLE": "Girls In Peacetime Want To Dance",
      SCORE: 6
    },
    {
      ARTISTS: "Joey Bada$$",
      "ALBUM TITLE": "B4.DA.$$",
      SCORE: 8
    },
    {
      ARTISTS: "Marilyn Manson",
      "ALBUM TITLE": "The Pale Emperor",
      SCORE: "6(66)"
    },
    {
      ARTISTS: "Panda Bear",
      "ALBUM TITLE": "Panda Bear Meets the Grim Reaper",
      SCORE: 4
    },
    {
      ARTISTS: "Sleater-Kinney",
      "ALBUM TITLE": "No Cities to Love",
      SCORE: 7
    },
    {
      ARTISTS: "Viet Cong",
      "ALBUM TITLE": "Viet Cong",
      SCORE: 7
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Fashion Week",
      SCORE: 7
    },
    {
      ARTISTS: "Roland Kirk",
      "ALBUM TITLE": "I Talk With the Spirits",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Kate Bush",
      "ALBUM TITLE": "Hounds of Love",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Iron Maiden",
      "ALBUM TITLE": "The Number of the Beast",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Kraftwerk",
      "ALBUM TITLE": "Trans-Europe Express",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "A Tribe Called Quest",
      "ALBUM TITLE": "The Low End Theory",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Joy Division",
      "ALBUM TITLE": "Unknown Pleasures",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "D'Angelo and The Vanguard",
      "ALBUM TITLE": "Black Messiah",
      SCORE: 8
    },
    {
      ARTISTS: "Hail Mary Mallon",
      "ALBUM TITLE": "Bestiary",
      SCORE: 5
    },
    {
      ARTISTS: "OG Maco",
      "ALBUM TITLE": "OG Maco",
      SCORE: 7
    },
    {
      ARTISTS: "Foo Fighters",
      "ALBUM TITLE": "Sonic Highways",
      SCORE: 5
    },
    {
      ARTISTS: "Wu-Tang Clan",
      "ALBUM TITLE": "A Better Tomorrow",
      SCORE: 6
    },
    {
      ARTISTS: "Full of Hell",
      "ALBUM TITLE": "Full of Hell & Merzbow",
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      "ALBUM TITLE": "2014 Forest Hills Drive",
      SCORE: 6
    },
    {
      ARTISTS: "Ghostface Killah",
      "ALBUM TITLE": "36 Seasons",
      SCORE: 5
    },
    {
      ARTISTS: "The Wytches",
      "ALBUM TITLE": "Annabel Dream Reader",
      SCORE: 8
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Shady XV",
      SCORE: 4
    },
    {
      ARTISTS: "A$AP Ferg",
      "ALBUM TITLE": "Ferg Forever",
      SCORE: 7
    },
    {
      ARTISTS: "Clark",
      "ALBUM TITLE": "Clark",
      SCORE: 6
    },
    {
      ARTISTS: "Andy Stott",
      "ALBUM TITLE": "Faith In Strangers",
      SCORE: 7
    },
    {
      ARTISTS: "Mr. Oizo",
      "ALBUM TITLE": "The Church",
      SCORE: 7
    },
    {
      ARTISTS: "TVOTR",
      "ALBUM TITLE": "Seeds",
      SCORE: 6
    },
    {
      ARTISTS: "I Am Your Destruction",
      "ALBUM TITLE": "I Am Your Destruction",
      SCORE: 7
    },
    {
      ARTISTS: "Pink Floyd",
      "ALBUM TITLE": "The Endless River",
      SCORE: 6
    },
    {
      ARTISTS: "Megaton Leviathan",
      "ALBUM TITLE": "Past 21: Beyond The Arctic Cell",
      SCORE: 7
    },
    {
      ARTISTS: "Sterilizer",
      "ALBUM TITLE": "Sterilizer",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink",
      "ALBUM TITLE": "Pom Pom",
      SCORE: 9
    },
    {
      ARTISTS: "iamamiwhoami",
      "ALBUM TITLE": "Blue",
      SCORE: 6
    },
    {
      ARTISTS: "Pianos Become The Teeth",
      "ALBUM TITLE": "Keep You",
      SCORE: 4
    },
    {
      ARTISTS: "Dean Blunt",
      "ALBUM TITLE": "Black Metal",
      SCORE: 8
    },
    {
      ARTISTS: "Azealia Banks",
      "ALBUM TITLE": "Broke With Expensive Taste",
      SCORE: 5
    },
    {
      ARTISTS: "Wildbirds & Peacedrums",
      "ALBUM TITLE": "Rhythm",
      SCORE: 8
    },
    {
      ARTISTS: "Kayo Dot",
      "ALBUM TITLE": "Coffins On Io",
      SCORE: 6
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "Cadillactica",
      SCORE: 6
    },
    {
      ARTISTS: "Arca",
      "ALBUM TITLE": "Xen",
      SCORE: 6
    },
    {
      ARTISTS: "The World Is A Beautiful Place...",
      "ALBUM TITLE": "Between Bodies",
      SCORE: 5
    },
    {
      ARTISTS: "Deerhoof",
      "ALBUM TITLE": "La Isla Bonita",
      SCORE: 7
    },
    {
      ARTISTS: "Slipknot",
      "ALBUM TITLE": ".5: The Gray Chapter",
      SCORE: 4
    },
    {
      ARTISTS: "Black Milk",
      "ALBUM TITLE": "If There's A Hell Below",
      SCORE: 6
    },
    {
      ARTISTS: "Pharmakon",
      "ALBUM TITLE": "Bestial Burden",
      SCORE: 5
    },
    {
      ARTISTS: "Botanist",
      "ALBUM TITLE": "VI: Flora",
      SCORE: 8
    },
    {
      ARTISTS: "Panda Bear",
      "ALBUM TITLE": "Mr. Noah",
      SCORE: 6
    },
    {
      ARTISTS: "Royal Blood",
      "ALBUM TITLE": "Royal Blood",
      SCORE: 5
    },
    {
      ARTISTS: "Clockwork Indigo",
      "ALBUM TITLE": "Clockwork Indigo",
      SCORE: 7
    },
    {
      ARTISTS: "Run the Jewels",
      "ALBUM TITLE": "Run the Jewels 2",
      SCORE: 8
    },
    {
      ARTISTS: "Dope Body",
      "ALBUM TITLE": "Lifer",
      SCORE: 8
    },
    {
      ARTISTS: "Logic",
      "ALBUM TITLE": "Under Pressure",
      SCORE: 6
    },
    {
      ARTISTS: "Vince Staples",
      "ALBUM TITLE": "Hell Can Wait",
      SCORE: 7
    },
    {
      ARTISTS: "Scott Walker + Sunn o)))",
      "ALBUM TITLE": "Soused",
      SCORE: 6
    },
    {
      ARTISTS: "Sir Michael Rocks",
      "ALBUM TITLE": "Banco",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      "ALBUM TITLE": "...And Star Power",
      SCORE: 2
    },
    {
      ARTISTS: "Godflesh",
      "ALBUM TITLE": "A World Lit Only By Fire",
      SCORE: 7
    },
    {
      ARTISTS: "My Brightest Diamond",
      "ALBUM TITLE": "This Is My Hand",
      SCORE: 7
    },
    {
      ARTISTS: "Weezer",
      "ALBUM TITLE": "Everything Will Be Alright In The End",
      SCORE: 7
    },
    {
      ARTISTS: "alt-J",
      "ALBUM TITLE": "This Is All Yours",
      SCORE: 7
    },
    {
      ARTISTS: "Electric Wizard",
      "ALBUM TITLE": "Time To Die",
      SCORE: 5
    },
    {
      ARTISTS: "Childish Gambino",
      "ALBUM TITLE": "STN MTN / Kauai",
      SCORE: 4
    },
    {
      ARTISTS: "Caribou",
      "ALBUM TITLE": "Our Love",
      SCORE: 6
    },
    {
      ARTISTS: "Flying Lotus",
      "ALBUM TITLE": "You're Dead",
      SCORE: 8
    },
    {
      ARTISTS: "SBTRKT",
      "ALBUM TITLE": "Wonder Where We Land",
      SCORE: 5
    },
    {
      ARTISTS: "Shellac",
      "ALBUM TITLE": "Dude Incredible",
      SCORE: 6
    },
    {
      ARTISTS: "Iceage",
      "ALBUM TITLE": "Plowing Into the Field of Love",
      SCORE: 9
    },
    {
      ARTISTS: "Thom Yorke",
      "ALBUM TITLE": "Tomorrow's Modern Boxes",
      SCORE: 6
    },
    {
      ARTISTS: "Perfume Genius",
      "ALBUM TITLE": "Too Bright",
      SCORE: 8
    },
    {
      ARTISTS: "Interpol",
      "ALBUM TITLE": "El Pintor",
      SCORE: 6
    },
    {
      ARTISTS: "Julian Casablancas + The Voidz",
      "ALBUM TITLE": "Tyranny",
      SCORE: 7
    },
    {
      ARTISTS: "Milo",
      "ALBUM TITLE": "A Toothpaste Suburb",
      SCORE: 5
    },
    {
      ARTISTS: "Busdriver",
      "ALBUM TITLE": "Perfect Hair",
      SCORE: 8
    },
    {
      ARTISTS: "Banks",
      "ALBUM TITLE": "Goddess",
      SCORE: 5
    },
    {
      ARTISTS: "Aphex Twin",
      "ALBUM TITLE": "Syro",
      SCORE: 6
    },
    {
      ARTISTS: "NehruvianDOOM",
      "ALBUM TITLE": "NehruvianDOOM",
      SCORE: 5
    },
    {
      ARTISTS: "Yung Lean",
      "ALBUM TITLE": "Unknown Memory",
      SCORE: 4
    },
    {
      ARTISTS: "Earth",
      "ALBUM TITLE": "Primitive and Deadly",
      SCORE: 6
    },
    {
      ARTISTS: "Death From Above 1979",
      "ALBUM TITLE": "The Physical World",
      SCORE: 6
    },
    {
      ARTISTS: "The Bug",
      "ALBUM TITLE": "Angels & Devils",
      SCORE: 6
    },
    {
      ARTISTS: "Blonde Redhead",
      "ALBUM TITLE": "Barragán",
      SCORE: 6
    },
    {
      ARTISTS: "Opeth",
      "ALBUM TITLE": "Pale Communion",
      SCORE: 5
    },
    {
      ARTISTS: "Code Orange",
      "ALBUM TITLE": "I Am King",
      SCORE: 6
    },
    {
      ARTISTS: "Zammuto",
      "ALBUM TITLE": "Anchor",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall",
      "ALBUM TITLE": "Manipulator",
      SCORE: 6
    },
    {
      ARTISTS: "Travi$ Scott",
      "ALBUM TITLE": "Days Before Rodeo",
      SCORE: 3
    },
    {
      ARTISTS: "Rustie",
      "ALBUM TITLE": "Green Language",
      SCORE: 3
    },
    {
      ARTISTS: "Raury",
      "ALBUM TITLE": "Indigo Child",
      SCORE: 4
    },
    {
      ARTISTS: "Pallbearer",
      "ALBUM TITLE": "Foundations of Burden",
      SCORE: 6
    },
    {
      ARTISTS: "Uncommon Nasa",
      "ALBUM TITLE": "New York Telephone",
      SCORE: 8
    },
    {
      ARTISTS: "Michael Cera",
      "ALBUM TITLE": "True That",
      SCORE: 5
    },
    {
      ARTISTS: "Bölzer",
      "ALBUM TITLE": "Soma",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Armand Hammer",
      "ALBUM TITLE": "Furtive Movements",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Watsky",
      "ALBUM TITLE": "All You Can Do",
      SCORE: 4
    },
    {
      ARTISTS: "Antemasque",
      "ALBUM TITLE": "Antemasque",
      SCORE: 7
    },
    {
      ARTISTS: "Spooky Black",
      "ALBUM TITLE": "Leaving",
      SCORE: 5
    },
    {
      ARTISTS: "FKA Twigs",
      "ALBUM TITLE": "LP1",
      SCORE: 8
    },
    {
      ARTISTS: "Mick Jenkins",
      "ALBUM TITLE": "The Water[s]",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      "ALBUM TITLE": "Cellar Door: Terminus Ut Exordium",
      SCORE: 7
    },
    {
      ARTISTS: "Otis Brown III",
      "ALBUM TITLE": "The Thought of You",
      SCORE: 7
    },
    {
      ARTISTS: "Porter Robinson",
      "ALBUM TITLE": "Worlds",
      SCORE: 5
    },
    {
      ARTISTS: "PartyNextDoor",
      "ALBUM TITLE": "Two",
      SCORE: 2
    },
    {
      ARTISTS: "Spoon",
      "ALBUM TITLE": "They Want My Soul",
      SCORE: 7
    },
    {
      ARTISTS: "Mellowhype",
      "ALBUM TITLE": "INSA",
      SCORE: 3
    },
    {
      ARTISTS: "Jenny Lewis",
      "ALBUM TITLE": "The Voyager",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Kyary Pamyu Pamyu",
      "ALBUM TITLE": "Pikapika Fantajin",
      SCORE: 7
    },
    {
      ARTISTS: "Common",
      "ALBUM TITLE": "Nobody's Smiling",
      SCORE: 6
    },
    {
      ARTISTS: "Neil Cicierega",
      "ALBUM TITLE": "Mouth Sounds / Mouth Silence",
      SCORE: 8
    },
    {
      ARTISTS: "Joyce Manor",
      "ALBUM TITLE": "Never Hungover Again",
      SCORE: 6
    },
    {
      ARTISTS: "How To Dress Well",
      "ALBUM TITLE": "What Is This Heart?",
      SCORE: 6
    },
    {
      ARTISTS: "Fallujah",
      "ALBUM TITLE": "The Flesh Prevails",
      SCORE: 4
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Coalmine Records Presents: Unearthed",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Alvvays",
      "ALBUM TITLE": "Alvvays",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Shabazz Palaces",
      "ALBUM TITLE": "Lese Majesty",
      SCORE: 5
    },
    {
      ARTISTS: "Morrissey",
      "ALBUM TITLE": "World Peace is None of Your Business",
      SCORE: 5
    },
    {
      ARTISTS: "Weird Al Yankovic",
      "ALBUM TITLE": "Mandatory Fun",
      SCORE: 7
    },
    {
      ARTISTS: "Shlohmo & Jeremih",
      "ALBUM TITLE": "No More",
      SCORE: 5
    },
    {
      ARTISTS: "La Roux",
      "ALBUM TITLE": "Trouble In Paradise",
      SCORE: 8
    },
    {
      ARTISTS: "The Orwells",
      "ALBUM TITLE": "Disgracedland",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Panopticon",
      "ALBUM TITLE": "Roads To The North",
      SCORE: 8
    },
    {
      ARTISTS: "Deadmau5",
      "ALBUM TITLE": "While (1 Is Less Than 2)",
      SCORE: 7
    },
    {
      ARTISTS: "Sia",
      "ALBUM TITLE": "1000 Forms of Fear",
      SCORE: 7
    },
    {
      ARTISTS: "Wolves In the Throne Room",
      "ALBUM TITLE": "Celestite",
      SCORE: 8
    },
    {
      ARTISTS: "Lazer/Wulf",
      "ALBUM TITLE": "The Beast of Left and Right",
      SCORE: 7
    },
    {
      ARTISTS: "Wreck and Reference",
      "ALBUM TITLE": "Want",
      SCORE: 6
    },
    {
      ARTISTS: "Pearls Negras",
      "ALBUM TITLE": "Biggie Apple",
      SCORE: 8
    },
    {
      ARTISTS: "A Sunny Day In Glasgow",
      "ALBUM TITLE": "Sea When Absent",
      SCORE: 7
    },
    {
      ARTISTS: "USA Out of Vietnam",
      "ALBUM TITLE": "Crashing Diseases and Incurable Airplanes",
      SCORE: 7
    },
    {
      ARTISTS: "Apathy",
      "ALBUM TITLE": "Connecticut Casual",
      SCORE: 8
    },
    {
      ARTISTS: "Mastodon",
      "ALBUM TITLE": "Once More 'Round the Sun",
      SCORE: 7
    },
    {
      ARTISTS: "Ab-Soul",
      "ALBUM TITLE": "These Days...",
      SCORE: 5
    },
    {
      ARTISTS: "Open Mike Eagle",
      "ALBUM TITLE": "Dark Comedy",
      SCORE: 8
    },
    {
      ARTISTS: "Caustic Window",
      "ALBUM TITLE": "Caustic Window",
      SCORE: 6
    },
    {
      ARTISTS: "The Soft Pink Truth",
      "ALBUM TITLE": "Why Do The Heathen Rage?",
      SCORE: 7
    },
    {
      ARTISTS: "Lone",
      "ALBUM TITLE": "Reality Testing",
      SCORE: 3
    },
    {
      ARTISTS: "ZelooperZ",
      "ALBUM TITLE": "HELP",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "The Powers That B Pt. 1 a.k.a. Niggas On The Moon",
      SCORE: "none"
    },
    {
      ARTISTS: "Lana Del Rey",
      "ALBUM TITLE": "Ultraviolence",
      SCORE: 2
    },
    {
      ARTISTS: "Bones",
      "ALBUM TITLE": "Garbage",
      SCORE: 6
    },
    {
      ARTISTS: "Mayhem",
      "ALBUM TITLE": "Esoteric Warfare",
      SCORE: 7
    },
    {
      ARTISTS: "Jack White",
      "ALBUM TITLE": "Lazaretto",
      SCORE: 5
    },
    {
      ARTISTS: "Trap Them",
      "ALBUM TITLE": "Blissfucker",
      SCORE: 5
    },
    {
      ARTISTS: "Ben Frost",
      "ALBUM TITLE": "A U R O R A",
      SCORE: 5
    },
    {
      ARTISTS: "Parquet Courts",
      "ALBUM TITLE": "Sunbathing Animal",
      SCORE: 4
    },
    {
      ARTISTS: "Blu",
      "ALBUM TITLE": "Good To Be Home",
      SCORE: 6
    },
    {
      ARTISTS: "RiFF RAFF",
      "ALBUM TITLE": "NEON iCON",
      SCORE: 5
    },
    {
      ARTISTS: "Coldplay",
      "ALBUM TITLE": "Ghost Stories",
      SCORE: 4
    },
    {
      ARTISTS: "clipping.",
      "ALBUM TITLE": "CLPPNG",
      SCORE: 9
    },
    {
      ARTISTS: "Eyehategod",
      "ALBUM TITLE": "Eyehategod",
      SCORE: 6
    },
    {
      ARTISTS: "Sharon Van Etten",
      "ALBUM TITLE": "Are We There",
      SCORE: 6
    },
    {
      ARTISTS: "Owen Pallett",
      "ALBUM TITLE": "In Conflict",
      SCORE: 7
    },
    {
      ARTISTS: "Trash Talk",
      "ALBUM TITLE": "No Peace",
      SCORE: 5
    },
    {
      ARTISTS: "Pink Guy",
      "ALBUM TITLE": "Pink Guy",
      SCORE: "burp"
    },
    {
      ARTISTS: "The Roots",
      "ALBUM TITLE": "...And Then You Shoot Your Cousin",
      SCORE: 4
    },
    {
      ARTISTS: "Tobacco",
      "ALBUM TITLE": "Ultima II Massage",
      SCORE: 8
    },
    {
      ARTISTS: "Chromeo",
      "ALBUM TITLE": "White Women",
      SCORE: 5
    },
    {
      ARTISTS: "Vallenfyre",
      "ALBUM TITLE": "Splinters",
      SCORE: 7
    },
    {
      ARTISTS: "Swans",
      "ALBUM TITLE": "To Be Kind",
      SCORE: 10
    },
    {
      ARTISTS: "Ibibio Sound Machine",
      "ALBUM TITLE": "Ibibio Sound Machine",
      SCORE: 7
    },
    {
      ARTISTS: "Little Dragon",
      "ALBUM TITLE": "Nabuma Rubberband",
      SCORE: 6
    },
    {
      ARTISTS: "The Black Keys",
      "ALBUM TITLE": "Turn Blue",
      SCORE: 4
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "Faces",
      SCORE: 6
    },
    {
      ARTISTS: "Lykke Li",
      "ALBUM TITLE": "I Never Learn",
      SCORE: 6
    },
    {
      ARTISTS: "Damon Albarn",
      "ALBUM TITLE": "Everyday Robots",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew Jackson Jihad",
      "ALBUM TITLE": "Christmas Island",
      SCORE: 5
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      "ALBUM TITLE": "III",
      SCORE: 7
    },
    {
      ARTISTS: "Sleaford Mods",
      "ALBUM TITLE": "Divide & Exit",
      SCORE: 6
    },
    {
      ARTISTS: "Ought",
      "ALBUM TITLE": "More Than Any Other Day",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      "ALBUM TITLE": "Honest",
      SCORE: 2
    },
    {
      ARTISTS: "tUnE-yArDs",
      "ALBUM TITLE": "Nikki Nack",
      SCORE: 8
    },
    {
      ARTISTS: "Lord Mantis",
      "ALBUM TITLE": "Death Mask",
      SCORE: 6
    },
    {
      ARTISTS: "Pixies",
      "ALBUM TITLE": "Indie Cindy",
      SCORE: 4
    },
    {
      ARTISTS: "John Frusciante",
      "ALBUM TITLE": "Enclosure",
      SCORE: 2
    },
    {
      ARTISTS: "Pharoahe Monch",
      "ALBUM TITLE": "P.T.S.D.",
      SCORE: 7
    },
    {
      ARTISTS: "Chet Faker",
      "ALBUM TITLE": "Built On Glass",
      SCORE: 3
    },
    {
      ARTISTS: "The Hotelier",
      "ALBUM TITLE": "Home, Like NoPlace Is There",
      SCORE: 6
    },
    {
      ARTISTS: "Carla Bozulich",
      "ALBUM TITLE": "Boy",
      SCORE: 8
    },
    {
      ARTISTS: "Thantifaxath",
      "ALBUM TITLE": "Sacred White Noise",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Herb",
      "ALBUM TITLE": "Welcome To Fazoland",
      SCORE: 7
    },
    {
      ARTISTS: "IDYLLS",
      "ALBUM TITLE": "PRAYER FOR TERRENE",
      SCORE: 8
    },
    {
      ARTISTS: "Girl Talk & Freeway",
      "ALBUM TITLE": "Broken Ankles",
      SCORE: 8
    },
    {
      ARTISTS: "CunninLynguists",
      "ALBUM TITLE": "Strange Journey Vol. 3",
      SCORE: 7
    },
    {
      ARTISTS: "SZA",
      "ALBUM TITLE": "Z",
      SCORE: 4
    },
    {
      ARTISTS: "Todd Terje",
      "ALBUM TITLE": "It's Album Time",
      SCORE: 6
    },
    {
      ARTISTS: "Ratking",
      "ALBUM TITLE": "So It Goes",
      SCORE: 8
    },
    {
      ARTISTS: "Cloud Nothings",
      "ALBUM TITLE": "Here And Nowhere Else",
      SCORE: 6
    },
    {
      ARTISTS: "Sisyphus",
      "ALBUM TITLE": "Sisyphus",
      SCORE: 7
    },
    {
      ARTISTS: "Avey Tare's Slasher Flicks",
      "ALBUM TITLE": "Enter The Slasher House",
      SCORE: 5
    },
    {
      ARTISTS: "OFF!",
      "ALBUM TITLE": "Wasted Years",
      SCORE: 7
    },
    {
      ARTISTS: "Tony Molina",
      "ALBUM TITLE": "Dissed and Dismissed",
      SCORE: 7
    },
    {
      ARTISTS: "Timber Timbre",
      "ALBUM TITLE": "Hot Dreams",
      SCORE: 8
    },
    {
      ARTISTS: "Mø",
      "ALBUM TITLE": "No Mythologies To Follow",
      SCORE: 6
    },
    {
      ARTISTS: "White Hinterland",
      "ALBUM TITLE": "Baby",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Demarco",
      "ALBUM TITLE": "Salad Days",
      SCORE: 5
    },
    {
      ARTISTS: "Nocando",
      "ALBUM TITLE": "Jimmy The Burnout",
      SCORE: 6
    },
    {
      ARTISTS: "PLANNINGTOROCK",
      "ALBUM TITLE": "All Love's Legal",
      SCORE: "???"
    },
    {
      ARTISTS: "YG",
      "ALBUM TITLE": "My Krazy Life",
      SCORE: 6
    },
    {
      ARTISTS: "Wild Beasts",
      "ALBUM TITLE": "Present Tense",
      SCORE: 7
    },
    {
      ARTISTS: "Onyx",
      "ALBUM TITLE": "Wakedafucup",
      SCORE: 7
    },
    {
      ARTISTS: "Skrillex",
      "ALBUM TITLE": "Recess",
      SCORE: 5
    },
    {
      ARTISTS: "Liars",
      "ALBUM TITLE": "Mess",
      SCORE: 8
    },
    {
      ARTISTS: "Future Islands",
      "ALBUM TITLE": "Singles",
      SCORE: 7
    },
    {
      ARTISTS: "Big Ups",
      "ALBUM TITLE": "Eighteen Hours of Static",
      SCORE: 8
    },
    {
      ARTISTS: "Tycho",
      "ALBUM TITLE": "Awake",
      SCORE: 6
    },
    {
      ARTISTS: "The War On Drugs",
      "ALBUM TITLE": "Lost In The Dream",
      SCORE: 7
    },
    {
      ARTISTS: "Evian Christ",
      "ALBUM TITLE": "Waterfall",
      SCORE: 7
    },
    {
      ARTISTS: "Freddie Gibbs & Madlib",
      "ALBUM TITLE": "Piñata",
      SCORE: 9
    },
    {
      ARTISTS: "La Dispute",
      "ALBUM TITLE": "The Rooms of the House",
      SCORE: 7
    },
    {
      ARTISTS: "Pharrell",
      "ALBUM TITLE": "G I R L",
      SCORE: 3
    },
    {
      ARTISTS: "Migos",
      "ALBUM TITLE": "No Label II",
      SCORE: 5
    },
    {
      ARTISTS: "Real Estate",
      "ALBUM TITLE": "Atlas",
      SCORE: 3
    },
    {
      ARTISTS: "White Suns",
      "ALBUM TITLE": "Totem",
      SCORE: 8
    },
    {
      ARTISTS: "Rick Ross",
      "ALBUM TITLE": "Mastermind",
      SCORE: "uhhhhhhhhh"
    },
    {
      ARTISTS: "Beck",
      "ALBUM TITLE": "Morning Phase",
      SCORE: 4
    },
    {
      ARTISTS: "St. Vincent",
      "ALBUM TITLE": "St. Vincent",
      SCORE: 7
    },
    {
      ARTISTS: "Schoolboy Q",
      "ALBUM TITLE": "Oxymoron",
      SCORE: 7
    },
    {
      ARTISTS: "Temples",
      "ALBUM TITLE": "Sun Structures",
      SCORE: 5
    },
    {
      ARTISTS: "Sunn O))) & Ulver",
      "ALBUM TITLE": "Terrestrials",
      SCORE: 6
    },
    {
      ARTISTS: "Artificial Brain",
      "ALBUM TITLE": "Labyrinth Constellation",
      SCORE: 8
    },
    {
      ARTISTS: "Sun Kil Moon",
      "ALBUM TITLE": "Benji",
      SCORE: 9
    },
    {
      ARTISTS: "Angel Olsen",
      "ALBUM TITLE": "Burn Your Fire For No Witness",
      SCORE: 5
    },
    {
      ARTISTS: "Xiu Xiu",
      "ALBUM TITLE": "Angel Guts: Red Classroom",
      SCORE: 7
    },
    {
      ARTISTS: "Glitch Mob",
      "ALBUM TITLE": "Love Death Immortality",
      SCORE: 3
    },
    {
      ARTISTS: "Step Brothers",
      "ALBUM TITLE": "Lord Steppington",
      SCORE: 8
    },
    {
      ARTISTS: "Behemoth",
      "ALBUM TITLE": "The Satanist",
      SCORE: 9
    },
    {
      ARTISTS: "Isaiah Rashad",
      "ALBUM TITLE": "Cilvia Demo",
      SCORE: 6
    },
    {
      ARTISTS: "Young Fathers",
      "ALBUM TITLE": "Dead",
      SCORE: 6
    },
    {
      ARTISTS: "Actress",
      "ALBUM TITLE": "Ghettoville",
      SCORE: 8
    },
    {
      ARTISTS: "Have A Nice Life",
      "ALBUM TITLE": "The Unnatural World",
      SCORE: 8
    },
    {
      ARTISTS: "An Autumn For Crippled Children",
      "ALBUM TITLE": "Try Not To Destroy Everything You Love",
      SCORE: 7
    },
    {
      ARTISTS: "Indian",
      "ALBUM TITLE": "From All Purity",
      SCORE: 8
    },
    {
      ARTISTS: "Mogwai",
      "ALBUM TITLE": "Rave Tapes",
      SCORE: 6
    },
    {
      ARTISTS: "Against Me!",
      "ALBUM TITLE": "Transgender Dysphoria Blues",
      SCORE: 5
    },
    {
      ARTISTS: "Silver Mount Zion",
      "ALBUM TITLE": "Fuck Off Get Free We Pour Light On Everything",
      SCORE: 8
    },
    {
      ARTISTS: "Murmur",
      "ALBUM TITLE": "Murmur",
      SCORE: 8
    },
    {
      ARTISTS: "Nils Frahm",
      "ALBUM TITLE": "Spaces",
      SCORE: 7
    },
    {
      ARTISTS: "Lee Bannon",
      "ALBUM TITLE": "Alternate/Endings",
      SCORE: 6
    },
    {
      ARTISTS: "Xiu Xiu",
      "ALBUM TITLE": "Nina",
      SCORE: 8
    },
    {
      ARTISTS: "Calvaiire",
      "ALBUM TITLE": "Forceps",
      SCORE: 7
    },
    {
      ARTISTS: "Beyoncé",
      "ALBUM TITLE": "Beyoncé",
      SCORE: 6
    },
    {
      ARTISTS: "Nina Simone",
      "ALBUM TITLE": "Pastel Blues",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Prince and the Revolution",
      "ALBUM TITLE": "Purple Rain",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Fugazi",
      "ALBUM TITLE": "Repeater",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Johnny Cash",
      "ALBUM TITLE": "At Folsom Prison",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "The Velvet Underground & Nico",
      "ALBUM TITLE": "The Velvet Underground & Nico",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Burial",
      "ALBUM TITLE": "Rival Dealer",
      SCORE: 5
    },
    {
      ARTISTS: "Hellfyre Club",
      "ALBUM TITLE": "Dorner vs. Tookie",
      SCORE: 7
    },
    {
      ARTISTS: "Future Of The Left",
      "ALBUM TITLE": "How To Stop Your Brain In An Accident",
      SCORE: 8
    },
    {
      ARTISTS: "Childish Gambino",
      "ALBUM TITLE": "Because The Internet",
      SCORE: 5
    },
    {
      ARTISTS: "Gesaffelstein",
      "ALBUM TITLE": "Aleph",
      SCORE: 5
    },
    {
      ARTISTS: "Arabrot",
      "ALBUM TITLE": "Arabrot",
      SCORE: 6
    },
    {
      ARTISTS: "Hopsin",
      "ALBUM TITLE": "Knock Madness",
      SCORE: 3
    },
    {
      ARTISTS: "Da Mafia 6ix",
      "ALBUM TITLE": "6ix Commandments",
      SCORE: 8
    },
    {
      ARTISTS: "Sadsic",
      "ALBUM TITLE": "Sadsic",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Quelle Chris",
      "ALBUM TITLE": "Ghost At The Finish Line",
      SCORE: 7
    },
    {
      ARTISTS: "Blood Orange",
      "ALBUM TITLE": "Cupid Deluxe",
      SCORE: 2
    },
    {
      ARTISTS: "Sky Ferreira",
      "ALBUM TITLE": "Night Time, My Time",
      SCORE: 4
    },
    {
      ARTISTS: "Soupcans",
      "ALBUM TITLE": "Parasite Brain",
      SCORE: 7
    },
    {
      ARTISTS: "Moonface",
      "ALBUM TITLE": "Julia With Blue Jeans On",
      SCORE: 7
    },
    {
      ARTISTS: "M.I.A.",
      "ALBUM TITLE": "Matangi",
      SCORE: 7
    },
    {
      ARTISTS: "Daniel Avery",
      "ALBUM TITLE": "Drone Logic",
      SCORE: 8
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Government Plates",
      SCORE: 6
    },
    {
      ARTISTS: "Lady Gaga",
      "ALBUM TITLE": "Artpop",
      SCORE: 6
    },
    {
      ARTISTS: "Cara Neir",
      "ALBUM TITLE": "Portals To A Better, Dead World",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson & Party Supplies",
      "ALBUM TITLE": "Blue Chips 2",
      SCORE: 6
    },
    {
      ARTISTS: "The Debauchees",
      "ALBUM TITLE": "Big Machines and Peculiar Beings",
      SCORE: 7
    },
    {
      ARTISTS: "Eminem",
      "ALBUM TITLE": "The Marshall Mathers LP 2",
      SCORE: 7
    },
    {
      ARTISTS: "Black Milk",
      "ALBUM TITLE": "No Poison No Paradise",
      SCORE: 8
    },
    {
      ARTISTS: "Four Tet",
      "ALBUM TITLE": "Beautiful Rewind",
      SCORE: 7
    },
    {
      ARTISTS: "Sisu",
      "ALBUM TITLE": "Blood Tears",
      SCORE: 6
    },
    {
      ARTISTS: "Arcade Fire",
      "ALBUM TITLE": "Reflektor",
      SCORE: 5
    },
    {
      ARTISTS: "Glasser",
      "ALBUM TITLE": "Interiors",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Toxic Holocaust",
      "ALBUM TITLE": "Chemistry of Consciousness",
      SCORE: 6
    },
    {
      ARTISTS: "Cage The Elephant",
      "ALBUM TITLE": "Melophobia",
      SCORE: 8
    },
    {
      ARTISTS: "AFI",
      "ALBUM TITLE": "Burials",
      SCORE: 2
    },
    {
      ARTISTS: "Shad",
      "ALBUM TITLE": "Flying Colours",
      SCORE: 7
    },
    {
      ARTISTS: "Armand Hammer",
      "ALBUM TITLE": "Race Music",
      SCORE: 8
    },
    {
      ARTISTS: "Cults",
      "ALBUM TITLE": "Static",
      SCORE: 4
    },
    {
      ARTISTS: "The Dismemberment Plan",
      "ALBUM TITLE": "Uncanny Valley",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Tim Hecker",
      "ALBUM TITLE": "Virgins",
      SCORE: 9
    },
    {
      ARTISTS: "CHVRCHES",
      "ALBUM TITLE": "The Bones of What You Believe",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Oranssi Pazuzu",
      "ALBUM TITLE": "Valonielu",
      SCORE: 6
    },
    {
      ARTISTS: "Melt-Banana",
      "ALBUM TITLE": "Fetch",
      SCORE: 9
    },
    {
      ARTISTS: "Fuzz",
      "ALBUM TITLE": "Fuzz",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Pusha T",
      "ALBUM TITLE": "My Name Is My Name",
      SCORE: 6
    },
    {
      ARTISTS: "Haim",
      "ALBUM TITLE": "Days Are Gone",
      SCORE: "NONE"
    },
    {
      ARTISTS: "of Montreal",
      "ALBUM TITLE": "Lousy With Sylvianbriar",
      SCORE: 8
    },
    {
      ARTISTS: "Darkside",
      "ALBUM TITLE": "Psychic",
      SCORE: 8
    },
    {
      ARTISTS: "Haunted Horses",
      "ALBUM TITLE": "Watcher",
      SCORE: 7
    },
    {
      ARTISTS: "Lorde",
      "ALBUM TITLE": "Pure Heroine",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Danny Brown",
      "ALBUM TITLE": "Old",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      "ALBUM TITLE": "R Plus Seven",
      SCORE: 6
    },
    {
      ARTISTS: "Mazzy Star",
      "ALBUM TITLE": "Seasons Of Your Day",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Touché Amoré",
      "ALBUM TITLE": "Is Survived By",
      SCORE: 8
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "Nothing Was The Same",
      SCORE: 5
    },
    {
      ARTISTS: "Bill Callahan",
      "ALBUM TITLE": "Dream River",
      SCORE: 8
    },
    {
      ARTISTS: "Machinedrum",
      "ALBUM TITLE": "Vapor City",
      SCORE: 7
    },
    {
      ARTISTS: "Flatbush Zombies",
      "ALBUM TITLE": "BetterOffDEAD",
      SCORE: 8
    },
    {
      ARTISTS: "Kayo Dot",
      "ALBUM TITLE": "Hubardo",
      SCORE: 7
    },
    {
      ARTISTS: "MGMT",
      "ALBUM TITLE": "MGMT",
      SCORE: 6
    },
    {
      ARTISTS: "Crystal Stilts",
      "ALBUM TITLE": "Nature Noir",
      SCORE: 6
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "Kiss Land",
      SCORE: 5
    },
    {
      ARTISTS: "Denzel Curry",
      "ALBUM TITLE": "Nostalgic 64",
      SCORE: 7
    },
    {
      ARTISTS: "Janelle Monáe",
      "ALBUM TITLE": "The Electric Lady",
      SCORE: 7
    },
    {
      ARTISTS: "Factory Floor",
      "ALBUM TITLE": "Factory Floor",
      SCORE: 6
    },
    {
      ARTISTS: "Holy Ghost!",
      "ALBUM TITLE": "Dynamics",
      SCORE: 7
    },
    {
      ARTISTS: "Chelsea Wolfe",
      "ALBUM TITLE": "Pain Is Beauty",
      SCORE: 8
    },
    {
      ARTISTS: "Nine Inch Nails",
      "ALBUM TITLE": "Hesitation Marks",
      SCORE: 6
    },
    {
      ARTISTS: "Arctic Monkeys",
      "ALBUM TITLE": "AM",
      SCORE: 3
    },
    {
      ARTISTS: "Dizzy Wright",
      "ALBUM TITLE": "The Golden Age",
      SCORE: 5
    },
    {
      ARTISTS: "Holograms",
      "ALBUM TITLE": "Forever",
      SCORE: 6
    },
    {
      ARTISTS: "Jonathan Rado",
      "ALBUM TITLE": "Law & Order",
      SCORE: 4
    },
    {
      ARTISTS: "YC The Cynic",
      "ALBUM TITLE": "GNK",
      SCORE: 8
    },
    {
      ARTISTS: "Gorguts",
      "ALBUM TITLE": "Colored Sands",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      "ALBUM TITLE": "The Lords of Flatbush",
      SCORE: 5
    },
    {
      ARTISTS: "Dawn of Midi",
      "ALBUM TITLE": "Dysnomia",
      SCORE: 5
    },
    {
      ARTISTS: "King Krule",
      "ALBUM TITLE": "6 Feet Beneath The Moon",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Ferg",
      "ALBUM TITLE": "Trap Lord",
      SCORE: 7
    },
    {
      ARTISTS: "Earl Sweatshirt",
      "ALBUM TITLE": "Doris",
      SCORE: 6
    },
    {
      ARTISTS: "Julia Holter",
      "ALBUM TITLE": "Loud City Song",
      SCORE: 8
    },
    {
      ARTISTS: "No Age",
      "ALBUM TITLE": "An Object",
      SCORE: 6
    },
    {
      ARTISTS: "Washed Out",
      "ALBUM TITLE": "Paracosm",
      SCORE: 6
    },
    {
      ARTISTS: "TOAD",
      "ALBUM TITLE": "Endless Night",
      SCORE: 7
    },
    {
      ARTISTS: "Modern Life Is War",
      "ALBUM TITLE": "Fever Hunting",
      SCORE: 7
    },
    {
      ARTISTS: "Tech N9ne",
      "ALBUM TITLE": "Something Else",
      SCORE: 4
    },
    {
      ARTISTS: "Dead In The Dirt",
      "ALBUM TITLE": "The Blind Hole",
      SCORE: 6
    },
    {
      ARTISTS: "Candy Claws",
      "ALBUM TITLE": "Ceres & Calypso In The Deep Time",
      SCORE: 7
    },
    {
      ARTISTS: "Sampha",
      "ALBUM TITLE": "DUAL",
      SCORE: "NONE"
    },
    {
      ARTISTS: "AlunaGeorge",
      "ALBUM TITLE": "Body Music",
      SCORE: 7
    },
    {
      ARTISTS: "All Pigs Must Die",
      "ALBUM TITLE": "Nothing Violates This Nature",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Ka",
      "ALBUM TITLE": "The Night's Gambit",
      SCORE: 8
    },
    {
      ARTISTS: "Edward Sharpe & The Magnetic Zeros",
      "ALBUM TITLE": "Edward Sharpe & The Magnetic Zeros",
      SCORE: 3
    },
    {
      ARTISTS: "Arca",
      "ALBUM TITLE": "&&&&&",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Fuck Buttons",
      "ALBUM TITLE": "Slow Focus",
      SCORE: 6
    },
    {
      ARTISTS: "Stone Titan",
      "ALBUM TITLE": "Scratch N' Sniff (MINI)",
      SCORE: 8
    },
    {
      ARTISTS: "letlive.",
      "ALBUM TITLE": "The Blackest Beautiful",
      SCORE: 5
    },
    {
      ARTISTS: "Lycus",
      "ALBUM TITLE": "Tempest",
      SCORE: 7
    },
    {
      ARTISTS: "Yung Lean",
      "ALBUM TITLE": "Unknown Death 2002",
      SCORE: "bread"
    },
    {
      ARTISTS: "Milo",
      "ALBUM TITLE": "Cavalcade",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mariam The Believer",
      "ALBUM TITLE": "Blood Donation",
      SCORE: 8
    },
    {
      ARTISTS: "Ghostpoet",
      "ALBUM TITLE": "Some Say I So I Say Light",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Jagwar Ma",
      "ALBUM TITLE": "Howlin",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Autopsy",
      "ALBUM TITLE": "The Headless Ritual",
      SCORE: 6
    },
    {
      ARTISTS: "James Holden",
      "ALBUM TITLE": "The Inheritors",
      SCORE: 7
    },
    {
      ARTISTS: "Jay-Z",
      "ALBUM TITLE": "Magna Carta... Holy Grail",
      SCORE: 6
    },
    {
      ARTISTS: "Billy Woods",
      "ALBUM TITLE": "Dour Candy",
      SCORE: 7
    },
    {
      ARTISTS: "Run The Jewels",
      "ALBUM TITLE": "Run The Jewels",
      SCORE: 8
    },
    {
      ARTISTS: "Joey Bada$$",
      "ALBUM TITLE": "Summer Knights",
      SCORE: 7
    },
    {
      ARTISTS: "Jarren Benton",
      "ALBUM TITLE": "My Grandmother's Basement",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Kyary Pamyu Pamyu",
      "ALBUM TITLE": "Nandacollection",
      SCORE: 8
    },
    {
      ARTISTS: "Daftside",
      "ALBUM TITLE": "Random Access Memories Memories",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Locrian",
      "ALBUM TITLE": "Return to Annihilation",
      SCORE: 6
    },
    {
      ARTISTS: "Black Sabbath",
      "ALBUM TITLE": 13,
      SCORE: "NONE"
    },
    {
      ARTISTS: "Smith Westerns",
      "ALBUM TITLE": "Soft Will",
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      "ALBUM TITLE": "Born Sinner",
      SCORE: 5
    },
    {
      ARTISTS: "Havok",
      "ALBUM TITLE": "Unnatural Selection",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "Watching Movies With the Sound Off",
      SCORE: 6
    },
    {
      ARTISTS: "Zomby",
      "ALBUM TITLE": "With Love",
      SCORE: 5
    },
    {
      ARTISTS: "Sigur Rós",
      "ALBUM TITLE": "Kveikur",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Power Trip",
      "ALBUM TITLE": "Manifest Decimation",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Melt Yourself Down",
      "ALBUM TITLE": "Melt Yourself Down",
      SCORE: 7
    },
    {
      ARTISTS: "Kanye West",
      "ALBUM TITLE": "Yeezus",
      SCORE: 5
    },
    {
      ARTISTS: "Jon Hopkins",
      "ALBUM TITLE": "Immunity",
      SCORE: 8
    },
    {
      ARTISTS: "Mount Kimbie",
      "ALBUM TITLE": "Cold Spring Fault Less Youth",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mr. Muthafuckin' eXquire",
      "ALBUM TITLE": "Kismet",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      "ALBUM TITLE": "Saaab Stories",
      SCORE: "f"
    },
    {
      ARTISTS: "Young Fathers",
      "ALBUM TITLE": "Tape Two",
      SCORE: 8
    },
    {
      ARTISTS: "Boards of Canada",
      "ALBUM TITLE": "Tomorrow's Harvest",
      SCORE: 6
    },
    {
      ARTISTS: "Primal Scream",
      "ALBUM TITLE": "More Light",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Pharmakon",
      "ALBUM TITLE": "Abandon",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Thundercat",
      "ALBUM TITLE": "Apocalypse",
      SCORE: 3
    },
    {
      ARTISTS: "Laura Marling",
      "ALBUM TITLE": "Once I Was An Eagle",
      SCORE: 7
    },
    {
      ARTISTS: "CX KiDTRONiK",
      "ALBUM TITLE": "KRAK ATTACK 2: THE BALLAD OF ELLI SKIFF",
      SCORE: 6
    },
    {
      ARTISTS: "Disclosure",
      "ALBUM TITLE": "Settle",
      SCORE: 7
    },
    {
      ARTISTS: "Queens of the Stone Age",
      "ALBUM TITLE": "...Like Clockwork",
      SCORE: 9
    },
    {
      ARTISTS: "Bibio",
      "ALBUM TITLE": "Silver Wilkinson",
      SCORE: 7
    },
    {
      ARTISTS: "Deafheaven",
      "ALBUM TITLE": "Sunbather",
      SCORE: 8
    },
    {
      ARTISTS: "Quasimoto",
      "ALBUM TITLE": "Yessir Whatever",
      SCORE: 7
    },
    {
      ARTISTS: "Baths",
      "ALBUM TITLE": "Obsidian",
      SCORE: 6
    },
    {
      ARTISTS: "Travis Scott",
      "ALBUM TITLE": "Owl Pharaoh",
      SCORE: 3
    },
    {
      ARTISTS:
        "The World Is A Beautiful Place And I Am No Longer Afraid To Die",
      "ALBUM TITLE": "Whenever, If Ever",
      SCORE: 7
    },
    {
      ARTISTS: "Classixx",
      "ALBUM TITLE": "Hanging Gardens",
      SCORE: 6
    },
    {
      ARTISTS: "This Routine Is Hell",
      "ALBUM TITLE": "Howl",
      SCORE: 8
    },
    {
      ARTISTS: "Anamanaguchi",
      "ALBUM TITLE": "Endless Fantasy",
      SCORE: 6
    },
    {
      ARTISTS: "The National",
      "ALBUM TITLE": "Trouble Will Find Me",
      SCORE: 4
    },
    {
      ARTISTS: "Daft Punk",
      "ALBUM TITLE": "Random Access Memories",
      SCORE: 8
    },
    {
      ARTISTS: "The Dillinger Escape Plan",
      "ALBUM TITLE": "One Of Us Is The Killer",
      SCORE: 8
    },
    {
      ARTISTS: "Co La",
      "ALBUM TITLE": "Moody Coup",
      SCORE: 6
    },
    {
      ARTISTS: "Vampire Weekend",
      "ALBUM TITLE": "Modern Vampires of the City",
      SCORE: 7
    },
    {
      ARTISTS: "Charli XCX",
      "ALBUM TITLE": "True Romance",
      SCORE: 3
    },
    {
      ARTISTS: "The Uncluded",
      "ALBUM TITLE": "Hokey Fright",
      SCORE: 7
    },
    {
      ARTISTS: "Phoenix",
      "ALBUM TITLE": "Bankrupt!",
      SCORE: 5
    },
    {
      ARTISTS: "Little Women",
      "ALBUM TITLE": "Lung",
      SCORE: 6
    },
    {
      ARTISTS: "Chance The Rapper",
      "ALBUM TITLE": "Acid Rap",
      SCORE: 6
    },
    {
      ARTISTS: "Altar of Plagues",
      "ALBUM TITLE": "Teethed Glory and Injury",
      SCORE: 9
    },
    {
      ARTISTS: "R.A. The Rugged Man",
      "ALBUM TITLE": "Legends Never Die",
      SCORE: 6
    },
    {
      ARTISTS: "Savages",
      "ALBUM TITLE": "Silence Yourself",
      SCORE: 8
    },
    {
      ARTISTS: "The Haxan Cloak",
      "ALBUM TITLE": "Excavation",
      SCORE: 8
    },
    {
      ARTISTS: "Jenny Hval",
      "ALBUM TITLE": "Innocence Is Kinky",
      SCORE: 7
    },
    {
      ARTISTS: "Iggy And The Stooges",
      "ALBUM TITLE": "Ready To Die",
      SCORE: 4
    },
    {
      ARTISTS: "Colin Stetson",
      "ALBUM TITLE": "New History Warfare Vol. 3: To See More Light",
      SCORE: 7
    },
    {
      ARTISTS: "Deerhunter",
      "ALBUM TITLE": "Monomania",
      SCORE: 6
    },
    {
      ARTISTS: "Yeah Yeah Yeahs",
      "ALBUM TITLE": "Mosquito",
      SCORE: 5
    },
    {
      ARTISTS: "Soap&Skin",
      "ALBUM TITLE": "Sugarbread 7",
      SCORE: 7
    },
    {
      ARTISTS: "Ghostface Killah and Adrian Younge",
      "ALBUM TITLE": "Twelve Reasons To Die",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      "ALBUM TITLE": "Indicud",
      SCORE: 2
    },
    {
      ARTISTS: "Kurt Vile",
      "ALBUM TITLE": "Wakin On A Pretty Daze",
      SCORE: 8
    },
    {
      ARTISTS: "Phosphorescent",
      "ALBUM TITLE": "Muchacho",
      SCORE: 6
    },
    {
      ARTISTS: "Thee Oh Sees",
      "ALBUM TITLE": "Floating Coffin",
      SCORE: 5
    },
    {
      ARTISTS: "Ghost",
      "ALBUM TITLE": "Infestissumam",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "King Remembered In Time",
      SCORE: 7
    },
    {
      ARTISTS: "Makthaverskan",
      "ALBUM TITLE": "II",
      SCORE: 7
    },
    {
      ARTISTS: "The Flaming Lips",
      "ALBUM TITLE": "The Terror",
      SCORE: 6
    },
    {
      ARTISTS: "Bring Me The Horizon",
      "ALBUM TITLE": "Sempiternal",
      SCORE: 4
    },
    {
      ARTISTS: "James Blake",
      "ALBUM TITLE": "Overgrown",
      SCORE: 7
    },
    {
      ARTISTS: "The Knife",
      "ALBUM TITLE": "Shaking The Habitual",
      SCORE: 9
    },
    {
      ARTISTS: "The Black Heart Rebellion",
      "ALBUM TITLE": "Har Nevo",
      SCORE: 7
    },
    {
      ARTISTS: "The Mary Onettes",
      "ALBUM TITLE": "Hit The Waves",
      SCORE: 7
    },
    {
      ARTISTS: "Tyler, The Creator",
      "ALBUM TITLE": "Wolf",
      SCORE: 6
    },
    {
      ARTISTS: "Wavves",
      "ALBUM TITLE": "Afraid of Heights",
      SCORE: 6
    },
    {
      ARTISTS: "Lapalux",
      "ALBUM TITLE": "Nostalchic",
      SCORE: 7
    },
    {
      ARTISTS: "Bonobo",
      "ALBUM TITLE": "The North Borders",
      SCORE: 6
    },
    {
      ARTISTS: "Kvelertak",
      "ALBUM TITLE": "Meir",
      SCORE: 8
    },
    {
      ARTISTS: "The Drones",
      "ALBUM TITLE": "I See Seaweed",
      SCORE: 8
    },
    {
      ARTISTS: "KEN mode",
      "ALBUM TITLE": "Entrench",
      SCORE: 7
    },
    {
      ARTISTS: "Justin Timberlake",
      "ALBUM TITLE": "The 20/20 Experience",
      SCORE: 5
    },
    {
      ARTISTS: "The Game",
      "ALBUM TITLE": "The Next Day",
      SCORE: 7
    },
    {
      ARTISTS: "The Strokes",
      "ALBUM TITLE": "Comedown Machine",
      SCORE: 5
    },
    {
      ARTISTS: "Dope Body",
      "ALBUM TITLE": "Saturday",
      SCORE: 7
    },
    {
      ARTISTS: "Nails",
      "ALBUM TITLE": "Abandon All Life",
      SCORE: 7
    },
    {
      ARTISTS: "Rhye",
      "ALBUM TITLE": "Woman",
      SCORE: 6
    },
    {
      ARTISTS: "Autechre",
      "ALBUM TITLE": "Exai",
      SCORE: 8
    },
    {
      ARTISTS: "The Men",
      "ALBUM TITLE": "New Moon",
      SCORE: 4
    },
    {
      ARTISTS: "Steven Wilson",
      "ALBUM TITLE": "The Raven That Refused To Sing (And Other Stories)",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      "ALBUM TITLE": "Laid Out",
      SCORE: 8
    },
    {
      ARTISTS: "Czarface",
      "ALBUM TITLE": "Czarface",
      SCORE: 6
    },
    {
      ARTISTS: "Darkthrone",
      "ALBUM TITLE": "The Underground Resistance",
      SCORE: 6
    },
    {
      ARTISTS: "STRFKR",
      "ALBUM TITLE": "Miracle Mile",
      SCORE: 3
    },
    {
      ARTISTS: "Grave Babies",
      "ALBUM TITLE": "Crusher",
      SCORE: 7
    },
    {
      ARTISTS: "Clipping",
      "ALBUM TITLE": "Midcity",
      SCORE: 8
    },
    {
      ARTISTS: "Atoms For Peace",
      "ALBUM TITLE": "Amok",
      SCORE: 7
    },
    {
      ARTISTS: "Iceage",
      "ALBUM TITLE": "You're Nothing",
      SCORE: 8
    },
    {
      ARTISTS: "Nick Cave and The Bad Seeds",
      "ALBUM TITLE": "Push The Sky Away",
      SCORE: 5
    },
    {
      ARTISTS: "Beach Fossils",
      "ALBUM TITLE": "Clash The Truth",
      SCORE: 8
    },
    {
      ARTISTS: "Portal",
      "ALBUM TITLE": "Vexovoid",
      SCORE: 5
    },
    {
      ARTISTS: "Grouper",
      "ALBUM TITLE": "The Man Who Died In His Boat",
      SCORE: 7
    },
    {
      ARTISTS: "Pissed Jeans",
      "ALBUM TITLE": "Honeys",
      SCORE: 7
    },
    {
      ARTISTS: "Foals",
      "ALBUM TITLE": "Holy Fire",
      SCORE: 5
    },
    {
      ARTISTS: "Veronica Falls",
      "ALBUM TITLE": "Waiting For Something To Happen",
      SCORE: 6
    },
    {
      ARTISTS: "The Underachievers",
      "ALBUM TITLE": "Indigoism",
      SCORE: 7
    },
    {
      ARTISTS: "My Bloody Valentine",
      "ALBUM TITLE": "MBV",
      SCORE: 8
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      "ALBUM TITLE": "II",
      SCORE: 7
    },
    {
      ARTISTS: "Dumbo Gets Mad",
      "ALBUM TITLE": "Quantum Leap",
      SCORE: 6
    },
    {
      ARTISTS: "Cakes Da Killa",
      "ALBUM TITLE": "The Eulogy",
      SCORE: 8
    },
    {
      ARTISTS: "Tegan and Sara",
      "ALBUM TITLE": "Heartthrob",
      SCORE: 3
    },
    {
      ARTISTS: "Tomahawk",
      "ALBUM TITLE": "Oddfellows",
      SCORE: 6
    },
    {
      ARTISTS: "California X",
      "ALBUM TITLE": "California X",
      SCORE: 6
    },
    {
      ARTISTS: "Local Natives",
      "ALBUM TITLE": "Hummingbird",
      SCORE: 5
    },
    {
      ARTISTS: "Buke and Gase",
      "ALBUM TITLE": "General Dome",
      SCORE: 8
    },
    {
      ARTISTS: "Comadre",
      "ALBUM TITLE": "Comadre",
      SCORE: 8
    },
    {
      ARTISTS: "TTNG (This Town Needs Guns)",
      "ALBUM TITLE": "13.0.0.0.0",
      SCORE: 7
    },
    {
      ARTISTS: "Nosaj Thing",
      "ALBUM TITLE": "Home",
      SCORE: 5
    },
    {
      ARTISTS: "Cult of Luna",
      "ALBUM TITLE": "Vertikal",
      SCORE: 5
    },
    {
      ARTISTS: "Villagers",
      "ALBUM TITLE": "{Awayland}",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      "ALBUM TITLE": "We Are the 21st Century Ambassadors of Peace & Magic",
      SCORE: 8
    },
    {
      ARTISTS: "Yo La Tengo",
      "ALBUM TITLE": "Fade",
      SCORE: 7
    },
    {
      ARTISTS: "Toro Y Moi",
      "ALBUM TITLE": "Anything In Return",
      SCORE: 4
    },
    {
      ARTISTS: "The Progressive Era",
      "ALBUM TITLE": "PEEP: The aPROcalypse",
      SCORE: 8
    },
    {
      ARTISTS: "Circles Takes the Square",
      "ALBUM TITLE": "Decompositions: Volume Number One",
      SCORE: 6
    },
    {
      ARTISTS: "A$AP Rocky",
      "ALBUM TITLE": "Long.Live.A$AP",
      SCORE: 7
    },
    {
      ARTISTS: "Milo",
      "ALBUM TITLE": "Things That Happen At Day / Things That Happen At Night",
      SCORE: 8
    },
    {
      ARTISTS: "Miles Davis",
      "ALBUM TITLE": "Bitches Brew",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "My Bloody Valentine",
      "ALBUM TITLE": "Loveless",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "King Crimson",
      "ALBUM TITLE": "In the Court of the Crimson King",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Dead Kennedys",
      "ALBUM TITLE": "Plastic Surgery Disasters",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Madvillain",
      "ALBUM TITLE": "Madvillainy",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Sufjan Stevens",
      "ALBUM TITLE": "Silver & Gold",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Lianne La Havas",
      "ALBUM TITLE": "Is Your Love Big Enough?",
      SCORE: 7
    },
    {
      ARTISTS: "Burial",
      "ALBUM TITLE": "Truant / Rough Sleeper",
      SCORE: 8
    },
    {
      ARTISTS: "Chief Keef",
      "ALBUM TITLE": "Finally Rich",
      SCORE: 4
    },
    {
      ARTISTS: "The Game",
      "ALBUM TITLE": "Jesus Piece",
      SCORE: 5
    },
    {
      ARTISTS: "Miguel",
      "ALBUM TITLE": "Kaleidoscope Dream",
      SCORE: 6
    },
    {
      ARTISTS: "P.O.S",
      "ALBUM TITLE": "We Don't Even Live Here",
      SCORE: 5
    },
    {
      ARTISTS: "Roomful of Teeth",
      "ALBUM TITLE": "Roomful of Teeth",
      SCORE: 7
    },
    {
      ARTISTS: "Dragged Into Sunlight",
      "ALBUM TITLE": "Widowmaker",
      SCORE: 6
    },
    {
      ARTISTS: "Scott Walker",
      "ALBUM TITLE": "Bish Bosch",
      SCORE: 7
    },
    {
      ARTISTS: "Wu-Block",
      "ALBUM TITLE": "Wu-Block",
      SCORE: 6
    },
    {
      ARTISTS: "Code Orange Kids",
      "ALBUM TITLE": "Love Is Love // Return To Dust",
      SCORE: 6
    },
    {
      ARTISTS: "Heems",
      "ALBUM TITLE": "Wild Water Kingdom",
      SCORE: 5
    },
    {
      ARTISTS: "Macintosh Plus",
      "ALBUM TITLE": "Floral Shoppe",
      SCORE: 4
    },
    {
      ARTISTS: "Angel Olsen",
      "ALBUM TITLE": "Half Way Home",
      SCORE: 7
    },
    {
      ARTISTS: "Bad Brains",
      "ALBUM TITLE": "Into the Future",
      SCORE: 3
    },
    {
      ARTISTS: "Tim Hecker and Daniel Lopatin",
      "ALBUM TITLE": "Instrumental Tourist",
      SCORE: 5
    },
    {
      ARTISTS: "The Evens",
      "ALBUM TITLE": "The Odds",
      SCORE: 8
    },
    {
      ARTISTS: "Captain Murphy",
      "ALBUM TITLE": "Duality",
      SCORE: 7
    },
    {
      ARTISTS: "Holly Herndon",
      "ALBUM TITLE": "Movement",
      SCORE: 7
    },
    {
      ARTISTS: "Goat",
      "ALBUM TITLE": "World Music",
      SCORE: 5
    },
    {
      ARTISTS: "Ratking",
      "ALBUM TITLE": "Wiki93",
      SCORE: 5
    },
    {
      ARTISTS: "Vessel",
      "ALBUM TITLE": "Order of Noise",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson and the Alchemist",
      "ALBUM TITLE": "Rare Chandeliers",
      SCORE: 8
    },
    {
      ARTISTS: "Deftones",
      "ALBUM TITLE": "Koi No Yokan",
      SCORE: 6
    },
    {
      ARTISTS: "Jessica Pratt",
      "ALBUM TITLE": "Jessica Pratt",
      SCORE: 7
    },
    {
      ARTISTS: "Crystal Castles",
      "ALBUM TITLE": "(III)",
      SCORE: 4
    },
    {
      ARTISTS: "Brian Eno",
      "ALBUM TITLE": "LUX",
      SCORE: 6
    },
    {
      ARTISTS: "The Secret",
      "ALBUM TITLE": "Agnus Dei",
      SCORE: 5
    },
    {
      ARTISTS: "Bat For Lashes",
      "ALBUM TITLE": "The Haunted Man",
      SCORE: 7
    },
    {
      ARTISTS: "Titus Andronicus",
      "ALBUM TITLE": "Local Business",
      SCORE: 6
    },
    {
      ARTISTS: "Neurosis",
      "ALBUM TITLE": "Honor Found In Decay",
      SCORE: 7
    },
    {
      ARTISTS: "Pile",
      "ALBUM TITLE": "Dripping",
      SCORE: 8
    },
    {
      ARTISTS: "The Soft Moon",
      "ALBUM TITLE": "Zeros",
      SCORE: 4
    },
    {
      ARTISTS: "Black Moth Super Rainbow",
      "ALBUM TITLE": "Cobra Juicy",
      SCORE: 5
    },
    {
      ARTISTS: "The Bad Plus",
      "ALBUM TITLE": "Made Possible",
      SCORE: 8
    },
    {
      ARTISTS: "Mac DeMarco",
      "ALBUM TITLE": 2,
      SCORE: 6
    },
    {
      ARTISTS: "Andy Stott",
      "ALBUM TITLE": "Luxury Problems",
      SCORE: 7
    },
    {
      ARTISTS: "Hoax",
      "ALBUM TITLE": "3rd",
      SCORE: 6
    },
    {
      ARTISTS: "Chelsea Wolfe",
      "ALBUM TITLE": "Unknown Rooms: A Collection of Acoustic Songs",
      SCORE: 7
    },
    {
      ARTISTS: "Pig Destroyer",
      "ALBUM TITLE": "Book Burner",
      SCORE: 6
    },
    {
      ARTISTS: "3:33",
      "ALBUM TITLE": "In the Middle of Infinity",
      SCORE: 6
    },
    {
      ARTISTS: "Karriem Riggins",
      "ALBUM TITLE": "Alone Together",
      SCORE: 8
    },
    {
      ARTISTS: "Kendrick Lamar",
      "ALBUM TITLE": "good kid, m.A.A.d. city",
      SCORE: 9
    },
    {
      ARTISTS: "Blu & Exile",
      "ALBUM TITLE": "Give Me My Flowers While I Can Still Smell Them",
      SCORE: 7
    },
    {
      ARTISTS: "Between the Buried and Me",
      "ALBUM TITLE": "The Parallax II: Future Sequence",
      SCORE: 4
    },
    {
      ARTISTS: "Daphni",
      "ALBUM TITLE": "Jiaolong",
      SCORE: 6
    },
    {
      ARTISTS: "John Frusciante",
      "ALBUM TITLE": "PBX Funicular Intaglio Zone",
      SCORE: 2
    },
    {
      ARTISTS: "Converge",
      "ALBUM TITLE": "All We Love We Leave Behind",
      SCORE: 8
    },
    {
      ARTISTS: "Macklemore and Ryan Lewis",
      "ALBUM TITLE": "The Heist",
      SCORE: 7
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      "ALBUM TITLE": "'Allelujah! Don't Bend! Ascend!",
      SCORE: 8
    },
    {
      ARTISTS: "The Mountain Goats",
      "ALBUM TITLE": "Transcendental Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Tame Impala",
      "ALBUM TITLE": "Lonerism",
      SCORE: 8
    },
    {
      ARTISTS: "Mellowhype",
      "ALBUM TITLE": "Numbers",
      SCORE: 3
    },
    {
      ARTISTS: "METZ",
      "ALBUM TITLE": "METZ",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "NO LOVE DEEP WEB",
      SCORE: 8
    },
    {
      ARTISTS: "Alt-J",
      "ALBUM TITLE": "An Awesome Wave",
      SCORE: 8
    },
    {
      ARTISTS: "Muse",
      "ALBUM TITLE": "The 2nd Law",
      SCORE: 3
    },
    {
      ARTISTS: "Efterklang",
      "ALBUM TITLE": "Piramida",
      SCORE: 5
    },
    {
      ARTISTS: "Mumford & Sons",
      "ALBUM TITLE": "Babel",
      SCORE: 6
    },
    {
      ARTISTS: "Deerhoof",
      "ALBUM TITLE": "Breakup Song",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Flying Lotus",
      "ALBUM TITLE": "Until the Quiet Comes",
      SCORE: 7
    },
    {
      ARTISTS: "Dark Time Sunshine",
      "ALBUM TITLE": "ANX",
      SCORE: 7
    },
    {
      ARTISTS: "Lupe Fiasco",
      "ALBUM TITLE": "Food & Liquor 2: The Great American Rap Album Pt. 1",
      SCORE: 5
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Cruel Summer",
      SCORE: "NONE"
    },
    {
      ARTISTS: "The Gaslamp Killer",
      "ALBUM TITLE": "Breakthrough",
      SCORE: 8
    },
    {
      ARTISTS: "Title Fight",
      "ALBUM TITLE": "Floral Green",
      SCORE: 7
    },
    {
      ARTISTS: "How To Dress Well",
      "ALBUM TITLE": "Total Loss",
      SCORE: 6
    },
    {
      ARTISTS: "Dinosaur Jr.",
      "ALBUM TITLE": "I Bet On Sky",
      SCORE: 7
    },
    {
      ARTISTS: "David Byrne & St. Vincent",
      "ALBUM TITLE": "Love This Giant",
      SCORE: 7
    },
    {
      ARTISTS: "Grizzly Bear",
      "ALBUM TITLE": "Shields",
      SCORE: 6
    },
    {
      ARTISTS: "Woods",
      "ALBUM TITLE": "Bend Beyond",
      SCORE: 7
    },
    {
      ARTISTS: "Ondatrópica",
      "ALBUM TITLE": "Ondatrópica",
      SCORE: 9
    },
    {
      ARTISTS: "Krallice",
      "ALBUM TITLE": "Years Past Matter",
      SCORE: 8
    },
    {
      ARTISTS: "The xx",
      "ALBUM TITLE": "Coexist",
      SCORE: 4
    },
    {
      ARTISTS: "Mount Eerie",
      "ALBUM TITLE": "Ocean Roar",
      SCORE: 5
    },
    {
      ARTISTS: "Dan Deacon",
      "ALBUM TITLE": "America",
      SCORE: 5
    },
    {
      ARTISTS: "Jens Lekman",
      "ALBUM TITLE": "I Know What Love Isn't",
      SCORE: 7
    },
    {
      ARTISTS: "Animal Collective",
      "ALBUM TITLE": "Centipede Hz",
      SCORE: 6
    },
    {
      ARTISTS: "Murder Construct",
      "ALBUM TITLE": "Results",
      SCORE: 8
    },
    {
      ARTISTS: "Slaughterhouse",
      "ALBUM TITLE": "Welcome to: Our House",
      SCORE: 3
    },
    {
      ARTISTS: "Holy Other",
      "ALBUM TITLE": "Held",
      SCORE: 6
    },
    {
      ARTISTS: "Four Tet",
      "ALBUM TITLE": "Pink",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Mob",
      "ALBUM TITLE": "Lord$ Never Worry",
      SCORE: 3
    },
    {
      ARTISTS: "Swans",
      "ALBUM TITLE": "The Seer",
      SCORE: 8
    },
    {
      ARTISTS: "The Faceless",
      "ALBUM TITLE": "Autotheism",
      SCORE: 5
    },
    {
      ARTISTS: "Matthew Dear",
      "ALBUM TITLE": "Beams",
      SCORE: 8
    },
    {
      ARTISTS: "Bloc Party",
      "ALBUM TITLE": "Four",
      SCORE: 7
    },
    {
      ARTISTS: "Wild Nothing",
      "ALBUM TITLE": "Nocturne",
      SCORE: 8
    },
    {
      ARTISTS: "Jessie Ware",
      "ALBUM TITLE": "Devotion",
      SCORE: 4
    },
    {
      ARTISTS: "Eprom",
      "ALBUM TITLE": "Metahuman",
      SCORE: 7
    },
    {
      ARTISTS: "JJ DOOM",
      "ALBUM TITLE": "Key to the Kuffs",
      SCORE: 6
    },
    {
      ARTISTS: "Xibalba",
      "ALBUM TITLE": "Hasta La Muerte",
      SCORE: 8
    },
    {
      ARTISTS: "2 Chainz",
      "ALBUM TITLE": "Based on a T.R.U. Story",
      SCORE: 4
    },
    {
      ARTISTS: "Ariel Pink's Haunted Graffiti",
      "ALBUM TITLE": "Mature Themes",
      SCORE: 6
    },
    {
      ARTISTS: "Parquet Courts",
      "ALBUM TITLE": "Light Up Gold",
      SCORE: 7
    },
    {
      ARTISTS: "Niki and the Dove",
      "ALBUM TITLE": "Instinct",
      SCORE: 6
    },
    {
      ARTISTS: "R. Stevie Moore",
      "ALBUM TITLE": "Lo Fi Hi Fives",
      SCORE: 7
    },
    {
      ARTISTS: "Om",
      "ALBUM TITLE": "Advaitic Songs",
      SCORE: 5
    },
    {
      ARTISTS: "Domo Genesis",
      "ALBUM TITLE": "No Idols",
      SCORE: 5
    },
    {
      ARTISTS: "Passion Pit",
      "ALBUM TITLE": "Gossamer",
      SCORE: 6
    },
    {
      ARTISTS: "Nachtmystium",
      "ALBUM TITLE": "Silencing Machine",
      SCORE: 8
    },
    {
      ARTISTS: "Rick Ross",
      "ALBUM TITLE": "God Forgives, I Don't",
      SCORE: 3
    },
    {
      ARTISTS: "Guardian Alien",
      "ALBUM TITLE": "See the World Given to a One Love Entity",
      SCORE: 6
    },
    {
      ARTISTS: "Purity Ring",
      "ALBUM TITLE": "Shrines",
      SCORE: 6
    },
    {
      ARTISTS: "Gnaw Their Tongues",
      "ALBUM TITLE": "Eschatological Scatology",
      SCORE: 7
    },
    {
      ARTISTS: "TNGHT",
      "ALBUM TITLE": "TNGHT",
      SCORE: 9
    },
    {
      ARTISTS: "Mission of Burma",
      "ALBUM TITLE": "Unsound",
      SCORE: 6
    },
    {
      ARTISTS: "Aesop Rock",
      "ALBUM TITLE": "Skelethon",
      SCORE: 7
    },
    {
      ARTISTS: "Holograms",
      "ALBUM TITLE": "Holograms",
      SCORE: 8
    },
    {
      ARTISTS: "Nas",
      "ALBUM TITLE": "Life Is Good",
      SCORE: 4
    },
    {
      ARTISTS: "Wreck and Reference",
      "ALBUM TITLE": "No Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Baroness",
      "ALBUM TITLE": "Yellow and Green",
      SCORE: 7
    },
    {
      ARTISTS: "Frank Ocean",
      "ALBUM TITLE": "Channel Orange",
      SCORE: 7
    },
    {
      ARTISTS: "Twin Shadow",
      "ALBUM TITLE": "Confess",
      SCORE: 5
    },
    {
      ARTISTS: "H-SIK",
      "ALBUM TITLE": "Cocody",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      "ALBUM TITLE": "Take the Kids Off Broadway",
      SCORE: 8
    },
    {
      ARTISTS: "Dirty Projectors",
      "ALBUM TITLE": "Swing Lo Magellan",
      SCORE: 6
    },
    {
      ARTISTS: "Rush",
      "ALBUM TITLE": "Clockwork Angels",
      SCORE: 6
    },
    {
      ARTISTS: "Spaceghostpurrp",
      "ALBUM TITLE": "Mysterious Phonk: The Chronicles of SpvcxxGhxztPvrrp",
      SCORE: 5
    },
    {
      ARTISTS: "Deathspell Omega",
      "ALBUM TITLE": "Drought",
      SCORE: 8
    },
    {
      ARTISTS: "Hot Chip",
      "ALBUM TITLE": "In Our Heads",
      SCORE: 7
    },
    {
      ARTISTS: "Old Man Gloom",
      "ALBUM TITLE": "NO",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall Band",
      "ALBUM TITLE": "Slaughterhouse",
      SCORE: 8
    },
    {
      ARTISTS: "Ty Segall & White Fence",
      "ALBUM TITLE": "Hair",
      SCORE: 8
    },
    {
      ARTISTS: "Open Mike Eagle",
      "ALBUM TITLE": "4NML HSPTL",
      SCORE: 7
    },
    {
      ARTISTS: "The Smashing Pumpkins",
      "ALBUM TITLE": "Oceania",
      SCORE: 6
    },
    {
      ARTISTS: "Metric",
      "ALBUM TITLE": "Synthetica",
      SCORE: 3
    },
    {
      ARTISTS: "Curren$y",
      "ALBUM TITLE": "The Stoned Immaculate",
      SCORE: 3
    },
    {
      ARTISTS: "Bobby Womack",
      "ALBUM TITLE": "The Bravest Man In the Universe",
      SCORE: 6
    },
    {
      ARTISTS: "Fiona Apple",
      "ALBUM TITLE": "The Idler Wheel...",
      SCORE: 9
    },
    {
      ARTISTS: "Joey Bada$$",
      "ALBUM TITLE": 1999,
      SCORE: 7
    },
    {
      ARTISTS: "Suns",
      "ALBUM TITLE": "The Engine Room",
      SCORE: "[Chris] 7"
    },
    {
      ARTISTS: "Kreator",
      "ALBUM TITLE": "Phantom Antichrist",
      SCORE: 5
    },
    {
      ARTISTS: "Clams Casino",
      "ALBUM TITLE": "Instrumentals 2",
      SCORE: 7
    },
    {
      ARTISTS: "iamamiwhoami",
      "ALBUM TITLE": "Kin",
      SCORE: 8
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      "ALBUM TITLE": "There's No Leaving Now",
      SCORE: 8
    },
    {
      ARTISTS: "Recondite",
      "ALBUM TITLE": "On Acid",
      SCORE: 8
    },
    {
      ARTISTS: "Liars",
      "ALBUM TITLE": "WIXIW",
      SCORE: 7
    },
    {
      ARTISTS: "Neil Young & Crazy Horse",
      "ALBUM TITLE": "Americana",
      SCORE: 7
    },
    {
      ARTISTS: "Japandroids",
      "ALBUM TITLE": "Celebration Rock",
      SCORE: 5
    },
    {
      ARTISTS: "Black Breath",
      "ALBUM TITLE": "Sentenced to Life",
      SCORE: 8
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "Live From the Underground",
      SCORE: 7
    },
    {
      ARTISTS: "Sigur Rós",
      "ALBUM TITLE": "Valtari",
      SCORE: 7
    },
    {
      ARTISTS: "El-P",
      "ALBUM TITLE": "Cancer for Cure",
      SCORE: 6
    },
    {
      ARTISTS: "Cerce",
      "ALBUM TITLE": "Tour Sampler CD-R",
      SCORE: 7
    },
    {
      ARTISTS: "Mount Eerie",
      "ALBUM TITLE": "Clear Moon",
      SCORE: 7
    },
    {
      ARTISTS: "Best Coast",
      "ALBUM TITLE": "The Only Place",
      SCORE: 3
    },
    {
      ARTISTS: "Dope Body",
      "ALBUM TITLE": "Natural History",
      SCORE: 9
    },
    {
      ARTISTS: "Killer Mike",
      "ALBUM TITLE": "R.A.P. Music",
      SCORE: 8
    },
    {
      ARTISTS: "Marilyn Manson",
      "ALBUM TITLE": "Born Villain",
      SCORE: 3
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "Macadelic",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Ab-Soul",
      "ALBUM TITLE": "Control System",
      SCORE: 8
    },
    {
      ARTISTS: "Squarepusher",
      "ALBUM TITLE": "Ufabulum",
      SCORE: 6
    },
    {
      ARTISTS: "Beach House",
      "ALBUM TITLE": "Bloom",
      SCORE: 8
    },
    {
      ARTISTS: "mewithoutYou",
      "ALBUM TITLE": "Ten Stories",
      SCORE: 6
    },
    {
      ARTISTS: "B.o.B.",
      "ALBUM TITLE": "Strange Clouds",
      SCORE: 4
    },
    {
      ARTISTS: "Lone",
      "ALBUM TITLE": "Galaxy Garden",
      SCORE: 8
    },
    {
      ARTISTS: "OFF!",
      "ALBUM TITLE": "OFF!",
      SCORE: 7
    },
    {
      ARTISTS: "Dweller On the Threshold",
      "ALBUM TITLE": "Dweller On the Threshold",
      SCORE: 6
    },
    {
      ARTISTS: "Billy Woods",
      "ALBUM TITLE": "History Will Absolve me",
      SCORE: 8
    },
    {
      ARTISTS: "Torche",
      "ALBUM TITLE": "Harmonicraft",
      SCORE: 8
    },
    {
      ARTISTS: "Actress",
      "ALBUM TITLE": "R.I.P.",
      SCORE: "NONE"
    },
    {
      ARTISTS: "White Suns",
      "ALBUM TITLE": "Sinews",
      SCORE: 8
    },
    {
      ARTISTS: "Jack White",
      "ALBUM TITLE": "Blunderbuss",
      SCORE: 6
    },
    {
      ARTISTS: "Battles",
      "ALBUM TITLE": "Dross Glop",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "The Money Store",
      SCORE: 10
    },
    {
      ARTISTS: "Moonface",
      "ALBUM TITLE": "With Siinai: Heartbreaking Bravery",
      SCORE: 6
    },
    {
      ARTISTS: "Quakers",
      "ALBUM TITLE": "Quakers",
      SCORE: 5
    },
    {
      ARTISTS: "Spiritualized",
      "ALBUM TITLE": "Sweet Heart Sweet Light",
      SCORE: 8
    },
    {
      ARTISTS: "Black Dice",
      "ALBUM TITLE": "Mr. Impossible",
      SCORE: 5
    },
    {
      ARTISTS: "Lotus Plaza",
      "ALBUM TITLE": "Spooky Action at a Distance",
      SCORE: 6
    },
    {
      ARTISTS: "Dr. John",
      "ALBUM TITLE": "Locked Down",
      SCORE: 7
    },
    {
      ARTISTS: "Kindness",
      "ALBUM TITLE": "World, You Need a Change of Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Willis Earl Beal",
      "ALBUM TITLE": "Acousmatic Sorcery",
      SCORE: 4
    },
    {
      ARTISTS: "Chromatics",
      "ALBUM TITLE": "Kill For Love",
      SCORE: 4
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      "ALBUM TITLE": "BBNG2",
      SCORE: 9
    },
    {
      ARTISTS: "High On Fire",
      "ALBUM TITLE": "De Vermis Mysteriis",
      SCORE: 8
    },
    {
      ARTISTS: "Meshuggah",
      "ALBUM TITLE": "Koloss",
      SCORE: 6
    },
    {
      ARTISTS: "Daniel Rossen",
      "ALBUM TITLE": "Silent Hour / Golden Mile",
      SCORE: 8
    },
    {
      ARTISTS: "The Mars Volta",
      "ALBUM TITLE": "Noctourniquet",
      SCORE: 7
    },
    {
      ARTISTS: "The Shins",
      "ALBUM TITLE": "Port of Morrow",
      SCORE: 5
    },
    {
      ARTISTS: "THEESatisfaction",
      "ALBUM TITLE": "awE naturalE",
      SCORE: 8
    },
    {
      ARTISTS: "Unsane",
      "ALBUM TITLE": "Wreck",
      SCORE: 7
    },
    {
      ARTISTS: "Soap&Skin",
      "ALBUM TITLE": "Narrow",
      SCORE: 8
    },
    {
      ARTISTS: "The Men",
      "ALBUM TITLE": "Open Your Heart",
      SCORE: 7
    },
    {
      ARTISTS: "The Magnetic Fields",
      "ALBUM TITLE": "Love at the Bottom of the Sea",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "4evaNaDay",
      SCORE: 8
    },
    {
      ARTISTS: "Evian Christ",
      "ALBUM TITLE": "Kings and Them",
      SCORE: 6
    },
    {
      ARTISTS: "WZRD",
      "ALBUM TITLE": "WZRD",
      SCORE: 3
    },
    {
      ARTISTS: "Christian Mistress",
      "ALBUM TITLE": "Possession",
      SCORE: 8
    },
    {
      ARTISTS: "Pallbearer",
      "ALBUM TITLE": "Sorrow and Extinction",
      SCORE: 7
    },
    {
      ARTISTS: "Sleigh Bells",
      "ALBUM TITLE": "Reign of Terror",
      SCORE: 5
    },
    {
      ARTISTS: "Perfume Genius",
      "ALBUM TITLE": "Put Your Back N 2 It",
      SCORE: 9
    },
    {
      ARTISTS: "Grimes",
      "ALBUM TITLE": "Visions",
      SCORE: 5
    },
    {
      ARTISTS: "Goatwhore",
      "ALBUM TITLE": "Blood For the Master",
      SCORE: 7
    },
    {
      ARTISTS: "Tennis",
      "ALBUM TITLE": "Young & Old",
      SCORE: 4
    },
    {
      ARTISTS: "Burial",
      "ALBUM TITLE": "Kindred",
      SCORE: 8
    },
    {
      ARTISTS: "Earth",
      "ALBUM TITLE": "Angels of Darkness, Demons of Light II",
      SCORE: 6
    },
    {
      ARTISTS: "Portico Quartet",
      "ALBUM TITLE": "Portico Quartet",
      SCORE: 8
    },
    {
      ARTISTS: "Lapalux",
      "ALBUM TITLE": "When You're Gone",
      SCORE: 6
    },
    {
      ARTISTS: "Sharon Van Etten",
      "ALBUM TITLE": "Tramp",
      SCORE: 7
    },
    {
      ARTISTS: "A Place To Bury Strangers",
      "ALBUM TITLE": "Onwards To The Wall",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      "ALBUM TITLE": "Vacation",
      SCORE: 7
    },
    {
      ARTISTS: "Leonard Cohen",
      "ALBUM TITLE": "Old Ideas",
      SCORE: 5
    },
    {
      ARTISTS: "of Montreal",
      "ALBUM TITLE": "Paralytic Stalks",
      SCORE: 7
    },
    {
      ARTISTS: "Loma Prieta",
      "ALBUM TITLE": "I.V.",
      SCORE: 8
    },
    {
      ARTISTS: "John Talabot",
      "ALBUM TITLE": "fin",
      SCORE: 8
    },
    {
      ARTISTS: "The Maccabees",
      "ALBUM TITLE": "Given to the Wild",
      SCORE: 5
    },
    {
      ARTISTS: "Lana Del Rey",
      "ALBUM TITLE": "Born to Die",
      SCORE: 3
    },
    {
      ARTISTS: "Heems",
      "ALBUM TITLE": "Nehru Jackets",
      SCORE: 8
    },
    {
      ARTISTS: "Pop. 1280",
      "ALBUM TITLE": "The Horror",
      SCORE: 7
    },
    {
      ARTISTS: "Lamb of God",
      "ALBUM TITLE": "Resolution",
      SCORE: 3
    },
    {
      ARTISTS: "Chairlift",
      "ALBUM TITLE": "Something",
      SCORE: 7
    },
    {
      ARTISTS: "Gonjasufi",
      "ALBUM TITLE": "MU.ZZ.LE",
      SCORE: 6
    },
    {
      ARTISTS: "First  Aid Kit",
      "ALBUM TITLE": "The Lion's Roar",
      SCORE: 7
    },
    {
      ARTISTS: "Young Fathers",
      "ALBUM TITLE": "Tape One",
      SCORE: 8
    },
    {
      ARTISTS: "Schoolboy Q",
      "ALBUM TITLE": "Habits & Contradictions",
      SCORE: 5
    },
    {
      ARTISTS: "Cloud Nothings",
      "ALBUM TITLE": "Attack On Memory",
      SCORE: 8
    },
    {
      ARTISTS: "The Act of Estimating as Worthless",
      "ALBUM TITLE": "Amongst These Splintered Minds...",
      SCORE: 7
    },
    {
      ARTISTS: "Charlie Haden & Hank Jones",
      "ALBUM TITLE": "Come Sunday",
      SCORE: 6
    },
    {
      ARTISTS: "Alcest",
      "ALBUM TITLE": "Les voyages de l'âme",
      SCORE: 5
    },
    {
      ARTISTS: "Zammuto",
      "ALBUM TITLE": "Idiom Wind",
      SCORE: 7
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "Echoes of Silence",
      SCORE: 8
    },
    {
      ARTISTS: "Guided by Voices",
      "ALBUM TITLE": "Let's Go Eat the Factory",
      SCORE: 6
    },
    {
      ARTISTS: "The Internet",
      "ALBUM TITLE": "Purple Naked Ladies",
      SCORE: 4
    },
    {
      ARTISTS: "Neutral Milk Hotel",
      "ALBUM TITLE": "In the Aeroplane Over the Sea",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Wu-Tang Clan",
      "ALBUM TITLE": "Enter the Wu-Tang: 36 Chambers",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Frank Zappa",
      "ALBUM TITLE": "Hot Rats",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      "ALBUM TITLE": "Lift Yr. Skinny Fists Like Antennas to Heaven!",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Cass McCombs",
      "ALBUM TITLE": "Humor Risk",
      SCORE: 6
    },
    {
      ARTISTS: "The Roots",
      "ALBUM TITLE": "Undun",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Cormorant",
      "ALBUM TITLE": "Dwellings",
      SCORE: 8
    },
    {
      ARTISTS: "Nujabes",
      "ALBUM TITLE": "Spiritual State",
      SCORE: 6
    },
    {
      ARTISTS: "Jacaszek",
      "ALBUM TITLE": "Glimmer",
      SCORE: 7
    },
    {
      ARTISTS: "The Black Keys",
      "ALBUM TITLE": "El Camino",
      SCORE: 6
    },
    {
      ARTISTS: "Comet Gain",
      "ALBUM TITLE": "Howl of the Lonely Crowd",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      "ALBUM TITLE": "Replica",
      SCORE: 8
    },
    {
      ARTISTS: "Red Horse",
      "ALBUM TITLE": "Red Horse",
      SCORE: 6
    },
    {
      ARTISTS: "Yelawolf",
      "ALBUM TITLE": "Radioactive",
      SCORE: 5
    },
    {
      ARTISTS: "The Spits",
      "ALBUM TITLE": "The Spits",
      SCORE: 6
    },
    {
      ARTISTS: "The Log.Os",
      "ALBUM TITLE": "λόγος",
      SCORE: 8
    },
    {
      ARTISTS: "Vektor",
      "ALBUM TITLE": "Outer Isolation",
      SCORE: 8
    },
    {
      ARTISTS: "Kate Bush",
      "ALBUM TITLE": "50 Words For Snow",
      SCORE: 7
    },
    {
      ARTISTS: "Cynic",
      "ALBUM TITLE": "Carbon-Based Anatomy",
      SCORE: 7
    },
    {
      ARTISTS: "Wale",
      "ALBUM TITLE": "Ambition",
      SCORE: 4
    },
    {
      ARTISTS: "Mac Miller",
      "ALBUM TITLE": "Blue Slide Park",
      SCORE: 5
    },
    {
      ARTISTS: "Crystal Stilts",
      "ALBUM TITLE": "Radiant Door",
      SCORE: 6
    },
    {
      ARTISTS: "King Krule",
      "ALBUM TITLE": "King Krule",
      SCORE: 7
    },
    {
      ARTISTS: "Drake",
      "ALBUM TITLE": "Take Care",
      SCORE: 6
    },
    {
      ARTISTS: "Pianos Become the Teeth",
      "ALBUM TITLE": "The Lack Long After",
      SCORE: 6
    },
    {
      ARTISTS: "Childish Gambino",
      "ALBUM TITLE": "Camp",
      SCORE: 2
    },
    {
      ARTISTS: "Atlas Sound",
      "ALBUM TITLE": "Parallax",
      SCORE: 6
    },
    {
      ARTISTS: "David Lynch",
      "ALBUM TITLE": "Crazy Clown Time",
      SCORE: 5
    },
    {
      ARTISTS: "Ghoul",
      "ALBUM TITLE": "Transmission Zero",
      SCORE: 8
    },
    {
      ARTISTS: "My Brightest Diamond",
      "ALBUM TITLE": "All Things Will Unwind",
      SCORE: 6
    },
    {
      ARTISTS: "ASAP Rocky",
      "ALBUM TITLE": "LiveLoveA$AP",
      SCORE: 8
    },
    {
      ARTISTS: "The Strange Boys",
      "ALBUM TITLE": "Live Music",
      SCORE: 7
    },
    {
      ARTISTS: "Lou Reed and Metallica",
      "ALBUM TITLE": "Lulu",
      SCORE: 6
    },
    {
      ARTISTS: "Oblivionized",
      "ALBUM TITLE": "Abhorrent Evolution",
      SCORE: 8
    },
    {
      ARTISTS: "Milo",
      "ALBUM TITLE": "I Wish My Brother Rob Was Here",
      SCORE: 8
    },
    {
      ARTISTS: "Black Milk & Danny Brown",
      "ALBUM TITLE": "Black & Brown",
      SCORE: 7
    },
    {
      ARTISTS: "Justice",
      "ALBUM TITLE": "Audio, Video, Disco",
      SCORE: 5
    },
    {
      ARTISTS: "The Field",
      "ALBUM TITLE": "Looping State of Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Tom Waits",
      "ALBUM TITLE": "Bad As Me",
      SCORE: 7
    },
    {
      ARTISTS: "M83",
      "ALBUM TITLE": "Hurry Up, We're Dreaming",
      SCORE: 4
    },
    {
      ARTISTS: "Kuedo",
      "ALBUM TITLE": "Severant",
      SCORE: 6
    },
    {
      ARTISTS: "Absu",
      "ALBUM TITLE": "Abzu",
      SCORE: 8
    },
    {
      ARTISTS: "Björk",
      "ALBUM TITLE": "Biophilia",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Civil Civic",
      "ALBUM TITLE": "Rules",
      SCORE: 7
    },
    {
      ARTISTS: "Rustie",
      "ALBUM TITLE": "Glass Swords",
      SCORE: 7
    },
    {
      ARTISTS: "Feist",
      "ALBUM TITLE": "Metals",
      SCORE: 4
    },
    {
      ARTISTS: "Mr. Muthafuckin' eXquire",
      "ALBUM TITLE": "Lost In Translation",
      SCORE: "UNKNOWN"
    },
    {
      ARTISTS: "James Blake",
      "ALBUM TITLE": "Enough Thunder",
      SCORE: 5
    },
    {
      ARTISTS: "La Dispute",
      "ALBUM TITLE": "Wildlife",
      SCORE: 8
    },
    {
      ARTISTS: "Teenage Cool Kids",
      "ALBUM TITLE": "Denton After Sunset",
      SCORE: 7
    },
    {
      ARTISTS: "Wilco",
      "ALBUM TITLE": "The Whole Love",
      SCORE: 7
    },
    {
      ARTISTS: "9th Wonder",
      "ALBUM TITLE": "The Wonder Years",
      SCORE: 4
    },
    {
      ARTISTS: "J. Cole",
      "ALBUM TITLE": "Cole World: The Sideline Story",
      SCORE: 6
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      "ALBUM TITLE": "BBNG",
      SCORE: 8
    },
    {
      ARTISTS: "Mastodon",
      "ALBUM TITLE": "The Hunter",
      SCORE: 5
    },
    {
      ARTISTS: "Wild Flag",
      "ALBUM TITLE": "Wild Flag",
      SCORE: 7
    },
    {
      ARTISTS: "Opeth",
      "ALBUM TITLE": "Heritage",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew Jackson Jihad",
      "ALBUM TITLE": "Knife Man",
      SCORE: 8
    },
    {
      ARTISTS: "Veronica Falls",
      "ALBUM TITLE": "Veronica Falls",
      SCORE: 8
    },
    {
      ARTISTS: "Das Racist",
      "ALBUM TITLE": "Relax",
      SCORE: 6
    },
    {
      ARTISTS: "Neon Indian",
      "ALBUM TITLE": "Era Extraña",
      SCORE: 3
    },
    {
      ARTISTS: "St. Vincent",
      "ALBUM TITLE": "Strange Mercy",
      SCORE: 8
    },
    {
      ARTISTS: "Wolves In the Throne Room",
      "ALBUM TITLE": "Celestial Lineage",
      SCORE: 6
    },
    {
      ARTISTS: "The Men",
      "ALBUM TITLE": "Leave Home",
      SCORE: 6
    },
    {
      ARTISTS: "Thundercat",
      "ALBUM TITLE": "The Golden Age of Apocalypse",
      SCORE: 8
    },
    {
      ARTISTS: "Girls",
      "ALBUM TITLE": "Father, Son, Holy Ghost",
      SCORE: 7
    },
    {
      ARTISTS: "The Drums",
      "ALBUM TITLE": "Portamento",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      "ALBUM TITLE": "Bad Vibes",
      SCORE: 7
    },
    {
      ARTISTS: "Hella",
      "ALBUM TITLE": "Tripper",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Wayne",
      "ALBUM TITLE": "Tha Carter IV",
      SCORE: 3
    },
    {
      ARTISTS: "Red Hot Chili Peppers",
      "ALBUM TITLE": "I'm With You",
      SCORE: 5
    },
    {
      ARTISTS: "Giles Corey",
      "ALBUM TITLE": "Giles Corey",
      SCORE: 8
    },
    {
      ARTISTS: "Apathy",
      "ALBUM TITLE": "Honkey Kong",
      SCORE: 7
    },
    {
      ARTISTS: "Danny Brown",
      "ALBUM TITLE": "XXX",
      SCORE: 8
    },
    {
      ARTISTS: "Active Child",
      "ALBUM TITLE": "You Are All I See",
      SCORE: 6
    },
    {
      ARTISTS: "Africa Hitech",
      "ALBUM TITLE": "93 Million Miles",
      SCORE: 8
    },
    {
      ARTISTS: "The War On Drugs",
      "ALBUM TITLE": "Slave Ambient",
      SCORE: 6
    },
    {
      ARTISTS: "Chelsea Wolfe",
      "ALBUM TITLE": "Ἀποκάλυψις (Apocalypse / Apokalypsis)",
      SCORE: 8
    },
    {
      ARTISTS: "Rival Sons",
      "ALBUM TITLE": "Pressure & Time",
      SCORE: 7
    },
    {
      ARTISTS: "Cerebral Ballzy",
      "ALBUM TITLE": "Cerebral Ballzy",
      SCORE: 3
    },
    {
      ARTISTS: "Matana Roberts",
      "ALBUM TITLE": "Coin Coin Chapter One: Gens de Couleur Libres",
      SCORE: 8
    },
    {
      ARTISTS: "Kanye West & Jay-Z",
      "ALBUM TITLE": "Watch the Throne",
      SCORE: 5
    },
    {
      ARTISTS: "Beirut",
      "ALBUM TITLE": "The Rip Tide",
      SCORE: 6
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Brand New Wayo",
      SCORE: 7
    },
    {
      ARTISTS: "Theophilus London",
      "ALBUM TITLE": "Timez Are Weird These Days",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Hudson Mohawke",
      "ALBUM TITLE": "Satin Panthers",
      SCORE: 7
    },
    {
      ARTISTS: "Machinedrum",
      "ALBUM TITLE": "Room(s)",
      SCORE: 6
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      "ALBUM TITLE": "Unknown Mortal Orchestra",
      SCORE: 5
    },
    {
      ARTISTS: "Disma",
      "ALBUM TITLE": "Towards the Megalith",
      SCORE: 9
    },
    {
      ARTISTS: "MellowHype",
      "ALBUM TITLE": "BlackenedWhite",
      SCORE: 6
    },
    {
      ARTISTS: "Little Dragon",
      "ALBUM TITLE": "Ritual Union",
      SCORE: 8
    },
    {
      ARTISTS: "They Might Be Giants",
      "ALBUM TITLE": "Join Us",
      SCORE: 5
    },
    {
      ARTISTS: "Portugal. The Man",
      "ALBUM TITLE": "In the Mountain In the Cloud",
      SCORE: 6
    },
    {
      ARTISTS: "Toxic Holocaust",
      "ALBUM TITLE": "Conjure and Command",
      SCORE: 8
    },
    {
      ARTISTS: "The Cool Kids",
      "ALBUM TITLE": "When Fish Ride Bicycles",
      SCORE: 4
    },
    {
      ARTISTS: "Touche Amore",
      "ALBUM TITLE": "Parting the Sea Between Brightness and Me",
      SCORE: 7
    },
    {
      ARTISTS: "Zombi",
      "ALBUM TITLE": "Escape Velocity",
      SCORE: 8
    },
    {
      ARTISTS: "The Horrors",
      "ALBUM TITLE": "Skying",
      SCORE: 7
    },
    {
      ARTISTS: "Washed Out",
      "ALBUM TITLE": "Within and Without",
      SCORE: 6
    },
    {
      ARTISTS: "Kendrick Lamar",
      "ALBUM TITLE": "Section.80",
      SCORE: 8
    },
    {
      ARTISTS: "Limp Bizkit",
      "ALBUM TITLE": "Gold Cobra",
      SCORE: "[he just ate]"
    },
    {
      ARTISTS: "Ulcerate",
      "ALBUM TITLE": "The Destroyers of All",
      SCORE: 7
    },
    {
      ARTISTS: "Herman Dune",
      "ALBUM TITLE": "Strange Moosic",
      SCORE: 7
    },
    {
      ARTISTS: "Lil B",
      "ALBUM TITLE": "I'm Gay (I'm Happy)",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Samiyam",
      "ALBUM TITLE": "Sam Baker's Album",
      SCORE: 5
    },
    {
      ARTISTS: "Shabazz Palaces",
      "ALBUM TITLE": "Black Up",
      SCORE: 8
    },
    {
      ARTISTS: "Cults",
      "ALBUM TITLE": "Cults",
      SCORE: 4
    },
    {
      ARTISTS: "SBTRKT",
      "ALBUM TITLE": "SBTRKT",
      SCORE: 8
    },
    {
      ARTISTS: "Iceage",
      "ALBUM TITLE": "New Brigade",
      SCORE: 8
    },
    {
      ARTISTS: "Bon Iver",
      "ALBUM TITLE": "Bon Iver",
      SCORE: 6
    },
    {
      ARTISTS: "Bad Meets Evil",
      "ALBUM TITLE": "Hell: The Sequel",
      SCORE: 6
    },
    {
      ARTISTS: "Blood Ceremony",
      "ALBUM TITLE": "Living With the Ancients",
      SCORE: 7
    },
    {
      ARTISTS: "WU LYF",
      "ALBUM TITLE": "Go Tell Fire To The Mountain",
      SCORE: 5
    },
    {
      ARTISTS: "Poor Lily",
      "ALBUM TITLE": "Poor Lily",
      SCORE: 8
    },
    {
      ARTISTS: "Fucked Up",
      "ALBUM TITLE": "David Comes to Life",
      SCORE: 5
    },
    {
      ARTISTS: "Battles",
      "ALBUM TITLE": "Gloss Drop",
      SCORE: 9
    },
    {
      ARTISTS: "Snake Oil",
      "ALBUM TITLE": "Snake Oil",
      SCORE: 7
    },
    {
      ARTISTS: "Arctic Monkeys",
      "ALBUM TITLE": "Suck It and See",
      SCORE: 5
    },
    {
      ARTISTS: "Woods",
      "ALBUM TITLE": "Sun and Shade",
      SCORE: 5
    },
    {
      ARTISTS: "Planningtorock",
      "ALBUM TITLE": "W",
      SCORE: 2
    },
    {
      ARTISTS: "Havok",
      "ALBUM TITLE": "Time Is Up",
      SCORE: 8
    },
    {
      ARTISTS: "Death Cab for Cutie",
      "ALBUM TITLE": "Codes and Keys",
      SCORE: 7
    },
    {
      ARTISTS: "Theophilus London",
      "ALBUM TITLE": "Lover's Holiday",
      SCORE: 8
    },
    {
      ARTISTS: "My Morning Jacket",
      "ALBUM TITLE": "Circuital",
      SCORE: 5
    },
    {
      ARTISTS: "Master Musicians of Bukkake",
      "ALBUM TITLE": "Totem 3",
      SCORE: 7
    },
    {
      ARTISTS: "Coma Cinema",
      "ALBUM TITLE": "Blue Suicide",
      SCORE: 7
    },
    {
      ARTISTS: "Boris",
      "ALBUM TITLE": "Heavy Rocks / Attention Please",
      SCORE: 6
    },
    {
      ARTISTS: "Lady Gaga",
      "ALBUM TITLE": "Born This Way",
      SCORE: "[he threw up]"
    },
    {
      ARTISTS: "Elzhi",
      "ALBUM TITLE": "Elmatic",
      SCORE: 8
    },
    {
      ARTISTS: "Balkans",
      "ALBUM TITLE": "Balkans",
      SCORE: 7
    },
    {
      ARTISTS: "This Will Destroy You",
      "ALBUM TITLE": "Tunnel Blanket",
      SCORE: 6
    },
    {
      ARTISTS: "The UV Race",
      "ALBUM TITLE": "Homo",
      SCORE: 8
    },
    {
      ARTISTS: "Amon Tobin",
      "ALBUM TITLE": "ISAM",
      SCORE: 7
    },
    {
      ARTISTS: "Jesu",
      "ALBUM TITLE": "Ascension",
      SCORE: 5
    },
    {
      ARTISTS: "Manchester Orchestra",
      "ALBUM TITLE": "Simple Math",
      SCORE: 4
    },
    {
      ARTISTS: "Liturgy",
      "ALBUM TITLE": "Aesthethica",
      SCORE: 8
    },
    {
      ARTISTS: "The Lonely Island",
      "ALBUM TITLE": "Turtleneck and Chain",
      SCORE: 5
    },
    {
      ARTISTS: "Wild Beasts",
      "ALBUM TITLE": "Smother",
      SCORE: 7
    },
    {
      ARTISTS: "Tyler, The Creator",
      "ALBUM TITLE": "Goblin",
      SCORE: 4
    },
    {
      ARTISTS: "Death Grips",
      "ALBUM TITLE": "Exmilitary",
      SCORE: 8
    },
    {
      ARTISTS: "The Antlers",
      "ALBUM TITLE": "Burst Apart",
      SCORE: 4
    },
    {
      ARTISTS: "Fleet Foxes",
      "ALBUM TITLE": "Helplessness Blues",
      SCORE: 9
    },
    {
      ARTISTS: "Explosions In the Sky",
      "ALBUM TITLE": "Take Care, Take Care, Take Care",
      SCORE: 5
    },
    {
      ARTISTS: "Beastie Boys",
      "ALBUM TITLE": "Hot Sauce Committee Part Two",
      SCORE: 9
    },
    {
      ARTISTS: "CunninLynguists",
      "ALBUM TITLE": "Oneirology",
      SCORE: 8
    },
    {
      ARTISTS: "Bill Callahan",
      "ALBUM TITLE": "Apocalypse",
      SCORE: 6
    },
    {
      ARTISTS: "The Kills",
      "ALBUM TITLE": "Blood Pressures",
      SCORE: 4
    },
    {
      ARTISTS: "tUnE-yArDs",
      "ALBUM TITLE": "W H O K I L L",
      SCORE: 7
    },
    {
      ARTISTS: "Rotten Sound",
      "ALBUM TITLE": "Cursed",
      SCORE: 5
    },
    {
      ARTISTS: "Wormrot",
      "ALBUM TITLE": "Dirge",
      SCORE: 8
    },
    {
      ARTISTS: "Foo Fighters",
      "ALBUM TITLE": "Wasting Light",
      SCORE: 6
    },
    {
      ARTISTS: "Metronomy",
      "ALBUM TITLE": "The English Riviera",
      SCORE: 7
    },
    {
      ARTISTS: "Crystal Stilts",
      "ALBUM TITLE": "In Love With Oblivion",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      "ALBUM TITLE": "House of Balloons",
      SCORE: 3
    },
    {
      ARTISTS: "TV on the Radio",
      "ALBUM TITLE": "Nine Types of Light",
      SCORE: 6
    },
    {
      ARTISTS: "Timber Timbre",
      "ALBUM TITLE": "Creep On Creepin' On",
      SCORE: 8
    },
    {
      ARTISTS: "The Vaccines",
      "ALBUM TITLE": "What Did You Expect From the Vaccines?",
      SCORE: 6
    },
    {
      ARTISTS: "Holy Ghost!",
      "ALBUM TITLE": "Holy Ghost!",
      SCORE: 8
    },
    {
      ARTISTS: "Panda Bear",
      "ALBUM TITLE": "Tomboy",
      SCORE: 5
    },
    {
      ARTISTS: "Trap Them",
      "ALBUM TITLE": "Darker Handcraft",
      SCORE: 7
    },
    {
      ARTISTS: "Big K.R.I.T.",
      "ALBUM TITLE": "Returnof4eva",
      SCORE: 9
    },
    {
      ARTISTS: "Bibio",
      "ALBUM TITLE": "Mind Bokeh",
      SCORE: 5
    },
    {
      ARTISTS: "Craft Spells",
      "ALBUM TITLE": "Idle Labor",
      SCORE: 8
    },
    {
      ARTISTS: "The Pains of Being Pure at Heart",
      "ALBUM TITLE": "Belong",
      SCORE: 8
    },
    {
      ARTISTS: "The Strokes",
      "ALBUM TITLE": "Angles",
      SCORE: 7
    },
    {
      ARTISTS: "Reks",
      "ALBUM TITLE": "R.E.K.S.",
      SCORE: 8
    },
    {
      ARTISTS: "Burzum",
      "ALBUM TITLE": "Fallen",
      SCORE: 6
    },
    {
      ARTISTS: "Raekwon",
      "ALBUM TITLE": "Shaolin vs. Wu-Tang",
      SCORE: 5
    },
    {
      ARTISTS: "Lupe Fiasco",
      "ALBUM TITLE": "Lasers",
      SCORE: 3
    },
    {
      ARTISTS: "Tim Hecker",
      "ALBUM TITLE": "Ravedeath, 1972",
      SCORE: 8
    },
    {
      ARTISTS: "Weedeater",
      "ALBUM TITLE": "Jason...The Dragon",
      SCORE: 7
    },
    {
      ARTISTS: "Beady Eye",
      "ALBUM TITLE": "Different Gear, Still Speeding",
      SCORE: 3
    },
    {
      ARTISTS: "The Mountain Goats",
      "ALBUM TITLE": "All Eternals Deck",
      SCORE: 8
    },
    {
      ARTISTS: "Siriusmo",
      "ALBUM TITLE": "Mosaik",
      SCORE: 7
    },
    {
      ARTISTS: "Yuck",
      "ALBUM TITLE": "Yuck",
      SCORE: 5
    },
    {
      ARTISTS: "Fashawn",
      "ALBUM TITLE": "Higher Learning Vol. 2",
      SCORE: 6
    },
    {
      ARTISTS: "PJ Harvey",
      "ALBUM TITLE": "Let England Shake",
      SCORE: 8
    },
    {
      ARTISTS: "Toro Y Moi",
      "ALBUM TITLE": "Underneath the Pine",
      SCORE: 6
    },
    {
      ARTISTS: "Colin Stetson",
      "ALBUM TITLE": "New History Warfare Vol. 2: Judges",
      SCORE: 8
    },
    {
      ARTISTS: "Radiohead",
      "ALBUM TITLE": "The King of Limbs",
      SCORE: 6
    },
    {
      ARTISTS: "Nicolas Jaar",
      "ALBUM TITLE": "Space Is Only Noise",
      SCORE: 8
    },
    {
      ARTISTS: "Vreid",
      "ALBUM TITLE": "V",
      SCORE: 6
    },
    {
      ARTISTS: "Lil B",
      "ALBUM TITLE": "Angels Exodus",
      SCORE: 3
    },
    {
      ARTISTS: "Mogwai",
      "ALBUM TITLE": "Hardcore Will Never Die, but You Will",
      SCORE: 8
    },
    {
      ARTISTS: "Natural Child",
      "ALBUM TITLE": "Natural Child",
      SCORE: 8
    },
    {
      ARTISTS: "James Blake",
      "ALBUM TITLE": "James Blake",
      SCORE: 7
    },
    {
      ARTISTS: "Cut Copy",
      "ALBUM TITLE": "Zonoscope",
      SCORE: 5
    },
    {
      ARTISTS: "Earth",
      "ALBUM TITLE": "Angels of Darkness, Demons of Light I",
      SCORE: 7
    },
    {
      ARTISTS: "Dumbo Gets Mad",
      "ALBUM TITLE": "Elephants at the Door",
      SCORE: 8
    },
    {
      ARTISTS: "John Vanderslice",
      "ALBUM TITLE": "White Wilderness",
      SCORE: 6
    },
    {
      ARTISTS: "Braids",
      "ALBUM TITLE": "Native Speaker",
      SCORE: 7
    },
    {
      ARTISTS: "Kvelertak",
      "ALBUM TITLE": "Kvelertak",
      SCORE: 8
    },
    {
      ARTISTS: "The Decemberists",
      "ALBUM TITLE": "The King Is Dead",
      SCORE: 4
    },
    {
      ARTISTS: "Destroyer",
      "ALBUM TITLE": "Kaputt",
      SCORE: 9
    },
    {
      ARTISTS: "Deerhoof",
      "ALBUM TITLE": "Deerhoof vs Evil",
      SCORE: "[Deerhoof won]"
    },
    {
      ARTISTS: "Fergus & Geronimo",
      "ALBUM TITLE": "Unlearn",
      SCORE: 8
    },
    {
      ARTISTS: "White Lies",
      "ALBUM TITLE": "Ritual",
      SCORE: 4
    },
    {
      ARTISTS: "Smith Westerns",
      "ALBUM TITLE": "Dye It Blonde",
      SCORE: 7
    },
    {
      ARTISTS: "A-1",
      "ALBUM TITLE": "After School Special",
      SCORE: 7
    },
    {
      ARTISTS: "Ghost",
      "ALBUM TITLE": "Opus Eponymous",
      SCORE: 8
    },
    {
      ARTISTS: "Cage the Elephant",
      "ALBUM TITLE": "Thank You, Happy Birthday",
      SCORE: 5
    },
    {
      ARTISTS: "British Sea Power",
      "ALBUM TITLE": "Valhalla Dancehall",
      SCORE: 8
    },
    {
      ARTISTS: "Wire",
      "ALBUM TITLE": "Red Barked Tree",
      SCORE: 5
    },
    {
      ARTISTS: "Cake",
      "ALBUM TITLE": "Showroom of Compassion",
      SCORE: 7
    },
    {
      ARTISTS: "All Pigs Must DIe",
      "ALBUM TITLE": "All Pigs Must DIe",
      SCORE: 7
    },
    {
      ARTISTS: "jj",
      "ALBUM TITLE": "Kills",
      SCORE: 3
    },
    {
      ARTISTS: "M.I.A.",
      "ALBUM TITLE": "ViCKi LEEKX",
      SCORE: 6
    },
    {
      ARTISTS: "Shad",
      "ALBUM TITLE": "TSOL",
      SCORE: 6
    },
    {
      ARTISTS: "Gorillaz",
      "ALBUM TITLE": "The Fall",
      SCORE: 5
    },
    {
      ARTISTS: "Big Blood",
      "ALBUM TITLE": "Dark Country Magic",
      SCORE: 7
    },
    {
      ARTISTS: "Ghostface Killah",
      "ALBUM TITLE": "Apollo Kids",
      SCORE: 8
    },
    {
      ARTISTS: "The Souljazz Orchestra",
      "ALBUM TITLE": "Rising Sun",
      SCORE: 8
    },
    {
      ARTISTS: "Röyksopp",
      "ALBUM TITLE": "Senior",
      SCORE: 5
    },
    {
      ARTISTS: "Anika",
      "ALBUM TITLE": "Anika",
      SCORE: 3
    },
    {
      ARTISTS: "Kids & Explosions",
      "ALBUM TITLE": "Shit Computer",
      SCORE: 8
    },
    {
      ARTISTS: "Skrillex",
      "ALBUM TITLE": "Scary Monsters and Nice Sprites",
      SCORE: 7
    },
    {
      ARTISTS: "Tonetta",
      "ALBUM TITLE": "777 Volume One",
      SCORE: 6
    },
    {
      ARTISTS: "Tyler, The Creator",
      "ALBUM TITLE": "Bastard",
      SCORE: 7
    },
    {
      ARTISTS: "Off!",
      "ALBUM TITLE": "First Four",
      SCORE: 8
    },
    {
      ARTISTS: "Maserati",
      "ALBUM TITLE": "Pyramid of the Sun",
      SCORE: 7
    },
    {
      ARTISTS: "Glasser",
      "ALBUM TITLE": "Ring",
      SCORE: 8
    },
    {
      ARTISTS: "Glasser",
      "ALBUM TITLE": "Ring",
      SCORE: 8
    },
    {
      ARTISTS: "Girls",
      "ALBUM TITLE": "Broken Dreams Club",
      SCORE: 5
    },
    {
      ARTISTS: "Girl Talk",
      "ALBUM TITLE": "All Day",
      SCORE: 8
    },
    {
      ARTISTS: "Agalloch",
      "ALBUM TITLE": "Marrow of the Spirit",
      SCORE: 8
    },
    {
      ARTISTS: "Kanye West",
      "ALBUM TITLE": "My Beautiful Dark Twisted Fantasy",
      SCORE: 6
    },
    {
      ARTISTS: "Teebs",
      "ALBUM TITLE": "Ardour",
      SCORE: 6
    },
    {
      ARTISTS: "Weekend",
      "ALBUM TITLE": "Sports",
      SCORE: 8
    },
    {
      ARTISTS: "Cee Lo Green",
      "ALBUM TITLE": "The Lady Killer",
      SCORE: 7
    },
    {
      ARTISTS: "Matt & Kim",
      "ALBUM TITLE": "Sidewalks",
      SCORE: 5
    },
    {
      ARTISTS: "Gold Panda",
      "ALBUM TITLE": "Lucky Shiner",
      SCORE: 7
    },
    {
      ARTISTS: "Kid Cudi",
      "ALBUM TITLE": "Man on the Moon II: The Legend of Mr. Rager",
      SCORE: 6
    },
    {
      ARTISTS: "Das Racist",
      "ALBUM TITLE": "Shut Up, Dude / Sit Down, Man",
      SCORE: 6
    },
    {
      ARTISTS: "Brian Eno",
      "ALBUM TITLE": "Small Craft On A Milk Sea",
      SCORE: 8
    },
    {
      ARTISTS: "Electric Wizard",
      "ALBUM TITLE": "Black Masses",
      SCORE: 6
    },
    {
      ARTISTS: "How To Dress Well",
      "ALBUM TITLE": "Love Remains",
      SCORE: 4
    },
    {
      ARTISTS: "Small Black",
      "ALBUM TITLE": "New Chain",
      SCORE: "UNKNOWN"
    },
    {
      ARTISTS: "Bongripper",
      "ALBUM TITLE": "Satan Worshipping Doom",
      SCORE: 8
    },
    {
      ARTISTS: "Shobaleader One (Squarepusher)",
      "ALBUM TITLE": "d'Demonstrator",
      SCORE: 5
    },
    {
      ARTISTS: "Diamond Rings",
      "ALBUM TITLE": "Special Affections",
      SCORE: 8
    },
    {
      ARTISTS: "Warpaint",
      "ALBUM TITLE": "The Fool",
      SCORE: 6
    },
    {
      ARTISTS: "Matthew Dear",
      "ALBUM TITLE": "Black City",
      SCORE: 7
    },
    {
      ARTISTS: "Zach Hill",
      "ALBUM TITLE": "Face Tat",
      SCORE: 5
    },
    {
      ARTISTS: "Kings of Leon",
      "ALBUM TITLE": "Come Around Sundown",
      SCORE: 4
    },
    {
      ARTISTS: "The Gaslamp Killer",
      "ALBUM TITLE": "Death Gate",
      SCORE: 7
    },
    {
      ARTISTS: "Avey Tare",
      "ALBUM TITLE": "Down There",
      SCORE: 5
    },
    {
      ARTISTS: "Sharon Van Etten",
      "ALBUM TITLE": "Epic",
      SCORE: 7
    },
    {
      ARTISTS: "Luke Abbott",
      "ALBUM TITLE": "Holkham Drones",
      SCORE: 8
    },
    {
      ARTISTS: "The Fresh & Onlys",
      "ALBUM TITLE": "Play It Strange",
      SCORE: 4
    },
    {
      ARTISTS: "Belle and Sebastian",
      "ALBUM TITLE": "Belle and Sebastian Write About Love",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      "ALBUM TITLE": "The Age of Adz",
      SCORE: 6
    },
    {
      ARTISTS: "Mark Ronson & The Business Intl.",
      "ALBUM TITLE": "Record Collection",
      SCORE: 5
    },
    {
      ARTISTS: "Twin Shadow",
      "ALBUM TITLE": "Forget",
      SCORE: 8
    },
    {
      ARTISTS: "Abe Vigoda",
      "ALBUM TITLE": "Crush",
      SCORE: 4
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      "ALBUM TITLE": "Sometimes the Blues Is Just a Passing Bird",
      SCORE: 8
    },
    {
      ARTISTS: "Salem",
      "ALBUM TITLE": "King Night",
      SCORE: 2
    },
    {
      ARTISTS: "Women",
      "ALBUM TITLE": "Public Strain",
      SCORE: 9
    },
    {
      ARTISTS: "Neil Young",
      "ALBUM TITLE": "Le Noise",
      SCORE: 5
    },
    {
      ARTISTS: "No Age",
      "ALBUM TITLE": "Everything In Between",
      SCORE: 6
    },
    {
      ARTISTS: "Nails",
      "ALBUM TITLE": "Unsilent Death",
      SCORE: 9
    },
    {
      ARTISTS: "Deerhunter",
      "ALBUM TITLE": "Halcyon Digest",
      SCORE: 8
    },
    {
      ARTISTS: "Swans",
      "ALBUM TITLE": "My Father Will Guide Me Up a Rope to the Sky",
      SCORE: 6
    },
    {
      ARTISTS: "Flying Lotus",
      "ALBUM TITLE": "Pattern+Grid World",
      SCORE: 8
    },
    {
      ARTISTS: "Black Mountain",
      "ALBUM TITLE": "Wilderness Heart",
      SCORE: 6
    },
    {
      ARTISTS: "Black Milk",
      "ALBUM TITLE": "Album of the Year",
      SCORE: 4
    },
    {
      ARTISTS: "Future Islands",
      "ALBUM TITLE": "In Evening Air",
      SCORE: 7
    },
    {
      ARTISTS: "Chromeo",
      "ALBUM TITLE": "Business Casual",
      SCORE: 9
    },
    {
      ARTISTS: "The Walkmen",
      "ALBUM TITLE": "Lisbon",
      SCORE: 5
    },
    {
      ARTISTS: "Grinderman",
      "ALBUM TITLE": "Grinderman 2",
      SCORE: 7
    },
    {
      ARTISTS: "Blonde Redhead",
      "ALBUM TITLE": "Penny Sparkle",
      SCORE: 8
    },
    {
      ARTISTS: "of Montreal",
      "ALBUM TITLE": "False Priest",
      SCORE: 5
    },
    {
      ARTISTS: "Weezer",
      "ALBUM TITLE": "Hurley",
      SCORE: 7
    },
    {
      ARTISTS: "Tera Melos",
      "ALBUM TITLE": "Patagonian Rats",
      SCORE: 5
    },
    {
      ARTISTS: "Watain",
      "ALBUM TITLE": "Lawless Darkness",
      SCORE: 6
    },
    {
      ARTISTS: "Miami Horror",
      "ALBUM TITLE": "Illumination",
      SCORE: 7
    },
    {
      ARTISTS: "Interpol",
      "ALBUM TITLE": "Interpol",
      SCORE: 5
    },
    {
      ARTISTS: "Magic Kids",
      "ALBUM TITLE": "Memphis",
      SCORE: 8
    },
    {
      ARTISTS: "Mogwai",
      "ALBUM TITLE": "Special Moves",
      SCORE: 8
    },
    {
      ARTISTS: "Klaxons",
      "ALBUM TITLE": "Surfing the Void",
      SCORE: 4
    },
    {
      ARTISTS: "Matmos and So Percussion",
      "ALBUM TITLE": "Treasure State",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      "ALBUM TITLE": "All Delighted People",
      SCORE: 8
    },
    {
      ARTISTS: "Teen Daze",
      "ALBUM TITLE": "Four More Years",
      SCORE: 7
    },
    {
      ARTISTS: "Iron Maiden",
      "ALBUM TITLE": "The Final Frontier",
      SCORE: 6
    },
    {
      ARTISTS: "Thou",
      "ALBUM TITLE": "Summit",
      SCORE: 7
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Afro-Beat Airways",
      SCORE: 8
    },
    {
      ARTISTS: "Autolux",
      "ALBUM TITLE": "Transit Transit",
      SCORE: 6
    },
    {
      ARTISTS: "The Budos Band",
      "ALBUM TITLE": "The Budos Band III",
      SCORE: 5
    },
    {
      ARTISTS: "Daughters",
      "ALBUM TITLE": "Daughters",
      SCORE: 8
    },
    {
      ARTISTS: "Ceremony",
      "ALBUM TITLE": "Rohnert Park",
      SCORE: 8
    },
    {
      ARTISTS: "Arcade Fire",
      "ALBUM TITLE": "The Suburbs",
      SCORE: 8
    },
    {
      ARTISTS: "Dangermouse and Sparklehorse",
      "ALBUM TITLE": "Dark Night of the Soul",
      SCORE: "[he discussed copyright]"
    },
    {
      ARTISTS: "Wild Nothing",
      "ALBUM TITLE": "Gemini",
      SCORE: 7
    },
    {
      ARTISTS: "Best Coast",
      "ALBUM TITLE": "Crazy For You",
      SCORE: 5
    },
    {
      ARTISTS: "Mono/Poly",
      "ALBUM TITLE": "Paramatma",
      SCORE: 6
    },
    {
      ARTISTS: "Baths",
      "ALBUM TITLE": "Cerulean",
      SCORE: 8
    },
    {
      ARTISTS: "The Books",
      "ALBUM TITLE": "The Way Out",
      SCORE: 9
    },
    {
      ARTISTS: "MIA",
      "ALBUM TITLE": "Maya (/\\/\\ /\\ Y /\\)",
      SCORE: 5
    },
    {
      ARTISTS: "Dirty Projectors and Bjork",
      "ALBUM TITLE": "Mount Wittenberg Orca",
      SCORE: 8
    },
    {
      ARTISTS: "Superhumanoids",
      "ALBUM TITLE": "Urgency",
      SCORE: 8
    },
    {
      ARTISTS: "Noveller",
      "ALBUM TITLE": "Desert Fires",
      SCORE: 7
    },
    {
      ARTISTS: "Big Boi",
      "ALBUM TITLE": "Sir Lucious Left Foot: The Son of Chico Dusty",
      SCORE: 6
    },
    {
      ARTISTS: "Club 8",
      "ALBUM TITLE": "The People's Record",
      SCORE: 5
    },
    {
      ARTISTS: "Wavves",
      "ALBUM TITLE": "King of the Beach",
      SCORE: 8
    },
    {
      ARTISTS: "The Roots",
      "ALBUM TITLE": "How I Got Over",
      SCORE: 8
    },
    {
      ARTISTS: "Wolf Parade",
      "ALBUM TITLE": "Expo 86",
      SCORE: 6
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Cloud Cuckooland",
      SCORE: 7
    },
    {
      ARTISTS: "Emeralds",
      "ALBUM TITLE": "Does It Look Like I'm Here?",
      SCORE: 6
    },
    {
      ARTISTS: "Laurie Anderson",
      "ALBUM TITLE": "Homeland",
      SCORE: 8
    },
    {
      ARTISTS: "Janelle Monáe",
      "ALBUM TITLE": "The ArchAndroid",
      SCORE: 8
    },
    {
      ARTISTS: "Uffie",
      "ALBUM TITLE": "Sex Dreams and Denim Jeans",
      SCORE: 2
    },
    {
      ARTISTS: "Devo",
      "ALBUM TITLE": "Something For Everybody",
      SCORE: 6
    },
    {
      ARTISTS: "The Radio Dept.",
      "ALBUM TITLE": "Clinging To A Scheme",
      SCORE: 8
    },
    {
      ARTISTS: "Villagers",
      "ALBUM TITLE": "Becoming A Jackal",
      SCORE: 6
    },
    {
      ARTISTS: "Foals",
      "ALBUM TITLE": "Total Life Forever",
      SCORE: 4
    },
    {
      ARTISTS: "The Drums",
      "ALBUM TITLE": "The Drums",
      SCORE: 8
    },
    {
      ARTISTS: "Suckers",
      "ALBUM TITLE": "Wild Smile",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink's Haunted Graffiti",
      "ALBUM TITLE": "Before Today",
      SCORE: 8
    },
    {
      ARTISTS: "Here We Go Magic",
      "ALBUM TITLE": "Pigeons",
      SCORE: 7
    },
    {
      ARTISTS: "Sleepy Sun",
      "ALBUM TITLE": "Fever",
      SCORE: 7
    },
    {
      ARTISTS: "Melvins",
      "ALBUM TITLE": "The Bride Screamed Murder",
      SCORE: 5
    },
    {
      ARTISTS: "Tame Impala",
      "ALBUM TITLE": "Innerspeaker",
      SCORE: 6
    },
    {
      ARTISTS: "Guilty Simpson",
      "ALBUM TITLE": "OJ Simpson",
      SCORE: 6
    },
    {
      ARTISTS: "Ratatat",
      "ALBUM TITLE": "LP4",
      SCORE: 8
    },
    {
      ARTISTS: "Xasthur",
      "ALBUM TITLE": "Portal of Sorrow",
      SCORE: 4
    },
    {
      ARTISTS: "Tobacco",
      "ALBUM TITLE": "Maniac Meat",
      SCORE: 7
    },
    {
      ARTISTS: "Harlem",
      "ALBUM TITLE": "Hippies",
      SCORE: 7
    },
    {
      ARTISTS: "Sleigh Bells",
      "ALBUM TITLE": "Treats",
      SCORE: 3
    },
    {
      ARTISTS: "The Black Keys",
      "ALBUM TITLE": "Brothers",
      SCORE: 7
    },
    {
      ARTISTS: "LCD Soundsystem",
      "ALBUM TITLE": "This Is Happening",
      SCORE: 9
    },
    {
      ARTISTS: "The Dead Weather",
      "ALBUM TITLE": "Sea of Cowards",
      SCORE: 5
    },
    {
      ARTISTS: "The New Pornographers",
      "ALBUM TITLE": "Together",
      SCORE: 7
    },
    {
      ARTISTS: "The National",
      "ALBUM TITLE": "High Violet",
      SCORE: 6
    },
    {
      ARTISTS: "Woods",
      "ALBUM TITLE": "At Echo Lake",
      SCORE: 8
    },
    {
      ARTISTS: "Holy Fuck",
      "ALBUM TITLE": "Latin",
      SCORE: 7
    },
    {
      ARTISTS: "Little Women",
      "ALBUM TITLE": "Throat",
      SCORE: 9
    },
    {
      ARTISTS: "Flying Lotus",
      "ALBUM TITLE": "Cosmogramma",
      SCORE: 8
    },
    {
      ARTISTS: "Broken Social Scene",
      "ALBUM TITLE": "Forgiveness Rock Record",
      SCORE: 4
    },
    {
      ARTISTS: "Crystal Castles",
      "ALBUM TITLE": "Crystal Castles",
      SCORE: 7
    },
    {
      ARTISTS: "Darkthrone",
      "ALBUM TITLE": "Circle the Wagons",
      SCORE: 5
    },
    {
      ARTISTS: "Various Artists",
      "ALBUM TITLE": "Pomegranates",
      SCORE: 8
    },
    {
      ARTISTS: "Happy Birthday",
      "ALBUM TITLE": "Happy Birthday",
      SCORE: 6
    },
    {
      ARTISTS: "Caribou",
      "ALBUM TITLE": "Swim",
      SCORE: 6
    },
    {
      ARTISTS: "Iggy and the Stooges",
      "ALBUM TITLE": "Raw Power  (Legacy Remaster)",
      SCORE: 5
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      "ALBUM TITLE": "The Wild Hunt",
      SCORE: 8
    },
    {
      ARTISTS: "Titus Andronicus",
      "ALBUM TITLE": "The Monitor",
      SCORE: 7
    },
    {
      ARTISTS: "Burzum",
      "ALBUM TITLE": "Belus",
      SCORE: 4
    },
    {
      ARTISTS: "Black Tambourine",
      "ALBUM TITLE": "Black Tambourine",
      SCORE: 7
    },
    {
      ARTISTS: "Jonsi",
      "ALBUM TITLE": "Go",
      SCORE: 6
    },
    {
      ARTISTS: "Autechre",
      "ALBUM TITLE": "Oversteps",
      SCORE: 5
    },
    {
      ARTISTS: "The Morning Benders",
      "ALBUM TITLE": "Big Echo",
      SCORE: 6
    },
    {
      ARTISTS: "MGMT",
      "ALBUM TITLE": "Congratulations",
      SCORE: 8
    },
    {
      ARTISTS: "Portugal. The Man",
      "ALBUM TITLE": "American Ghetto",
      SCORE: 3
    },
    {
      ARTISTS: "Gonjasufi",
      "ALBUM TITLE": "A Sufi and a Killer",
      SCORE: 9
    },
    {
      ARTISTS: "Arckanum",
      "ALBUM TITLE": "ÞÞÞÞÞÞÞÞÞÞÞ",
      SCORE: 8
    },
    {
      ARTISTS: "Broken Bells",
      "ALBUM TITLE": "Broken Bells",
      SCORE: 5
    },
    {
      ARTISTS: "Liars",
      "ALBUM TITLE": "Sisterworld",
      SCORE: 6
    },
    {
      ARTISTS: "High On Fire",
      "ALBUM TITLE": "Snakes for the Divine",
      SCORE: 8
    },
    {
      ARTISTS: "The Knife",
      "ALBUM TITLE": "Tomorrow, In a Year Album",
      SCORE: 3
    },
    {
      ARTISTS: "Gorillaz",
      "ALBUM TITLE": "Plastic Beach",
      SCORE: 7
    }
  ];

  return knex("data").insert(data);
};

exports.down = function(knex) {
  return knex("data").del();
};
