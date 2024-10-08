// src/main.js
document.addEventListener("DOMContentLoaded", () => {
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
