//import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Header from "./components/header";
import Layout from "./components/layout";
import Footer from "./components/footer";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";

function App() {
  console.log(bg1);
  return (
    <>
      <Header title="Title" descr="descr" />
      <Layout title="Title1" descr="descr1" urlBg={bg1} />
      <Layout title="Title2" descr="descr2" colorBg="#e2e2e2" />
      <Layout title="Title3" descr="descr3" urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
