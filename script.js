  const cityCoords = {
  "Faryab": [36.0794, 65.3456],
  "Kabul": [34.5553, 69.2075],
  "Mazar-e-Sharif": [36.7090, 67.1109],
  "Sheberghan": [36.6675, 65.7525],
  "Tirana": [41.3275, 19.8189],
  "Antigua": [17.0732, -61.8175],
  "Buenos Aires": [-34.6037, -58.3816],
  "Córdoba": [-31.4201, -64.1888],
  "Gualeguaychú Entre Ríos": [-33.0084, -58.5131],
  "La Plata": [-34.9214, -57.9544],
  "Mendoza": [-32.8895, -68.8458],
  "Misiones": [-27.3667, -55.8833],
  "Rosario": [-32.9468, -60.6393],
  "Gyumri": [40.7942, 43.8476],
  "Vanadzor": [40.8127, 44.4889],
  "Yerevan": [40.1792, 44.4991],
  "Brisbane": [-27.4698, 153.0251],
  "Melbourne": [-37.8136, 144.9631],
  "Sydney": [-33.8688, 151.2093],
  "Vienna": [48.2082, 16.3738],
  "Antwerp": [51.2194, 4.4025],
  "Brussels": [50.8503, 4.3517],
  "Mechelen": [51.0255, 4.4777],
  "Belize City": [17.5046, -88.1962],
  "Calavi": [6.4333, 2.2833],
  "Cochabamba": [-17.3895, -66.1568],
  "La Paz": [-16.5000, -68.1500],
  "Francistown": [-21.1594, 27.5056],
  "Gaborone": [-24.6282, 25.9231],
  "Belo Horizonte": [-19.9208, -43.9378],
  "Brasilia": [-15.7939, -47.8828],
  "Campinas": [-22.9056, -47.0608],
  "Curitiba": [-25.4284, -49.2733],
  "Florianopolis": [-27.5954, -48.5480],
  "Fortaleza": [-3.7319, -38.5267],
  "Macaé": [-22.3767, -41.7866],
  "Natal": [-5.7945, -35.2110],
  "Porto Alegre": [-30.0346, -51.2177],
  "Rio Claro": [-22.4087, -47.5618],
  "Rio de Janeiro": [-22.9068, -43.1729],
  "Rocinha": [-22.9433, -43.2317],
  "Salvador Bahia": [-12.9777, -38.5016],
  "Sao Paulo": [-23.5505, -46.6333],
  "Búzios": [-22.7518, -41.8815],
  "Sofia": [42.6977, 23.3219],
  "Ouagadougou": [12.3714, -1.5197],
  "Phnom Penh": [11.5564, 104.9282],
  "Kelowna": [49.8880, -119.4960],
  "Calgary": [51.0447, -114.0719],
  "Edmonton": [53.5461, -113.4938],
  "Vancouver": [49.2827, -123.1207],
  "Halifax": [44.6488, -63.5752],
  "Ottawa": [45.4215, -75.6972],
  "Toronto": [43.6511, -79.3837],
  "Waterloo": [43.4668, -80.5164],
  "Montreal": [45.5017, -73.5673],
  "Saskatoon": [52.1332, -106.6700],
  "Cayman Islands": [19.3133, -81.2546],
  "Coyaique": [-45.5744, -72.0684],
  "Maullin": [-41.5354, -73.6063],
  "Santiago": [-33.4489, -70.6693],
  "Beijing": [39.9042, 116.4074],
  "Chengdu": [30.5728, 104.0668],
  "Chongqing": [29.4316, 106.9123],
  "Dali": [25.7000, 100.1833],
  "Guangzhou": [23.1291, 113.2644],
  "Hangzhou": [30.2741, 120.1551],
  "Hong Kong": [22.3193, 114.1694],
  "Shanghai": [31.2304, 121.4737],
  "Shenzhen": [22.5431, 114.0579],
  "Bogota": [4.7110, -74.0721],
  "Cali": [3.4516, -76.5320],
  "Cartagena de Indias": [10.3910, -75.4794],
  "Medellin": [6.2442, -75.5812],
  "Tamarindo": [10.2995, -85.8374],
  "Split": [43.5081, 16.4402],
  "Zagreb": [45.8150, 15.9819],
  "Limassol": [34.7071, 33.0226],
  "Brno": [49.1951, 16.6068],
  "Olomouc": [49.5938, 17.2509],
  "Prague": [50.0755, 14.4378],
  "Copenhagen": [55.6761, 12.5683],
  "Guayaquil": [-2.1700, -79.9224],
  "Quito": [-0.1807, -78.4678],
  "Cuenca": [-2.9006, -79.0059],
  "Portoviejo": [-1.0541, -80.4545],
  "Alexandria": [31.2001, 29.9187],
  "Cairo": [30.0444, 31.2357],
  "San Salvador": [13.6929, -89.2182],
  "Tallinn": [59.4370, 24.7536],
  "Addis Ababa": [9.0054, 38.7636],
  "Helsinki": [60.1695, 24.9354],
  "Bordeaux": [44.8378, -0.5792],
  "Cannes": [43.5528, 7.0174],
  "Paris": [48.8566, 2.3522],
  "Berlin": [52.5200, 13.4050],
  "Dusseldorf": [51.2277, 6.7735],
  "Frankfurt": [50.1109, 8.6821],
  "Hamburg": [53.5511, 9.9937],
  "Munich": [48.1351, 11.5820],
  "Accra": [5.6037, -0.1870],
  "Wa": [10.0631, -2.5012],
  "Athens": [37.9838, 23.7275],
  "Salamá": [14.8382, -90.4385],
  "Guatemala City": [14.6349, -90.5069],
  "Quetzaltenango": [14.8347, -91.5183],
  "San Pedro de Sula": [15.5007, -88.0250],
  "Tegucigalpa": [14.0723, -87.1921],
  "Budapest": [47.4979, 19.0402],
  "Reykjavík": [64.1355, -21.8954],
  "Agartala": [23.8315, 91.2868],
  "Agra": [27.1767, 78.0081],
  "Ahmedabad": [23.0225, 72.5714],
  "Ahmednagar": [19.0952, 74.7496],
  "Aizawl": [23.7367, 92.7176],
  "Aligarh": [27.8974, 78.0880],
  "Ambala": [30.3782, 76.7767],
  "Amritsar": [31.6340, 74.8723],
  "Ayodhya": [26.7993, 82.2025],
  "Bangalore": [12.9716, 77.5946],
  "Bhilai": [21.2144, 81.3501],
  "Bhopal": [23.2599, 77.4126],
  "Bhubnasewar": [20.2961, 85.8245],
  "Chandigarh": [30.7333, 76.7794],
  "Chennai": [13.0827, 80.2707],
  "Coimbatore": [11.0168, 76.9558],
  "Dehradun": [30.3165, 78.0322],
  "Delhi": [28.7041, 77.1025],
  "Faridabad": [28.4089, 77.3178],
  "Gandhinagar": [23.2156, 72.6369],
  "Gangtok": [27.3389, 88.6065],
  "Ghaziabad": [28.6692, 77.4538],
  "Goa": [15.2993, 74.1240],
  "Gorakhpur": [26.7606, 83.3732],
  "Gurgaon": [28.4595, 77.0266],
  "Guwahati": [26.1445, 91.7362],
  "Gwalior": [26.2183, 78.1828],
  "Hardoi": [27.4206, 80.1314],
  "Hyderabad": [17.3850, 78.4867],
  "Imphal": [24.8170, 93.9368],
  "Indore": [22.7196, 75.8577],
  "Itanagar": [27.0844, 93.6053],
  "Jabalpur": [23.1815, 79.9864],
  "Jaipur": [26.9124, 75.7873],
  "Jalandhar": [31.3260, 75.5762],
  "Jammu": [32.7266, 74.8570],
  "Jamshedpur": [22.8046, 86.2029],
  "Jhansi": [25.4486, 78.5696],
  "Kanpur": [26.4499, 80.3319],
  "Kochi": [9.9312, 76.2673],
  "Kohima": [25.6751, 94.1100],
  "Kolkata": [22.5726, 88.3639],
  "Kollam": [8.8932, 76.6141],
  "Kota": [25.2138, 75.8648],
  "Kozhikode": [11.2588, 75.7804],
  "Lucknow": [26.8467, 80.9462],
  "Ludhiana": [30.9000, 75.8573],
  "Madurai": [9.9252, 78.1198],
  "Mangalore": [12.9141, 74.8560],
  "Mathura": [27.4924, 77.6737],
  "Mumbai": [19.0760, 72.8777],
  "Mysore": [12.2958, 76.6394],
  "Nagpur": [21.1458, 79.0882],
  "Nashik": [19.9975, 73.7898],
  "Noida": [28.5355, 77.3910],
  "Patna": [25.5941, 85.1376],
  "Prayagraj": [25.4358, 81.8463],
  "Pune": [18.5204, 73.8567],
  "Raipur": [21.2514, 81.6296],
  "Rajkot": [22.3039, 70.8022],
  "Ranchi": [23.3441, 85.3096],
  "Roorkee": [29.8543, 77.8880],
  "Rourkela": [22.2596, 84.8536],
  "Shahjahanpur": [27.8828, 79.9058],
  "Shillong": [25.5788, 91.8933],
  "Shimla": [31.1048, 77.1734],
  "Siwan": [26.2201, 84.3566],
  "Surat": [21.1702, 72.8311],
  "Thiruvananthapuram": [8.5241, 76.9366],
  "Thrissur": [10.5276, 76.2144],
  "Udaipur": [24.5854, 73.7125],
  "Vadodara": [22.3072, 73.1812],
  "Varanasi": [25.3176, 82.9739],
  "Vijayawada": [16.5062, 80.6480],
  "Visakhapatnam": [17.6868, 83.2185],
  "Wayanad": [11.6855, 76.1319],
  "Bali": [-8.3405, 115.0920],
  "Jakarta": [-6.2088, 106.8456],
  "Dublin": [53.3498, -6.2603],
  "Limerick": [52.6638, -8.6267],
  "Haifa": [32.7940, 34.9896],
  "Tel Aviv": [32.0853, 34.7818],
  "Catania": [37.5079, 15.0830],
  "Florence": [43.7696, 11.2558],
  "Milan": [45.4642, 9.1900],
  "Naples": [40.8518, 14.2681],
  "Palermo": [38.1157, 13.3615],
  "Rome": [41.9028, 12.4964],
  "Abidjan": [5.6037, -0.1870],
  "Gotemba": [35.3072, 138.9362],
  "Kumamoto": [32.8031, 130.7079],
  "Kyoto": [35.0116, 135.7681],
  "Numazu": [35.0954, 138.8635],
  "Astana": [51.1694, 71.4491],
  "Almaty": [43.2220, 76.8512],
  "Diani": [-4.3132, 39.5831],
  "Kilifi": [-3.6333, 39.8500],
  "Kisumu": [-0.0917, 34.7680],
  "Lamu": [-2.2704, 40.9029],
  "Mombasa": [-4.0435, 39.6682],
  "Tatu": [-1.2469, 36.7921],
  "Seoul": [37.5665, 126.9780],
  "Beirut": [33.8938, 35.5018],
  "Luxembourg": [49.6117, 6.1319],
  "Prilep": [41.3419, 21.5503],
  "Kuala Lumpur": [3.1390, 101.6869],
  "Culiacán": [24.8091, -107.3940],
  "Guadalajara": [20.6597, -103.3496],
  "Leon": [21.1220, -101.6779],
  "Merida": [20.9674, -89.5926],
  "Monterrey": [25.6866, -100.3161],
  "Pachuca": [20.1010, -98.7594],
  "Monaco": [43.7384, 7.4246],
  "Ulaanbaatar": [47.8864, 106.9057],
  "Casablanca": [33.5731, -7.5898],
  "Tangier": [35.7595, -5.8339],
  "Yangon": [16.8409, 96.1735],
  "Windhoek": [-22.5609, 17.0658],
  "Butwal": [27.7001, 83.4489],
  "Itahari": [26.6721, 87.2748],
  "Janakpur": [26.7121, 85.9217],
  "Kathmandu": [27.7172, 85.3240],
  "Solukumbhu": [27.7796, 86.6283],
  "Amsterdam": [52.3676, 4.9041],
  "Christchurch": [-43.5321, 172.6362],
  "León": [21.1219, -101.6813],
  "Minna": [9.6137, 6.5570],
  "Abia": [5.4845, 7.2302],
  "Akwa Ibom": [5.0343, 7.9073],
  "Asaba": [6.2000, 6.7500],
  "Calabar": [4.9510, 8.3247],
  "Ebonyi": [6.2649, 8.1323],
  "Ibadan": [7.3775, 3.9470],
  "Kaduna": [10.5105, 7.4165],
  "Keffi": [8.8482, 7.8733],
  "Kwara": [8.4906, 4.5427],
  "Lokoja City": [7.8026, 6.7333],
  "Markudi": [7.9207, 8.5603],
  "Osogbo": [7.7769, 4.5698],
  "Owerri": [5.4857, 7.0354],
  "Abeokuta": [7.1475, 3.3617],
  "Abuja": [9.0765, 7.3986],
  "Akure": [7.2500, 5.1931],
  "Anambra": [6.2065, 6.7918],
  "Benin City": [6.3377, 5.6258],
  "Enugu City": [6.4411, 7.4986],
  "Ijoko": [6.6512, 3.3142],
  "Lagos": [6.5244, 3.3792],
  "Nsukka": [6.8551, 7.3978],
  "Port Harcourt": [4.8156, 7.0498],
  "Warri": [5.5167, 5.7500],
  "Yenagoa": [4.9244, 6.2645],
  "Kristiansand": [58.1467, 7.9956],
  "Oslo": [59.9139, 10.7522],
  "Islamabad": [33.6844, 73.0479],
  "Karachi": [24.8607, 67.0011],
  "Lahore": [31.5497, 74.3436],
  "Koror": [7.3422, 134.4800],
  "Panama City": [8.9824, -79.5199],
  "Huancayo": [-12.0658, -75.2043],
  "Lima": [-12.0464, -77.0428],
  "Cuzco": [-13.5319, -71.9675],
  "Piura": [-5.1945, -80.6328],
  "Trujillo": [-8.1091, -79.0215],
  "Aklan": [11.6833, 122.3667],
  "General Santos": [6.1164, 125.1715],
  "Ilocos": [18.1969, 120.5936],
  "Laguna": [14.2078, 121.1780],
  "Las Pinas": [14.4463, 120.9935],
  "Manila": [14.5995, 120.9842],
  "Quezon": [14.6760, 121.0437],
  "Tomas Morato": [14.6182, 121.0509],
  "San Carlos": [14.8053, 121.2203],
  "Warsaw": [52.2297, 21.0122],
  "Lisbon": [38.7223, -9.1393],
  "San Juan": [18.4655, -66.1057],
  "Guaynabo": [18.3936, -66.1603],
  "Doha": [25.2854, 51.5310],
  "Bucharest": [44.4268, 26.1025],
  "Cluj": [46.7712, 23.6236],
  "Craiova": [44.3302, 23.7949],
  "Moscow": [55.7558, 37.6173],
  "Petrozavodsk": [61.7833, 34.3500],
  "Saint Petersburg": [59.9311, 30.3609],
  "Kigali": [-1.9441, 30.0619],
  "Belgrade": [44.7866, 20.4489],
  "Singapore": [1.3521, 103.8198],
  "Bratislava": [48.1486, 17.1077],
  "Kosice": [48.7164, 21.2611],
  "Ljubljana": [46.0569, 14.5058],
  "Cape Town": [-33.9249, 18.4241],
  "Durban": [-29.8587, 31.0218],
  "Johannesberg": [-26.2041, 28.0473],
  "Barcelona": [41.3851, 2.1734],
  "Las Palmas de Gran Canaria": [28.1235, -15.4363],
  "Madrid": [40.4168, -3.7038],
  "Málaga": [36.7213, -4.4214],
  "Valencia": [39.4699, -0.3763],
  "Colombo": [6.9271, 79.8612],
  "Galle": [6.0324, 80.2160],
  "Kandy": [7.2906, 80.6337],
  "Göteborg": [57.7089, 11.9746],
  "Stockholm": [59.3293, 18.0686],
  "Laax": [46.8143, 9.2737],
  "Zug": [47.1722, 8.5155],
  "Papeete": [-17.5516, -149.5585],
  "Taipei": [25.0330, 121.5654],
  "Arusha": [-3.3869, 36.6820],
  "Dar es Salaam": [-6.7924, 39.2083],
  "Mwanza": [-2.5164, 32.9211],
  "Bangkok": [13.7563, 100.5018],
  "Chiang Mai": [18.7061, 98.9817],
  "Koh Phangan": [9.7265, 100.0096],
  "Phuket": [7.8804, 98.3923],
  "Kara": [10.8974, 1.1227],
  "Lomé": [6.1725, 1.2314],
  "Tunis": [36.8065, 10.1815],
  "Istanbul": [41.0082, 28.9784],
  "Dubai": [25.2048, 55.2708],
  "Sharjah": [25.3573, 55.4030],
  "Arua": [3.0191, 30.9110],
  "Entebbe": [0.0500, 32.4600],
  "Jinja": [0.4426, 33.2042],
  "Kampala": [0.3476, 32.5825],
  "Mbarara": [-0.6076, 30.6546],
  "Kyiv": [50.4501, 30.5234],
  "Lviv": [49.8397, 24.0297],
  "Vinnytsia": [49.2331, 28.4682],
  "London": [51.5074, -0.1278],
  "Manchester": [53.4808, -2.2426],
  "Neath": [51.6602, -3.8065],
  "Reading": [51.4543, -0.9781],
  "Montevideo": [-34.9011, -56.1645],
  "Punta del Este": [-34.9675, -54.9479],
  "Rivera": [-30.9000, -55.5500],
  "Buffalo": [42.8864, -78.8784],
  "Auburn": [32.6099, -85.4808],
  "Mobile": [30.6954, -88.0399],
  "Montgomery, AL": [32.3792, -86.3077],
  "Phoenix": [33.4484, -112.0740],
  "Tucson": [32.2226, -110.9747],
  "Los Angeles": [34.0522, -118.2437],
  "Oakland": [37.8044, -122.2711],
  "Palo Alto": [37.4419, -122.1430],
  "Sacramento": [38.5816, -121.4944],
  "San Diego": [32.7157, -117.1611],
  "San Francisco": [37.7749, -122.4194],
  "Santa Barbara": [34.4208, -119.6982],
  "Stockton": [37.9577, -121.2908],
  "Boulder": [40.01499, -105.2705],
  "Denver": [39.7392, -104.9903],
  "New Haven": [41.3083, -72.9279],
  "Washington DC": [38.9072, -77.0369],
  "Fort Lauderdale": [26.1224, -80.1373],
  "Jacksonville": [30.3322, -81.6557],
  "Palm Beach": [26.7056, -80.0364],
  "Pensacola": [30.4213, -87.2169],
  "Miami": [25.7617, -80.1918],
  "Orlando": [28.5383, -81.3792],
  "Atlanta": [33.7490, -84.3880],
  "Honolulu": [21.3069, -157.8583],
  "Cedar Rapids": [41.9779, -91.6656],
  "Boise": [43.6150, -116.2023],
  "Idaho Falls": [43.4917, -112.0336],
  "Chicago": [41.8781, -87.6298],
  "Goshen": [41.5798, -85.8340],
  "Indianapolis": [39.7684, -86.1581],
  "Red River Gorge": [37.9503, -83.6639],
  "New Orleans": [29.9511, -90.0715],
  "Boston": [42.3601, -71.0589],
  "Baltimore": [39.2904, -76.6122],
  "Bowie": [39.0068, -76.7798],
  "Mt. Rainier": [46.8523, -121.7603],
  "Bar Harbor": [44.3876, -68.2039],
  "Portland ME": [43.6591, -70.2568],
  "Detroit": [42.3314, -83.0458],
  "Minneapolis": [44.9778, -93.2650],
  "Kansas City": [39.0997, -94.5786],
  "Asheville": [35.5951, -82.5515],
  "Charlotte": [35.2271, -80.8431],
  "Durham": [35.9940, -78.8986],
  "Omaha": [41.2565, -95.9345],
  "Atlantic City": [39.3643, -74.4229],
  "Tucumcari": [35.1710, -103.7237],
  "Las Vegas": [36.1699, -115.1398],
  "New York City": [40.7128, -74.0060],
  "Cincinnati": [39.1031, -84.5120],
  "Cleveland": [41.4993, -81.6944],
  "Columbus": [39.9612, -82.9988],
  "Oklahoma City": [35.4676, -97.5164],
  "Portland Oregon": [45.5051, -122.6750],
  "Philadelphia": [39.9526, -75.1652],
  "Providence": [41.8240, -71.4128],
  "Charleston": [32.7765, -79.9311],
  "Memphis": [35.1495, -90.0490],
  "Nashville": [36.1627, -86.7816],
  "Austin": [30.2672, -97.7431],
  "Dallas": [32.7767, -96.7970],
  "Houston": [29.7604, -95.3698],
  "Salt Lake City": [40.7608, -111.8910],
  "Richmond Virginia": [37.5407, -77.4360],
  "Seattle": [47.6062, -122.3321],
  "Milwaukee": [43.0389, -87.9065],
  "Caracas": [10.4806, -66.9036],
  "El Hatillo": [10.3999, -66.8667],
  "Isla Margarita": [10.9856, -63.8774],
  "Kitwe": [-12.8026, 28.2132],
  "Lusaka": [-15.3875, 28.3228],
  "Bulawayo": [-20.1324, 28.6265],
  "Harare": [-17.8252, 31.0335]
}
;

  const allCities = Object.keys(cityCoords);
  let selectedCities = [];
  let startCity = "";
  let attemptCount = 0;

  // When true, the round is completed and we show the map instead of the city list
  let solved = false;

  // Pre-computed optimal route for the current round
  let bestRoute = null;
  let bestDistance = Infinity;

  // Indices that are locked in place because they're correct
  let lockedIndices = new Set();

  // The user's current ordering (source of truth for the list)
  let currentRoute = [];

  const list = document.getElementById("cityList");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");

  const citiesSection = document.getElementById("citiesSection");
  const mapSection = document.getElementById("mapSection");

  // Leaflet map instance (so we can cleanly re-init)
  let leafletMap = null;

  function pickRandomCities(num) {
    const shuffled = [...allCities].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function setupCities() {
    list.innerHTML = "";
    currentRoute.forEach((city, index) => {
      const li = document.createElement("li");
      li.dataset.index = String(index);
      li.dataset.city = city;

      const isStart = index === 0;
      const isLocked = lockedIndices.has(index);
      const isFixed = isStart || isLocked;

      // Content (adds handle only when the item is movable)
      if (!isFixed) {
        const handle = document.createElement("span");
        handle.className = "handle";
        handle.textContent = "⋮⋮";
        li.appendChild(handle);
      }

      const label = document.createElement("span");
      label.className = "label";
      label.textContent = city;
      li.appendChild(label);

      // Start city is always fixed + styled blue
      if (isStart) li.classList.add("fixed", "start");

      // Lock any city that is currently correct (fixed but no lock emoji)
      if (isLocked && !isStart) li.classList.add("fixed", "locked");

      list.appendChild(li);
    });
    makeSortable();
  }
  function refreshGame() {
    window.location.reload();
  }

  function newGame() {
    selectedCities = pickRandomCities(8);
    startCity = selectedCities[0];
    attemptCount = 0;
    bestRoute = null;
    bestDistance = Infinity;
    lockedIndices = new Set([0]);
    currentRoute = [...selectedCities];
    solved = false;

    // Pre-compute the optimal route once per round
    const permutations = permute(selectedCities.slice(1));
    for (const perm of permutations) {
      const fullRoute = [startCity, ...perm];
      const dist = totalDistance(fullRoute);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestRoute = fullRoute;
      }
    }

    result.textContent = "";
    updateCounter();
    setupCities();
    hideMap();

    // Ensure the city UI is visible and map UI is hidden at the start of a round
    if (citiesSection) citiesSection.style.display = "";
    if (mapSection) {
      mapSection.classList.remove("visible");
      mapSection.setAttribute("aria-hidden", "true");
    }
  }

  const FALLING_EMOJI_DURATION_MS = 2600; // keep in sync with CSS animation / timing

  function dropFallingEmojis_(count = 28) {
    const layer = document.createElement("div");
    layer.className = "confetti-layer";
    document.body.appendChild(layer);

    // Pizza rain 🍕
    const emojis = ["🍕", "🍕", "🍕", "🍕"];

    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.className = "confetti-emoji";
      span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const left = Math.random() * 100;
      const delay = Math.random() * 0.25;
      const drift = (Math.random() * 60 - 30);

      span.style.left = `${left}vw`;
      span.style.animationDuration = `${FALLING_EMOJI_DURATION_MS}ms`;
      span.style.animationDelay = `${delay}s`;
      span.style.transform = `translateX(${drift}px)`;
      layer.appendChild(span);
    }

    window.setTimeout(() => {
      layer.remove();
    }, FALLING_EMOJI_DURATION_MS);
  }

  function updateCounter() {
    counter.textContent = `Attempts: ${attemptCount}`;
  }

  function haversine([lat1, lon1], [lat2, lon2]) {
    const toRad = deg => deg * Math.PI / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function totalDistance(route) {
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
      dist += haversine(cityCoords[route[i]], cityCoords[route[i+1]]);
    }
    return dist;
  }

  function permute(arr) {
    if (arr.length <= 1) return [arr];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      const rest = arr.slice(0, i).concat(arr.slice(i+1));
      for (const perm of permute(rest)) {
        result.push([curr, ...perm]);
      }
    }
    return result;
  }

  function calculateTrip() {
    if (solved) return;

    const userRoute = [...currentRoute];
    const userDistance = totalDistance(userRoute);
    attemptCount++;
    updateCounter();

    // Update correctness + lock in any positions that are correct
    lockedIndices = new Set([0]);
    userRoute.forEach((city, index) => {
      if (bestRoute && city === bestRoute[index]) lockedIndices.add(index);
    });

    // Re-render list with correct/incorrect styling + locks
    setupCities();

    const items = Array.from(document.querySelectorAll("#cityList li"));
    items.forEach((item, index) => {
      item.classList.remove("correct", "incorrect");
      // Keep the start city blue and unscored
      if (index === 0) return;

      if (bestRoute && userRoute[index] === bestRoute[index]) {
        item.classList.add("correct");
      } else {
        item.classList.add("incorrect");
      }
    });

    result.textContent = `Your trip: ${userDistance.toFixed(1)} km. Best: ${bestDistance.toFixed(1)} km.`;

    // If the user solved it, celebrate then swap to the map view
    if (userRoute.join() === bestRoute.join()) {
      solved = true;
      dropFallingEmojis_();

      // Wait twice as long as the falling emojis take to finish.
      window.setTimeout(() => {
        if (citiesSection) citiesSection.style.display = "none";
        if (mapSection) {
          mapSection.classList.add("visible");
          mapSection.setAttribute("aria-hidden", "false");
        }
        showMap(bestRoute);
      }, FALLING_EMOJI_DURATION_MS);
    } else {
      hideMap();
    }
  }

  // --- Drag & drop with locked slots ---
  function moveInUnlockedSlots(fromIndex, toIndex) {
    if (fromIndex === toIndex) return;
    if (lockedIndices.has(fromIndex)) return;

    // Build a list of indices that are movable
    const unlocked = [];
    for (let i = 0; i < currentRoute.length; i++) {
      if (!lockedIndices.has(i)) unlocked.push(i);
    }

    // If user tries to drop on a locked slot, find nearest unlocked slot
    const clampToUnlocked = (idx) => {
      if (!lockedIndices.has(idx)) return idx;
      // search outward
      for (let d = 1; d < currentRoute.length; d++) {
        const left = idx - d;
        const right = idx + d;
        if (left >= 0 && !lockedIndices.has(left)) return left;
        if (right < currentRoute.length && !lockedIndices.has(right)) return right;
      }
      return fromIndex;
    };

    const safeTo = clampToUnlocked(toIndex);

    // Extract the moving city
    const moving = currentRoute[fromIndex];

    // Remove it from its unlocked sequence
    const unlockedCities = unlocked.map(i => currentRoute[i]);
    const fromPos = unlocked.indexOf(fromIndex);
    const toPos = unlocked.indexOf(safeTo);
    if (fromPos === -1 || toPos === -1) return;

    unlockedCities.splice(fromPos, 1);
    unlockedCities.splice(toPos, 0, moving);

    // Write back into currentRoute, preserving locked indices
    const next = [...currentRoute];
    let ptr = 0;
    for (let i = 0; i < next.length; i++) {
      if (lockedIndices.has(i)) continue;
      next[i] = unlockedCities[ptr++];
    }
    currentRoute = next;
  }
  
  function showMap(route) {
    // Ensure map section is visible (Leaflet needs a visible container)
    if (mapSection) {
      mapSection.classList.add("visible");
      mapSection.setAttribute("aria-hidden", "false");
    }

    // Clean up any prior map instance
    if (leafletMap) {
      leafletMap.remove();
      leafletMap = null;
    }

    // Initialize the map
    const map = L.map('map').setView(cityCoords[route[0]], 2);
    leafletMap = map;
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
      mapElement.style.visibility = 'visible';
    }
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Get coordinates for the route
    let routeCoordinates = route.map(city => cityCoords[city]);
    
    // Create a function to adjust longitude for crossing the 180° meridian
    function adjustLongitude(coord1, coord2, hasCrossedMeridian, adjustment) {
      const [lon1, lon2] = [coord1[1], coord2[1]];
      
      // If we haven't crossed the meridian yet, check if we need to
      if (!hasCrossedMeridian) {
        if (Math.abs(lon2 - lon1) > 180) {
          // Determine which way to adjust based on the first crossing
          adjustment = lon2 > lon1 ? -360 : 360;
          return [coord2[0], lon2 + adjustment, true, adjustment];
        }
      } else {
        // If we've already crossed the meridian, apply the same adjustment
        return [coord2[0], lon2 + adjustment, true, adjustment];
      }
      
      return [coord2[0], lon2, false, adjustment];
    }

    // Create adjusted coordinates for the polyline
    let adjustedCoordinates = [];
    let hasCrossedMeridian = false;
    let adjustment = 0;
    
    // First pass: adjust all coordinates except the last one
    for (let i = 0; i < routeCoordinates.length - 1; i++) {
      if (i === 0) {
        adjustedCoordinates.push(routeCoordinates[0]);
      } else {
        const [lat, lon, crossed, adj] = adjustLongitude(
          adjustedCoordinates[i-1], 
          routeCoordinates[i],
          hasCrossedMeridian,
          adjustment
        );
        adjustedCoordinates.push([lat, lon]);
        hasCrossedMeridian = crossed;
        adjustment = adj;
      }
    }

    // Second pass: adjust the last coordinate if we've crossed the meridian
    if (hasCrossedMeridian) {
      const lastCoord = routeCoordinates[routeCoordinates.length - 1];
      const [lat, lon] = adjustLongitude(
        adjustedCoordinates[adjustedCoordinates.length - 1],
        lastCoord,
        true,
        adjustment
      );
      adjustedCoordinates.push([lat, lon]);
    } else {
      adjustedCoordinates.push(routeCoordinates[routeCoordinates.length - 1]);
    }

    // Create a bounding box that will fit all the cities in the route
    const bounds = L.latLngBounds(routeCoordinates);
    map.fitBounds(bounds);
    
    // Add the polyline with adjusted coordinates
    L.polyline(adjustedCoordinates, { color: 'blue', weight: 4 }).addTo(map);
  
    // Add markers + always-visible labels for each city using the adjusted coordinates
    const labelTooltips = [];

    adjustedCoordinates.forEach(([lat, lon], index) => {
      let markerOptions = {};
      if (index === 0) {
        markerOptions = { color: 'green' };
      } else if (index === adjustedCoordinates.length - 1) {
        markerOptions = { color: 'red' };
      }

      const marker = L.circleMarker([lat, lon], markerOptions).addTo(map);
      marker
        .bindPopup(route[index])
        .bindTooltip(route[index], {
          permanent: true,
          direction: 'top',
          offset: [0, -10],
          className: 'city-label'
        })
        .openTooltip();

      // Keep a reference so we can reposition labels to avoid overlap.
      labelTooltips.push(marker.getTooltip());
    });

    // --- Prevent city labels from overlapping ---
    // Leaflet doesn't avoid collisions for permanent tooltips by default.
    // We apply small pixel offsets (via margins) so labels don't overlap.
    const scheduleLabelLayout = () => {
      window.requestAnimationFrame(() => {
        resolveLeafletTooltipOverlaps_(map, labelTooltips);
      });
    };

    // Run once after the DOM has the tooltip elements.
    window.setTimeout(scheduleLabelLayout, 0);
    // Re-run when the map moves/zooms.
    map.on('zoomend moveend resize', scheduleLabelLayout);
  }

  function rectsOverlap_(a, b, pad = 2) {
    return !(
      a.right + pad <= b.left ||
      a.left - pad >= b.right ||
      a.bottom + pad <= b.top ||
      a.top - pad >= b.bottom
    );
  }

  function resolveLeafletTooltipOverlaps_(map, tooltips) {
    const container = map?.getContainer?.();
    if (!container) return;

    // Grab live elements (Leaflet may recreate them on zoom).
    const entries = tooltips
      .map(tt => ({ tt, el: tt?.getElement?.() }))
      .filter(x => x.el);

    if (!entries.length) return;

    // Reset offsets and ensure visible.
    for (const { el } of entries) {
      el.style.marginLeft = '0px';
      el.style.marginTop = '0px';
      el.style.opacity = '1';
    }

    // Sort top-to-bottom for stable placement.
    entries.sort((a, b) => a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top);

    const placedRects = [];
    const candidates = [
      [0, 0],
      [0, 12],
      [0, 24],
      [0, 36],
      [12, 12],
      [-12, 12],
      [12, 24],
      [-12, 24],
      [24, 12],
      [-24, 12],
      [24, 24],
      [-24, 24],
      [0, 48],
      [0, 60]
    ];

    const containerRect = container.getBoundingClientRect();

    for (const { el } of entries) {
      let placed = false;

      for (const [dx, dy] of candidates) {
        el.style.marginLeft = `${dx}px`;
        el.style.marginTop = `${dy}px`;

        // Clamp slightly inside the map viewport so labels don't get cut off.
        const r = el.getBoundingClientRect();
        let clampDx = 0;
        let clampDy = 0;

        if (r.left < containerRect.left + 4) clampDx += (containerRect.left + 4 - r.left);
        if (r.right > containerRect.right - 4) clampDx -= (r.right - (containerRect.right - 4));
        if (r.top < containerRect.top + 4) clampDy += (containerRect.top + 4 - r.top);
        if (r.bottom > containerRect.bottom - 4) clampDy -= (r.bottom - (containerRect.bottom - 4));

        if (clampDx || clampDy) {
          el.style.marginLeft = `${dx + clampDx}px`;
          el.style.marginTop = `${dy + clampDy}px`;
        }

        const rect = el.getBoundingClientRect();
        const collides = placedRects.some(pr => rectsOverlap_(rect, pr, 3));
        if (!collides) {
          placedRects.push(rect);
          placed = true;
          break;
        }
      }

      // Last resort: if we somehow can't place it, hide it rather than overlap.
      if (!placed) {
        el.style.opacity = '0';
      }
    }
  }

  function hideMap() {
    if (leafletMap) {
      leafletMap.remove();
      leafletMap = null;
    }

    if (mapSection) {
      mapSection.classList.remove("visible");
      mapSection.setAttribute("aria-hidden", "true");
    }
  }
  
  function makeSortable() {
    let dragIndex = null;
    let overIndex = null;

    const items = list.querySelectorAll("li");
    items.forEach((item, idx) => {
      const isFixed = item.classList.contains("fixed");
      item.setAttribute("draggable", String(!isFixed));
      item.classList.toggle("draggable", !isFixed);
      item.style.opacity = "";

      item.addEventListener("dragstart", e => {
        if (isFixed) {
          e.preventDefault();
          return;
        }
        dragIndex = idx;
        item.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        dragIndex = null;
        overIndex = null;
        clearDropIndicators_();
      });
    });

    list.addEventListener("dragover", e => {
      if (dragIndex == null) return;
      e.preventDefault();

      const target = e.target.closest("li");
      if (!target) return;

      const targetIndex = Array.from(list.children).indexOf(target);
      if (targetIndex === -1) return;

      overIndex = targetIndex;
      showDropIndicator_(target, e.clientY);
    });

    list.addEventListener("drop", e => {
      if (dragIndex == null) return;
      e.preventDefault();

      const target = e.target.closest("li");
      if (!target) return;

      const targetIndex = Array.from(list.children).indexOf(target);
      if (targetIndex === -1) return;

      const rect = target.getBoundingClientRect();
      const insertAfter = e.clientY > rect.top + rect.height / 2;
      const desired = Math.min(currentRoute.length - 1, targetIndex + (insertAfter ? 1 : 0));

      // Convert desired (which is a slot between items) to a list index
      // We treat it as "drop onto" the nearest item slot
      const toIndex = Math.max(0, Math.min(currentRoute.length - 1, desired));

      moveInUnlockedSlots(dragIndex, toIndex);
      setupCities();
    });

    // Touch / pointer support (simple, no ghost clone)
    let pointerDragging = false;
    let pointerFrom = null;
    let pointerOverEl = null;

    list.querySelectorAll('li.draggable').forEach((li, idx) => {
      li.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') return; // mouse uses native drag
        pointerDragging = true;
        pointerFrom = idx;
        li.classList.add('dragging');
        li.setPointerCapture(e.pointerId);
      });

      li.addEventListener('pointermove', (e) => {
        if (!pointerDragging) return;
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const target = el && el.closest ? el.closest('li') : null;
        if (!target) return;
        pointerOverEl = target;
        showDropIndicator_(target, e.clientY);
      });

      li.addEventListener('pointerup', (e) => {
        if (!pointerDragging) return;
        pointerDragging = false;
        li.classList.remove('dragging');
        clearDropIndicators_();

        if (!pointerOverEl) return;
        const targetIndex = Array.from(list.children).indexOf(pointerOverEl);
        if (targetIndex === -1) return;
        const rect = pointerOverEl.getBoundingClientRect();
        const insertAfter = e.clientY > rect.top + rect.height / 2;
        const desired = Math.min(currentRoute.length - 1, targetIndex + (insertAfter ? 1 : 0));
        moveInUnlockedSlots(pointerFrom, desired);
        setupCities();
        pointerOverEl = null;
      });
    });
  }

  function clearDropIndicators_() {
    list.querySelectorAll('.drop-before, .drop-after').forEach(el => {
      el.classList.remove('drop-before', 'drop-after');
    });
  }

  function showDropIndicator_(target, clientY) {
    clearDropIndicators_();
    const rect = target.getBoundingClientRect();
    const after = clientY > rect.top + rect.height / 2;
    target.classList.add(after ? 'drop-after' : 'drop-before');
  }

  newGame();
