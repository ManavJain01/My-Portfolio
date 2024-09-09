// Importing React Packages
import { Link } from "react-router-dom";

// Importing local files
import './Styles.css'
import Footer from "./Footer";

export default function Java() {
  return (
    <div id="body-java" className="w-lvw min-h-lvh text-blue-800">
      {/* Header */}
      <div id="header-java">
        <h1 className="text-3xl">All Java Projects</h1>
      </div>

      {/* Main */}
      <div id="main-java">
        <div className="div-wrapper">
          <Link to="https:github.com/ManavJain01">
            <div className="divs">
              <h1>Project 1</h1>
              <img src="" />
              <p>Servlet + JSP + mySQL + JDBC</p>
              <p>Login and Registration Form</p>
            </div>
          </Link>
          <Link to="">
            <div className="divs">
              <h1>Project 2</h1>
              <img src="" />
              <p>Technology Name</p>
              <p>Topic Name</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}