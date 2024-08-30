// Importing React Icons
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

// Importing local files
import data from '../../../Data/api.json'
import './Styles.css'
import Footer from "./Footer";

export default function Java() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCgr7JDlyrqZznKauDhOm74zSy_qF1Jn7c",
    authDomain: "my-java-projects-7a17e.firebaseapp.com",
    projectId: "my-java-projects-7a17e",
    storageBucket: "my-java-projects-7a17e.appspot.com",
    messagingSenderId: "50701897681",
    appId: "1:50701897681:web:b90c359e7459ef796adaf0",
    measurementId: "G-4ZR7RY4XPW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div id="body-java" className="w-lvw min-h-lvh text-blue-800">
      {/* Header */}
      <div id="header-java">
        <h1>All Java Projects</h1>
      </div>

      {/* Main */}
      <div id="main-java">
        <div className="div-wrapper">
          <a href="">
            <div className="divs">
              <h1>Project 1</h1>
              <img src="" />
              <p>Servlet + JSP + mySQL + JDBC</p>
              <p>Login and Registration Form</p>
            </div>
          </a>
          <a href="">
            <div className="divs">
              <h1>Project 2</h1>
              <img src="" />
              <p>Technology Name</p>
              <p>Topic Name</p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer data={data} />
    </div>
  )
}