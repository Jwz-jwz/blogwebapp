import { AllBlog } from "../allblogview/AllBlog";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const BlogList = () => {
  return (
    <div>
      <Header />
      <AllBlog />
      <Footer />
    </div>
  );
};
