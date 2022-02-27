document.getElementById("pub-add-button").addEventListener("click", createPub)

class Pub {
  
  constructor(title, city) {
    this.title = title;
    this.city = city;
    this.rating = 0;
  }

  upvote() {
    this.rating++;
    refreshList();
  }

  render() {
    let row = document.createElement("li");
    row.classList.add("newBar");
    let span = document.createElement("span");
    span.innerText = `${this.title} (${this.city})`;
    let points = document.createElement("span");
    points.classList.add("text-right");
    points.innerText = this.rating;
    let upvoteButton = document.createElement("button");
    upvoteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="like" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>`

    upvoteButton.addEventListener("click", () => {this.upvote()});
    row.append(span);
    row.append(points);
    row.append(upvoteButton);
    return row;
  }
}

let pubList = {
  pubs: [],

  addPub(pub) {
    this.pubs.push(pub);
  },

  render() {
    this.pubs.sort((a,b) => {return b.rating-a.rating})
    let list = document.createElement("ul");

    this.pubs.forEach( (pub) => {
      list.appendChild(pub.render()); 
    })

    return list;
  }
}


function createPub() {
  let data = new FormData(document.getElementById("pub-form"));
  let krcma = new Pub(data.get("title"), data.get("city"));
  pubList.addPub(krcma);
  refreshList();
}

function refreshList() {
  console.log(pubList);
  let listWrapper = document.getElementById("pub-list");

  while (listWrapper.lastChild) {
    listWrapper.lastChild.remove();
  }

  listWrapper.appendChild(pubList.render());
}
