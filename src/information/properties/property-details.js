const properties = [
  // Delhi Properties
  {
    id: 1,
    title: "3-BHK Apartment near Aero City",
    location: "New Delhi, Delhi",
    price: "₹15,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Spacious 3-BHK apartment near Aero City metro station with 24/7 security and modern amenities. Perfect for families looking for comfort and convenience in the heart of Delhi.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Covered Parking", icon: "fas fa-car" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Gym", icon: "fas fa-dumbbell" },
      { name: "24/7 Security", icon: "fas fa-shield-alt" },
      { name: "Power Backup", icon: "fas fa-bolt" },
    ],
  },
  {
    id: 2,
    title: "Villa in Saket",
    location: "New Delhi, Delhi",
    price: "₹25,000,000",
    image: "../../assets/images/Houses/penthouse.jpeg",
    description: "Luxurious villa in Saket with private pool, garden and designer interiors. This property offers the perfect blend of luxury and comfort in one of Delhi's most prestigious neighborhoods.",
    features: [
      { name: "5 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Private Pool", icon: "fas fa-swimming-pool" },
      { name: "Lawn", icon: "fas fa-tree" },
      { name: "Modular Kitchen", icon: "fas fa-utensils" },
      { name: "Home Theater", icon: "fas fa-video" },
      { name: "Italian Marble Flooring", icon: "fas fa-layer-group" },
    ],
  },
  {
    id: 3,
    title: "Modern Condo in CP",
    location: "New Delhi, Delhi",
    price: "₹18,000,000",
    image: "../../assets/images/Houses/villa.jpeg",
    description: "Modern condo in Connaught Place with stunning city views and smart home features. Located in the commercial hub of Delhi with excellent connectivity to all parts of the city.",
    features: [
      { name: "2 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Smart Locks", icon: "fas fa-lock" },
      { name: "Central AC", icon: "fas fa-snowflake" },
      { name: "Balcony", icon: "fas fa-couch" },
      { name: "Hardwood Floors", icon: "fas fa-hard-hat" },
      { name: "High Ceilings", icon: "fas fa-arrows-alt-v" },
    ],
  },
  // Maharashtra Properties
  {
    id: 4,
    title: "Sea View Apartment near Marine Drive",
    location: "Mumbai, Maharashtra",
    price: "₹32,000,000",
    image: "../../assets/images/Houses/apartment Mumbai.jpeg",
    description: "Breathtaking sea view apartment located along the iconic Marine Drive. Wake up to panoramic views of the Arabian Sea and enjoy premium amenities in this luxury residence.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Sea View Balcony", icon: "fas fa-eye" },
      { name: "Premium Fittings", icon: "fas fa-tools" },
      { name: "Concierge Service", icon: "fas fa-concierge-bell" },
      { name: "Valet Parking", icon: "fas fa-parking" },
      { name: "Fitness Center", icon: "fas fa-dumbbell" },
    ],
  },
  {
    id: 5,
    title: "Luxury Villa in Thane",
    location: "Mumbai, Maharashtra",
    price: "₹28,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Elegant luxury villa in the serene neighborhood of Thane offering a perfect escape from the hustle of Mumbai city while still maintaining excellent connectivity.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Private Garden", icon: "fas fa-tree" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Outdoor Kitchen", icon: "fas fa-utensils" },
      { name: "Home Office", icon: "fas fa-briefcase" },
      
    ],
  },
  {
    id: 6,
    title: "Penthouse in Malabar Hills",
    location: "Mumbai, Maharashtra",
    price: "₹35,000,000",
    image: "../../assets/images/Houses/penthouse.jpeg",
    description: "Exclusive penthouse in the prestigious Malabar Hills area featuring 360-degree views of Mumbai's skyline and the Arabian Sea. The epitome of luxury living.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "5 Bathrooms", icon: "fas fa-bath" },
      { name: "Terrace Garden", icon: "fas fa-tree" },
      { name: "Infinity Pool", icon: "fas fa-swimming-pool" },
    ],
  },
  // Punjab Properties
  {
    id: 7,
    title: "Apartment in Amritsar",
    location: "Amritsar, Punjab",
    price: "₹12,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Comfortable and well-designed apartment in the heart of Amritsar offering easy access to the Golden Temple and other major attractions.",
    features: [
      { name: "2 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Modern Kitchen", icon: "fas fa-utensils" },
      { name: "Balcony", icon: "fas fa-couch" },
      { name: "Reserved Parking", icon: "fas fa-car" },
      { name: "Community Hall", icon: "fas fa-users" },
      { name: "Power Backup", icon: "fas fa-bolt" },
    ],
  },
  {
    id: 8,
    title: "3BHK in Amritsar",
    location: "Amritsar, Punjab",
    price: "₹14,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Spacious 3BHK apartment in a premium residential complex in Amritsar with modern amenities and traditional Punjabi touches in design.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Prayer Room", icon: "fas fa-place-of-worship" },
      { name: "Modular Kitchen", icon: "fas fa-utensils" },
      { name: "Children's Play Area", icon: "fas fa-child" },
      { name: "Gym", icon: "fas fa-dumbbell" },
      { name: "24/7 Security", icon: "fas fa-shield-alt" },
    ],
  },
  {
    id: 9,
    title: "Luxury Bungalow in Amritsar",
    location: "Amritsar, Punjab",
    price: "₹17,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Elegant bungalow combining modern luxury with traditional Punjabi architecture, featuring spacious rooms and premium finishes throughout.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Outdoor Sitting Area", icon: "fas fa-couch" },
      { name: "Modern Kitchen", icon: "fas fa-utensils" },
      { name: "Guest House", icon: "fas fa-home" },
      { name: "Servant Quarters", icon: "fas fa-user-friends" },
    ],
  },
  // Uttar Pradesh Properties
  {
    id: 10,
    title: "Villa in Lucknow",
    location: "Lucknow, Uttar Pradesh",
    price: "₹20,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Charming villa in the city of nawabs, featuring a perfect blend of Lucknowi architecture and modern amenities for comfortable living.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Traditional Courtyard", icon: "fas fa-archway" },
      { name: "Modern Kitchen", icon: "fas fa-utensils" },
      { name: "Study Room", icon: "fas fa-book" },
      { name: "Servant Quarter", icon: "fas fa-user-friends" },
    ],
  },
  {
    id: 11,
    title: "Mansion in Lucknow",
    location: "Lucknow, Uttar Pradesh",
    price: "₹24,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Grand mansion showcasing the rich cultural heritage of Lucknow with modern luxuries and amenities perfect for sophisticated living.",
    features: [
      { name: "5 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Central Courtyard", icon: "fas fa-archway" },
      { name: "Library", icon: "fas fa-book-open" },
      { name: "Home Theater", icon: "fas fa-video" },
      { name: "Wine Cellar", icon: "fas fa-wine-glass-alt" },
      { name: "Ornate Ceilings", icon: "fas fa-paint-roller" },
    ],
  },
  {
    id: 12,
    title: "Bungalow in Lucknow",
    location: "Lucknow, Uttar Pradesh",
    price: "₹18,000,000",
    image: "../../assets/images/Houses/villa.jpeg",
    description: "Cozy yet luxurious bungalow in a quiet neighborhood of Lucknow featuring beautiful gardens and comfortable living spaces.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Verandah", icon: "fas fa-couch" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Modern Kitchen", icon: "fas fa-utensils" },
      { name: "Study Room", icon: "fas fa-book" },
      { name: "Carport", icon: "fas fa-car" },
    ],
  },
  // Rajasthan Properties
  {
    id: 13,
    title: "Villa in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹22,000,000",
    image: "../../assets/images/Houses/villa.jpeg",
    description: "Beautiful villa in the Pink City featuring traditional Rajasthani architecture with modern comforts and amenities.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Courtyard", icon: "fas fa-archway" },
      { name: "Jharokhas", icon: "fas fa-window-restore" },
      { name: "Modern Kitchen", icon: "fas fa-utensils" },
      { name: "Terrace Garden", icon: "fas fa-tree" },
      { name: "Parking", icon: "fas fa-car" },
    ],
  },
  {
    id: 14,
    title: "Royal House in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹26,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Majestic property inspired by royal Rajasthani architecture offering luxurious living spaces and traditional design elements.",
    features: [
      { name: "5 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Central Courtyard", icon: "fas fa-archway" },
      { name: "Ornate Pillars", icon: "fas fa-columns" },
      { name: "Stone Flooring", icon: "fas fa-layer-group" },
      { name: "Carved Wooden Doors", icon: "fas fa-door-open" },
      { name: "Water Feature", icon: "fas fa-faucet" },
    ],
  },
  {
    id: 15,
    title: "Pink Palace in Jaipur",
    location: "Jaipur, Rajasthan",
    price: "₹24,000,000",
    image: "../../assets/images/Houses/big-villa.jpg",
    description: "Exquisite property designed in the signature pink sandstone of Jaipur, offering royal living with modern luxuries.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Landscaped Garden", icon: "fas fa-tree" },
      { name: "Intricate Stonework", icon: "fas fa-layer-group" },
      { name: "Customized Furniture", icon: "fas fa-couch" },
      { name: "Guest House", icon: "fas fa-home" },
    ],
  },
  // Karnataka Properties
  {
    id: 16,
    title: "Modern House in Bangalore",
    location: "Bangalore, Karnataka",
    price: "₹30,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Contemporary home in the tech hub of India featuring smart home technology and sustainable design elements.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Home Automation", icon: "fas fa-robot" },
      { name: "Solar Panels", icon: "fas fa-solar-panel" },
      { name: "Home Office", icon: "fas fa-briefcase" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "EV Charging Point", icon: "fas fa-charging-station" },
    ],
  },
  {
    id: 17,
    title: "Skyline Flat in Bangalore",
    location: "Bangalore, Karnataka",
    price: "₹35,000,000",
    image: "../../assets/images/Houses/apartment2.jpeg",
    description: "Luxurious high-rise apartment offering panoramic views of Bangalore's skyline with premium amenities and finishes.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Floor-to-ceiling Windows", icon: "fas fa-window-maximize" },
      { name: "Sky Lounge", icon: "fas fa-couch" },
      { name: "Infinity Pool", icon: "fas fa-swimming-pool" },
      { name: "Concierge Service", icon: "fas fa-concierge-bell" },
      { name: "Helipad Access", icon: "fas fa-helicopter" },
    ],
  },
  {
    id: 18,
    title: "4BHK in Bangalore",
    location: "Bangalore, Karnataka",
    price: "₹32,000,000",
    image: "../../assets/images/Houses/villa.jpeg",
    description: "Spacious 4BHK residence in an upscale gated community with modern amenities and beautiful landscaped surroundings.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "4 Bathrooms", icon: "fas fa-bath" },
      { name: "Private Garden", icon: "fas fa-tree" },
      { name: "Modular Kitchen", icon: "fas fa-utensils" },
      { name: "Children's Play Area", icon: "fas fa-child" },
      { name: "Gym", icon: "fas fa-dumbbell" },
      { name: "Clubhouse", icon: "fas fa-home" },
    ],
  },
  // Tamil Nadu Properties
  {
    id: 19,
    title: "2BHK Flat in Chennai",
    location: "Chennai, Tamil Nadu",
    price: "₹18,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Cozy 2BHK apartment in a premium locality of Chennai offering modern amenities and comfortable living spaces.",
    features: [
      { name: "2 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Balcony", icon: "fas fa-couch" },
      { name: "Modular Kitchen", icon: "fas fa-utensils" },
      { name: "Gym", icon: "fas fa-dumbbell" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Children's Play Area", icon: "fas fa-child" },
    ],
  },
  {
    id: 20,
    title: "Cozy Villa in Chennai",
    location: "Chennai, Tamil Nadu",
    price: "₹21,000,000",
    image: "../../assets/images/Houses/big-villa.jpg",
    description: "Beautiful villa combining traditional South Indian architectural elements with modern comforts located in a serene neighborhood.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Courtyard", icon: "fas fa-archway" },
      { name: "Verandah", icon: "fas fa-couch" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Prayer Room", icon: "fas fa-place-of-worship" },
      { name: "Car Parking", icon: "fas fa-car" },
    ],
  },
  {
    id: 21,
    title: "Luxury Apartment in Chennai",
    location: "Chennai, Tamil Nadu",
    price: "₹25,000,000",
    image: "../../assets/images/Houses/apartment2.jpeg",
    description: "Premium apartment in an upscale area of Chennai featuring high-end finishes and amenities for sophisticated urban living.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Sea View", icon: "fas fa-eye" },
      { name: "Italian Marble Flooring", icon: "fas fa-layer-group" },
      { name: "Designer Kitchen", icon: "fas fa-utensils" },
      { name: "Home Theater", icon: "fas fa-video" },
      { name: "Private Terrace", icon: "fas fa-couch" },
    ],
  },
  // Telangana Properties
  {
    id: 22,
    title: "Premium Flat in Hyderabad",
    location: "Hyderabad, Telangana",
    price: "₹22,000,000",
    image: "../../assets/images/Houses/apartment.jpeg",
    description: "Modern apartment in Hyderabad's tech district offering contemporary design and premium amenities for comfortable living.",
    features: [
      { name: "3 Bedrooms", icon: "fas fa-bed" },
      { name: "2 Bathrooms", icon: "fas fa-bath" },
      { name: "Balcony", icon: "fas fa-couch" },
      { name: "Modular Kitchen", icon: "fas fa-utensils" },
      { name: "Club House", icon: "fas fa-home" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Gym", icon: "fas fa-dumbbell" },
    ],
  },
  {
    id: 23,
    title: "Hi-tech Villa in Hyderabad",
    location: "Hyderabad, Telangana",
    price: "₹27,000,000",
    image: "../../assets/images/Houses/villa2.jpeg",
    description: "Cutting-edge smart home with advanced technology integrated throughout, located in a premium gated community in Hyderabad.",
    features: [
      { name: "4 Bedrooms", icon: "fas fa-bed" },
      { name: "3 Bathrooms", icon: "fas fa-bath" },
      { name: "Smart Home System", icon: "fas fa-robot" },
      { name: "Solar Power", icon: "fas fa-solar-panel" },
      { name: "Home Office", icon: "fas fa-briefcase" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Electric Vehicle Charging", icon: "fas fa-charging-station" },
    ],
  },
  
  {
    id: 24,
    title: "5BHK in Hyderabad",
    location: "Hyderabad, Telangana",
    price: "₹31,000,000",
    image: "../../assets/images/Houses/apartment2.jpeg",
    description: "Expansive 5BHK residence in an exclusive neighborhood offering luxurious living spaces for large families or those who love to entertain.",
    features: [
      { name: "5 Bedrooms", icon: "fas fa-bed" },
      { name: "5 Bathrooms", icon: "fas fa-bath" },
      { name: "Home Theater", icon: "fas fa-video" },
      { name: "Swimming Pool", icon: "fas fa-swimming-pool" },
      { name: "Garden", icon: "fas fa-tree" },
      { name: "Bar Area", icon: "fas fa-glass-cheers" },
      { name: "Guest Suite", icon: "fas fa-user-friends" },
    ],
  },
];

// Function to get property data
function getPropertyData() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const title = params.get("title");

  let selectedProperty = null;

  // First try to find by ID (most reliable method)
  if (id) {
    selectedProperty = properties.find((p) => p.id === id);
    if (selectedProperty) return selectedProperty;
  }

  // If no ID or ID not found, try to find by exact title match
  if (title) {
    selectedProperty = properties.find((p) => p.title === title);
    if (selectedProperty) return selectedProperty;
  }

  // If no exact title match, try partial title match (case insensitive)
  if (title) {
    const lowerCaseTitle = title.toLowerCase();
    selectedProperty = properties.find((p) =>
      p.title.toLowerCase().includes(lowerCaseTitle)
    );
    if (selectedProperty) return selectedProperty;
  }

  // Last resort: create a property from URL parameters
  if (title) {
    return {
      title: title,
      location: `${params.get("city") || ""}, ${params.get("state") || ""}`,
      price: params.get("price")
        ? `₹${parseInt(params.get("price")).toLocaleString()}`
        : "Price not available",
      image: params.get("image") || "../../assets/images/Houses/default.jpeg",
      description: "Detailed description not available.",
      features: [],
      reviews: [],
    };
  }

  return null;
}

