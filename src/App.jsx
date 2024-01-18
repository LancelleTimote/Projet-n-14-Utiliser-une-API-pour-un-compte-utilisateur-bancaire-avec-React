import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

function App() {
    return (
        <Router>
            <main className="main flex">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
