/* eslint-disable jsx-a11y/iframe-has-title */
// THIRD IMPORT
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// PROJECT IMPORT
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import Loading from 'components/Extended/Loading';
import { LocationType } from 'types/location';
import { CategoryType } from 'types/category';

const Contact = () => {
  const dispatch = useDispatch();

  const [detail, setDetail] = useState<CategoryType>({});
  const [location, setLocation] = useState<LocationType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDetail();
    getLocation();
  }, []);

  const getDetail = () => {
    dispatch({
      type: 'category/getOne',
      payload: { id: 4 },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setDetail(list);
        }
      }
    });
  };

  const getLocation = () => {
    const query = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1
      }),
      range: JSON.stringify([0, 20]),
      sort: JSON.stringify(['createdAt', 'DESC'])
    };
    dispatch({
      type: 'location/fetch',
      payload: query,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setLocation(list?.[0]);
        }
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert('Xin cảm ơn! Chúng tôi sẽ sớm liên hệ lại với bạn!');
  };

  return (
    <>
      <BreadCrumb node1={detail?.text} />
      <section className="contact_page container">
        <h1 className="page_title type_2">{detail?.text}</h1>
        <div className="page_main">
          <div className="content">
            <p>{detail?.description?.split('//')?.[0]}</p>
            <p>{detail?.description?.split('//')?.[1]}</p>

            <p className="info">Địa chỉ: {location?.address}</p>
            <p className="info">
              Email: <span>{location?.email}</span>
            </p>
            <p className="info">
              Số điện thoại: <span>{location?.mobile}</span>
            </p>
          </div>
          <form
            className="contact_form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input type="text" required placeholder="Họ tên *" />
            <input type="number" required placeholder="Số điện thoại *" />
            <input type="email" placeholder="Email" />
            <textarea required placeholder="Lời nhắn *"></textarea>
            <p>* Thông tin bắt buộc</p>
            <button type="submit">Gửi</button>
          </form>
        </div>
        <iframe src={location?.location} width="100%" height="350px" style={{ border: 0 }} loading="lazy"></iframe>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Contact;
