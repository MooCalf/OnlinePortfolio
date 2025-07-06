import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MyProjects } from "./Pages/MyProjects";
import { MyExperiences } from "./Pages/MyExperiences";
import { NotFound } from "./Pages/NotFound";
import { Toaster } from "@/Components/ui/toaster.jsx";
import { Metadata } from "@/Components/Metadata.jsx";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
