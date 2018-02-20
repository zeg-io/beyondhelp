import MapAreaInfo from "../MapAreaInfo";
import MapInfo from "../MapInfo";
import MapRefs from "../MapRefs";
import MapToMapAreaInfo from "../MapToMapAreaInfo";

const maps = [
    new MapInfo("Velkynvelve", "oota/prisoners-of-the-drow", "01-04.jpg", "f8534d91-4379-4e00-a779-9fc4ca970376", [
        new MapAreaInfo("1SouthernWatchPost", "124,489,144,509"),
        new MapAreaInfo("2Barracks", "222,510,242,530"),
        new MapAreaInfo("3MainHall", "296,407,316,427"),
        new MapAreaInfo("4EliteBarracks", "219,383,239,403"),
        new MapAreaInfo("4EliteBarracks", "173,423,193,443"),
        new MapAreaInfo("5Lift", "195,366,215,386"),
        new MapAreaInfo("6ShrinetoLolth", "256,318,276,338"),
        new MapAreaInfo("7IlvarasQuarters", "268,342,288,362"),
        new MapAreaInfo("8ShoorsQuarters", "279,318,299,338"),
        new MapAreaInfo("9Waterfall", "356,315,376,335"),
        new MapAreaInfo("10GuardTower", "347,258,367,278"),
        new MapAreaInfo("11SlavePen", "474,290,494,310"),
        new MapAreaInfo("12QuaggothDen", "498,184,518,204"),
        new MapAreaInfo("13NorthernWatchPost", "459,156,479,176"),
        new MapAreaInfo("14Pool", "386,189,406,209"),
        new MapAreaInfo("1SouthernWatchPost", "558,738,578,758"),
        new MapAreaInfo("2Barracks", "471,647,491,667"),
        new MapAreaInfo("4EliteBarracks", "512,701,532,721"),
        new MapAreaInfo("4EliteBarracks", "420,696,440,716"),
        new MapAreaInfo("5Lift", "448,770,468,790"),
        new MapAreaInfo("6ShrinetoLolth", "313,643,333,663"),
        new MapAreaInfo("7IlvarasQuarters", "314,680,334,700"),
        new MapAreaInfo("8ShoorsQuarters", "316,717,336,737"),
        new MapAreaInfo("9Waterfall", "264,717,284,737"),
        new MapAreaInfo("10GuardTower", "148,664,168,684"),
        new MapAreaInfo("11SlavePen", "102,670,122,690"),
        new MapAreaInfo("12QuaggothDen", "28,703,48,723"),
        new MapAreaInfo("13NorthernWatchPost", "28,776,48,796"),
        new MapAreaInfo("NorthPassage", "551,19,571,39"),
        new MapAreaInfo("WestPassage", "147,101,167,121"),
        new MapAreaInfo("SouthPassage", "60,552,80,572")
    ], ["#AreasofVelkynvelve", "#MeansofEscape", "#Acquisitions", "#JorlansGambit", "#AFlightofDemons",
            "#LeavingVelkynvelve", "#XPAwards"]),
    new MapInfo("UnderdarkTravel", "oota/into-darkness", "02-05.jpg", "760081cf-d4f8-483d-9c37-21f3ddfc5df3", [
        new MapToMapAreaInfo("01-04.jpg", "636,273,10"),
        new MapToMapAreaInfo("03-01.jpg", "590,242,10"),
        new MapToMapAreaInfo("04-01.jpg", "446,301,10"),
        new MapToMapAreaInfo("05-01.jpg", "406,235,10"),
        new MapToMapAreaInfo("06-02.jpg", "489,151,8"),
        new MapToMapAreaInfo("09-01.jpg", "532,172,10"),
        new MapToMapAreaInfo("15-01.jpg", "548,124,10"),
        new MapAreaInfo("Chapter3TheDarklake", "445,219,579,266", "oota/the-darklake"),
        new MapAreaInfo("EntmochsBoon", "467,145,480,158", "oota/blingdenstone"),
        new MapAreaInfo("Gauntlgrym", "89,224,109,244", "oota/audience-in-gauntlgrym"),
        new MapAreaInfo("Chapter11Gravenhollow", "157,131,177,151", "oota/gravenhollow"),
        new MapAreaInfo("Chapter12TheTowerofVengeance", "468,73,488,93", "oota/the-tower-of-vengeance"),
        new MapAreaInfo("Chapter13TheWormwrithings", "242,57,379,166", "oota/the-wormwrithings").content("52e3bf8a-9643-42f6-80b8-8f2e8c7a5e01", "b96dae26-e683-456a-b9c3-7af9267bf487"),
        new MapAreaInfo("TheVastOblivium", "391,87,411,107", "oota/the-wormwrithings").content("4171a739-f5af-43bb-9758-9d4cc5f87bb8", "ebbdaf5c-b8c0-4026-8307-0a9cd56e149e"),
        new MapAreaInfo("Chapter14TheLabyrinth", "290,421,330,461", "oota/the-labyrinth"),
        new MapAreaInfo("SpiraloftheHornedKing", "325,292,345,312", "oota/the-labyrinth"),
        new MapAreaInfo("GalleryofAngels", "340,386,360,406", "oota/the-labyrinth"),
        new MapAreaInfo("Filthriddens", "289,355,309,375", "oota/the-labyrinth"),
        new MapAreaInfo("TheMazeEngine", "341,447,361,467", "oota/the-labyrinth"),
        new MapAreaInfo("Araumycos", "584,371,743,441", "oota/the-fetid-wedding")
    ], []),
    new MapInfo("HookHorrorHunt", "oota/into-darkness", "02-06.jpg", "2b3dbc4a-424c-4866-919e-1cba67e36fd3", [
        new MapAreaInfo("1HookHorrors", "716,258,746,288"),
        new MapAreaInfo("2AGnollHunters", "664,201,694,231"),
        new MapAreaInfo("2BGnollHunters", "361,257,391,287"),
        new MapAreaInfo("3Cornered", "688,555,718,585"),
        new MapAreaInfo("4HookHorrorNest", "743,610,773,640"),
        new MapAreaInfo("5GnollCamp", "334,474,364,504"),
        new MapAreaInfo().rect("704,231,719,246").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("711,305,726,320").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("664,531,679,546").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("575,237,590,252").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("544,238,559,253").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("523,452,538,467").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("497,460,512,475").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("371,172,386,187").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("366,210,381,225").content("d6aa7f38-4ec7-4667-8c1c-617010c5d017"),
        new MapAreaInfo().rect("717,587,734,604").content("c3072947-7867-4f19-aa85-6d822634eaf7")
    ], []),
    new MapInfo("TheOozingTemple", "oota/into-darkness", "02-07.jpg", "5ca5abee-b6e6-4e07-b76c-8f6fc1e02df3", [
        new MapAreaInfo("1BoxedIn", "307,622,332,647"),
        new MapAreaInfo("2DrippingDeath", "166,473,191,498"),
        new MapAreaInfo("2DrippingDeath", "89,67,114,92"),
        new MapAreaInfo("2DrippingDeath", "426,310,451,335"),
        new MapAreaInfo("3Glabbagool", "141,391,166,416"),
        new MapAreaInfo("4PuddingPits", "360,175,385,200"),
        new MapAreaInfo("4PuddingPits", "334,146,359,171"),
        new MapAreaInfo("4PuddingPits", "361,119,386,144"),
        new MapAreaInfo("4PuddingPits", "332,90,357,115"),
        new MapAreaInfo("5FountainofMadness", "263,336,288,361"),
        new MapAreaInfo("6WaterChamber", "564,257,589,282")
    ], []),
    new MapInfo("LostTombofKhaem", "oota/into-darkness", "02-08.jpg", "ab500804-4ea4-4959-bbcb-464db9c7b748", [
        new MapAreaInfo("1EntranceRoom", "107,132,132,157"),
        new MapAreaInfo("2Shrine", "432,296,457,321"),
        new MapAreaInfo("3ServantsSarcophagi", "596,320,621,345"),
        new MapAreaInfo("4FalseTomb", "433,507,458,532"),
        new MapAreaInfo("5TrueTomb", "736,506,761,531")
    ], []),
    new MapInfo("Sloobludop", "oota/the-darklake", "03-01.jpg", "7b389063-80db-4e10-ae3b-2bb1e836c511", [
        new MapAreaInfo("1Gate", "18,325,48,355"),
        new MapAreaInfo("1Gate", "814,342,844,372"),
        new MapAreaInfo("2Docks", "572,171,602,201"),
        new MapAreaInfo("2Docks", "168,170,198,200"),
        new MapAreaInfo("3ShrineoftheSeaMother", "475,396,505,426"),
        new MapAreaInfo("4AltaroftheDeepFather", "389,285,419,315")
    ], ["#SlouchingTowardSloobludop", "#NotableKuotoainSloobludop", "#TheDaysCatch", "#TheOffering", "#TheRitual", "#DemogorgonRises", "#XPAwards"]),
    new MapInfo("Gracklstugh", "oota/gracklstugh", "04-01.jpg", "719b0f54-fecb-4fa6-b645-dfb7e331ecdd", [
        new MapAreaInfo("CityGates", "53,151,73,171"),
        new MapAreaInfo("CityGates", "209,539,229,559"),
        new MapAreaInfo("CityGates", "241,589,261,609"),
        new MapAreaInfo("CityGates", "309,605,329,625"),
        new MapAreaInfo("CityGates", "735,549,755,569"),
        new MapAreaInfo("CityGates", "704,371,724,391"),
        new MapAreaInfo("CityGates", "731,273,751,293"),
        new MapAreaInfo("CityGates", "728,175,748,195"),
        new MapAreaInfo("CityGates", "727,118,747,138"),
        new MapAreaInfo().rect("385,135,451,155").content("31e45e23-afbc-4fa8-b945-c3301592b9a6"),
        new MapAreaInfo().rect("451,135,517,155").content("957ae86b-8de3-4aaa-9901-3aa92efd7f1a"),
        new MapAreaInfo("DarklakeDistrict", "366,205,528,248"),
        new MapAreaInfo("BladeBazaar", "501,177,557,201"),
        new MapAreaInfo("DarklakeBrewery", "641,91,718,118"),
        new MapAreaInfo("OverlakeHold", "588,178,663,205"),
        new MapAreaInfo("TheShatteredSpire", "202,126,290,161"),
        new MapAreaInfo("TheGhohlbrornsLair", "531,233,598,254"),
        new MapAreaInfo("LaduguersFurrow", "303,343,529,389"),
        new MapAreaInfo("WestCleftandEastCleftDistricts", "59,281,156,334"),
        new MapAreaInfo("WestCleftandEastCleftDistricts", "688,415,781,470"),
        new MapAreaInfo("HallsofSacredSpells", "58,231,177,270"),
        new MapAreaInfo("CairngormCavern", "100,448,265,464"),
        new MapAreaInfo("ThemberchaudsLair", "512,565,654,629"),
        new MapAreaInfo("HoldoftheDeepking", "522,425,602,464"),
        new MapAreaInfo("GreatGates", "167,301,187,351"),
        new MapAreaInfo("GreatGates", "619,394,639,444"),
        new MapAreaInfo("AbandonedGuardhouses", "190,312,230,337"),
        new MapAreaInfo("AccesstotheWhorlstoneTunnels", "39,276,49,286"),
        new MapToMapAreaInfo("04-03.jpg", "44,268,5")
    ], ["#WelcometotheCityofBlades", "#RampagingGiant", "#GuestsoftheStoneGuard", "#DarklakeDocks[data-content-chunk-id='31e45e23-afbc-4fa8-b945-c3301592b9a6']",
            "#DarklakeDocks[data-content-chunk-id='957ae86b-8de3-4aaa-9901-3aa92efd7f1a']", "#EnteringDerroTerritory",
            "#AudiencewiththeStonespeaker", "#AgentsoftheWyrmsmith", "#LeavingGracklstugh", "#AudiencewiththeDeepking"]),
    new MapInfo("WhorlstoneTunnels", "oota/gracklstugh", "04-03.jpg", "340e1c98-a857-4950-b50e-dcf6c3e55c0a", [
        new MapAreaInfo("1Entrance", "88,351,108,371"),
        new MapAreaInfo("1aPoolBypass", "110,322,130,342"),
        new MapAreaInfo("1bBuppidosLair", "155,382,175,402"),
        new MapAreaInfo("2DiseasedPool", "184,348,204,368"),
        new MapAreaInfo("3ParadeofFools", "250,356,270,376"),
        new MapAreaInfo("4FungiThicket", "317,347,337,367"),
        new MapAreaInfo("5RaucousMesa", "399,310,419,330"),
        new MapAreaInfo("6DireDen", "479,209,499,229"),
        new MapAreaInfo("7GrayGhostGarden", "424,250,444,270"),
        new MapAreaInfo("8GrayAlchemist", "411,204,431,224"),
        new MapAreaInfo("9FountainofEvil", "378,154,398,174"),
        new MapAreaInfo("10CultistPens", "264,154,284,174"),
        new MapAreaInfo("11QuasitPlayground", "223,184,243,204"),
        new MapAreaInfo("12CultistHideout", "176,229,196,249"),
        new MapAreaInfo("13DumpingPit", "265,76,285,96"),
        new MapAreaInfo("14Obelisk", "458,47,478,67"),
        new MapAreaInfo("14aFungiCoveredDoors", "392,11,422,31"),
        new MapAreaInfo("6DireDen", "290,615,310,635"),
        new MapAreaInfo("7GrayGhostGarden", "537,562,557,582"),
        new MapAreaInfo("8GrayAlchemist", "417,501,437,521"),
        new MapAreaInfo("10CultistPens", "133,753,153,773"),
        new MapAreaInfo("12CultistHideout", "509,712,529,732"),
        new MapAreaInfo("14Obelisk", "163,495,183,515"),
        new MapAreaInfo("FungiPit", "535,588,572,618"),
        new MapAreaInfo("SprinklerTank", "519,575,534,595"),
        new MapAreaInfo("Crates", "534,547,559,558"),
        new MapAreaInfo("SpiralPath", "37,741,119,795"),
        new MapAreaInfo("Trap", "267,750,324,776"),
        new MapAreaInfo("FungiPatches", "354,722,415,737"),
        new MapAreaInfo("Platform", "466,759,525,818"),
        new MapAreaInfo("Obelisk", "79,526,104,551"),
        new MapAreaInfo("RedDragonEgg", "209,508,224,523"),
        new MapToMapAreaInfo("04-01.jpg", "14,377,10")
    ], ["#AreasoftheTunnels"]),
    new MapInfo("NeverlightGrove", "oota/neverlight-grove", "05-01.jpg", "c1a16556-369d-4598-af7a-dd06230f1040", [
        new MapAreaInfo("1FungalWilds", "339,480,369,510"),
        new MapAreaInfo("2NorthernTerraces", "260,198,290,228"),
        new MapAreaInfo("3CentralBasin", "374,361,404,391"),
        new MapAreaInfo("4SouthernTerraces", "490,516,520,546"),
        new MapAreaInfo("5GardenofWelcome", "504,338,534,368"),
        new MapAreaInfo("Yggmorgus", "594,93,777,145")
    ], ["#WeddingRehearsal", "#GiantMushroomTower", "#LeavingNeverlightGrove"]),
    new MapInfo("Chapter6Blingdenstone", "oota/blingdenstone", "06-02.jpg", "e35367c6-91bb-42cc-8d61-1189bd7a0ee7", [
        new MapAreaInfo("1Stairs", "64,238,94,268"),
        new MapAreaInfo("1aCartLift", "87,188,117,218"),
        new MapAreaInfo("2MainGate", "133,237,163,267"),
        new MapAreaInfo("3Maze", "239,289,269,319"),
        new MapAreaInfo("4Gauntlet", "363,293,393,323"),
        new MapAreaInfo("5ReceptionHall", "451,229,481,259"),
        new MapAreaInfo("6Barracks", "481,276,511,306"),
        new MapAreaInfo("7TradersGrotto", "544,227,574,257"),
        new MapAreaInfo("8TheRubyintheRough", "485,335,515,365"),
        new MapAreaInfo("9CultivationCave", "617,320,647,350"),
        new MapAreaInfo("10StagingArea", "543,425,573,455"),
        new MapAreaInfo("11CavesofClatter", "568,534,598,564"),
        new MapAreaInfo("12aVazuksHome", "412,387,442,417"),
        new MapAreaInfo("12ResidentialCaves", "425,520,455,550"),
        new MapAreaInfo("12ResidentialCaves", "352,466,382,496"),
        new MapAreaInfo("12ResidentialCaves", "255,593,285,623"),
        new MapAreaInfo("13SpeakingStones", "418,449,448,479"),
        new MapAreaInfo("14DiggermattockHall", "456,593,486,623"),
        new MapAreaInfo("15SingingStones", "393,339,423,369"),
        new MapAreaInfo("16TheFoamingMug", "184,578,214,608"),
        new MapAreaInfo("17AbandonedResidences", "642,494,672,524"),
        new MapAreaInfo("18Overlook", "708,574,738,604"),
        new MapAreaInfo("19CrystalGarden", "701,417,731,447"),
        new MapAreaInfo("20NeheedrasLair", "790,455,820,485"),
        new MapAreaInfo("21DrowStatues", "720,469,750,499"),
        new MapAreaInfo("22SteadfastStone", "729,376,759,406"),
        new MapAreaInfo("23MainEntrance", "455,124,485,154"),
        new MapAreaInfo("24RefusePile", "524,129,554,159"),
        new MapAreaInfo("25HallofMiners", "315,78,345,108"),
        new MapAreaInfo("26ChipgrinsRise", "375,103,405,133"),
        new MapAreaInfo("27SecretTunnel", "210,133,240,163"),
        new MapAreaInfo("27SecretTunnel", "235,187,255,207"),
        new MapAreaInfo("27SecretTunnel", "247,126,267,146"),
        new MapAreaInfo("28HouseCenter", "624,182,654,212"),
        new MapAreaInfo("29RuinedStockade", "675,93,705,123"),
        new MapAreaInfo("30ThroneRoom", "759,143,789,173"),
        new MapAreaInfo("OuterBlingdenstone", "48,330,68,350"),
        new MapAreaInfo("InnerBlingdenstone", "325,516,345,536"),
        new MapAreaInfo("Rockblight", "613,452,633,472"),
        new MapAreaInfo("GoldwhiskerWarrens", "263,77,283,97"),
        new MapAreaInfo("ThePuddingCourt", "520,93,540,113")
    ], ["#BattleforBlingdenstone", "#BlingdenstoneFactions", "#TaskList", "#CryHavoc", "#OozingRoyalty",
            "#ThePuddingKing", "#LeavingBlingdenstone"]).chMap(),
    new MapInfo("OuterBlingdenstone", "oota/blingdenstone", "ooa06-03.png", "b8636a85-5316-4ffd-9193-ec3cf073c905", [
        new MapAreaInfo("1Stairs", "46,170,66,190"),
        new MapAreaInfo("1aCartLift", "64,135,84,155"),
        new MapAreaInfo("2MainGate", "95,169,115,189"),
        new MapAreaInfo("3Maze", "171,206,191,226"),
        new MapAreaInfo("4Gauntlet", "258,208,278,228"),
        new MapAreaInfo("27SecretTunnel", "179,125,199,145"),
        new MapAreaInfo("OuterBlingdenstone", "32,234,47,249")
    ], []),
    new MapInfo("InnerBlingdenstone", "oota/blingdenstone", "06-01.png", "26fd0963-b1a5-4fe4-99dd-5e87a38bbeef", [
        new MapAreaInfo("5ReceptionHall", "274,120,294,140"),
        new MapAreaInfo("6Barracks", "295,151,315,171"),
        new MapAreaInfo("7TradersGrotto", "337,118,357,138"),
        new MapAreaInfo("8TheRubyintheRough", "297,191,317,211"),
        new MapAreaInfo("9CultivationCave", "386,181,406,201"),
        new MapAreaInfo("10StagingArea", "336,251,356,271"),
        new MapAreaInfo("11CavesofClatter", "353,325,373,345"),
        new MapAreaInfo("12aVazuksHome", "248,226,268,246"),
        new MapAreaInfo("12ResidentialCaves", "257,316,277,336"),
        new MapAreaInfo("12ResidentialCaves", "207,279,227,299"),
        new MapAreaInfo("12ResidentialCaves", "142,365,162,385"),
        new MapAreaInfo("13SpeakingStones", "252,268,272,288"),
        new MapAreaInfo("14DiggermattockHall", "278,364,298,384"),
        new MapAreaInfo("15SingingStones", "235,194,255,214"),
        new MapAreaInfo("16TheFoamingMug", "94,354,114,374"),
        new MapAreaInfo("InnerBlingdenstone", "53,283,68,298")
    ], []),
    new MapInfo("Rockblight", "oota/blingdenstone", "ooa06-05.png", "fe834076-85cd-47ac-a0a4-260fb9fdbd21", [
        new MapAreaInfo("17AbandonedResidences", "214,174,239,199"),
        new MapAreaInfo("18Overlook", "273,247,298,272"),
        new MapAreaInfo("19CrystalGarden", "267,106,292,131"),
        new MapAreaInfo("20NeheedrasLair", "347,140,372,165"),
        new MapAreaInfo("21DrowStatues", "284,152,309,177"),
        new MapAreaInfo("22SteadfastStone", "292,67,317,92"),
        new MapAreaInfo("Rockblight", "189,139,204,154")
    ], []),
    new MapInfo("GoldwhiskerWarrens", "oota/blingdenstone", "ooa06-06.png", "e3fd0b50-a0cd-4f66-b00b-fdc2bc5c930e", [
        new MapAreaInfo("23MainEntrance", "266,92,286,112"),
        new MapAreaInfo("24RefusePile", "319,95,339,115"),
        new MapAreaInfo("25HallofMiners", "158,56,178,76"),
        new MapAreaInfo("26ChipgrinsRise", "205,75,225,95"),
        new MapAreaInfo("27SecretTunnel", "78,98,98,118"),
        new MapAreaInfo("27SecretTunnel", "102,89,122,109"),
        new MapAreaInfo("GoldwhiskerWarrens", "118,52,133,67")
    ], []),
    new MapInfo("ThePuddingCourt", "oota/blingdenstone", "ooa06-07.png", "b44b418a-2d5d-4a7c-940d-45dec2d9ff99", [
        new MapAreaInfo("28HouseCenter", "210,153,235,178"),
        new MapAreaInfo("29RuinedStockade", "253,79,278,104"),
        new MapAreaInfo("30ThroneRoom", "324,121,349,146"),
        new MapAreaInfo("ThePuddingCourt", "122,80,137,95")
    ], []),
    new MapInfo("MantolDerith", "oota/mantol-derith", "09-01.jpg", "268961d2-f944-49cd-9568-75cb5a3be678", [
        new MapAreaInfo("1SecretEntrances", "692,74,710,92").content("087425ed-e489-4cf5-ac94-3ca9ac2e05dd", "896d2c03-9920-4057-ace5-9eca16f9f009"),
        new MapAreaInfo("1SecretEntrances", "638,339,656,357").content("087425ed-e489-4cf5-ac94-3ca9ac2e05dd", "896d2c03-9920-4057-ace5-9eca16f9f009"),
        new MapAreaInfo("1SecretEntrances", "703,580,721,598").content("087425ed-e489-4cf5-ac94-3ca9ac2e05dd", "896d2c03-9920-4057-ace5-9eca16f9f009"),
        new MapAreaInfo("1SecretEntrances", "156,324,173,341").content("087425ed-e489-4cf5-ac94-3ca9ac2e05dd", "896d2c03-9920-4057-ace5-9eca16f9f009"),
        new MapAreaInfo("1SecretEntrances", "320,43,338,61").content("087425ed-e489-4cf5-ac94-3ca9ac2e05dd", "896d2c03-9920-4057-ace5-9eca16f9f009"),
        new MapAreaInfo("1aNorthwestEntrance", "714,55,738,79"),
        new MapAreaInfo("1bNorthEntrance", "618,297,648,327"),
        new MapAreaInfo("1cNortheastEntrance", "667,568,697,598"),
        new MapAreaInfo("1dSouthEntranceandShore", "55,479,85,509"),
        new MapAreaInfo("1dSouthEntranceandShore", "164,343,188,367"),
        new MapAreaInfo("1eZhentarimSecretDoor", "359,36,389,66"),
        new MapAreaInfo("2Trench", "397,332,427,362"),
        new MapAreaInfo("3MainCavern", "360,268,390,298"),
        new MapAreaInfo("3aWestMarketplace", "396,268,426,298"),
        new MapAreaInfo("3bEastMarketplace", "399,383,429,413"),
        new MapAreaInfo("4DrowEnclave", "403,154,433,184").content("468579a0-b925-4ead-86d5-a875b2e86326", "93f7ef15-18f2-4868-98fa-ec2616b488e5"),
        new MapAreaInfo("4aDrowFungiGrove", "440,154,470,184"),
        new MapAreaInfo("4bDrowWarehouse", "514,133,544,163"),
        new MapAreaInfo("5DuergarEnclave", "313,444,343,474").content("cdee28d4-ffd8-4c74-b8cc-001ff5f52f3e", "efffa3c0-d853-41f7-a4eb-436e1c727de2"),
        new MapAreaInfo("5aDuergarFungiGrove", "350,444,380,474"),
        new MapAreaInfo("5bDuergarWarehouse", "226,494,256,524"),
        new MapAreaInfo("6SvirfneblinEnclave", "458,386,488,416").content("7699a621-8254-497d-9895-0f22819726cb", "5316446b-37e4-4190-b873-7dd5a2a7a234"),
        new MapAreaInfo("6aSvirfneblinFungiGrove", "494,386,524,416"),
        new MapAreaInfo("6bSvirfneblinWarehouse", "565,453,595,483"),
        new MapAreaInfo("7ZhentarimEnclave", "247,212,277,242").content("39db6144-65b0-48bb-958f-9d4724b9beac", "b1c5aa30-0c35-4941-80be-fd9c6846fd07"),
        new MapAreaInfo("7aZhentarimEncampment", "283,212,313,242"),
        new MapAreaInfo("7bZhentarimWarehouse", "173,82,203,112"),
        new MapAreaInfo().rect("341,62,359,80").content("68b1c272-4b24-48ae-9741-d9f090603f3a"), // 7 - Ghazrim’s Shed
        new MapAreaInfo().rect("214,47,232,65").content("ba4de3af-db9b-4ac3-a3e9-fd25fade54a2"), // 7 - 1
        new MapAreaInfo().rect("258,48,276,66").content("3e17c6d2-163f-4f74-8be0-6eef933e8282"), // 7 - 2
        new MapAreaInfo().rect("296,48,314,66").content("49364db2-4502-4bfa-9c43-c2a2d3295281"), // 7 - 3
        new MapAreaInfo().rect("215,82,233,100").content("b462b3b6-ed37-45e5-8d92-d47d336c8358"), // 7 - 4
        new MapAreaInfo().rect("238,83,256,101").content("0b8642d0-3f77-432f-b58f-53aa93bab210"), // 7 - 5
        new MapAreaInfo().rect("261,83,279,101").content("fd4be872-8275-4fac-8f12-ade74a85b66f"), // 7 - 6
        new MapAreaInfo().rect("286,84,304,102").content("9b745d67-7a6b-4550-aa0f-5cbd89be9099"), // 7 - 7
        new MapAreaInfo().rect("309,84,327,102").content("4935a728-8777-4d96-a80d-136aaa968ee5"), // 7 - 8
        new MapAreaInfo().rect("343,89,361,107").content("0c1cd8bd-7de7-44c6-ba84-f5f2d889a9ac"), // 7 - 9
        new MapAreaInfo().rect("215,114,233,132").content("c8327a62-6ea3-4c8e-93f2-99338efadf0b"), // 7 - 10
        new MapAreaInfo().rect("249,114,267,132").content("44f39a0d-443e-424d-b96f-ac81545f1b12"), // 7 - 11
        new MapAreaInfo().rect("294,110,312,128").content("0c04af33-210b-464d-ba68-a96ff3e02f86") // 7 - 12
    ], ["#ImportantNPCs", "#LeavingMantolDerith", "#FollowUpEncounters"]),
    new MapInfo("TroglodyteLair", "oota/the-wormwrithings", "13-01.jpg", "c57818fb-e7b7-4bfa-85d3-186619046c88", [
        new MapAreaInfo("1EntranceTunnel", "368,585,398,615"),
        new MapAreaInfo("2CaveFloor", "428,400,458,430"),
        new MapAreaInfo("3Rise", "302,430,332,460"),
        new MapAreaInfo("4Basin", "364,222,394,252"),
        new MapAreaInfo("5SuppliesandCaptives", "620,479,650,509"),
        new MapAreaInfo("6SteamVent", "757,532,787,562"),
        new MapAreaInfo("7TroglodyteOutpost", "738,359,768,389"),
        new MapAreaInfo("8RoperLair", "677,233,707,263"),
        new MapAreaInfo("9SunkenPool", "602,230,632,260"),
        new MapAreaInfo("10Ruins", "98,505,128,535"),
        new MapAreaInfo("11SpawningPool", "168,329,198,359"),
        new MapAreaInfo("12GeothermicVents", "62,339,92,369"),
        new MapAreaInfo("13EmptyCave", "130,254,160,284"),
        new MapAreaInfo("14RallyPoint", "110,120,140,150"),
        new MapAreaInfo("15ExitTunnel", "202,40,232,70"),
        new MapAreaInfo().rect("412,589,437,614").content("1b300013-ea13-4ad2-b98c-f551335ba966"), // 1 - secret
        new MapAreaInfo().rect("602,541,627,566").content("8022756a-dd28-4115-8852-885d2f5503d5"), // 5 - secret
        new MapAreaInfo().rect("117,216,142,241").content("56678c42-d29f-4525-a833-f8a1bd1a8230"), // 13 - secret 
        new MapAreaInfo().rect("111,169,136,194").content("2f19eda0-b6d9-465f-a42b-0d5784b6875d") // 14 - secret
    ], ["#ResolvingtheStandoff"]),
    new MapInfo("WormNursery", "oota/the-wormwrithings", "13-02.jpg", "d8124621-73b1-4f65-b77f-ba1d27f6ad03", [
        new MapAreaInfo("1EntryCavern", "50,303,75,328"),
        new MapAreaInfo("2FungusCave", "120,134,145,159"),
        new MapAreaInfo("3Ossuary", "175,265,200,290"),
        new MapAreaInfo("4Chasm", "131,377,156,402"),
        new MapAreaInfo("5EchoChambers", "432,125,457,150"),
        new MapAreaInfo("5EchoChambers", "450,567,475,592"),
        new MapAreaInfo("5EchoChambers", "739,355,764,380"),
        new MapAreaInfo("6CaretakersQuarters", "585,575,610,600"),
        new MapAreaInfo("7EntryChamber", "327,600,352,625"),
        new MapAreaInfo("8EggChamber", "346,312,371,337"),
        new MapAreaInfo("9BatCave", "596,82,621,107"),
        new MapAreaInfo("10SlopCave", "578,202,603,227"),
        new MapAreaInfo("11SpiderNest", "704,203,729,228"),
        new MapAreaInfo("12Chasm", "650,365,675,390"),
        new MapAreaInfo("13ExitTunnel", "809,281,834,306"),
        new MapAreaInfo().rect("255,314,280,339").content("c6c27296-df4f-4c48-b933-9ddbb69b4c2f", "9e17dd97-8b73-47ba-bd70-441fdcad5166"), // t1
        new MapAreaInfo().rect("620,424,645,449").content("c6c27296-df4f-4c48-b933-9ddbb69b4c2f", "9e17dd97-8b73-47ba-bd70-441fdcad5166"), // t2
        new MapAreaInfo().rect("633,477,658,502").content("c6c27296-df4f-4c48-b933-9ddbb69b4c2f", "9e17dd97-8b73-47ba-bd70-441fdcad5166") // t3
    ], []),
    new MapInfo("Menzoberranzan", "oota/the-city-of-spiders", "15-01.jpg", "dc132ec8-0272-4688-95ab-c72bca642fa0", [
        new MapAreaInfo("TheBazaar", "368,218,450,235"),
        new MapAreaInfo("TheBraeryn", "618,292,708,310"),
        new MapAreaInfo("Donigarten", "686,439,770,456"),
        new MapAreaInfo("Duthcloim", "420,258,499,277"),
        new MapAreaInfo("Eastmyr", "493,338,558,359"),
        new MapAreaInfo("Kyorbblivvin", "287,367,378,400"),
        new MapAreaInfo("Narbondel", "256,265,323,286"),
        new MapAreaInfo("Narbondellyn", "255,302,362,327"),
        new MapAreaInfo("Quellarzorl", "331,430,437,457"),
        new MapAreaInfo("Clawrift", "573,240,624,286"),
        new MapAreaInfo("Mistrift", "286,191,346,216"),
        new MapAreaInfo("Westrift", "176,121,209,155"),
        new MapAreaInfo("TierBreche", "476,137,531,168"),
        new MapAreaInfo("WestWall", "218,125,296,145"),
        new MapAreaInfo().rect("139,218,220,252").content("45adf9a9-0f4e-4598-8641-1cc41f521a26"), // Lolth’s Web
        new MapAreaInfo("HouseBaenre", "463,491,555,511"),
        new MapAreaInfo("JarlaxleBaenreofBreganDaerthe", "89,117,154,148"),
        new MapAreaInfo("Sorcere", "429,77,479,93")
    ], ["#TheDarkDominion", "#TheRifts", "#UnexpectedAllies", "#BreganDaerthe", "#CouncilofSpiders",
            "#PrivateMeetings", "#MatronMotherQuenthelBaenre", "#AChangeofHeart", "#GuardsandWards", "#RandomEncountersinSorcere",
            "#GromphsOuterSanctum", "#GromphsInnerSanctum", "#Developments", "#CityLocations"])
];

const extraMapLinks = [];

MapRefs.processMapToMapRefs(maps);

class MapsOotA extends MapRefs {
    static get path() {
        return "oota/";
    }

    static get maps() {
        return maps;
    }

    static get extraMapLinks() {
        return extraMapLinks;
    }
}

export default MapsOotA;