import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import Home from "./_components/Home";
import Projects from "./_components/Projects";

function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <Projects />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
