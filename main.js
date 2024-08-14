document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");

  const customers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ];

  function loadContent(contentId) {
    switch (contentId) {
      case "customers":
        // Generate table rows from customer data
        const rows = customers
          .map(
            (customer) => `
          <tr class="table__row fade-in">
            <td class="table__cell">${customer.name}</td>
            <td class="table__cell">${customer.company}</td>
            <td class="table__cell">${customer.phone}</td>
            <td class="table__cell">${customer.email}</td>
            <td class="table__cell">${customer.country}</td>
            <td class="table__cell table__cell--status">
              <button class="${
                customer.status === "Active" ? "button-green" : "button-red"
              } fade-in" type="button">
                <span class="${
                  customer.status === "Active" ? "text-green" : "text-red"
                }">${customer.status}</span>
              </button>
            </td>
          </tr>
        `
          )
          .join("");

        mainContent.innerHTML = `
          <section class="customers">
            <div class="customers__header">
              <div class="header-content">
                <h2 class="customers__title fade-in">All Customers</h2>
                <span class="active fade-in">Active members</span>
              </div>
              <div class="search-container fade-in">
                <div class="search-wrapper">
                  <input
                    type="text"
                    id="search-customers"
                    class="search-input"
                    placeholder="Search"
                  />
                  <img
                    src="/image/search 1.svg"
                    alt="search"
                    class="search-icon"
                    width="20"
                  />
                </div>
              </div>
            </div>
            <table class="customers__table fade-in">
              <thead>
                <tr class="table__row table__row--header">
                  <th class="table__header">Customer Name</th>
                  <th class="table__header">Company</th>
                  <th class="table__header">Phone Number</th>
                  <th class="table__header">Email</th>
                  <th class="table__header">Country</th>
                  <th class="table__header">Status</th>
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
            <div class="pagination fade-in">
              <span class="pagination__info">Showing data 1 to ${customers.length} of ${customers.length} entries</span>
              <div class="pagination__controls">
                <a href="#" class="pagination__link">&lt;</a>
                <a href="#" class="pagination__link">1</a>
                <a href="#" class="pagination__link">2</a>
                <a href="#" class="pagination__link">3</a>
                <a href="#" class="pagination__link">4</a>
                <a href="#" class="pagination__link">...</a>
                <a href="#" class="pagination__link">40</a>
                <a href="#" class="pagination__link">&gt;</a>
              </div>
            </div>
          </section>
        `;

        // Add event handlers for status buttons
        const statusButtons = document.querySelectorAll(
          ".table__cell--status button"
        );
        statusButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const statusText = button.querySelector("span");
            if (statusText.textContent === "Active") {
              statusText.textContent = "Inactive";
              button.classList.remove("button-green");
              button.classList.add("button-red");
              statusText.classList.remove("text-green");
              statusText.classList.add("text-red");
            } else {
              statusText.textContent = "Active";
              button.classList.remove("button-red");
              button.classList.add("button-green");
              statusText.classList.remove("text-red");
              statusText.classList.add("text-green");
            }
          });
        });

        // Add a search handler
        document
          .getElementById("search-customers")
          .addEventListener("input", function () {
            const query = this.value.toLowerCase();
            const rows = document.querySelectorAll(".table__row");
            rows.forEach((row) => {
              const text = row.textContent.toLowerCase();
              row.style.display = text.includes(query) ? "" : "none";
            });
          });
        break;

      case "product":
        mainContent.innerHTML = "<p>Product content goes here.</p>";
        break;
      case "income":
        mainContent.innerHTML = "<p>Income content goes here.</p>";
        break;
      case "promote":
        mainContent.innerHTML = "<p>Promote content goes here.</p>";
        break;
      case "help":
        mainContent.innerHTML = "<p>Help content goes here.</p>";
        break;
      default:
        mainContent.innerHTML = "<p>Select a menu item to view content.</p>";
    }
  }

  // Event listeners for links in the sidebar
  document.getElementById("customers-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("customers");
  });

  document.getElementById("product-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("product");
  });

  document.getElementById("income-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("income");
  });

  document.getElementById("promote-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("promote");
  });

  document.getElementById("help-link").addEventListener("click", (e) => {
    e.preventDefault();
    loadContent("help");
  });
});
