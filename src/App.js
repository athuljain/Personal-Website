//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Topbar from './Components/Topbar';
import Intro from './Components/Intro';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
    <Topbar />
    <Intro />
    < Experience />
    <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
