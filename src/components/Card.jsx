import "../sass/card.scss";

const Card = ({ veri }) => {
  console.log(veri);
  return (
    <div className="container">
      {veri.map(({ id, name, job, comment, img }) => (
        <div key={id} className="card">
          <div className="text">
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{comment}</p>
          </div>
          <img src={img} alt="" width={"100px"} />
          <div className="buton">
            <button className="sml">Small</button>
            <button className="large">Large</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
