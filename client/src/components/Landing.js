import React from "react";
import "./App.css";

const LogInForm = props => {
  return (
    <form autoComplete="off" onSubmit={e => props.onSubmit(e)}>
      <div className="row">
        <div className="col-25">
          <label htmlFor="username">Username:</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="username"
            name="userName"
            onChange={e => props.onChange(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="password">Password:</label>
        </div>
        <div className="col-75">
          <input
            type="password"
            id="password"
            name="password"
            onChange={e => props.onChange(e)}
          />
        </div>
      </div>

      <input type="submit" value="Log In" />
    </form>
  );
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "", //this seems totally wrong.
      loggedIn: false
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(`[handleChange] ${name} is being set to: ${value}`);
    this.setState({ [name]: value }); //, () => console.log(this.state[name]));
  };
  handleSubmit = async e => {
    e.preventDefault();
    //run through process to check if user/pw are valid.

    //console.log(this.state.userName);
    //console.log(this.state.password);
    const serverResponse = await fetch(
      `/api/landing/login/${this.state.userName}/${this.state.password}`,
      { method: "post" }
    );
    console.table(serverResponse);

    const body = await serverResponse.json();
    if (serverResponse.status !== 200) throw Error(body.message);

    console.log(body);
    //return body;

    //post to mongo something about the inputs

    //    this.setState({ loggedIn: true });
  };

  callAPI = async () => {
    const serverResponse = await fetch("/api/landing");
    //console.table(serverResponse);

    const body = await serverResponse.json();
    if (serverResponse.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    this.callAPI().then(a => {
      return; //console.log(a);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Log in here!</h1>
        <LogInForm
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
        />
        <div>
          <h2>About this site:</h2>
          <p>
            Doner burgdoggen fatback chicken, corned beef pancetta shoulder
            salami hamburger tenderloin beef. Jerky frankfurter cow, tenderloin
            capicola pig boudin pork belly jowl. Meatloaf pork loin capicola
            picanha. Venison ground round drumstick chuck chicken, boudin
            shankle burgdoggen picanha pork loin turducken salami ribeye strip
            steak jerky. Bacon corned beef flank ground round short ribs strip
            steak shankle short loin landjaeger spare ribs meatloaf cupim
            leberkas burgdoggen.
          </p>
          <p>
            Flank drumstick ribeye chicken, boudin short loin burgdoggen picanha
            filet mignon doner leberkas cupim. Pancetta flank salami ham hock
            ham, bresaola sausage spare ribs burgdoggen ground round short ribs
            chuck pastrami.
          </p>
        </div>
        <div className="container" />
      </div>
    );
  }
}

export default Landing;

// const sampleText = "alphABet"
// const underscoreText = "alph_ABet"

// function(str, i){
//   str[i].toLowerCase() === str[i]

// }

// def underscore_position(string: str) -> int:
// idx = underscore(string, 0)
// return idx

// def underscore(string: str, depth: int, start_depth:int) -> int:
// if not string:
//   return -1
// curr_depth = depth
// if string[0] == '_':
//   return sampleText[start_depth: curr_depth]  //curr_depth
// return underscore(string[1:], curr_depth + 1, start_depth:)
