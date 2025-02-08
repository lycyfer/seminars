import { Link } from "react-router-dom";
import company from "../../assets/img/招聘矢量插画人物场景插画招聘1100924黑与白-01 copy 1.png";
import Search from "../search/search";

const Main = () => {
  return (
    <div className="main">
      <div className="main-header">
        <div className="main-left">
          <div className="main-left-header">
            <div className="main-left-header-logo">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="calendarEventIconTitle"
                stroke="#fff"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
                color="#fff"
              >
                {" "}
                <title id="calendarEventIconTitle">Calendar event</title>{" "}
                <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" />{" "}
                <path d="M7 5V3" /> <path d="M17 5V3" />{" "}
                <rect x="15" y="15" width="2" height="2" />{" "}
              </svg>
            </div>
            <div className="main-left-logo-title">Seminars</div>
          </div>
          <div className="main-left-center">
            <div className="main-left-title">Search</div>
            <div className="main-left-sub">
              Sign up for Seminars, Pump YOURSELF up
            </div>
            <div className="main-left-filter">
              <Link to="list" className="main-left-btn">
                All
              </Link>
              <Search />
            </div>
          </div>
          <Link to="/login" className="main-left-footer">
            Enter to Admin Panel{" "}
            <button className="main-left-footer-btn">Login</button>
          </Link>
        </div>
        <div className="main-right">
          <div className="main-right-title">
            <span className="span">Welcome to the search</span>
            <br></br>for all kinds of seminars
          </div>

          <img className="main-right-img" src={company} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
