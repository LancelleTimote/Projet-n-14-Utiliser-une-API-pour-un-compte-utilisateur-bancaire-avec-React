import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import store from "./store/store";

function App() {
    return (
        <Router>
            <main className="main flex">
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Provider>
            </main>
        </Router>
    );
}

export default App;
