// Traducciones completas para interfaz + base de datos del mapa
const translations = {
  es: {
    loader: "Actualizando idioma…",
    eyebrow: "Lengua · cultura · identidad",
    hero_title: "Unidos<br><span>Somos Más</span>",
    hero_desc: "Explora con detalle los territorios donde se habla español y las lenguas que conviven con él.",
    credit: "Creado por <strong>Chizu</strong>",
    tab_map: "🌎 Mapa de lenguas",
    tab_spanish: "🗣️ Español",
    tab_indigenous: "🌿 Lenguas originarias",
    tab_history: "📖 Historia",
    map_title: "Mapa lingüístico interactivo (Globo 3D)",
    map_sub: "Gira el mundo arrastrando con el ratón/dedo y haz clic en un punto para explorar.",
    search_ph: "Buscar idioma, país o región…",
    opt_all: "Todas las lenguas",
    opt_espanol: "Español y variedades",
    opt_indigenas: "Lenguas originarias",
    opt_otras: "Otras lenguas",
    btn_reset: "Ver todo",
    leg_lang: "<i></i>Lenguas y variedades",
    leg_native: "<i class=\"native\"></i>Lenguas originarias",
    leg_drag: "🖱️ Arrastra para girar el planeta",
    detail_kind_default: "Selecciona un marcador",
    detail_title_default: "Descubre una lengua",
    detail_desc_default: "Cada punto señala una zona de uso. Busca en el catálogo o pulsa directamente sobre el globo.",
    hist_title: "¿Cómo empezó todo?",
    hist_desc: "El español nació del latín hablado en la península ibérica, evolucionó junto a otras lenguas y viajó a América desde el siglo XV. Hoy convive con cientos de lenguas y variantes locales.",
    ev1_date: "Siglos III–I a. C.",
    ev1_title: "La raíz latina",
    ev1_desc: "El latín se mezcla con las lenguas de la península e inicia su transformación.",
    ev2_date: "Siglos IX–XIII",
    ev2_title: "Nace el castellano",
    ev2_desc: "En Castilla aparecen los primeros textos romances y el castellano se consolida.",
    ev3_date: "Desde 1492",
    ev3_title: "Un idioma entre mundos",
    ev3_desc: "El español llega a América y se enriquece con lenguas indígenas y africanas.",
    ev4_date: "Siglos XX–XXI",
    ev4_title: "Globalización y era digital",
    ev4_desc: "Se convierte en el segundo idioma materno del mundo con más de 500 millones de hablantes.",
    footer_text: "Mapa Hispano · Hecho por <strong>Chizu</strong> · Una celebración de nuestra lengua",
    no_results: "No encontramos esa lengua. Prueba otra búsqueda.",
    kind_native: "Lengua originaria",
    kind_spanish: "Español y variedades",
    kind_other: "Otra lengua",
    
    // Dataset traducido
    items: [
      { id: "es_mx", name: "Español", type: "espanol", region: "México y mundo hispano", desc: "Lengua romance; idioma oficial o ampliamente usado en 20 países.", icon: "🇪🇸", lat: 23.6, lng: -102.5 },
      { id: "es_es", name: "Castellano", type: "espanol", region: "España", desc: "Variedad histórica del español, nacida en la península ibérica.", icon: "🇪🇸", lat: 40.4, lng: -3.7 },
      { id: "es_rio", name: "Español rioplatense", type: "espanol", region: "Argentina y Uruguay", desc: "Variedad conocida por el voseo y su entonación característica.", icon: "🇦🇷", lat: -34.6, lng: -58.4 },
      { id: "es_car", name: "Español caribeño", type: "espanol", region: "Caribe hispano", desc: "Variedad presente en Cuba, Puerto Rico y República Dominicana.", icon: "🌴", lat: 19.1, lng: -70.7 },
      { id: "nahuatl", name: "Náhuatl", type: "indigenas", region: "México central", desc: "Familia de lenguas originarias con millones de hablantes y gran legado cultural.", icon: "🌿", lat: 19.3, lng: -99.1 },
      { id: "maya", name: "Maya yucateco", type: "indigenas", region: "Península de Yucatán", desc: "Lengua maya viva hablada en México y comunidades de la región.", icon: "🌿", lat: 20.9, lng: -89.6 },
      { id: "quechua", name: "Quechua", type: "indigenas", region: "Andes", desc: "Familia de lenguas andinas hablada en Perú, Bolivia, Ecuador, Colombia, Chile y Argentina.", icon: "🌿", lat: -13.5, lng: -71.9 },
      { id: "aymara", name: "Aymara", type: "indigenas", region: "Altiplano andino", desc: "Lengua originaria principalmente de Bolivia, Perú y Chile.", icon: "🌿", lat: -16.5, lng: -68.1 },
      { id: "guarani", name: "Guaraní", type: "indigenas", region: "Paraguay y zonas vecinas", desc: "Lengua oficial de Paraguay y una de las lenguas indígenas más extendidas.", icon: "🌿", lat: -25.3, lng: -57.6 },
      { id: "mapudungun", name: "Mapudungun", type: "indigenas", region: "Sur de Chile y Argentina", desc: "Lengua del pueblo mapuche, con revitalización activa.", icon: "🌿", lat: -38.7, lng: -72.4 },
      { id: "wayuu", name: "Wayuunaiki", type: "indigenas", region: "La Guajira", desc: "Lengua del pueblo Wayuu en Colombia y Venezuela.", icon: "🌿", lat: 11.3, lng: -72.2 },
      { id: "kiche", name: "K’iche’", type: "indigenas", region: "Guatemala", desc: "Una de las principales lenguas mayas de Guatemala.", icon: "🌿", lat: 15.0, lng: -91.2 },
      { id: "garifuna", name: "Garífuna", type: "indigenas", region: "Costa Caribe de Centroamérica", desc: "Lengua arawak-caribe hablada en Honduras, Guatemala, Belice y Nicaragua.", icon: "🌿", lat: 15.8, lng: -86.8 },
      { id: "catalan", name: "Catalán", type: "otras", region: "España: Cataluña, Valencia y Baleares", desc: "Lengua romance cooficial en varias comunidades autónomas.", icon: "🟣", lat: 41.8, lng: 1.8 },
      { id: "euskera", name: "Euskera", type: "otras", region: "País Vasco y Navarra", desc: "Lengua europea de origen no indoeuropeo.", icon: "🟣", lat: 43.1, lng: -2.7 },
      { id: "gallego", name: "Gallego", type: "otras", region: "Galicia", desc: "Lengua romance emparentada históricamente con el portugués.", icon: "🟣", lat: 42.8, lng: -8.5 },
      { id: "portugues", name: "Portugués", type: "otras", region: "Brasil y Portugal", desc: "Lengua romance vecina del español y de gran presencia en América.", icon: "🟣", lat: -15.8, lng: -47.9 },
      { id: "ingles", name: "Inglés", type: "otras", region: "Belice, Caribe y mundo", desc: "Lengua de contacto y oficial en distintos territorios cercanos al mundo hispano.", icon: "🟣", lat: 17.2, lng: -88.5 }
    ]
  },
  en: {
    loader: "Updating language…",
    eyebrow: "Language · Culture · Identity",
    hero_title: "United<br><span>We Are More</span>",
    hero_desc: "Explore in detail the territories where Spanish is spoken and the languages coexisting with it.",
    credit: "Created by <strong>Chizu</strong>",
    tab_map: "🌎 Language Map",
    tab_spanish: "🗣️ Spanish",
    tab_indigenous: "🌿 Native Languages",
    tab_history: "📖 History",
    map_title: "Interactive Linguistic Map (3D Globe)",
    map_sub: "Rotate the world by dragging with mouse/finger and click a marker to explore.",
    search_ph: "Search language, country or region…",
    opt_all: "All languages",
    opt_espanol: "Spanish & varieties",
    opt_indigenas: "Native languages",
    opt_otras: "Other languages",
    btn_reset: "View all",
    leg_lang: "<i></i>Languages & varieties",
    leg_native: "<i class=\"native\"></i>Native languages",
    leg_drag: "🖱️ Drag to rotate the planet",
    detail_kind_default: "Select a marker",
    detail_title_default: "Discover a language",
    detail_desc_default: "Each dot marks a usage zone. Search the catalog or click directly on the globe.",
    hist_title: "How did it all begin?",
    hist_desc: "Spanish was born from Vulgar Latin spoken in the Iberian Peninsula, evolved alongside other languages, and traveled to the Americas from the 15th century onward.",
    ev1_date: "3rd–1st Centuries BC",
    ev1_title: "The Latin Roots",
    ev1_desc: "Latin blended with local peninsular languages and began its transformation.",
    ev2_date: "9th–13th Centuries",
    ev2_title: "Birth of Castilian",
    ev2_desc: "The first Romance texts appeared in Castile, consolidating the language.",
    ev3_date: "Since 1492",
    ev3_title: "A Language Between Worlds",
    ev3_desc: "Spanish reached the Americas, enriching itself with indigenous and African languages.",
    ev4_date: "20th–21st Centuries",
    ev4_title: "Globalization & Digital Age",
    ev4_desc: "It became the world's second native language with over 500 million speakers.",
    footer_text: "Hispanic Map · Made by <strong>Chizu</strong> · A celebration of our language",
    no_results: "No language found. Try another search.",
    kind_native: "Native language",
    kind_spanish: "Spanish & varieties",
    kind_other: "Other language",

    items: [
      { id: "es_mx", name: "Spanish", type: "espanol", region: "Mexico & Hispanic world", desc: "Romance language; official or widely spoken in 20 countries.", icon: "🇪🇸", lat: 23.6, lng: -102.5 },
      { id: "es_es", name: "Castilian Spanish", type: "espanol", region: "Spain", desc: "Historical variety of Spanish, originated in the Iberian Peninsula.", icon: "🇪🇸", lat: 40.4, lng: -3.7 },
      { id: "es_rio", name: "Rioplatense Spanish", type: "espanol", region: "Argentina & Uruguay", desc: "Variety known for voseo and distinct intonation.", icon: "🇦🇷", lat: -34.6, lng: -58.4 },
      { id: "es_car", name: "Caribbean Spanish", type: "espanol", region: "Hispanic Caribbean", desc: "Variety spoken in Cuba, Puerto Rico, and the Dominican Republic.", icon: "🌴", lat: 19.1, lng: -70.7 },
      { id: "nahuatl", name: "Nahuatl", type: "indigenas", region: "Central Mexico", desc: "Indigenous language family with millions of speakers and cultural heritage.", icon: "🌿", lat: 19.3, lng: -99.1 },
      { id: "maya", name: "Yucatec Maya", type: "indigenas", region: "Yucatán Peninsula", desc: "Living Mayan language spoken in Mexico and regional communities.", icon: "🌿", lat: 20.9, lng: -89.6 },
      { id: "quechua", name: "Quechua", type: "indigenas", region: "Andes region", desc: "Andean language family spoken in Peru, Bolivia, Ecuador, Colombia, Chile, and Argentina.", icon: "🌿", lat: -13.5, lng: -71.9 },
      { id: "aymara", name: "Aymara", type: "indigenas", region: "Andean Plateau", desc: "Native language spoken mainly in Bolivia, Peru, and Chile.", icon: "🌿", lat: -16.5, lng: -68.1 },
      { id: "guarani", name: "Guarani", type: "indigenas", region: "Paraguay & neighboring zones", desc: "Official language of Paraguay and one of the most widespread native languages.", icon: "🌿", lat: -25.3, lng: -57.6 },
      { id: "mapudungun", name: "Mapudungun", type: "indigenas", region: "Southern Chile & Argentina", desc: "Language of the Mapuche people, undergoing active revitalization.", icon: "🌿", lat: -38.7, lng: -72.4 },
      { id: "wayuu", name: "Wayuunaiki", type: "indigenas", region: "La Guajira", desc: "Language of the Wayuu people in Colombia and Venezuela.", icon: "🌿", lat: 11.3, lng: -72.2 },
      { id: "kiche", name: "K’iche’", type: "indigenas", region: "Guatemala", desc: "One of the primary Mayan languages spoken in Guatemala.", icon: "🌿", lat: 15.0, lng: -91.2 },
      { id: "garifuna", name: "Garifuna", type: "indigenas", region: "Caribbean Coast of Central America", desc: "Arawakan-Carib language spoken in Honduras, Guatemala, Belize, and Nicaragua.", icon: "🌿", lat: 15.8, lng: -86.8 },
      { id: "catalan", name: "Catalan", type: "otras", region: "Spain: Catalonia, Valencia & Balearic Islands", desc: "Co-official Romance language in several autonomous regions.", icon: "🟣", lat: 41.8, lng: 1.8 },
      { id: "euskera", name: "Basque", type: "otras", region: "Basque Country & Navarre", desc: "European language isolate of non-Indo-European origin.", icon: "🟣", lat: 43.1, lng: -2.7 },
      { id: "gallego", name: "Galician", type: "otras", region: "Galicia", desc: "Romance language historically closely related to Portuguese.", icon: "🟣", lat: 42.8, lng: -8.5 },
      { id: "portugues", name: "Portuguese", type: "otras", region: "Brazil & Portugal", desc: "Neighboring Romance language with massive presence in the Americas.", icon: "🟣", lat: -15.8, lng: -47.9 },
      { id: "ingles", name: "English", type: "otras", region: "Belize, Caribbean & World", desc: "Contact language and official language in nearby territories.", icon: "🟣", lat: 17.2, lng: -88.5 }
    ]
  },
  fr: {
    loader: "Mise à jour de la langue…",
    eyebrow: "Langue · Culture · Identité",
    hero_title: "Unis<br><span>Nous Sommes Plus</span>",
    hero_desc: "Explorez en détail les territoires où l'espagnol est parlé et les langues qui coexistent avec lui.",
    credit: "Créé par <strong>Chizu</strong>",
    tab_map: "🌎 Carte des langues",
    tab_spanish: "🗣️ Espagnol",
    tab_indigenous: "🌿 Langues autochtones",
    tab_history: "📖 Histoire",
    map_title: "Carte linguistique interactive (Globe 3D)",
    map_sub: "Faites tourner le monde avec la souris/doigt et cliquez sur un point pour explorer.",
    search_ph: "Rechercher une langue, un pays…",
    opt_all: "Toutes les langues",
    opt_espanol: "Espagnol et variétés",
    opt_indigenas: "Langues autochtones",
    opt_otras: "Autres langues",
    btn_reset: "Tout voir",
    leg_lang: "<i></i>Langues et variétés",
    leg_native: "<i class=\"native\"></i>Langues autochtones",
    leg_drag: "🖱️ Faites glisser pour tourner la planète",
    detail_kind_default: "Sélectionnez un repère",
    detail_title_default: "Découvrez une langue",
    detail_desc_default: "Chaque point indique une zone d'utilisation. Parcourez le catalogue ou cliquez sur le globe.",
    hist_title: "Comment tout a commencé?",
    hist_desc: "L'espagnol est né du latin parlé dans la péninsule ibérique, a évolué aux côtés d'autres langues et a voyagé en Amérique dès le XVe siècle.",
    ev1_date: "IIIe–Ier siècles av. J.-C.",
    ev1_title: "La racine latine",
    ev1_desc: "Le latin se mélange aux langues péninsulaires et commence sa transformation.",
    ev2_date: "IXe–XIIIe siècles",
    ev2_title: "Naissance du castillan",
    ev2_desc: "En Castille, les premiers textes romans apparaissent y le castillan se consolide.",
    ev3_date: "Depuis 1492",
    ev3_title: "Une langue entre deux mondes",
    ev3_desc: "L'espagnol arrive en Amérique et s'enrichit de langues autochtones et africaines.",
    ev4_date: "XXe–XXIe siècles",
    ev4_title: "Mondialisation et ère numérique",
    ev4_desc: "Elle devient la deuxième langue maternelle au monde avec plus de 500 millions de locuteurs.",
    footer_text: "Carte Hispanique · Fait par <strong>Chizu</strong> · Une célébration de notre langue",
    no_results: "Aucune langue trouvée. Essayez une autre recherche.",
    kind_native: "Langue autochtone",
    kind_spanish: "Espagnol et variétés",
    kind_other: "Autre langue",

    items: [
      { id: "es_mx", name: "Espagnol", type: "espanol", region: "Mexique et monde hispanique", desc: "Langue romane; officielle ou largement parlée dans 20 pays.", icon: "🇪🇸", lat: 23.6, lng: -102.5 },
      { id: "es_es", name: "Castillan", type: "espanol", region: "Espagne", desc: "Variété historique de l'espagnol, née dans la péninsule Ibérique.", icon: "🇪🇸", lat: 40.4, lng: -3.7 },
      { id: "es_rio", name: "Espagnol rioplatense", type: "espanol", region: "Argentine et Uruguay", desc: "Variété connue pour le voseo et son intonation caractéristique.", icon: "🇦🇷", lat: -34.6, lng: -58.4 },
      { id: "es_car", name: "Espagnol des Caraïbes", type: "espanol", region: "Caraïbes hispaniques", desc: "Variété présente à Cuba, Porto Rico et en République Dominicaine.", icon: "🌴", lat: 19.1, lng: -70.7 },
      { id: "nahuatl", name: "Nahuatl", type: "indigenas", region: "Mexique central", desc: "Famille de langues autochtones comptant des millions de locuteurs.", icon: "🌿", lat: 19.3, lng: -99.1 },
      { id: "maya", name: "Maya yucatèque", type: "indigenas", region: "Péninsule du Yucatán", desc: "Langue maya vivante parlée au Mexique et communautés de la région.", icon: "🌿", lat: 20.9, lng: -89.6 },
      { id: "quechua", name: "Quechua", type: "indigenas", region: "Andes", desc: "Famille de langues andines parlée au Pérou, Bolivie, Équateur, Colombie, Chili et Argentine.", icon: "🌿", lat: -13.5, lng: -71.9 },
      { id: "aymara", name: "Aymara", type: "indigenas", region: "Haut-plateau andin", desc: "Langue autochtone principalement de Bolivie, Pérou et Chili.", icon: "🌿", lat: -16.5, lng: -68.1 },
      { id: "guarani", name: "Guarani", type: "indigenas", region: "Paraguay et zones voisines", desc: "Langue officielle du Paraguay et l'une des langues autochtones les plus répandues.", icon: "🌿", lat: -25.3, lng: -57.6 },
      { id: "mapudungun", name: "Mapudungun", type: "indigenas", region: "Sud du Chili et Argentine", desc: "Langue du peuple Mapuche, en cours de revitalisation active.", icon: "🌿", lat: -38.7, lng: -72.4 },
      { id: "wayuu", name: "Wayuunaiki", type: "indigenas", region: "La Guajira", desc: "Langue du peuple Wayuu en Colombie et au Venezuela.", icon: "🌿", lat: 11.3, lng: -72.2 },
      { id: "kiche", name: "K’iche’", type: "indigenas", region: "Guatemala", desc: "L'une des principales langues mayas du Guatemala.", icon: "🌿", lat: 15.0, lng: -91.2 },
      { id: "garifuna", name: "Garifuna", type: "indigenas", region: "Côte caraïbe d'Amérique centrale", desc: "Langue arawak-caraïbe parlée au Honduras, Guatemala, Belize et Nicaragua.", icon: "🌿", lat: 15.8, lng: -86.8 },
      { id: "catalan", name: "Catalan", type: "otras", region: "Espagne: Catalogne, Valence et Baléares", desc: "Langue romane co-officielle dans plusieurs communautés autonomes.", icon: "🟣", lat: 41.8, lng: 1.8 },
      { id: "euskera", name: "Basque", type: "otras", region: "Pays Basque et Navarre", desc: "Langue européenne isolée d'origine non indo-européenne.", icon: "🟣", lat: 43.1, lng: -2.7 },
      { id: "gallego", name: "Galicien", type: "otras", region: "Galice", desc: "Langue romane historiquement liée au portugais.", icon: "🟣", lat: 42.8, lng: -8.5 },
      { id: "portugues", name: "Portugais", type: "otras", region: "Brésil et Portugal", desc: "Langue romane voisine de l'espagnol très présente en Amérique.", icon: "🟣", lat: -15.8, lng: -47.9 },
      { id: "ingles", name: "Anglais", type: "otras", region: "Belize, Caraïbes et Monde", desc: "Langue de contact et officielle dans plusieurs territoires proches.", icon: "🟣", lat: 17.2, lng: -88.5 }
    ]
  }
};

