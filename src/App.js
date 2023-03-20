import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <DefaultLayout />
            </div>
        </Router>
    );
}

export default App;
