import Sidebar from "../Sidebar/Sidebar";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Sidebar></Sidebar>

      <div className="heroSec">
        <div className="heroSec1">    
          <div className="greet">
            <h1 id="greet">
              Hello, <br /> Raviraj
            </h1>
          </div>   
          <div className="dateTime">Monday 22 July</div> 
        </div>
    
        <div className="heroSec2">
            <div className="stats">
                <div className="stats1">
                <div className="storageStat statCard"></div>
                <div className="totalClient statCard"></div>
                
                </div>
                <div className="stats1">
                <div className="totalPhotos statCard"></div>
                </div>
            </div>
            <div className="addClient">

            </div>
        </div>
      </div>
    </div>
  );
}
