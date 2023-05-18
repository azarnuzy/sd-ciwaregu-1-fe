import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useState } from "react";
import { AddIcon } from "@/components/Icons/AddIcon";
import axios from "axios";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function AddGuruStaff() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    jenisPTK: "",
    name: "",
    email: "",
    imageUrl: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "imageUrl") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const postData = new FormData();
      postData.append("jenisPTK", formData.jenisPTK);
      postData.append("name", formData.name);
      postData.append("email", formData.email);
      postData.append("imageUrl", formData.imageUrl);

      const { publicRuntimeConfig } = getConfig();
      const apiKey = publicRuntimeConfig.API_KEY;
      const apiUrl = publicRuntimeConfig.API_URL;

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await axios.post(`${apiUrl}/v1/teachers`, postData, {
        headers: headers,
      });
      console.log(response.data);
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className="w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-center items-center">
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">
            Tambah Guru & Staff
          </h1>
        </div>
        <div className="w-[1000px] h-fit flex justify-center items-center">
          <div
            className="w-full bg-white rounded-xl flex flex-col border-slate-900 border-2 justify-center items-center 
          shadow-xl h-full"
          >
            <div className="w-full h-full flex justify-center items-center py-16">
              <form className="w-5/6" onSubmit={handleSubmit}>
                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Jenis PTK
                  </label>
                  <input
                    type="text"
                    id="jenisPTK"
                    name="jenisPTK"
                    value={formData.jenisPTK}
                    onChange={handleChange}
                    autoComplete="jenisPTK"
                    required
                    className="my-3 w-full py-2 px-3 border border-slate-900 placeholder-black/30
              text-slate-900 rounded-sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
              shadow-md"
                    placeholder="Masukan jenis PTK"
                  />
                </div>

                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="my-3 w-full py-2 px-3 border border-slate-900 placeholder-black/30
              text-slate-900 rounded-sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
              shadow-md"
                    placeholder="Masukan nama"
                  />
                </div>
                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="my-3 w-full py-2 px-3 border border-slate-900 placeholder-black/30
              text-slate-900 rounded-sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
              shadow-md"
                    placeholder="Masukan email"
                  />
                </div>

                <div className="w-full mb-3">
                <label className="text-xl font-semibold tracking-wide">
                    Foto
                  </label>
                  <input
                    className="w-full my-3 py-2 px-3 border border-slate-900 placeholder-black/30
                    text-slate-900 rounded sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
                    shadow-md
                    "
                    onChange={handleChange}
                    id="imageUrl"
                    name="imageUrl"
                    autoComplete="imageUrl"
                    type="file"
                  />
                </div>
                <div className="w-full flex flex-row gap-2 mt-4 justify-center">
                  <button
                    type="submit"
                    className="py-2 px-4 text-sm text-white rounded-md bg-light-purple
                    flex flex-row justify-center items-center gap-2 uppercase font-semibold"
                  >
                    <AddIcon className="text-xl" />
                    Tambah
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
