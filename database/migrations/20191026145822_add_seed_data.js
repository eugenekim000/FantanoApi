exports.up = function(knex, promise) {
  const data = [
    {
      ARTISTS: "System of a Down",
      ALBUM_TITLE: "Toxicity",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Burial",
      ALBUM_TITLE: "Untrue",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Cannibal Ox",
      ALBUM_TITLE: "The Cold Vein",
      SCORE: "CLASSIC"
    }
    /*   {
      ARTISTS: "Sleater-Kinney",
      ALBUM_TITLE: "The Woods",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "The Postal Service",
      ALBUM_TITLE: "Give Up",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Meek Mill",
      ALBUM_TITLE: "Championships",
      SCORE: 5
    },
    {
      ARTISTS: "Soap&Skin",
      ALBUM_TITLE: "From Gas to Solid / You Are My Friend",
      SCORE: 4
    },
    {
      ARTISTS: "Black Thought, Salaam Remi",
      ALBUM_TITLE: "Streams of Thought, Vol. 2",
      SCORE: 7
    },
    {
      ARTISTS: "XXXTENTACION",
      ALBUM_TITLE: "Skins",
      SCORE: 2
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      ALBUM_TITLE: "Stokeley",
      SCORE: 6
    },
    {
      ARTISTS: "The 1975",
      ALBUM_TITLE: "A Brief Inquiry Into Online Relationships",
      SCORE: 6
    },
    {
      ARTISTS: "Earl Sweatshirt",
      ALBUM_TITLE: "Some Rap Songs",
      SCORE: 8
    },
    {
      ARTISTS: "Kai Whiston",
      ALBUM_TITLE: "Kai Whiston Bitch",
      SCORE: 7
    },
    {
      ARTISTS: "J.I.D",
      ALBUM_TITLE: "DiCaprio 2",
      SCORE: 8
    },
    {
      ARTISTS: "Onxy Collective",
      ALBUM_TITLE: "Lower East Side Suite Part Three",
      SCORE: 7
    },
    {
      ARTISTS: "6ix9ine",
      ALBUM_TITLE: "Dummy Boy",
      SCORE: 4
    },
    {
      ARTISTS: "Tyler, the Creator",
      ALBUM_TITLE: "Music Inspired by Illumination & Dr. Seuss' The Grinch",
      SCORE: 3
    },
    {
      ARTISTS: "Muse",
      ALBUM_TITLE: "Simulation Theory",
      SCORE: 5
    },
    {
      ARTISTS: "Trippie Redd",
      ALBUM_TITLE: "A Love Letter To You 3",
      SCORE: 7
    },
    {
      ARTISTS: "Jaden Smith",
      ALBUM_TITLE: "The Sunset Tapes: A Cool Tape Story",
      SCORE: 2
    },
    {
      ARTISTS: "Anderson .Paak",
      ALBUM_TITLE: "Oxnard",
      SCORE: 8
    },
    {
      ARTISTS: "Action Bronson",
      ALBUM_TITLE: "White Bronco",
      SCORE: 5
    },
    {
      ARTISTS: "Lil Peep",
      ALBUM_TITLE: "Come On Over When You're Sober, Pt.2",
      SCORE: 4
    },
    {
      ARTISTS: "Jeffrey Lewis",
      ALBUM_TITLE: "Works by Tuli Kupferberg (1923-2010)",
      SCORE: 7
    },
    {
      ARTISTS: "Imagine Dragons",
      ALBUM_TITLE: "Origins",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Sun Kil Moon",
      ALBUM_TITLE: "This Is My Dinner",
      SCORE: 6
    },
    {
      ARTISTS: "Metro Boomin",
      ALBUM_TITLE: "Not All Heroes Wear Capes",
      SCORE: 6
    },
    {
      ARTISTS: "Takeoff",
      ALBUM_TITLE: "The Last Rocket",
      SCORE: 4
    },
    {
      ARTISTS: "Curren$y, Freddie Gibbs, The Alchemist",
      ALBUM_TITLE: "Fetti",
      SCORE: 7
    },
    {
      ARTISTS: "Poppy",
      ALBUM_TITLE: "Am I a Girl?",
      SCORE: 7
    },
    {
      ARTISTS: "Rosalía",
      ALBUM_TITLE: "El mal querer",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      ALBUM_TITLE: "FM!",
      SCORE: 7
    },
    {
      ARTISTS: "Julia Holter",
      ALBUM_TITLE: "Aviary",
      SCORE: 8
    },
    {
      ARTISTS: "Daughters",
      ALBUM_TITLE: "You Won't Get What You Want",
      SCORE: 10
    },
    {
      ARTISTS: "Current 93",
      ALBUM_TITLE: "The Light Is Leaving Us All",
      SCORE: 8
    },
    {
      ARTISTS: "Kurt Vile",
      ALBUM_TITLE: "Bottle It In",
      SCORE: 6
    },
    {
      ARTISTS: "Joji",
      ALBUM_TITLE: "Ballads 1",
      SCORE: 5
    },
    {
      ARTISTS: "Greta Van Fleet",
      ALBUM_TITLE: "Anthem of the Peaceful Army",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Lil Yatchy",
      ALBUM_TITLE: "Nuthin' 2 Prove",
      SCORE: 2
    },
    {
      ARTISTS: "Little Big",
      ALBUM_TITLE: "Antipositive Part 2",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle",
      ALBUM_TITLE: "What Happens When I Try To Relax",
      SCORE: 7
    },
    {
      ARTISTS: "Future, Juice WRLD",
      ALBUM_TITLE: "WRLD on Drugs",
      SCORE: 5
    },
    {
      ARTISTS: "High on Fire",
      ALBUM_TITLE: "Electric Messiah",
      SCORE: 6
    },
    {
      ARTISTS: "Polyphia",
      ALBUM_TITLE: "New Levels New Devils",
      SCORE: 8
    },
    {
      ARTISTS: "City Morgue",
      ALBUM_TITLE: "Vol. 1: Hell or High Water",
      SCORE: 6
    },
    {
      ARTISTS: "Quavo",
      ALBUM_TITLE: "Quavo Huncho",
      SCORE: 4
    },
    {
      ARTISTS: "Clarence Clarity",
      ALBUM_TITLE: "Think: Peace",
      SCORE: 7
    },
    {
      ARTISTS: "Horrendous",
      ALBUM_TITLE: "Idol",
      SCORE: 9
    },
    {
      ARTISTS: "Lil Baby, Gunna",
      ALBUM_TITLE: "Drip Harder",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Sheck Wes",
      ALBUM_TITLE: "Mudboy",
      SCORE: 6
    },
    {
      ARTISTS: "Behemoth",
      ALBUM_TITLE: "I Loved You at Your Darkest",
      SCORE: 7
    },
    {
      ARTISTS: "Marissa Nadler",
      ALBUM_TITLE: "For My Crimes",
      SCORE: 7
    },
    {
      ARTISTS: "twenty one pilots",
      ALBUM_TITLE: "Trench",
      SCORE: 8
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "YSIV",
      SCORE: 5
    },
    {
      ARTISTS: "Kero Kero Bonito",
      ALBUM_TITLE: "Time 'n' Place",
      SCORE: 8
    },
    {
      ARTISTS: "Tim Hecker",
      ALBUM_TITLE: "Konoyo",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Wayne",
      ALBUM_TITLE: "Tha Carter V",
      SCORE: 6
    },
    {
      ARTISTS: "Lupe Fiasco",
      ALBUM_TITLE: "DROGAS Wave",
      SCORE: 7
    },
    {
      ARTISTS: "JMSN",
      ALBUM_TITLE: "Velvet",
      SCORE: 7
    },
    {
      ARTISTS: "Hozier",
      ALBUM_TITLE: "Nina Cried Power",
      SCORE: 6
    },
    {
      ARTISTS: "milo",
      ALBUM_TITLE: "budding ornithologists are weary of tired analogies",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      ALBUM_TITLE: "iridescense",
      SCORE: 7
    },
    {
      ARTISTS: "Guerilla Toss",
      ALBUM_TITLE: "Twisted Crystal",
      SCORE: 8
    },
    {
      ARTISTS: "Spiritualized",
      ALBUM_TITLE: "And Nothing Hurt",
      SCORE: 7
    },
    {
      ARTISTS: "6LACK",
      ALBUM_TITLE: "East Atlanta Love Letter",
      SCORE: 4
    },
    {
      ARTISTS: "Noname",
      ALBUM_TITLE: "Room 25",
      SCORE: 8
    },
    {
      ARTISTS: "Aphex Twin",
      ALBUM_TITLE: "Collaspe",
      SCORE: 8
    },
    {
      ARTISTS: "Russ",
      ALBUM_TITLE: "Zoo",
      SCORE: 3
    },
    {
      ARTISTS: "Yves Tumor",
      ALBUM_TITLE: "Safe in the Hands of Love",
      SCORE: 7
    },
    {
      ARTISTS: "$uicideBoy$",
      ALBUM_TITLE: "I Want To Die in New Orleans",
      SCORE: 6
    },
    {
      ARTISTS: "Thou",
      ALBUM_TITLE: "Magnus",
      SCORE: 6
    },
    {
      ARTISTS: "Okonolo",
      ALBUM_TITLE: "Cantos",
      SCORE: 7
    },
    {
      ARTISTS: "Armand Hammer",
      ALBUM_TITLE: "Paraffin",
      SCORE: 8
    },
    {
      ARTISTS: "IDLES",
      ALBUM_TITLE: "Joy as an Act of Resistance",
      SCORE: 9
    },
    {
      ARTISTS: "George Clinton",
      ALBUM_TITLE: "Slide",
      SCORE: 7
    },
    {
      ARTISTS: "Eminem",
      ALBUM_TITLE: "Kamikaze",
      SCORE: 4
    },
    {
      ARTISTS: "Interpol",
      ALBUM_TITLE: "Marauder",
      SCORE: 4
    },
    {
      ARTISTS: "Blood Orange",
      ALBUM_TITLE: "Negro Swan",
      SCORE: 8
    },
    {
      ARTISTS: "Oh Sees",
      ALBUM_TITLE: "Smote Reverser",
      SCORE: 6
    },
    {
      ARTISTS: "Hermit and the Recluse",
      ALBUM_TITLE: "Orpheus vs. the Sirens",
      SCORE: 8
    },
    {
      ARTISTS: "Louis Cole",
      ALBUM_TITLE: "Time",
      SCORE: 8
    },
    {
      ARTISTS: "Ariana Grande",
      ALBUM_TITLE: "Sweetener",
      SCORE: 7
    },
    {
      ARTISTS: "Mitski",
      ALBUM_TITLE: "Be The Cowboy",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "Slime Language",
      SCORE: 5
    },
    {
      ARTISTS: "Iglooghost",
      ALBUM_TITLE: "Steel Mogu",
      SCORE: 7
    },
    {
      ARTISTS: "Iglooghost",
      ALBUM_TITLE: "Clear Tamei",
      SCORE: 8
    },
    {
      ARTISTS: "Trippie Redd",
      ALBUM_TITLE: "Life's a Trip",
      SCORE: 5
    },
    {
      ARTISTS: "HMLTD",
      ALBUM_TITLE: "Hate Music Last Time Delete",
      SCORE: 8
    },
    {
      ARTISTS: "Nicki Minaj",
      ALBUM_TITLE: "Queen",
      SCORE: 5
    },
    {
      ARTISTS: "Valee",
      ALBUM_TITLE: "Good Job, You Found Me",
      SCORE: 3
    },
    {
      ARTISTS: "Imperial Triumphant",
      ALBUM_TITLE: "Vile Luxury",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "Swimming",
      SCORE: 3
    },
    {
      ARTISTS: "YG",
      ALBUM_TITLE: "Stay Dangerous",
      SCORE: 5
    },
    {
      ARTISTS: "Travis Scott",
      ALBUM_TITLE: "Astroworld",
      SCORE: 7
    },
    {
      ARTISTS: "James Ferraro",
      ALBUM_TITLE: "Four Pieces for Mirai",
      SCORE: 7
    },
    {
      ARTISTS: "Let's Eat Grandma",
      ALBUM_TITLE: "I'm All Ears",
      SCORE: 7
    },
    {
      ARTISTS: "Denzel Curry",
      ALBUM_TITLE: "TA13OO",
      SCORE: 8
    },
    {
      ARTISTS: "Melody's Echo Chamber",
      ALBUM_TITLE: "Bon Voyage",
      SCORE: 7
    },
    {
      ARTISTS: "88rising",
      ALBUM_TITLE: "Head in the Clouds",
      SCORE: 5
    },
    {
      ARTISTS: "The Internet",
      ALBUM_TITLE: "Hive Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Busdriver",
      ALBUM_TITLE: "Electricity is on our Side",
      SCORE: 5
    },
    {
      ARTISTS: "Dirty Projectors",
      ALBUM_TITLE: "Lamp Lit Prose",
      SCORE: 6
    },
    {
      ARTISTS: "Snail Mail",
      ALBUM_TITLE: "Lush",
      SCORE: 7
    },
    {
      ARTISTS: "Haru Nemuri",
      ALBUM_TITLE: "Haru to Shura",
      SCORE: 8
    },
    {
      ARTISTS: "Deafheaven",
      ALBUM_TITLE: "Ordinary Corrupt Human Love",
      SCORE: 5
    },
    {
      ARTISTS: "serpentwithfeet",
      ALBUM_TITLE: "soil",
      SCORE: 7
    },
    {
      ARTISTS: "Florence + The Machine",
      ALBUM_TITLE: "High As Hope",
      SCORE: 7
    },
    {
      ARTISTS: "Zeal & Ardor",
      ALBUM_TITLE: "Stranger Fruit",
      SCORE: 8
    },
    {
      ARTISTS: "The Carters",
      ALBUM_TITLE: "Everything Is Love",
      SCORE: 5
    },
    {
      ARTISTS: "Teyena Taylor",
      ALBUM_TITLE: "K.T.S.E.",
      SCORE: 6
    },
    {
      ARTISTS: "Vein",
      ALBUM_TITLE: "Errorzone",
      SCORE: 6
    },
    {
      ARTISTS: "Kamasi Washington",
      ALBUM_TITLE: "Heaven and Earth",
      SCORE: 6
    },
    {
      ARTISTS: "Gorillaz",
      ALBUM_TITLE: "The Now Now",
      SCORE: 6
    },
    {
      ARTISTS: "Jay Rock",
      ALBUM_TITLE: "Redemption",
      SCORE: 4
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "Scorpion",
      SCORE: 4
    },
    {
      ARTISTS: "Nine Inch Nails",
      ALBUM_TITLE: "Bad Witch",
      SCORE: 7
    },
    {
      ARTISTS: "Freddie Gibbs",
      ALBUM_TITLE: "Freddie",
      SCORE: "meh"
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Year of the Snitch",
      SCORE: 9
    },
    {
      ARTISTS: "Rico Nasty",
      ALBUM_TITLE: "Nasty",
      SCORE: 6
    },
    {
      ARTISTS: "SOPHIE",
      ALBUM_TITLE: "Oil of Every Pearl's Un-Insides",
      SCORE: 8
    },
    {
      ARTISTS: "Nas",
      ALBUM_TITLE: "Nasir",
      SCORE: 6
    },
    {
      ARTISTS: "Bladee",
      ALBUM_TITLE: "Red Light",
      SCORE: 1
    },
    {
      ARTISTS: "LUMP",
      ALBUM_TITLE: "LUMP",
      SCORE: 7
    },
    {
      ARTISTS: "Tropical Fuckstorm",
      ALBUM_TITLE: "A Laughing Death in Meatspace",
      SCORE: 8
    },
    {
      ARTISTS: "Big Ups",
      ALBUM_TITLE: "Two Parts Together",
      SCORE: 6
    },
    {
      ARTISTS: "Black Thought, 9th Wonder",
      ALBUM_TITLE: "Streams of Thought, Vol. 1",
      SCORE: 8
    },
    {
      ARTISTS: "Tierra Whack",
      ALBUM_TITLE: "Tierra Whack",
      SCORE: 7
    },
    {
      ARTISTS: "Godsmack",
      ALBUM_TITLE: "When Legends Rise",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "KIDS SEE GHOSTS",
      ALBUM_TITLE: "KIDS SEE GHOSTS",
      SCORE: 10
    },
    {
      ARTISTS: "Ghost",
      ALBUM_TITLE: "Prequelle",
      SCORE: 8
    },
    {
      ARTISTS: "Father John Misty",
      ALBUM_TITLE: "God's Favorite Customer",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      ALBUM_TITLE: "Age Of",
      SCORE: 6
    },
    {
      ARTISTS: "Juice WRLD",
      ALBUM_TITLE: "Goodbye & Good Riddance",
      SCORE: 5
    },
    {
      ARTISTS: "Kanye West",
      ALBUM_TITLE: "ye",
      SCORE: 8
    },
    {
      ARTISTS: "NIKI",
      ALBUM_TITLE: "Zephyr",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Rocky",
      ALBUM_TITLE: "Testing",
      SCORE: 4
    },
    {
      ARTISTS: "BTS",
      ALBUM_TITLE: "Tear",
      SCORE: 6
    },
    {
      ARTISTS: "Park Jiha",
      ALBUM_TITLE: "Communion",
      SCORE: 6
    },
    {
      ARTISTS: "Pusha T",
      ALBUM_TITLE: "Daytona",
      SCORE: 8
    },
    {
      ARTISTS: "Lil B",
      ALBUM_TITLE: "Platinum Flame",
      SCORE: "based"
    },
    {
      ARTISTS: "Mark Kozelek",
      ALBUM_TITLE: "Mark Kozelek",
      SCORE: 7
    },
    {
      ARTISTS: "Nav",
      ALBUM_TITLE: "Reckless",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Parquet Courts",
      ALBUM_TITLE: "Wide Awake!",
      SCORE: 9
    },
    {
      ARTISTS: "Courtney Barnett",
      ALBUM_TITLE: "Tell Me How You Really Feel",
      SCORE: 6
    },
    {
      ARTISTS: "Frank Ocean",
      ALBUM_TITLE: "Endless",
      SCORE: 8
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      ALBUM_TITLE: "Beware the Book of Eli",
      SCORE: 7
    },
    {
      ARTISTS: "Artic Monkeys",
      ALBUM_TITLE: "Tranquillity Based Hotel + Casino",
      SCORE: 5
    },
    {
      ARTISTS: "Beach House",
      ALBUM_TITLE: 7,
      SCORE: 7
    },
    {
      ARTISTS: "Playboi Carti",
      ALBUM_TITLE: "Die Lit",
      SCORE: 7
    },
    {
      ARTISTS: "Jon Hopkins",
      ALBUM_TITLE: "Singularity",
      SCORE: 7
    },
    {
      ARTISTS: "Wiley",
      ALBUM_TITLE: "Godfather II",
      SCORE: 5
    },
    {
      ARTISTS: "Ice Age",
      ALBUM_TITLE: "Beyondless",
      SCORE: 7
    },
    {
      ARTISTS: "Slim Jxmmi",
      ALBUM_TITLE: "Jxmtro",
      SCORE: 5
    },
    {
      ARTISTS: "Swae Lee",
      ALBUM_TITLE: "Swaecation",
      SCORE: 1
    },
    {
      ARTISTS: "Rae Sremmurd",
      ALBUM_TITLE: "SR3MM",
      SCORE: 7
    },
    {
      ARTISTS: "Daniel Avery",
      ALBUM_TITLE: "Song For Alpha",
      SCORE: 5
    },
    {
      ARTISTS: "Kimbra",
      ALBUM_TITLE: "Primal Heart",
      SCORE: 7
    },
    {
      ARTISTS: "Panopticon",
      ALBUM_TITLE: "The Scars of Man on the Once Nameless Wilderness",
      SCORE: 4
    },
    {
      ARTISTS: "Janelle Monáe",
      ALBUM_TITLE: "Dirty Computer",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      ALBUM_TITLE: "beerbongs & bentleys",
      SCORE: 7
    },
    {
      ARTISTS: "Sleep",
      ALBUM_TITLE: "The Sciences",
      SCORE: 8
    },
    {
      ARTISTS: "Felix Blume",
      ALBUM_TITLE:
        "Death In Haiti: Funeral Brass Bands & Sounds From Port Au Prince",
      SCORE: "none"
    },
    {
      ARTISTS: "A Perfect Circle",
      ALBUM_TITLE: "Eat the Elephant",
      SCORE: 5
    },
    {
      ARTISTS: "Hop Along",
      ALBUM_TITLE: 8,
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      ALBUM_TITLE: "KOD",
      SCORE: 5
    },
    {
      ARTISTS: "Unkown Mortal Orchestra",
      ALBUM_TITLE: "Sex & Food",
      SCORE: 5
    },
    {
      ARTISTS: "Princess Nokia",
      ALBUM_TITLE: "A Girl Cried Red",
      SCORE: 4
    },
    {
      ARTISTS: "John Prine",
      ALBUM_TITLE: "The Tree of Forgiveness",
      SCORE: 7
    },
    {
      ARTISTS: "Saba",
      ALBUM_TITLE: "CARE FOR ME",
      SCORE: "meh"
    },
    {
      ARTISTS: "Sons of Kemet",
      ALBUM_TITLE: "Your Queen is a Reptile",
      SCORE: 8
    },
    {
      ARTISTS: "Kali Uchis",
      ALBUM_TITLE: "Isolation",
      SCORE: 8
    },
    {
      ARTISTS: "Flatbush Zombies",
      ALBUM_TITLE: "Vacation in Hell",
      SCORE: 6
    },
    {
      ARTISTS: "Cardi B",
      ALBUM_TITLE: "Invasion of Privacy",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Xan",
      ALBUM_TITLE: "Total Xanarchy",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ruin",
      ALBUM_TITLE: "Plague Transmissions Vol. 1",
      SCORE: "awesomely nasty"
    },
    {
      ARTISTS: "Kacey Musgraves",
      ALBUM_TITLE: "Golden Hour",
      SCORE: 4
    },
    {
      ARTISTS: "Jean Grae, Quelle Chris",
      ALBUM_TITLE: "Everything's Fine",
      SCORE: 8
    },
    {
      ARTISTS: "Czarface, MF Doom",
      ALBUM_TITLE: "Czarface Meets Metal Face",
      SCORE: 7
    },
    {
      ARTISTS: "The Voidz",
      ALBUM_TITLE: "Virtue",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "My Dear Melancholy",
      SCORE: 5
    },
    {
      ARTISTS: "Superorganism",
      ALBUM_TITLE: "Superorganism",
      SCORE: 7
    },
    {
      ARTISTS: "Preoccupations",
      ALBUM_TITLE: "New Material",
      SCORE: 5
    },
    {
      ARTISTS: "PRhyme",
      ALBUM_TITLE: "PRhyme 2",
      SCORE: 6
    },
    {
      ARTISTS: "Jack White",
      ALBUM_TITLE: "Boarding House Reach",
      SCORE: 9
    },
    {
      ARTISTS: "Mount Eerie",
      ALBUM_TITLE: "Now Only",
      SCORE: 7
    },
    {
      ARTISTS: "Wendy's",
      ALBUM_TITLE: "We Beefin?",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Keiji Haino + Sumac",
      ALBUM_TITLE: "American Dollar Bill",
      SCORE: 7
    },
    {
      ARTISTS: "The Neighborhood",
      ALBUM_TITLE: "The Neighborhood",
      SCORE: 4
    },
    {
      ARTISTS: "Judas Priest",
      ALBUM_TITLE: "Firepower",
      SCORE: 8
    },
    {
      ARTISTS: "Young Fathers",
      ALBUM_TITLE: "Cocoa Sugar",
      SCORE: 6
    },
    {
      ARTISTS: "XXXTENTACION",
      ALBUM_TITLE: "?",
      SCORE: 4
    },
    {
      ARTISTS: "Remo Drive",
      ALBUM_TITLE: "Pop Music",
      SCORE: "notbad"
    },
    {
      ARTISTS: "Natalia Lafourcade",
      ALBUM_TITLE: "Musas Vol. 2",
      SCORE: 8
    },
    {
      ARTISTS: "David Byrne",
      ALBUM_TITLE: "American Utopia",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Yatchy",
      ALBUM_TITLE: "Lil Boat 2",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "Bobby Tarantino II",
      SCORE: 5
    },
    {
      ARTISTS: "Anna von Hausswolff",
      ALBUM_TITLE: "Dead Magic",
      SCORE: 8
    },
    {
      ARTISTS: "Titus Andronicus",
      ALBUM_TITLE: "A Productive Cough",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew W.K.",
      ALBUM_TITLE: "You’re Not Alone",
      SCORE: 8
    },
    {
      ARTISTS: "Tory Lanez",
      ALBUM_TITLE: "Memories Don’t Die",
      SCORE: 3
    },
    {
      ARTISTS: "Rejjie Snow",
      ALBUM_TITLE: "Dear Annie",
      SCORE: "lukewarm"
    },
    {
      ARTISTS: "Turnstile",
      ALBUM_TITLE: "Time & Space",
      SCORE: 5
    },
    {
      ARTISTS: "A.A.L. (Against All Logic)",
      ALBUM_TITLE: "2012 - 2017",
      SCORE: 9
    },
    {
      ARTISTS: "SOB x RBE",
      ALBUM_TITLE: "Gangin",
      SCORE: 6
    },
    {
      ARTISTS: "Screaming Females",
      ALBUM_TITLE: "All at Once",
      SCORE: 8
    },
    {
      ARTISTS: "6ix9ine",
      ALBUM_TITLE: "Day69",
      SCORE: 3
    },
    {
      ARTISTS: "U.S. Girls",
      ALBUM_TITLE: "In a Poem Unlimited",
      SCORE: 8
    },
    {
      ARTISTS: "Kero Kero Bonito",
      ALBUM_TITLE: "TOTEP",
      SCORE: "disappointing"
    },
    {
      ARTISTS: "Ought",
      ALBUM_TITLE: "Room Inside the World",
      SCORE: 6
    },
    {
      ARTISTS: "Car Seat Headrest",
      ALBUM_TITLE: "Twin Fantasy (Face to Face)",
      SCORE: 8
    },
    {
      ARTISTS: "Ravyn  Lenae",
      ALBUM_TITLE: "Crush",
      SCORE: "solid"
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Black Panther The Album",
      SCORE: 6
    },
    {
      ARTISTS: "Daymé Arocena",
      ALBUM_TITLE: "Cubafonía",
      SCORE: 8
    },
    {
      ARTISTS: "MGMT",
      ALBUM_TITLE: "Little Dark Age",
      SCORE: 8
    },
    {
      ARTISTS: "Tribulation",
      ALBUM_TITLE: "Down Below",
      SCORE: 7
    },
    {
      ARTISTS: "Tiny Moving Parts",
      ALBUM_TITLE: "Swell",
      SCORE: 4
    },
    {
      ARTISTS: "No Age",
      ALBUM_TITLE: "Snares Like A Haircut",
      SCORE: 7
    },
    {
      ARTISTS: "Rich Brian",
      ALBUM_TITLE: "Amen",
      SCORE: 6
    },
    {
      ARTISTS: "Justin Timberlake",
      ALBUM_TITLE: "Man of the Woods",
      SCORE: 3
    },
    {
      ARTISTS: "Gucci Mane",
      ALBUM_TITLE: "El Gato, The Human Glacier",
      SCORE: "it's solid"
    },
    {
      ARTISTS: "Portal",
      ALBUM_TITLE: "Ion",
      SCORE: 9
    },
    {
      ARTISTS: "Ty Segall",
      ALBUM_TITLE: "Freedom's Goblin",
      SCORE: 7
    },
    {
      ARTISTS: "Migos",
      ALBUM_TITLE: "Culture II",
      SCORE: 4
    },
    {
      ARTISTS: "Fall Out Boy",
      ALBUM_TITLE: "Mania",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "EDEN",
      ALBUM_TITLE: "vertigo",
      SCORE: "none"
    },
    {
      ARTISTS: "Tune-Yards",
      ALBUM_TITLE: "I Can Feel You Creep Into My Private Life",
      SCORE: 5
    },
    {
      ARTISTS: "First Aid Kit",
      ALBUM_TITLE: "Ruins",
      SCORE: 7
    },
    {
      ARTISTS: "JPEGMAFIA",
      ALBUM_TITLE: "Veteran",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Skies",
      ALBUM_TITLE: "Life of a Dark Rose",
      SCORE: "dime-a-dozen"
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      ALBUM_TITLE: "Gumboot Soup",
      SCORE: 7
    },
    {
      ARTISTS: "CupcakKe",
      ALBUM_TITLE: "Ephorize",
      SCORE: 7
    },
    {
      ARTISTS: "Jeff Rosenstock",
      ALBUM_TITLE: "Post",
      SCORE: 6
    },
    {
      ARTISTS: "Aphex Twin",
      ALBUM_TITLE: "Selected Ambient Works 85-92",
      SCORE: "classic"
    },
    {
      ARTISTS: "Ween",
      ALBUM_TITLE: "Chocolate and Cheese",
      SCORE: "classic"
    },
    {
      ARTISTS: "Lauryn Hill",
      ALBUM_TITLE: "The Miseducation of Lauryn Hill",
      SCORE: "classic" */
    /*     },
    {
      ARTISTS: "Michael Jackson",
      ALBUM_TITLE: "Thriller",
      SCORE: "classic"
    },
    {
      ARTISTS: "Daft Punk",
      ALBUM_TITLE: "Discovery",
      SCORE: "classic"
    },
    {
      ARTISTS: "Charlie XCX",
      ALBUM_TITLE: "Pop 2",
      SCORE: 7
    },
    {
      ARTISTS: "N.E.R.D.",
      ALBUM_TITLE: "NO_ONE EVER REALLY DIES",
      SCORE: 7
    },
    {
      ARTISTS: "Travis Scott, Quavo",
      ALBUM_TITLE: "Huncho Jack, Jack Huncho",
      SCORE: 6
    },
    {
      ARTISTS: "Eminem",
      ALBUM_TITLE: "Revival",
      SCORE: 2
    },
    {
      ARTISTS: "Chris Stapleton",
      ALBUM_TITLE: "From A Room: Volume 2",
      SCORE: 7
    },
    {
      ARTISTS: "Brockhampton",
      ALBUM_TITLE: "Saturation III",
      SCORE: 8
    },
    {
      ARTISTS: "Big Sean, Metro Boomin",
      ALBUM_TITLE: "Double or Nothing",
      SCORE: 5
    },
    {
      ARTISTS: "Quality Control",
      ALBUM_TITLE: "Control the Streets, Vol. 1",
      SCORE: "really inconsistent comp, pick out the best tracks"
    },
    {
      ARTISTS: "Princess Nokia",
      ALBUM_TITLE: "1992 Deluxe",
      SCORE: 8
    },
    {
      ARTISTS: "Makaya McCraven",
      ALBUM_TITLE: "Highly Rare",
      SCORE: 7
    },
    {
      ARTISTS: "Prurient",
      ALBUM_TITLE: "Rainbow Mirror",
      SCORE: 6
    },
    {
      ARTISTS: "Ibeyi",
      ALBUM_TITLE: "Ash",
      SCORE: 7
    },
    {
      ARTISTS: "Glassjaw",
      ALBUM_TITLE: "Material Control",
      SCORE: 6
    },
    {
      ARTISTS: "Cyhi the Prince",
      ALBUM_TITLE: "No Dope on Sundays",
      SCORE: 5
    },
    {
      ARTISTS: "GFOTY",
      ALBUM_TITLE: "GFOTYBUCKS",
      SCORE: "banging"
    },
    {
      ARTISTS: "Rosalía",
      ALBUM_TITLE: "Los Ángeles",
      SCORE: 8
    },
    {
      ARTISTS: "Hopsin",
      ALBUM_TITLE: "No Shame",
      SCORE: 4
    },
    {
      ARTISTS: "Björk",
      ALBUM_TITLE: "Utopia",
      SCORE: 7
    },
    {
      ARTISTS: "Sharon Jones & The Dap-Kings",
      ALBUM_TITLE: "Soul of a Woman",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      ALBUM_TITLE: "Polygonwanaland",
      SCORE: 7
    },
    {
      ARTISTS: "Jaden Smith",
      ALBUM_TITLE: "SYRE",
      SCORE: 4
    },
    {
      ARTISTS: "Armand Hammer",
      ALBUM_TITLE: "Rome",
      SCORE: 6
    },
    {
      ARTISTS: "Liars",
      ALBUM_TITLE: "TFCF",
      SCORE: 5
    },
    {
      ARTISTS: "Destroyer",
      ALBUM_TITLE: "ken",
      SCORE: 5
    },
    {
      ARTISTS: "Yung Lean",
      ALBUM_TITLE: "Stranger",
      SCORE: 6
    },
    {
      ARTISTS: "Taylor Swift",
      ALBUM_TITLE: "Reputation",
      SCORE: 4
    },
    {
      ARTISTS: "Benjamin Clementine",
      ALBUM_TITLE: "I Tell a Fly",
      SCORE: 5
    },
    {
      ARTISTS: "Skepta",
      ALBUM_TITLE: "Vicous",
      SCORE: 5
    },
    {
      ARTISTS: "Sam Smith",
      ALBUM_TITLE: "The Thrill of It All",
      SCORE: 4
    },
    {
      ARTISTS: "Converge",
      ALBUM_TITLE: "The Dusk in Us",
      SCORE: 8
    },
    {
      ARTISTS: "Rina Sawayama",
      ALBUM_TITLE: "RINA",
      SCORE: 9
    },
    {
      ARTISTS: "Julien Baker",
      ALBUM_TITLE: "Turn Out the Lights",
      SCORE: 7
    },
    {
      ARTISTS: "Joji",
      ALBUM_TITLE: "In Tounges",
      SCORE: "none"
    },
    {
      ARTISTS: "21 Savage, Offset, Metro Boomin",
      ALBUM_TITLE: "Without Warning",
      SCORE: 7
    },
    {
      ARTISTS: "Weezer",
      ALBUM_TITLE: "Pacific Daydream",
      SCORE: 4
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "4eva Is a Might Long Time",
      SCORE: 9
    },
    {
      ARTISTS: "Fever Ray",
      ALBUM_TITLE: "Plunge",
      SCORE: 5
    },
    {
      ARTISTS: "The World Is A Beautiful Place & I Am No Longer Afraid To Die",
      ALBUM_TITLE: "Always Foreign",
      SCORE: 6
    },
    {
      ARTISTS: "Liam Gallagher",
      ALBUM_TITLE: "As You Were",
      SCORE: 6
    },
    {
      ARTISTS: "Future, Young Thug",
      ALBUM_TITLE: "Super Slimey",
      SCORE: 5
    },
    {
      ARTISTS: "Lou the Human",
      ALBUM_TITLE: "Humaniac",
      SCORE: "PGOODMAYBEA7"
    },
    {
      ARTISTS: "Primitive Man",
      ALBUM_TITLE: "Caustic",
      SCORE: 8
    },
    {
      ARTISTS: "Beck",
      ALBUM_TITLE: "Colors",
      SCORE: 4
    },
    {
      ARTISTS: "Gucci Mane",
      ALBUM_TITLE: "Mr. Davis",
      SCORE: 5
    },
    {
      ARTISTS: "King Krule",
      ALBUM_TITLE: "The OOZ",
      SCORE: 4
    },
    {
      ARTISTS: "St. Vincent",
      ALBUM_TITLE: "MASSEDUCATION",
      SCORE: 6
    },
    {
      ARTISTS: "Protomartyr",
      ALBUM_TITLE: "Relatives in Descent",
      SCORE: 8
    },
    {
      ARTISTS: "Trippie Redd",
      ALBUM_TITLE: "A Love Letter To You 2",
      SCORE: 5
    },
    {
      ARTISTS: "Marilyn Manson",
      ALBUM_TITLE: "Heaven Upside Down",
      SCORE: 5
    },
    {
      ARTISTS: "Poppy",
      ALBUM_TITLE: "Poppy.Computer",
      SCORE: 6
    },
    {
      ARTISTS: "Kelela",
      ALBUM_TITLE: "Take Me Apart",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Pump",
      ALBUM_TITLE: "Lil Pump",
      SCORE: 7
    },
    {
      ARTISTS: "Uncommon Nasa",
      ALBUM_TITLE: "Written at Night",
      SCORE: 8
    },
    {
      ARTISTS: "Iglooghost",
      ALBUM_TITLE: "Neō Wax Bloom",
      SCORE: 8
    },
    {
      ARTISTS: "Smokepurpp",
      ALBUM_TITLE: "Deadstar",
      SCORE: 6
    },
    {
      ARTISTS: "Injury Reserve",
      ALBUM_TITLE: "Drive It Like It's Stolen",
      SCORE: 7
    },
    {
      ARTISTS: "The Killers",
      ALBUM_TITLE: "Wonderful Wonderful",
      SCORE: 6
    },
    {
      ARTISTS: "Wolves in the Throne Room",
      ALBUM_TITLE: "Thrice Woven",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug, Carnage",
      ALBUM_TITLE: "Young Martha",
      SCORE: 8
    },
    {
      ARTISTS: "Chelsea Wolfe",
      ALBUM_TITLE: "Hiss Spun",
      SCORE: 7
    },
    {
      ARTISTS: "Macklemore",
      ALBUM_TITLE: "Gemini",
      SCORE: 3
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      ALBUM_TITLE: "Luciferian Towers",
      SCORE: 5
    },
    {
      ARTISTS: "Rapsody",
      ALBUM_TITLE: "Laila's Widsom",
      SCORE: 8
    },
    {
      ARTISTS: "Foo Fighters",
      ALBUM_TITLE: "Concrete and Gold",
      SCORE: 6
    },
    {
      ARTISTS: "Mykrur",
      ALBUM_TITLE: "Maredidt",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle",
      ALBUM_TITLE: "Brick Body Kids Still Daydream",
      SCORE: 8
    },
    {
      ARTISTS: "Daniel Caeser",
      ALBUM_TITLE: "Freudian",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink",
      ALBUM_TITLE: "Dedicated to Bobby Jameson",
      SCORE: 8
    },
    {
      ARTISTS: "Brain",
      ALBUM_TITLE: "I'm Brain",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "The National",
      ALBUM_TITLE: "Sleep Well Beast",
      SCORE: 7
    },
    {
      ARTISTS: "Nmesh",
      ALBUM_TITLE: "Pharma",
      SCORE: 7
    },
    {
      ARTISTS: "Alex Cameron",
      ALBUM_TITLE: "Forced Witness",
      SCORE: 8
    },
    {
      ARTISTS: "Corbin",
      ALBUM_TITLE: "Mourn",
      SCORE: 7
    },
    {
      ARTISTS: "Alvvays",
      ALBUM_TITLE: "Antisocialites",
      SCORE: 8
    },
    {
      ARTISTS: "Zola Jesus",
      ALBUM_TITLE: "Okovi",
      SCORE: 6
    },
    {
      ARTISTS: "Death From Above",
      ALBUM_TITLE: "Outrage! Is Now",
      SCORE: 8
    },
    {
      ARTISTS: "wifisfuneral",
      ALBUM_TITLE: "Boy Who Cried Wolf",
      SCORE: 7
    },
    {
      ARTISTS: "Bicep",
      ALBUM_TITLE: "Bicep",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      ALBUM_TITLE: "Blue Chips 7000",
      SCORE: 6
    },
    {
      ARTISTS: "LCD Soundsystem",
      ALBUM_TITLE: "American Dream",
      SCORE: 6
    },
    {
      ARTISTS: "The War on Drugs",
      ALBUM_TITLE: "A Deeper Understanding",
      SCORE: 5
    },
    {
      ARTISTS: "Oh Sees",
      ALBUM_TITLE: "Orc",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Mob",
      ALBUM_TITLE: "Cozy Tapes Vol. 2",
      SCORE: 4
    },
    {
      ARTISTS: "Queens of the Stone Age",
      ALBUM_TITLE: "Villains",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      ALBUM_TITLE: "Saturation II",
      SCORE: 8
    },
    {
      ARTISTS: "XXXTentacion",
      ALBUM_TITLE: 17,
      SCORE: 2
    },
    {
      ARTISTS: "Lil Uzi Vert",
      ALBUM_TITLE: "Luv is Rage 2",
      SCORE: 3
    },
    {
      ARTISTS: "Grizzly Bear",
      ALBUM_TITLE: "Painted Ruins",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard, Mild High Club",
      ALBUM_TITLE: "Sketches of Brunswick East",
      SCORE: 5
    },
    {
      ARTISTS: "Everything Everything",
      ALBUM_TITLE: "A Fever Dream",
      SCORE: 6
    },
    {
      ARTISTS: "A$ap Ferg",
      ALBUM_TITLE: "Still Striving",
      SCORE: 6
    },
    {
      ARTISTS: "Brand New",
      ALBUM_TITLE: "Science Fiction",
      SCORE: 7
    },
    {
      ARTISTS: "Alice Glass",
      ALBUM_TITLE: "Alice Glass",
      SCORE: 7
    },
    {
      ARTISTS: "Kodak Black",
      ALBUM_TITLE: "Project Baby 2",
      SCORE: 5
    },
    {
      ARTISTS: "Lil B",
      ALBUM_TITLE: "Black Ken",
      SCORE: 5
    },
    {
      ARTISTS: "Lil Peep",
      ALBUM_TITLE: "Come Over When You're Sober, Pt. 1",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Richard Dawson",
      ALBUM_TITLE: "Peasant",
      SCORE: 8
    },
    {
      ARTISTS: "Milo",
      ALBUM_TITLE: "Who Told You To Think??!!?!?!?!",
      SCORE: 7
    },
    {
      ARTISTS: "Kesha",
      ALBUM_TITLE: "Rainbow",
      SCORE: 7
    },
    {
      ARTISTS: "Igorrr",
      ALBUM_TITLE: "Savage Sinusoid",
      SCORE: 7
    },
    {
      ARTISTS: "Dead Cross",
      ALBUM_TITLE: "Dead Cross",
      SCORE: 7
    },
    {
      ARTISTS: "Ski Mask the Slump God",
      ALBUM_TITLE: "You Will Regret",
      SCORE: 6
    },
    {
      ARTISTS: "Black Lips",
      ALBUM_TITLE: "Satan's Graffiti or God's Art?",
      SCORE: 7
    },
    {
      ARTISTS: "Ugly God",
      ALBUM_TITLE: "The Booty Tape",
      SCORE: 5
    },
    {
      ARTISTS: "Oxbow",
      ALBUM_TITLE: "Thin Black Duke",
      SCORE: 8
    },
    {
      ARTISTS: "Dying Fetus",
      ALBUM_TITLE: "Wrong One to Fuck With",
      SCORE: 8
    },
    {
      ARTISTS: "Vic Mensa",
      ALBUM_TITLE: "The Autobiography",
      SCORE: 6
    },
    {
      ARTISTS: "Aminé",
      ALBUM_TITLE: "Good For You",
      SCORE: 5
    },
    {
      ARTISTS: "Arcade Fire",
      ALBUM_TITLE: "Everything Now",
      SCORE: 4
    },
    {
      ARTISTS: "Nine Inch Nails",
      ALBUM_TITLE: "Add Violence",
      SCORE: 6
    },
    {
      ARTISTS: "Dizzee Rascal",
      ALBUM_TITLE: "Raskit",
      SCORE: 6
    },
    {
      ARTISTS: "Shabazz Palaces",
      ALBUM_TITLE: "Quazarz vs. The Jealous Machines",
      SCORE: 5
    },
    {
      ARTISTS: "Shabazz Palaces",
      ALBUM_TITLE: "Quazarz: Born on a Gangster Star",
      SCORE: 3
    },
    {
      ARTISTS: "Integrity",
      ALBUM_TITLE: "Howling, For The Nightmare Shall Consume",
      SCORE: 7
    },
    {
      ARTISTS: "Lana Del Ray",
      ALBUM_TITLE: "Lust For Life",
      SCORE: 6
    },
    {
      ARTISTS: "Tyler, the Creator",
      ALBUM_TITLE: "Flower Boy",
      SCORE: 8
    },
    {
      ARTISTS: "Pissed Jeans",
      ALBUM_TITLE: "Why Love Now",
      SCORE: 7
    },
    {
      ARTISTS: "Billy Woods",
      ALBUM_TITLE: "Known Unknowns",
      SCORE: 8
    },
    {
      ARTISTS: "Toro y Moi",
      ALBUM_TITLE: "Boo Boo",
      SCORE: "none"
    },
    {
      ARTISTS: "Beach House",
      ALBUM_TITLE: "B-Sides and Rarities",
      SCORE: "none"
    },
    {
      ARTISTS: "Broken Social Scene",
      ALBUM_TITLE: "Hug of Thunder",
      SCORE: 7
    },
    {
      ARTISTS: "Haim",
      ALBUM_TITLE: "Something to Tell You",
      SCORE: 5
    },
    {
      ARTISTS: "21 Savage",
      ALBUM_TITLE: "Issa Album",
      SCORE: 3
    },
    {
      ARTISTS: "Jay-Z",
      ALBUM_TITLE: "4:44",
      SCORE: 8
    },
    {
      ARTISTS: "Calvin Harris",
      ALBUM_TITLE: "Funk Wav Bounces Vol. 1",
      SCORE: "none"
    },
    {
      ARTISTS: "Denzel Curry",
      ALBUM_TITLE: 13,
      SCORE: "none"
    },
    {
      ARTISTS: "Guerilla Toss",
      ALBUM_TITLE: "GT Ultra",
      SCORE: 8
    },
    {
      ARTISTS: "DJ Khaled",
      ALBUM_TITLE: "Grateful",
      SCORE: "none"
    },
    {
      ARTISTS: "Portugal. The Man",
      ALBUM_TITLE: "Woodstock",
      SCORE: "none"
    },
    {
      ARTISTS: "Algiers",
      ALBUM_TITLE: "The Underside of Power",
      SCORE: 8
    },
    {
      ARTISTS: "Fleet Foxes",
      ALBUM_TITLE: "Crack Up",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      ALBUM_TITLE: "Big Fish Theory",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      ALBUM_TITLE: "Murder of the Universe",
      SCORE: 6
    },
    {
      ARTISTS: "2 Chainz",
      ALBUM_TITLE: "Pretty Girls Like Trap",
      SCORE: "none"
    },
    {
      ARTISTS: "The I.L.Y's",
      ALBUM_TITLE: "Bodyguard",
      SCORE: "none"
    },
    {
      ARTISTS: "Elder",
      ALBUM_TITLE: "Reflections of a Floating World",
      SCORE: 8
    },
    {
      ARTISTS: "Lorde",
      ALBUM_TITLE: "Melodrama",
      SCORE: 7
    },
    {
      ARTISTS: "The Mountain Goats",
      ALBUM_TITLE: "Goths",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      ALBUM_TITLE: "Renaissance",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "Beautiful Thugger Girls",
      SCORE: 5
    },
    {
      ARTISTS: "Kirin J Callinan",
      ALBUM_TITLE: "Bravado",
      SCORE: 8
    },
    {
      ARTISTS: "SZA",
      ALBUM_TITLE: "Ctrl",
      SCORE: 7
    },
    {
      ARTISTS: "James McAlister, Sufjan Stevens, Nico Mulhy, Bryce Dessner",
      ALBUM_TITLE: "Planetarium",
      SCORE: 5
    },
    {
      ARTISTS: "Katy Perry",
      ALBUM_TITLE: "Witness",
      SCORE: 6
    },
    {
      ARTISTS: "Brockhampton",
      ALBUM_TITLE: "Saturation",
      SCORE: 9
    },
    {
      ARTISTS: "Omar Souleyman",
      ALBUM_TITLE: "To Syria, With Love",
      SCORE: "none"
    },
    {
      ARTISTS: "Bleachers",
      ALBUM_TITLE: "Gone Now",
      SCORE: "none"
    },
    {
      ARTISTS: "Beach Fossils",
      ALBUM_TITLE: "Somersault",
      SCORE: 5
    },
    {
      ARTISTS: "Roger Waters",
      ALBUM_TITLE: "Is This the Life We Really Want?",
      SCORE: 7
    },
    {
      ARTISTS: "alt-J",
      ALBUM_TITLE: "Relaxer",
      SCORE: 5
    },
    {
      ARTISTS: "Gucci Mane & Metro Boomin",
      ALBUM_TITLE: "Drop Top Wop",
      SCORE: "none"
    },
    {
      ARTISTS: "Bryson Tiller",
      ALBUM_TITLE: "True to Self",
      SCORE: "none"
    },
    {
      ARTISTS: "Sinjin Hawke",
      ALBUM_TITLE: "First Opus",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Yachty",
      ALBUM_TITLE: "Teenage Emotions",
      SCORE: 2
    },
    {
      ARTISTS: "Snoop Dogg",
      ALBUM_TITLE: "Neva Left",
      SCORE: "none"
    },
    {
      ARTISTS: "Wavves",
      ALBUM_TITLE: "You're Welcome",
      SCORE: "none"
    },
    {
      ARTISTS: "Linkin Park",
      ALBUM_TITLE: "One More Light",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "(Sandy) Alex G",
      ALBUM_TITLE: "Rocket",
      SCORE: 5
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Steroids (Crouching Tiger Hidden Gabber Megamix)",
      SCORE: "none"
    },
    {
      ARTISTS: "B.o.B.",
      ALBUM_TITLE: "Ether",
      SCORE: "b.o.b. album"
    },
    {
      ARTISTS: "Forest Swords",
      ALBUM_TITLE: "Compassion",
      SCORE: 8
    },
    {
      ARTISTS: "Paramore",
      ALBUM_TITLE: "After Laughter",
      SCORE: 7
    },
    {
      ARTISTS: "Harry Styles",
      ALBUM_TITLE: "Harry Styles",
      SCORE: 4
    },
    {
      ARTISTS: "Perfume Genius",
      ALBUM_TITLE: "No Shape",
      SCORE: 8
    },
    {
      ARTISTS: "At The Drive-In",
      ALBUM_TITLE: "in•ter a•li•a",
      SCORE: "none"
    },
    {
      ARTISTS: "Chris Stapleton",
      ALBUM_TITLE: "From A Room: Volume 1",
      SCORE: "none"
    },
    {
      ARTISTS: "Slowdive",
      ALBUM_TITLE: "Slowdive",
      SCORE: 4
    },
    {
      ARTISTS: "Full of Hell",
      ALBUM_TITLE: "Trumpeting Ecstasy",
      SCORE: 6
    },
    {
      ARTISTS: "Mac DeMarco",
      ALBUM_TITLE: "This Old Dog",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "Everybody",
      SCORE: 5
    },
    {
      ARTISTS: "Wale",
      ALBUM_TITLE: "Shine",
      SCORE: "opinion"
    },
    {
      ARTISTS: "Cashmere Cat",
      ALBUM_TITLE: 9,
      SCORE: "none"
    },
    {
      ARTISTS: "Colin Stetson",
      ALBUM_TITLE: "All This I Do For Glory",
      SCORE: 7
    },
    {
      ARTISTS: "Feist",
      ALBUM_TITLE: "Pleasure",
      SCORE: 8
    },
    {
      ARTISTS: "Gorillaz",
      ALBUM_TITLE: "Humanz",
      SCORE: 5
    },
    {
      ARTISTS: "The Smith Street Band",
      ALBUM_TITLE: "More Scared Than You Than You Are of Me",
      SCORE: 5
    },
    {
      ARTISTS: "Gas",
      ALBUM_TITLE: "Narkopop",
      SCORE: 2
    },
    {
      ARTISTS: "Timber Timbre",
      ALBUM_TITLE: "Sincerely, Future Pollution",
      SCORE: 5
    },
    {
      ARTISTS: "The Magnetic Fields",
      ALBUM_TITLE: "50 Song Memoir",
      SCORE: 7
    },
    {
      ARTISTS: "Pile",
      ALBUM_TITLE: "A Hairshirt of Purpose",
      SCORE: "none"
    },
    {
      ARTISTS: "Playboi Carti",
      ALBUM_TITLE: "Playboi Carti",
      SCORE: "none"
    },
    {
      ARTISTS: "Kendrick Lamar",
      ALBUM_TITLE: "DAMN.",
      SCORE: 7
    },
    {
      ARTISTS: "The Chainsmokers",
      ALBUM_TITLE: "Memories... Do Not Open",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Arca",
      ALBUM_TITLE: "Arca",
      SCORE: 5
    },
    {
      ARTISTS: "Joey Bada$$",
      ALBUM_TITLE: "All Amerikkkan Bada$$",
      SCORE: 8
    },
    {
      ARTISTS: "Future Islands",
      ALBUM_TITLE: "The Far Field",
      SCORE: 6
    },
    {
      ARTISTS: "Father John Misty",
      ALBUM_TITLE: "Pure Comedy",
      SCORE: 9
    },
    {
      ARTISTS: "J.I.D",
      ALBUM_TITLE: "The Never Story",
      SCORE: "none"
    },
    {
      ARTISTS: "Kodak Black",
      ALBUM_TITLE: "Painting Pictures",
      SCORE: 4
    },
    {
      ARTISTS: "Mastodon",
      ALBUM_TITLE: "Emperor of Sand",
      SCORE: 4
    },
    {
      ARTISTS: "Freddie Gibbs",
      ALBUM_TITLE: "You Only Live 2wice",
      SCORE: 6
    },
    {
      ARTISTS: "GoldLink",
      ALBUM_TITLE: "At What Cost",
      SCORE: 5
    },
    {
      ARTISTS: "Ibibio Sound Machine",
      ALBUM_TITLE: "Uyai",
      SCORE: 8
    },
    {
      ARTISTS: "Ondatrópica",
      ALBUM_TITLE: "Baile Bucanero",
      SCORE: 7
    },
    {
      ARTISTS: "Pallbearer",
      ALBUM_TITLE: "Heartless",
      SCORE: 8
    },
    {
      ARTISTS: "Mount Eerie",
      ALBUM_TITLE: "A Crow Looked At Me",
      SCORE: 9
    },
    {
      ARTISTS: "Remo Drive",
      ALBUM_TITLE: "Greatest Hits",
      SCORE: 7
    },
    {
      ARTISTS: "Havok",
      ALBUM_TITLE: "Comformicide",
      SCORE: 7
    },
    {
      ARTISTS: "Spoon",
      ALBUM_TITLE: "Hot Thoughts",
      SCORE: 7
    },
    {
      ARTISTS: "Real Estate",
      ALBUM_TITLE: "In Mind",
      SCORE: 5
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "More Life",
      SCORE: 5
    },
    {
      ARTISTS: "Rick Ross",
      ALBUM_TITLE: "Rather You Than Me",
      SCORE: 6
    },
    {
      ARTISTS: "Your Old Droog",
      ALBUM_TITLE: "Packs",
      SCORE: 7
    },
    {
      ARTISTS: "Laura Marling",
      ALBUM_TITLE: "Semper Fermina",
      SCORE: 5
    },
    {
      ARTISTS: "Idles",
      ALBUM_TITLE: "Brutalism",
      SCORE: 8
    },
    {
      ARTISTS: "Blanck Mass",
      ALBUM_TITLE: "World Eater",
      SCORE: 7
    },
    {
      ARTISTS: "Charlie XCX",
      ALBUM_TITLE: "Number 1 Angel",
      SCORE: 7
    },
    {
      ARTISTS: "Ed Sheeran",
      ALBUM_TITLE: "Divide",
      SCORE: 4
    },
    {
      ARTISTS: "Sleaford Mods",
      ALBUM_TITLE: "English Tapas",
      SCORE: 7
    },
    {
      ARTISTS: "Xiu Xiu",
      ALBUM_TITLE: "Forget",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      ALBUM_TITLE: "Flying Microtonal Banana",
      SCORE: 8
    },
    {
      ARTISTS: "Dirty Projecters",
      ALBUM_TITLE: "Dirty Projecters",
      SCORE: 7
    },
    {
      ARTISTS: "Power Trip",
      ALBUM_TITLE: "Nightmare Logic",
      SCORE: 7
    },
    {
      ARTISTS: "Thundercat",
      ALBUM_TITLE: "Drunk",
      SCORE: 6
    },
    {
      ARTISTS: "Future",
      ALBUM_TITLE: "HNDRXX",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Jens Lekman",
      ALBUM_TITLE: "Life Will See You Now",
      SCORE: 6
    },
    {
      ARTISTS: "Animal Collective",
      ALBUM_TITLE: "The Painters",
      SCORE: "none"
    },
    {
      ARTISTS: "Flume",
      ALBUM_TITLE: "Skin Companion II",
      SCORE: "none"
    },
    {
      ARTISTS: "Jonwayne",
      ALBUM_TITLE: "Rap Album Two",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      ALBUM_TITLE: "Future",
      SCORE: 5
    },
    {
      ARTISTS: "Sun Kil Moon",
      ALBUM_TITLE: "Common As Light And Love Are Red Valleys Of Blood",
      SCORE: 9
    },
    {
      ARTISTS: "Quelle Chris",
      ALBUM_TITLE: "Being You Is Great, I Wish I Could Be You More Often",
      SCORE: 8
    },
    {
      ARTISTS: "Jesca Hoop",
      ALBUM_TITLE: "Memories Are Now",
      SCORE: 7
    },
    {
      ARTISTS: "Lupe Fiasco",
      ALBUM_TITLE: "DROGAS Light",
      SCORE: 6
    },
    {
      ARTISTS: "Paul White ft. Danny Brown",
      ALBUM_TITLE: "Accelerator",
      SCORE: "none"
    },
    {
      ARTISTS: "Sampha",
      ALBUM_TITLE: "Process",
      SCORE: 8
    },
    {
      ARTISTS: "Iron Reagan",
      ALBUM_TITLE: "Crossover Ministry",
      SCORE: 6
    },
    {
      ARTISTS: "Big Sean",
      ALBUM_TITLE: "I Decided",
      SCORE: 6
    },
    {
      ARTISTS: "Bedwetter",
      ALBUM_TITLE:
        "Flick Your Tongue Against Your Teeth and Describe the Present",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall",
      ALBUM_TITLE: "Ty Segall",
      SCORE: 6
    },
    {
      ARTISTS: "Migos",
      ALBUM_TITLE: "Culture",
      SCORE: 7
    },
    {
      ARTISTS: "William Basinski",
      ALBUM_TITLE: "A Shadow In Time",
      SCORE: 7
    },
    {
      ARTISTS: "Neil Cicierega",
      ALBUM_TITLE: "Mouth Moods",
      SCORE: 9
    },
    {
      ARTISTS: "Foxygen",
      ALBUM_TITLE: "Hang",
      SCORE: 7
    },
    {
      ARTISTS: "Wiley",
      ALBUM_TITLE: "Godfather",
      SCORE: 8
    },
    {
      ARTISTS: "Yucky Duster",
      ALBUM_TITLE: "Duster's Lament",
      SCORE: 7
    },
    {
      ARTISTS: "Code Orange",
      ALBUM_TITLE: "Forever",
      SCORE: 8
    },
    {
      ARTISTS: "The Flaming Lips",
      ALBUM_TITLE: "Oczy Mlody",
      SCORE: 5
    },
    {
      ARTISTS: "The xx",
      ALBUM_TITLE: "I See You",
      SCORE: 6
    },
    {
      ARTISTS: "Little Simz",
      ALBUM_TITLE: "Stillness In Wonderland",
      SCORE: 5
    },
    {
      ARTISTS: "David Bowie",
      ALBUM_TITLE: "No Plan",
      SCORE: "none"
    },
    {
      ARTISTS: "Pink Guy",
      ALBUM_TITLE: "Pink Season",
      SCORE: "MYSCOREWHENTHEPU$$YISTOOGOOD"
    },
    {
      ARTISTS: "Nine Inch Nails",
      ALBUM_TITLE: "Not The Actual Events",
      SCORE: 8
    },
    {
      ARTISTS: "Emperor",
      ALBUM_TITLE: "In The Nightslide Eclipse",
      SCORE: "classic"
    },
    {
      ARTISTS: "Tom Waits",
      ALBUM_TITLE: "Rain Dogs",
      SCORE: "classic"
    },
    {
      ARTISTS: "Talking Heads",
      ALBUM_TITLE: "Remain In Light",
      SCORE: "classic"
    },
    {
      ARTISTS: "Outkast",
      ALBUM_TITLE: "ATLiens",
      SCORE: "classic"
    },
    {
      ARTISTS: "Captain Beefheart",
      ALBUM_TITLE: "Trout Mask Replica",
      SCORE: "classic"
    },
    {
      ARTISTS: "Run the Jewels",
      ALBUM_TITLE: "RTJ3",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      ALBUM_TITLE: "Passion, Pain & Demon Slayin'",
      SCORE: 4
    },
    {
      ARTISTS: "Injury Reserve",
      ALBUM_TITLE: "Floss",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      ALBUM_TITLE: "Stoney",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ab-Soul",
      ALBUM_TITLE: "Do What Thou Wilt.",
      SCORE: 7
    },
    {
      ARTISTS: "J. Cole",
      ALBUM_TITLE: "4 Your Eyez Only",
      SCORE: 6
    },
    {
      ARTISTS: "Common",
      ALBUM_TITLE: "Black America Again",
      SCORE: 5
    },
    {
      ARTISTS: "Childish Gambino",
      ALBUM_TITLE: "Awaken, My Love!",
      SCORE: 7
    },
    {
      ARTISTS: "The Wytches",
      ALBUM_TITLE: "All Your Happy Life",
      SCORE: 6
    },
    {
      ARTISTS: "Sleigh Bells",
      ALBUM_TITLE: "Jessica Rabbit",
      SCORE: 7
    },
    {
      ARTISTS: "Czarface",
      ALBUM_TITLE: "a Fistful of Peril",
      SCORE: 6
    },
    {
      ARTISTS: "Thee Oh Sees",
      ALBUM_TITLE: "An Odd Entrance",
      SCORE: "none"
    },
    {
      ARTISTS: "Deathspell Omega",
      ALBUM_TITLE: "The Synarchy of Molten Bones",
      SCORE: "none"
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "Starboy",
      SCORE: 5
    },
    {
      ARTISTS: "Metallica",
      ALBUM_TITLE: "Hard Wired...To Self Destruct",
      SCORE: 6
    },
    {
      ARTISTS: "Justice",
      ALBUM_TITLE: "Women",
      SCORE: 5
    },
    {
      ARTISTS: "Bruno Mars",
      ALBUM_TITLE: "24k Magic",
      SCORE: 7
    },
    {
      ARTISTS: "A Tribe Called Quest",
      ALBUM_TITLE: "We Got It from Here... Thank You 4 Your Service",
      SCORE: 9
    },
    {
      ARTISTS: "Marching Church",
      ALBUM_TITLE: "Telling It Like It Is",
      SCORE: 7
    },
    {
      ARTISTS: "Kero Kero Bonito",
      ALBUM_TITLE: "Bonito Generation",
      SCORE: 8
    },
    {
      ARTISTS: "Tove Lo",
      ALBUM_TITLE: "Lady Wood",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Swain",
      ALBUM_TITLE: "The Long Dark Blue",
      SCORE: 8
    },
    {
      ARTISTS: "Wormrot",
      ALBUM_TITLE: "Voices",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Mob",
      ALBUM_TITLE: "The Cozy Tapes Vol. 1: Friends",
      SCORE: 5
    },
    {
      ARTISTS: "Korn",
      ALBUM_TITLE: "The Serenity of Suffering",
      SCORE: 4
    },
    {
      ARTISTS: "D.R.A.M.",
      ALBUM_TITLE: "Big Baby D.R.A.M.",
      SCORE: 7
    },
    {
      ARTISTS: "Conor Oberst",
      ALBUM_TITLE: "Ruminations",
      SCORE: 8
    },
    {
      ARTISTS: "Lady Gaga",
      ALBUM_TITLE: "Joanne",
      SCORE: 6
    },
    {
      ARTISTS: "The Game",
      ALBUM_TITLE: 1992,
      SCORE: 5
    },
    {
      ARTISTS: "The Dillinger Escape Plan",
      ALBUM_TITLE: "Dissociation",
      SCORE: 7
    },
    {
      ARTISTS: "Crying",
      ALBUM_TITLE: "Beyond the Fleeting Gate",
      SCORE: 8
    },
    {
      ARTISTS: "Jeff Rosenstock",
      ALBUM_TITLE: "Worry",
      SCORE: 8
    },
    {
      ARTISTS: "American Football",
      ALBUM_TITLE: "American Football",
      SCORE: 5
    },
    {
      ARTISTS: "NxWorries",
      ALBUM_TITLE: "Yes Lawd!",
      SCORE: 7
    },
    {
      ARTISTS: "Green Day",
      ALBUM_TITLE: "Revolution Radio",
      SCORE: 3
    },
    {
      ARTISTS: "Meshuggah",
      ALBUM_TITLE: "The Violent Sleep of Reason",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Oathbreaker",
      ALBUM_TITLE: "Rheia",
      SCORE: 4
    },
    {
      ARTISTS: "Solange",
      ALBUM_TITLE: "A Seat At The Table",
      SCORE: 8
    },
    {
      ARTISTS: "Brain Tenticles",
      ALBUM_TITLE: "Brain Tenticles",
      SCORE: "none"
    },
    {
      ARTISTS: "Ty Dolla $ign",
      ALBUM_TITLE: "The Campaign",
      SCORE: "none"
    },
    {
      ARTISTS: "Banks",
      ALBUM_TITLE: "The Altar",
      SCORE: 5
    },
    {
      ARTISTS: "Regina Spektor",
      ALBUM_TITLE: "Remember Us To Life",
      SCORE: 8
    },
    {
      ARTISTS: "Nicolas Jaar",
      ALBUM_TITLE: "Sirens",
      SCORE: 6
    },
    {
      ARTISTS: "Bon Iver",
      ALBUM_TITLE: "22, A Million",
      SCORE: 5
    },
    {
      ARTISTS: "Danny Brown",
      ALBUM_TITLE: "Atrocity Exhibition",
      SCORE: 9
    },
    {
      ARTISTS: "Neurosis",
      ALBUM_TITLE: "Flames Within Flames",
      SCORE: 8
    },
    {
      ARTISTS: "Mick Jenkins",
      ALBUM_TITLE: "The Healing Component",
      SCORE: 5
    },
    {
      ARTISTS: "Corey Feldman",
      ALBUM_TITLE: "Angelic 2 The Core",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Wilco",
      ALBUM_TITLE: "Schmilco",
      SCORE: 6
    },
    {
      ARTISTS: "Preoccupations",
      ALBUM_TITLE: "Preoccupations",
      SCORE: 8
    },
    {
      ARTISTS: "Touché Amoré",
      ALBUM_TITLE: "Stage Four",
      SCORE: 8
    },
    {
      ARTISTS: "Ghost",
      ALBUM_TITLE: "Popestar",
      SCORE: "none"
    },
    {
      ARTISTS: "Street Sects",
      ALBUM_TITLE: "End Position",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "The Divine Feminine",
      SCORE: 4
    },
    {
      ARTISTS: "Nick Cave & The Bad Seeds",
      ALBUM_TITLE: "Skeleton Tree",
      SCORE: 8
    },
    {
      ARTISTS: "M.I.A.",
      ALBUM_TITLE: "A.I.M.",
      SCORE: 4
    },
    {
      ARTISTS: "De La Soul",
      ALBUM_TITLE: "And The Anonymous Nobody",
      SCORE: "none"
    },
    {
      ARTISTS: "$uicideBoy$",
      ALBUM_TITLE: "Eternal Grey",
      SCORE: "none"
    },
    {
      ARTISTS: "clipping.",
      ALBUM_TITLE: "Splendor & Misery",
      SCORE: 8
    },
    {
      ARTISTS: "Trisha Paytas",
      ALBUM_TITLE: "Show Time",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Glass Animals",
      ALBUM_TITLE: "How To Be a Human Being",
      SCORE: 6
    },
    {
      ARTISTS: "Isaiah Rashad",
      ALBUM_TITLE: "The Sun's Tirade",
      SCORE: 6
    },
    {
      ARTISTS: "of Montreal",
      ALBUM_TITLE: "Innocence Reaches",
      SCORE: 5
    },
    {
      ARTISTS: "Angel Olson",
      ALBUM_TITLE: "My Woman",
      SCORE: 8
    },
    {
      ARTISTS: "Travis Scott",
      ALBUM_TITLE: "Birds in the Trap Sing McKnight",
      SCORE: 3
    },
    {
      ARTISTS: "Vince Staples",
      ALBUM_TITLE: "Prima Donna",
      SCORE: 7
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "Jefferey",
      SCORE: 7
    },
    {
      ARTISTS: "Carly Rae Jepsen",
      ALBUM_TITLE: "Emotion: Side B",
      SCORE: 8
    },
    {
      ARTISTS: "Ka",
      ALBUM_TITLE: "Honor Killed the Samurai",
      SCORE: 8
    },
    {
      ARTISTS: "Gonjasufi",
      ALBUM_TITLE: "Callus",
      SCORE: "none"
    },
    {
      ARTISTS: "Tobacco",
      ALBUM_TITLE: "Sweatbox Dynasty",
      SCORE: "none"
    },
    {
      ARTISTS: "AJJ",
      ALBUM_TITLE: "The Bible 2",
      SCORE: 5
    },
    {
      ARTISTS: "Crystal Castles",
      ALBUM_TITLE: "Amnesty (I)",
      SCORE: 4
    },
    {
      ARTISTS: "Frank Ocean",
      ALBUM_TITLE: "Blonde/Endless",
      SCORE: 8
    },
    {
      ARTISTS: "Thee Oh Sees",
      ALBUM_TITLE: "A Wierd Exits",
      SCORE: 8
    },
    {
      ARTISTS: "Rae Sremmurd",
      ALBUM_TITLE: "SremmLife2",
      SCORE: 6
    },
    {
      ARTISTS: "PartyNextDoor",
      ALBUM_TITLE: "P3",
      SCORE: 4
    },
    {
      ARTISTS: "Lil Uzi Vert",
      ALBUM_TITLE: "The Perfect Luv Tape",
      SCORE: 3
    },
    {
      ARTISTS: "JPEGMAFIA x Freaky",
      ALBUM_TITLE: "The 2nd Amendment",
      SCORE: "none"
    },
    {
      ARTISTS: "Dinosaur Jr.",
      ALBUM_TITLE: "Give a Glimpse of What Yer Not",
      SCORE: "none"
    },
    {
      ARTISTS: "Noname",
      ALBUM_TITLE: "Telefone",
      SCORE: 8
    },
    {
      ARTISTS: "Skillet",
      ALBUM_TITLE: "Unleashed",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Ghoul",
      ALBUM_TITLE: "Dungeon Bastards",
      SCORE: 7
    },
    {
      ARTISTS: "Descendents",
      ALBUM_TITLE: "Hypercaffium Spazzinate",
      SCORE: 5
    },
    {
      ARTISTS: "2 8 1 4",
      ALBUM_TITLE: "Rain Temple",
      SCORE: 6
    },
    {
      ARTISTS: "Show Me The Body",
      ALBUM_TITLE: "Body War",
      SCORE: 8
    },
    {
      ARTISTS: "Bones",
      ALBUM_TITLE: "PaidProgramming2",
      SCORE: 7
    },
    {
      ARTISTS: "DJ Khaled",
      ALBUM_TITLE: "Major Key",
      SCORE: 6
    },
    {
      ARTISTS: "Kemba",
      ALBUM_TITLE: "Negus",
      SCORE: 7
    },
    {
      ARTISTS: "Roy Woods",
      ALBUM_TITLE: "Waking at Dawn",
      SCORE: "none"
    },
    {
      ARTISTS: "$uicideBoy$",
      ALBUM_TITLE: "Radical $uicide",
      SCORE: "none" */
    /*     },
    {
      ARTISTS: "Gucci Mane",
      ALBUM_TITLE: "Everybody Looking",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Yachty",
      ALBUM_TITLE: "Summer Songs 2",
      SCORE: 5
    },
    {
      ARTISTS: "Bat For Lashes",
      ALBUM_TITLE: "The Bride",
      SCORE: 5
    },
    {
      ARTISTS: "The I.L.Y's",
      ALBUM_TITLE: "Scum With Bounderies",
      SCORE: 8
    },
    {
      ARTISTS: "21 Savage and Metro Boomin",
      ALBUM_TITLE: "Savage Mode",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "Apathy",
      ALBUM_TITLE: "Handshakes With Snakes",
      SCORE: 7
    },
    {
      ARTISTS: "Clams Casino",
      ALBUM_TITLE: "32 Levels",
      SCORE: 7
    },
    {
      ARTISTS: "ScHoolboy Q",
      ALBUM_TITLE: "Blank Face",
      SCORE: 5
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      ALBUM_TITLE: "IV",
      SCORE: 7
    },
    {
      ARTISTS: "Woods",
      ALBUM_TITLE: "City Sun Eater in the River of Light",
      SCORE: 7
    },
    {
      ARTISTS: "Deerhoof",
      ALBUM_TITLE: "The Magic",
      SCORE: 7
    },
    {
      ARTISTS: "Blink-182",
      ALBUM_TITLE: "California",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "The Avalanches",
      ALBUM_TITLE: "Wildflower",
      SCORE: 7
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "Bobby Tarantino",
      SCORE: 5
    },
    {
      ARTISTS: "Blood Orange",
      ALBUM_TITLE: "Freetown Sound",
      SCORE: 6
    },
    {
      ARTISTS: "Desiigner",
      ALBUM_TITLE: "New English",
      SCORE: "NOT GOOD"
    },
    {
      ARTISTS: "case/lang/veirs",
      ALBUM_TITLE: "case/lang/veirs",
      SCORE: 7
    },
    {
      ARTISTS: "Riff Raff",
      ALBUM_TITLE: "Peach Panther",
      SCORE: 4
    },
    {
      ARTISTS: "Red Hot Chilli Peppers",
      ALBUM_TITLE: "The Getaway",
      SCORE: 5
    },
    {
      ARTISTS: "Kodak Black",
      ALBUM_TITLE: "Lil Big Pac",
      SCORE: 3
    },
    {
      ARTISTS: "Swans",
      ALBUM_TITLE: "The Glowing Man",
      SCORE: 9
    },
    {
      ARTISTS: "clipping.",
      ALBUM_TITLE: "Wriggle",
      SCORE: 7
    },
    {
      ARTISTS: "Jon Bellion",
      ALBUM_TITLE: "The Human Condition",
      SCORE: 5
    },
    {
      ARTISTS: "Nails",
      ALBUM_TITLE: "You Will Never Be One of Us",
      SCORE: 8
    },
    {
      ARTISTS: "YG",
      ALBUM_TITLE: "Still Brazy",
      SCORE: 8
    },
    {
      ARTISTS: "Daivd Bowie",
      ALBUM_TITLE: "The Rise and Fall of Ziggy Stardust and Spiders From Mars",
      SCORE: "classic"
    },
    {
      ARTISTS: "The Microphones",
      ALBUM_TITLE: "The Glow Pt. 2",
      SCORE: "classic"
    },
    {
      ARTISTS: "Yes",
      ALBUM_TITLE: "Close to the Edge",
      SCORE: "classic"
    },
    {
      ARTISTS: "Niravana",
      ALBUM_TITLE: "In Utero",
      SCORE: "classic"
    },
    {
      ARTISTS: "Nas",
      ALBUM_TITLE: "Illmatic",
      SCORE: "classic"
    },
    {
      ARTISTS: "Patti Smith",
      ALBUM_TITLE: "Horses",
      SCORE: "classic"
    },
    {
      ARTISTS: "Xenia Rubinos",
      ALBUM_TITLE: "Black Terry Cat",
      SCORE: 8
    },
    {
      ARTISTS: "Joey Purps",
      ALBUM_TITLE: "iiiDrops",
      SCORE: 7
    },
    {
      ARTISTS: "Olga Bell",
      ALBUM_TITLE: "Tempo",
      SCORE: 7
    },
    {
      ARTISTS: "Vic Mensa",
      ALBUM_TITLE: "There's Alot Going On",
      SCORE: 5
    },
    {
      ARTISTS: "The Strokes",
      ALBUM_TITLE: "Future Present Past",
      SCORE: 3
    },
    {
      ARTISTS: "Flume",
      ALBUM_TITLE: "Skin",
      SCORE: 5
    },
    {
      ARTISTS: "PUP",
      ALBUM_TITLE: "The Dream is Over",
      SCORE: 6
    },
    {
      ARTISTS: "Moonsorrow",
      ALBUM_TITLE: "Jumalten Aika",
      SCORE: 8
    },
    {
      ARTISTS: "Marissa Nadler",
      ALBUM_TITLE: "Strangers",
      SCORE: 8
    },
    {
      ARTISTS: "Car Seat Headrest",
      ALBUM_TITLE: "Teens of Denial",
      SCORE: 8
    },
    {
      ARTISTS: "Modern Baseball",
      ALBUM_TITLE: "Holy Ghost",
      SCORE: 7
    },
    {
      ARTISTS: "Kvelertak",
      ALBUM_TITLE: "Nattesferd",
      SCORE: 6
    },
    {
      ARTISTS: "Kaytranada",
      ALBUM_TITLE: "99.9%",
      SCORE: 6
    },
    {
      ARTISTS: "Chance The Rapper",
      ALBUM_TITLE: "Coloring Book",
      SCORE: 7
    },
    {
      ARTISTS: "ANOHNI",
      ALBUM_TITLE: "Hopelessness",
      SCORE: 6
    },
    {
      ARTISTS: "Gorguts",
      ALBUM_TITLE: "Pleaides'",
      SCORE: 8
    },
    {
      ARTISTS: "Post Malone",
      ALBUM_TITLE: "August 26th",
      SCORE: "whitegirlturnupmusic"
    },
    {
      ARTISTS: "Skepta",
      ALBUM_TITLE: "Konnichiwa",
      SCORE: 7
    },
    {
      ARTISTS: "James Blake",
      ALBUM_TITLE: "The Colour In Everything",
      SCORE: 5
    },
    {
      ARTISTS: "Vektor",
      ALBUM_TITLE: "Terminal Redux",
      SCORE: 8
    },
    {
      ARTISTS: "Radiohead",
      ALBUM_TITLE: "A Moon Shaped Pool",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Uzi Vert",
      ALBUM_TITLE: "Lil Uzi Vert vs. The World",
      SCORE: 4
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Bottomless Pit",
      SCORE: 9
    },
    {
      ARTISTS: "Aesop Rock",
      ALBUM_TITLE: "The Impossible Kid",
      SCORE: 8
    },
    {
      ARTISTS: "King Gizzard & The Lizard Wizard",
      ALBUM_TITLE: "Nonagon Infinity",
      SCORE: 8
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "Views",
      SCORE: 4
    },
    {
      ARTISTS: "Xiu Xiu",
      ALBUM_TITLE: "Plays the Music of Twin Peaks",
      SCORE: 9
    },
    {
      ARTISTS: "Beyonce",
      ALBUM_TITLE: "Lemonade",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Ferg",
      ALBUM_TITLE: "Always Strive and Prosper",
      SCORE: 2
    },
    {
      ARTISTS: "Sturgill Simpson",
      ALBUM_TITLE: "A Sailor's Guide To Earth",
      SCORE: 8
    },
    {
      ARTISTS: "Spark Master Tape",
      ALBUM_TITLE: "Silhouete of a Sunkken City",
      SCORE: 2
    },
    {
      ARTISTS: "Deakin",
      ALBUM_TITLE: "Sleep Cycle",
      SCORE: 7
    },
    {
      ARTISTS: "PJ Harvey",
      ALBUM_TITLE: "The Hope Six Demolution Project",
      SCORE: 7
    },
    {
      ARTISTS: "M83",
      ALBUM_TITLE: "JUNK",
      SCORE: 3
    },
    {
      ARTISTS: "Parquet Courts",
      ALBUM_TITLE: "Human Preformance",
      SCORE: 7
    },
    {
      ARTISTS: "Deftones",
      ALBUM_TITLE: "Gore",
      SCORE: 4
    },
    {
      ARTISTS: "Tim Hecker",
      ALBUM_TITLE: "Love Streams",
      SCORE: 5
    },
    {
      ARTISTS: "Babymetal",
      ALBUM_TITLE: "Metal Resistance",
      SCORE: 6
    },
    {
      ARTISTS: "Babyfather",
      ALBUM_TITLE: "BBF",
      SCORE: 6
    },
    {
      ARTISTS: "Open Mike Eagle & Paul White",
      ALBUM_TITLE: "Hella Personal Film Festival",
      SCORE: 7
    },
    {
      ARTISTS: "Explosions in the Sky",
      ALBUM_TITLE: "The Wilderness",
      SCORE: 4
    },
    {
      ARTISTS: "Ash Koosha",
      ALBUM_TITLE: "I AKA I",
      SCORE: 6
    },
    {
      ARTISTS: "Weezer",
      ALBUM_TITLE: "Weezer (The White Album)",
      SCORE: 8
    },
    {
      ARTISTS: "Domo Genesis",
      ALBUM_TITLE: "Genesis",
      SCORE: 4
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Southern Family",
      SCORE: 8
    },
    {
      ARTISTS: "Black Mountain",
      ALBUM_TITLE: "IV",
      SCORE: 7
    },
    {
      ARTISTS: "Zayn",
      ALBUM_TITLE: "Mind of Mine",
      SCORE: 4
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "Slime Season 3",
      SCORE: 5
    },
    {
      ARTISTS: "Kano",
      ALBUM_TITLE: "Made In the Manor",
      SCORE: 7
    },
    {
      ARTISTS: "The Body and Full of Hell",
      ALBUM_TITLE: "One Day You Will Ache Like I Ache",
      SCORE: 7
    },
    {
      ARTISTS: "Baauer",
      ALBUM_TITLE: "Aa",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Yachty",
      ALBUM_TITLE: "Lil Boat",
      SCORE: 7
    },
    {
      ARTISTS: "The Drones",
      ALBUM_TITLE: "Feelin' Kinda Free",
      SCORE: 8
    },
    {
      ARTISTS: "Iggy Pop",
      ALBUM_TITLE: "Post-Pop Depression",
      SCORE: 7
    },
    {
      ARTISTS: "Denzel Curry",
      ALBUM_TITLE: "Imperial",
      SCORE: 8
    },
    {
      ARTISTS: "Flatbush Zombies",
      ALBUM_TITLE: "3001: A Laced Odysses",
      SCORE: 6
    },
    {
      ARTISTS: "ORANSSI PAZUZU",
      ALBUM_TITLE: "Värähtelijä",
      SCORE: 7
    },
    {
      ARTISTS: "Bas",
      ALBUM_TITLE: "Too High To Riot",
      SCORE: 5
    },
    {
      ARTISTS: "Lemon Demon",
      ALBUM_TITLE: "Spirit Phone",
      SCORE: 8
    },
    {
      ARTISTS: "The 1975",
      ALBUM_TITLE:
        "I Like It When You Sleep, for You Are So Beautiful Yet So Unaware of It",
      SCORE: 4
    },
    {
      ARTISTS: "Mr. Yote",
      ALBUM_TITLE: "The Terrible Tales of Scurvy Jones",
      SCORE: 7
    },
    {
      ARTISTS: "Kendrick Lamar",
      ALBUM_TITLE: "untitled unmastered",
      SCORE: 8
    },
    {
      ARTISTS: "Big Ups",
      ALBUM_TITLE: "Before A Million Universes",
      SCORE: 8
    },
    {
      ARTISTS: "Wild Nothing",
      ALBUM_TITLE: "Life of Pause",
      SCORE: 5
    },
    {
      ARTISTS: "Charli XCX",
      ALBUM_TITLE: "Vroom Vroom",
      SCORE: 8
    },
    {
      ARTISTS: "Macklemore & Ryan Lewis",
      ALBUM_TITLE: "This Unruly Mess I've Made",
      SCORE: 6
    },
    {
      ARTISTS: "Yung Lean",
      ALBUM_TITLE: "Warlord",
      SCORE: 3
    },
    {
      ARTISTS: "VARIOUS ARTISTS",
      ALBUM_TITLE: "Space Heads",
      SCORE: 2
    },
    {
      ARTISTS: "Matmos",
      ALBUM_TITLE: "Ultimate Care II",
      SCORE: 8
    },
    {
      ARTISTS: "Nevemn",
      ALBUM_TITLE: "Nevemn",
      SCORE: 7
    },
    {
      ARTISTS: "Santigold",
      ALBUM_TITLE: "99 Cents",
      SCORE: 7
    },
    {
      ARTISTS: "Animal Collective",
      ALBUM_TITLE: "Painting With",
      SCORE: 5
    },
    {
      ARTISTS: "Porches",
      ALBUM_TITLE: "Pool",
      SCORE: 5
    },
    {
      ARTISTS: "Kanye West",
      ALBUM_TITLE: "The Life of Pablo",
      SCORE: 8
    },
    {
      ARTISTS: "Lucinda Williams",
      ALBUM_TITLE: "The Ghosts of Highway 20",
      SCORE: 6
    },
    {
      ARTISTS: "Bones",
      ALBUM_TITLE: "Useless",
      SCORE: 7
    },
    {
      ARTISTS: "Majid Jordan",
      ALBUM_TITLE: "Majid Jordan",
      SCORE: 4
    },
    {
      ARTISTS: "Future",
      ALBUM_TITLE: "EVOL",
      SCORE: 6
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "I'm Up",
      SCORE: 5
    },
    {
      ARTISTS: "DIIV",
      ALBUM_TITLE: "Is The Is Are",
      SCORE: 6
    },
    {
      ARTISTS: "Bloc Party",
      ALBUM_TITLE: "Hymns",
      SCORE: 6
    },
    {
      ARTISTS: "Rihanna",
      ALBUM_TITLE: "ANTI",
      SCORE: 4
    },
    {
      ARTISTS: "Massive Attack",
      ALBUM_TITLE: "Ritual Spirit",
      SCORE: 8
    },
    {
      ARTISTS: "Chairlift",
      ALBUM_TITLE: "Moth",
      SCORE: 7
    },
    {
      ARTISTS: "Savages",
      ALBUM_TITLE: "Adore Life",
      SCORE: 6
    },
    {
      ARTISTS: "Daughter",
      ALBUM_TITLE: "Not To Disappear",
      SCORE: 3
    },
    {
      ARTISTS: "Jesu / Sun Kil Moon",
      ALBUM_TITLE: "Jesu / Sun Kil Moon",
      SCORE: 6
    },
    {
      ARTISTS: "Ander .Paak",
      ALBUM_TITLE: "Malibu",
      SCORE: 7
    },
    {
      ARTISTS: "Ty Segall",
      ALBUM_TITLE: "Emotional Mugger",
      SCORE: 8
    },
    {
      ARTISTS: "Boots",
      ALBUM_TITLE: "AQUɅRIA",
      SCORE: 6
    },
    {
      ARTISTS: "Meridian Brothers",
      ALBUM_TITLE: "Los Suicidas",
      SCORE: 7
    },
    {
      ARTISTS: "Hinds",
      ALBUM_TITLE: "Leave Me Alone",
      SCORE: 6
    },
    {
      ARTISTS: "David Bowie",
      ALBUM_TITLE: "★ (Blackstar)",
      SCORE: 9
    },
    {
      ARTISTS: "Benjamin Clementine",
      ALBUM_TITLE: "At Least For Now",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Ugly Mane",
      ALBUM_TITLE: "Oblivion Access",
      SCORE: 5
    },
    {
      ARTISTS: "Krallice",
      ALBUM_TITLE: "Hyperion",
      SCORE: 7
    },
    {
      ARTISTS: "Cage the Elephant",
      ALBUM_TITLE: "Tell Me I'm Pretty",
      SCORE: 6
    },
    {
      ARTISTS: "Radiohead",
      ALBUM_TITLE: "Kid A",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "DJ Shadow",
      ALBUM_TITLE: "Endtroducing.....",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "NWA",
      ALBUM_TITLE: "Straight Outta Compton",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Slint",
      ALBUM_TITLE: "Spiderland",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Bob Dylan",
      ALBUM_TITLE: "Highway 61 Revisited",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Tangerine Dream",
      ALBUM_TITLE: "Phaedra",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Pusha T",
      ALBUM_TITLE: "King Push – Darkest Before Dawn: The Prelude",
      SCORE: 7
    },
    {
      ARTISTS: "Baroness",
      ALBUM_TITLE: "Purple",
      SCORE: 8
    },
    {
      ARTISTS: "Willow Smith",
      ALBUM_TITLE: "Ardipithecus",
      SCORE: 3
    },
    {
      ARTISTS: "Christian Scott aTunde Adjuah",
      ALBUM_TITLE: "Stretch Music",
      SCORE: 7
    },
    {
      ARTISTS: "Beach Slang",
      ALBUM_TITLE: "The Things We Do To Find People Who Feel Like Us",
      SCORE: 7
    },
    {
      ARTISTS: "Wiki",
      ALBUM_TITLE: "Lil Me",
      SCORE: 7
    },
    {
      ARTISTS: "Archy Marshall",
      ALBUM_TITLE: "A New Place 2 Drown",
      SCORE: 4
    },
    {
      ARTISTS: "G-Eazy",
      ALBUM_TITLE: "When it's Dark Out",
      SCORE: 4
    },
    {
      ARTISTS: "Cavanaugh",
      ALBUM_TITLE: "Time & Materials",
      SCORE: 6
    },
    {
      ARTISTS: "Coldplay",
      ALBUM_TITLE: "A Head Full of Dreams",
      SCORE: 5
    },
    {
      ARTISTS: "Erykah Badu",
      ALBUM_TITLE: "But You Caint Use My Phone",
      SCORE: 6
    },
    {
      ARTISTS: "Sophie",
      ALBUM_TITLE: "Product",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      ALBUM_TITLE: "Speedin' Bullet 2 Heaven",
      SCORE: 0
    },
    {
      ARTISTS: "James Ferraro",
      ALBUM_TITLE: "Skid Row",
      SCORE: 4
    },
    {
      ARTISTS: "Sunn o)))",
      ALBUM_TITLE: "Kannon",
      SCORE: 6
    },
    {
      ARTISTS: "Jon Benjamin",
      ALBUM_TITLE: "well, i should have...*",
      SCORE: "BUTTSECKS"
    },
    {
      ARTISTS: "Waka Flocka Flame",
      ALBUM_TITLE: "Flockaveli 1.5",
      SCORE: 7
    },
    {
      ARTISTS: "Arca",
      ALBUM_TITLE: "Mutant",
      SCORE: 6
    },
    {
      ARTISTS: "Freddie Gibbs",
      ALBUM_TITLE: "Shadow of a Doubt",
      SCORE: 7
    },
    {
      ARTISTS: "Adele",
      ALBUM_TITLE: 25,
      SCORE: 7
    },
    {
      ARTISTS: "Ty Dolla $ign",
      ALBUM_TITLE: "Free TC",
      SCORE: 6
    },
    {
      ARTISTS: "King Gizzard & the Lizard Wizard",
      ALBUM_TITLE: "Paper Mâché Dream Balloon",
      SCORE: 7
    },
    {
      ARTISTS: "Anna Von Hausswolff",
      ALBUM_TITLE: "The Miraculous",
      SCORE: 6
    },
    {
      ARTISTS: "Justin Bieber",
      ALBUM_TITLE: "Purpose",
      SCORE: 5
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "The Incredible True Story",
      SCORE: 6
    },
    {
      ARTISTS: "The Garden",
      ALBUM_TITLE: "Haha",
      SCORE: 5
    },
    {
      ARTISTS: "Revenge",
      ALBUM_TITLE: "Behold.Total.Rejection",
      SCORE: "6(66)"
    },
    {
      ARTISTS: "Goldlink",
      ALBUM_TITLE: "And After That, We Didn't Talk",
      SCORE: 2
    },
    {
      ARTISTS: "Busdriver",
      ALBUM_TITLE: "Thumbs",
      SCORE: 6
    },
    {
      ARTISTS: "Kylesa",
      ALBUM_TITLE: "Exhausting Fire",
      SCORE: 7
    },
    {
      ARTISTS: "Grimes",
      ALBUM_TITLE: "Art Angels",
      SCORE: 7
    },
    {
      ARTISTS: "Car Seat Headrest",
      ALBUM_TITLE: "Teens of Style",
      SCORE: 7
    },
    {
      ARTISTS: "Panopticon",
      ALBUM_TITLE: "Autumn Eternal",
      SCORE: 8
    },
    {
      ARTISTS: "M.E.D. Blu and Madlib",
      ALBUM_TITLE: "Bad Neighbor",
      SCORE: 4
    },
    {
      ARTISTS: "Iglooghost",
      ALBUM_TITLE: "Chinese Nü Yr",
      SCORE: 8
    },
    {
      ARTISTS: "Foxing",
      ALBUM_TITLE: "Dealer",
      SCORE: 3
    },
    {
      ARTISTS: "Kirk Knight",
      ALBUM_TITLE: "Late Knight Special",
      SCORE: 5
    },
    {
      ARTISTS: "Twitching Tongues",
      ALBUM_TITLE: "Disharmony",
      SCORE: 3
    },
    {
      ARTISTS: "Protomartyr",
      ALBUM_TITLE: "The Agent Intellect",
      SCORE: 7
    },
    {
      ARTISTS: "Machine Gun Kelly",
      ALBUM_TITLE: "General Admission",
      SCORE: 3
    },
    {
      ARTISTS: "Joanna Newsom",
      ALBUM_TITLE: "Divers",
      SCORE: 8
    },
    {
      ARTISTS: "Uncommon Nasa",
      ALBUM_TITLE: "Halfway",
      SCORE: 7
    },
    {
      ARTISTS: "The Game",
      ALBUM_TITLE: "The Documentary 2.5",
      SCORE: 8
    },
    {
      ARTISTS: "Raury",
      ALBUM_TITLE: "All We Need",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "It's Better This Way",
      SCORE: 5
    },
    {
      ARTISTS: "Deerhunter",
      ALBUM_TITLE: "Fading Frontier",
      SCORE: 6
    },
    {
      ARTISTS: "Beach House",
      ALBUM_TITLE: "Thank Your Lucky Stars",
      SCORE: 5
    },
    {
      ARTISTS: "Neon Indian",
      ALBUM_TITLE: "VEGA INTL. Night School",
      SCORE: 7
    },
    {
      ARTISTS: "The World Is A Beautiful Place & I Am No Longer Afraid To Die",
      ALBUM_TITLE: "Harmlessness",
      SCORE: 7
    },
    {
      ARTISTS: "CHVRCHES",
      ALBUM_TITLE: "Every Open Eye",
      SCORE: 5
    },
    {
      ARTISTS: "New Order",
      ALBUM_TITLE: "Music Complete",
      SCORE: 6
    },
    {
      ARTISTS: "Alex G",
      ALBUM_TITLE: "Beach Music",
      SCORE: 6
    },
    {
      ARTISTS: "The Game",
      ALBUM_TITLE: "The Documentary 2",
      SCORE: 6
    },
    {
      ARTISTS: "Loma Prieta",
      ALBUM_TITLE: "Self Portrait",
      SCORE: 7
    },
    {
      ARTISTS: "Disclosure",
      ALBUM_TITLE: "Caracal",
      SCORE: 6
    },
    {
      ARTISTS: "Wavves",
      ALBUM_TITLE: "V",
      SCORE: 4
    },
    {
      ARTISTS: "Kurt Vile",
      ALBUM_TITLE: "B'lieve I'm Goin Down...",
      SCORE: 6
    },
    {
      ARTISTS: "Fetty Wap",
      ALBUM_TITLE: "Fetty Wap",
      SCORE: 5
    },
    {
      ARTISTS: "Black Breath",
      ALBUM_TITLE: "Slaves Beyond Death",
      SCORE: 6
    },
    {
      ARTISTS: "Run the Jewels",
      ALBUM_TITLE: "Meow the Jewels",
      SCORE: "http://www.runthejewels.net"
    },
    {
      ARTISTS: "Deafheaven",
      ALBUM_TITLE: "New Bermuda",
      SCORE: 6
    },
    {
      ARTISTS: "milo",
      ALBUM_TITLE: "So the Flies Don't Come",
      SCORE: 8
    },
    {
      ARTISTS: "The Front Bottoms",
      ALBUM_TITLE: "Back On Top",
      SCORE: 6
    },
    {
      ARTISTS: "Julia Holter",
      ALBUM_TITLE: "Have You In My Wilderness",
      SCORE: 9
    },
    {
      ARTISTS: "Ought",
      ALBUM_TITLE: "Sun Coming Down",
      SCORE: 8
    },
    {
      ARTISTS: "Drake & Future",
      ALBUM_TITLE: "What A Time To Be Alive",
      SCORE: 6
    },
    {
      ARTISTS: "Lana Del Rey",
      ALBUM_TITLE: "Honeymoon",
      SCORE: 5
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "GO:OD AM",
      SCORE: 7
    },
    {
      ARTISTS: "The Underachievers",
      ALBUM_TITLE: "Evermore: The Art of Duality",
      SCORE: 8
    },
    {
      ARTISTS: "Battles",
      ALBUM_TITLE: "La Di Da Di",
      SCORE: 6
    },
    {
      ARTISTS: "The Libertines",
      ALBUM_TITLE: "Anthems For Doomed Youth",
      SCORE: 6
    },
    {
      ARTISTS: "Whitey Morgan and the 78's",
      ALBUM_TITLE: "Sonic Ranch",
      SCORE: 7
    },
    {
      ARTISTS: "Myrkur",
      ALBUM_TITLE: "M",
      SCORE: 6
    },
    {
      ARTISTS: "Jay Rock",
      ALBUM_TITLE: 90059,
      SCORE: 6
    },
    {
      ARTISTS: "FIDLAR",
      ALBUM_TITLE: "Too",
      SCORE: 4
    },
    {
      ARTISTS: "The Wonder Years",
      ALBUM_TITLE: "No Closer To Heaven",
      SCORE: 5
    },
    {
      ARTISTS: "Iron Maiden",
      ALBUM_TITLE: "The Book of Souls",
      SCORE: 6
    },
    {
      ARTISTS: "Dam-Funk",
      ALBUM_TITLE: "Invite the Light",
      SCORE: 7
    },
    {
      ARTISTS: "Travis Scott",
      ALBUM_TITLE: "Rodeo",
      SCORE: 8
    },
    {
      ARTISTS: "Miley Cyrus",
      ALBUM_TITLE: "Miley Cyrus and Her Dead Petz",
      SCORE: 1
    },
    {
      ARTISTS: "Foals",
      ALBUM_TITLE: "What Went Down",
      SCORE: 5
    },
    {
      ARTISTS: "Krallice",
      ALBUM_TITLE: "Ygg Huur",
      SCORE: 6
    },
    {
      ARTISTS: "Deradoorian",
      ALBUM_TITLE: "The Expanding Flower Planet",
      SCORE: 6
    },
    {
      ARTISTS: "Destroyer",
      ALBUM_TITLE: "Poison Season",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "Beauty Behind the Madness",
      SCORE: 5
    },
    {
      ARTISTS: "Dope Body",
      ALBUM_TITLE: "Kunk",
      SCORE: 7
    },
    {
      ARTISTS: "Carly Rae Jepsen",
      ALBUM_TITLE: "Emotion",
      SCORE: 7
    },
    {
      ARTISTS: "Beach House",
      ALBUM_TITLE: "Depression Cherry",
      SCORE: 6
    },
    {
      ARTISTS: "Cal Chuchesta",
      ALBUM_TITLE: "The New CALassic",
      SCORE: 3
    },
    {
      ARTISTS: "Ghost",
      ALBUM_TITLE: "Meliora",
      SCORE: 9
    },
    {
      ARTISTS: "Health",
      ALBUM_TITLE: "Death Magic",
      SCORE: 5
    },
    {
      ARTISTS: "Mick Jenkins",
      ALBUM_TITLE: "Wave[s]",
      SCORE: 6
    },
    {
      ARTISTS: "FKA twigs",
      ALBUM_TITLE: "M3LL155X",
      SCORE: 9
    },
    {
      ARTISTS: "Cattle Decapitation",
      ALBUM_TITLE: "The Anthropocene Extinction",
      SCORE: 8
    },
    {
      ARTISTS: "Grave Babies",
      ALBUM_TITLE: "Holographic Violence",
      SCORE: 6
    },
    {
      ARTISTS: "Dr. Dre",
      ALBUM_TITLE: "Compton",
      SCORE: 7
    },
    {
      ARTISTS: "Chelsea Wolfe",
      ALBUM_TITLE: "Abyss",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Dicky",
      ALBUM_TITLE: "Professional Rapper",
      SCORE: 2
    },
    {
      ARTISTS: "Lee Scott",
      ALBUM_TITLE: "Butter Fly",
      SCORE: 6
    },
    {
      ARTISTS: "Lianne La Havas",
      ALBUM_TITLE: "Blood",
      SCORE: 8
    },
    {
      ARTISTS: "Wilco",
      ALBUM_TITLE: "Star Wars",
      SCORE: 6
    },
    {
      ARTISTS: "Pissgrave",
      ALBUM_TITLE: "Suicide Euphoria",
      SCORE: 7
    },
    {
      ARTISTS: "Mac DeMarco",
      ALBUM_TITLE: "Another One",
      SCORE: 7
    },
    {
      ARTISTS: "Titus Andronicus",
      ALBUM_TITLE: "The Most Lamentable Tragedy",
      SCORE: 4
    },
    {
      ARTISTS: "Sleaford Mods",
      ALBUM_TITLE: "Key Markets",
      SCORE: 8
    },
    {
      ARTISTS: "Hopsin",
      ALBUM_TITLE: "Pound Syndrome",
      SCORE: 3
    },
    {
      ARTISTS: "Injury Reserve",
      ALBUM_TITLE: "Live From the Dentist Office",
      SCORE: 8
    },
    {
      ARTISTS: "Quelle Chris",
      ALBUM_TITLE: "Innocent Country",
      SCORE: 7
    },
    {
      ARTISTS: "RP Boo",
      ALBUM_TITLE: "Fingers, Bank Pads & Shoeprints",
      SCORE: 7
    },
    {
      ARTISTS: "Corpo-Mente",
      ALBUM_TITLE: "Corpo-Mente",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      ALBUM_TITLE: "DS2",
      SCORE: 6
    },
    {
      ARTISTS: "The Chemical Brothers",
      ALBUM_TITLE: "Born In the Echoes",
      SCORE: 7
    },
    {
      ARTISTS: "Ratatat",
      ALBUM_TITLE: "Magnifique",
      SCORE: 7
    },
    {
      ARTISTS: "Everything Everything",
      ALBUM_TITLE: "Get to Heaven",
      SCORE: 8
    },
    {
      ARTISTS: "Tame Impala",
      ALBUM_TITLE: "Currents",
      SCORE: 7
    },
    {
      ARTISTS: "Lil Wayne",
      ALBUM_TITLE: "Free Weezy Album",
      SCORE: 4
    },
    {
      ARTISTS: "The Internet",
      ALBUM_TITLE: "Ego Death",
      SCORE: 5
    },
    {
      ARTISTS: "Miguel",
      ALBUM_TITLE: "Wildheart",
      SCORE: 5
    },
    {
      ARTISTS: "Meek Mill",
      ALBUM_TITLE: "Dreams Worth More Than Money",
      SCORE: 7
    },
    {
      ARTISTS: "Refused",
      ALBUM_TITLE: "Freedom!",
      SCORE: 4
    },
    {
      ARTISTS: "King Los",
      ALBUM_TITLE: "God, Money, War",
      SCORE: 6
    },
    {
      ARTISTS: "Desaparecidos",
      ALBUM_TITLE: "Payola",
      SCORE: 5
    },
    {
      ARTISTS: "Citizen",
      ALBUM_TITLE: "Everybody Is Going To Heaven",
      SCORE: 3
    },
    {
      ARTISTS: "Czarface",
      ALBUM_TITLE: "Every Hero Needs A Villain",
      SCORE: 8
    },
    {
      ARTISTS: "Vince Staples",
      ALBUM_TITLE: "Summertime 06",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Ugly Mane",
      ALBUM_TITLE: "Third Side of Tape",
      SCORE: 8
    },
    {
      ARTISTS: "Thundercat",
      ALBUM_TITLE: "The Beyond / Where the Giants Roam",
      SCORE: 6
    },
    {
      ARTISTS: "KEN mode",
      ALBUM_TITLE: "Success",
      SCORE: 8
    },
    {
      ARTISTS: "mewithoutYOU",
      ALBUM_TITLE: "Pale Horses",
      SCORE: 5
    },
    {
      ARTISTS: "Ash Koosha",
      ALBUM_TITLE: "GUUD",
      SCORE: 8
    },
    {
      ARTISTS: "Hudson Mohawke",
      ALBUM_TITLE: "Lantern",
      SCORE: 5
    },
    {
      ARTISTS: "Denzel Curry",
      ALBUM_TITLE: "32 Zel / Planet Shrooms",
      SCORE: 6
    },
    {
      ARTISTS: "High On Fire",
      ALBUM_TITLE: "Luminiferous",
      SCORE: 8
    },
    {
      ARTISTS: "Florence + The Machine",
      ALBUM_TITLE: "How Big, How Blue, How Beautiful",
      SCORE: 7
    },
    {
      ARTISTS: "Muse",
      ALBUM_TITLE: "Drones",
      SCORE: 5
    },
    {
      ARTISTS: "Sun Kil Moon",
      ALBUM_TITLE: "Universal Themes",
      SCORE: 6
    },
    {
      ARTISTS: "Jamie xx",
      ALBUM_TITLE: "In Colour",
      SCORE: 7
    },
    {
      ARTISTS: "Thee Oh Sees",
      ALBUM_TITLE: "Mutilator Defeated At Last",
      SCORE: 6
    },
    {
      ARTISTS: "Donnie Trumpet & the Social Experiment",
      ALBUM_TITLE: "Surf",
      SCORE: 4
    },
    {
      ARTISTS: "Algiers",
      ALBUM_TITLE: "Algiers",
      SCORE: 8
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      ALBUM_TITLE: "Multi-Love",
      SCORE: 8
    },
    {
      ARTISTS: "A$AP Rocky",
      ALBUM_TITLE: "At. Long. Last. A$AP",
      SCORE: 5
    },
    {
      ARTISTS: "Hot Chip",
      ALBUM_TITLE: "Why Make Sense?",
      SCORE: 6
    },
    {
      ARTISTS: "Hop Along",
      ALBUM_TITLE: "Painted Shut",
      SCORE: 8
    },
    {
      ARTISTS: "Dr. Yen Lo",
      ALBUM_TITLE: "Days With Dr. Yen Lo",
      SCORE: 6
    },
    {
      ARTISTS: "Shamir",
      ALBUM_TITLE: "Ratchet",
      SCORE: 5
    },
    {
      ARTISTS: "Twenty One Pilots",
      ALBUM_TITLE: "Blurryface",
      SCORE: 4
    },
    {
      ARTISTS: "Prurient",
      ALBUM_TITLE: "Frozen Niagara Falls",
      SCORE: 8
    },
    {
      ARTISTS: "Faith No More",
      ALBUM_TITLE: "Sol Invictus",
      SCORE: 6
    },
    {
      ARTISTS: "Jim O'Rourke",
      ALBUM_TITLE: "Simple Songs",
      SCORE: 6
    },
    {
      ARTISTS: "Snoop Dogg",
      ALBUM_TITLE: "Bush",
      SCORE: 5
    },
    {
      ARTISTS: "Blanck Mass",
      ALBUM_TITLE: "Dumb Flesh",
      SCORE: 6
    },
    {
      ARTISTS: "Holly Herndon",
      ALBUM_TITLE: "Platform",
      SCORE: 6
    },
    {
      ARTISTS: "Peste Noire",
      ALBUM_TITLE: "La Chaise-Dyable",
      SCORE: 7
    },
    {
      ARTISTS: "Hiatus Kaiyote",
      ALBUM_TITLE: "Choose Your Weapon",
      SCORE: 5
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      ALBUM_TITLE: "Dark Bird Is Home",
      SCORE: 6
    },
    {
      ARTISTS: "Wale",
      ALBUM_TITLE: "The Album About Nothing",
      SCORE: 4
    },
    {
      ARTISTS: "Torres",
      ALBUM_TITLE: "Sprinter",
      SCORE: 5
    },
    {
      ARTISTS: "Kamasi Washington",
      ALBUM_TITLE: "The Epic",
      SCORE: 9
    },
    {
      ARTISTS: "Blur",
      ALBUM_TITLE: "The Magic Whip",
      SCORE: 7
    },
    {
      ARTISTS: "Paul de Jong",
      ALBUM_TITLE: "IF",
      SCORE: 7
    },
    {
      ARTISTS: "Colin Stetson and Sarah Neufeld",
      ALBUM_TITLE: "Never Were the Way She Was",
      SCORE: 8
    },
    {
      ARTISTS: "Yelawolf",
      ALBUM_TITLE: "Love Story",
      SCORE: 3
    },
    {
      ARTISTS: "Tribulation",
      ALBUM_TITLE: "The Children of the Night",
      SCORE: 7
    },
    {
      ARTISTS: "Toro Y Moi",
      ALBUM_TITLE: "What For?",
      SCORE: 7
    },
    {
      ARTISTS: "Marching Church",
      ALBUM_TITLE: "This World Is Not Enough",
      SCORE: 6
    },
    {
      ARTISTS: "Alabama Shakes",
      ALBUM_TITLE: "Sound & Color",
      SCORE: 8
    },
    {
      ARTISTS: "Young Thug",
      ALBUM_TITLE: "Barter 6",
      SCORE: 5
    },
    {
      ARTISTS: "Dance Gavin Dance",
      ALBUM_TITLE: "Instant Gratification",
      SCORE: 1
    },
    {
      ARTISTS: "Squarepusher",
      ALBUM_TITLE: "Damogen Furies",
      SCORE: 6
    },
    {
      ARTISTS: "The Mountain Goats",
      ALBUM_TITLE: "Beat The Champ",
      SCORE: 8
    },
    {
      ARTISTS: "Drenge",
      ALBUM_TITLE: "Undertow",
      SCORE: 5
    },
    {
      ARTISTS: "Death Cab For Cutie",
      ALBUM_TITLE: "Kintsugi",
      SCORE: 5
    },
    {
      ARTISTS: "Tyler, The Creator",
      ALBUM_TITLE: "Cherry Bomb",
      SCORE: 3
    },
    {
      ARTISTS: "Twin Shadow",
      ALBUM_TITLE: "Eclipse",
      SCORE: 3
    },
    {
      ARTISTS: "Shlohmo",
      ALBUM_TITLE: "Dark Red",
      SCORE: 6
    },
    {
      ARTISTS: "Young Fathers",
      ALBUM_TITLE: "White Men Are Black Men Too",
      SCORE: 8
    },
    {
      ARTISTS: "Courtney Barnett",
      ALBUM_TITLE: "Sometimes I Sit and Think, and Sometimes I Just Sit",
      SCORE: 5
    },
    {
      ARTISTS: "Portico",
      ALBUM_TITLE: "Living Fields",
      SCORE: 3
    },
    {
      ARTISTS: "Billy Woods",
      ALBUM_TITLE: "Today, I Wrote Nothing",
      SCORE: 7
    },
    {
      ARTISTS: "Purity Ring",
      ALBUM_TITLE: "Another Eternity",
      SCORE: 4
    },
    {
      ARTISTS: "Earl Sweatshirt",
      ALBUM_TITLE: "I Don't Like Shit, I Don't Go Outside",
      SCORE: 6
    },
    {
      ARTISTS: "Liturgy",
      ALBUM_TITLE: "The Ark Work",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      ALBUM_TITLE: "Mr. Wonderful",
      SCORE: 5
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      ALBUM_TITLE: "Asunder, Sweet and Other Distress",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      ALBUM_TITLE: "Carrie & Lowell",
      SCORE: 7
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "The Powers That B (Niggas On the Moon / Jenny Death)",
      SCORE: 9
    },
    {
      ARTISTS: "Laura Marling",
      ALBUM_TITLE: "Short Movie",
      SCORE: 7
    },
    {
      ARTISTS: "Kendrick Lamar",
      ALBUM_TITLE: "To Pimp A Butterfly",
      SCORE: 10
    },
    {
      ARTISTS: "Ratking",
      ALBUM_TITLE: "700-FILL",
      SCORE: 4
    },
    {
      ARTISTS: "Modest Mouse",
      ALBUM_TITLE: "Strangers To Ourselves",
      SCORE: 5
    },
    {
      ARTISTS: "of Montreal",
      ALBUM_TITLE: "Aureate Gloom",
      SCORE: 6
    },
    {
      ARTISTS: "Lightning Bolt",
      ALBUM_TITLE: "Fantasy Empire",
      SCORE: 7
    },
    {
      ARTISTS: "Clarence Clarity",
      ALBUM_TITLE: "No Now",
      SCORE: 8
    },
    {
      ARTISTS: "Steven Wilson",
      ALBUM_TITLE: "Hand. Cannot. Erase.",
      SCORE: 6
    },
    {
      ARTISTS: "Heems",
      ALBUM_TITLE: "Eat Pray Thug",
      SCORE: 4
    },
    {
      ARTISTS: "Leviathan",
      ALBUM_TITLE: "Scar Sighted",
      SCORE: 8
    },
    {
      ARTISTS: "Pile",
      ALBUM_TITLE: "You're Better Than This",
      SCORE: 6
    },
    {
      ARTISTS: "Cannibal Ox",
      ALBUM_TITLE: "Blade of the Ronin",
      SCORE: 5
    },
    {
      ARTISTS: "Fashawn",
      ALBUM_TITLE: "The Ecology",
      SCORE: 5
    },
    {
      ARTISTS: "Swain",
      ALBUM_TITLE: "Heavy Dancing",
      SCORE: 7
    },
    {
      ARTISTS: "Jeff Rosenstock",
      ALBUM_TITLE: "We Cool?",
      SCORE: 8
    },
    {
      ARTISTS: "Dan Deacon",
      ALBUM_TITLE: "Gliss Riffer",
      SCORE: 5
    },
    {
      ARTISTS: "Negură Bunget",
      ALBUM_TITLE: "TĂU",
      SCORE: 5
    },
    {
      ARTISTS: "The Pop Group",
      ALBUM_TITLE: "Citizen Zombie",
      SCORE: 9
    },
    {
      ARTISTS: "Big Sean",
      ALBUM_TITLE: "Dark Sky Paradise",
      SCORE: "no"
    },
    {
      ARTISTS: "Screaming Females",
      ALBUM_TITLE: "Rose Mountain",
      SCORE: 6
    },
    {
      ARTISTS: "THEESatisfaction",
      ALBUM_TITLE: "EarthEE",
      SCORE: 7
    },
    {
      ARTISTS: "Adventures",
      ALBUM_TITLE: "Supersonic Home",
      SCORE: 7
    },
    {
      ARTISTS: "BADBADNOTGOOD & Ghostface Killah",
      ALBUM_TITLE: "Sour Soul",
      SCORE: 6
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "If You're Reading This, It's Too Late",
      SCORE: 8
    },
    {
      ARTISTS: "Pond",
      ALBUM_TITLE: "Man, It Feels Like Space Again",
      SCORE: 6
    },
    {
      ARTISTS: "Your Old Droog",
      ALBUM_TITLE: "Kinison",
      SCORE: 8
    },
    {
      ARTISTS: "Father John Misty",
      ALBUM_TITLE: "I Love You, Honeybear",
      SCORE: 8
    },
    {
      ARTISTS: "Open Mike Eagle",
      ALBUM_TITLE: "A Special Episode Of",
      SCORE: 8
    },
    {
      ARTISTS: "Matana Roberts",
      ALBUM_TITLE: "Coin Coin Chapter 3: River Run Thee",
      SCORE: 6
    },
    {
      ARTISTS: "John Carpenter",
      ALBUM_TITLE: "Lost Themes",
      SCORE: 7
    },
    {
      ARTISTS: "Zs",
      ALBUM_TITLE: "Xe",
      SCORE: 8
    },
    {
      ARTISTS: "Xibalba",
      ALBUM_TITLE: "Tierra Y Libertad",
      SCORE: 6
    },
    {
      ARTISTS: "Mount Eerie",
      ALBUM_TITLE: "Sauna",
      SCORE: 6
    },
    {
      ARTISTS: "Title Fight",
      ALBUM_TITLE: "Hyperview",
      SCORE: 4
    },
    {
      ARTISTS: "Björk",
      ALBUM_TITLE: "Vulnicura",
      SCORE: 8
    },
    {
      ARTISTS: "Lupe Fiasco",
      ALBUM_TITLE: "Tetsuo & Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Napalm Death",
      ALBUM_TITLE: "Apex Predator -- Easy Meat",
      SCORE: 8
    },
    {
      ARTISTS: "Belle and Sebastian",
      ALBUM_TITLE: "Girls In Peacetime Want To Dance",
      SCORE: 6
    },
    {
      ARTISTS: "Joey Bada$$",
      ALBUM_TITLE: "B4.DA.$$",
      SCORE: 8
    },
    {
      ARTISTS: "Marilyn Manson",
      ALBUM_TITLE: "The Pale Emperor",
      SCORE: "6(66)"
    },
    {
      ARTISTS: "Panda Bear",
      ALBUM_TITLE: "Panda Bear Meets the Grim Reaper",
      SCORE: 4
    },
    {
      ARTISTS: "Sleater-Kinney",
      ALBUM_TITLE: "No Cities to Love",
      SCORE: 7
    },
    {
      ARTISTS: "Viet Cong",
      ALBUM_TITLE: "Viet Cong",
      SCORE: 7
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Fashion Week",
      SCORE: 7
    },
    {
      ARTISTS: "Roland Kirk",
      ALBUM_TITLE: "I Talk With the Spirits",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Kate Bush",
      ALBUM_TITLE: "Hounds of Love",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Iron Maiden",
      ALBUM_TITLE: "The Number of the Beast",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Kraftwerk",
      ALBUM_TITLE: "Trans-Europe Express",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "A Tribe Called Quest",
      ALBUM_TITLE: "The Low End Theory",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Joy Division",
      ALBUM_TITLE: "Unknown Pleasures",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "D'Angelo and The Vanguard",
      ALBUM_TITLE: "Black Messiah",
      SCORE: 8
    },
    {
      ARTISTS: "Hail Mary Mallon",
      ALBUM_TITLE: "Bestiary",
      SCORE: 5
    },
    {
      ARTISTS: "OG Maco",
      ALBUM_TITLE: "OG Maco",
      SCORE: 7
    },
    {
      ARTISTS: "Foo Fighters",
      ALBUM_TITLE: "Sonic Highways",
      SCORE: 5
    },
    {
      ARTISTS: "Wu-Tang Clan",
      ALBUM_TITLE: "A Better Tomorrow",
      SCORE: 6
    },
    {
      ARTISTS: "Full of Hell",
      ALBUM_TITLE: "Full of Hell & Merzbow",
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      ALBUM_TITLE: "2014 Forest Hills Drive",
      SCORE: 6
    },
    {
      ARTISTS: "Ghostface Killah",
      ALBUM_TITLE: "36 Seasons",
      SCORE: 5
    },
    {
      ARTISTS: "The Wytches",
      ALBUM_TITLE: "Annabel Dream Reader",
      SCORE: 8
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Shady XV",
      SCORE: 4
    },
    {
      ARTISTS: "A$AP Ferg",
      ALBUM_TITLE: "Ferg Forever",
      SCORE: 7
    },
    {
      ARTISTS: "Clark",
      ALBUM_TITLE: "Clark",
      SCORE: 6
    },
    {
      ARTISTS: "Andy Stott",
      ALBUM_TITLE: "Faith In Strangers",
      SCORE: 7
    },
    {
      ARTISTS: "Mr. Oizo",
      ALBUM_TITLE: "The Church",
      SCORE: 7
    },
    {
      ARTISTS: "TVOTR",
      ALBUM_TITLE: "Seeds",
      SCORE: 6
    },
    {
      ARTISTS: "I Am Your Destruction",
      ALBUM_TITLE: "I Am Your Destruction",
      SCORE: 7
    },
    {
      ARTISTS: "Pink Floyd",
      ALBUM_TITLE: "The Endless River",
      SCORE: 6
    },
    {
      ARTISTS: "Megaton Leviathan",
      ALBUM_TITLE: "Past 21: Beyond The Arctic Cell",
      SCORE: 7
    },
    {
      ARTISTS: "Sterilizer",
      ALBUM_TITLE: "Sterilizer",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink",
      ALBUM_TITLE: "Pom Pom",
      SCORE: 9
    },
    {
      ARTISTS: "iamamiwhoami",
      ALBUM_TITLE: "Blue",
      SCORE: 6
    },
    {
      ARTISTS: "Pianos Become The Teeth",
      ALBUM_TITLE: "Keep You",
      SCORE: 4
    },
    {
      ARTISTS: "Dean Blunt",
      ALBUM_TITLE: "Black Metal",
      SCORE: 8
    },
    {
      ARTISTS: "Azealia Banks",
      ALBUM_TITLE: "Broke With Expensive Taste",
      SCORE: 5
    },
    {
      ARTISTS: "Wildbirds & Peacedrums",
      ALBUM_TITLE: "Rhythm",
      SCORE: 8
    },
    {
      ARTISTS: "Kayo Dot",
      ALBUM_TITLE: "Coffins On Io",
      SCORE: 6
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "Cadillactica",
      SCORE: 6
    },
    {
      ARTISTS: "Arca",
      ALBUM_TITLE: "Xen",
      SCORE: 6
    },
    {
      ARTISTS: "The World Is A Beautiful Place...",
      ALBUM_TITLE: "Between Bodies",
      SCORE: 5
    },
    {
      ARTISTS: "Deerhoof",
      ALBUM_TITLE: "La Isla Bonita",
      SCORE: 7
    },
    {
      ARTISTS: "Slipknot",
      ALBUM_TITLE: ".5: The Gray Chapter",
      SCORE: 4
    },
    {
      ARTISTS: "Black Milk",
      ALBUM_TITLE: "If There's A Hell Below",
      SCORE: 6
    },
    {
      ARTISTS: "Pharmakon",
      ALBUM_TITLE: "Bestial Burden",
      SCORE: 5
    },
    {
      ARTISTS: "Botanist",
      ALBUM_TITLE: "VI: Flora",
      SCORE: 8
    },
    {
      ARTISTS: "Panda Bear",
      ALBUM_TITLE: "Mr. Noah",
      SCORE: 6
    },
    {
      ARTISTS: "Royal Blood",
      ALBUM_TITLE: "Royal Blood",
      SCORE: 5
    },
    {
      ARTISTS: "Clockwork Indigo",
      ALBUM_TITLE: "Clockwork Indigo",
      SCORE: 7
    },
    {
      ARTISTS: "Run the Jewels",
      ALBUM_TITLE: "Run the Jewels 2",
      SCORE: 8
    },
    {
      ARTISTS: "Dope Body",
      ALBUM_TITLE: "Lifer",
      SCORE: 8
    },
    {
      ARTISTS: "Logic",
      ALBUM_TITLE: "Under Pressure",
      SCORE: 6
    },
    {
      ARTISTS: "Vince Staples",
      ALBUM_TITLE: "Hell Can Wait",
      SCORE: 7
    },
    {
      ARTISTS: "Scott Walker + Sunn o)))",
      ALBUM_TITLE: "Soused",
      SCORE: 6
    },
    {
      ARTISTS: "Sir Michael Rocks",
      ALBUM_TITLE: "Banco",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      ALBUM_TITLE: "...And Star Power",
      SCORE: 2
    },
    {
      ARTISTS: "Godflesh",
      ALBUM_TITLE: "A World Lit Only By Fire",
      SCORE: 7
    },
    {
      ARTISTS: "My Brightest Diamond",
      ALBUM_TITLE: "This Is My Hand",
      SCORE: 7
    },
    {
      ARTISTS: "Weezer",
      ALBUM_TITLE: "Everything Will Be Alright In The End",
      SCORE: 7
    },
    {
      ARTISTS: "alt-J",
      ALBUM_TITLE: "This Is All Yours",
      SCORE: 7
    },
    {
      ARTISTS: "Electric Wizard",
      ALBUM_TITLE: "Time To Die",
      SCORE: 5
    },
    {
      ARTISTS: "Childish Gambino",
      ALBUM_TITLE: "STN MTN / Kauai",
      SCORE: 4
    },
    {
      ARTISTS: "Caribou",
      ALBUM_TITLE: "Our Love",
      SCORE: 6
    },
    {
      ARTISTS: "Flying Lotus",
      ALBUM_TITLE: "You're Dead",
      SCORE: 8
    },
    {
      ARTISTS: "SBTRKT",
      ALBUM_TITLE: "Wonder Where We Land",
      SCORE: 5
    },
    {
      ARTISTS: "Shellac",
      ALBUM_TITLE: "Dude Incredible",
      SCORE: 6
    },
    {
      ARTISTS: "Iceage",
      ALBUM_TITLE: "Plowing Into the Field of Love",
      SCORE: 9
    },
    {
      ARTISTS: "Thom Yorke",
      ALBUM_TITLE: "Tomorrow's Modern Boxes",
      SCORE: 6
    },
    {
      ARTISTS: "Perfume Genius",
      ALBUM_TITLE: "Too Bright",
      SCORE: 8
    },
    {
      ARTISTS: "Interpol",
      ALBUM_TITLE: "El Pintor",
      SCORE: 6
    },
    {
      ARTISTS: "Julian Casablancas + The Voidz",
      ALBUM_TITLE: "Tyranny",
      SCORE: 7
    },
    {
      ARTISTS: "Milo",
      ALBUM_TITLE: "A Toothpaste Suburb",
      SCORE: 5
    },
    {
      ARTISTS: "Busdriver",
      ALBUM_TITLE: "Perfect Hair",
      SCORE: 8
    },
    {
      ARTISTS: "Banks",
      ALBUM_TITLE: "Goddess",
      SCORE: 5
    },
    {
      ARTISTS: "Aphex Twin",
      ALBUM_TITLE: "Syro",
      SCORE: 6
    },
    {
      ARTISTS: "NehruvianDOOM",
      ALBUM_TITLE: "NehruvianDOOM",
      SCORE: 5
    },
    {
      ARTISTS: "Yung Lean",
      ALBUM_TITLE: "Unknown Memory",
      SCORE: 4
    },
    {
      ARTISTS: "Earth",
      ALBUM_TITLE: "Primitive and Deadly",
      SCORE: 6
    },
    {
      ARTISTS: "Death From Above 1979",
      ALBUM_TITLE: "The Physical World",
      SCORE: 6
    },
    {
      ARTISTS: "The Bug",
      ALBUM_TITLE: "Angels & Devils",
      SCORE: 6
    },
    {
      ARTISTS: "Blonde Redhead",
      ALBUM_TITLE: "Barragán",
      SCORE: 6
    },
    {
      ARTISTS: "Opeth",
      ALBUM_TITLE: "Pale Communion",
      SCORE: 5
    },
    {
      ARTISTS: "Code Orange",
      ALBUM_TITLE: "I Am King",
      SCORE: 6
    },
    {
      ARTISTS: "Zammuto",
      ALBUM_TITLE: "Anchor",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall",
      ALBUM_TITLE: "Manipulator",
      SCORE: 6
    },
    {
      ARTISTS: "Travi$ Scott",
      ALBUM_TITLE: "Days Before Rodeo",
      SCORE: 3
    },
    {
      ARTISTS: "Rustie",
      ALBUM_TITLE: "Green Language",
      SCORE: 3
    },
    {
      ARTISTS: "Raury",
      ALBUM_TITLE: "Indigo Child",
      SCORE: 4
    },
    {
      ARTISTS: "Pallbearer",
      ALBUM_TITLE: "Foundations of Burden",
      SCORE: 6
    },
    {
      ARTISTS: "Uncommon Nasa",
      ALBUM_TITLE: "New York Telephone",
      SCORE: 8
    },
    {
      ARTISTS: "Michael Cera",
      ALBUM_TITLE: "True That",
      SCORE: 5
    },
    {
      ARTISTS: "Bölzer",
      ALBUM_TITLE: "Soma",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Armand Hammer",
      ALBUM_TITLE: "Furtive Movements",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Watsky",
      ALBUM_TITLE: "All You Can Do",
      SCORE: 4
    },
    {
      ARTISTS: "Antemasque",
      ALBUM_TITLE: "Antemasque",
      SCORE: 7
    },
    {
      ARTISTS: "Spooky Black",
      ALBUM_TITLE: "Leaving",
      SCORE: 5
    },
    {
      ARTISTS: "FKA Twigs",
      ALBUM_TITLE: "LP1",
      SCORE: 8
    },
    {
      ARTISTS: "Mick Jenkins",
      ALBUM_TITLE: "The Water[s]",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      ALBUM_TITLE: "Cellar Door: Terminus Ut Exordium",
      SCORE: 7
    },
    {
      ARTISTS: "Otis Brown III",
      ALBUM_TITLE: "The Thought of You",
      SCORE: 7
    },
    {
      ARTISTS: "Porter Robinson",
      ALBUM_TITLE: "Worlds",
      SCORE: 5
    },
    {
      ARTISTS: "PartyNextDoor",
      ALBUM_TITLE: "Two",
      SCORE: 2
    },
    {
      ARTISTS: "Spoon",
      ALBUM_TITLE: "They Want My Soul",
      SCORE: 7
    },
    {
      ARTISTS: "Mellowhype",
      ALBUM_TITLE: "INSA",
      SCORE: 3
    },
    {
      ARTISTS: "Jenny Lewis",
      ALBUM_TITLE: "The Voyager",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Kyary Pamyu Pamyu",
      ALBUM_TITLE: "Pikapika Fantajin",
      SCORE: 7
    },
    {
      ARTISTS: "Common",
      ALBUM_TITLE: "Nobody's Smiling",
      SCORE: 6
    },
    {
      ARTISTS: "Neil Cicierega",
      ALBUM_TITLE: "Mouth Sounds / Mouth Silence",
      SCORE: 8
    },
    {
      ARTISTS: "Joyce Manor",
      ALBUM_TITLE: "Never Hungover Again",
      SCORE: 6
    },
    {
      ARTISTS: "How To Dress Well",
      ALBUM_TITLE: "What Is This Heart?",
      SCORE: 6
    },
    {
      ARTISTS: "Fallujah",
      ALBUM_TITLE: "The Flesh Prevails",
      SCORE: 4
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Coalmine Records Presents: Unearthed",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Alvvays",
      ALBUM_TITLE: "Alvvays",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Shabazz Palaces",
      ALBUM_TITLE: "Lese Majesty",
      SCORE: 5
    },
    {
      ARTISTS: "Morrissey",
      ALBUM_TITLE: "World Peace is None of Your Business",
      SCORE: 5
    },
    {
      ARTISTS: "Weird Al Yankovic",
      ALBUM_TITLE: "Mandatory Fun",
      SCORE: 7
    },
    {
      ARTISTS: "Shlohmo & Jeremih",
      ALBUM_TITLE: "No More",
      SCORE: 5
    },
    {
      ARTISTS: "La Roux",
      ALBUM_TITLE: "Trouble In Paradise",
      SCORE: 8
    },
    {
      ARTISTS: "The Orwells",
      ALBUM_TITLE: "Disgracedland",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Panopticon",
      ALBUM_TITLE: "Roads To The North",
      SCORE: 8
    },
    {
      ARTISTS: "Deadmau5",
      ALBUM_TITLE: "While (1 Is Less Than 2)",
      SCORE: 7
    },
    {
      ARTISTS: "Sia",
      ALBUM_TITLE: "1000 Forms of Fear",
      SCORE: 7
    },
    {
      ARTISTS: "Wolves In the Throne Room",
      ALBUM_TITLE: "Celestite",
      SCORE: 8
    },
    {
      ARTISTS: "Lazer/Wulf",
      ALBUM_TITLE: "The Beast of Left and Right",
      SCORE: 7
    },
    {
      ARTISTS: "Wreck and Reference",
      ALBUM_TITLE: "Want",
      SCORE: 6
    },
    {
      ARTISTS: "Pearls Negras",
      ALBUM_TITLE: "Biggie Apple",
      SCORE: 8
    },
    {
      ARTISTS: "A Sunny Day In Glasgow",
      ALBUM_TITLE: "Sea When Absent",
      SCORE: 7
    },
    {
      ARTISTS: "USA Out of Vietnam",
      ALBUM_TITLE: "Crashing Diseases and Incurable Airplanes",
      SCORE: 7
    },
    {
      ARTISTS: "Apathy",
      ALBUM_TITLE: "Connecticut Casual",
      SCORE: 8
    },
    {
      ARTISTS: "Mastodon",
      ALBUM_TITLE: "Once More 'Round the Sun",
      SCORE: 7
    },
    {
      ARTISTS: "Ab-Soul",
      ALBUM_TITLE: "These Days...",
      SCORE: 5
    },
    {
      ARTISTS: "Open Mike Eagle",
      ALBUM_TITLE: "Dark Comedy",
      SCORE: 8
    },
    {
      ARTISTS: "Caustic Window",
      ALBUM_TITLE: "Caustic Window",
      SCORE: 6
    },
    {
      ARTISTS: "The Soft Pink Truth",
      ALBUM_TITLE: "Why Do The Heathen Rage?",
      SCORE: 7
    },
    {
      ARTISTS: "Lone",
      ALBUM_TITLE: "Reality Testing",
      SCORE: 3
    },
    {
      ARTISTS: "ZelooperZ",
      ALBUM_TITLE: "HELP",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "The Powers That B Pt. 1 a.k.a. Niggas On The Moon",
      SCORE: "none"
    },
    {
      ARTISTS: "Lana Del Rey",
      ALBUM_TITLE: "Ultraviolence",
      SCORE: 2
    },
    {
      ARTISTS: "Bones",
      ALBUM_TITLE: "Garbage",
      SCORE: 6
    },
    {
      ARTISTS: "Mayhem",
      ALBUM_TITLE: "Esoteric Warfare",
      SCORE: 7
    },
    {
      ARTISTS: "Jack White",
      ALBUM_TITLE: "Lazaretto",
      SCORE: 5
    },
    {
      ARTISTS: "Trap Them",
      ALBUM_TITLE: "Blissfucker",
      SCORE: 5
    },
    {
      ARTISTS: "Ben Frost",
      ALBUM_TITLE: "A U R O R A",
      SCORE: 5
    },
    {
      ARTISTS: "Parquet Courts",
      ALBUM_TITLE: "Sunbathing Animal",
      SCORE: 4
    },
    {
      ARTISTS: "Blu",
      ALBUM_TITLE: "Good To Be Home",
      SCORE: 6
    },
    {
      ARTISTS: "RiFF RAFF",
      ALBUM_TITLE: "NEON iCON",
      SCORE: 5
    },
    {
      ARTISTS: "Coldplay",
      ALBUM_TITLE: "Ghost Stories",
      SCORE: 4
    },
    {
      ARTISTS: "clipping.",
      ALBUM_TITLE: "CLPPNG",
      SCORE: 9
    },
    {
      ARTISTS: "Eyehategod",
      ALBUM_TITLE: "Eyehategod",
      SCORE: 6
    },
    {
      ARTISTS: "Sharon Van Etten",
      ALBUM_TITLE: "Are We There",
      SCORE: 6
    },
    {
      ARTISTS: "Owen Pallett",
      ALBUM_TITLE: "In Conflict",
      SCORE: 7
    },
    {
      ARTISTS: "Trash Talk",
      ALBUM_TITLE: "No Peace",
      SCORE: 5
    },
    {
      ARTISTS: "Pink Guy",
      ALBUM_TITLE: "Pink Guy",
      SCORE: "burp"
    },
    {
      ARTISTS: "The Roots",
      ALBUM_TITLE: "...And Then You Shoot Your Cousin",
      SCORE: 4
    },
    {
      ARTISTS: "Tobacco",
      ALBUM_TITLE: "Ultima II Massage",
      SCORE: 8
    },
    {
      ARTISTS: "Chromeo",
      ALBUM_TITLE: "White Women",
      SCORE: 5
    },
    {
      ARTISTS: "Vallenfyre",
      ALBUM_TITLE: "Splinters",
      SCORE: 7
    },
    {
      ARTISTS: "Swans",
      ALBUM_TITLE: "To Be Kind",
      SCORE: 10
    },
    {
      ARTISTS: "Ibibio Sound Machine",
      ALBUM_TITLE: "Ibibio Sound Machine",
      SCORE: 7
    },
    {
      ARTISTS: "Little Dragon",
      ALBUM_TITLE: "Nabuma Rubberband",
      SCORE: 6
    },
    {
      ARTISTS: "The Black Keys",
      ALBUM_TITLE: "Turn Blue",
      SCORE: 4
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "Faces",
      SCORE: 6
    },
    {
      ARTISTS: "Lykke Li",
      ALBUM_TITLE: "I Never Learn",
      SCORE: 6
    },
    {
      ARTISTS: "Damon Albarn",
      ALBUM_TITLE: "Everyday Robots",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew Jackson Jihad",
      ALBUM_TITLE: "Christmas Island",
      SCORE: 5
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      ALBUM_TITLE: "III",
      SCORE: 7
    },
    {
      ARTISTS: "Sleaford Mods",
      ALBUM_TITLE: "Divide & Exit",
      SCORE: 6
    },
    {
      ARTISTS: "Ought",
      ALBUM_TITLE: "More Than Any Other Day",
      SCORE: 7
    },
    {
      ARTISTS: "Future",
      ALBUM_TITLE: "Honest",
      SCORE: 2
    },
    {
      ARTISTS: "tUnE-yArDs",
      ALBUM_TITLE: "Nikki Nack",
      SCORE: 8
    },
    {
      ARTISTS: "Lord Mantis",
      ALBUM_TITLE: "Death Mask",
      SCORE: 6
    },
    {
      ARTISTS: "Pixies",
      ALBUM_TITLE: "Indie Cindy",
      SCORE: 4
    },
    {
      ARTISTS: "John Frusciante",
      ALBUM_TITLE: "Enclosure",
      SCORE: 2
    },
    {
      ARTISTS: "Pharoahe Monch",
      ALBUM_TITLE: "P.T.S.D.",
      SCORE: 7
    },
    {
      ARTISTS: "Chet Faker",
      ALBUM_TITLE: "Built On Glass",
      SCORE: 3
    },
    {
      ARTISTS: "The Hotelier",
      ALBUM_TITLE: "Home, Like NoPlace Is There",
      SCORE: 6
    },
    {
      ARTISTS: "Carla Bozulich",
      ALBUM_TITLE: "Boy",
      SCORE: 8
    },
    {
      ARTISTS: "Thantifaxath",
      ALBUM_TITLE: "Sacred White Noise",
      SCORE: 8
    },
    {
      ARTISTS: "Lil Herb",
      ALBUM_TITLE: "Welcome To Fazoland",
      SCORE: 7
    },
    {
      ARTISTS: "IDYLLS",
      ALBUM_TITLE: "PRAYER FOR TERRENE",
      SCORE: 8
    },
    {
      ARTISTS: "Girl Talk & Freeway",
      ALBUM_TITLE: "Broken Ankles",
      SCORE: 8
    },
    {
      ARTISTS: "CunninLynguists",
      ALBUM_TITLE: "Strange Journey Vol. 3",
      SCORE: 7
    },
    {
      ARTISTS: "SZA",
      ALBUM_TITLE: "Z",
      SCORE: 4
    },
    {
      ARTISTS: "Todd Terje",
      ALBUM_TITLE: "It's Album Time",
      SCORE: 6
    },
    {
      ARTISTS: "Ratking",
      ALBUM_TITLE: "So It Goes",
      SCORE: 8
    },
    {
      ARTISTS: "Cloud Nothings",
      ALBUM_TITLE: "Here And Nowhere Else",
      SCORE: 6
    },
    {
      ARTISTS: "Sisyphus",
      ALBUM_TITLE: "Sisyphus",
      SCORE: 7
    },
    {
      ARTISTS: "Avey Tare's Slasher Flicks",
      ALBUM_TITLE: "Enter The Slasher House",
      SCORE: 5
    },
    {
      ARTISTS: "OFF!",
      ALBUM_TITLE: "Wasted Years",
      SCORE: 7
    },
    {
      ARTISTS: "Tony Molina",
      ALBUM_TITLE: "Dissed and Dismissed",
      SCORE: 7
    },
    {
      ARTISTS: "Timber Timbre",
      ALBUM_TITLE: "Hot Dreams",
      SCORE: 8
    },
    {
      ARTISTS: "Mø",
      ALBUM_TITLE: "No Mythologies To Follow",
      SCORE: 6
    },
    {
      ARTISTS: "White Hinterland",
      ALBUM_TITLE: "Baby",
      SCORE: 8
    },
    {
      ARTISTS: "Mac Demarco",
      ALBUM_TITLE: "Salad Days",
      SCORE: 5
    },
    {
      ARTISTS: "Nocando",
      ALBUM_TITLE: "Jimmy The Burnout",
      SCORE: 6
    },
    {
      ARTISTS: "PLANNINGTOROCK",
      ALBUM_TITLE: "All Love's Legal",
      SCORE: "???"
    },
    {
      ARTISTS: "YG",
      ALBUM_TITLE: "My Krazy Life",
      SCORE: 6
    },
    {
      ARTISTS: "Wild Beasts",
      ALBUM_TITLE: "Present Tense",
      SCORE: 7
    },
    {
      ARTISTS: "Onyx",
      ALBUM_TITLE: "Wakedafucup",
      SCORE: 7
    },
    {
      ARTISTS: "Skrillex",
      ALBUM_TITLE: "Recess",
      SCORE: 5
    },
    {
      ARTISTS: "Liars",
      ALBUM_TITLE: "Mess",
      SCORE: 8
    },
    {
      ARTISTS: "Future Islands",
      ALBUM_TITLE: "Singles",
      SCORE: 7
    },
    {
      ARTISTS: "Big Ups",
      ALBUM_TITLE: "Eighteen Hours of Static",
      SCORE: 8
    },
    {
      ARTISTS: "Tycho",
      ALBUM_TITLE: "Awake",
      SCORE: 6
    },
    {
      ARTISTS: "The War On Drugs",
      ALBUM_TITLE: "Lost In The Dream",
      SCORE: 7
    },
    {
      ARTISTS: "Evian Christ",
      ALBUM_TITLE: "Waterfall",
      SCORE: 7
    },
    {
      ARTISTS: "Freddie Gibbs & Madlib",
      ALBUM_TITLE: "Piñata",
      SCORE: 9
    },
    {
      ARTISTS: "La Dispute",
      ALBUM_TITLE: "The Rooms of the House",
      SCORE: 7
    },
    {
      ARTISTS: "Pharrell",
      ALBUM_TITLE: "G I R L",
      SCORE: 3
    },
    {
      ARTISTS: "Migos",
      ALBUM_TITLE: "No Label II",
      SCORE: 5
    },
    {
      ARTISTS: "Real Estate",
      ALBUM_TITLE: "Atlas",
      SCORE: 3
    },
    {
      ARTISTS: "White Suns",
      ALBUM_TITLE: "Totem",
      SCORE: 8
    },
    {
      ARTISTS: "Rick Ross",
      ALBUM_TITLE: "Mastermind",
      SCORE: "uhhhhhhhhh"
    },
    {
      ARTISTS: "Beck",
      ALBUM_TITLE: "Morning Phase",
      SCORE: 4
    },
    {
      ARTISTS: "St. Vincent",
      ALBUM_TITLE: "St. Vincent",
      SCORE: 7
    },
    {
      ARTISTS: "Schoolboy Q",
      ALBUM_TITLE: "Oxymoron",
      SCORE: 7
    },
    {
      ARTISTS: "Temples",
      ALBUM_TITLE: "Sun Structures",
      SCORE: 5
    },
    {
      ARTISTS: "Sunn O))) & Ulver",
      ALBUM_TITLE: "Terrestrials",
      SCORE: 6
    },
    {
      ARTISTS: "Artificial Brain",
      ALBUM_TITLE: "Labyrinth Constellation",
      SCORE: 8
    },
    {
      ARTISTS: "Sun Kil Moon",
      ALBUM_TITLE: "Benji",
      SCORE: 9
    },
    {
      ARTISTS: "Angel Olsen",
      ALBUM_TITLE: "Burn Your Fire For No Witness",
      SCORE: 5
    },
    {
      ARTISTS: "Xiu Xiu",
      ALBUM_TITLE: "Angel Guts: Red Classroom",
      SCORE: 7
    },
    {
      ARTISTS: "Glitch Mob",
      ALBUM_TITLE: "Love Death Immortality",
      SCORE: 3
    },
    {
      ARTISTS: "Step Brothers",
      ALBUM_TITLE: "Lord Steppington",
      SCORE: 8
    },
    {
      ARTISTS: "Behemoth",
      ALBUM_TITLE: "The Satanist",
      SCORE: 9
    },
    {
      ARTISTS: "Isaiah Rashad",
      ALBUM_TITLE: "Cilvia Demo",
      SCORE: 6
    },
    {
      ARTISTS: "Young Fathers",
      ALBUM_TITLE: "Dead",
      SCORE: 6
    },
    {
      ARTISTS: "Actress",
      ALBUM_TITLE: "Ghettoville",
      SCORE: 8
    },
    {
      ARTISTS: "Have A Nice Life",
      ALBUM_TITLE: "The Unnatural World",
      SCORE: 8
    },
    {
      ARTISTS: "An Autumn For Crippled Children",
      ALBUM_TITLE: "Try Not To Destroy Everything You Love",
      SCORE: 7
    },
    {
      ARTISTS: "Indian",
      ALBUM_TITLE: "From All Purity",
      SCORE: 8
    },
    {
      ARTISTS: "Mogwai",
      ALBUM_TITLE: "Rave Tapes",
      SCORE: 6
    },
    {
      ARTISTS: "Against Me!",
      ALBUM_TITLE: "Transgender Dysphoria Blues",
      SCORE: 5
    },
    {
      ARTISTS: "Silver Mount Zion",
      ALBUM_TITLE: "Fuck Off Get Free We Pour Light On Everything",
      SCORE: 8
    },
    {
      ARTISTS: "Murmur",
      ALBUM_TITLE: "Murmur",
      SCORE: 8
    },
    {
      ARTISTS: "Nils Frahm",
      ALBUM_TITLE: "Spaces",
      SCORE: 7
    },
    {
      ARTISTS: "Lee Bannon",
      ALBUM_TITLE: "Alternate/Endings",
      SCORE: 6
    },
    {
      ARTISTS: "Xiu Xiu",
      ALBUM_TITLE: "Nina",
      SCORE: 8
    },
    {
      ARTISTS: "Calvaiire",
      ALBUM_TITLE: "Forceps",
      SCORE: 7
    },
    {
      ARTISTS: "Beyoncé",
      ALBUM_TITLE: "Beyoncé",
      SCORE: 6
    },
    {
      ARTISTS: "Nina Simone",
      ALBUM_TITLE: "Pastel Blues",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Prince and the Revolution",
      ALBUM_TITLE: "Purple Rain",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Fugazi",
      ALBUM_TITLE: "Repeater",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Johnny Cash",
      ALBUM_TITLE: "At Folsom Prison",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "The Velvet Underground & Nico",
      ALBUM_TITLE: "The Velvet Underground & Nico",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Burial",
      ALBUM_TITLE: "Rival Dealer",
      SCORE: 5
    },
    {
      ARTISTS: "Hellfyre Club",
      ALBUM_TITLE: "Dorner vs. Tookie",
      SCORE: 7
    },
    {
      ARTISTS: "Future Of The Left",
      ALBUM_TITLE: "How To Stop Your Brain In An Accident",
      SCORE: 8
    },
    {
      ARTISTS: "Childish Gambino",
      ALBUM_TITLE: "Because The Internet",
      SCORE: 5
    },
    {
      ARTISTS: "Gesaffelstein",
      ALBUM_TITLE: "Aleph",
      SCORE: 5
    },
    {
      ARTISTS: "Arabrot",
      ALBUM_TITLE: "Arabrot",
      SCORE: 6
    },
    {
      ARTISTS: "Hopsin",
      ALBUM_TITLE: "Knock Madness",
      SCORE: 3
    },
    {
      ARTISTS: "Da Mafia 6ix",
      ALBUM_TITLE: "6ix Commandments",
      SCORE: 8
    },
    {
      ARTISTS: "Sadsic",
      ALBUM_TITLE: "Sadsic",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Quelle Chris",
      ALBUM_TITLE: "Ghost At The Finish Line",
      SCORE: 7
    },
    {
      ARTISTS: "Blood Orange",
      ALBUM_TITLE: "Cupid Deluxe",
      SCORE: 2
    },
    {
      ARTISTS: "Sky Ferreira",
      ALBUM_TITLE: "Night Time, My Time",
      SCORE: 4
    },
    {
      ARTISTS: "Soupcans",
      ALBUM_TITLE: "Parasite Brain",
      SCORE: 7
    },
    {
      ARTISTS: "Moonface",
      ALBUM_TITLE: "Julia With Blue Jeans On",
      SCORE: 7
    },
    {
      ARTISTS: "M.I.A.",
      ALBUM_TITLE: "Matangi",
      SCORE: 7
    },
    {
      ARTISTS: "Daniel Avery",
      ALBUM_TITLE: "Drone Logic",
      SCORE: 8
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Government Plates",
      SCORE: 6
    },
    {
      ARTISTS: "Lady Gaga",
      ALBUM_TITLE: "Artpop",
      SCORE: 6
    },
    {
      ARTISTS: "Cara Neir",
      ALBUM_TITLE: "Portals To A Better, Dead World",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson & Party Supplies",
      ALBUM_TITLE: "Blue Chips 2",
      SCORE: 6
    },
    {
      ARTISTS: "The Debauchees",
      ALBUM_TITLE: "Big Machines and Peculiar Beings",
      SCORE: 7
    },
    {
      ARTISTS: "Eminem",
      ALBUM_TITLE: "The Marshall Mathers LP 2",
      SCORE: 7
    },
    {
      ARTISTS: "Black Milk",
      ALBUM_TITLE: "No Poison No Paradise",
      SCORE: 8
    },
    {
      ARTISTS: "Four Tet",
      ALBUM_TITLE: "Beautiful Rewind",
      SCORE: 7
    },
    {
      ARTISTS: "Sisu",
      ALBUM_TITLE: "Blood Tears",
      SCORE: 6
    },
    {
      ARTISTS: "Arcade Fire",
      ALBUM_TITLE: "Reflektor",
      SCORE: 5
    },
    {
      ARTISTS: "Glasser",
      ALBUM_TITLE: "Interiors",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Toxic Holocaust",
      ALBUM_TITLE: "Chemistry of Consciousness",
      SCORE: 6
    },
    {
      ARTISTS: "Cage The Elephant",
      ALBUM_TITLE: "Melophobia",
      SCORE: 8
    },
    {
      ARTISTS: "AFI",
      ALBUM_TITLE: "Burials",
      SCORE: 2
    },
    {
      ARTISTS: "Shad",
      ALBUM_TITLE: "Flying Colours",
      SCORE: 7
    },
    {
      ARTISTS: "Armand Hammer",
      ALBUM_TITLE: "Race Music",
      SCORE: 8
    },
    {
      ARTISTS: "Cults",
      ALBUM_TITLE: "Static",
      SCORE: 4
    },
    {
      ARTISTS: "The Dismemberment Plan",
      ALBUM_TITLE: "Uncanny Valley",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Tim Hecker",
      ALBUM_TITLE: "Virgins",
      SCORE: 9
    },
    {
      ARTISTS: "CHVRCHES",
      ALBUM_TITLE: "The Bones of What You Believe",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Oranssi Pazuzu",
      ALBUM_TITLE: "Valonielu",
      SCORE: 6
    },
    {
      ARTISTS: "Melt-Banana",
      ALBUM_TITLE: "Fetch",
      SCORE: 9
    },
    {
      ARTISTS: "Fuzz",
      ALBUM_TITLE: "Fuzz",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Pusha T",
      ALBUM_TITLE: "My Name Is My Name",
      SCORE: 6
    },
    {
      ARTISTS: "Haim",
      ALBUM_TITLE: "Days Are Gone",
      SCORE: "NONE"
    },
    {
      ARTISTS: "of Montreal",
      ALBUM_TITLE: "Lousy With Sylvianbriar",
      SCORE: 8
    },
    {
      ARTISTS: "Darkside",
      ALBUM_TITLE: "Psychic",
      SCORE: 8
    },
    {
      ARTISTS: "Haunted Horses",
      ALBUM_TITLE: "Watcher",
      SCORE: 7
    },
    {
      ARTISTS: "Lorde",
      ALBUM_TITLE: "Pure Heroine",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Danny Brown",
      ALBUM_TITLE: "Old",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      ALBUM_TITLE: "R Plus Seven",
      SCORE: 6
    },
    {
      ARTISTS: "Mazzy Star",
      ALBUM_TITLE: "Seasons Of Your Day",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Touché Amoré",
      ALBUM_TITLE: "Is Survived By",
      SCORE: 8
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "Nothing Was The Same",
      SCORE: 5
    },
    {
      ARTISTS: "Bill Callahan",
      ALBUM_TITLE: "Dream River",
      SCORE: 8
    },
    {
      ARTISTS: "Machinedrum",
      ALBUM_TITLE: "Vapor City",
      SCORE: 7
    },
    {
      ARTISTS: "Flatbush Zombies",
      ALBUM_TITLE: "BetterOffDEAD",
      SCORE: 8
    },
    {
      ARTISTS: "Kayo Dot",
      ALBUM_TITLE: "Hubardo",
      SCORE: 7
    },
    {
      ARTISTS: "MGMT",
      ALBUM_TITLE: "MGMT",
      SCORE: 6
    },
    {
      ARTISTS: "Crystal Stilts",
      ALBUM_TITLE: "Nature Noir",
      SCORE: 6
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "Kiss Land",
      SCORE: 5
    },
    {
      ARTISTS: "Denzel Curry",
      ALBUM_TITLE: "Nostalgic 64",
      SCORE: 7
    },
    {
      ARTISTS: "Janelle Monáe",
      ALBUM_TITLE: "The Electric Lady",
      SCORE: 7
    },
    {
      ARTISTS: "Factory Floor",
      ALBUM_TITLE: "Factory Floor",
      SCORE: 6
    },
    {
      ARTISTS: "Holy Ghost!",
      ALBUM_TITLE: "Dynamics",
      SCORE: 7
    },
    {
      ARTISTS: "Chelsea Wolfe",
      ALBUM_TITLE: "Pain Is Beauty",
      SCORE: 8
    },
    {
      ARTISTS: "Nine Inch Nails",
      ALBUM_TITLE: "Hesitation Marks",
      SCORE: 6
    },
    {
      ARTISTS: "Arctic Monkeys",
      ALBUM_TITLE: "AM",
      SCORE: 3
    },
    {
      ARTISTS: "Dizzy Wright",
      ALBUM_TITLE: "The Golden Age",
      SCORE: 5
    },
    {
      ARTISTS: "Holograms",
      ALBUM_TITLE: "Forever",
      SCORE: 6
    },
    {
      ARTISTS: "Jonathan Rado",
      ALBUM_TITLE: "Law & Order",
      SCORE: 4
    },
    {
      ARTISTS: "YC The Cynic",
      ALBUM_TITLE: "GNK",
      SCORE: 8
    },
    {
      ARTISTS: "Gorguts",
      ALBUM_TITLE: "Colored Sands",
      SCORE: 8
    },
    {
      ARTISTS: "The Underachievers",
      ALBUM_TITLE: "The Lords of Flatbush",
      SCORE: 5
    },
    {
      ARTISTS: "Dawn of Midi",
      ALBUM_TITLE: "Dysnomia",
      SCORE: 5
    },
    {
      ARTISTS: "King Krule",
      ALBUM_TITLE: "6 Feet Beneath The Moon",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Ferg",
      ALBUM_TITLE: "Trap Lord",
      SCORE: 7
    },
    {
      ARTISTS: "Earl Sweatshirt",
      ALBUM_TITLE: "Doris",
      SCORE: 6
    },
    {
      ARTISTS: "Julia Holter",
      ALBUM_TITLE: "Loud City Song",
      SCORE: 8
    },
    {
      ARTISTS: "No Age",
      ALBUM_TITLE: "An Object",
      SCORE: 6
    },
    {
      ARTISTS: "Washed Out",
      ALBUM_TITLE: "Paracosm",
      SCORE: 6
    },
    {
      ARTISTS: "TOAD",
      ALBUM_TITLE: "Endless Night",
      SCORE: 7
    },
    {
      ARTISTS: "Modern Life Is War",
      ALBUM_TITLE: "Fever Hunting",
      SCORE: 7
    },
    {
      ARTISTS: "Tech N9ne",
      ALBUM_TITLE: "Something Else",
      SCORE: 4
    },
    {
      ARTISTS: "Dead In The Dirt",
      ALBUM_TITLE: "The Blind Hole",
      SCORE: 6
    },
    {
      ARTISTS: "Candy Claws",
      ALBUM_TITLE: "Ceres & Calypso In The Deep Time",
      SCORE: 7
    },
    {
      ARTISTS: "Sampha",
      ALBUM_TITLE: "DUAL",
      SCORE: "NONE"
    },
    {
      ARTISTS: "AlunaGeorge",
      ALBUM_TITLE: "Body Music",
      SCORE: 7
    },
    {
      ARTISTS: "All Pigs Must Die",
      ALBUM_TITLE: "Nothing Violates This Nature",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Ka",
      ALBUM_TITLE: "The Night's Gambit",
      SCORE: 8
    },
    {
      ARTISTS: "Edward Sharpe & The Magnetic Zeros",
      ALBUM_TITLE: "Edward Sharpe & The Magnetic Zeros",
      SCORE: 3
    },
    {
      ARTISTS: "Arca",
      ALBUM_TITLE: "&&&&&",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Fuck Buttons",
      ALBUM_TITLE: "Slow Focus",
      SCORE: 6
    },
    {
      ARTISTS: "Stone Titan",
      ALBUM_TITLE: "Scratch N' Sniff (MINI)",
      SCORE: 8
    },
    {
      ARTISTS: "letlive.",
      ALBUM_TITLE: "The Blackest Beautiful",
      SCORE: 5
    },
    {
      ARTISTS: "Lycus",
      ALBUM_TITLE: "Tempest",
      SCORE: 7
    },
    {
      ARTISTS: "Yung Lean",
      ALBUM_TITLE: "Unknown Death 2002",
      SCORE: "bread"
    },
    {
      ARTISTS: "Milo",
      ALBUM_TITLE: "Cavalcade",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mariam The Believer",
      ALBUM_TITLE: "Blood Donation",
      SCORE: 8
    },
    {
      ARTISTS: "Ghostpoet",
      ALBUM_TITLE: "Some Say I So I Say Light",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Jagwar Ma",
      ALBUM_TITLE: "Howlin",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Autopsy",
      ALBUM_TITLE: "The Headless Ritual",
      SCORE: 6
    },
    {
      ARTISTS: "James Holden",
      ALBUM_TITLE: "The Inheritors",
      SCORE: 7
    },
    {
      ARTISTS: "Jay-Z",
      ALBUM_TITLE: "Magna Carta... Holy Grail",
      SCORE: 6
    },
    {
      ARTISTS: "Billy Woods",
      ALBUM_TITLE: "Dour Candy",
      SCORE: 7
    },
    {
      ARTISTS: "Run The Jewels",
      ALBUM_TITLE: "Run The Jewels",
      SCORE: 8
    },
    {
      ARTISTS: "Joey Bada$$",
      ALBUM_TITLE: "Summer Knights",
      SCORE: 7
    },
    {
      ARTISTS: "Jarren Benton",
      ALBUM_TITLE: "My Grandmother's Basement",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Kyary Pamyu Pamyu",
      ALBUM_TITLE: "Nandacollection",
      SCORE: 8
    },
    {
      ARTISTS: "Daftside",
      ALBUM_TITLE: "Random Access Memories Memories",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Locrian",
      ALBUM_TITLE: "Return to Annihilation",
      SCORE: 6
    },
    {
      ARTISTS: "Black Sabbath",
      ALBUM_TITLE: 13,
      SCORE: "NONE"
    },
    {
      ARTISTS: "Smith Westerns",
      ALBUM_TITLE: "Soft Will",
      SCORE: 8
    },
    {
      ARTISTS: "J. Cole",
      ALBUM_TITLE: "Born Sinner",
      SCORE: 5
    },
    {
      ARTISTS: "Havok",
      ALBUM_TITLE: "Unnatural Selection",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "Watching Movies With the Sound Off",
      SCORE: 6
    },
    {
      ARTISTS: "Zomby",
      ALBUM_TITLE: "With Love",
      SCORE: 5
    },
    {
      ARTISTS: "Sigur Rós",
      ALBUM_TITLE: "Kveikur",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Power Trip",
      ALBUM_TITLE: "Manifest Decimation",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Melt Yourself Down",
      ALBUM_TITLE: "Melt Yourself Down",
      SCORE: 7
    },
    {
      ARTISTS: "Kanye West",
      ALBUM_TITLE: "Yeezus",
      SCORE: 5
    },
    {
      ARTISTS: "Jon Hopkins",
      ALBUM_TITLE: "Immunity",
      SCORE: 8
    },
    {
      ARTISTS: "Mount Kimbie",
      ALBUM_TITLE: "Cold Spring Fault Less Youth",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Mr. Muthafuckin' eXquire",
      ALBUM_TITLE: "Kismet",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson",
      ALBUM_TITLE: "Saaab Stories",
      SCORE: "f"
    },
    {
      ARTISTS: "Young Fathers",
      ALBUM_TITLE: "Tape Two",
      SCORE: 8
    },
    {
      ARTISTS: "Boards of Canada",
      ALBUM_TITLE: "Tomorrow's Harvest",
      SCORE: 6
    },
    {
      ARTISTS: "Primal Scream",
      ALBUM_TITLE: "More Light",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Pharmakon",
      ALBUM_TITLE: "Abandon",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Thundercat",
      ALBUM_TITLE: "Apocalypse",
      SCORE: 3
    },
    {
      ARTISTS: "Laura Marling",
      ALBUM_TITLE: "Once I Was An Eagle",
      SCORE: 7
    },
    {
      ARTISTS: "CX KiDTRONiK",
      ALBUM_TITLE: "KRAK ATTACK 2: THE BALLAD OF ELLI SKIFF",
      SCORE: 6
    },
    {
      ARTISTS: "Disclosure",
      ALBUM_TITLE: "Settle",
      SCORE: 7
    },
    {
      ARTISTS: "Queens of the Stone Age",
      ALBUM_TITLE: "...Like Clockwork",
      SCORE: 9
    },
    {
      ARTISTS: "Bibio",
      ALBUM_TITLE: "Silver Wilkinson",
      SCORE: 7
    },
    {
      ARTISTS: "Deafheaven",
      ALBUM_TITLE: "Sunbather",
      SCORE: 8
    },
    {
      ARTISTS: "Quasimoto",
      ALBUM_TITLE: "Yessir Whatever",
      SCORE: 7
    },
    {
      ARTISTS: "Baths",
      ALBUM_TITLE: "Obsidian",
      SCORE: 6
    },
    {
      ARTISTS: "Travis Scott",
      ALBUM_TITLE: "Owl Pharaoh",
      SCORE: 3
    },
    {
      ARTISTS:
        "The World Is A Beautiful Place And I Am No Longer Afraid To Die",
      ALBUM_TITLE: "Whenever, If Ever",
      SCORE: 7
    },
    {
      ARTISTS: "Classixx",
      ALBUM_TITLE: "Hanging Gardens",
      SCORE: 6
    },
    {
      ARTISTS: "This Routine Is Hell",
      ALBUM_TITLE: "Howl",
      SCORE: 8
    },
    {
      ARTISTS: "Anamanaguchi",
      ALBUM_TITLE: "Endless Fantasy",
      SCORE: 6
    },
    {
      ARTISTS: "The National",
      ALBUM_TITLE: "Trouble Will Find Me",
      SCORE: 4
    },
    {
      ARTISTS: "Daft Punk",
      ALBUM_TITLE: "Random Access Memories",
      SCORE: 8
    },
    {
      ARTISTS: "The Dillinger Escape Plan",
      ALBUM_TITLE: "One Of Us Is The Killer",
      SCORE: 8
    },
    {
      ARTISTS: "Co La",
      ALBUM_TITLE: "Moody Coup",
      SCORE: 6
    },
    {
      ARTISTS: "Vampire Weekend",
      ALBUM_TITLE: "Modern Vampires of the City",
      SCORE: 7
    },
    {
      ARTISTS: "Charli XCX",
      ALBUM_TITLE: "True Romance",
      SCORE: 3
    },
    {
      ARTISTS: "The Uncluded",
      ALBUM_TITLE: "Hokey Fright",
      SCORE: 7
    },
    {
      ARTISTS: "Phoenix",
      ALBUM_TITLE: "Bankrupt!",
      SCORE: 5
    },
    {
      ARTISTS: "Little Women",
      ALBUM_TITLE: "Lung",
      SCORE: 6
    },
    {
      ARTISTS: "Chance The Rapper",
      ALBUM_TITLE: "Acid Rap",
      SCORE: 6
    },
    {
      ARTISTS: "Altar of Plagues",
      ALBUM_TITLE: "Teethed Glory and Injury",
      SCORE: 9
    },
    {
      ARTISTS: "R.A. The Rugged Man",
      ALBUM_TITLE: "Legends Never Die",
      SCORE: 6
    },
    {
      ARTISTS: "Savages",
      ALBUM_TITLE: "Silence Yourself",
      SCORE: 8
    },
    {
      ARTISTS: "The Haxan Cloak",
      ALBUM_TITLE: "Excavation",
      SCORE: 8
    },
    {
      ARTISTS: "Jenny Hval",
      ALBUM_TITLE: "Innocence Is Kinky",
      SCORE: 7
    },
    {
      ARTISTS: "Iggy And The Stooges",
      ALBUM_TITLE: "Ready To Die",
      SCORE: 4
    },
    {
      ARTISTS: "Colin Stetson",
      ALBUM_TITLE: "New History Warfare Vol. 3: To See More Light",
      SCORE: 7
    },
    {
      ARTISTS: "Deerhunter",
      ALBUM_TITLE: "Monomania",
      SCORE: 6
    },
    {
      ARTISTS: "Yeah Yeah Yeahs",
      ALBUM_TITLE: "Mosquito",
      SCORE: 5
    },
    {
      ARTISTS: "Soap&Skin",
      ALBUM_TITLE: "Sugarbread 7",
      SCORE: 7
    },
    {
      ARTISTS: "Ghostface Killah and Adrian Younge",
      ALBUM_TITLE: "Twelve Reasons To Die",
      SCORE: 8
    },
    {
      ARTISTS: "Kid Cudi",
      ALBUM_TITLE: "Indicud",
      SCORE: 2
    },
    {
      ARTISTS: "Kurt Vile",
      ALBUM_TITLE: "Wakin On A Pretty Daze",
      SCORE: 8
    },
    {
      ARTISTS: "Phosphorescent",
      ALBUM_TITLE: "Muchacho",
      SCORE: 6
    },
    {
      ARTISTS: "Thee Oh Sees",
      ALBUM_TITLE: "Floating Coffin",
      SCORE: 5
    },
    {
      ARTISTS: "Ghost",
      ALBUM_TITLE: "Infestissumam",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "King Remembered In Time",
      SCORE: 7
    },
    {
      ARTISTS: "Makthaverskan",
      ALBUM_TITLE: "II",
      SCORE: 7
    },
    {
      ARTISTS: "The Flaming Lips",
      ALBUM_TITLE: "The Terror",
      SCORE: 6
    },
    {
      ARTISTS: "Bring Me The Horizon",
      ALBUM_TITLE: "Sempiternal",
      SCORE: 4
    },
    {
      ARTISTS: "James Blake",
      ALBUM_TITLE: "Overgrown",
      SCORE: 7
    },
    {
      ARTISTS: "The Knife",
      ALBUM_TITLE: "Shaking The Habitual",
      SCORE: 9
    },
    {
      ARTISTS: "The Black Heart Rebellion",
      ALBUM_TITLE: "Har Nevo",
      SCORE: 7
    },
    {
      ARTISTS: "The Mary Onettes",
      ALBUM_TITLE: "Hit The Waves",
      SCORE: 7
    },
    {
      ARTISTS: "Tyler, The Creator",
      ALBUM_TITLE: "Wolf",
      SCORE: 6
    },
    {
      ARTISTS: "Wavves",
      ALBUM_TITLE: "Afraid of Heights",
      SCORE: 6
    },
    {
      ARTISTS: "Lapalux",
      ALBUM_TITLE: "Nostalchic",
      SCORE: 7
    },
    {
      ARTISTS: "Bonobo",
      ALBUM_TITLE: "The North Borders",
      SCORE: 6
    },
    {
      ARTISTS: "Kvelertak",
      ALBUM_TITLE: "Meir",
      SCORE: 8
    },
    {
      ARTISTS: "The Drones",
      ALBUM_TITLE: "I See Seaweed",
      SCORE: 8
    },
    {
      ARTISTS: "KEN mode",
      ALBUM_TITLE: "Entrench",
      SCORE: 7
    },
    {
      ARTISTS: "Justin Timberlake",
      ALBUM_TITLE: "The 20/20 Experience",
      SCORE: 5
    },
    {
      ARTISTS: "The Game",
      ALBUM_TITLE: "The Next Day",
      SCORE: 7
    },
    {
      ARTISTS: "The Strokes",
      ALBUM_TITLE: "Comedown Machine",
      SCORE: 5
    },
    {
      ARTISTS: "Dope Body",
      ALBUM_TITLE: "Saturday",
      SCORE: 7
    },
    {
      ARTISTS: "Nails",
      ALBUM_TITLE: "Abandon All Life",
      SCORE: 7
    },
    {
      ARTISTS: "Rhye",
      ALBUM_TITLE: "Woman",
      SCORE: 6
    },
    {
      ARTISTS: "Autechre",
      ALBUM_TITLE: "Exai",
      SCORE: 8
    },
    {
      ARTISTS: "The Men",
      ALBUM_TITLE: "New Moon",
      SCORE: 4
    },
    {
      ARTISTS: "Steven Wilson",
      ALBUM_TITLE: "The Raven That Refused To Sing (And Other Stories)",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      ALBUM_TITLE: "Laid Out",
      SCORE: 8
    },
    {
      ARTISTS: "Czarface",
      ALBUM_TITLE: "Czarface",
      SCORE: 6
    },
    {
      ARTISTS: "Darkthrone",
      ALBUM_TITLE: "The Underground Resistance",
      SCORE: 6
    },
    {
      ARTISTS: "STRFKR",
      ALBUM_TITLE: "Miracle Mile",
      SCORE: 3
    },
    {
      ARTISTS: "Grave Babies",
      ALBUM_TITLE: "Crusher",
      SCORE: 7
    },
    {
      ARTISTS: "Clipping",
      ALBUM_TITLE: "Midcity",
      SCORE: 8
    },
    {
      ARTISTS: "Atoms For Peace",
      ALBUM_TITLE: "Amok",
      SCORE: 7
    },
    {
      ARTISTS: "Iceage",
      ALBUM_TITLE: "You're Nothing",
      SCORE: 8
    },
    {
      ARTISTS: "Nick Cave and The Bad Seeds",
      ALBUM_TITLE: "Push The Sky Away",
      SCORE: 5
    },
    {
      ARTISTS: "Beach Fossils",
      ALBUM_TITLE: "Clash The Truth",
      SCORE: 8
    },
    {
      ARTISTS: "Portal",
      ALBUM_TITLE: "Vexovoid",
      SCORE: 5
    },
    {
      ARTISTS: "Grouper",
      ALBUM_TITLE: "The Man Who Died In His Boat",
      SCORE: 7
    },
    {
      ARTISTS: "Pissed Jeans",
      ALBUM_TITLE: "Honeys",
      SCORE: 7
    },
    {
      ARTISTS: "Foals",
      ALBUM_TITLE: "Holy Fire",
      SCORE: 5
    },
    {
      ARTISTS: "Veronica Falls",
      ALBUM_TITLE: "Waiting For Something To Happen",
      SCORE: 6
    },
    {
      ARTISTS: "The Underachievers",
      ALBUM_TITLE: "Indigoism",
      SCORE: 7
    },
    {
      ARTISTS: "My Bloody Valentine",
      ALBUM_TITLE: "MBV",
      SCORE: 8
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      ALBUM_TITLE: "II",
      SCORE: 7
    },
    {
      ARTISTS: "Dumbo Gets Mad",
      ALBUM_TITLE: "Quantum Leap",
      SCORE: 6
    },
    {
      ARTISTS: "Cakes Da Killa",
      ALBUM_TITLE: "The Eulogy",
      SCORE: 8
    },
    {
      ARTISTS: "Tegan and Sara",
      ALBUM_TITLE: "Heartthrob",
      SCORE: 3
    },
    {
      ARTISTS: "Tomahawk",
      ALBUM_TITLE: "Oddfellows",
      SCORE: 6
    },
    {
      ARTISTS: "California X",
      ALBUM_TITLE: "California X",
      SCORE: 6
    },
    {
      ARTISTS: "Local Natives",
      ALBUM_TITLE: "Hummingbird",
      SCORE: 5
    },
    {
      ARTISTS: "Buke and Gase",
      ALBUM_TITLE: "General Dome",
      SCORE: 8
    },
    {
      ARTISTS: "Comadre",
      ALBUM_TITLE: "Comadre",
      SCORE: 8
    },
    {
      ARTISTS: "TTNG (This Town Needs Guns)",
      ALBUM_TITLE: "13.0.0.0.0",
      SCORE: 7
    },
    {
      ARTISTS: "Nosaj Thing",
      ALBUM_TITLE: "Home",
      SCORE: 5
    },
    {
      ARTISTS: "Cult of Luna",
      ALBUM_TITLE: "Vertikal",
      SCORE: 5
    },
    {
      ARTISTS: "Villagers",
      ALBUM_TITLE: "{Awayland}",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      ALBUM_TITLE: "We Are the 21st Century Ambassadors of Peace & Magic",
      SCORE: 8
    },
    {
      ARTISTS: "Yo La Tengo",
      ALBUM_TITLE: "Fade",
      SCORE: 7
    },
    {
      ARTISTS: "Toro Y Moi",
      ALBUM_TITLE: "Anything In Return",
      SCORE: 4
    },
    {
      ARTISTS: "The Progressive Era",
      ALBUM_TITLE: "PEEP: The aPROcalypse",
      SCORE: 8
    },
    {
      ARTISTS: "Circles Takes the Square",
      ALBUM_TITLE: "Decompositions: Volume Number One",
      SCORE: 6
    },
    {
      ARTISTS: "A$AP Rocky",
      ALBUM_TITLE: "Long.Live.A$AP",
      SCORE: 7
    },
    {
      ARTISTS: "Milo",
      ALBUM_TITLE: "Things That Happen At Day / Things That Happen At Night",
      SCORE: 8
    },
    {
      ARTISTS: "Miles Davis",
      ALBUM_TITLE: "Bitches Brew",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "My Bloody Valentine",
      ALBUM_TITLE: "Loveless",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "King Crimson",
      ALBUM_TITLE: "In the Court of the Crimson King",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Dead Kennedys",
      ALBUM_TITLE: "Plastic Surgery Disasters",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Madvillain",
      ALBUM_TITLE: "Madvillainy",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Sufjan Stevens",
      ALBUM_TITLE: "Silver & Gold",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Lianne La Havas",
      ALBUM_TITLE: "Is Your Love Big Enough?",
      SCORE: 7
    },
    {
      ARTISTS: "Burial",
      ALBUM_TITLE: "Truant / Rough Sleeper",
      SCORE: 8
    },
    {
      ARTISTS: "Chief Keef",
      ALBUM_TITLE: "Finally Rich",
      SCORE: 4
    },
    {
      ARTISTS: "The Game",
      ALBUM_TITLE: "Jesus Piece",
      SCORE: 5
    },
    {
      ARTISTS: "Miguel",
      ALBUM_TITLE: "Kaleidoscope Dream",
      SCORE: 6
    },
    {
      ARTISTS: "P.O.S",
      ALBUM_TITLE: "We Don't Even Live Here",
      SCORE: 5
    },
    {
      ARTISTS: "Roomful of Teeth",
      ALBUM_TITLE: "Roomful of Teeth",
      SCORE: 7
    },
    {
      ARTISTS: "Dragged Into Sunlight",
      ALBUM_TITLE: "Widowmaker",
      SCORE: 6
    },
    {
      ARTISTS: "Scott Walker",
      ALBUM_TITLE: "Bish Bosch",
      SCORE: 7
    },
    {
      ARTISTS: "Wu-Block",
      ALBUM_TITLE: "Wu-Block",
      SCORE: 6
    },
    {
      ARTISTS: "Code Orange Kids",
      ALBUM_TITLE: "Love Is Love // Return To Dust",
      SCORE: 6
    },
    {
      ARTISTS: "Heems",
      ALBUM_TITLE: "Wild Water Kingdom",
      SCORE: 5
    },
    {
      ARTISTS: "Macintosh Plus",
      ALBUM_TITLE: "Floral Shoppe",
      SCORE: 4
    },
    {
      ARTISTS: "Angel Olsen",
      ALBUM_TITLE: "Half Way Home",
      SCORE: 7
    },
    {
      ARTISTS: "Bad Brains",
      ALBUM_TITLE: "Into the Future",
      SCORE: 3
    },
    {
      ARTISTS: "Tim Hecker and Daniel Lopatin",
      ALBUM_TITLE: "Instrumental Tourist",
      SCORE: 5
    },
    {
      ARTISTS: "The Evens",
      ALBUM_TITLE: "The Odds",
      SCORE: 8
    },
    {
      ARTISTS: "Captain Murphy",
      ALBUM_TITLE: "Duality",
      SCORE: 7
    },
    {
      ARTISTS: "Holly Herndon",
      ALBUM_TITLE: "Movement",
      SCORE: 7
    },
    {
      ARTISTS: "Goat",
      ALBUM_TITLE: "World Music",
      SCORE: 5
    },
    {
      ARTISTS: "Ratking",
      ALBUM_TITLE: "Wiki93",
      SCORE: 5
    },
    {
      ARTISTS: "Vessel",
      ALBUM_TITLE: "Order of Noise",
      SCORE: 7
    },
    {
      ARTISTS: "Action Bronson and the Alchemist",
      ALBUM_TITLE: "Rare Chandeliers",
      SCORE: 8
    },
    {
      ARTISTS: "Deftones",
      ALBUM_TITLE: "Koi No Yokan",
      SCORE: 6
    },
    {
      ARTISTS: "Jessica Pratt",
      ALBUM_TITLE: "Jessica Pratt",
      SCORE: 7
    },
    {
      ARTISTS: "Crystal Castles",
      ALBUM_TITLE: "(III)",
      SCORE: 4
    },
    {
      ARTISTS: "Brian Eno",
      ALBUM_TITLE: "LUX",
      SCORE: 6
    },
    {
      ARTISTS: "The Secret",
      ALBUM_TITLE: "Agnus Dei",
      SCORE: 5
    },
    {
      ARTISTS: "Bat For Lashes",
      ALBUM_TITLE: "The Haunted Man",
      SCORE: 7
    },
    {
      ARTISTS: "Titus Andronicus",
      ALBUM_TITLE: "Local Business",
      SCORE: 6
    },
    {
      ARTISTS: "Neurosis",
      ALBUM_TITLE: "Honor Found In Decay",
      SCORE: 7
    },
    {
      ARTISTS: "Pile",
      ALBUM_TITLE: "Dripping",
      SCORE: 8
    },
    {
      ARTISTS: "The Soft Moon",
      ALBUM_TITLE: "Zeros",
      SCORE: 4
    },
    {
      ARTISTS: "Black Moth Super Rainbow",
      ALBUM_TITLE: "Cobra Juicy",
      SCORE: 5
    },
    {
      ARTISTS: "The Bad Plus",
      ALBUM_TITLE: "Made Possible",
      SCORE: 8
    },
    {
      ARTISTS: "Mac DeMarco",
      ALBUM_TITLE: 2,
      SCORE: 6
    },
    {
      ARTISTS: "Andy Stott",
      ALBUM_TITLE: "Luxury Problems",
      SCORE: 7
    },
    {
      ARTISTS: "Hoax",
      ALBUM_TITLE: "3rd",
      SCORE: 6
    },
    {
      ARTISTS: "Chelsea Wolfe",
      ALBUM_TITLE: "Unknown Rooms: A Collection of Acoustic Songs",
      SCORE: 7
    },
    {
      ARTISTS: "Pig Destroyer",
      ALBUM_TITLE: "Book Burner",
      SCORE: 6
    },
    {
      ARTISTS: "3:33",
      ALBUM_TITLE: "In the Middle of Infinity",
      SCORE: 6
    },
    {
      ARTISTS: "Karriem Riggins",
      ALBUM_TITLE: "Alone Together",
      SCORE: 8
    },
    {
      ARTISTS: "Kendrick Lamar",
      ALBUM_TITLE: "good kid, m.A.A.d. city",
      SCORE: 9
    },
    {
      ARTISTS: "Blu & Exile",
      ALBUM_TITLE: "Give Me My Flowers While I Can Still Smell Them",
      SCORE: 7
    },
    {
      ARTISTS: "Between the Buried and Me",
      ALBUM_TITLE: "The Parallax II: Future Sequence",
      SCORE: 4
    },
    {
      ARTISTS: "Daphni",
      ALBUM_TITLE: "Jiaolong",
      SCORE: 6
    },
    {
      ARTISTS: "John Frusciante",
      ALBUM_TITLE: "PBX Funicular Intaglio Zone",
      SCORE: 2
    },
    {
      ARTISTS: "Converge",
      ALBUM_TITLE: "All We Love We Leave Behind",
      SCORE: 8
    },
    {
      ARTISTS: "Macklemore and Ryan Lewis",
      ALBUM_TITLE: "The Heist",
      SCORE: 7
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      ALBUM_TITLE: "'Allelujah! Don't Bend! Ascend!",
      SCORE: 8
    },
    {
      ARTISTS: "The Mountain Goats",
      ALBUM_TITLE: "Transcendental Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Tame Impala",
      ALBUM_TITLE: "Lonerism",
      SCORE: 8
    },
    {
      ARTISTS: "Mellowhype",
      ALBUM_TITLE: "Numbers",
      SCORE: 3
    },
    {
      ARTISTS: "METZ",
      ALBUM_TITLE: "METZ",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "NO LOVE DEEP WEB",
      SCORE: 8
    },
    {
      ARTISTS: "Alt-J",
      ALBUM_TITLE: "An Awesome Wave",
      SCORE: 8
    },
    {
      ARTISTS: "Muse",
      ALBUM_TITLE: "The 2nd Law",
      SCORE: 3
    },
    {
      ARTISTS: "Efterklang",
      ALBUM_TITLE: "Piramida",
      SCORE: 5
    },
    {
      ARTISTS: "Mumford & Sons",
      ALBUM_TITLE: "Babel",
      SCORE: 6
    },
    {
      ARTISTS: "Deerhoof",
      ALBUM_TITLE: "Breakup Song",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Flying Lotus",
      ALBUM_TITLE: "Until the Quiet Comes",
      SCORE: 7
    },
    {
      ARTISTS: "Dark Time Sunshine",
      ALBUM_TITLE: "ANX",
      SCORE: 7
    },
    {
      ARTISTS: "Lupe Fiasco",
      ALBUM_TITLE: "Food & Liquor 2: The Great American Rap Album Pt. 1",
      SCORE: 5
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Cruel Summer",
      SCORE: "NONE"
    },
    {
      ARTISTS: "The Gaslamp Killer",
      ALBUM_TITLE: "Breakthrough",
      SCORE: 8
    },
    {
      ARTISTS: "Title Fight",
      ALBUM_TITLE: "Floral Green",
      SCORE: 7
    },
    {
      ARTISTS: "How To Dress Well",
      ALBUM_TITLE: "Total Loss",
      SCORE: 6
    },
    {
      ARTISTS: "Dinosaur Jr.",
      ALBUM_TITLE: "I Bet On Sky",
      SCORE: 7
    },
    {
      ARTISTS: "David Byrne & St. Vincent",
      ALBUM_TITLE: "Love This Giant",
      SCORE: 7
    },
    {
      ARTISTS: "Grizzly Bear",
      ALBUM_TITLE: "Shields",
      SCORE: 6
    },
    {
      ARTISTS: "Woods",
      ALBUM_TITLE: "Bend Beyond",
      SCORE: 7
    },
    {
      ARTISTS: "Ondatrópica",
      ALBUM_TITLE: "Ondatrópica",
      SCORE: 9
    },
    {
      ARTISTS: "Krallice",
      ALBUM_TITLE: "Years Past Matter",
      SCORE: 8
    },
    {
      ARTISTS: "The xx",
      ALBUM_TITLE: "Coexist",
      SCORE: 4
    },
    {
      ARTISTS: "Mount Eerie",
      ALBUM_TITLE: "Ocean Roar",
      SCORE: 5
    },
    {
      ARTISTS: "Dan Deacon",
      ALBUM_TITLE: "America",
      SCORE: 5
    },
    {
      ARTISTS: "Jens Lekman",
      ALBUM_TITLE: "I Know What Love Isn't",
      SCORE: 7
    },
    {
      ARTISTS: "Animal Collective",
      ALBUM_TITLE: "Centipede Hz",
      SCORE: 6
    },
    {
      ARTISTS: "Murder Construct",
      ALBUM_TITLE: "Results",
      SCORE: 8
    },
    {
      ARTISTS: "Slaughterhouse",
      ALBUM_TITLE: "Welcome to: Our House",
      SCORE: 3
    },
    {
      ARTISTS: "Holy Other",
      ALBUM_TITLE: "Held",
      SCORE: 6
    },
    {
      ARTISTS: "Four Tet",
      ALBUM_TITLE: "Pink",
      SCORE: 7
    },
    {
      ARTISTS: "A$AP Mob",
      ALBUM_TITLE: "Lord$ Never Worry",
      SCORE: 3
    },
    {
      ARTISTS: "Swans",
      ALBUM_TITLE: "The Seer",
      SCORE: 8
    },
    {
      ARTISTS: "The Faceless",
      ALBUM_TITLE: "Autotheism",
      SCORE: 5
    },
    {
      ARTISTS: "Matthew Dear",
      ALBUM_TITLE: "Beams",
      SCORE: 8
    },
    {
      ARTISTS: "Bloc Party",
      ALBUM_TITLE: "Four",
      SCORE: 7
    },
    {
      ARTISTS: "Wild Nothing",
      ALBUM_TITLE: "Nocturne",
      SCORE: 8
    },
    {
      ARTISTS: "Jessie Ware",
      ALBUM_TITLE: "Devotion",
      SCORE: 4
    },
    {
      ARTISTS: "Eprom",
      ALBUM_TITLE: "Metahuman",
      SCORE: 7
    },
    {
      ARTISTS: "JJ DOOM",
      ALBUM_TITLE: "Key to the Kuffs",
      SCORE: 6
    },
    {
      ARTISTS: "Xibalba",
      ALBUM_TITLE: "Hasta La Muerte",
      SCORE: 8
    },
    {
      ARTISTS: "2 Chainz",
      ALBUM_TITLE: "Based on a T.R.U. Story",
      SCORE: 4
    },
    {
      ARTISTS: "Ariel Pink's Haunted Graffiti",
      ALBUM_TITLE: "Mature Themes",
      SCORE: 6
    },
    {
      ARTISTS: "Parquet Courts",
      ALBUM_TITLE: "Light Up Gold",
      SCORE: 7
    },
    {
      ARTISTS: "Niki and the Dove",
      ALBUM_TITLE: "Instinct",
      SCORE: 6
    },
    {
      ARTISTS: "R. Stevie Moore",
      ALBUM_TITLE: "Lo Fi Hi Fives",
      SCORE: 7
    },
    {
      ARTISTS: "Om",
      ALBUM_TITLE: "Advaitic Songs",
      SCORE: 5
    },
    {
      ARTISTS: "Domo Genesis",
      ALBUM_TITLE: "No Idols",
      SCORE: 5
    },
    {
      ARTISTS: "Passion Pit",
      ALBUM_TITLE: "Gossamer",
      SCORE: 6
    },
    {
      ARTISTS: "Nachtmystium",
      ALBUM_TITLE: "Silencing Machine",
      SCORE: 8
    },
    {
      ARTISTS: "Rick Ross",
      ALBUM_TITLE: "God Forgives, I Don't",
      SCORE: 3
    },
    {
      ARTISTS: "Guardian Alien",
      ALBUM_TITLE: "See the World Given to a One Love Entity",
      SCORE: 6
    },
    {
      ARTISTS: "Purity Ring",
      ALBUM_TITLE: "Shrines",
      SCORE: 6
    },
    {
      ARTISTS: "Gnaw Their Tongues",
      ALBUM_TITLE: "Eschatological Scatology",
      SCORE: 7
    },
    {
      ARTISTS: "TNGHT",
      ALBUM_TITLE: "TNGHT",
      SCORE: 9
    },
    {
      ARTISTS: "Mission of Burma",
      ALBUM_TITLE: "Unsound",
      SCORE: 6
    },
    {
      ARTISTS: "Aesop Rock",
      ALBUM_TITLE: "Skelethon",
      SCORE: 7
    },
    {
      ARTISTS: "Holograms",
      ALBUM_TITLE: "Holograms",
      SCORE: 8
    },
    {
      ARTISTS: "Nas",
      ALBUM_TITLE: "Life Is Good",
      SCORE: 4
    },
    {
      ARTISTS: "Wreck and Reference",
      ALBUM_TITLE: "No Youth",
      SCORE: 7
    },
    {
      ARTISTS: "Baroness",
      ALBUM_TITLE: "Yellow and Green",
      SCORE: 7
    },
    {
      ARTISTS: "Frank Ocean",
      ALBUM_TITLE: "Channel Orange",
      SCORE: 7
    },
    {
      ARTISTS: "Twin Shadow",
      ALBUM_TITLE: "Confess",
      SCORE: 5
    },
    {
      ARTISTS: "H-SIK",
      ALBUM_TITLE: "Cocody",
      SCORE: 7
    },
    {
      ARTISTS: "Foxygen",
      ALBUM_TITLE: "Take the Kids Off Broadway",
      SCORE: 8
    },
    {
      ARTISTS: "Dirty Projectors",
      ALBUM_TITLE: "Swing Lo Magellan",
      SCORE: 6
    },
    {
      ARTISTS: "Rush",
      ALBUM_TITLE: "Clockwork Angels",
      SCORE: 6
    },
    {
      ARTISTS: "Spaceghostpurrp",
      ALBUM_TITLE: "Mysterious Phonk: The Chronicles of SpvcxxGhxztPvrrp",
      SCORE: 5
    },
    {
      ARTISTS: "Deathspell Omega",
      ALBUM_TITLE: "Drought",
      SCORE: 8
    },
    {
      ARTISTS: "Hot Chip",
      ALBUM_TITLE: "In Our Heads",
      SCORE: 7
    },
    {
      ARTISTS: "Old Man Gloom",
      ALBUM_TITLE: "NO",
      SCORE: 6
    },
    {
      ARTISTS: "Ty Segall Band",
      ALBUM_TITLE: "Slaughterhouse",
      SCORE: 8
    },
    {
      ARTISTS: "Ty Segall & White Fence",
      ALBUM_TITLE: "Hair",
      SCORE: 8
    },
    {
      ARTISTS: "Open Mike Eagle",
      ALBUM_TITLE: "4NML HSPTL",
      SCORE: 7
    },
    {
      ARTISTS: "The Smashing Pumpkins",
      ALBUM_TITLE: "Oceania",
      SCORE: 6
    },
    {
      ARTISTS: "Metric",
      ALBUM_TITLE: "Synthetica",
      SCORE: 3
    },
    {
      ARTISTS: "Curren$y",
      ALBUM_TITLE: "The Stoned Immaculate",
      SCORE: 3
    },
    {
      ARTISTS: "Bobby Womack",
      ALBUM_TITLE: "The Bravest Man In the Universe",
      SCORE: 6
    },
    {
      ARTISTS: "Fiona Apple",
      ALBUM_TITLE: "The Idler Wheel...",
      SCORE: 9
    },
    {
      ARTISTS: "Joey Bada$$",
      ALBUM_TITLE: 1999,
      SCORE: 7
    },
    {
      ARTISTS: "Suns",
      ALBUM_TITLE: "The Engine Room",
      SCORE: "[Chris] 7"
    },
    {
      ARTISTS: "Kreator",
      ALBUM_TITLE: "Phantom Antichrist",
      SCORE: 5
    },
    {
      ARTISTS: "Clams Casino",
      ALBUM_TITLE: "Instrumentals 2",
      SCORE: 7
    },
    {
      ARTISTS: "iamamiwhoami",
      ALBUM_TITLE: "Kin",
      SCORE: 8
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      ALBUM_TITLE: "There's No Leaving Now",
      SCORE: 8
    },
    {
      ARTISTS: "Recondite",
      ALBUM_TITLE: "On Acid",
      SCORE: 8
    },
    {
      ARTISTS: "Liars",
      ALBUM_TITLE: "WIXIW",
      SCORE: 7
    },
    {
      ARTISTS: "Neil Young & Crazy Horse",
      ALBUM_TITLE: "Americana",
      SCORE: 7
    },
    {
      ARTISTS: "Japandroids",
      ALBUM_TITLE: "Celebration Rock",
      SCORE: 5
    },
    {
      ARTISTS: "Black Breath",
      ALBUM_TITLE: "Sentenced to Life",
      SCORE: 8
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "Live From the Underground",
      SCORE: 7
    },
    {
      ARTISTS: "Sigur Rós",
      ALBUM_TITLE: "Valtari",
      SCORE: 7
    },
    {
      ARTISTS: "El-P",
      ALBUM_TITLE: "Cancer for Cure",
      SCORE: 6
    },
    {
      ARTISTS: "Cerce",
      ALBUM_TITLE: "Tour Sampler CD-R",
      SCORE: 7
    },
    {
      ARTISTS: "Mount Eerie",
      ALBUM_TITLE: "Clear Moon",
      SCORE: 7
    },
    {
      ARTISTS: "Best Coast",
      ALBUM_TITLE: "The Only Place",
      SCORE: 3
    },
    {
      ARTISTS: "Dope Body",
      ALBUM_TITLE: "Natural History",
      SCORE: 9
    },
    {
      ARTISTS: "Killer Mike",
      ALBUM_TITLE: "R.A.P. Music",
      SCORE: 8
    },
    {
      ARTISTS: "Marilyn Manson",
      ALBUM_TITLE: "Born Villain",
      SCORE: 3
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "Macadelic",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Ab-Soul",
      ALBUM_TITLE: "Control System",
      SCORE: 8
    },
    {
      ARTISTS: "Squarepusher",
      ALBUM_TITLE: "Ufabulum",
      SCORE: 6
    },
    {
      ARTISTS: "Beach House",
      ALBUM_TITLE: "Bloom",
      SCORE: 8
    },
    {
      ARTISTS: "mewithoutYou",
      ALBUM_TITLE: "Ten Stories",
      SCORE: 6
    },
    {
      ARTISTS: "B.o.B.",
      ALBUM_TITLE: "Strange Clouds",
      SCORE: 4
    },
    {
      ARTISTS: "Lone",
      ALBUM_TITLE: "Galaxy Garden",
      SCORE: 8
    },
    {
      ARTISTS: "OFF!",
      ALBUM_TITLE: "OFF!",
      SCORE: 7
    },
    {
      ARTISTS: "Dweller On the Threshold",
      ALBUM_TITLE: "Dweller On the Threshold",
      SCORE: 6
    },
    {
      ARTISTS: "Billy Woods",
      ALBUM_TITLE: "History Will Absolve me",
      SCORE: 8
    },
    {
      ARTISTS: "Torche",
      ALBUM_TITLE: "Harmonicraft",
      SCORE: 8
    },
    {
      ARTISTS: "Actress",
      ALBUM_TITLE: "R.I.P.",
      SCORE: "NONE"
    },
    {
      ARTISTS: "White Suns",
      ALBUM_TITLE: "Sinews",
      SCORE: 8
    },
    {
      ARTISTS: "Jack White",
      ALBUM_TITLE: "Blunderbuss",
      SCORE: 6
    },
    {
      ARTISTS: "Battles",
      ALBUM_TITLE: "Dross Glop",
      SCORE: 6
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "The Money Store",
      SCORE: 10
    },
    {
      ARTISTS: "Moonface",
      ALBUM_TITLE: "With Siinai: Heartbreaking Bravery",
      SCORE: 6
    },
    {
      ARTISTS: "Quakers",
      ALBUM_TITLE: "Quakers",
      SCORE: 5
    },
    {
      ARTISTS: "Spiritualized",
      ALBUM_TITLE: "Sweet Heart Sweet Light",
      SCORE: 8
    },
    {
      ARTISTS: "Black Dice",
      ALBUM_TITLE: "Mr. Impossible",
      SCORE: 5
    },
    {
      ARTISTS: "Lotus Plaza",
      ALBUM_TITLE: "Spooky Action at a Distance",
      SCORE: 6
    },
    {
      ARTISTS: "Dr. John",
      ALBUM_TITLE: "Locked Down",
      SCORE: 7
    },
    {
      ARTISTS: "Kindness",
      ALBUM_TITLE: "World, You Need a Change of Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Willis Earl Beal",
      ALBUM_TITLE: "Acousmatic Sorcery",
      SCORE: 4
    },
    {
      ARTISTS: "Chromatics",
      ALBUM_TITLE: "Kill For Love",
      SCORE: 4
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      ALBUM_TITLE: "BBNG2",
      SCORE: 9
    },
    {
      ARTISTS: "High On Fire",
      ALBUM_TITLE: "De Vermis Mysteriis",
      SCORE: 8
    },
    {
      ARTISTS: "Meshuggah",
      ALBUM_TITLE: "Koloss",
      SCORE: 6
    },
    {
      ARTISTS: "Daniel Rossen",
      ALBUM_TITLE: "Silent Hour / Golden Mile",
      SCORE: 8
    },
    {
      ARTISTS: "The Mars Volta",
      ALBUM_TITLE: "Noctourniquet",
      SCORE: 7
    },
    {
      ARTISTS: "The Shins",
      ALBUM_TITLE: "Port of Morrow",
      SCORE: 5
    },
    {
      ARTISTS: "THEESatisfaction",
      ALBUM_TITLE: "awE naturalE",
      SCORE: 8
    },
    {
      ARTISTS: "Unsane",
      ALBUM_TITLE: "Wreck",
      SCORE: 7
    },
    {
      ARTISTS: "Soap&Skin",
      ALBUM_TITLE: "Narrow",
      SCORE: 8
    },
    {
      ARTISTS: "The Men",
      ALBUM_TITLE: "Open Your Heart",
      SCORE: 7
    },
    {
      ARTISTS: "The Magnetic Fields",
      ALBUM_TITLE: "Love at the Bottom of the Sea",
      SCORE: 5
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "4evaNaDay",
      SCORE: 8
    },
    {
      ARTISTS: "Evian Christ",
      ALBUM_TITLE: "Kings and Them",
      SCORE: 6
    },
    {
      ARTISTS: "WZRD",
      ALBUM_TITLE: "WZRD",
      SCORE: 3
    },
    {
      ARTISTS: "Christian Mistress",
      ALBUM_TITLE: "Possession",
      SCORE: 8
    },
    {
      ARTISTS: "Pallbearer",
      ALBUM_TITLE: "Sorrow and Extinction",
      SCORE: 7
    },
    {
      ARTISTS: "Sleigh Bells",
      ALBUM_TITLE: "Reign of Terror",
      SCORE: 5
    },
    {
      ARTISTS: "Perfume Genius",
      ALBUM_TITLE: "Put Your Back N 2 It",
      SCORE: 9
    },
    {
      ARTISTS: "Grimes",
      ALBUM_TITLE: "Visions",
      SCORE: 5
    },
    {
      ARTISTS: "Goatwhore",
      ALBUM_TITLE: "Blood For the Master",
      SCORE: 7
    },
    {
      ARTISTS: "Tennis",
      ALBUM_TITLE: "Young & Old",
      SCORE: 4
    },
    {
      ARTISTS: "Burial",
      ALBUM_TITLE: "Kindred",
      SCORE: 8
    },
    {
      ARTISTS: "Earth",
      ALBUM_TITLE: "Angels of Darkness, Demons of Light II",
      SCORE: 6
    },
    {
      ARTISTS: "Portico Quartet",
      ALBUM_TITLE: "Portico Quartet",
      SCORE: 8
    },
    {
      ARTISTS: "Lapalux",
      ALBUM_TITLE: "When You're Gone",
      SCORE: 6
    },
    {
      ARTISTS: "Sharon Van Etten",
      ALBUM_TITLE: "Tramp",
      SCORE: 7
    },
    {
      ARTISTS: "A Place To Bury Strangers",
      ALBUM_TITLE: "Onwards To The Wall",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      ALBUM_TITLE: "Vacation",
      SCORE: 7
    },
    {
      ARTISTS: "Leonard Cohen",
      ALBUM_TITLE: "Old Ideas",
      SCORE: 5
    },
    {
      ARTISTS: "of Montreal",
      ALBUM_TITLE: "Paralytic Stalks",
      SCORE: 7
    },
    {
      ARTISTS: "Loma Prieta",
      ALBUM_TITLE: "I.V.",
      SCORE: 8
    },
    {
      ARTISTS: "John Talabot",
      ALBUM_TITLE: "fin",
      SCORE: 8
    },
    {
      ARTISTS: "The Maccabees",
      ALBUM_TITLE: "Given to the Wild",
      SCORE: 5
    },
    {
      ARTISTS: "Lana Del Rey",
      ALBUM_TITLE: "Born to Die",
      SCORE: 3
    },
    {
      ARTISTS: "Heems",
      ALBUM_TITLE: "Nehru Jackets",
      SCORE: 8
    },
    {
      ARTISTS: "Pop. 1280",
      ALBUM_TITLE: "The Horror",
      SCORE: 7
    },
    {
      ARTISTS: "Lamb of God",
      ALBUM_TITLE: "Resolution",
      SCORE: 3
    },
    {
      ARTISTS: "Chairlift",
      ALBUM_TITLE: "Something",
      SCORE: 7
    },
    {
      ARTISTS: "Gonjasufi",
      ALBUM_TITLE: "MU.ZZ.LE",
      SCORE: 6
    },
    {
      ARTISTS: "First  Aid Kit",
      ALBUM_TITLE: "The Lion's Roar",
      SCORE: 7
    },
    {
      ARTISTS: "Young Fathers",
      ALBUM_TITLE: "Tape One",
      SCORE: 8
    },
    {
      ARTISTS: "Schoolboy Q",
      ALBUM_TITLE: "Habits & Contradictions",
      SCORE: 5
    },
    {
      ARTISTS: "Cloud Nothings",
      ALBUM_TITLE: "Attack On Memory",
      SCORE: 8
    },
    {
      ARTISTS: "The Act of Estimating as Worthless",
      ALBUM_TITLE: "Amongst These Splintered Minds...",
      SCORE: 7
    },
    {
      ARTISTS: "Charlie Haden & Hank Jones",
      ALBUM_TITLE: "Come Sunday",
      SCORE: 6
    },
    {
      ARTISTS: "Alcest",
      ALBUM_TITLE: "Les voyages de l'âme",
      SCORE: 5
    },
    {
      ARTISTS: "Zammuto",
      ALBUM_TITLE: "Idiom Wind",
      SCORE: 7
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "Echoes of Silence",
      SCORE: 8
    },
    {
      ARTISTS: "Guided by Voices",
      ALBUM_TITLE: "Let's Go Eat the Factory",
      SCORE: 6
    },
    {
      ARTISTS: "The Internet",
      ALBUM_TITLE: "Purple Naked Ladies",
      SCORE: 4
    },
    {
      ARTISTS: "Neutral Milk Hotel",
      ALBUM_TITLE: "In the Aeroplane Over the Sea",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Wu-Tang Clan",
      ALBUM_TITLE: "Enter the Wu-Tang: 36 Chambers",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Frank Zappa",
      ALBUM_TITLE: "Hot Rats",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Godspeed You! Black Emperor",
      ALBUM_TITLE: "Lift Yr. Skinny Fists Like Antennas to Heaven!",
      SCORE: "CLASSIC"
    },
    {
      ARTISTS: "Cass McCombs",
      ALBUM_TITLE: "Humor Risk",
      SCORE: 6
    },
    {
      ARTISTS: "The Roots",
      ALBUM_TITLE: "Undun",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Cormorant",
      ALBUM_TITLE: "Dwellings",
      SCORE: 8
    },
    {
      ARTISTS: "Nujabes",
      ALBUM_TITLE: "Spiritual State",
      SCORE: 6
    },
    {
      ARTISTS: "Jacaszek",
      ALBUM_TITLE: "Glimmer",
      SCORE: 7
    },
    {
      ARTISTS: "The Black Keys",
      ALBUM_TITLE: "El Camino",
      SCORE: 6
    },
    {
      ARTISTS: "Comet Gain",
      ALBUM_TITLE: "Howl of the Lonely Crowd",
      SCORE: 7
    },
    {
      ARTISTS: "Oneohtrix Point Never",
      ALBUM_TITLE: "Replica",
      SCORE: 8
    },
    {
      ARTISTS: "Red Horse",
      ALBUM_TITLE: "Red Horse",
      SCORE: 6
    },
    {
      ARTISTS: "Yelawolf",
      ALBUM_TITLE: "Radioactive",
      SCORE: 5
    },
    {
      ARTISTS: "The Spits",
      ALBUM_TITLE: "The Spits",
      SCORE: 6
    },
    {
      ARTISTS: "The Log.Os",
      ALBUM_TITLE: "λόγος",
      SCORE: 8
    },
    {
      ARTISTS: "Vektor",
      ALBUM_TITLE: "Outer Isolation",
      SCORE: 8
    },
    {
      ARTISTS: "Kate Bush",
      ALBUM_TITLE: "50 Words For Snow",
      SCORE: 7
    },
    {
      ARTISTS: "Cynic",
      ALBUM_TITLE: "Carbon-Based Anatomy",
      SCORE: 7
    },
    {
      ARTISTS: "Wale",
      ALBUM_TITLE: "Ambition",
      SCORE: 4
    },
    {
      ARTISTS: "Mac Miller",
      ALBUM_TITLE: "Blue Slide Park",
      SCORE: 5
    },
    {
      ARTISTS: "Crystal Stilts",
      ALBUM_TITLE: "Radiant Door",
      SCORE: 6
    },
    {
      ARTISTS: "King Krule",
      ALBUM_TITLE: "King Krule",
      SCORE: 7
    },
    {
      ARTISTS: "Drake",
      ALBUM_TITLE: "Take Care",
      SCORE: 6
    },
    {
      ARTISTS: "Pianos Become the Teeth",
      ALBUM_TITLE: "The Lack Long After",
      SCORE: 6
    },
    {
      ARTISTS: "Childish Gambino",
      ALBUM_TITLE: "Camp",
      SCORE: 2
    },
    {
      ARTISTS: "Atlas Sound",
      ALBUM_TITLE: "Parallax",
      SCORE: 6
    },
    {
      ARTISTS: "David Lynch",
      ALBUM_TITLE: "Crazy Clown Time",
      SCORE: 5
    },
    {
      ARTISTS: "Ghoul",
      ALBUM_TITLE: "Transmission Zero",
      SCORE: 8
    },
    {
      ARTISTS: "My Brightest Diamond",
      ALBUM_TITLE: "All Things Will Unwind",
      SCORE: 6
    },
    {
      ARTISTS: "ASAP Rocky",
      ALBUM_TITLE: "LiveLoveA$AP",
      SCORE: 8
    },
    {
      ARTISTS: "The Strange Boys",
      ALBUM_TITLE: "Live Music",
      SCORE: 7
    },
    {
      ARTISTS: "Lou Reed and Metallica",
      ALBUM_TITLE: "Lulu",
      SCORE: 6
    },
    {
      ARTISTS: "Oblivionized",
      ALBUM_TITLE: "Abhorrent Evolution",
      SCORE: 8
    },
    {
      ARTISTS: "Milo",
      ALBUM_TITLE: "I Wish My Brother Rob Was Here",
      SCORE: 8
    },
    {
      ARTISTS: "Black Milk & Danny Brown",
      ALBUM_TITLE: "Black & Brown",
      SCORE: 7
    },
    {
      ARTISTS: "Justice",
      ALBUM_TITLE: "Audio, Video, Disco",
      SCORE: 5
    },
    {
      ARTISTS: "The Field",
      ALBUM_TITLE: "Looping State of Mind",
      SCORE: 7
    },
    {
      ARTISTS: "Tom Waits",
      ALBUM_TITLE: "Bad As Me",
      SCORE: 7
    },
    {
      ARTISTS: "M83",
      ALBUM_TITLE: "Hurry Up, We're Dreaming",
      SCORE: 4
    },
    {
      ARTISTS: "Kuedo",
      ALBUM_TITLE: "Severant",
      SCORE: 6
    },
    {
      ARTISTS: "Absu",
      ALBUM_TITLE: "Abzu",
      SCORE: 8
    },
    {
      ARTISTS: "Björk",
      ALBUM_TITLE: "Biophilia",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Civil Civic",
      ALBUM_TITLE: "Rules",
      SCORE: 7
    },
    {
      ARTISTS: "Rustie",
      ALBUM_TITLE: "Glass Swords",
      SCORE: 7
    },
    {
      ARTISTS: "Feist",
      ALBUM_TITLE: "Metals",
      SCORE: 4
    },
    {
      ARTISTS: "Mr. Muthafuckin' eXquire",
      ALBUM_TITLE: "Lost In Translation",
      SCORE: "UNKNOWN"
    },
    {
      ARTISTS: "James Blake",
      ALBUM_TITLE: "Enough Thunder",
      SCORE: 5
    },
    {
      ARTISTS: "La Dispute",
      ALBUM_TITLE: "Wildlife",
      SCORE: 8
    },
    {
      ARTISTS: "Teenage Cool Kids",
      ALBUM_TITLE: "Denton After Sunset",
      SCORE: 7
    },
    {
      ARTISTS: "Wilco",
      ALBUM_TITLE: "The Whole Love",
      SCORE: 7
    },
    {
      ARTISTS: "9th Wonder",
      ALBUM_TITLE: "The Wonder Years",
      SCORE: 4
    },
    {
      ARTISTS: "J. Cole",
      ALBUM_TITLE: "Cole World: The Sideline Story",
      SCORE: 6
    },
    {
      ARTISTS: "BADBADNOTGOOD",
      ALBUM_TITLE: "BBNG",
      SCORE: 8
    },
    {
      ARTISTS: "Mastodon",
      ALBUM_TITLE: "The Hunter",
      SCORE: 5
    },
    {
      ARTISTS: "Wild Flag",
      ALBUM_TITLE: "Wild Flag",
      SCORE: 7
    },
    {
      ARTISTS: "Opeth",
      ALBUM_TITLE: "Heritage",
      SCORE: 5
    },
    {
      ARTISTS: "Andrew Jackson Jihad",
      ALBUM_TITLE: "Knife Man",
      SCORE: 8
    },
    {
      ARTISTS: "Veronica Falls",
      ALBUM_TITLE: "Veronica Falls",
      SCORE: 8
    },
    {
      ARTISTS: "Das Racist",
      ALBUM_TITLE: "Relax",
      SCORE: 6
    },
    {
      ARTISTS: "Neon Indian",
      ALBUM_TITLE: "Era Extraña",
      SCORE: 3
    },
    {
      ARTISTS: "St. Vincent",
      ALBUM_TITLE: "Strange Mercy",
      SCORE: 8
    },
    {
      ARTISTS: "Wolves In the Throne Room",
      ALBUM_TITLE: "Celestial Lineage",
      SCORE: 6
    },
    {
      ARTISTS: "The Men",
      ALBUM_TITLE: "Leave Home",
      SCORE: 6
    },
    {
      ARTISTS: "Thundercat",
      ALBUM_TITLE: "The Golden Age of Apocalypse",
      SCORE: 8
    },
    {
      ARTISTS: "Girls",
      ALBUM_TITLE: "Father, Son, Holy Ghost",
      SCORE: 7
    },
    {
      ARTISTS: "The Drums",
      ALBUM_TITLE: "Portamento",
      SCORE: 5
    },
    {
      ARTISTS: "Shlohmo",
      ALBUM_TITLE: "Bad Vibes",
      SCORE: 7
    },
    {
      ARTISTS: "Hella",
      ALBUM_TITLE: "Tripper",
      SCORE: 6
    },
    {
      ARTISTS: "Lil Wayne",
      ALBUM_TITLE: "Tha Carter IV",
      SCORE: 3
    },
    {
      ARTISTS: "Red Hot Chili Peppers",
      ALBUM_TITLE: "I'm With You",
      SCORE: 5
    },
    {
      ARTISTS: "Giles Corey",
      ALBUM_TITLE: "Giles Corey",
      SCORE: 8
    },
    {
      ARTISTS: "Apathy",
      ALBUM_TITLE: "Honkey Kong",
      SCORE: 7
    },
    {
      ARTISTS: "Danny Brown",
      ALBUM_TITLE: "XXX",
      SCORE: 8
    },
    {
      ARTISTS: "Active Child",
      ALBUM_TITLE: "You Are All I See",
      SCORE: 6
    },
    {
      ARTISTS: "Africa Hitech",
      ALBUM_TITLE: "93 Million Miles",
      SCORE: 8
    },
    {
      ARTISTS: "The War On Drugs",
      ALBUM_TITLE: "Slave Ambient",
      SCORE: 6
    },
    {
      ARTISTS: "Chelsea Wolfe",
      ALBUM_TITLE: "Ἀποκάλυψις (Apocalypse / Apokalypsis)",
      SCORE: 8
    },
    {
      ARTISTS: "Rival Sons",
      ALBUM_TITLE: "Pressure & Time",
      SCORE: 7
    },
    {
      ARTISTS: "Cerebral Ballzy",
      ALBUM_TITLE: "Cerebral Ballzy",
      SCORE: 3
    },
    {
      ARTISTS: "Matana Roberts",
      ALBUM_TITLE: "Coin Coin Chapter One: Gens de Couleur Libres",
      SCORE: 8
    },
    {
      ARTISTS: "Kanye West & Jay-Z",
      ALBUM_TITLE: "Watch the Throne",
      SCORE: 5
    },
    {
      ARTISTS: "Beirut",
      ALBUM_TITLE: "The Rip Tide",
      SCORE: 6
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Brand New Wayo",
      SCORE: 7
    },
    {
      ARTISTS: "Theophilus London",
      ALBUM_TITLE: "Timez Are Weird These Days",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Hudson Mohawke",
      ALBUM_TITLE: "Satin Panthers",
      SCORE: 7
    },
    {
      ARTISTS: "Machinedrum",
      ALBUM_TITLE: "Room(s)",
      SCORE: 6
    },
    {
      ARTISTS: "Unknown Mortal Orchestra",
      ALBUM_TITLE: "Unknown Mortal Orchestra",
      SCORE: 5
    },
    {
      ARTISTS: "Disma",
      ALBUM_TITLE: "Towards the Megalith",
      SCORE: 9
    },
    {
      ARTISTS: "MellowHype",
      ALBUM_TITLE: "BlackenedWhite",
      SCORE: 6
    },
    {
      ARTISTS: "Little Dragon",
      ALBUM_TITLE: "Ritual Union",
      SCORE: 8
    },
    {
      ARTISTS: "They Might Be Giants",
      ALBUM_TITLE: "Join Us",
      SCORE: 5
    },
    {
      ARTISTS: "Portugal. The Man",
      ALBUM_TITLE: "In the Mountain In the Cloud",
      SCORE: 6
    },
    {
      ARTISTS: "Toxic Holocaust",
      ALBUM_TITLE: "Conjure and Command",
      SCORE: 8
    },
    {
      ARTISTS: "The Cool Kids",
      ALBUM_TITLE: "When Fish Ride Bicycles",
      SCORE: 4
    },
    {
      ARTISTS: "Touche Amore",
      ALBUM_TITLE: "Parting the Sea Between Brightness and Me",
      SCORE: 7
    },
    {
      ARTISTS: "Zombi",
      ALBUM_TITLE: "Escape Velocity",
      SCORE: 8
    },
    {
      ARTISTS: "The Horrors",
      ALBUM_TITLE: "Skying",
      SCORE: 7
    },
    {
      ARTISTS: "Washed Out",
      ALBUM_TITLE: "Within and Without",
      SCORE: 6
    },
    {
      ARTISTS: "Kendrick Lamar",
      ALBUM_TITLE: "Section.80",
      SCORE: 8
    },
    {
      ARTISTS: "Limp Bizkit",
      ALBUM_TITLE: "Gold Cobra",
      SCORE: "[he just ate]"
    },
    {
      ARTISTS: "Ulcerate",
      ALBUM_TITLE: "The Destroyers of All",
      SCORE: 7
    },
    {
      ARTISTS: "Herman Dune",
      ALBUM_TITLE: "Strange Moosic",
      SCORE: 7
    },
    {
      ARTISTS: "Lil B",
      ALBUM_TITLE: "I'm Gay (I'm Happy)",
      SCORE: "NONE"
    },
    {
      ARTISTS: "Samiyam",
      ALBUM_TITLE: "Sam Baker's Album",
      SCORE: 5
    },
    {
      ARTISTS: "Shabazz Palaces",
      ALBUM_TITLE: "Black Up",
      SCORE: 8
    },
    {
      ARTISTS: "Cults",
      ALBUM_TITLE: "Cults",
      SCORE: 4
    },
    {
      ARTISTS: "SBTRKT",
      ALBUM_TITLE: "SBTRKT",
      SCORE: 8
    },
    {
      ARTISTS: "Iceage",
      ALBUM_TITLE: "New Brigade",
      SCORE: 8
    },
    {
      ARTISTS: "Bon Iver",
      ALBUM_TITLE: "Bon Iver",
      SCORE: 6
    },
    {
      ARTISTS: "Bad Meets Evil",
      ALBUM_TITLE: "Hell: The Sequel",
      SCORE: 6
    },
    {
      ARTISTS: "Blood Ceremony",
      ALBUM_TITLE: "Living With the Ancients",
      SCORE: 7
    },
    {
      ARTISTS: "WU LYF",
      ALBUM_TITLE: "Go Tell Fire To The Mountain",
      SCORE: 5
    },
    {
      ARTISTS: "Poor Lily",
      ALBUM_TITLE: "Poor Lily",
      SCORE: 8
    },
    {
      ARTISTS: "Fucked Up",
      ALBUM_TITLE: "David Comes to Life",
      SCORE: 5
    },
    {
      ARTISTS: "Battles",
      ALBUM_TITLE: "Gloss Drop",
      SCORE: 9
    },
    {
      ARTISTS: "Snake Oil",
      ALBUM_TITLE: "Snake Oil",
      SCORE: 7
    },
    {
      ARTISTS: "Arctic Monkeys",
      ALBUM_TITLE: "Suck It and See",
      SCORE: 5
    },
    {
      ARTISTS: "Woods",
      ALBUM_TITLE: "Sun and Shade",
      SCORE: 5
    },
    {
      ARTISTS: "Planningtorock",
      ALBUM_TITLE: "W",
      SCORE: 2
    },
    {
      ARTISTS: "Havok",
      ALBUM_TITLE: "Time Is Up",
      SCORE: 8
    },
    {
      ARTISTS: "Death Cab for Cutie",
      ALBUM_TITLE: "Codes and Keys",
      SCORE: 7
    },
    {
      ARTISTS: "Theophilus London",
      ALBUM_TITLE: "Lover's Holiday",
      SCORE: 8
    },
    {
      ARTISTS: "My Morning Jacket",
      ALBUM_TITLE: "Circuital",
      SCORE: 5
    },
    {
      ARTISTS: "Master Musicians of Bukkake",
      ALBUM_TITLE: "Totem 3",
      SCORE: 7
    },
    {
      ARTISTS: "Coma Cinema",
      ALBUM_TITLE: "Blue Suicide",
      SCORE: 7
    },
    {
      ARTISTS: "Boris",
      ALBUM_TITLE: "Heavy Rocks / Attention Please",
      SCORE: 6
    },
    {
      ARTISTS: "Lady Gaga",
      ALBUM_TITLE: "Born This Way",
      SCORE: "[he threw up]"
    },
    {
      ARTISTS: "Elzhi",
      ALBUM_TITLE: "Elmatic",
      SCORE: 8
    },
    {
      ARTISTS: "Balkans",
      ALBUM_TITLE: "Balkans",
      SCORE: 7
    },
    {
      ARTISTS: "This Will Destroy You",
      ALBUM_TITLE: "Tunnel Blanket",
      SCORE: 6
    },
    {
      ARTISTS: "The UV Race",
      ALBUM_TITLE: "Homo",
      SCORE: 8
    },
    {
      ARTISTS: "Amon Tobin",
      ALBUM_TITLE: "ISAM",
      SCORE: 7
    },
    {
      ARTISTS: "Jesu",
      ALBUM_TITLE: "Ascension",
      SCORE: 5
    },
    {
      ARTISTS: "Manchester Orchestra",
      ALBUM_TITLE: "Simple Math",
      SCORE: 4
    },
    {
      ARTISTS: "Liturgy",
      ALBUM_TITLE: "Aesthethica",
      SCORE: 8
    },
    {
      ARTISTS: "The Lonely Island",
      ALBUM_TITLE: "Turtleneck and Chain",
      SCORE: 5
    },
    {
      ARTISTS: "Wild Beasts",
      ALBUM_TITLE: "Smother",
      SCORE: 7
    },
    {
      ARTISTS: "Tyler, The Creator",
      ALBUM_TITLE: "Goblin",
      SCORE: 4
    },
    {
      ARTISTS: "Death Grips",
      ALBUM_TITLE: "Exmilitary",
      SCORE: 8
    },
    {
      ARTISTS: "The Antlers",
      ALBUM_TITLE: "Burst Apart",
      SCORE: 4
    },
    {
      ARTISTS: "Fleet Foxes",
      ALBUM_TITLE: "Helplessness Blues",
      SCORE: 9
    },
    {
      ARTISTS: "Explosions In the Sky",
      ALBUM_TITLE: "Take Care, Take Care, Take Care",
      SCORE: 5
    },
    {
      ARTISTS: "Beastie Boys",
      ALBUM_TITLE: "Hot Sauce Committee Part Two",
      SCORE: 9
    },
    {
      ARTISTS: "CunninLynguists",
      ALBUM_TITLE: "Oneirology",
      SCORE: 8
    },
    {
      ARTISTS: "Bill Callahan",
      ALBUM_TITLE: "Apocalypse",
      SCORE: 6
    },
    {
      ARTISTS: "The Kills",
      ALBUM_TITLE: "Blood Pressures",
      SCORE: 4
    },
    {
      ARTISTS: "tUnE-yArDs",
      ALBUM_TITLE: "W H O K I L L",
      SCORE: 7
    },
    {
      ARTISTS: "Rotten Sound",
      ALBUM_TITLE: "Cursed",
      SCORE: 5
    },
    {
      ARTISTS: "Wormrot",
      ALBUM_TITLE: "Dirge",
      SCORE: 8
    },
    {
      ARTISTS: "Foo Fighters",
      ALBUM_TITLE: "Wasting Light",
      SCORE: 6
    },
    {
      ARTISTS: "Metronomy",
      ALBUM_TITLE: "The English Riviera",
      SCORE: 7
    },
    {
      ARTISTS: "Crystal Stilts",
      ALBUM_TITLE: "In Love With Oblivion",
      SCORE: 8
    },
    {
      ARTISTS: "The Weeknd",
      ALBUM_TITLE: "House of Balloons",
      SCORE: 3
    },
    {
      ARTISTS: "TV on the Radio",
      ALBUM_TITLE: "Nine Types of Light",
      SCORE: 6
    },
    {
      ARTISTS: "Timber Timbre",
      ALBUM_TITLE: "Creep On Creepin' On",
      SCORE: 8
    },
    {
      ARTISTS: "The Vaccines",
      ALBUM_TITLE: "What Did You Expect From the Vaccines?",
      SCORE: 6
    },
    {
      ARTISTS: "Holy Ghost!",
      ALBUM_TITLE: "Holy Ghost!",
      SCORE: 8
    },
    {
      ARTISTS: "Panda Bear",
      ALBUM_TITLE: "Tomboy",
      SCORE: 5
    },
    {
      ARTISTS: "Trap Them",
      ALBUM_TITLE: "Darker Handcraft",
      SCORE: 7
    },
    {
      ARTISTS: "Big K.R.I.T.",
      ALBUM_TITLE: "Returnof4eva",
      SCORE: 9
    },
    {
      ARTISTS: "Bibio",
      ALBUM_TITLE: "Mind Bokeh",
      SCORE: 5
    },
    {
      ARTISTS: "Craft Spells",
      ALBUM_TITLE: "Idle Labor",
      SCORE: 8
    },
    {
      ARTISTS: "The Pains of Being Pure at Heart",
      ALBUM_TITLE: "Belong",
      SCORE: 8
    },
    {
      ARTISTS: "The Strokes",
      ALBUM_TITLE: "Angles",
      SCORE: 7
    },
    {
      ARTISTS: "Reks",
      ALBUM_TITLE: "R.E.K.S.",
      SCORE: 8
    },
    {
      ARTISTS: "Burzum",
      ALBUM_TITLE: "Fallen",
      SCORE: 6
    },
    {
      ARTISTS: "Raekwon",
      ALBUM_TITLE: "Shaolin vs. Wu-Tang",
      SCORE: 5
    },
    {
      ARTISTS: "Lupe Fiasco",
      ALBUM_TITLE: "Lasers",
      SCORE: 3
    },
    {
      ARTISTS: "Tim Hecker",
      ALBUM_TITLE: "Ravedeath, 1972",
      SCORE: 8
    },
    {
      ARTISTS: "Weedeater",
      ALBUM_TITLE: "Jason...The Dragon",
      SCORE: 7
    },
    {
      ARTISTS: "Beady Eye",
      ALBUM_TITLE: "Different Gear, Still Speeding",
      SCORE: 3
    },
    {
      ARTISTS: "The Mountain Goats",
      ALBUM_TITLE: "All Eternals Deck",
      SCORE: 8
    },
    {
      ARTISTS: "Siriusmo",
      ALBUM_TITLE: "Mosaik",
      SCORE: 7
    },
    {
      ARTISTS: "Yuck",
      ALBUM_TITLE: "Yuck",
      SCORE: 5
    },
    {
      ARTISTS: "Fashawn",
      ALBUM_TITLE: "Higher Learning Vol. 2",
      SCORE: 6
    },
    {
      ARTISTS: "PJ Harvey",
      ALBUM_TITLE: "Let England Shake",
      SCORE: 8
    },
    {
      ARTISTS: "Toro Y Moi",
      ALBUM_TITLE: "Underneath the Pine",
      SCORE: 6
    },
    {
      ARTISTS: "Colin Stetson",
      ALBUM_TITLE: "New History Warfare Vol. 2: Judges",
      SCORE: 8
    },
    {
      ARTISTS: "Radiohead",
      ALBUM_TITLE: "The King of Limbs",
      SCORE: 6
    },
    {
      ARTISTS: "Nicolas Jaar",
      ALBUM_TITLE: "Space Is Only Noise",
      SCORE: 8
    },
    {
      ARTISTS: "Vreid",
      ALBUM_TITLE: "V",
      SCORE: 6
    },
    {
      ARTISTS: "Lil B",
      ALBUM_TITLE: "Angels Exodus",
      SCORE: 3
    },
    {
      ARTISTS: "Mogwai",
      ALBUM_TITLE: "Hardcore Will Never Die, but You Will",
      SCORE: 8
    },
    {
      ARTISTS: "Natural Child",
      ALBUM_TITLE: "Natural Child",
      SCORE: 8
    },
    {
      ARTISTS: "James Blake",
      ALBUM_TITLE: "James Blake",
      SCORE: 7
    },
    {
      ARTISTS: "Cut Copy",
      ALBUM_TITLE: "Zonoscope",
      SCORE: 5
    },
    {
      ARTISTS: "Earth",
      ALBUM_TITLE: "Angels of Darkness, Demons of Light I",
      SCORE: 7
    },
    {
      ARTISTS: "Dumbo Gets Mad",
      ALBUM_TITLE: "Elephants at the Door",
      SCORE: 8
    },
    {
      ARTISTS: "John Vanderslice",
      ALBUM_TITLE: "White Wilderness",
      SCORE: 6
    },
    {
      ARTISTS: "Braids",
      ALBUM_TITLE: "Native Speaker",
      SCORE: 7
    },
    {
      ARTISTS: "Kvelertak",
      ALBUM_TITLE: "Kvelertak",
      SCORE: 8
    },
    {
      ARTISTS: "The Decemberists",
      ALBUM_TITLE: "The King Is Dead",
      SCORE: 4
    },
    {
      ARTISTS: "Destroyer",
      ALBUM_TITLE: "Kaputt",
      SCORE: 9
    },
    {
      ARTISTS: "Deerhoof",
      ALBUM_TITLE: "Deerhoof vs Evil",
      SCORE: "[Deerhoof won]"
    },
    {
      ARTISTS: "Fergus & Geronimo",
      ALBUM_TITLE: "Unlearn",
      SCORE: 8
    },
    {
      ARTISTS: "White Lies",
      ALBUM_TITLE: "Ritual",
      SCORE: 4
    },
    {
      ARTISTS: "Smith Westerns",
      ALBUM_TITLE: "Dye It Blonde",
      SCORE: 7
    },
    {
      ARTISTS: "A-1",
      ALBUM_TITLE: "After School Special",
      SCORE: 7
    },
    {
      ARTISTS: "Ghost",
      ALBUM_TITLE: "Opus Eponymous",
      SCORE: 8
    },
    {
      ARTISTS: "Cage the Elephant",
      ALBUM_TITLE: "Thank You, Happy Birthday",
      SCORE: 5
    },
    {
      ARTISTS: "British Sea Power",
      ALBUM_TITLE: "Valhalla Dancehall",
      SCORE: 8
    },
    {
      ARTISTS: "Wire",
      ALBUM_TITLE: "Red Barked Tree",
      SCORE: 5
    },
    {
      ARTISTS: "Cake",
      ALBUM_TITLE: "Showroom of Compassion",
      SCORE: 7
    },
    {
      ARTISTS: "All Pigs Must DIe",
      ALBUM_TITLE: "All Pigs Must DIe",
      SCORE: 7
    },
    {
      ARTISTS: "jj",
      ALBUM_TITLE: "Kills",
      SCORE: 3
    },
    {
      ARTISTS: "M.I.A.",
      ALBUM_TITLE: "ViCKi LEEKX",
      SCORE: 6
    },
    {
      ARTISTS: "Shad",
      ALBUM_TITLE: "TSOL",
      SCORE: 6
    },
    {
      ARTISTS: "Gorillaz",
      ALBUM_TITLE: "The Fall",
      SCORE: 5
    },
    {
      ARTISTS: "Big Blood",
      ALBUM_TITLE: "Dark Country Magic",
      SCORE: 7
    },
    {
      ARTISTS: "Ghostface Killah",
      ALBUM_TITLE: "Apollo Kids",
      SCORE: 8
    },
    {
      ARTISTS: "The Souljazz Orchestra",
      ALBUM_TITLE: "Rising Sun",
      SCORE: 8
    },
    {
      ARTISTS: "Röyksopp",
      ALBUM_TITLE: "Senior",
      SCORE: 5
    },
    {
      ARTISTS: "Anika",
      ALBUM_TITLE: "Anika",
      SCORE: 3
    },
    {
      ARTISTS: "Kids & Explosions",
      ALBUM_TITLE: "Shit Computer",
      SCORE: 8
    },
    {
      ARTISTS: "Skrillex",
      ALBUM_TITLE: "Scary Monsters and Nice Sprites",
      SCORE: 7
    },
    {
      ARTISTS: "Tonetta",
      ALBUM_TITLE: "777 Volume One",
      SCORE: 6
    },
    {
      ARTISTS: "Tyler, The Creator",
      ALBUM_TITLE: "Bastard",
      SCORE: 7
    },
    {
      ARTISTS: "Off!",
      ALBUM_TITLE: "First Four",
      SCORE: 8
    },
    {
      ARTISTS: "Maserati",
      ALBUM_TITLE: "Pyramid of the Sun",
      SCORE: 7
    },
    {
      ARTISTS: "Glasser",
      ALBUM_TITLE: "Ring",
      SCORE: 8
    },
    {
      ARTISTS: "Glasser",
      ALBUM_TITLE: "Ring",
      SCORE: 8
    },
    {
      ARTISTS: "Girls",
      ALBUM_TITLE: "Broken Dreams Club",
      SCORE: 5
    },
    {
      ARTISTS: "Girl Talk",
      ALBUM_TITLE: "All Day",
      SCORE: 8
    },
    {
      ARTISTS: "Agalloch",
      ALBUM_TITLE: "Marrow of the Spirit",
      SCORE: 8
    },
    {
      ARTISTS: "Kanye West",
      ALBUM_TITLE: "My Beautiful Dark Twisted Fantasy",
      SCORE: 6
    },
    {
      ARTISTS: "Teebs",
      ALBUM_TITLE: "Ardour",
      SCORE: 6
    },
    {
      ARTISTS: "Weekend",
      ALBUM_TITLE: "Sports",
      SCORE: 8
    },
    {
      ARTISTS: "Cee Lo Green",
      ALBUM_TITLE: "The Lady Killer",
      SCORE: 7
    },
    {
      ARTISTS: "Matt & Kim",
      ALBUM_TITLE: "Sidewalks",
      SCORE: 5
    },
    {
      ARTISTS: "Gold Panda",
      ALBUM_TITLE: "Lucky Shiner",
      SCORE: 7
    },
    {
      ARTISTS: "Kid Cudi",
      ALBUM_TITLE: "Man on the Moon II: The Legend of Mr. Rager",
      SCORE: 6
    },
    {
      ARTISTS: "Das Racist",
      ALBUM_TITLE: "Shut Up, Dude / Sit Down, Man",
      SCORE: 6
    },
    {
      ARTISTS: "Brian Eno",
      ALBUM_TITLE: "Small Craft On A Milk Sea",
      SCORE: 8
    },
    {
      ARTISTS: "Electric Wizard",
      ALBUM_TITLE: "Black Masses",
      SCORE: 6
    },
    {
      ARTISTS: "How To Dress Well",
      ALBUM_TITLE: "Love Remains",
      SCORE: 4
    },
    {
      ARTISTS: "Small Black",
      ALBUM_TITLE: "New Chain",
      SCORE: "UNKNOWN"
    },
    {
      ARTISTS: "Bongripper",
      ALBUM_TITLE: "Satan Worshipping Doom",
      SCORE: 8
    },
    {
      ARTISTS: "Shobaleader One (Squarepusher)",
      ALBUM_TITLE: "d'Demonstrator",
      SCORE: 5
    },
    {
      ARTISTS: "Diamond Rings",
      ALBUM_TITLE: "Special Affections",
      SCORE: 8
    },
    {
      ARTISTS: "Warpaint",
      ALBUM_TITLE: "The Fool",
      SCORE: 6
    },
    {
      ARTISTS: "Matthew Dear",
      ALBUM_TITLE: "Black City",
      SCORE: 7
    },
    {
      ARTISTS: "Zach Hill",
      ALBUM_TITLE: "Face Tat",
      SCORE: 5
    },
    {
      ARTISTS: "Kings of Leon",
      ALBUM_TITLE: "Come Around Sundown",
      SCORE: 4
    },
    {
      ARTISTS: "The Gaslamp Killer",
      ALBUM_TITLE: "Death Gate",
      SCORE: 7
    },
    {
      ARTISTS: "Avey Tare",
      ALBUM_TITLE: "Down There",
      SCORE: 5
    },
    {
      ARTISTS: "Sharon Van Etten",
      ALBUM_TITLE: "Epic",
      SCORE: 7
    },
    {
      ARTISTS: "Luke Abbott",
      ALBUM_TITLE: "Holkham Drones",
      SCORE: 8
    },
    {
      ARTISTS: "The Fresh & Onlys",
      ALBUM_TITLE: "Play It Strange",
      SCORE: 4
    },
    {
      ARTISTS: "Belle and Sebastian",
      ALBUM_TITLE: "Belle and Sebastian Write About Love",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      ALBUM_TITLE: "The Age of Adz",
      SCORE: 6
    },
    {
      ARTISTS: "Mark Ronson & The Business Intl.",
      ALBUM_TITLE: "Record Collection",
      SCORE: 5
    },
    {
      ARTISTS: "Twin Shadow",
      ALBUM_TITLE: "Forget",
      SCORE: 8
    },
    {
      ARTISTS: "Abe Vigoda",
      ALBUM_TITLE: "Crush",
      SCORE: 4
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      ALBUM_TITLE: "Sometimes the Blues Is Just a Passing Bird",
      SCORE: 8
    },
    {
      ARTISTS: "Salem",
      ALBUM_TITLE: "King Night",
      SCORE: 2
    },
    {
      ARTISTS: "Women",
      ALBUM_TITLE: "Public Strain",
      SCORE: 9
    },
    {
      ARTISTS: "Neil Young",
      ALBUM_TITLE: "Le Noise",
      SCORE: 5
    },
    {
      ARTISTS: "No Age",
      ALBUM_TITLE: "Everything In Between",
      SCORE: 6
    },
    {
      ARTISTS: "Nails",
      ALBUM_TITLE: "Unsilent Death",
      SCORE: 9
    },
    {
      ARTISTS: "Deerhunter",
      ALBUM_TITLE: "Halcyon Digest",
      SCORE: 8
    },
    {
      ARTISTS: "Swans",
      ALBUM_TITLE: "My Father Will Guide Me Up a Rope to the Sky",
      SCORE: 6
    },
    {
      ARTISTS: "Flying Lotus",
      ALBUM_TITLE: "Pattern+Grid World",
      SCORE: 8
    },
    {
      ARTISTS: "Black Mountain",
      ALBUM_TITLE: "Wilderness Heart",
      SCORE: 6
    },
    {
      ARTISTS: "Black Milk",
      ALBUM_TITLE: "Album of the Year",
      SCORE: 4
    },
    {
      ARTISTS: "Future Islands",
      ALBUM_TITLE: "In Evening Air",
      SCORE: 7
    },
    {
      ARTISTS: "Chromeo",
      ALBUM_TITLE: "Business Casual",
      SCORE: 9
    },
    {
      ARTISTS: "The Walkmen",
      ALBUM_TITLE: "Lisbon",
      SCORE: 5
    },
    {
      ARTISTS: "Grinderman",
      ALBUM_TITLE: "Grinderman 2",
      SCORE: 7
    },
    {
      ARTISTS: "Blonde Redhead",
      ALBUM_TITLE: "Penny Sparkle",
      SCORE: 8
    },
    {
      ARTISTS: "of Montreal",
      ALBUM_TITLE: "False Priest",
      SCORE: 5
    },
    {
      ARTISTS: "Weezer",
      ALBUM_TITLE: "Hurley",
      SCORE: 7
    },
    {
      ARTISTS: "Tera Melos",
      ALBUM_TITLE: "Patagonian Rats",
      SCORE: 5
    },
    {
      ARTISTS: "Watain",
      ALBUM_TITLE: "Lawless Darkness",
      SCORE: 6
    },
    {
      ARTISTS: "Miami Horror",
      ALBUM_TITLE: "Illumination",
      SCORE: 7
    },
    {
      ARTISTS: "Interpol",
      ALBUM_TITLE: "Interpol",
      SCORE: 5
    },
    {
      ARTISTS: "Magic Kids",
      ALBUM_TITLE: "Memphis",
      SCORE: 8
    },
    {
      ARTISTS: "Mogwai",
      ALBUM_TITLE: "Special Moves",
      SCORE: 8
    },
    {
      ARTISTS: "Klaxons",
      ALBUM_TITLE: "Surfing the Void",
      SCORE: 4
    },
    {
      ARTISTS: "Matmos and So Percussion",
      ALBUM_TITLE: "Treasure State",
      SCORE: 6
    },
    {
      ARTISTS: "Sufjan Stevens",
      ALBUM_TITLE: "All Delighted People",
      SCORE: 8
    },
    {
      ARTISTS: "Teen Daze",
      ALBUM_TITLE: "Four More Years",
      SCORE: 7
    },
    {
      ARTISTS: "Iron Maiden",
      ALBUM_TITLE: "The Final Frontier",
      SCORE: 6
    },
    {
      ARTISTS: "Thou",
      ALBUM_TITLE: "Summit",
      SCORE: 7
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Afro-Beat Airways",
      SCORE: 8
    },
    {
      ARTISTS: "Autolux",
      ALBUM_TITLE: "Transit Transit",
      SCORE: 6
    },
    {
      ARTISTS: "The Budos Band",
      ALBUM_TITLE: "The Budos Band III",
      SCORE: 5
    },
    {
      ARTISTS: "Daughters",
      ALBUM_TITLE: "Daughters",
      SCORE: 8
    },
    {
      ARTISTS: "Ceremony",
      ALBUM_TITLE: "Rohnert Park",
      SCORE: 8
    },
    {
      ARTISTS: "Arcade Fire",
      ALBUM_TITLE: "The Suburbs",
      SCORE: 8
    },
    {
      ARTISTS: "Dangermouse and Sparklehorse",
      ALBUM_TITLE: "Dark Night of the Soul",
      SCORE: "[he discussed copyright]"
    },
    {
      ARTISTS: "Wild Nothing",
      ALBUM_TITLE: "Gemini",
      SCORE: 7
    },
    {
      ARTISTS: "Best Coast",
      ALBUM_TITLE: "Crazy For You",
      SCORE: 5
    },
    {
      ARTISTS: "Mono/Poly",
      ALBUM_TITLE: "Paramatma",
      SCORE: 6
    },
    {
      ARTISTS: "Baths",
      ALBUM_TITLE: "Cerulean",
      SCORE: 8
    },
    {
      ARTISTS: "The Books",
      ALBUM_TITLE: "The Way Out",
      SCORE: 9
    },
    {
      ARTISTS: "MIA",
      ALBUM_TITLE: "Maya (/\\/\\ /\\ Y /\\)",
      SCORE: 5
    },
    {
      ARTISTS: "Dirty Projectors and Bjork",
      ALBUM_TITLE: "Mount Wittenberg Orca",
      SCORE: 8
    },
    {
      ARTISTS: "Superhumanoids",
      ALBUM_TITLE: "Urgency",
      SCORE: 8
    },
    {
      ARTISTS: "Noveller",
      ALBUM_TITLE: "Desert Fires",
      SCORE: 7
    },
    {
      ARTISTS: "Big Boi",
      ALBUM_TITLE: "Sir Lucious Left Foot: The Son of Chico Dusty",
      SCORE: 6
    },
    {
      ARTISTS: "Club 8",
      ALBUM_TITLE: "The People's Record",
      SCORE: 5
    },
    {
      ARTISTS: "Wavves",
      ALBUM_TITLE: "King of the Beach",
      SCORE: 8
    },
    {
      ARTISTS: "The Roots",
      ALBUM_TITLE: "How I Got Over",
      SCORE: 8
    },
    {
      ARTISTS: "Wolf Parade",
      ALBUM_TITLE: "Expo 86",
      SCORE: 6
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Cloud Cuckooland",
      SCORE: 7
    },
    {
      ARTISTS: "Emeralds",
      ALBUM_TITLE: "Does It Look Like I'm Here?",
      SCORE: 6
    },
    {
      ARTISTS: "Laurie Anderson",
      ALBUM_TITLE: "Homeland",
      SCORE: 8
    },
    {
      ARTISTS: "Janelle Monáe",
      ALBUM_TITLE: "The ArchAndroid",
      SCORE: 8
    },
    {
      ARTISTS: "Uffie",
      ALBUM_TITLE: "Sex Dreams and Denim Jeans",
      SCORE: 2
    },
    {
      ARTISTS: "Devo",
      ALBUM_TITLE: "Something For Everybody",
      SCORE: 6
    },
    {
      ARTISTS: "The Radio Dept.",
      ALBUM_TITLE: "Clinging To A Scheme",
      SCORE: 8
    },
    {
      ARTISTS: "Villagers",
      ALBUM_TITLE: "Becoming A Jackal",
      SCORE: 6
    },
    {
      ARTISTS: "Foals",
      ALBUM_TITLE: "Total Life Forever",
      SCORE: 4
    },
    {
      ARTISTS: "The Drums",
      ALBUM_TITLE: "The Drums",
      SCORE: 8
    },
    {
      ARTISTS: "Suckers",
      ALBUM_TITLE: "Wild Smile",
      SCORE: 7
    },
    {
      ARTISTS: "Ariel Pink's Haunted Graffiti",
      ALBUM_TITLE: "Before Today",
      SCORE: 8
    },
    {
      ARTISTS: "Here We Go Magic",
      ALBUM_TITLE: "Pigeons",
      SCORE: 7
    },
    {
      ARTISTS: "Sleepy Sun",
      ALBUM_TITLE: "Fever",
      SCORE: 7
    },
    {
      ARTISTS: "Melvins",
      ALBUM_TITLE: "The Bride Screamed Murder",
      SCORE: 5
    },
    {
      ARTISTS: "Tame Impala",
      ALBUM_TITLE: "Innerspeaker",
      SCORE: 6
    },
    {
      ARTISTS: "Guilty Simpson",
      ALBUM_TITLE: "OJ Simpson",
      SCORE: 6
    },
    {
      ARTISTS: "Ratatat",
      ALBUM_TITLE: "LP4",
      SCORE: 8
    },
    {
      ARTISTS: "Xasthur",
      ALBUM_TITLE: "Portal of Sorrow",
      SCORE: 4
    },
    {
      ARTISTS: "Tobacco",
      ALBUM_TITLE: "Maniac Meat",
      SCORE: 7
    },
    {
      ARTISTS: "Harlem",
      ALBUM_TITLE: "Hippies",
      SCORE: 7
    },
    {
      ARTISTS: "Sleigh Bells",
      ALBUM_TITLE: "Treats",
      SCORE: 3
    },
    {
      ARTISTS: "The Black Keys",
      ALBUM_TITLE: "Brothers",
      SCORE: 7
    },
    {
      ARTISTS: "LCD Soundsystem",
      ALBUM_TITLE: "This Is Happening",
      SCORE: 9
    },
    {
      ARTISTS: "The Dead Weather",
      ALBUM_TITLE: "Sea of Cowards",
      SCORE: 5
    },
    {
      ARTISTS: "The New Pornographers",
      ALBUM_TITLE: "Together",
      SCORE: 7
    },
    {
      ARTISTS: "The National",
      ALBUM_TITLE: "High Violet",
      SCORE: 6
    },
    {
      ARTISTS: "Woods",
      ALBUM_TITLE: "At Echo Lake",
      SCORE: 8
    },
    {
      ARTISTS: "Holy Fuck",
      ALBUM_TITLE: "Latin",
      SCORE: 7
    },
    {
      ARTISTS: "Little Women",
      ALBUM_TITLE: "Throat",
      SCORE: 9
    },
    {
      ARTISTS: "Flying Lotus",
      ALBUM_TITLE: "Cosmogramma",
      SCORE: 8
    },
    {
      ARTISTS: "Broken Social Scene",
      ALBUM_TITLE: "Forgiveness Rock Record",
      SCORE: 4
    },
    {
      ARTISTS: "Crystal Castles",
      ALBUM_TITLE: "Crystal Castles",
      SCORE: 7
    },
    {
      ARTISTS: "Darkthrone",
      ALBUM_TITLE: "Circle the Wagons",
      SCORE: 5
    },
    {
      ARTISTS: "Various Artists",
      ALBUM_TITLE: "Pomegranates",
      SCORE: 8
    },
    {
      ARTISTS: "Happy Birthday",
      ALBUM_TITLE: "Happy Birthday",
      SCORE: 6
    },
    {
      ARTISTS: "Caribou",
      ALBUM_TITLE: "Swim",
      SCORE: 6
    },
    {
      ARTISTS: "Iggy and the Stooges",
      ALBUM_TITLE: "Raw Power  (Legacy Remaster)",
      SCORE: 5
    },
    {
      ARTISTS: "The Tallest Man On Earth",
      ALBUM_TITLE: "The Wild Hunt",
      SCORE: 8
    },
    {
      ARTISTS: "Titus Andronicus",
      ALBUM_TITLE: "The Monitor",
      SCORE: 7
    },
    {
      ARTISTS: "Burzum",
      ALBUM_TITLE: "Belus",
      SCORE: 4
    },
    {
      ARTISTS: "Black Tambourine",
      ALBUM_TITLE: "Black Tambourine",
      SCORE: 7
    },
    {
      ARTISTS: "Jonsi",
      ALBUM_TITLE: "Go",
      SCORE: 6
    },
    {
      ARTISTS: "Autechre",
      ALBUM_TITLE: "Oversteps",
      SCORE: 5
    },
    {
      ARTISTS: "The Morning Benders",
      ALBUM_TITLE: "Big Echo",
      SCORE: 6
    },
    {
      ARTISTS: "MGMT",
      ALBUM_TITLE: "Congratulations",
      SCORE: 8
    },
    {
      ARTISTS: "Portugal. The Man",
      ALBUM_TITLE: "American Ghetto",
      SCORE: 3
    },
    {
      ARTISTS: "Gonjasufi",
      ALBUM_TITLE: "A Sufi and a Killer",
      SCORE: 9
    },
    {
      ARTISTS: "Arckanum",
      ALBUM_TITLE: "ÞÞÞÞÞÞÞÞÞÞÞ",
      SCORE: 8
    },
    {
      ARTISTS: "Broken Bells",
      ALBUM_TITLE: "Broken Bells",
      SCORE: 5
    },
    {
      ARTISTS: "Liars",
      ALBUM_TITLE: "Sisterworld",
      SCORE: 6
    },
    {
      ARTISTS: "High On Fire",
      ALBUM_TITLE: "Snakes for the Divine",
      SCORE: 8
    },
    {
      ARTISTS: "The Knife",
      ALBUM_TITLE: "Tomorrow, In a Year Album",
      SCORE: 3
    },
    {
      ARTISTS: "Gorillaz",
      ALBUM_TITLE: "Plastic Beach",
      SCORE: 7
    } */
  ];

  return knex("Reviews").insert(data);
};

exports.down = function(knex, promise) {
  return knex("Reviews").del();
};
