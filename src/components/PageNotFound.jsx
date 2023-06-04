import { Link } from "react-router-dom";
import errorImg from "../assets/404.svg";

const PageNotFound = () => {
  return (
    <section className='error-page'>
      <img src={errorImg} alt='404 Error' />
      <p>
        Oops! We couldn't find the page you were looking for. Please
        double-check the URL.
      </p>
      <Link to='/' className='btn'>
        Go Home{" "}
      </Link>
    </section>
  );
};

export default PageNotFound;
