import React from "react";
import Image from "next/image";
import content3 from "../../assets/images/content-3.jpg";
import content4 from "../../assets/images/content-4.jpg";
import content5 from "../../assets/images/content-5.jpg";

export default function Informasi() {
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

  const data_profile = {
    username: "dodo maulana",
    email: "dodo@gmail.com",
    alamat: "Jl. Siliwangi No. 04",
    tanggal_lahir: "29 Desember 2017",
  };
  return (
    <>
      <div className="w-full h-fit flex items-center flex-col mt-12">
        <h1 className="text-3xl font-bold text-slate-800 mt-12">
          Informasi Akun
        </h1>
        <div className="w-[100px] h-[5px] rounded-full mt-6 mb-12 bg-[#381DDB]"></div>
        <div className="w-full h-fit my-12 flex justify-center items-center">
          <div className="w-4/5 h-[500px] bg-white rounded-xl shadow-xl flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-full flex justify-center md:justify-end items-center">
              <div className="w-[150px] md:w-[250px] h-[150px] md:h-[250px] m-8 md:m-0 rounded-full bg-slate-200 shadow-xl">
                <Image
                  src={content4}
                  alt="foto profile"
                  className="object-cover w-full h-full rounded-full"
                ></Image>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex justify-center items-center">
              <div className="w-full md:w-4/5 h-full md:h-4/5  flex justify-center items-center flex-col">
                <div className="w-2/3 mb-2 flex justify-start flex-col items-start">
                  <h5 className="font-bold mb-1 text-normal md:text-xl tracking-wide">
                    Username:{" "}
                  </h5>
                  <p className="text-xs md:text-normal">{data_profile.username}</p>
                </div>

                <div className="w-2/3 mb-2 flex justify-start flex-col items-start">
                  <h5 className="font-bold mb-1 text-normal md:text-xl tracking-wide">
                    Email:{" "}
                  </h5>
                  <p className="text-xs md:text-normal">{data_profile.email}</p>
                </div>

                <div className="w-2/3 mb-2 flex justify-start flex-col items-start">
                  <h5 className="font-bold mb-1 text-normal md:text-xl tracking-wide">
                    Alamat:{" "}
                  </h5>
                  <p className="text-xs md:text-normal">{data_profile.alamat}</p>
                </div>

                <div className="w-2/3 mb-2 flex justify-start flex-col items-start">
                  <h5 className="font-bold mb-1 text-normal md:text-xl tracking-wide">
                    Tanggal Lahir:{" "}
                  </h5>
                  <p className="text-xs md:text-normal">{data_profile.tanggal_lahir}</p>
                </div>
                <div className="w-2/3 mb-6 md:mb-2 mt-2 flex justify-start flex-col items-start">
                  <button className="bg-[#381DDB] py-1 md:py-2 px-4 md:px-6 text-xs rounded-xl shadow-xl text-slate-100">Edit profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
