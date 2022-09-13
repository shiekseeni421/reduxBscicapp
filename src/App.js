import "./App.css";
import { connect } from "react-redux";
import { InAction, DecAction } from "./action";

function App({ local_variable, InAction, DecAction }) {
  return (
    <div className="App">
      <h1>{local_variable}</h1>
      <button onClick={InAction}>Increment</button>
      <button onClick={DecAction}>DECrement</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  local_variable: state,
});
export default connect(mapStateToProps, { InAction, DecAction })(App);
