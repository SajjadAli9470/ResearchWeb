// for loadmore
const comments = document.getElementById('allcomments');
const pcomments = document.getElementById('pastcomments');
const showcmt = document.querySelector(".showcmt");
const button = document.querySelector(".button");
var shcmt = true; //default
showcmt.addEventListener("click", function () {
  if (shcmt === true) {
    showcmt.textContent = "Show Comments";
    pcomments.style.display = "none";
    shcmt = false;
  }
  else {
    showcmt.textContent = "Hide Comments";
    pcomments.style.display = "Block";
    shcmt = true;

  }
});
const loadmore = document.querySelector("#loadmore");
const elementList = [
  ...document.querySelectorAll(".content_list .content_item"),
];
if (elementList.length <= 10) {
  loadmore.style.display = "none";
}

let currentItems = 10;

loadmore.addEventListener("click", (e) => {
  for (let i = currentItems; i < currentItems + 2; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "flex";
    }
  }
  currentItems += 2;

  // Load more button will be hidden after content_list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});

let contentList_Children = document.querySelector(".content_list").children;
var main_head = document.querySelector(".tutorials_topic");

var title = document.querySelector(".tutorials_topic").textContent;
// Childern 0 for thumbnail purpose
// Childern 1 is content showing
// children 1-> children 0  for more text
// children 1-> children 1  for read more

function p_show(x) {
  var readMore = x.children[1].children[2];

  if (readMore.textContent === "Read more...") {

    x.style.display = "Block";
    x.children[1].children[1].style.display = "inline";

    x.classList.remove("post");

    for (let i = 0; i < contentList_Children.length; i++) {
      if (contentList_Children[i] != x) {
        contentList_Children[i].style.display = "none";
      }
    }

    x.children[0].style.display = "none";

    main_head.classList.add("hidden");
    readMore.textContent = "Read less...";
    readMore.style.width = "100%";
    readMore.style.backgroundColor="#ffffff";
    readMore.style.color="white !important";

    x.children[1].children[0].style.display = "none";
    comments.style.display = "Block";

    showcmt.textContent = "Show Comments";
    pcomments.style.display = "none";
    shcmt = false;

  } else {
    if (x.children[1].children[1].style.display === "none") {
      main_head.classList.remove("hidden");
      document.querySelector(".tutorials_topic").textContent = title;
      x.children[1].children[0].style.display = "";
      readMore.style.width = "";
      readMore.style.backgroundColor="";
      readMore.style.color="#8261ee";
      main_head.classList.remove("hidden");

      readMore.textContent = "Read more...";
      x.children[0].style.display = "";
      x.children[0].style.height = "11rem";
      x.children[0].style.width = "11rem";
      x.children[0].children[0].style.height = "11rem";
      x.children[0].children[0].style.width = "11rem";
      showcmt.textContent = "Hide Comments";
      pcomments.style.display = "Block";
      shcmt = true;
      scrollTopAnimated();
    }
  }
}

const ItemsToHide = [...document.querySelectorAll(".more_text")];

function p_hide(y) {
  if (y.textContent == "Read less...") {
    for (let i = 0; i < contentList_Children.length; i++) {
      contentList_Children[i].classList.add("post");
      contentList_Children[i].style.display = "flex";
      document.querySelector(".tutorials_topic").textContent = title;
      comments.style.display = "block";
    }

    for (let i = 0; i < ItemsToHide.length; i++) {
      ItemsToHide[i].style.display = "none";
    }
  }
  comments.classList.remove("post");
  button.classList.remove("post");
}
function Aboutme() {
  location.href = "About.html";
}
var AllTopics = [];

const topicClasses = [...document.querySelectorAll(".content_item")];
let topicNumber = 0;
// =document.querySelectorALL(".content_item");
for (let i = 0; i < topicClasses.length; i++) {
  let classesName = topicClasses[i].classList;

  for (let j = 0; j < classesName.length; j++) {
    if (classesName[j] === "content_item" || classesName[j] === "post") {
      // global for all posts
    } else {
      var duplicateCheck = false;
      for (let k = 0; k < topicNumber; k++) {
        if (classesName[j] == AllTopics[k]) {
          duplicateCheck = true;
        }
      }
      if (duplicateCheck === false) {

        AllTopics[topicNumber] = classesName[j];
        topicNumber++;
      }
    }
  }
}


var ShowList = [...AllTopics];
for (let l = 0; l < ShowList.length; l++) {
  var topic = [...ShowList[l]];
  var newWord = "";
  for (let i = 0; i < topic.length; i++) {
    if (topic[i] == "_") {

      topic[i] = " ";
    }
  }

  for (let k = 0; k < topic.length; k++) {
    newWord += topic[k];
  }

  ShowList[l] = newWord;
}
// Searching purpose
for (let k = 0; k < AllTopics.length; k++) {
  var node = document.createElement("li");
  node.classList.add("option");

  var textnode = document.createTextNode(AllTopics[k]);
  node.appendChild(textnode);

  document.getElementById("s_result").appendChild(node);
}
const optionsList = document.querySelectorAll(".option");
const searchBar = document.getElementById("searchBar");

let hpCharacters = [...ShowList];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});
const charactersList = document.getElementById("s_result");

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
          <li class="option ${character}" onclick="GoPost(this)" >
          ${character}    
          </li>
      `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
  // console.log(htmlString);
};

if (AllTopics.length > 0) {
  for (let k = 0; k < AllTopics.length; k++) {
    var node = document.createElement("li");
    node.classList.add("option");
    node.classList.add(AllTopics[k]);
    node.setAttribute("onclick", "GoPost(this)");
    var textnode = document.createTextNode(ShowList[k]);
    node.appendChild(textnode);
    document.getElementById("post_tags").appendChild(node);
  }
} else {
  var node = document.createElement("li");
  var textnode = document.createTextNode("Nothing Uploaded yet");
  node.appendChild(textnode);
  document.getElementById("post_tags").appendChild(node);
}

const show_option = document.querySelector(".search_result");

function showoption() {
  show_option.classList.remove("hidden");
}

function GoPost(x) {
  show_option.classList.add("hidden");
  searchBar.value = "";
  // console.log(x);
  main_head.classList.remove("hidden");
  for (let l = 0; l < topicClasses.length; l++) {
    // console.log(topicClasses[l]);
    topicClasses[l].children[0].style.display = "";
    topicClasses[l].children[0].children[0].hieght = "11rem";
    topicClasses[l].children[0].children[0].width = "11rem";
    topicClasses[l].children[1].children[0].style.display = "";
    topicClasses[l].children[1].children[1].style.display = "none";
    topicClasses[l].children[1].children[2].textContent = "Read more...";
    topicClasses[l].classList.add("post");
  }

  var reqTopic = x.classList;

  for (let i = 0; i < topicClasses.length; i++) {
    let topicWclasses = topicClasses[i].classList;
    topicClasses[i].style.display = "none";
    for (let j = 0; j < topicWclasses.length; j++) {
      if (topicWclasses[j] === reqTopic[1]) {
        var rspc = [...reqTopic[1]];

        var NewRspc = "";
        for (let m = 0; m < reqTopic[1].length; m++) {
          if (rspc[m] === "_") {
            rspc[m] = " ";
          }
        }
        for (let n = 0; n < rspc.length; n++) {
          NewRspc += rspc[n];
        }
        main_head.textContent = NewRspc;
        topicClasses[i].style.display = "flex";
        scrollTopAnimated();
      } else {

      }
    }
  }
}

window.addEventListener("click", function (event) {
  if (
    event.target != show_option &&
    event.target.parentNode != show_option &&
    !show_option.classList.contains("hidden")
  ) {
    show_option.classList.add("hidden");
    searchBar.value = "";
  }
});
function scrollTopAnimated() {
  $("html, body").animate({ scrollTop: "0" });
}
const postsCount = [...document.querySelectorAll('.post')];
const publishDate = document.querySelector('.publishOn');


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();


for (let i = 1; i <= postsCount.length; i++) {
  var date = document.getElementById(`${i}`).children[1].children[3].children[0].textContent;
  var day = parseInt(date.substring(0, 2));
  var month = parseInt(date.substring(3, 5));
  var year = parseInt(date.substring(6, 10));

  var yd = 0;
  var md = 0;
  var d = 0;

  var countdays = 0;

  if (year == yyyy) {

    if (month == mm) {
      // console.log(i);
      if (day == dd) {
        d = 0;
      } else {
        d = dd - day;
      }


    }
    else {
      md = (mm - month) * 30;
      md = md - day + dd;
    }

  }
  else {
    yd = (yyyy - year) * 365;
    yd = yd - (month * 30) + (mm * 30) - day + dd;
  }
  countdays = md + yd + d;



  var Displayformat;

  function returnWeek(countdays) {

    if (countdays < 30 && countdays > 6) {

      var totalWeek = Math.trunc(countdays / 7);

      if (countdays % 7 == 0) {
        Displayformat = totalWeek + 'weeks ago';
      } else {

        Displayformat = totalWeek + ' week ' + (countdays - (totalWeek * 7)) + ' days ago';
      }
    }

    return Displayformat;
  }
  function returnMonth(countdays) {
    if (countdays < 365 && countdays > 29) {
      // console.log(countdays + 'for month');
      var totalmonth = Math.trunc(countdays / 30);
      // console.log(totalmonth+'total month');
      if (countdays % 30 == 0) {
        Displayformat = totalmonth + 'months ago';
      }
      else {
        var reDays = countdays - totalmonth * 30;
        // console.log(reDays+'remaining days');
        if (reDays > 6) {

          Displayformat = totalmonth + ' month ' + returnWeek(reDays);
          // console.log(Displayformat);
        }
        else {
          Displayformat = totalmonth + ' month ' + (reDays) + ' days ago'
        }
      }
    }
    return Displayformat;
  }
  function returnYear(countdays) {
    if (countdays >= 365) {
      var totalYear = Math.trunc(countdays / 365);
      if (countdays % 365 == 0) {
        Displayformat = totalYear + 'years ago';
      }
      else {
        var rmonthdays = (countdays - totalYear * 365);
        Displayformat = totalYear + ' years ' + returnMonth(rmonthdays);

      }
    }
    return Displayformat;
  }

  if (countdays < 7) {
    Displayformat = countdays + ' days ago';
  }


  returnWeek(countdays);
  returnMonth(countdays);
  returnYear(countdays);


  // console.log(Displayformat);
  var date = document.getElementById(`${i}`).children[1].children[3].children[0].textContent = Displayformat;
  Displayformat = '';
}