import React, { useEffect, useState } from "react";
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://script.google.com/macros/s/AKfycbzFgCm6XZQXdfUycbOO3AhekhgHa_9zlfKDG97Wq7kCXtBrPyhg87HyQuDlNnQqi9c-/exec")
      .then((response) => response.json())
      .then((data) => setUser(data));

  }

  useEffect(() => {
    fetchData();

  }, []);
  const reversed = [...user].reverse();

  //   const Departments = [...new Set(user.map(item => item.department))];

  const comp = []
  user.map(e => {
    // console.log(e)
    if (e.department === "computer") {
      comp.push(e)
    }
  })

  console.log(comp)
  let x = 0
  comp.map(e => {
    x += e.score
    console.log(typeof e.score)
  })
  const comm = []
  user.map(e => {
    // console.log(e)
    if (e.department === "commerce") {
      comm.push(e)
    }
  })

  console.log(comm)
  let y = 0
  comm.map(e => {
    y += e.score
    console.log(typeof e.score)
  })
  const eng = []
  user.map(e => {
    // console.log(e)
    if (e.department === "english") {
      eng.push(e)
    }
  })

  console.log(eng)
  let z = 0
  eng.map(e => {
    z += e.score
    console.log(typeof e.score)
  })




  return (
    <main>


      <div className="container">
        <div className="left">
        </div>

        <div className="right">
          <div className="name-div">
            <h1 className="main-name">AGNI SCORE BOARD</h1>
            <h1 className="dep-name">Departments</h1>
          </div>

          <div className="ScoreBoard">

            <div className="computer rect">

              <div className="d-flex-c">
                <img src="https://images.vexels.com/media/users/3/153156/isolated/lists/9ce84f06c10bdd87608f48fc2e599661-gaming-computer-icon.png" alt="img" />
                <div className="dep">
                  <h1>Computer</h1>

                  <div className="pts-score">

                    <span className="score">SCORE  </span>
                    <span className="pts">{x}</span>

                  </div>



                </div>
              </div>
            </div>
            <div className="commerce rect">
              <div className="d-flex-c">
                <img src="https://www.pngkit.com/png/full/296-2967118_conclusion-finance-icon.png" alt="img" />
                <div className="dep">
                  <h1>Commerce</h1>
                  <div className="pts-score">
                    <span className="score">SCORE  </span><span className="pts">{y}</span>
                  </div>
                </div>
              </div>
            </div>



            <div className="english rect">
              <div className="d-flex-c">
                <img src="https://www.pikpng.com/pngl/m/89-893168_subject-icon-png-english-icon-transparent-background-clipart.png" alt="img" />
                <div className="dep">
                  <h1>English</h1>
                  <div className="pts-score">
                    <span className="score">SCORE  </span><span className="pts">{z}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="table-div">

            <table>
              <tr>
                <th>Name</th><th>Department</th><th>Item</th><th>Score</th>
              </tr>
              <tbody>
                {reversed && reversed.length > 0 && reversed.map((data) => (
                  <tr>
                    <td>{data.name}</td><td>{data.department}</td><td>{data.item}</td><td>{data.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

      </div>

    </main>
  );
}

export default App;