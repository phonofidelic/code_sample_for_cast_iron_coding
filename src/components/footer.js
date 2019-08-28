const footeText =
  '<p class="footer-text">This website was created as a code sample for an application to Cast Iron Coding. <a class="footer-link" href="https://github.com/phonofidelic/code_sample_for_cast_iron_coding" target="blank">Click here</a> to view the source code.</p>';

export default () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = footeText;

  return footer;
};
