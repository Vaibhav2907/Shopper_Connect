import Container from "../../components/Container";
import classes from "./FooterArea.module.css";
import { Link } from "react-router-dom";
const FooterArea = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <div className={classes.mission}>
            <h2>CONNECT TO YOUR AREA</h2>
            <p>
              VIEW SHOPS IN YOUR AREA AND BUY EASILY
            </p>
            <p>
              LIST YOUR SHOPS AND SELL EASILY
            </p>
          </div>
          <div className={classes.quickLink}>
            <h3>Quick Links</h3>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Contact</Link>
            </ul>
          </div>
          <div className={classes.contact}>
            <h3>Contact Us</h3>
            <div className={classes.wrapContact}>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-location-arrow"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>JKLU</h4>
                  <p>IET DEPARTMENT</p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>Phone Number</h4>
                  <p>+91 9423419091</p>
                  <p>+91 9876342301</p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>JKLU</h4>
                  <p>IET DEPARTMENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterArea;
