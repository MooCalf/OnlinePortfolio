import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MyProjects } from "./Pages/MyProjects";
import { MyExperiences } from "./Pages/MyExperiences";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "@/Components/ui/toaster.jsx";
import { Metadata } from "@/Components/Metadata.jsx";
import PractiseWebsitesMain from "./Pages/PractiseWebsites/Main";
import LandingPageRedesign from "./Pages/PractiseWebsites/LandingPageRedesign";
import PortfolioGrid from "./Pages/PractiseWebsites/PortfolioGrid";

function App() {
  return (
    <>
      <Metadata />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/my-experiences" element={<MyExperiences />} />
          <Route path="/practise-websites" element={<PractiseWebsitesMain />} />
          <Route path="/practise-websites/landing-page-redesign" element={<LandingPageRedesign />} />
          <Route path="/practise-websites/portfolio-grid" element={<PortfolioGrid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
