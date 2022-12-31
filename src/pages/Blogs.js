import Slides from "../components/Slides";
import dataSlide from "../data/dataSlide";
const Blogs = () => {
  return (
    <div className="container">
      <h1>Slide Shows</h1>
      {/* This is to illustrate how to pass data from parent to child */}
      {/* https://www.freecodecamp.org/news/pass-data-between-components-in-react/ */}
      {/* The Slides object is reusable components */}
      <Slides dataSlide={dataSlide} />
    </div>
  );
};

export default Blogs;
