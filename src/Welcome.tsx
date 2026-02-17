import Footer from "./Footer";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <>
      <div>
        <div className="notification-wrapper">
          <div className="container-fluid">
            {/* ========== title-wrapper start ========== */}
            <div className="title-wrapper pt-30">
              <center>
                <img src="assets/images/navylogo.png" alt="logo" />
                <div className="title">
                  <h1>Nigerian Navy Week 2026</h1>
                  <br />
                  <h4>Programme of Event</h4>
                  <br />
                  <Link
                    to="/home"
                    className="main-btn active-btn rounded-full btn-hover"
                  >
                    Click here to continue
                  </Link>
                </div>
              </center>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default Welcome;
