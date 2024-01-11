import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import HeroSection from "./components/Home/HeroSection";
import Promos from "./components/Home/Promos";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <SideBar />
      <HeroSection />
      <Promos />
    </div>
  );
}
