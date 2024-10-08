// src/main.js
document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos/1",
    );
    const data = await response.json(); // Parse the JSON response
    console.log(data); // This will log the fetched data object
    return data; // Return the data object
  }

  async function displayData() {
    try {
      // Fetch data from the API
      const data = await fetchData();

      // Access the image URL from the fetched data object
      const imageUrl = data.url; // Use data.url, not Object.url

      // Create an img element
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl; // Set the image source
      imgElement.alt = data.title; // Use title as alt text (optional)

      // Select the container where you want to display the image
      const container = document.getElementById("image-container");

      // Append the img element to the container
      container.appendChild(imgElement);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  // Call the displayData function to fetch and display the image
  displayData();

  const app = document.getElementById("app");
  const homePage = `
    <h1>Welcome to the Vanilla SPA</h1>
    <button id="about-btn">Go to About Page</button>
`;
  const aboutPage = `
    <h1>About This SPA</h1>
    <button id="home-btn">Go to Home Page</button>
`;

  const render = (content) => {
    app.innerHTML = content;
  };
  const loadHomePage = () => {
    render(homePage);
    document
      .getElementById("about-btn")
      .addEventListener("click", loadAboutPage);
  };
  const loadAboutPage = () => {
    render(aboutPage);
    document.getElementById("home-btn").addEventListener("click", loadHomePage);
  };
  loadHomePage();
});
