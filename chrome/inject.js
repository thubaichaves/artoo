;(function(undefined) {

  /**
   * artoo chrome injection
   * =======================
   *
   * This chrome content script injects artoo in every relevant page when the
   * artoo's extension is activated.
   */

  // Creating script element
  var script = document.createElement('script'),
      body = document.getElementsByTagName('body')[0];

  script.src = chrome.extension.getURL('build/artoo.concat.js');
  script.type = 'text/javascript';
  script.id = 'artoo_injected_script';
  script.setAttribute('chrome', 'true');

  // Appending to body
  body.appendChild(script);
}).call(this);

// Trigger message when automatically injected
// variable to enable or disable artoo