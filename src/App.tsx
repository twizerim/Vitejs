import {MenuOutlined} from "@ant-design/icons"
import {GithubOutlined} from "@ant-design/icons"
// import AddLocationIcon from '@mui/icons-material/AddLocation';
// import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
// import ZoomInIcon from '@mui/icons-material/ZoomIn'


import './App.css'
import "./indexcard.css"

function App() {

  return (
    <>
         <div className="heard">
           <p>Looking to here developers?  <a href="#"> Visit our hering Platform</a></p>
         </div>
        <div className="nav">
          <div className="logo">
            <h1>Frontend Mentor</h1>
          </div>
          <nav>
             <ul>
              <li><a href="#" className="links">LEARNING PATHS</a></li>
               <li><a href="#" className="links">CHALLENGES</a></li>
                <li><a href="#" className="links">SOLUTIONS</a></li>
                 <li><a href="#" className="links">ARTICLES</a></li>
                  <li><a href="#" className="links">UNLOCK PRO</a></li>
                  <div className="butn">
                 <li><a href="#">LOG IN WITH GITHUB</a><GithubOutlined /></li>
                 </div>
                 <div className="menu">
                 <MenuOutlined className="menu"/>
                 </div>
             </ul>
          </nav>
        </div>
        <div className="hhh">
          <h2>CHALLENGE</h2>
        </div>
        <div className="home-container">
           <div className="home">
             <div className="left">
               <div className="umutwe">
                 <ul>
                 <li><a href="#">PREMIUM</a></li>
                 <li><a href="#">HTML</a></li>
                 <li><a href="#">CSS</a></li>
                 <li><a href="#">JS</a></li>
                 <li><a href="#">API</a></li>
                 </ul>
                 <p><span>2</span>JUNIOR</p>
               </div>
               <h3>Github user search app</h3>
               <p>In this project, you'll use the GitHub users API to pull profile data and display it. 
                It's a great challenge if you're looking to practice working with a 3rd-party API.
                </p>
                <button>START CHALLENGE</button>
             </div>
             <div className="rights">
                     <div className="inter-card">
                        <div className="heard-path">
                          <p>divfinder</p>
                          <h1>LIGHT<i></i></h1>
                        </div>
                        <form action="" className="search">
                           <label htmlFor=""><input type="text"  placeholder="Search Github username"/></label>
                            <button>Search</button>
                        </form>
                        <div className="content-card">
                           <div className="content">
                               <div className="firstdiv">
                                <img src="" alt="github" />
                                   <div className="left">
                                       <h1 className="octos">The octocact</h1>
                                       <p className="link">octocat</p>
                                       <span>This profile has no bio</span>
                                   </div>
                                   <div className="rigth">Joined 25 Jan 2011</div>
                               </div>
                               <div className="number">
                                   <li>Repos<p>3</p></li>
                                   <li>Followers<p>3589</p></li>
                                   <li>Followings<p>9</p></li>
                               </div>
                               <div className="local-link">
                                   <div className="top">
                                       <p className="linee"><span>San Francisco</span></p>
                                       <p className="linee"><span>Not available</span></p>
                                   </div>
                                   <div className="bottom">
                                   <p className="linee"><span>https://gitihub.blog</span></p>
                                   <p className="linee"><span>agithub</span></p>
                                   </div>
                               </div>
                              
                           </div>
                       </div>
                     </div> 
                  </div> 
             </div>
           </div>
        
    </>
  )
}

export default App
