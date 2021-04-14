var pageData = {}

function applyArrayofData(elementclass, isImage, isLink, isContent, value, index) {
    var elementArray = document.getElementsByClassName(elementclass);
    if (elementclass === "m-cast-img" || elementclass === "m-cast-name") {
        index = index + 3;
    }
    var property = isContent ? "innerHTML" : isLink ? "href" : isImage ? "src" : "";
    elementArray[index][property] = value;
}

function getISODateString(date) {
    const pad = num => ("0" + num).slice(-2);
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate())
    );
  }

function applyPageData(pageData, movieID) {
    var runTime = parseInt(pageData.Runtime / 60) + "Hrs" + " " + parseInt(pageData.Runtime % 60) + "mins";

    document.getElementsByClassName("m-title")[0].innerHTML = pageData.Title;
    document.getElementsByClassName("m-type")[0].innerHTML = pageData.Genre.split(",")[0];
    debugger;
    document.getElementsByClassName("m-date")[0].innerHTML = pageData.ReleaseDate;
    document.getElementsByClassName("m-time")[0].innerHTML = runTime;
    document.getElementsByClassName("m-yt-link")[0].href = pageData.TrailerUrl;
    document.getElementsByClassName("m-yt-thumb")[0].src = pageData.PosterUrl;
    document.getElementsByClassName("m-synop")[0].innerHTML = pageData.Description;
    document.getElementsByClassName("m-rating")[0].innerHTML = pageData.Rated;
    document.getElementsByClassName("m-tmeter")[0].odometer.value = parseInt(pageData.Tomotometer);
    document.getElementsByClassName("m-audscore")[0].odometer.value = parseInt(pageData.AudienceScore);
    document.getElementsByClassName("m-thumb")[0].src = "https://klart-digi.github.io/Media/Movies/"+`${movieID}`+"/thumbnail1.png";
    document.getElementsByClassName("m-thumb")[1].src = "https://klart-digi.github.io/Media/Movies/"+`${movieID}` +"/thumbnail2.png";

    document.getElementsByClassName("m-lang")[0].innerHTML = pageData.Language.split(",")[0]
    Object.keys(pageData.Actors).filter((name, index) => {

        applyArrayofData("m-cast-name", false, false, true, name, index);
    });

    Object.values(pageData.Actors).filter((image, index) => {

        applyArrayofData("m-cast-img", true, false, false, image, index);
    });


    const production =
  localStorage.getItem("LOCALIP") ||
  "https://cinibot.ticketingapi.klartdigi.in";

var serverResponded = {};

//getPosFilms();
/** Method to get POS films */

  const dateParams = { Businessdate: getISODateString(new Date()) };
  const url = `${production}/api/browsing.svc/GetPosFilms?Businessdate=${dateParams.Businessdate.replace(
    /\-/g,
    "/"
  )}`;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("connectapitoken", "sVkzyAuRnME8Iel3bEic9A==");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      serverResponded.posFilms = JSON.parse(this.responseText);
      var movieData = serverResponded.posFilms.data.filter((flim)=> flim["HOFilmCode"] === movieID)[0];
      document.getElementsByClassName("m-yt-link")[0].href = movieData.URLforTrailer;
      document.getElementsByClassName("m-yt-thumb")[0].src = movieData.URL1;
      setTimeout(() => {

        document.getElementsByClassName("m-banner")[0].style.backgroundImage = "url(" + `${movieData.URL2}` + ")";
    }, 50)


    }
  };
}


function fetchJSONFile(path, movieID) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
  pageData =  JSON.parse(atob(data.content));
  console.log(pageData);
  applyPageData(pageData, movieID);
        }
      }
    };
    httpRequest.open("GET", path);
    httpRequest.send();
  }


