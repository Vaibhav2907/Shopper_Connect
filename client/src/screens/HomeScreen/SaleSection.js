import classes from "./SaleSection.module.css";
import Container from "../../components/Container";
const SaleSection = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <h3>GET EXCLUSIVE DISCOUNT</h3>
          <h4>BUY NOW</h4>
          <p>BECOME MEMBER</p>
          <a href="/shop">Shop Now</a>
        </div>
      </Container>
    </div>
  );
};

export default SaleSection;
