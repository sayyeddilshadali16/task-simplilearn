import Button from "./Button";
import ImageSlider from "./HorizontalSlider";
import Card from "./Card";
import Sidebar from "./Sidebar";
import lable from "../assets/lable simplilearn.png";
import MainSlider from "./MainSlider";

const Hero = () => {
  return (
    <div>
      <section className="max-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row">
        <div className="absolute z-20 flex flex-1 flex-col xl:w-1/2 p-10 text-white">
          <h1 className="bold-52 lg:bold-64">World's #1 Online Bootcamp</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            5,000,000 careers advanced
          </p>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            1,500 live classes every month
          </p>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            85% report career benefits including promotion or a new job
          </p>
          <Button
            type="button"
            title="Explore Programs"
            icon=""
            variant="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg outline-none border-none mt-5"
          />
        </div>
        <div className="w-full h-[450px]">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
          />
        </div>
      </section>
      <div className="p-20">
        <h1 className="text-center text-2xl font-bold mb-8">
          Partnering with world's leading universities and companies
        </h1>
        <ImageSlider />
      </div>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="cardContainer flex items-center justify-center gap-10 flex-wrap w-full ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col items-center justify-center xl:w-1/2">
          <h1 className="bold-52 lg:bold-64">Hear it from our Alumni</h1>
        </div>
      </section>
      <div className="flexCenter max-container relative mb-20 rounded-5xl overflow-hidden">
        <MainSlider />
      </div>
      <img src={lable} alt="" />
    </div>
  );
};

export default Hero;
