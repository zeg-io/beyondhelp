import MapAreaInfo from "../MapAreaInfo";
import MapInfo from "../MapInfo";
import MapRefs from "../MapRefs";
import MapToMapAreaInfo from "../MapToMapAreaInfo";

const maps = [
    new MapInfo("Overview", "introduction", "hotdq-00-04.jpg", "fa02f69a-6d97-421f-8dbf-bfddad32d60b", [
        new MapAreaInfo("Episode1GreenestinFlames", "515,1097,529,1111", "greenest-in-flames"),
        new MapAreaInfo("TheCamp", "515,1121,529,1135", "raiders-camp").content("41334c84-d454-4862-b038-f3e8414be730", "3556358a-42c4-4be1-893b-5d2af79ca157"),
        new MapAreaInfo("Episode3DragonHatchery", "515,1135,529,1149", "dragon-hatchery"),
        new MapAreaInfo("Elturel", "491,946,505,960", "on-the-road"),
        new MapAreaInfo("BaldursGate", "348,940,362,954", "on-the-road"),
        new MapAreaInfo("Waterdeep", "257,564,271,578", "construction-ahead"),
        new MapAreaInfo("CarnathRoadhouse", "218,462,232,476", "construction-ahead").content("2b142c76-82eb-4106-851f-5c23a8a6a706", "ec6f2da3-7b1c-4ee1-b725-a8db2735ac38"),
        new MapAreaInfo("CastleNaerytar", "206,439,220,453", "castle-naerytar"),
        new MapAreaInfo("Episode7HuntingLodge", "622,621,636,635", "hunting-lodge"),
        new MapAreaInfo("SkyreachCastle", "655,629,669,643", "castle-in-the-clouds"),
        new MapToMapAreaInfo("hotdq-01-02.jpg", "505,1104,7"),
        new MapToMapAreaInfo("hotdq-02-03.jpg", "505,1128,7"),
        new MapToMapAreaInfo("episode-3-dragon-hatchery.jpg", "505,1142,7"),
        new MapToMapAreaInfo("hotdq-05-02.jpg", "242,469,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "196,446,7"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-ground-floor.jpg", "612,628,7"),
        new MapToMapAreaInfo("parnast-village.jpg", "651,624,7"),
        new MapToMapAreaInfo("skyreach-castle.jpg", "679,636,7")
    ], []),
    new MapInfo("Episode1GreenestinFlames", "greenest-in-flames", "hotdq-01-02.jpg", "bdde01a3-cdca-4282-a7ff-b9c14c74972e", [
        new MapAreaInfo("SeektheKeep", "438,319,468,349"),
        new MapAreaInfo("TheOldTunnel", "513,372,543,402"),
        new MapAreaInfo("Sanctuary", "751,412,781,442"),
        new MapAreaInfo("SavetheMill", "40,432,70,462")
    ], ["#CharacterHooks", "#TheApproach", "#GeneralFeatures", "#ImportantCharacters", "#WanderingEncounters",
            "#Missions", "#TheSallyPort", "#DragonAttack", "#Prisoners", "#HalfDragonChampion"]).chMap(),
    new MapInfo("Episode2RaidersCamp", "raiders-camp", "hotdq-02-03.jpg", "d2749d0d-8ce3-4e6a-99af-22b39fb68c78", [
        new MapAreaInfo().rect(354, 464, 384, 494).content("a88e2ce8-27db-4d21-b7f2-65411bab6521"),
        new MapAreaInfo().rect(662, 347, 692, 377).content("1e0f561d-cb1a-4b77-956a-b644dc5bfa62"),
        new MapAreaInfo("LeosinErlanthar", "601,443,631,473"),
        new MapAreaInfo().rect(721, 383, 751, 413).content("2f3c656f-f6ae-4798-a3d7-b8156fa0b35f"),
        new MapAreaInfo().rect(156, 195, 256, 225).content("8a1b615f-4ae2-4aa7-b2a3-0aa2612f9021"),
        new MapAreaInfo().rect(574, 387, 674, 417).content("8a1b615f-4ae2-4aa7-b2a3-0aa2612f9021"),
        new MapAreaInfo().rect(692, 142, 792, 172).content("41334c84-d454-4862-b038-f3e8414be730"),
        new MapToMapAreaInfo("episode-3-dragon-hatchery.jpg", "769,393,15")
    ], ["#GeneralFeatures", "#CampAlertness", "#ExploringtheCamp", "#Rewards"]).chMap(),
    new MapInfo("Episode3DragonHatchery", "dragon-hatchery", "episode-3-dragon-hatchery.jpg", "9cc74f50-90b8-465c-ac7e-7dcff1297559", [
        new MapAreaInfo("1CaveEntrance", "108,305,138,335"),
        new MapAreaInfo("2ConcealedPassage", "258,444,288,474"),
        new MapAreaInfo("3FungusGarden", "388,350,418,380"),
        new MapAreaInfo("4StirgeLair", "584,243,614,273"),
        new MapAreaInfo("5TroglodyteIncursion", "646,112,676,142"),
        new MapAreaInfo("6MeatLocker", "723,300,753,330"),
        new MapAreaInfo("7DrakeNursery", "473,162,503,192"),
        new MapAreaInfo("8KoboldBarracks", "271,169,301,199"),
        new MapAreaInfo("9DragonShrine", "502,412,532,442"),
        new MapAreaInfo("10DragonHatchery", "693,410,723,440"),
        new MapAreaInfo("10ABlackDragonEggs", "694,496,724,526"),
        new MapAreaInfo("10BKoboldsinHiding", "790,442,820,472"),
        new MapAreaInfo("11FrulamMondathsChamber", "322,529,352,559"),
        new MapAreaInfo("12GuardBarracks", "161,540,191,570"),
        new MapAreaInfo("13TreasureStorage", "89,443,119,473"),
        new MapAreaInfo().rho(227, 479, 247, 499).content("4d18ffad-a7a7-41f5-bdb7-85cda3705246"),
        new MapAreaInfo("TrappedStairs").rho(346, 416, 366, 436),
        new MapToMapAreaInfo("hotdq-02-03.jpg", "23,312,10")
    ], ["#GeneralFeatures", "#WanderingMonsters", "#AreasoftheHatchery", "#Rewards"]).chMap(),
    new MapInfo("CarnathRoadhouse", "construction-ahead", "hotdq-05-02.jpg", "86120207-bb8c-428b-ae28-46c31b4af991", [
        new MapAreaInfo("1Courtyard", "207,281,227,301"),
        new MapAreaInfo("2Stables", "195,447,215,467"),
        new MapAreaInfo("3Warehouse", "304,378,324,398"),
        new MapAreaInfo("4StrongRoom", "343,300,363,320"),
        new MapAreaInfo("5Rooms", "284,107,304,127"),
        new MapAreaInfo("5Rooms", "207,107,227,127"),
        new MapAreaInfo("5Rooms", "148,107,168,127"),
        new MapAreaInfo("5Rooms", "71,165,91,185"),
        new MapAreaInfo("5Rooms", "71,223,91,243"),
        new MapAreaInfo("5Rooms", "71,281,91,301"),
        new MapAreaInfo("5Rooms", "71,339,91,359"),
        new MapAreaInfo("5Rooms", "653,107,673,127"),
        new MapAreaInfo("5Rooms", "614,107,634,127"),
        new MapAreaInfo("5Rooms", "576,107,596,127"),
        new MapAreaInfo("5Rooms", "517,107,537,127"),
        new MapAreaInfo("5Rooms", "479,185,499,205"),
        new MapAreaInfo("5Rooms", "479,242,499,262"),
        new MapAreaInfo("5Rooms", "479,291,499,311"),
        new MapAreaInfo("5Rooms", "479,330,499,350"),
        new MapAreaInfo("5Rooms", "479,378,499,398"),
        new MapAreaInfo("6BogLucksRoom", "71,397,91,417"),
        new MapAreaInfo("7ArdredBriferhewsRoom", "102,107,122,127"),
        new MapAreaInfo("8Kitchen", "731,359,751,379")
    ], ["#EssentialIngredients", "#TrackingtheLoad", "#GrudgeMatch"]),
    new MapInfo("GroundFloor", "castle-naerytar", "episode-6-castle-naerytar-ground-level.jpg", "ae988e89-dfca-47fe-b641-8f0723717f37", [
        new MapAreaInfo("1Landing", "116,301,146,331"),
        new MapAreaInfo("2AnimalStockade", "116,461,146,491"),
        new MapAreaInfo("3Longhouses", "223,488,253,518"),
        new MapAreaInfo("3Longhouses", "410,301,440,331"),
        new MapAreaInfo("4Huts", "143,140,173,170"),
        new MapAreaInfo("4Huts", "304,114,334,144"),
        new MapAreaInfo("5Moat", "482,314,512,344"),
        new MapAreaInfo("6MainGate", "344,368,374,398"),
        new MapAreaInfo("1ABarbican", "335,466,355,486"),
        new MapAreaInfo("1BCauseway", "496,466,516,486"),
        new MapAreaInfo("1COuterWard", "629,359,649,379"),
        new MapAreaInfo("1DInnerWard", "683,247,703,267"),
        new MapAreaInfo("1ENorthwestTower", "686,174,706,194"),
        new MapAreaInfo("1FStables", "709,330,729,350"),
        new MapAreaInfo("1GLowerBarracks", "697,386,717,406"),
        new MapAreaInfo("1HForgeandArmory", "640,455,660,475"),
        new MapAreaInfo("1ILizardfolkReadyRoom", "682,466,702,486"),
        new MapAreaInfo("1JLizardfolkSleepingRoom", "711,439,731,459"),
        new MapAreaInfo("1KLizardfolkSleepingRoom", "736,466,756,486"),
        new MapAreaInfo("1LChapel", "561,397,581,417"),
        new MapAreaInfo("1MStoreroom", "521,381,541,401"),
        new MapAreaInfo("1NRectory", "494,398,514,418"),
        new MapAreaInfo("1OArchersGallery", "532,436,552,456"),
        new MapAreaInfo("1PKitchen", "548,332,568,352"),
        new MapAreaInfo("1QGreatHall", "549,267,569,287"),
        new MapAreaInfo("1RSouthwestTowerAntechamber", "550,187,570,207"),
        new MapAreaInfo("1SSubterraneanEntrance", "516,169,536,189"),
        new MapAreaInfo("1TUnusedChamber", "506,215,526,235"),
        new MapAreaInfo("1UKeepEntrance", "628,245,648,265"),
        new MapAreaInfo("1VWestGuestRooms", "630,283,650,303"),
        new MapAreaInfo("1VWestGuestRooms", "649,263,669,283"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "377,513,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "517,428,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "635,447,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "722,501,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "712,425,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "553,366,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "616,283,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "726,188,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "509,199,7"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-dungeon.jpg", "523,199,7")
    ], ["#OutsideCastleNaerytar", "#AreasOutsidetheCastle", "#InsideCastleNaerytar"]),
    new MapInfo("SecondFloor", "castle-naerytar", "episode-6-castle-naerytar-upper-level-2.jpg", "7870944a-171c-476e-83c6-7bcedb3eabe9", [
        new MapAreaInfo("2AUpperBarbican", "448,628,478,658"),
        new MapAreaInfo("2ERottedFloor", "44,116,74,146"),
        new MapAreaInfo("2FStablesLoft", "266,112,296,142"),
        new MapAreaInfo("2GUpperBarracks", "338,113,368,143"),
        new MapAreaInfo("2HArsenal", "448,204,478,234"),
        new MapAreaInfo("2IJKVacantRooms", "450,75,480,105"),
        new MapAreaInfo("2IJKVacantRooms", "415,110,445,140"),
        new MapAreaInfo("2IJKVacantRooms", "453,153,483,183"),
        new MapAreaInfo("2LOuterLibrary", "370,407,400,437"),
        new MapAreaInfo("2MReadingRoom", "337,371,367,401"),
        new MapAreaInfo("2NLibrary", "377,331,407,361"),
        new MapAreaInfo("2PKitchenStorage", "270,331,300,361"),
        new MapAreaInfo("2RCultistsSleepingChamber", "80,331,110,361"),
        new MapAreaInfo("2TCultistsSleepingChamber", "111,392,141,422"),
        new MapAreaInfo("2UDralmorrerBorngraysCommonRoom", "154,233,184,263"),
        new MapAreaInfo("2VWBorngraysSleepingandDressingRooms", "194,224,224,254"),
        new MapAreaInfo("2VWBorngraysSleepingandDressingRooms", "171,193,201,223"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "493,601,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "401,399,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "431,240,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "396,156,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "514,112,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "83,395,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "103,156,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "307,358,6"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "196,272,6"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "401,380,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "493,112,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "396,137,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "83,414,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "86,121,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "318,350,6"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-3.jpg", "205,263,6")
    ], []),
    new MapInfo("ThirdFloor", "castle-naerytar", "episode-6-castle-naerytar-upper-level-3.jpg", "d6aca5d2-d6e4-4eb7-ba29-6b007c309b5b", [
        new MapAreaInfo("3ESpectersSanctum", "47,144,77,174"),
        new MapAreaInfo("3GUnusedChamber", "336,113,366,143"),
        new MapAreaInfo("3HIJSpidersLair", "450,146,480,176"),
        new MapAreaInfo("3HIJSpidersLair", "456,76,486,106"),
        new MapAreaInfo("3HIJSpidersLair", "415,114,445,144"),
        new MapAreaInfo("3LRezmirsOffice", "367,407,397,437"),
        new MapAreaInfo("3MRezmirsSittingRoom", "340,335,370,365"),
        new MapAreaInfo("3NRezmirsSleepingChamber", "393,315,423,345"),
        new MapAreaInfo("3ORezmirsSanctuary", "339,301,369,331"),
        new MapAreaInfo("3PKitchenStorage", "268,331,298,361"),
        new MapAreaInfo("3RCultistsSleepingChamber", "39,372,69,402"),
        new MapAreaInfo("3SUnusedRoom", "80,332,110,362"),
        new MapAreaInfo("3TCultistsStudy", "108,392,138,422"),
        new MapAreaInfo("3UObservatory", "172,224,202,254"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "401,381,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "313,354,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "491,126,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "396,137,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "200,268,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "83,414,10"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-upper-level-2.jpg", "85,120,10")
    ], []),
    new MapInfo("BeneaththeCastle", "castle-naerytar", "episode-6-castle-naerytar-dungeon.jpg", "baf67204-9d06-43a6-950d-8d4a7e698ee7", [
        new MapAreaInfo("1EntryCavern", "603,283,623,303"),
        new MapAreaInfo("2GrayOozeLair", "723,224,743,244"),
        new MapAreaInfo("3MudRoom", "723,464,743,484"),
        new MapAreaInfo("4CentipedeLair", "583,464,603,484"),
        new MapAreaInfo("5EmptyChamber", "543,383,563,403"),
        new MapAreaInfo("6FrogLake", "377,327,397,347"),
        new MapAreaInfo("7FrogLanding", "183,444,203,464"),
        new MapAreaInfo("8TadpoleHatchery", "441,504,461,524"),
        new MapAreaInfo("9Crane", "461,122,481,142"),
        new MapAreaInfo("10MistyRoom", "292,115,312,135"),
        new MapAreaInfo("11FrogShrine", "123,202,143,222"),
        new MapAreaInfo("12PharblexsSanctum", "61,305,81,325"),
        new MapAreaInfo("13TotheGraypeakMountains", "110,89,130,109"),
        new MapToMapAreaInfo("episode-6-castle-naerytar-ground-level.jpg", "655,355,10")
    ], ["#GeneralFeaturesoftheCave", "#AreasoftheCave"]),
    new MapInfo("LodgeGroundFloor", "hunting-lodge", "episode-7-hunting-lodge-ground-floor.jpg", "566a5d33-c3e7-40e4-9d89-b13c21b7657a", [
        new MapAreaInfo("2HuntingKennel", "697,111,722,136"),
        new MapAreaInfo("3StablesandWell", "689,338,714,363"),
        new MapAreaInfo("4CloakRoomandGuardPost", "287,328,312,353"),
        new MapAreaInfo("5SmallHall", "286,269,311,294"),
        new MapAreaInfo("6ThreeHoundsParlor", "457,361,482,386"),
        new MapAreaInfo("7Kitchen", "298,156,323,181"),
        new MapAreaInfo("8Pantry", "67,166,92,191"),
        new MapAreaInfo("9Basement", "116,191,141,216"),
        new MapAreaInfo("10GuestChamber", "103,237,128,262"),
        new MapAreaInfo("10GuestChamber", "104,298,129,323"),
        new MapAreaInfo("11WhiteStagParlor", "118,385,143,410"),
        new MapAreaInfo("12KoboldServants", "519,153,544,178"),
        new MapAreaInfo("13HumanServants", "422,159,447,184"),
        new MapAreaInfo("14Bath", "506,240,531,265"),
        new MapAreaInfo("15Linens", "422,240,447,265"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-upper-floor.jpg", "152,132,10"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-upper-floor.jpg", "299,230,10"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-upper-floor.jpg", "156,204,10")
    ], ["#OutsidetheLodge", "#OutdoorPatrol", "#TrollPursuit", "#1PortalStones"]),
    new MapInfo("LodgeUpperFloor", "hunting-lodge", "episode-7-hunting-lodge-upper-floor.jpg", "f09cde5d-bbe0-49f2-9dcc-12080ec06e33", [
        new MapAreaInfo("9Basement", "710,105,740,135"),
        new MapAreaInfo("10GuestChamber", "487,352,517,382"),
        new MapAreaInfo("10GuestChamber", "487,439,517,469"),
        new MapAreaInfo("14Bath", "120,355,150,385"),
        new MapAreaInfo("16TalissHall", "131,535,161,565"),
        new MapAreaInfo("17Armory", "105,269,135,299"),
        new MapAreaInfo("18TalissBedchamber", "460,539,490,569"),
        new MapAreaInfo("19BodyguardsChamber", "90,428,120,458"),
        new MapAreaInfo("20QueenofDragonsChamber", "304,252,334,282"),
        new MapAreaInfo("21TrophyRoom", "475,254,505,284"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-ground-floor.jpg", "177,232,10"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-ground-floor.jpg", "319,341,10"),
        new MapToMapAreaInfo("episode-7-hunting-lodge-ground-floor.jpg", "778,91,10")
    ], ["#22PerytonRoost"]),
    new MapInfo("Parnast", "castle-in-the-clouds", "parnast-village.jpg", "7b575989-8204-4b54-9383-d651d4d421b9", [
        new MapAreaInfo("1VillageofParnast", "64,37,94,67"),
        new MapAreaInfo("2TheGoldenTankard", "386,401,416,431"),
        new MapAreaInfo("3TheStable", "251,72,281,102"),
        new MapAreaInfo("4ShrineofAxes", "229,333,259,363"),
        new MapAreaInfo("5VillageWellandSquare", "284,221,314,251"),
        new MapToMapAreaInfo("skyreach-castle.jpg", "107,701,15")
    ], ["#RumorsandInformation"]).chMap(),
    new MapInfo("SkyreachCastle", "castle-in-the-clouds", "skyreach-castle.jpg", "86ce3b45-ab6f-4a35-ba5e-ab7a87c504b7", [
        new MapAreaInfo("6MainGate", "277,689,302,709"),
        new MapAreaInfo("6AGatewayandGolems", "255,694,275,714"),
        new MapAreaInfo("6BGateTowers", "232,652,252,672"),
        new MapAreaInfo("6BGateTowers", "270,727,290,747"),
        new MapAreaInfo("7LowerCourtyard", "350,648,370,668"),
        new MapAreaInfo("7LowerCourtyard", "296,665,416,680"),
        new MapAreaInfo("7LowerCourtyard", "360,446,408,464"),
        new MapAreaInfo("8Stables", "288,600,308,620"),
        new MapAreaInfo("8Stables", "305,620,344,635"),
        new MapAreaInfo("9CultistBarracks", "368,742,388,762"),
        new MapAreaInfo("9CultistBarracks", "327,723,410,736"),
        new MapAreaInfo("10StoneGiantsChamber", "421,631,441,651"),
        new MapAreaInfo("11RezmirsChamber", "467,638,487,658"),
        new MapAreaInfo("12RedWizardsRoom", "532,575,552,595"),
        new MapAreaInfo("13Storeroom", "509,637,529,657"),
        new MapAreaInfo("14GuestChamber", "432,580,452,600"),
        new MapAreaInfo("15Kitchen", "478,717,498,737"),
        new MapAreaInfo("16UpperCourtyard", "299,163,319,183"),
        new MapAreaInfo("16UpperCourtyard", "432,391,482,411"),
        new MapAreaInfo("16UpperCourtyard", "271,123,371,153"),
        new MapAreaInfo("17HighBlueTower", "373,183,393,203"),
        new MapAreaInfo("18CrumblingTower", "416,215,436,235"),
        new MapAreaInfo("19SteeringTower", "236,159,256,179"),
        new MapAreaInfo("20OgreBarracks", "391,129,406,144"),
        new MapAreaInfo("20OgreBarracks", "380,119,450,129"),
        new MapAreaInfo("21EsclarottasTomb", "447,153,467,173"),
        new MapAreaInfo("22CloudGiantTower", "534,134,554,154"),
        new MapAreaInfo("23GiantGuestChambers", "491,83,511,103"),
        new MapAreaInfo("23GiantGuestChambers", "294,282,314,302"),
        new MapAreaInfo("23GiantGuestChambers", "324,290,344,310"),
        new MapAreaInfo("23GiantGuestChambers", "374,293,394,313"),
        new MapAreaInfo("23GiantGuestChambers", "322,268,372,283"),
        new MapAreaInfo("24ServantBarracks", "250,242,270,262"),
        new MapAreaInfo("24ServantBarracks", "266,226,311,246"),
        new MapAreaInfo("25MainVault", "138,415,213,440"),
        new MapAreaInfo().rect(367, 212, 387, 232).content("ec6eb232-e55a-4d66-ab27-4a1e9978b52a"),
        new MapAreaInfo().rect(319, 217, 364, 232).content("ec6eb232-e55a-4d66-ab27-4a1e9978b52a"),
        new MapAreaInfo().rect(539, 687, 559, 707).content("ec6eb232-e55a-4d66-ab27-4a1e9978b52a"),
        new MapAreaInfo().rect(527, 659, 577, 682).content("ec6eb232-e55a-4d66-ab27-4a1e9978b52a")
    ], ["#ImportantNonplayerCharacters", "#GeneralFeatures", "#AreasoftheCastle"])
];

class MapsHotDQ extends MapRefs {
    static get path() {
        return "adventures/hotdq/";
    }

    static get maps() {
        return maps;
    }

    static get extraMapLinks() {
        return [];
    }
}

export default MapsHotDQ;