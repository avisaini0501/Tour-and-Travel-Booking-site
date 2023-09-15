import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "calculate Weather",
        desc: "Nice place to travel , and have fun.",
    },
    {
        imgUrl: guideImg,
        title: "Best tour guide",
        desc: "Nice place to travel , and have fun.",   
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Nice place to travel , and have fun.",
   
    },
];

const ServiceList = () => {
   return (
     <>
       {serviceData.map((item , index) => (
          <Col lg = "3" md="6" sm="12" className="mb-4" key = {index}>
              <ServiceCard item={item} />
          </Col>
       ))}
     </>
   );
};

export default ServiceList;

