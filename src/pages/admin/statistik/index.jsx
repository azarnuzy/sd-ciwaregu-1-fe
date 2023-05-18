import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { EditIcon } from "@/components/Icons/EditIcon";
import getConfig from "next/config";
import { PeopleIcon } from "@/components/Icons/PeopleIcon";
import { StudentIcon } from "@/components/Icons/StudentIcon";
import { ActivityIcon } from "@/components/Icons/ActivityIcon";
import { PrestasiIcon } from "@/components/Icons/PrestasiIcon"; 


export default function IndexStatistik() {
  const [stats, setStats] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

      const response = await fetch(`${apiUrl}/v1/stats`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setStats(data.data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className="w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Statistik</h1>

          <a
            href="/admin/gallery/add"
            className="py-2 px-4 flex flex-row justify-center items-center bg-origin-blue hover:bg-[#1c0081] rounded-sm text-slate-100"
          >
            <div className="mr-2 cursor-pointer">edit</div>
            <EditIcon />
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl">
            <div className="w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100">
              <PeopleIcon />
            </div>
            <div className="w-3/6 h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-light-purple">{stats.teacherCount}</h2>
              <p className="text-xs text-center uppercase font-slate-500 font-semibold mt-1">
                Guru & Staff
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl">
            <div className="w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100">
              <StudentIcon />
            </div>
            <div className="w-3/6 h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-light-purple">{stats.studentCount}</h2>
              <p className="text-xs text-center uppercase font-slate-500 font-semibold mt-1">
                Siswa
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl">
            <div className="w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100">
                <ActivityIcon/>
            </div>
            <div className="w-3/6 h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-light-purple">{stats.programCount}</h2>
              <p className="text-xs text-center uppercase font-slate-500 font-semibold mt-1">
                Program Sekolah
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] rounded-xl flex justify-center items-center flex-row border-2 border-slate-900 shadow-xl">
            <div className="w-3/6 h-full bg-light-purple rounded-lg flex justify-center items-center text-6xl text-slate-100">
                <PrestasiIcon/>
            </div>
            <div className="w-3/6 h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-light-purple">{stats.awardCount}</h2>
              <p className="text-xs text-center uppercase font-slate-500 font-semibold mt-1">
                Prestasi
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
