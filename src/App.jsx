import "./App.css";
import Navbar from "./components/sections/Navbar";
import Home from "./components/sections/Home";
import Sponsored from "./components/sections/Sponsored";
import AboutUs from "./components/sections/AboutUs";
import Collections from "./components/sections/Collections";
import FeaturedArtwork from "./components/sections/FeaturedArtwork";
import TopCreator from "./components/sections/TopCreator";
import AskedQuestion from "./components/sections/AskedQuestion";
import CollectNft from "./components/sections/CollectNft";

function App() {
  return (
    <>
      <div className="w-screen bg-linear-to-l from-[#181E41] to-[#984D38]">
        <div className="px-30.5 flex flex-col items-center max-w-360 mx-auto h-auto pt-2.25">
          <Navbar />
          <Home />
          <Sponsored />
          <AboutUs />
          <Collections />
          <FeaturedArtwork />
          <TopCreator />
          <AskedQuestion/>
          <CollectNft/>
        </div>
      </div>  
    </>
  );
}

export default App;
