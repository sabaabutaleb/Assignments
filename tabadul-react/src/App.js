import Header from "./componants/header";
import ButtonsList from "./componants/btnsList";
import "./style.css";
import Footer from "./componants/footer";
import Container from "./componants/container";

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonsList />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
