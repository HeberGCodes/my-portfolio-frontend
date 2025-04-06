import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/coming-soon" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
