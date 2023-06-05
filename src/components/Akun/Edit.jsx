import React, { useState } from "react";
import Image from "next/image";
import Datepicker from "react-tailwindcss-datepicker";
import content4 from "../../assets/images/content-4.jpg";

export default function Edit() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const data_profile = {
    username: "dodo maulana",
    email: "dodo@gmail.com",
    alamat: "Jl. Siliwangi No. 04",
    tanggal_lahir: "29 Desember 2017",
  };
  return (
    <>
      <div className="w-full h-fit flex items-center flex-col mt-12 light">
        <h1 className="text-3xl font-bold text-slate-800 mt-12">Edit Akun</h1>
        <div className="w-[100px] h-[5px] rounded-full mt-6 mb-12 bg-[#381DDB]"></div>
        <div className="w-full h-fit my-12 flex justify-center items-center">
          <div className="w-4/5 h-[600px] bg-white rounded-xl shadow-xl flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-full flex justify-center md:justify-end items-center">
              <div className="w-[150px] md:w-[250px] h-[150px] md:h-[250px] m-8 md:m-0 rounded-full bg-slate-200 shadow-xl">
                <Image
                  src={content4}
                  alt="foto profile"
                  className="object-cover w-full h-full rounded-full"
                ></Image>
              </div>
            </div>
            <div className="w-3/5 h-full">
              <div className="w-full h-full flex justify-center items-center">
                <form className="w-5/6">
                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Username
                    </h6>
                    <input
                      type="text"
                      autoComplete="none"
                      required
                      className="block w-full py-1 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm"
                      placeholder="Masukan username"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Email
                    </h6>
                    <input
                      type="email"
                      autoComplete="none"
                      required
                      className="block w-full py-1 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm"
                      placeholder="Masukan email"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Password
                    </h6>
                    <input
                      type="password"
                      autoComplete="none"
                      required
                      className="block w-full py-1 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm"
                      placeholder="Masukan password"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Konfirmasi Password
                    </h6>
                    <input
                      type="password"
                      autoComplete="none"
                      required
                      className="block w-full py-1 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm"
                      placeholder="Konfirmasi password"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Alamat
                    </h6>
                    <textarea name="" id="alamat" cols="50" rows="3"></textarea>
                  </div>

                  <div className="w-full">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Tanggal Lahir
                    </h6>
                    <input
                      type="date"
                      autoComplete="none"
                      required
                      className="block w-full py-1 px-3 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-md mb-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10sm text-sm"
                    />
                  </div>

                  <div className="w-full my-2">
                    <h6 className="text-xs font-semibold tracking-wider mb-1">
                      Foto profile
                    </h6>

                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      id="file_input"
                      type="file"
                    />
                  </div>
                  <div className="w-full flex flex-row gap-2 mt-4">
                    <button className="py-1 px-6 text-sm text-white rounded-md bg-light-purple">
                      Simpan
                    </button>
                    <button className="py-1 px-6 text-sm rounded-md border border-black  bg-white">
                      kembali
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
