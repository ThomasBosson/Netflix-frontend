import Content from "./Content";
import movie from "../movie.json";

const Section = () => {
  return (
    <div className="section">
      {movie.map((elem, index) => {
        return (
          <Content key={index} category={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
};

export default Section;