let currentLang = 'es';
let selectedItem = null;

const container = d3.select("#map-container");
const svg = d3.select("#globe-svg");
const tooltip = d3.select("#globe-tooltip");

let width = container.node().clientWidth;
let height = container.node().clientHeight;
let radius = Math.min(width, height) / 2 - 20;

const projection = d3.geoOrthographic()
  .scale(radius)
  .translate([width / 2, height / 2])
  .clipAngle(90)
  .rotate([20, -15]);

const path = d3.geoPath().projection(projection);
const graticule = d3.geoGraticule10();

const gSphere = svg.append("g");
const gGraticule = svg.append("g");
const gLand = svg.append("g");
const gMarkers = svg.append("g");

gSphere.append("circle")
  .attr("class", "sphere")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", radius);

gGraticule.append("path")
  .datum(graticule)
  .attr("class", "graticule")
  .attr("d", path);

let worldData = null;
let currentFilteredList = [];

d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json").then(data => {
  worldData = topojson.feature(data, data.objects.land);
  
  gLand.append("path")
    .datum(worldData)
    .attr("class", "land")
    .attr("d", path);

  render();
}).catch(() => {
  render();
});

function updateGlobe() {
  radius = Math.min(width, height) / 2 - 20;
  projection.scale(radius).translate([width / 2, height / 2]);
  
  gSphere.select("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", radius);

  gGraticule.select(".graticule").attr("d", path);
  if (worldData) gLand.select(".land").attr("d", path);

  gMarkers.selectAll("circle.marker-pin")
    .attr("cx", d => {
      const coords = projection([d.lng, d.lat]);
      return coords ? coords[0] : -100;
    })
    .attr("cy", d => {
      const coords = projection([d.lng, d.lat]);
      return coords ? coords[1] : -100;
    })
    .style("display", d => {
      const gdistance = d3.geoDistance([d.lng, d.lat], [-projection.rotate()[0], -projection.rotate()[1]]);
      return gdistance < Math.PI / 2 ? "inline" : "none";
    });
}

