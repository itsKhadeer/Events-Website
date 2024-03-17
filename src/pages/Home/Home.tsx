import { Header } from "../../components";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className=" h-screen relative overflow-hidden">
      <Header title="ingenium" />
      <div className="flex flex-col items-center justify-center h-5/6 w-full ">
        <div className="w-full text-center space-y-2 md:w-2/3 relative bottom-36 md:bottom-8">
          <p className=" font-chakraPetch text-white text-2xl md:text-4xl relative top-24 md:top-36 ">
            Pragyan's Inter-collegiate
          </p>
          <div className="w-full text-center relative top-12 ">
            <p className="font-airnt abc text-4xl md:text-7xl text-cyan z-10 relative top-18 md:top-34">
              Technical Exhibition
            </p>
            <p className="font-airnt abc text-4xl md:text-7xl text-outline">
              Technical Exhibition
            </p>
          </div>
          <p className=" font-chakraPetch text-white text-2xl md:text-4xl relative top-18 md:top-12">
            and
          </p>
          <div className="relative -bottom-16 md:bottom-0">
            <p className="font-airnt abc text-4xl md:text-7xl text-blue z-10 relative top-8 md:top-16">
              Competition
            </p>
            <p className="font-airnt abc text-4xl md:text-7xl text-outline">
              Competition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
