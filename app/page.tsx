import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import Categories from "./components/Home/Categories";
import HeroSection from "./components/Home/HeroSection";
import MenuSection from "./components/Home/MenuSection";
import Promos from "./components/Home/Promos";

export default function Home() {
  return (
    <div className="bg-yellow-300">
      <Header />
      <SideBar />
      <HeroSection />
      <Promos />
      <Categories />
      <MenuSection />
    </div>
  );
}
