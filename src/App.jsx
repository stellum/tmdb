import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter 으로 사용할 컴포넌트들을 감싸줘야함
import Popular from "./pages/Popular";
import CurrentShows from "./pages/CurrentShows";
import FutureReleases from "./pages/FutureReleases";
import Ratings from "./pages/Ratings";
// import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <MovieCard /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/current-shows" element={<CurrentShows />}></Route>
          <Route path="/future-releases" element={<FutureReleases />}></Route>
          <Route path="/ratings" element={<Ratings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
