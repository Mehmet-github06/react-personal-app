import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./sass/app.scss";
import data from "./data.js";

function App() {
  // console.log(data)
  return (
    <div>
      <Header />
      <Card veri={data} />
      <Footer />
      
    </div>
  );
}

export default App;
