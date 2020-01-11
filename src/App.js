import React, { Component } from 'react'
import "./App.css"
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: ["", "", "", "", "", "", "", "", ""],
      Player: 1,
      draw: 0,
      play: true
    }
  }
  onclickhandler = (e) => {
    if (this.state.play) {
      if (!this.state.List[e.target.id - 1]) {
        let audio = new Audio("https://acpkaplu.s3.ap-south-1.amazonaws.com/Pratik/when.mp3")
        audio.play()
        var newlist = this.state.List;
        if (this.state.Player === 1) {
          newlist[e.target.id - 1] = "x";
          var Player = 0;
        } else {
          newlist[e.target.id - 1] = "o";
          var Player = 1;
        }
        var draw = this.state.draw;
        draw = draw + 1
        this.setState({
          List: newlist,
          Player: Player,
          draw: draw
        })
      } else {
        console.log("Already");
        let audio = new Audio("https://acpkaplu.s3.ap-south-1.amazonaws.com/Pratik/sms_sneeze.mp3")
        audio.play()
      }
      this.Getwinner()
    }
  }
  Getwinner = () => {
    var StateList = this.state.List;
    var checklist = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (var i of checklist) {
      if (StateList[i[0]] === StateList[i[1]] && StateList[i[1]] === StateList[i[2]] && StateList[i[0]] !== "") {
        window.alert("Player " + this.state.Player + " Won...")
        this.setState({
          play:false
        })
        return 1
      }
    }
    console.log(this.state.draw);

    if (this.state.draw == 8) {
      window.alert("Match Draw.")
    }
  }
  Onreload = () => {
    if (window.confirm("You Want TO Restart The Game.")) {
      this.setState({
        List: ["", "", "", "", "", "", "", ""],
        Player: 1,
        draw: 0,
        play:true
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header title="Tic Tac Toe">
          <h3>Tic Tac Toe</h3>
        </header>
        <div className="main">
          <p style={{ marginTop: "20px", fontSize: "25px", fontWeight: "800" }}>Player 0 is <b>x</b> and Player 1 is <b>o</b></p>
          <table>
            <tr>
              <td onClick={this.onclickhandler} id={1}>{this.state.List[0]}</td>
              <td onClick={this.onclickhandler} id={2}>{this.state.List[1]}</td>
              <td onClick={this.onclickhandler} id={3}>{this.state.List[2]}</td>
            </tr>
            <tr>
              <td onClick={this.onclickhandler} id={4}>{this.state.List[3]}</td>
              <td onClick={this.onclickhandler} id={5}>{this.state.List[4]}</td>
              <td onClick={this.onclickhandler} id={6}>{this.state.List[5]}</td>
            </tr>
            <tr>
              <td onClick={this.onclickhandler} id={7}>{this.state.List[6]}</td>
              <td onClick={this.onclickhandler} id={8}>{this.state.List[7]}</td>
              <td onClick={this.onclickhandler} id={9}>{this.state.List[8]}</td>
            </tr>
          </table>
          <br />
          <button onClick={this.Onreload} type="button" style={{ fontSize: "20px" }} className="btn btn-danger">Restart</button>
        </div>
      </div>
    )
  }
}

export default App
