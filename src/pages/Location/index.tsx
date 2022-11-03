/* eslint-disable jsx-a11y/iframe-has-title */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";

// PROJECT IMPORT
import BreadCrumb from "layout/BreadCrumb";
import Loading from "components/Extended/Loading";
import { LocationType } from "types/location";
import { CategoryType } from "types/category";

const Index = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<CategoryType>({});
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [locationSelected, setLocationSelected] = useState<LocationType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDetail();
    getLocation();
  }, []);

  const getDetail = () => {
    dispatch({
      type: "category/getOne",
      payload: { id: 8 },
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list },
          } = res;
          setDetail(list);
        }
      },
    });
  };

  const getLocation = () => {
    const query = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
      }),
      range: JSON.stringify([0, 20]),
      sort: JSON.stringify(["createdAt", "DESC"]),
    };
    dispatch({
      type: "location/fetch",
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list },
          } = res;
          setLocations(list);
          setLocationSelected(list[0]);
        }
      },
    });
  };

  return (
    <>
      <BreadCrumb node1={detail?.text} />
      <section className="shop_system_page container">
        <h1 className="page_title">{detail?.text}</h1>
        <p>{detail?.description?.split("//")?.[0]}</p>
        <p>{detail?.description?.split("//")?.[1]}</p>

        <Row gutter={[32, 32]} className="shop_list">
          <Col xs={24} md={24} lg={8} xl={8} className="list_box">
            <p>Chọn cửa hàng</p>
            <div className="list">
              {locations?.map((item) => (
                <div
                  className={
                    locationSelected?.id === item?.id ? "shop active" : "shop"
                  }
                  onClick={() => setLocationSelected(item)}
                  key={item?.id}
                >
                  <p className="name">{item?.name}</p>
                  <p>Mail: {item?.email}</p>
                  <p>Hotline: {item?.mobile}</p>
                  <p>{item?.address}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={24} md={24} lg={16} xl={16} className="map">
            <iframe
              src={locationSelected?.location}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Index;
