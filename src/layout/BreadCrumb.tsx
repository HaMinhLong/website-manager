/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import rightArraw from "static/images/home/right-arrow.png";

interface Props {
  node1?: string;
  node2?: string;
  urlNode1?: any;
  type2?: boolean;
}

const BreadCrumb = ({ node1, node2, urlNode1, type2 }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className={
          type2 ? "bread_crumb type_2 container" : "bread_crumb container"
        }
      >
        <Link to="/">Trang chủ</Link>
        <img src={rightArraw} alt="" width="12" height="12" />
        {node1 && !node2 && <span>{node1}</span>}
        {node1 && node2 && (
          <React.Fragment>
            <span>
              <a
                onClick={() => {
                  if (urlNode1) navigate(urlNode1);
                  else navigate(-1);
                }}
              >
                {node1}
              </a>
            </span>
            <img src={rightArraw} alt="" width="12" height="12" />
            <span>{node2}</span>
          </React.Fragment>
        )}
      </section>
    </>
  );
};

export default BreadCrumb;
