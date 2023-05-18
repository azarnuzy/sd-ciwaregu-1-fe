import React, { useState, useEffect } from "react";
import Image from "next/image";
import getConfig from "next/config";
import content3 from "../../assets/images/content-3.jpg";
import content4 from "../../assets/images/content-4.jpg";
import content5 from "../../assets/images/content-5.jpg";

export default function Index() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { publicRuntimeConfig } = getConfig();
      const apiUrl = publicRuntimeConfig.API_URL;
      const apiKey = publicRuntimeConfig.API_KEY;

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await fetch(`${apiUrl}/v1/galleries`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setGalleryData(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="w-full h-fit flex items-center flex-col mt-12">
        <h1 className="text-3xl font-bold text-slate-800 mt-12">
          Galeri Sekolah
        </h1>
        <div className="w-[100px] h-[5px] rounded-full mt-6 mb-12 bg-[#381DDB]"></div>
        <div className="w-2/3 flex h-screen overflow-auto flex-col gap-10 py-4 mb-20">
          {galleryData.map((item) => {
            return (
              <div
                className="w-full h-[400px] md:h-[250px] flex flex-col md:flex-row shadow-xl"
                key={item.id}
              >
                <div className="w-full md:w-4/6 h-1/2 md:h-full">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title}`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                  />
                </div>
                <div className="w-full md:w-2/6 h-1/2 md:h-full bg-[#381DDB] text-slate-100 rounded-b-xl md:rounded-r-xl md:rounded-bl-none ">
                  <div className="w-full h-full p-4 md:p-8 pb-8 md:pb-0">
                    <h5 className="text-xl md:text-2xl font-semibold mb-3">
                      {item.title}
                    </h5>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
}
