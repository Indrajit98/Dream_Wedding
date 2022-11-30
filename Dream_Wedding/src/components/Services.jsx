import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const{loading} = useContext(AuthContext)
  const [services, setServices] = useState([]);
  // console.log(services);
  
  useEffect(() => {
    fetch("https://dream-wedding-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        if(loading){
          return <progress className="progress w-56"></progress>
        };
        setServices(data);
      });
  });
  return (
    <div className="md:py-20">
      <h2 className="md:text-5xl text-2xl font-bold text-center pt-4 md:pb-12 pb-6 gap-4">Our services</h2>

      <div className="grid md:grid-cols-3 grid-cols-1">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="card-actions justify-center mt-10">
        <Link to='/allServices'>
          <button className="btn btn-outline">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