// Render property details
function renderPropertyDetails() {
  const selectedProperty = getPropertyData();

  if (!selectedProperty) {
    document.getElementById("property-container").innerHTML =
      `<h2 style="text-align: center;">No data found. Please go back and select a property.</h2>`;
    return;
  }

  // Update DOM with selected property data
  const propertyImage = document.getElementById("property-image");
  if (propertyImage) {
    propertyImage.src = selectedProperty.image;
    propertyImage.onerror = function () {
      this.src = "../../assets/images/Houses/default.jpeg"; // Fallback image
    };
  }

  // Set text content safely
  const setElementText = (id, text) => {
    const element = document.getElementById(id);
    if (element) element.innerText = text;
  };

  setElementText("property-title", selectedProperty.title);
  setElementText("property-location", selectedProperty.location);
  setElementText("property-price", selectedProperty.price);

  const descriptionElement = document.getElementById("property-description");
  if (descriptionElement) {
    descriptionElement.textContent = selectedProperty.description;
  }

  // Features
  const featuresList = document.getElementById("property-features");
  if (featuresList) {
    featuresList.innerHTML = "";
    if (selectedProperty.features && selectedProperty.features.length > 0) {
      selectedProperty.features.forEach((feature) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${feature.icon}"></i> ${feature.name}`; // Add the icon class here
        featuresList.appendChild(li);
      });
    } else {
      featuresList.innerHTML = "<li>Features not available</li>";
    }
  }
//  The contact information is added in the line below:
card.innerHTML = `
<img src="${house.image}" alt="${house.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;" />
<h3>${house.title}</h3>
<p><strong>Location:</strong> ${house.city}, ${house.state}</p>
<p><strong>Price:</strong> ₹${formattedPrice}</p>
<p><strong>Contact:</strong> +91 9876543210</p>
`
  
}

// Add an event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderPropertyDetails);

// Add this helper function to make debugging easier
function debugPropertyDisplay() {
  const params = new URLSearchParams(window.location.search);
  console.log("URL Parameters:", Object.fromEntries(params));
  console.log("Selected Property:", getPropertyData());
}

// Call this function to help with debugging
document.addEventListener("DOMContentLoaded", debugPropertyDisplay);