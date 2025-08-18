import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Teste from './pages/teste'
import HeavyImage from "./pages/heavy-image.tsx";

export default function App() {
    return (
        <div className="app">
            <header className="nav">
                <nav>
                    <Link to="/">home</Link>
                    <span>•</span>
                    <Link to="/teste">/teste</Link>
                    <span>•</span>
                    <Link to="/heavyimage">/heavyimage</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teste" element={<Teste />} />
                    <Route path="/heavyimage" element={<HeavyImage />} />
                </Routes>
            </main>
        </div>
    )
}