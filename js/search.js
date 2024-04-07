let input = document.getElementById("search");
let resultsDiv = document.getElementById("search-results");
let projects = document.getElementById("projects");

let idx = lunr(function () {
    this.ref("id");
    this.field("title");
    this.field("description");

    data.forEach(function (doc) {
        this.add(doc);
    }, this);
});

input.addEventListener("input", () => {
    if (input.value === "") {
        projects.hidden = false;
        resultsDiv.hidden = true;
        return;
    }
    projects.hidden = true;
    resultsDiv.hidden = false;
    resultsDiv.innerHTML = "";
    let results = idx.search(input.value);
    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let ref = results[i]["ref"];
            let tags_list = data[ref]["tags"];
            let tags = "";
            for (let j = 0; j < tags_list.length; j++) {
                tags += `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tags_list[j]["name"]}/${tags_list[j]["name"]}-${tags_list[j]["type"]}.svg" draggable="false" oncontextmenu="return false;" width="32" height="32">`;
            }
            resultsDiv.innerHTML += `
                <div class="col-sm-4" style="margin-bottom: 15px">
                  <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${data[ref]["title"]}</h5>
                      <p class="text-secondary" style="margin-right: 10px;">${data[ref]["date"]}</p>
                      <div class="card-subtitle" style="margin-bottom: 5px;">${tags}</div>
                      <p class="card-text overflow-text">${data[ref]["description"]}</p>
                      <a href="${data[ref]["url"]}" class="btn btn-primary mt-auto me-auto">Learn More</a>
                    </div>
                  </div>
              </div>
            `;
        }
    }
});