let isDragging = false;
let startX, startY, startRotate;

const drag = d3.drag()
  .on("start", (event) => {
    isDragging = true;
    startX = event.x;
    startY = event.y;
    startRotate = projection.rotate();
  })
  .on("drag", (event) => {
    const k = 0.35;
    projection.rotate([
      startRotate[0] + (event.x - startX) * k,
      startRotate[1] - (event.y - startY) * k
    ]);
    updateGlobe();
  })
  .on("end", () => {
    isDragging = false;
  });

svg.call(drag);

function flyToCoords(lat, lng) {
  const targetRotate = [-lng, -lat];
  const currentRotate = projection.rotate();
  
  d3.transition()
    .duration(900)
    .tween("rotate", () => {
      const r = d3.interpolate(currentRotate, targetRotate);
      return (t) => {
        projection.rotate(r(t));
        updateGlobe();
      };
    });
}

function show(item) {
  selectedItem = item;
  const t = translations[currentLang];
  const kindText = item.type === 'indigenas' ? t.kind_native : item.type === 'espanol' ? t.kind_spanish : t.kind_other;
  
  document.getElementById('detail').querySelector('.kind').textContent = kindText;
  document.getElementById('detail').querySelector('h3').textContent = item.icon + ' ' + item.name;
  document.getElementById('detail').querySelector('p').innerHTML = '<b>' + item.region + '</b><br>' + item.desc;
  
  flyToCoords(item.lat, item.lng);
}

