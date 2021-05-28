import './App.css';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
