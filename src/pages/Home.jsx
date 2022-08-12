import React from "react";
import Popular from "./Popular";
import {
  HeroBannerContainer,
  HeroBannerImg,
  HeroBannerInnerWrap,
  HeroBannerText,
} from "../styles/Home";
import herobanner from "../assets/herobanner.jpg";
const Home = () => {
  return (
    <>
      {/* HERO BANNER */}
      <HeroBannerContainer>
        <HeroBannerImg>
          <img src={herobanner} />
        </HeroBannerImg>
        <HeroBannerInnerWrap>
          <HeroBannerText>
            <h3>Welcome.</h3>
            <h4>
              Millions of movies, TV shows and people to discover. Explore now.
            </h4>
          </HeroBannerText>

          <div>
            <input type="text" />
            <button>Search</button>
          </div>
        </HeroBannerInnerWrap>
      </HeroBannerContainer>

      {/* WHAT'S POPULAR */}
      <Popular />

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
