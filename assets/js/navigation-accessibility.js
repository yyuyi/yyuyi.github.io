(function () {
  "use strict";

  function initNavigationAccessibility() {
    var nav = document.getElementById("site-nav");
    var overflow = document.getElementById("site-nav-overflow");
    if (!nav || !overflow) return;
    var toggle = nav.querySelector("button[aria-controls='site-nav-overflow']");
    if (!toggle) return;

    // The bundled greedy-navigation plugin owns layout and toggling. Reflect its
    // actual state, including links moving between lists when the window resizes.
    function syncNavigationState() {
      var expanded = !toggle.classList.contains("hidden") &&
        !overflow.classList.contains("hidden") && overflow.children.length > 0;
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggle.setAttribute("aria-label", expanded ? "Hide more navigation links" : "Show more navigation links");
      if (toggle.classList.contains("close") !== expanded) {
        toggle.classList.toggle("close", expanded);
      }
    }

    function closeNavigation(restoreFocus) {
      if (overflow.classList.contains("hidden")) return;
      overflow.classList.add("hidden");
      syncNavigationState();
      if (restoreFocus) toggle.focus();
    }

    toggle.addEventListener("click", syncNavigationState);
    nav.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        event.preventDefault();
        closeNavigation(true);
      }
    });
    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) closeNavigation(false);
    });

    if (window.MutationObserver) {
      var observer = new MutationObserver(syncNavigationState);
      observer.observe(overflow, { attributes: true, attributeFilter: ["class"], childList: true });
      observer.observe(toggle, { attributes: true, attributeFilter: ["class"] });
    }
    window.addEventListener("resize", syncNavigationState);
    syncNavigationState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavigationAccessibility);
  } else {
    initNavigationAccessibility();
  }
}());
