import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import Categories from "./components/Home/Categories";
import HeroSection from "./components/Home/HeroSection";
import MenuSection from "./components/Home/Menu/MenuSection";
import Promos from "./components/Home/PromoSection/Promos";

export default function Home() {
  return (
    <div className="bg-slate-200 text-white">
      <Header />
      <SideBar />
      <HeroSection />
      <Promos />
      <Categories />
      <MenuSection />
    </div>
  );
}
