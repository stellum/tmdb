// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"; // BrowserRouter 으로 사용할 컴포넌트들을 감싸줘야함
import Movie from "./pages/movies/Movie";
import NowPlaying from "./pages/movies/NowPlaying";
import Upcoming from "./pages/movies/Upcoming";
import MovieTopRated from "./pages/movies/MovieTopRated";
// import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import TvDetail from "./pages/TvDetail";
import Tv from "./pages/tv/Tv";
import AiringToday from "./pages/tv/AiringToday";
import OnTheAir from "./pages/tv/OnTheAir";
import TvTopRated from "./pages/tv/TvTopRated";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Header /> */}
        {/* <MovieCard /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/detail/:postId" element={<Detail />}></Route>
          <Route path="/tvdetail/:postId" element={<TvDetail />}></Route>
          {/* detail 뒤에 콜론이 붙으면 변경될 수 있는 주소
            postId = params의 키 값 */}

          {/* movies */}
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
          <Route path="/movie/upcoming" element={<Upcoming />}></Route>
          <Route path="/movie/top-rated" element={<MovieTopRated />}></Route>
          {/* tv */}
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/tv/airing-today" element={<AiringToday />}></Route>
          <Route path="/tv/on-the-air" element={<OnTheAir />}></Route>
          <Route path="/tv/top-rated" element={<TvTopRated />}></Route>
          {/* people */}

          {/* More */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
