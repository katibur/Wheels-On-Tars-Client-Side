import React from 'react';

const SiteDetails = () => {
    return (
        <div className='mx-auto text-center'>
            <div className="stats bg-primary text-primary-content">

                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value">21,587</div>
                    <div className="stat-desc">12% more than last month</div>
                </div>

            </div>
        </div>
    );
};

export default SiteDetails;