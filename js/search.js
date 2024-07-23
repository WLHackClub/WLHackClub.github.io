let input = document.getElementById("search");
let results_div = document.getElementById("search-results");
let projects = document.getElementById("projects");

let idx = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("date");
    this.field("description");

    data.forEach(function (doc) {
        this.add(doc);
    }, this);
});

/*
 * Modified version of the getResults function by Aaron Taylor licensed under Creative Common Attribution 4.0 International
 * Link: https://raw.githubusercontent.com/kujenga/website/main/assets/js/search.jsx
 * License: https://creativecommons.org/licenses/by/4.0/deed.en
 */
function get_results(query) {
    if (!query) {
        return [];
    }
    if (/[*:^~+-]/.test(query)) {
        try {
            return idx.search(query);
        } catch {
            return [];
        }
    }

    let words = query.match(/[^\s,]+/g).map((word) => word.toLowerCase());

    return idx.query((search) => {
        words.forEach((word) =>
            search.term(word, {
                boost: 3,
            })
        );
        search.term(words.at(-1), {
            boost: 1,
            wildcard: lunr.Query.wildcard.TRAILING,
        });
        return search;
    });
}

input.addEventListener("input", () => {
    if (!input.value) {
        projects.hidden = false;
        results_div.hidden = true;
        return;
    }
    projects.hidden = true;
    results_div.hidden = false;
    results_div.innerHTML = "";
    let results = get_results(input.value);
    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let ref = results[i]["ref"];
            let tags_list = data[ref]["tags"];
            let tags = "";
            for (let j = 0; j < tags_list.length; j++) {
                tags += `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tags_list[j]["name"]}/${tags_list[j]["name"]}-${tags_list[j]["type"]}.svg" draggable="false" oncontextmenu="return false;" width="32" height="32">\n`;
            }
            results_div.innerHTML += `
                <div class="col-sm-4 mb-3">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${data[ref]["title"]}</h5>
                      <p class="text-secondary me-1">${data[ref]["date"]}</p>
                      <div class="card-subtitle mb-1">${tags}</div>
                      <p class="card-text overflow-text">${data[ref]["description"]}</p>
                      <a href="${data[ref]["url"]}" class="btn btn-primary mt-auto me-auto">Learn More</a>
                    </div>
                  </div>
              </div>
            `;
        }
    }
});
