import React from "react";

const Card = (props) => {
  //we can call these props here or pass them in
  //t the top in the props. Instead of props it would say:
  //({name, email,id})
  const { name, email, id } = props;
  return (
    <div className=" tc bg-light-green grow br3 pa3 ma2 dib bw2 shadow-5">
      <h1>Robo Friends</h1>
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
