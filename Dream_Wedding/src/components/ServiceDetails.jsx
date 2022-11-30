import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { service_name, balance, details, picture, rating } = service;
  // console.log(service.service_id);
  useTitle('serviceDetails')


  return (
    <div>
      <div className="mx-auto md:w-3/4 p-3 ">
        <div>
          <img className="w-full" src={picture} alt="" />
        </div>
        <h2 className="text-3xl font-bold py-3">{service_name}</h2>
        <p className="text-justify">{details}</p>
        <div className="md:flex md:justify-between py-4">
          <p className="text-xl font-semibold">Price: {balance}</p>
          <div>
            <div className="flex items-center text-xl font-semibold pt-1">
              <p className="mr-2"> {rating}</p>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/review/${service._id}`}>
            <button className="btn btn-outline">Send Review</button>
          </Link>
          <Link to={`/serviceIdReviews/${service._id}`}>
            <button className="btn btn-outline">Review</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
