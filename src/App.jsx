import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MyProjects } from "./Pages/MyProjects";
import { MyExperiences } from "./Pages/MyExperiences";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "@/Components/ui/toaster.jsx";
import { Metadata } from "@/Components/Metadata.jsx";
import { GoogleAnalytics, GoogleSearchConsole } from "@/Components/Analytics.jsx";
import MoreProjectsMain from "./Pages/PractiseWebsites/Main";
import LandingPageRedesign from "./Pages/PractiseWebsites/LandingPageRedesign";
import PortfolioGrid from "./Pages/PractiseWebsites/PortfolioGrid";

function App() {
  return (
    <>
      <GoogleAnalytics />
      <GoogleSearchConsole />
      <Metadata />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/my-experiences" element={<MyExperiences />} />
          <Route path="/more-projects" element={<MoreProjectsMain />} />
          <Route path="/more-projects/landing-page-redesign" element={<LandingPageRedesign />} />
          <Route path="/more-projects/portfolio-grid" element={<PortfolioGrid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
