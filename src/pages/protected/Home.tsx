import image_title from "../../assets/chessgame.png";
import image_pic from "../../assets/blackknightright.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="relative bg-base-100  flex overflow-hidden  rounded-lg" style={{ height: "82vh" }}>
        <img className="w-132 h-32" src={image_title} />

        <div className="absolute left-20 top-40 ">
          <h1 className="text-3xl">Welcome to</h1>
          <h1 className="text-5xl ml-20 mt-2">Admin Dashboard</h1>
        </div>

        <div className="absolute left-20 bottom-36">
          <Link
            to={"/app/dashboard"}
            className="bg-teal-400 hover:bg-teal-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Let's begin...
          </Link>
        </div>

        <div className="absolute bottom-0 right-0 ">
          <img className="w-40 h-250" src={image_pic} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
