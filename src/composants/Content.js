const Content = (props) => {
  return (
    <div>
      <h1>{props.category}</h1>
      <div className="box">
        {props.images.map((pic, index) => {
          return (
            <div key={index}>
              <img className="pics" src={pic} alt="images" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
