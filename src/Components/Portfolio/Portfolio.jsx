import React, { useState } from "react";
export default function Portfolio() {
  const [data, setData] = useState([
    {
      img: require("../../assets/assi 1 react assets/asset 0.png"),
      id: "img1",
    },
    {
      img: require("../../assets/assi 1 react assets/asset 1.png"),
      id: "img2",
    },
    {
      img: require("../../assets/assi 1 react assets/asset 2.png"),
      id: "img3",
    },
    {
      img: require("../../assets/assi 1 react assets/asset 0.png"),
      id: "img4",
    },
    {
      img: require("../../assets/assi 1 react assets/asset 1.png"),
      id: "img5",
    },
    {
      img: require("../../assets/assi 1 react assets/asset 2.png"),
      id: "img6",
    },
  ]);

  return (
    <>
      <section className="portfolio py-3">
        <div className="title text-center greyy mt-3">
          <h1 className="fw-bold ">PORTFOLIO COMPONENT</h1>
          <div className="my-3 d-flex w-25 m-auto  text-center justify-content-center align-items-center ">
            <div className="firstLine1 "></div>
            <i className="fa-solid fa-star ms-3"></i>
            <div className="scndLine1"></div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {data.map(function (item, index) {
              return (
                <>
                  <div className="col-md-4">
                    <div className="portfolioItem">
                      <img src={item.img} alt="" className="w-100 rounded-3" />
                      <div
                        className="plus rounded-3"
                        data-bs-toggle="modal"
                        data-bs-target={"#" + item.id}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {data.map(function (item) {
              return (
                <>
                  <div
                    className="modal fade"
                    id={item.id}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog ">
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <img src={item.img} alt="" className="w-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
