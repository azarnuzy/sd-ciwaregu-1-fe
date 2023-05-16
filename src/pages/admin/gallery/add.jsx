import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React from "react";
import Image from "next/image";
import content3 from "@/assets/images/content-3.jpg";
import content4 from "@/assets/images/content-4.jpg";
import content5 from "@/assets/images/content-5.jpg";

export function IconoirPlus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 12h6m6 0h-6m0 0V6m0 6v6"
      ></path>
    </svg>
  );
}

function AddGallery() {

  const data_gallery = [
    {
      id: 1,
      image: content3,
      kegiatan: "Kegiatan A",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
    {
      id: 2,
      image: content4,
      kegiatan: "Kegiatan B",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
    {
      id: 3,
      image: content5,
      kegiatan: "Kegiatan C",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis eos quos consequuntur voluptates. Maiores tempora amet impedit quae consequuntur!",
    },
  ];
  
  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className="w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-center items-center">
          <h1 className="text-3xl font-bold">Add Gallery</h1>
        </div>
        <div className="w-[1000px] h-fit flex justify-center items-center">
            <div className="w-full bg-slate-200 rounded-2xl flex flex-col justify-center items-center shadow-xl h-full">
            <div className="w-full h-full flex justify-center items-center py-16">
                <form className="w-5/6">
                  <div className="w-full">
                    <h6 className="text-lg tracking-wider mb-1">
                      Nama Kegiatan
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
                    <h6 className="text-lg tracking-wider mb-1">
                      Alamat
                    </h6>
                    <textarea name="" id="alamat" className="w-full" rows="3"></textarea>
                  </div>

                  <div className="w-full my-2">
                    <h6 className="text-lg tracking-wider mb-1">
                      Upload Foto
                    </h6>
                    <input
                      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                      id="file_input"
                      type="file"
                    />
                  </div>
                  <div className="w-full flex flex-row gap-2 mt-4 justify-center">
                    <button type="submit" className="py-1 px-6 text-xl text-white rounded-md bg-light-purple">
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
            </div> 
        </div>
      </AdminLayout>
    </>
  );
}

export default AddGallery;
