function openNav() {
    document.getElementById("overlay-nav").style.width = "100%";
  }
  
function closeNav() {
  document.getElementById("overlay-nav").style.width = "0%";
}

function showTimeline_K() {
  var pic = document.getElementById("pic-K");
  var timeline = document.getElementById("timeline-K");
  pic.style.display = "none";
  timeline.style.display = "block";
}

function showTimeline_D() {
  var pic = document.getElementById("pic-D");
  var timeline = document.getElementById("timeline-D");
  pic.style.display = "none";
  timeline.style.display = "block";
}

function showPic_K() {
  var pic = document.getElementById("pic-K");
  var timeline = document.getElementById("timeline-K");
  pic.style.display = "block";
  timeline.style.display = "none";
}

function showPic_D() {
  var pic = document.getElementById("pic-D");
  var timeline = document.getElementById("timeline-D");
  pic.style.display = "block";
  timeline.style.display = "none";
}
