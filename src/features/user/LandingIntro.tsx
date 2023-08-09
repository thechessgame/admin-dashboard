import logo from "../../assets/whiteknightleft.png";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-300">
      <div className="hero-content py-12">
        <div className="max-w-md text-center">
          <h1 className="font-serif italic text-[color:white] text-5xl text-center font-bold ">CHESS GAME</h1>

          <img src={logo} className="font-serif w-200 h-205 inline-block mt-12" alt="" />

          <h1 className="font-serif  text-3xl font-bold ">Admin Dashboard</h1>

          {/* Importing pointers component */}
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
