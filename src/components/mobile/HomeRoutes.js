import React, { useEffect, useState } from "react";
import axios from "axios";
import MobileHomePage from "./scroll/MobileHomePage";
import FooterNavigation from "./footer/FooterNavigation";
import MobileNavigationBar from "./nav/MobileNavigationBar";

export default function HomeRoutes() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        { timeout: 360000 }
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  console.log(data);
  return (
    <>
      <div className="mobile__navbar">
        <MobileNavigationBar />
      </div>
      {data.map((product) => (
        <div>
          <MobileHomePage key={product.id} product={product} />
        </div>
      ))}
      <FooterNavigation />
    </>
  );
}
