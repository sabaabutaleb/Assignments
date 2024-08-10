import App from "../App/App";
function DashBoard(props) {
  return (
    <>
      <h1>DashBoard</h1>;<h2>Welcome {props.userObj.name}</h2>
    </>
  );
}
export default DashBoard;
