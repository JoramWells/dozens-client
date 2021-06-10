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
  // const data = [
  //   {
  //     id: 1,
  //     src: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  //     alt: "img1",
  //     productName: "",
  //     price: "1234/=",
  //     discount: "4,322/=",
  //     likes: "45",
  //   },
  //   {
  //     id: 2,
  //     src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     alt: "img2",
  //     productName: "",
  //     price: "1999/=",
  //     discount: "3,445/=",
  //     likes: "42",
  //   },
  //   {
  //     id: 3,
  //     src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  //     alt: "img3",
  //     productName: "",
  //     price: "2,413/=",
  //     discount: "5,322/=",
  //     likes: "15",
  //   },
  //   {
  //     id: 4,
  //     src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  //     alt: "img4",
  //     productName: "",
  //     price: "1,908/=",
  //     discount: "6,434/=",
  //     likes: "35",
  //   },
  //   {
  //     id: 5,
  //     src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  //     alt: "img5",
  //     productName: "",
  //     price: "7,213/=",
  //     discount: "3,233/=",
  //     likes: "419",
  //   },
  //   {
  //     id: 6,
  //     src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  //     alt: "img8",
  //     productName: "",
  //     price: "4,321/=",
  //     discount: "5,786/=",
  //     likes: "987",
  //   },
  //   {
  //     id: 7,
  //     src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  //     alt: "img9",
  //     productName: "",
  //     price: "2,123/=",
  //     discount: "7,433/=",
  //     likes: "154",
  //   },
  // ];
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
