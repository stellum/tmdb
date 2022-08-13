import React from "react";
import Popular from "./movies/Movie";
import {
  HeroBannerContainer,
  HeroBannerInnerWrap,
  HeroBannerText,
  Searchbar,
  PopularContainer,
  PopularColumn,
  SelectorWrap,
} from "../styles/Home";
import herobanner from "../assets/herobanner.jpg";
const Home = () => {
  return (
    <>
      {/* HERO BANNER */}
      <HeroBannerContainer imgPath={herobanner}>
        <HeroBannerInnerWrap>
          <HeroBannerText>
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </HeroBannerText>
          <Searchbar>
            <input type="text" placeholder="영화, TV 프로그램, 인물 검색..." />
            <button type="submit">Search</button>
          </Searchbar>
        </HeroBannerInnerWrap>
      </HeroBannerContainer>

      {/* WHAT'S POPULAR */}
      <PopularContainer>
        <PopularColumn>
          <h2>What's Popular</h2>
          <SelectorWrap>
            <div>
              <h3>
                {/* API 불러올때 Link 로 바꿔주기 */}
                <a href="">스트리밍</a>
              </h3>
            </div>
            <div>
              <h3>TV</h3>
            </div>
            <div>
              <h3>대여</h3>
            </div>
            <div>
              <h3>극장</h3>
            </div>
          </SelectorWrap>
        </PopularColumn>
        {/* <Popular /> */}
      </PopularContainer>
      {/* FREE TO WATCH */}
      <div></div>

      {/* 최신 예고편 */}
      <div></div>

      {/* 트렌딩 */}
      <div></div>

      {/* JOIN TODAY */}
      <div></div>

      {/* FOOTER */}
      <footer></footer>
    </>
  );
};

export default Home;
