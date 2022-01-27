import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Work from './components/Work';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
