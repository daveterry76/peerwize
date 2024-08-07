import firstCourseImg from "../Dashboard/assets/first-course.svg";
import secondCourseImg from "../Dashboard/assets/second-course.svg";
import thirdCourseImg from "../Dashboard/assets/third-course.svg";
import rating from "../Dashboard/assets/rating.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Dashboard/styles/feed.scss";

const courses = [
  {
    image: firstCourseImg,
    courseName: "",
    rating: 4.3,
  },
  {
    image: secondCourseImg,
    courseName: "",
    rating: 4.3,
  },
  {
    image: thirdCourseImg,
    courseName: "",
    rating: 4.3,
  },
  {
    image: secondCourseImg,
    courseName: "",
    rating: 4.3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Feed = () => {
  return (
    <>
      <div
        className="feed__desktop"
        style={{
          width: "850px",
          marginTop: "1rem",
          marginInline: "0.5rem",
          borderRadius: "16px",
          background: "var(--Primary-00, #F7FCFD)",
          paddingBlock: "0.5rem",
          paddingInline: "0.5rem",
          borderWidth: "1px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "1rem",
            marginBlock: "1rem",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: 700 }}>+ My Feed</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 9V3H15"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 15V21H9"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 3L13.5 10.5"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 13.5L3 21"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="mt-6"
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-width-300-px"
        >
          {/* <div style={{display: 'flex', gap: '0.5rem', marginTop: '2rem'}}> */}
          {courses.map((course) => (
            <>
              <div
                style={{
                  width: "275px",
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 8px 0px rgba(17, 0, 255, 0.16)",
                  borderRadius: "8px 8px 0px 0px",
                }}
              >
                <img width="275" src={course.image} alt="course img" />
                <div style={{ padding: "0.5rem" }}>
                  <p
                    style={{
                      color: "var(--Accent-Black, #141414)",
                      fontSize: "11px",
                      fontWeight: "700",
                      lineHeight: "150%",
                    }}
                  >
                    Course
                  </p>
                  <h3
                    style={{
                      color: "var(--Accent-Black, #141414)",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                  >
                    Conducting Interview for better research enviro...
                  </h3>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img src={rating} alt="stars" />
                    <p
                      style={{
                        color: "var(--Accent-Black, #141414)",
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "150%",
                      }}
                    >
                      {course.rating}(2)
                    </p>
                  </div>
                  <button
                    style={{
                      background: "var(--primary-primary-05-main, #37BBCA)",
                      border: "1px",
                      borderRadius: "4px",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      padding: "8px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      width: "100%",
                    }}
                  >
                    View Course
                  </button>
                </div>
              </div>
            </>
          ))}
        </Carousel>
        {/* </div> */}
      </div>

      <div
        className="feed__mobile p-4 mx-4 my-8 rounded-2xl py-2 border-2"
        style={{
          background: "#F7FCFD",
        }}
      >
        <div className="flex justify-between">
          <h2 className="text-center text-base">+ My Feed</h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-4"
          >
            <path
              d="M21 9V3H15"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 15V21H9"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 3L13.5 10.5"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 13.5L3 21"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Carousel
          responsive={responsive}
          itemClass="carousel-item-width-300-px"
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
        >
          {courses.map((course, index) => (
            <div key={index} className="p-2">
              <div
                style={{
                  border: "1px solid #ccc",
                }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-auto"
                  src={course.image}
                  alt="course img"
                />
                <div className="p-4">
                  <p className="font-bold">Course</p>
                  <h3
                    className="text-base font-normal"
                  >
                    Conducting Interview for better research enviro...
                  </h3>
                  <div className="flex items-center">
                    <img src={rating} alt="stars" />
                    <p className="ml-2">{course.rating}(2)</p>
                  </div>
                  <button
                    style={{
                      background: "#37BBCA",
                    }}
                    className="mt-4 border-none rounded-md cursor-pointer py-2 px-4 text-white"
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Feed;
