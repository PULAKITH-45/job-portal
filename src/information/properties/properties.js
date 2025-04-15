const houses = [
  { state: "Delhi", city: "New Delhi", price: 15000000, title: "3-BHK Apartment near Aero City", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Delhi", city: "New Delhi", price: 25000000, title: "Villa in Saket", image: "../../assets/images/Houses/penthouse.jpeg" },
  { state: "Delhi", city: "New Delhi", price: 18000000, title: "Modern Condo in CP", image: "../../assets/images/Houses/villa.jpeg" },
  { state: "Maharashtra", city: "Mumbai", price: 32000000, title: "Sea View Apartment near Marine Drive", image: "../../assets/images/Houses/apartment Mumbai.jpeg" },
  { state: "Maharashtra", city: "Mumbai", price: 28000000, title: "Luxury Villa in Thane", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Maharashtra", city: "Mumbai", price: 35000000, title: "Penthouse in Malabar Hills", image: "../../assets/images/Houses/penthouse.jpeg" },
  { state: "Punjab", city: "Amritsar", price: 12000000, title: "Apartment in Amritsar", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Punjab", city: "Amritsar", price: 14000000, title: "3BHK in Amritsar", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Punjab", city: "Amritsar", price: 17000000, title: "Luxury Bungalow in Amritsar", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Uttar Pradesh", city: "Lucknow", price: 20000000, title: "Villa in Lucknow", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Uttar Pradesh", city: "Lucknow", price: 24000000, title: "Mansion in Lucknow", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Uttar Pradesh", city: "Lucknow", price: 18000000, title: "Bungalow in Lucknow", image: "../../assets/images/Houses/villa.jpeg" },
  { state: "Rajasthan", city: "Jaipur", price: 22000000, title: "Villa in Jaipur", image: "../../assets/images/Houses/villa.jpeg" },
  { state: "Rajasthan", city: "Jaipur", price: 26000000, title: "Royal House in Jaipur", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Rajasthan", city: "Jaipur", price: 24000000, title: "Pink Palace in Jaipur", image: "../../assets/images/Houses/big-villa.jpg" },
  { state: "Karnataka", city: "Bangalore", price: 30000000, title: "Modern House in Bangalore", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Karnataka", city: "Bangalore", price: 35000000, title: "Skyline Flat in Bangalore", image: "../../assets/images/Houses/apartment2.jpeg" },
  { state: "Karnataka", city: "Bangalore", price: 32000000, title: "4BHK in Bangalore", image: "../../assets/images/Houses/villa.jpeg" },
  { state: "Tamil Nadu", city: "Chennai", price: 18000000, title: "2BHK Flat in Chennai", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Tamil Nadu", city: "Chennai", price: 21000000, title: "Cozy Villa in Chennai", image: "../../assets/images/Houses/big-villa.jpg" },
  { state: "Tamil Nadu", city: "Chennai", price: 25000000, title: "Luxury Apartment in Chennai", image: "../../assets/images/Houses/apartment2.jpeg" },
  { state: "Telangana", city: "Hyderabad", price: 22000000, title: "Premium Flat in Hyderabad", image: "../../assets/images/Houses/apartment.jpeg" },
  { state: "Telangana", city: "Hyderabad", price: 27000000, title: "Hi-tech Villa in Hyderabad", image: "../../assets/images/Houses/villa2.jpeg" },
  { state: "Telangana", city: "Hyderabad", price: 31000000, title: "5BHK in Hyderabad", image: "../../assets/images/Houses/apartment2.jpeg" },
];

const budgetRanges = {
  "10-25": [1000000, 2500000],
  "25-50": [2500000, 5000000],
  "50-75": [5000000, 7500000],
  "75-100": [7500000, 10000000],
  "100+": [10000000, 40000000],
};

document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  searchProperties();
});

function searchProperties() {
  const state = document.getElementById("state").value.trim().toLowerCase(); // Convert to lowercase
  const city = document.getElementById("city").value.trim().toLowerCase(); // Convert to lowercase
  const budget = document.getElementById("budget").value;
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = "";

  let filtered = houses.filter(house => {
    // Case-insensitive comparison
    const stateMatch = state ? house.state.toLowerCase() === state : true;
    const cityMatch = city ? house.city.toLowerCase() === city : true;

    if (!stateMatch || !cityMatch) return false;

    if (budget !== "no-budget") {
      const [min, max] = budgetRanges[budget];
      return house.price >= min && house.price <= max;
    }

    return true;
  });

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no">
        <h2>Sorry We Are Not Here yet</h2>
      </div>`;
  } else {
    filtered.forEach(house => {
      const card = document.createElement("div");
      card.classList.add("property-card");
      card.innerHTML = `
        <img src="${house.image}" alt="${house.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;" />
        <h3>${house.title}</h3>
        <p><strong>Location:</strong> ${house.city}, ${house.state}</p>
        <p><strong>Price:</strong> ₹${house.price.toLocaleString()}</p>
      `;
      card.addEventListener("click", () => {
        const queryParams = new URLSearchParams({
          title: house.title,
          city: house.city,
          state: house.state,
          price: house.price,
          image: house.image
        });
        window.location.href = `property-details.html?${queryParams.toString()}`;
      });
      resultsContainer.appendChild(card);
    });
  }
}