function render() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const type = document.getElementById('type').value;
  const langData = translations[currentLang].items;

  currentFilteredList = langData.filter(x => 
    (type === 'todos' || x.type === type) && 
    (!q || (x.name + ' ' + x.region + ' ' + x.desc).toLowerCase().includes(q))
  );

  const markers = gMarkers.selectAll("circle.marker-pin")
    .data(currentFilteredList, d => d.id);

  markers.exit().remove();

  const markersEnter = markers.enter()
    .append("circle")
    .attr("class", "marker-pin")
    .attr("r", 6)
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("fill", d => d.type === 'indigenas' ? '#d38c21' : '#1d5fd1');

  markersEnter
    .on("mouseover", (event, d) => {
      tooltip.style("display", "block")
        .html(`<b>${d.icon} ${d.name}</b><br><small>${d.region}</small>`);
    })
    .on("mousemove", (event) => {
      const [mouseX, mouseY] = d3.pointer(event, container.node());
      tooltip.style("left", mouseX + "px").style("top", mouseY + "px");
    })
    .on("mouseout", () => {
      tooltip.style("display", "none");
    })
    .on("click", (event, d) => {
      show(d);
    });

  updateGlobe();

  const list = document.getElementById('list');
  const t = translations[currentLang];
  list.innerHTML = currentFilteredList.map((x, i) => 
    `<div class="lang-row">
      <i class="lang-dot" style="background:${x.type === 'indigenas' ? '#d38c21' : '#1d5fd1'}"></i>
      <button data-index="${i}">${x.icon} ${x.name}<br><small>${x.region}</small></button>
    </div>`
  ).join('') || `<p>${t.no_results}</p>`;

  list.querySelectorAll('button').forEach((b) => {
    b.onclick = () => {
      const idx = parseInt(b.dataset.index);
      if (currentFilteredList[idx]) {
        show(currentFilteredList[idx]);
      }
    };
  });

  // Si había una tarjeta seleccionada, re-traducirla
  if (selectedItem) {
    const updatedItem = langData.find(x => x.id === selectedItem.id);
    if (updatedItem) show(updatedItem);
  }
}

