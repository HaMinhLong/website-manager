// THIRD IMPORT
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// PROJECT IMPORT

import { ArticleType } from "types/articles";

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<ArticleType>({ content: "" });

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    let params = {
      filter: JSON.stringify({ status: 1, websiteId: 1, categoryId: 2 }),
      range: JSON.stringify([0, 4]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "images",
    };

    dispatch({
      type: "article/fetch",
      payload: params,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list },
          } = res;
          setDetail(list?.[0]);
        }
      },
    });
  };

  return (
    <section className="banner_home">
      <img
        src={`${END_POINT}${detail?.images?.split(",")?.[0]}`}
        alt="banner"
      />
    </section>
  );
};

export default Index;
