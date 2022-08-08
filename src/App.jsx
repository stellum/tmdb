import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"; // BrowserRouter 으로 사용할 컴포넌트들을 감싸줘야함
import Popular from "./pages/Popular";
import CurrentShows from "./pages/CurrentShows";
import FutureReleases from "./pages/FutureReleases";
import Ratings from "./pages/Ratings";
// import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <MovieCard /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:postId" element={<Detail />}></Route>
          {/* detail 뒤에 콜론이 붙으면 변경될 수 있는 주소
            postId = params의 키 값
          
          */}
          <Route path="/tvdetail/:postId" element={<TvDetail />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
