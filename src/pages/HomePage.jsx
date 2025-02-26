import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />

      <h1>WorldWise</h1>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default HomePage;
