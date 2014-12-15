(function() {
  var ga, s;

  ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';

  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

var pushEvent = function (action) {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-46624647-1']);
  _gaq.push(['_trackPageview', '/' + action]);
}

// Just counting.
var onInstall = function() { pushEvent('install'); }
var onSuspend = function() { pushEvent('suspend'); }

chrome.runtime.onInstalled.addListener(onInstall);
chrome.runtime.onSuspend.addListener(onSuspend);
