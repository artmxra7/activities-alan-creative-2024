import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Navigation3 from "./fragments/Botnav3";

const Card = () => {
    return (
        <div className="justify-center items-center">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="page shadow bg-white">
                <div className="main-container shadow mt-10 justify-center items-center">
                    <MDBContainer>
                        <br />
                        <br />
                        <MDBRow className="justify-content-center align-items-center">
                            <MDBCol sm={12} md={4} className="text-center">
                                <div className="container">
                                    <img
                                        src="https://i.pinimg.com/736x/f0/e9/e1/f0e9e1e905e970881069bedc235c087a.jpg"
                                        alt="John"
                                        style={{ width: "65%", borderRadius: "100%" }}
                                    />
                                    <br />
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </div>
                            </MDBCol>

                            <MDBCol sm={12} md={8}>
                                <div className="container">
                                    <h2>Febryan Triwibowo</h2>
                                    <p>Junior Web Dev</p>
                                    <p>Depok, Jawa Barat, Indonesia</p>
                                </div>

                                <hr />

                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol sm={2} lg={2} md={2}>
                                            <h6 className="m-4">Bio </h6>
                                        </MDBCol>
                                        <MDBCol>
                                            <p className="Bio">
                                                Saya Adalah Karyawan magang yang sedang intern pada salah satu perusahaan yang bernama Alan Creative
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                                <br />
                                <br />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
            <Navigation3 />
        </div>
    );
};
export default Card;
