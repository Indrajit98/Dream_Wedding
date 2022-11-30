import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const AllService = () => {
  const allService = useLoaderData();
  // console.log(allService.length);
  useTitle('allService')
  return (
    <div className="my-10">
      <h2 className="text-center text-5xl font-bold py-6">Our Service {allService.length}</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {allService.map((service) => (
          <div key={service._id}>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
              <figure>
                <img src={service.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.service_name}</h2>
                <div>
                  {
                    service.details.length >100 ? <>{service.details.slice(0,100) + '...'} </> : <>{service.details}</>
                  }
                </div>
                <p className="text-2xl font-semibold">
                  Price {service.balance}
                </p>
                <div className="card-actions md:justify-end">
                  <Link to={`/serviceDetails/${service._id}`}>
                    <button className="btn btn-outline">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllService;
