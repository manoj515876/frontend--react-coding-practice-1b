const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="gifts-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h2 className="name">Manoj M</h2>
      <p className="description">
        Manoj Institute of Computer Education and Technology, Rayadurg
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
