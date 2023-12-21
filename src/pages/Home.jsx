import { Link } from "react-router-dom";
import Food from "../components/Food";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted ${value}`);
  };
  return (
    <>
      <div>Home</div>
      <Food name="kottu" />
      <Link to="/contact" className="bg-green-500">
        Go to contact
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="shadow-lg"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Home;
