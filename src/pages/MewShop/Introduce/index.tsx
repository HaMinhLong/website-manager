// THIRD IMPORT
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// TYPES IMPORT
import { ArticleType } from 'types/articles';
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import Loading from 'components/Extended/Loading';

const Introduce = () => {
  const dispatch = useDispatch();

  const [article, setArticle] = useState<ArticleType>({ content: '' });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    let params = {
      filter: JSON.stringify({ status: 1, websiteId: 1, categoryId: 3 }),
      range: JSON.stringify([0, 1]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,title,content'
    };

    dispatch({
      type: 'article/fetch',
      payload: params,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setArticle(list?.[0]);
        }
      }
    });
  };
  return (
    <>
      <BreadCrumb node1={article?.title} />
      <section className="introduce_page container">
        <h1 className="page_title">{article?.title}</h1>
        <div className="content">
          <div className="descriptions">
            <div dangerouslySetInnerHTML={{ __html: article?.content }} />
          </div>
        </div>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Introduce;
