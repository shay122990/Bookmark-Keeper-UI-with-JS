const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

//Show Modal, Focus on Iput

function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
};

//Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', ()=> modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));

//Handle Data from Form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.include('http://', 'https://')) {
    urlValue = `https://${urlValue}`;
  }
};
//Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);