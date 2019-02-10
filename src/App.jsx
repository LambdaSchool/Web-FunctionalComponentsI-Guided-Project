// Implement a NavMaker function that takes and array of links (see above)
// and returns a nav element containing links.
function NavMaker(linkData) {
  // implement
}

const links = [
  {
    href: 'https://google.com',
    innerText: 'Google',
  },
  {
    href: 'https://wikipedia.org',
    innerText: 'Wikipedia',
  },
  {
    href: 'https://bing.com',
    innerText: 'Bing',
  },
];

const nav = NavMaker(links);
document.querySelector('#target1').appendChild(nav);

// DESIRED RESULT IN THE DOM:
// <div id="target1">
//   <nav>
//     <a href="https://google.com">Google</a>
//     <a href="https://wikipedia.org">Wikipedia</a>
//     <a href="https://bing.com">Bing</a>
//   </nav>
// </div>
