import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const{service_name,picture,balance} = service;

    return (
        <div >
             <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">   
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <div>
                  {
                    service.details.length >100 ? <>{service.details.slice(0,100) + '...'} </> : <>{service.details}</>
                  }
                </div>
                    <p className='text-xl font-semibold'>Price {balance}</p>
                    <div className="card-actions md:justify-end">
                    <Link to={`/serviceDetails/${service._id}`}>
                    <button className="btn btn-outline">Details</button>
                  </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;