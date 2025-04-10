  const cityCoords = {
    "Tokyo": [35.6895, 139.6917], "Delhi": [28.7041, 77.1025], "Shanghai": [31.2304, 121.4737],
    "São Paulo": [-23.5505, -46.6333], "Mexico City": [19.4326, -99.1332], "Cairo": [30.0444, 31.2357],
    "Dhaka": [23.8103, 90.4125], "Mumbai": [19.076, 72.8777], "Beijing": [39.9042, 116.4074],
    "Osaka": [34.6937, 135.5023], "New York City": [40.7128, -74.006], "Karachi": [24.8607, 67.0011],
    "Buenos Aires": [-34.6037, -58.3816], "Chongqing": [29.563, 106.5516], "Istanbul": [41.0082, 28.9784],
    "Kolkata": [22.5726, 88.3639], "Manila": [14.5995, 120.9842], "Lagos": [6.5244, 3.3792],
    "Rio de Janeiro": [-22.9068, -43.1729], "Tianjin": [39.3434, 117.3616], "Kinshasa": [-4.4419, 15.2663],
    "Guangzhou": [23.1291, 113.2644], "Los Angeles": [34.0522, -118.2437], "Moscow": [55.7558, 37.6176],
    "Shenzhen": [22.5431, 114.0579], "Lahore": [31.5497, 74.3436], "Bangalore": [12.9716, 77.5946],
    "Paris": [48.8566, 2.3522], "Bogotá": [4.711, -74.0721], "Jakarta": [-6.2088, 106.8456],
    "Chennai": [13.0827, 80.2707], "Lima": [-12.0464, -77.0428], "Bangkok": [13.7563, 100.5018],
    "Seoul": [37.5665, 126.978], "Nagoya": [35.1815, 136.9066], "London": [51.5074, -0.1278],
    "Chengdu": [30.5728, 104.0668], "Nairobi": [-1.2921, 36.8219], "Tehran": [35.6892, 51.389],
    "Ho Chi Minh City": [10.7769, 106.7009], "Luanda": [-8.839, 13.2894], "Wuhan": [30.5928, 114.3055],
    "Ahmedabad": [23.0225, 72.5714], "Kuala Lumpur": [3.139, 101.6869], "Chicago": [41.8781, -87.6298],
    "Hong Kong": [22.3193, 114.1694], "Baghdad": [33.3152, 44.3661], "Toronto": [43.6511, -79.3837],
    "Santiago": [-33.4489, -70.6693], "Sydney": [-33.8688, 151.2093]
  };

  const allCities = Object.keys(cityCoords);
  let selectedCities = [];
  let startCity = "";
  let attemptCount = 0;

  const list = document.getElementById("cityList");
  const result = document.getElementById("result");
  const counter = document.getElementById("counter");

  function pickRandomCities(num) {
    const shuffled = [...allCities].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function setupCities() {
    list.innerHTML = "";
    selectedCities.forEach((city, index) => {
      const li = document.createElement("li");
      li.textContent = city;
      li.dataset.city = city;
      if (index === 0) {
        li.classList.add("fixed");
      }
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
    result.textContent = "";
    updateCounter();
    setupCities();
    hideMap();
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
    const items = Array.from(document.querySelectorAll("#cityList li"));
    const userRoute = items.map(item => item.dataset.city);
    const userDistance = totalDistance(userRoute);
    attemptCount++;
    updateCounter();
  
    const permutations = permute(selectedCities.slice(1));
    let bestRoute = null;
    let shortest = Infinity;
  
    for (const perm of permutations) {
      const fullRoute = [startCity, ...perm];
      const dist = totalDistance(fullRoute);
      if (dist < shortest) {
        shortest = dist;
        bestRoute = fullRoute;
      }
    }
  
    items.forEach((item, index) => {
      item.classList.remove("correct", "incorrect");
      if (userRoute[index] === bestRoute[index]) {
        item.classList.add("correct");
      } else {
        item.classList.add("incorrect");
      }
    });
  
    result.textContent = `Your trip: ${userDistance.toFixed(1)} km. Best: ${shortest.toFixed(1)} km.`;
  
    // Only show the map if the user has the correct route
    if (userRoute.join() === bestRoute.join()) {
      showMap(bestRoute);  // Show the map with the full route if it's correct
    } else {
      hideMap();  // Hide the map if the route is incorrect
    }
  }
  
  function showMap(route) {
    // Initialize the map
    const map = L.map('map').setView(cityCoords[route[0]], 2);
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
  
    // Add markers for each city using the adjusted coordinates
    adjustedCoordinates.forEach(([lat, lon], index) => {
      let markerOptions = {};
      if (index === 0) {
        markerOptions = { color: 'green' };
      } else if (index === adjustedCoordinates.length - 1) {
        markerOptions = { color: 'red' };
      }
      L.circleMarker([lat, lon], markerOptions).addTo(map).bindPopup(route[index]);
    });
  }

  function hideMap() {
    // Check if the map element exists
    const mapElement = document.getElementById('map');
    
    // If the map element exists, clear it
    if (mapElement) {
      mapElement.style.visibility = 'hidden'; // This removes all content inside the map container
    }
  }
  
  function makeSortable() {
    let dragSrc = null;

    const items = list.querySelectorAll("li");
    items.forEach(item => {
      if (item.classList.contains("fixed")) return;

      item.setAttribute("draggable", true);

      item.ontouchstart = e => {
        dragSrc = item;
        item.style.opacity = "0.5";
      };

      item.ontouchend = () => {
        dragSrc.style.opacity = "1";
        dragSrc = null;
      };

      item.ontouchmove = e => {
        e.preventDefault(); // prevent scrolling
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!target || target.tagName !== "LI" || target === dragSrc || target.classList.contains("fixed")) return;

        const from = Array.from(list.children).indexOf(dragSrc);
        const to = Array.from(list.children).indexOf(target);
        if (from < to) {
          list.insertBefore(dragSrc, target.nextSibling);
        } else {
          list.insertBefore(dragSrc, target);
        }
      };

      // Desktop drag events
      item.addEventListener("dragstart", e => {
        dragSrc = item;
        e.dataTransfer.effectAllowed = "move";
        item.style.opacity = "0.5";
      });

      item.addEventListener("dragend", () => {
        item.style.opacity = "1";
      });

      item.addEventListener("dragover", e => e.preventDefault());

      item.addEventListener("drop", e => {
        e.preventDefault();
        const target = e.target;
        if (target.tagName !== "LI" || target.classList.contains("fixed") || dragSrc === target) return;

        const from = Array.from(list.children).indexOf(dragSrc);
        const to = Array.from(list.children).indexOf(target);
        if (from < to) {
          list.insertBefore(dragSrc, target.nextSibling);
        } else {
          list.insertBefore(dragSrc, target);
        }
      });
    });
  }

  newGame();