// Lógica de traducción de interfaz
function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  
  const loader = document.getElementById('translate-loader');
  document.getElementById('loader-text').textContent = translations[lang].loader;
  
  loader.classList.add('active');

  setTimeout(() => {
    const t = translations[lang];
    
    // Traducir HTML estático
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.innerHTML = t[key];
    });

    // Traducir Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key]) el.placeholder = t[key];
    });

    // Indicador de idioma
    const langNames = { es: 'Español', en: 'English', fr: 'Français' };
    document.getElementById('current-lang-text').textContent = langNames[lang];
    document.documentElement.lang = lang;

    render();

    setTimeout(() => {
      loader.classList.remove('active');
    }, 200);
  }, 600);
}

// Dropdown
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');

langBtn.onclick = (e) => {
  e.stopPropagation();
  langMenu.classList.toggle('show');
};

document.addEventListener('click', () => {
  langMenu.classList.remove('show');
});

document.querySelectorAll('.lang-option').forEach(opt => {
  opt.onclick = () => {
    const chosenLang = opt.getAttribute('data-lang');
    changeLanguage(chosenLang);
  };
});

document.getElementById('search').oninput = render;
document.getElementById('type').onchange = render;

document.getElementById('reset').onclick = () => {
  document.getElementById('search').value = '';
  document.getElementById('type').value = 'todos';
  render();
  flyToCoords(15, -35);
};

document.querySelectorAll('[data-filter]').forEach(b => b.onclick = () => {
  document.getElementById('type').value = b.dataset.filter;
  render();
  document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('[data-scroll]').forEach(b => b.onclick = () => {
  document.getElementById(b.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('resize', () => {
  width = container.node().clientWidth;
  height = container.node().clientHeight;
  svg.attr("width", width).attr("height", height);
  updateGlobe();
});

render();