const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel)
})

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute('aria-controls')
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;
  const panels = mainContainer.querySelectorAll('[role="tabpanel"]');
  const pictures = mainContainer.querySelectorAll('.picture')

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false)

  targetTab
    .setAttribute('aria-selected', true)

  toggleContent(panels, targetPanel, 'id')
  toggleContent(pictures, targetPanel, 'data-tab')
}


function toggleContent(parent, target, content) {
  parent.forEach((item) => {
    if (target === item.getAttribute(content)) {
      item.removeAttribute('hidden')
    } else {
      item.setAttribute('hidden', true)
    }
  })
}


let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) tabFocus = 0;
    } else if (e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) tabFocus = tabs.length - 1;
    }

    tabs[tabFocus].setAttribute('tabindex', 0)
    tabs[tabFocus].focus();
  }
}

