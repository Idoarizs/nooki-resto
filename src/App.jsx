import NavBar from "./components/NavBar";
import About from "./pages/About";
import CTA from "./pages/CTA";
import Discover from "./pages/Discover";
import Main from "./pages/Main";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Main />
        <About />
        <Menu />
        <Discover />
      </main>
      <footer>
        <CTA />
      </footer>
    </>
  );
}

export default App;
