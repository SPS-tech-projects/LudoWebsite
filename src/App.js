import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Faq from './pages/Faq';
import Advertise from './pages/Advertise';
import Media from './pages/Media';
import Review from './pages/Review';
import Download from './pages/Download';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route path="/faqs" component={Faq} />
                    <Route path="/advertise" component={Advertise} />
                    <Route path="/media" component={Media} />
                    <Route path="/reviews" component={Review} />
                    <Route path="/download" component={Download} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
