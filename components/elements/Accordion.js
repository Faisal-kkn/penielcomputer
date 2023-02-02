/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>1. What is Tally Prime?</button>
                    </h2>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">
                            Tally Prime is a business management software,
                            that takes care of your Accounting Sales, purchase, receivables, payables
                            tracking, Inventory management Order processing, inventory tracking, Payroll
                            management, Bank transactions, Statutory Compliance, etc. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}><button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>2. Which companies use tally in the middle east?</button></h2>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">
                            Tally is widely used by trading companies in
                            Dubai, Abu Dhabi, UAE, Bahrain, Oman and Saudi Arabia. The features that it
                            provides are beneficial to trading companies at large. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}><button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>3. In which field is TallyPrime used?</button></h2>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">
                            TallyPrime is used for all types of accounting
                            fields. But it is mainly used in trading sector and by trading companies because
                            of its features and reports that it generates and offers. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}><button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>4. What are the main features of tally? </button></h2>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">
                            Tally ERP 9 stands for Tally Enterprise
                            Resource Planning 9. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(5)}><button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}> 5. What is the full form of Tally ERP 9? </button></h2>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body content-detail">
                            <ul>
                                <li>Simple Accounting Interface</li>
                                <li>Reporting features</li>
                                <li>Trading (Inventory Management)</li>
                                <li>Order Management</li>
                                <li>Bill of Materials</li>
                                <li>Inventory grouping</li>
                                <li>Manufacturing Journal</li>
                                <li>Warehouse Management</li>
                                <li>HR Department functionality</li>
                                <li>Payroll</li>
                                <li>Order Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(6)}><button className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>6. Is Tally used in Dubai?</button></h2>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">
                            Yes, Tally is used widely in Dubai and across
                            UAE by many companies and organization. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(7)}><button className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>7. Is Tally used in UAE?</button></h2>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body"> Yes, Tally is used by many companies and
                            institutions in Abu Dhabi, Dubai, Sharjah and all other Emirates. </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accordion;