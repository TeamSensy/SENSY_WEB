import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CardDummy, ReviewsDummy } from "src/components/Main/MainDummy";
import Topbar from "src/components/Topbar/Topbar";
import BottomBar from "src/components/BottomBar/BottomBar";
import MainImage from "src/assets/img/Main_Image.png";
import CardDummyImage from "src/assets/img/image container.png";
import LeftIcon from "src/assets/img/Left_Icon.png";
import RightIcon from "src/assets/img/Right_Icon.png";
import LikeIcon from "src/assets/img/LikeIcon.png";
import ExampleProfile from "src/assets/img/Ex_Profile.png";
import ExampleRate from "src/assets/img/Ex_Rate.png";
import ExampleVanner from "src/assets/img/Ex_Vanner.png";
import "@splidejs/react-splide/css";
import "src/components/Main/style/Main.style.css"

const Main = () => {
  const option = {
    type: "loop",
    width: "70vw",
    height: 300,
    perPage: 1,
    interval: 5000,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="MainPage">
      <Topbar />
      <div className="Main">
        <img className="MainImage" src={MainImage} alt="메인 이미지"></img>
        <div className="PopularCoursesWrap">
          <div className="PopularCourses">
            <div className="PopularCoursesTop">
              <p className="PopularCoursesTitle">Popular Courses</p>
              <p className="PopularCoursesDescription">
                Check out our best sellers
              </p>
              <div className="PopularCoursesButtonWrap">
                <div className="PopularCoursesButton">
                  <button className="AddToCartButton">Add to Cart</button>
                  <button className="ViewAllButton">View All</button>
                </div>
              </div>
            </div>
            <div className="PopularCoursesBottom">
              {/* <img
                    className="PopularCoursesLeftIcon"
                    src={LeftIcon}
                    alt="왼쪽 아이콘"></img> */}
              {/* Card_Dummy */}
              {CardDummy.map((data) => (
                <div className="PopularCoursesCard" key={data.id}>
                  <img
                    className="PopularCoursesCardImage"
                    src={CardDummyImage}
                    alt="카드 이미지"></img>
                  <div className="PopularCoursesCardInfo">
                    <div className="PopularCoursesCardTitleWrap">
                      <span className="PopularCoursesCardTitle">
                        {data.title}
                      </span>
                    </div>
                    <div className="PopularCoursesCardContentWrap">
                      <p className="PopularCoursesCardContent">
                        {data.content}
                      </p>
                      <div className="PopularCoursesCardLikeWrap">
                        <img
                          className="PopularCoursesCardLikeIcon"
                          src={LikeIcon}
                          alt="좋아요 아이콘"></img>
                        <p className="PopularCoursesCardLike">Like</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Card_Dummy */}
              {/* <img
                    className="PopularCoursesRightIcon"
                    src={RightIcon}
                    alt="오른쪽 아이콘"></img> */}
            </div>
          </div>
        </div>
        <div className="StudentReviewsWrap">
          <div className="StudentReviewsBox">
            <div className="StudentReviews">
              <div className="StudentReviewsTitle">Student Reviews</div>
              {/* Reviews_Dummy */}
              {ReviewsDummy.map((data) => (
                <div className="StudentReviewsCard" key={data.id}>
                  <div className="StudentReviewsCardInfoWrap">
                    <div className="StudentReviewsCardInfoLeft">
                      <img
                        className="StudentReviewsCardProfile"
                        src={ExampleProfile}
                        alt="프로필"></img>
                      <p className="StudentReviewsCardName">{data.name}</p>
                    </div>
                    <div className="StudentReviewsCardInfoRight">
                      <img
                        className="StudentReviewsCardRate"
                        src={ExampleRate}
                        alt="별점"></img>
                    </div>
                  </div>
                  <div className="StudentReviewsCardContentWrap">
                    <p className="StudentReviewsCardContent">{data.content}</p>
                  </div>
                </div>
              ))}
              {/* Reviews_Dummy */}
            </div>
          </div>
        </div>
        <div className="BannerWrap">
          <Splide options={option} hasTrack={false}>
            <SplideTrack>
              <SplideSlide>
                <img
                  className="BannerImage"
                  src={ExampleVanner}
                  alt="배너 이미지 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="BannerImage"
                  src={ExampleVanner}
                  alt="배너 이미지 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="BannerImage"
                  src={ExampleVanner}
                  alt="배너 이미지 3"
                />
              </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows">
              <button
                className="splide__arrow splide__arrow--prev"
                style={{ display: "none" }}></button>
              <button
                className="splide__arrow splide__arrow--next"
                style={{ display: "none" }}></button>
            </div>
          </Splide>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Main;
