import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AddIcon } from "@/components/Icons/AddIcon";
import axios from "axios";
import getConfig from "next/config";
import { useEffect } from "react";

export default function EditGuruStaff() {
  const router = useRouter();
  const { id } = router.query;
  const [nameGuru, setNameGuru] = useState("");
  const [emailGuru, setEmailGuru] = useState("");
  const [imageUrlGuru, setImageUrlGuru] = useState(null);
  const [jenisPTKGuru, setJenisPTKGuru] = useState("");

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

      const response = await fetch(`${apiUrl}/v1/teachers/${id}`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setJenisPTKGuru(data.data.jenisPTK);
        setNameGuru(data.data.teachersDetail.name);
        setEmailGuru(data.data.teachersDetail.email);
        setImageUrlGuru(data.data.teachersDetail.imageUrl);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleJenisPTKChange = (e) => {
    setJenisPTKGuru(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameGuru(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailGuru(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrlGuru(e.target.files[0]);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const postData = new FormData();
      postData.append("jenisPTK", jenisPTKGuru);
      postData.append("name", nameGuru);
      postData.append("email", emailGuru);
      postData.append("imageUrl", imageUrlGuru);

      console.log(process.env.API_KEY);

      const { publicRuntimeConfig } = getConfig();
      const apiKey = publicRuntimeConfig.API_KEY;
      const apiUrl = publicRuntimeConfig.API_URL;

      console.log(postData);
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await axios.put(
        `${apiUrl}/v1/teachers/${id}`,
        postData,
        {
          headers: headers,
        }
      );
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
            Edit Guru & Staff
          </h1>
        </div>
        <div className="w-[1000px] h-fit flex justify-center items-center">
          <div
            className="w-full bg-white rounded-xl flex flex-col border-slate-900 border-2 justify-center items-center 
          shadow-xl h-full"
          >
            <div className="w-full h-full flex justify-center items-center py-16">
              <form className="w-5/6" onSubmit={handleUpdate}>
                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Jenis PTK
                  </label>
                  <input
                    type="text"
                    id="jenisPTK"
                    name="jenisPTK"
                    value={jenisPTKGuru}
                    onChange={handleJenisPTKChange}
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
                    value={nameGuru}
                    onChange={handleNameChange}
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
                    value={emailGuru}
                    onChange={handleEmailChange}
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
                    onChange={handleImageUrlChange}
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
