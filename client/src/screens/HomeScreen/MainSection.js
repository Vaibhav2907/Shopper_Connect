import Container from "../../components/Container";
import classes from "./MainSection.module.css";
import trolly from "./images/187.webp";
import showcase1 from "./images/stationery.webp";
import showcase2 from "./images/kirana.webp";
import showcase3 from "./images/beauty.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/Card";

const showcases = [
  {
    image: showcase1,
    text: "SCHOOL ITEMS",
    category: "Stationers",
  },
  {
    image: showcase2,
    text: "KIRANA ITEMS",
    category: "Kirana",
  },
  {
    image: showcase3,
    text: "Many offers",
    category: "Games",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
const MainSection = () => {
  return (
    <>
      <div className={classes.heroBanner}>
        <Container>
          <div className={classes.content}>
            <img className={classes.imageFluid} src={trolly} alt="Trolly" />
            <div className={classes.intro}>
              <h4>Shopper Connect</h4>
              <h1>Connect to your area shops</h1>
              <p>
                Buy from shops in your area and sell items with ease
              </p>
              <a href="/shop">Browse Now</a>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.showcases}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {showcases.map((showcase) => (
            <Card key={showcase.text} showcase={showcase} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MainSection;
