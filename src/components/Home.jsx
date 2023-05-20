import { Link } from "react-scroll";
import { GrSend } from "react-icons/gr";
import ContactButton from "./ContactButton";

const Home = () => (
  <main id='Home' className='hero section'>
    <div className='hero__content'>
      <h1 className='hero__heading'>
        Helping nice <br />
        people {""}
        <span className='text-gradient'>build</span> <br />
        nice products
      </h1>
      <p className='hero__sub'>Building Better Web Experiences</p>

      <Link style={{ width: "fit-content" }} to='Contact' offset={-150}>
        <ContactButton />
      </Link>
    </div>
  </main>
);

export default Home;
