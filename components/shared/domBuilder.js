import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="add-link"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
