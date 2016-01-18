angular.module('starter.services', [])
.service('districtsServe', function () {
    this.districts = [
        {
            "id": 1,
            "disname": "Dhaka",
            "disnameb": "ঢাকা",
            "division": "Dhaka",
            "population": 12518,
            "area": 1464,
            "popdensity": 8111
        },
        {
            "id": 2,
            "disname": "Narayanganj",
            "disnameb": "নারায়ণগঞ্জ",
            "division": "Dhaka",
            "population": 3074,
            "area": 759,
            "popdensity": 4139
        },
        {
            "id": 3,
            "disname": "Narsingdi",
            "disnameb": "নরসিংদী",
            "division": "Dhaka",
            "population": 2315,
            "area": 1141,
            "popdensity": 1930
        },
        {
            "id": 4,
            "disname": "Gazipur",
            "disnameb": "গাজীপুর",
            "division": "Dhaka",
            "population": 3548,
            "area": 1800,
            "popdensity": 1852
        },
        {
            "id": 5,
            "disname": "Comilla",
            "disnameb": "কুমিল্লা",
            "division": "Chittagong",
            "population": 5603,
            "area": 3085,
            "popdensity": 1719
        },
        {
            "id": 6,
            "disname": "Feni",
            "disnameb": "ফেনী",
            "division": "Chittagong",
            "population": 1496,
            "area": 928,
            "popdensity": 1530
        },
        {
            "id": 7,
            "disname": "Munshiganj",
            "disnameb": "মুন্সীগঞ্জ",
            "division": "Dhaka",
            "population": 1503,
            "area": 955,
            "popdensity": 1487
        },
        {
            "id": 8,
            "disname": "Brahmanbaria",
            "disnameb": "ব্রাহ্মণবাড়ীয়া",
            "division": "Chittagong",
            "population": 2954,
            "area": 1927,
            "popdensity": 1457
        },
        {
            "id": 9,
            "disname": "Chittagong",
            "disnameb": "চট্টগ্রাম",
            "division": "Chittagong",
            "population": 7913,
            "area": 5283,
            "popdensity": 1421
        },
        {
            "id": 10,
            "disname": "Chandpur",
            "disnameb": "চাঁদপুর",
            "division": "Chittagong",
            "population": 2514,
            "area": 1704,
            "popdensity": 1404
        },
        {
            "id": 11,
            "disname": "Sirajganj",
            "disnameb": "সিরাজগঞ্জ",
            "division": "Rajshahi",
            "population": 3072,
            "area": 2498,
            "popdensity": 1230
        },
        {
            "id": 12,
            "disname": "Rangpur",
            "disnameb": "রংপুর",
            "division": "Rangpur",
            "population": 2866,
            "area": 2368,
            "popdensity": 1210
        },
        {
            "id": 13,
            "disname": "Kushtia",
            "disnameb": "কুষ্টিয়া",
            "division": "Khulna",
            "population": 1933,
            "area": 1601,
            "popdensity": 1207
        },
        {
            "id": 14,
            "disname": "Lakshmipur",
            "disnameb": "লক্ষীপুর",
            "division": "Chittagong",
            "population": 1798,
            "area": 1456,
            "popdensity": 1175
        },
        {
            "id": 15,
            "disname": "Mymensingh",
            "disnameb": "ময়মনসিংহ",
            "division": "Mymensingh",
            "population": 5042,
            "area": 4363,
            "popdensity": 1156
        },
        {
            "id": 16,
            "disname": "Bogra",
            "disnameb": "বগুড়া",
            "division": "Rajshahi",
            "population": 3371,
            "area": 2920,
            "popdensity": 1154
        },
        {
            "id": 17,
            "disname": "Nilphamari",
            "disnameb": "নীলফামারী",
            "division": "Rangpur",
            "population": 1820,
            "area": 1580,
            "popdensity": 1150
        },
        {
            "id": 18,
            "disname": "Jamalpur",
            "disnameb": "জামালপুর",
            "division": "Mymensingh",
            "population": 2265,
            "area": 2032,
            "popdensity": 1115
        },
        {
            "id": 19,
            "disname": "Gaibandha",
            "disnameb": "গাইবান্ধা",
            "division": "Rangpur",
            "population": 2349,
            "area": 2179,
            "popdensity": 1078
        },
        {
            "id": 20,
            "disname": "Rajshahi",
            "disnameb": "রাজশাহী",
            "division": "Rajshahi",
            "population": 2573,
            "area": 2407,
            "popdensity": 1069
        },
        {
            "id": 21,
            "disname": "Jessore",
            "disnameb": "যশোর",
            "division": "Khulna",
            "population": 2742,
            "area": 2567,
            "popdensity": 1068
        },
        {
            "id": 22,
            "disname": "Kishoreganj",
            "disnameb": "কিশোরগঞ্জ",
            "division": "Dhaka",
            "population": 3029,
            "area": 2689,
            "popdensity": 1061
        },
        {
            "id": 23,
            "disname": "Pabna",
            "disnameb": "পাবনা",
            "division": "Rajshahi",
            "population": 2497,
            "area": 2372,
            "popdensity": 1053
        },
        {
            "id": 24,
            "disname": "Tangail",
            "disnameb": "টাঙ্গাইল",
            "division": "Dhaka",
            "population": 3750,
            "area": 3414,
            "popdensity": 1046
        },
        {
            "id": 25,
            "disname": "Lalmonirhat",
            "disnameb": "লালমনিরহাট",
            "division": "Rangpur",
            "population": 1249,
            "area": 1241,
            "popdensity": 1006
        },
        {
            "id": 26,
            "disname": "Madaripur",
            "disnameb": "মাদারীপুর",
            "division": "Dhaka",
            "population": 1212,
            "area": 1145,
            "popdensity": 1004
        },
        {
            "id": 27,
            "disname": "Manikganj",
            "disnameb": "মানিকগঞ্জ",
            "division": "Dhaka",
            "population": 1447,
            "area": 1379,
            "popdensity": 1000
        },
        {
            "id": 28,
            "disname": "Sherpur",
            "disnameb": "শেরপুর",
            "division": "Mymensingh",
            "population": 1334,
            "area": 1364,
            "popdensity": 978
        },
        {
            "id": 29,
            "disname": "Sylhet",
            "disnameb": "সিলেট",
            "division": "Sylhet",
            "population": 3404,
            "area": 3490,
            "popdensity": 975
        },
        {
            "id": 30,
            "disname": "Shariatpur",
            "disnameb": "শরীয়তপুর",
            "division": "Dhaka",
            "population": 1202,
            "area": 1182,
            "popdensity": 970
        },
        {
            "id": 31,
            "disname": "Chapainawabganj",
            "disnameb": "নওয়াবগঞ্জ",
            "division": "Rajshahi",
            "population": 1635,
            "area": 1703,
            "popdensity": 960
        },
        {
            "id": 32,
            "disname": "Chuadanga",
            "disnameb": "চুয়াডাঙ্গা",
            "division": "Khulna",
            "population": 1123,
            "area": 1177,
            "popdensity": 954
        },
        {
            "id": 33,
            "disname": "Joypurhat",
            "disnameb": "জয়পুরহাট",
            "division": "Rajshahi",
            "population": 909,
            "area": 965,
            "popdensity": 942
        },
        {
            "id": 34,
            "disname": "Rajbari",
            "disnameb": "রাজবাড়ী",
            "division": "Dhaka",
            "population": 1091,
            "area": 1119,
            "popdensity": 929
        },
        {
            "id": 35,
            "disname": "Cox's Bazar",
            "disnameb": "কক্সবাজার",
            "division": "Chittagong",
            "population": 2382,
            "area": 2492,
            "popdensity": 913
        },
        {
            "id": 36,
            "disname": "Meherpur",
            "disnameb": "মেহেরপুর",
            "division": "Khulna",
            "population": 652,
            "area": 509,
            "popdensity": 910
        },
        {
            "id": 37,
            "disname": "Faridpur",
            "disnameb": "ফরিদপুর",
            "division": "Dhaka",
            "population": 1989,
            "area": 2073,
            "popdensity": 901
        },
        {
            "id": 38,
            "disname": "Jhenaidah",
            "disnameb": "ঝিনাইদহ",
            "division": "Khulna",
            "population": 1756,
            "area": 1961,
            "popdensity": 895
        },
        {
            "id": 39,
            "disname": "Natore",
            "disnameb": "নাটোর",
            "division": "Rajshahi",
            "population": 1696,
            "area": 1896,
            "popdensity": 894
        },
        {
            "id": 40,
            "disname": "Kurigram",
            "disnameb": "কুড়িগ্রাম",
            "division": "Rangpur",
            "population": 2050,
            "area": 2296,
            "popdensity": 893
        },
        {
            "id": 41,
            "disname": "Magura",
            "disnameb": "মাগুরা",
            "division": "Khulna",
            "population": 913,
            "area": 1049,
            "popdensity": 871
        },
        {
            "id": 42,
            "disname": "Dinajpur",
            "disnameb": "দিনাজপুর",
            "division": "Rangpur",
            "population": 2980,
            "area": 3438,
            "popdensity": 864
        },
        {
            "id": 43,
            "disname": "Noakhali",
            "disnameb": "নোয়াখালী",
            "division": "Chittagong",
            "population": 3232,
            "area": 4202,
            "popdensity": 853
        },
        {
            "id": 44,
            "disname": "Pirojpur",
            "disnameb": "পিরোজপুর",
            "division": "Barisal",
            "population": 1277,
            "area": 1308,
            "popdensity": 844
        },
        {
            "id": 45,
            "disname": "Barisal",
            "disnameb": "বরিশাল",
            "division": "Barishal",
            "population": 2415,
            "area": 2785,
            "popdensity": 823
        },
        {
            "id": 46,
            "disname": "Jhalokati",
            "disnameb": "ঝালকাঠি",
            "division": "Barisal",
            "population": 710,
            "area": 749,
            "popdensity": 795
        },
        {
            "id": 47,
            "disname": "Netrakona",
            "disnameb": "নেত্রকোনা",
            "division": "Mymensingh",
            "population": 2207,
            "area": 2810,
            "popdensity": 786
        },
        {
            "id": 48,
            "disname": "Habiganj",
            "disnameb": "হবিগঞ্জ",
            "division": "Sylhet",
            "population": 2059,
            "area": 2637,
            "popdensity": 781
        },
        {
            "id": 49,
            "disname": "Gopalganj",
            "disnameb": "গোপালগঞ্জ",
            "division": "Dhaka",
            "population": 1218,
            "area": 1490,
            "popdensity": 771
        },
        {
            "id": 50,
            "disname": "Thakurgaon",
            "disnameb": "ঠাকুরগাঁ",
            "division": "Rangpur",
            "population": 1380,
            "area": 1810,
            "popdensity": 762
        },
        {
            "id": 51,
            "disname": "Naogaon",
            "disnameb": "নওগাঁ",
            "division": "Rajshahi",
            "population": 2576,
            "area": 3436,
            "popdensity": 750
        },
        {
            "id": 52,
            "disname": "Narail",
            "disnameb": "নড়াইল",
            "division": "Khulna",
            "population": 715,
            "area": 990,
            "popdensity": 722
        },
        {
            "id": 53,
            "disname": "Panchagarh",
            "disnameb": "পঞ্চগড়",
            "division": "Rangpur",
            "population": 981,
            "area": 1405,
            "popdensity": 698
        },
        {
            "id": 54,
            "disname": "Moulvibazar",
            "disnameb": "মৌলভীবাজার",
            "division": "Sylhet",
            "population": 1902,
            "area": 2799,
            "popdensity": 679
        },
        {
            "id": 55,
            "disname": "Sunamganj",
            "disnameb": "সুনামগঞ্জ",
            "division": "Sylhet",
            "population": 2443,
            "area": 3670,
            "popdensity": 666
        },
        {
            "id": 56,
            "disname": "Khulna",
            "disnameb": "খুলনা",
            "division": "Khulna",
            "population": 2294,
            "area": 4394,
            "popdensity": 522
        },
        {
            "id": 57,
            "disname": "Bhola",
            "disnameb": "ভোলা",
            "division": "Barisal",
            "population": 1846,
            "area": 3403,
            "popdensity": 517
        },
        {
            "id": 58,
            "disname": "Satkhira",
            "disnameb": "সাতক্ষিরা",
            "division": "Khulna",
            "population": 1973,
            "area": 3858,
            "popdensity": 511
        },
        {
            "id": 59,
            "disname": "Barguna",
            "disnameb": "বরগুনা",
            "division": "Barisal",
            "population": 928,
            "area": 1831,
            "popdensity": 481
        },
        {
            "id": 60,
            "disname": "Patuakhali",
            "disnameb": "পটুয়াখালী",
            "division": "Barisal",
            "population": 1596,
            "area": 3221,
            "popdensity": 471
        },
        {
            "id": 61,
            "disname": "Bagerhat",
            "disnameb": "বাগেরহাট",
            "division": "Khulna",
            "population": 1461,
            "area": 3959,
            "popdensity": 369
        },
        {
            "id": 62,
            "disname": "Khagrachhari",
            "disnameb": "খাগড়াছড়ি",
            "division": "Chittagong",
            "population": 639,
            "area": 2700,
            "popdensity": 225
        },
        {
            "id": 63,
            "disname": "Rangamati",
            "disnameb": "রাঙ্গামাটি",
            "division": "Chittagong",
            "population": 620,
            "area": 6116,
            "popdensity": 97
        },
        {
            "id": 64,
            "disname": "Bandarban",
            "disnameb": "বান্দরবান",
            "division": "Chittagong",
            "population": 405,
            "area": 4479,
            "popdensity": 86
        }
    ];
})