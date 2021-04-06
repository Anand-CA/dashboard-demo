import { IconButton } from "@material-ui/core"
import React, { useState } from "react"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import "./Main.css"
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded"
import SearchIcon from "@material-ui/icons/Search"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import Calendar from "react-calendar"
import VisibilitySensor from "react-visibility-sensor"
import CanvasJSReact from "./canvasjs.react"
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart
function Main() {
   const [value, onChange] = useState(new Date())
   const options = {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
         text: "",
      },
      axisY: {
         title: " ",

         scaleBreaks: {
            autoCalculate: true,
         },
      },
      axisX: {
         title: "",
         labelAngle: 0,
      },
      data: [
         {
            type: "column",
            dataPoints: [
               { label: " ", y: 6 },
               { label: " ", y: 55 },
               { label: "", y: 75 },
               { label: " ", y: 17 },
               { label: " ", y: 5 },
               { label: "", y: 56 },
               { label: "", y: 12 },
            ],
         },
      ],
   }
   return (
      <div className="main">
         <div className="main__header">
            <div className="search">
               <input type="text" placeholder="search" />
               <SearchIcon />
            </div>
         </div>
         <div className="main__body">
            <div className="row">
               <div className="upLessons">
                  <h2 style={{ paddingLeft: "20px" }}>Upcomming Lessons</h2>
                  <div className="lessons__container">
                     {/* play button */}
                     <IconButton>
                        <PlayCircleFilledIcon />
                     </IconButton>

                     <p>Redux</p>
                     <p>22 mins</p>
                  </div>

                  <div className="lessons__container">
                     {/* play button */}
                     <IconButton>
                        <PlayCircleFilledIcon />
                     </IconButton>
                     <p>GitHub</p>
                     <p>4 mins</p>
                  </div>

                  <div className="lessons__container">
                     {/* play button */}
                     <IconButton>
                        <PlayCircleFilledIcon />
                     </IconButton>
                     <p>Next JS</p>
                     <p>15 mins</p>
                  </div>
               </div>
               <div className="todo">
                  <h2 style={{ paddingLeft: "20px" }}>Task to do</h2>
                  <div className="todo__container">
                     {/* play button */}
                     <p style={{ letterSpacing: "2px" }}>"take Quiz"</p>
                     <input style={{ transform: "scale(2)" }} type="checkbox" />
                  </div>
                  <div className="todo__container">
                     {/* play button */}
                     <p style={{ letterSpacing: "2px" }}>"complete"</p>

                     <input style={{ transform: "scale(2)" }} type="checkbox" />
                  </div>
                  <div className="todo__container">
                     {/* play button */}
                     <p style={{ letterSpacing: "2px" }}>"News Dive"</p>
                     <input
                        style={{ transform: "scale(2)" }}
                        type="checkbox"
                     />{" "}
                  </div>
               </div>
               <div className="leaderboard">
                  <h2 style={{ paddingLeft: "20px" }}>Leaderboard</h2>
                  <div className="leaderboard__container">
                     <p style={{}}>1. Udemy</p>
                     <p style={{}}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                  </div>
                  <div className="leaderboard__container">
                     <p style={{}}>2. codeacadamy</p>
                     <p style={{}}>⭐️ ⭐️ ⭐️ </p>
                  </div>
                  <div className="leaderboard__container">
                     <p style={{}}>3. Treehouse</p>
                     <p style={{}}>⭐️ ⭐️ ⭐️ </p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="row__left">
                  <h2 style={{ paddingLeft: "20px" }}>Your Courses</h2>
                  <div className="course__container">
                     <img
                        style={{ height: "50px", borderRadius: "10px" }}
                        src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                        alt=""
                     />
                     <div>
                        <p>React</p>
                        <p style={{ fontSize: "10px", color: "gray" }}>
                           15 videos
                        </p>
                     </div>

                     <IconButton>
                        <ChevronRightRoundedIcon
                           style={{
                              backgroundColor: "#F1F2F3",
                              borderRadius: "99px",
                           }}
                        />
                     </IconButton>
                  </div>
                  <div className="course__container">
                     <img
                        style={{ height: "50px", borderRadius: "10px" }}
                        src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                        alt=""
                     />
                     <div>
                        <p>Angular</p>
                        <p style={{ fontSize: "10px", color: "gray" }}>
                           8 videos
                        </p>
                     </div>

                     <IconButton>
                        <ChevronRightRoundedIcon
                           style={{
                              backgroundColor: "#F1F2F3",
                              borderRadius: "99px",
                           }}
                        />
                     </IconButton>
                  </div>
                  <div className="course__container">
                     <img
                        style={{ height: "50px", borderRadius: "10px" }}
                        src="https://cdn.worldvectorlogo.com/logos/nodejs-2.svg"
                        alt=""
                     />
                     <div>
                        <p>NodeJs</p>
                        <p style={{ fontSize: "10px", color: "gray" }}>
                           6 videos
                        </p>
                     </div>

                     <IconButton>
                        <ChevronRightRoundedIcon
                           style={{
                              backgroundColor: "#F1F2F3",
                              borderRadius: "99px",
                           }}
                        />
                     </IconButton>
                  </div>
               </div>

               <div className="graph__container">
                  <CanvasJSChart options={options} />
               </div>
            </div>
            <h2 style={{ paddingLeft: "20px", marginTop: "2rem" }}>
               Course Progress
            </h2>
            <div className="row">
               <div className="row___left">
                  <Calendar
                     className="calendar"
                     onChange={onChange}
                     value={value}
                  />
               </div>
               <div className="row__right">
                  <div
                     style={{ backgroundColor: "#FFF9E7" }}
                     className="progress__container"
                  >
                     <div style={{ width: 100, height: 100 }}>
                        <VisibilitySensor>
                           {({ isVisible }) => {
                              const percentage = isVisible ? 88 : 0
                              return (
                                 <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                       pathColor: "#2D5802",
                                       textColor: "#2D5802",
                                       trailColor: " #DFD9C3",
                                    })}
                                 />
                              )
                           }}
                        </VisibilitySensor>
                     </div>
                     <h5>HTML</h5>
                     <p style={{ fontSize: "11px", color: "gray" }}>5 videos</p>
                  </div>
                  <div
                     style={{ backgroundColor: "#F0ECFF" }}
                     className="progress__container"
                  >
                     <div style={{ width: 100, height: 100 }}>
                        <VisibilitySensor>
                           {({ isVisible }) => {
                              const percentage = isVisible ? 66 : 0
                              return (
                                 <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                       pathColor: "#112D90",
                                       textColor: "#112D90",
                                       trailColor: " #BED2E9",
                                    })}
                                 />
                              )
                           }}
                        </VisibilitySensor>
                     </div>
                     <h5>CSS</h5>
                     <p style={{ fontSize: "11px", color: "gray" }}>3 videos</p>
                  </div>
                  <div
                     style={{ backgroundColor: "#e2f1ff" }}
                     className="progress__container"
                  >
                     <div style={{ width: 100, height: 100 }}>
                        <VisibilitySensor>
                           {({ isVisible }) => {
                              const percentage = isVisible ? 30 : 0
                              return (
                                 <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                       pathColor: "#112D90",
                                       textColor: "#112D90",
                                       trailColor: " #BED2E9",
                                    })}
                                 />
                              )
                           }}
                        </VisibilitySensor>
                     </div>
                     <h5>JAVASRIPT</h5>
                     <p style={{ fontSize: "11px", color: "gray" }}>4 videos</p>
                  </div>
               </div>
            </div>
            {/* <div className="row">
               <div className="row__left">
                  <div className="courses">
                     <div className="course__header">
                        <h2> My Courses</h2>
                     </div>
                     <div className="course__body">
                        <div className="course__container">
                           <img
                              style={{ height: "80px" }}
                              src="https://cdn.worldvectorlogo.com/logos/html5.svg"
                              alt=""
                              srcset=""
                           />
                        </div>
                        <div className="course__container">
                           <img
                              style={{ height: "80px" }}
                              src="https://cdn.worldvectorlogo.com/logos/css3.svg"
                              alt=""
                           />
                        </div>
                        <div className="course__container">
                           <img
                              style={{ height: "80px" }}
                              src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                              alt=""
                           />
                        </div>
                        <div className="course__container">
                           <img
                              style={{ height: "80px" }}
                              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
                  <div className="progress">
                     <h4 style={{ flex: "1 100%", marginLeft: "10px" }}>
                        Course Progress
                     </h4>
                     <div
                        style={{ backgroundColor: "#FFF9E7" }}
                        className="progress__container"
                     >
                        <div style={{ width: 100, height: 100 }}>
                           <VisibilitySensor>
                              {({ isVisible }) => {
                                 const percentage = isVisible ? 88 : 0
                                 return (
                                    <CircularProgressbar
                                       value={percentage}
                                       text={`${percentage}%`}
                                       styles={buildStyles({
                                          pathColor: "#2D5802",
                                          textColor: "#2D5802",
                                          trailColor: " #DFD9C3",
                                       })}
                                    />
                                 )
                              }}
                           </VisibilitySensor>
                        </div>
                        <h5>HTML</h5>
                        <p style={{ fontSize: "11px" }}>450 videos</p>
                     </div>
                     <div
                        style={{ backgroundColor: "#F0ECFF" }}
                        className="progress__container"
                     >
                        <div style={{ width: 100, height: 100 }}>
                           <VisibilitySensor>
                              {({ isVisible }) => {
                                 const percentage = isVisible ? 66 : 0
                                 return (
                                    <CircularProgressbar
                                       value={percentage}
                                       text={`${percentage}%`}
                                       styles={buildStyles({
                                          pathColor: "#112D90",
                                          textColor: "#112D90",
                                          trailColor: " #BED2E9",
                                       })}
                                    />
                                 )
                              }}
                           </VisibilitySensor>
                        </div>
                        <h5>CSS</h5>
                        <p style={{ fontSize: "11px" }}>450 videos</p>
                     </div>
                     <div
                        style={{ backgroundColor: "#e2f1ff" }}
                        className="progress__container"
                     >
                        <div style={{ width: 100, height: 100 }}>
                           <VisibilitySensor>
                              {({ isVisible }) => {
                                 const percentage = isVisible ? 30 : 0
                                 return (
                                    <CircularProgressbar
                                       value={percentage}
                                       text={`${percentage}%`}
                                       styles={buildStyles({
                                          pathColor: "#112D90",
                                          textColor: "#112D90",
                                          trailColor: " #BED2E9",
                                       })}
                                    />
                                 )
                              }}
                           </VisibilitySensor>
                        </div>
                        <h5>JAVASRIPT</h5>
                        <p style={{ fontSize: "11px" }}>450 videos</p>
                     </div>
                  </div>
               </div>

               <div className="graph">
                  <CanvasJSChart className="graph__element" options={options} />
               </div>
            </div> */}
         </div>
      </div>
   )
}

export default Main
