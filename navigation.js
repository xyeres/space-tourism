// Mobile Navigation
const nav = document.getElementById('primary-navigation');

(function (elementId, nav) {
  const navToggle = document.getElementById(elementId);
  navToggle.addEventListener('click', toggle);

  function toggle() {
    let isVisible = nav.getAttribute('data-visible')

    if (isVisible === 'false') {
      nav.setAttribute('data-visible', true)
      navToggle.setAttribute('aria-expanded', true)
    } else {
      nav.setAttribute('data-visible', false)
      navToggle.setAttribute('aria-expanded', false)
    };
  };

})('mobile-nav-toggle', nav);