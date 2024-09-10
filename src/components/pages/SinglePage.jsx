import { useRouter } from "next/router";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { SingleMain } from "../single-page/SingleMain";
import { useState, useEffect } from "react";

export const SinglePage = () => {
  const router = useRouter();

  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [article]);

  return (
    <div>
      <Header />
      <SingleMain
        header={article?.title}
        propic={article?.user?.profile_image_90}
        name={article?.user?.name}
        date={article?.published_at}
        coverpic={article?.cover_image}
        description={article?.description}
      />
      <Footer />
    </div>
  );
};
