import React from "react";
import Image from "next/image";
import content3 from "../../assets/images/content-3.jpg";
import content4 from "../../assets/images/content-4.jpg";
import content5 from "../../assets/images/content-5.jpg";

export default function Login() {
  
  const data = [
    {
      image: content3,
      kegiatan: "Kegiatan A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
    {
      image: content4,
      kegiatan: "Kegiatan B",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
    {
      image: content5,
      kegiatan: "Kegiatan C",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
  ];
  return (
    <>
      <div className="w-full h-fit flex items-center flex-col mt-12">
        <h1 className="text-3xl font-bold text-slate-800 mt-12">
          Gallery Sekolah
        </h1>
        <div className="w-[100px] h-[5px] rounded-full mt-6 mb-12 bg-[#381DDB]"></div>
        <div className="w-2/3 flex h-screen overflow-auto flex-col gap-10 py-4 mb-20">
          {data.map((data, i) => {
            return (
              <div className="w-full h-[400px] md:h-[250px] flex flex-col md:flex-row shadow-xl">
                <div className="w-full md:w-4/6 h-1/2 md:h-full">
                  <Image
                    src={data.image}
                    className="object-cover w-full h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                  />
                </div>
                <div className="w-full md:w-2/6 h-1/2 md:h-full bg-[#381DDB] text-slate-100 rounded-b-xl md:rounded-r-xl md:rounded-bl-none ">
                  <div className="w-full h-full p-4 md:p-8 pb-8 md:pb-0">
                    <h5 className="text-xl md:text-2xl font-semibold mb-3">
                      {data.kegiatan}
                    </h5>
                    <p className="text-xs">
                      {data.desc}
                    </p>
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
