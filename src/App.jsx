import HeadComp from "./Header";
import MainComp from "./MainBlock";
import FooterComp from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <HeadComp></HeadComp>
      <MainComp></MainComp>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
