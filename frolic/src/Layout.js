import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import Footer from "./Footer";

export default function Layout(){
    return(
        <>
        <section>
        <div className="container mt-2" id="header">
            <div className="text-center p-1 " id="title">
                <h2 className="text-white fw-bold">★ Frolic Event-2023 ★</h2>
            </div>
        </div>
        


        <nav>
            <ul>
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/rules" className="link">Rule</Link>
                </li>
                <li>
                    <Link to="/event" className="link">Events</Link>
                </li>
                <li>
                    <Link to="/registrationpage" className="link">Registration</Link>
                </li>
               
            </ul>
      </nav>
      </section>
        
      <Outlet />

      <div className="p-4" id="fadedIn">
        <Footer />
      </div>
        </>
    )
}