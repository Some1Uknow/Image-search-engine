document.addEventListener("DOMContentLoaded", () => {
    const accessKey = "uXWNSf2jTSjOsHGPI1jMKkLVKBwBeFtenWNKc1ParIw"; 
    const formEl = document.querySelector("form");
    const inputEl = document.getElementById("searchbar");
    const searchResults = document.getElementById("searchResults");
    const showMore = document.getElementById("show-more-button");
    const submitButton = document.getElementById("submit"); // Get the Search button element

    let inputData = "";
    let page = 1;

    async function searchImages() {
      inputData = inputEl.value;
      const url = `https://api.unsplash.com/search/photos?query=${inputData}&per_page=3&page=${page}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      });

      const data = await response.json();
      const results = data.results;

      if (page === 1) {
        searchResults.innerHTML = "";
      }

      results.forEach(result => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description || inputData;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description || inputData;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
      });

      page++;
      toggleShowMoreButton(results.length > 0);
    }

    function toggleShowMoreButton(show) {
      showMore.style.display = show ? "block" : "none";
    }

    formEl.addEventListener("submit", event => {
      event.preventDefault();
      page = 1;
      searchImages();
    });

    showMore.addEventListener("click", event => {
      event.preventDefault();
      searchImages();
    });

    submitButton.addEventListener("click", () => {
      page = 1;
      searchImages();
    });

    searchImages();
  });