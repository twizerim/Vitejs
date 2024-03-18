import {MenuOutlined} from "@ant-design/icons"
import {GithubOutlined} from "@ant-design/icons"
import {LinkOutlined} from "@ant-design/icons"
import {SunOutlined} from "@ant-design/icons"
import {EnvironmentOutlined} from "@ant-design/icons"
import {ZoomInOutlined} from "@ant-design/icons"
import {MoonOutlined} from "@ant-design/icons"
import {TwitterOutlined} from "@ant-design/icons"
import {ReconciliationOutlined} from "@ant-design/icons"
import github from "./assets/png-world.png"
import {CloseOutlined} from "@ant-design/icons"
import { useState } from "react"



import './App.css'
import "./indexcard.css"

function App() {
  const [start,setStart]=useState(false)

  const startform = () =>{
    setStart(true)
  }
  const closeformstart = () =>{
    setStart(false)
  }

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
                 <li><a href="#" className="a">PREMIUM</a></li>
                 <li><a href="#" className="b">HTML</a></li>
                 <li><a href="#" className="c">CSS</a></li>
                 <li><a href="#" className="d">JS</a></li>
                 <li><a href="#" className="e">API</a></li>
                 </ul>
                 <p><span>2</span>JUNIOR</p>
               </div>
               <h3>Github user search app</h3>
               <p>In this project, you'll use the GitHub users API to pull profile data and display it. 
                It's a great challenge if you're looking to practice working with a 3rd-party API.
                </p>
                <button onClick={startform}>START CHALLENGE</button>
             </div>
              {start && (
                 <div className="startform">
                  <div className="close">< CloseOutlined onClick={closeformstart} className="closes"/></div>
                 <h1>Oops!</h1>
                 <p>You need to be logged in before you can do that</p>
                 <li><a href="#">LOG IN WITH GITHUB</a><GithubOutlined /></li>
                </div>
              )}
             <div className="rights">
             <div className="inter-cardwite">
                        <div className="heard-pathwite">
                          <p className="witea">divfinder</p>
                          <h1 className="witeb">DARK<i><MoonOutlined /></i></h1>
                        </div>
                        <form action="" className="searchwite">
                           <label htmlFor="" className="witec"><ZoomInOutlined /><input type="text" className="wited"  placeholder="Search Github username"/></label>
                            <button>Search</button>
                        </form>
                        <div className="content-cardwite">
                           <div className="contentwite">
                               <div className="firstdivwite">
                                <img src={github} alt="github" />
                                   <div className="leftwite">
                                       <h1 className="octoswite">The octocact</h1>
                                       <p className="linkwite">octocat</p>
                                       <span className="witee">This profile has no bio</span>
                                   </div>
                                   <div className="rigthwite">Joined 25 Jan 2011</div>
                               </div>
                               <div className="numberwite">
                                   <li className="witef">Repos<p>3</p></li>
                                   <li className="witef">Followers<p>3589</p></li>
                                   <li className="witef">Followings<p>9</p></li>
                               </div>
                               <div className="local-link">
                                   <div className="topwite">
                                       <p className="lineewite"><EnvironmentOutlined /><span>San Francisco</span></p>
                                       <p className="lineewite"><TwitterOutlined /><span>Not available</span></p>
                                   </div>
                                   <div className="bottomwite">
                                   <p className="lineewite"><LinkOutlined /><span>https://gitihub.blog</span></p>
                                   <p className="lineewite"><ReconciliationOutlined /><span>agithub</span></p>
                                   </div>
                               </div>
                              
                           </div>
                       </div>
                     </div>
                     <div className="inter-card">
                        <div className="heard-path">
                          <p>divfinder</p>
                          <h1>LIGHT<i><SunOutlined /></i></h1>
                        </div>
                        <form action="" className="search">
                           <label htmlFor=""><ZoomInOutlined /><input type="text"  placeholder="Search Github username"/></label>
                            <button>Search</button>
                        </form>
                        <div className="content-card">
                           <div className="content">
                               <div className="firstdiv">
                                <img src={github} alt="github" />
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
                                       <p className="linee"><EnvironmentOutlined /><span>San Francisco</span></p>
                                       <p className="linee"><TwitterOutlined /><span>Not available</span></p>
                                   </div>
                                   <div className="bottom">
                                   <p className="linee"><LinkOutlined /><span>https://gitihub.blog</span></p>
                                   <p className="linee"><ReconciliationOutlined /><span>agithub</span></p>
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
