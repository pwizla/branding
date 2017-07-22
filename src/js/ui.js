document.addEventListener("DOMContentLoaded", function(event) {
  var knowMore = document.getElementById('knowMore');
  var titleBlock = document.getElementById('titleBlock');
  var highlight = document.getElementById('myName');
  var rotating = document.getElementById('jobs');
  var hello = document.getElementById('hello');
  var scientistMargin = document.getElementById('scientistMargin');
  var devMargin = document.getElementById('devMargin');
  var designMargin = document.getElementById('designMargin');
  var writeMargin = document.getElementById('writeMargin');
  var scientistContent = document.getElementById('scientistContent');
  var devContent = document.getElementById('devContent');
  var designContent = document.getElementById('designContent');
  var writeContent = document.getElementById('writeContent');

  knowMore.onclick = function() {
    titleBlock.className = "title__wrapper title__wrapper--up";
    highlight.className = "title--highlight title--highlight-up";
    knowMore.className = "title__know-more--hidden";
    rotating.className = "title__jobs--hidden";
    hello.className = "title__hello--hidden";
    scientistMargin.className = "details__scientist-margin";
    devMargin.className = "details__dev-margin";
    designMargin.className = "details__design-margin";
    writeMargin.className = "details__write-margin";
    scientistContent.className = "details__scientist-content";
    devContent.className = "details__dev-content";
    designContent.className = "details__design-content";
    writeContent.className = "details__write-content";
  }
});
