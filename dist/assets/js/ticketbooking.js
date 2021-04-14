 

/* < index.html> */

function indexAction(item,movie){
    localStorage.setItem(item,movie);
}
function getItemName(item){
    return localStorage.getItem(item);
}

/* < movie-details.html> */

function setMovieData(item,movie){
    localStorage.setItem(item,movie);
}

function getMovieData(item){
    return localStorage.getItem(item);
}

/* < movie-ticket-plan.html> */

function setShowTime(item,movie){
    localStorage.setItem(item,movie);
}

function getShowTime(item){
    return localStorage.getItem(item);
}
/* < movie-seat-plan.html> */
function setProceedData(item,movie){
    localStorage.setItem(item,movie);
}

function getProceedData(item){
    return localStorage.getItem(item);
}

function getShowDetails(item){
    return localStorage.getItem(item);
}

function getSeats(item){
    return localStorage.getItem(item);
}

function setBookingTime(item,movie){
    localStorage.setItem(item,movie);
}

function getBookingTime(item){
    return localStorage.getItem(item);
}
function generateTicketTime(posSeat) {
    var screens = [], scr1 = [], scr2 = [], scr3 = [], scr4 = [], scr5 = [], scr6 = [], scr7 = [], scr8 = [], scr9 = [], scr10 = [];
    for (var i = 0, len = posSeat.length; i < len; i++) {

        switch (posSeat[i].ScreenNum) {
            case 1:
                scr1.push(posSeat[i]);
                break;
            case 2:
                scr2.push(posSeat[i]);
                break;
            case 3:
                scr3.push(posSeat[i]);
                break;
            case 4:
                scr4.push(posSeat[i]);
                break;
            case 5:
                scr5.push(posSeat[i]);
                break;
            case 6:
                scr6.push(posSeat[i]);
                break;
            case 7:
                scr7.push(posSeat[i]);
                break;
            case 8:
                scr8.push(posSeat[i]);
                break;
            case 9:
                scr9.push(posSeat[i]);
                break;
            case 10:
                scr10.push(posSeat[i]);
                break;
        }
    }
    var availScreens = [{ "screen1": scr1 }, { "screen2": scr2 }, { "screen3": scr3 }, { "screen4": scr4 }, { "screen5": scr5 }, { "screen6": scr6 }, { "screen7": scr7 }, { "screen8": scr8 }, { "screen9": scr9 }, { "screen10": scr10 }];
    

    var movielist = document.getElementsByClassName("movie-name");
    for (var i = 0, len = movielist.length; i < len; i++) { 
        var screenNum = movielist[i].querySelector(".name").getAttribute("screen");
        var screenObj = availScreens[i][screenNum];
        for (var k = 0; k < screenObj.length; k++) {
            var time = new Date(screenObj[k].Showing).getHours() + ":" + new Date(screenObj[k].Showing).getMinutes() + "0";
            screenObj[k].time =  time;
            availScreens[i][screenNum][k].time= time;
        }
        var timeEle = movielist[i].nextElementSibling.children;
        for (var l = 0; l < screenObj.length; l++) {
           if(timeEle[l]){
            timeEle[l].innerHTML = screenObj[l].time;
            timeEle[l].setAttribute("sessionId", screenObj[l]["SessionId"]);
           }
        }

        if(movielist.length>screenObj.length){
            for (var m = screenObj.length, count=movielist.length; m < count; m++) {
                var screenrow = movielist[count-1].parentElement;
                if(screenrow){
                    screenrow.style.display="none";
                }
            }
        }
    }
    console.log(availScreens);
    localStorage.setItem("screendetails", JSON.stringify(availScreens));
}