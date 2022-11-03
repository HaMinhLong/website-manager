import React, { useEffect } from "react";
import logo from "static/images/home/logo.png";

interface Props {
  loading: boolean;
}

const Loading = ({ loading }: Props) => {
  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [loading]);

  return (
    <React.Fragment>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 100000,
            background: "#fff",
          }}
        >
          <div className="loading__box">
            <img src={logo} alt="logo page" />
            <span className="loader"></span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Loading;
