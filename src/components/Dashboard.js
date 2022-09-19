import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProductDataService from "../services/ProductService";

const Dashboard = () => {
    // const [authenticated, setauthenticated] = useState(false);

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("authenticated");
    //     if (loggedInUser) {
    //         setauthenticated(loggedInUser);
    //     }
    // }, []);


    const [currentProduct, setCurrentProduct] = useState(null);

    const [searchSystemSN, setSearchSystemSN] = useState("");

    const navigate = useNavigate();
    const { t } = useTranslation();

    const loggedInUser = localStorage.getItem("user");

    // console.log(loggedInUser)

    useEffect(() => {
        if (!loggedInUser) {
            setTimeout(() => {
                navigate('/login');
                // return <Navigate replace to="/login" />;
            }, 3000)

        }
    }, [loggedInUser, navigate]);



    const onChangeSearchSystemSN = e => {
        const searchSystemSN = e.target.value;
        setSearchSystemSN(searchSystemSN);
    };

    const findBySystemSN = (e) => {
        e.preventDefault()
        ProductDataService.getBySystemSN(searchSystemSN)
            .then(response => {
                setCurrentProduct(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                setCurrentProduct(null)
                console.log(e);
            });
    };


    return (
        <section className="page-section" id="dashboard">
            {!loggedInUser ? (

                <div className="text-center">
                    <p className="fs-3"> <span className="text-danger">Opps!</span>{t('login required.')}</p>
                    
                    <p className="lead">
                        {t('This page will redirect to login in 3 seconds.')}<br/>
                        {t('Please use contact us form to request login information.')} 
                    </p>
                </div>

            ) : (
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">{t('product inquiry')}</h2>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form onSubmit={findBySystemSN}>
                        <label>{t('Please enter a product serial number')}</label>
                            <div className="input-group mb-3">
                               
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t('find by SystemSN')}
                                    value={searchSystemSN}
                                    onChange={onChangeSearchSystemSN}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="submit"
                                    >
                                        {t('Search')}
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className="col-md-6">

                        {currentProduct ? (
                            <div>
                                <h4>Product</h4>
                                <div>
                                    <label>
                                        <strong>System SN:</strong>
                                    </label>{" "}
                                    {currentProduct['System S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Date:</strong>
                                    </label>{" "}
                                    {currentProduct['Date']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Customer Name:</strong>
                                    </label>{" "}
                                    {currentProduct['Customer Name']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Case Brand:</strong>
                                    </label>{" "}
                                    {currentProduct['Case Brand']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Motherboard Brand:</strong>
                                    </label>{" "}
                                    {currentProduct['Motherboard Brand']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Hard Drives:</strong>
                                    </label>{" "}
                                    {currentProduct['Hard Drives']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Hard Drive 1:</strong>
                                    </label>{" "}
                                    {currentProduct['Hard Drive 1']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Hard Drive 2:</strong>
                                    </label>{" "}
                                    {currentProduct['Hard Drive 2']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Hard Drive 3:</strong>
                                    </label>{" "}
                                    {currentProduct['Hard Drive 3']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Hard Drive 4:</strong>
                                    </label>{" "}
                                    {currentProduct['Hard Drive 4']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Backplane:</strong>
                                    </label>{" "}
                                    {currentProduct['Backplane']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Backplane S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Backplane S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>CD Brand:</strong>
                                    </label>{" "}
                                    {currentProduct['CD Brand']}
                                </div>
                                <div>
                                    <label>
                                        <strong>CD S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['CD S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Riser Card:</strong>
                                    </label>{" "}
                                    {currentProduct['Riser Card']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Riser Card S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Riser Card S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Video Adaptor:</strong>
                                    </label>{" "}
                                    {currentProduct['Video Adaptor']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Video Adapter S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Video Adapter S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Power Supply #1 S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Power Supply #1 S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Power Supply #2 S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Power Supply #2 S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Power Supply #3 S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Power Supply #3 S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Raid/Network Card:</strong>
                                    </label>{" "}
                                    {currentProduct['Raid/Network Card']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Raid/Network Card S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Raid/Network Card S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Other:</strong>
                                    </label>{" "}
                                    {currentProduct['Other']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Other S/N:</strong>
                                    </label>{" "}
                                    {currentProduct['Other S/N']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Memory 1:</strong>
                                    </label>{" "}
                                    {currentProduct['Memory 1']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Memory 2:</strong>
                                    </label>{" "}
                                    {currentProduct['Memory 2']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Memory 3:</strong>
                                    </label>{" "}
                                    {currentProduct['Memory 3']}
                                </div>
                                <div>
                                    <label>
                                        <strong>Service Notes:</strong>
                                    </label>{" "}
                                    {currentProduct['Service Notes']}
                                </div>

                            </div>
                        ) : (
                            <div>
                                <br />
                                <p>{t('No Product found')}</p>
                            </div>
                        )}

                    </div>



                </div>

            )}

        </section>
    );

};






export default Dashboard;