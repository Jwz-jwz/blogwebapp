import { Blogpost } from "../blog-post/BlogPost";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const BlogList = () => {
  return (
    <div>
      <Header />
      <Blogpost />
      <Footer />
    </div>
  );
};
