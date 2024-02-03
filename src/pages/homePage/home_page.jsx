import "./homePage.css";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Main from "../../components/main/main.jsx";
function Home_page() {
  return (
    <div className="main-bg">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home_page;
