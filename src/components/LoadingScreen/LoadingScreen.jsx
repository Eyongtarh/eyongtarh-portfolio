import "./LoadingScreen.css";

function LoadingScreen({ isLoading }) {
  return (
    <div className={`loading-screen ${!isLoading ? "hidden" : ""}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <span>
            {" "}
            <img
              src="/profile.jpeg"
              alt="Eyongtarh Besong"
              width="90"
              height="90"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </span>
        </div>
        <h2>Eyongtarh Besong</h2>
        <p>Building amazing experiences...</p>
        <div className="loading-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
