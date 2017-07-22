document.addEventListener("DOMContentLoaded", function(event) {
  var knowMore = document.getElementById('knowMore');
  var titleBlock = document.getElementById('titleBlock');
  var highlight = document.getElementById('myName');
  var rotating = document.getElementById('jobs');
  var hello = document.getElementById('hello');
  var titleName = document.getElementById('titleName');
  var pwLogo = document.getElementById('pwLogo');
  var sciAnchor = document.getElementById('sciAnchor');
  var devAnchor = document.getElementById('devAnchor');
  var desAnchor = document.getElementById('desAnchor');
  var wriAnchor = document.getElementById('wriAnchor');
  var descChoose = document.getElementById('choose');
  var devPanel = document.getElementById('devPanel');

  knowMore.onclick = function() {
    titleName.className = "hidden";
    pwLogo.className = "header__PW header__PW--visible";
    titleBlock.className = "title__wrapper title__wrapper--up";
    highlight.className = "title--highlight title--highlight-up";
    knowMore.className = "hidden";
    rotating.className = "title__jobs--hidden";
    hello.className = "title__hello--hidden";
    sciAnchor.className = "details__anchor-scientist";
    devAnchor.className = "details__anchor-dev";
    desAnchor.className = "details__anchor-design";
    wriAnchor.className = "details__anchor-write";
    descChoose.className = "details__descriptor";
  }

  sciAnchor.onclick = function() {
    sciPanel.className = "scientist__panel scientist__panel--visible";
  }

  devAnchor.onclick = function() {
    devPanel.className = "developer__panel developer__panel--visible";
  }

  desAnchor.onclick = function() {
    desPanel.className = "design__panel design__panel--visible";
  }

  wriAnchor.onclick = function() {
    wriPanel.className = "write__panel write__panel--visible";
  }
});
