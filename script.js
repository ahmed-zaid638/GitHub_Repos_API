// // varaiabls
let userFormEl = document.querySelector(".form");
let userInputEl = document.querySelector(".username");
let languagesEl = document.querySelector(".langs");
let searchEl = document.querySelector(".search-item");
let reposEl = document.querySelector(".repos");

// onSubmit function
userFormEl.addEventListener("submit", submitHandler);
languagesEl.addEventListener('click' , clickhandler)
console.log(languagesEl)
function clickhandler (e) {
let lang = e.target.getAttribute('data-lang')
fetchLangRepos(lang)
searchEl.innerHTML = lang
}

function submitHandler(e) {
  e.preventDefault();
  let user = userInputEl.value.trim();
  if (user) {
    fetchRepos(user);
  } else {
    alert("please enter username");
  }
}

function fetchLangRepos(lang) {
  let api_key = "https://api.github.com/search/repositories?q=" + lang;
  fetch(api_key)
    .then((res) => res.json())
    .then((data) => {
      let result = data.items
      // console.log(result)
       displayRepos(result)
    })
    .catch((err) => console.log(err));
}
function fetchRepos(user) {
  // https://api.github.com/users/elzerowebschool/repos
  //   ahmed-zaid638
  let api_key = "https://api.github.com/users/" + user + "/repos";

  fetch(api_key)
    .then((res) => res.json())
    .then((data) => {
      displayRepos(data);
    })
    .catch((err) => console.log(err));
}

function displayRepos(data) {
  for (let i = 0; i < 11; i++) {
    let element = data[i];
    console.log(element)
    reposEl.innerHTML +=
     ` <a  target="_blank" href="${element.html_url}" class="repo-item">
           <span> ${element.owner.login}/ ${element.name}</span> 
           <span> ${ element.open_issues_count > 0 ? '<i class="fa-thin fa-circle-xmark"></i>'  : '<i class="fa-sharp fa-solid fa-square-check"></i>' }  </span>    
       </a> `;
  }
}

