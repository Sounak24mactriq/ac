import Navbar from "@/Components/Global/Navbar";
import Believe from "@/Components/Pages/Home/Believe";
import Cue from "@/Components/Pages/Home/Cue";
import Hero from "@/Components/Pages/Home/Hero";
import OurClients from "@/Components/Pages/Home/OurClients";
import Ourproducts from "@/Components/Pages/Home/Ourproducts";
import OurProjects from "@/Components/Pages/Home/OurProjects";
import PCNumber from "@/Components/Pages/Home/PCNumber";

export default function Home() {
  return (
    <>
      {/* Hero component with video */}
      <Hero />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
        }}
      >
        <Navbar />
      </div>

      {/* Other components */}
      <Believe />
      <Cue />
      <Ourproducts />
      <OurProjects />
      <OurClients />
      <PCNumber />
    </>
  );
}
