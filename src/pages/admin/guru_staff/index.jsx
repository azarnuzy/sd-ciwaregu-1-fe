import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AddIcon } from "@/components/Icons/AddIcon";
import { EditIcon } from "@/components/Icons/EditIcon";
import { DeleteIcon } from "@/components/Icons/DeleteIcon";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function IndexGuruStaff() {
    const router = useRouter();
  const [guruStaffData, setGuruStaffData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { publicRuntimeConfig } = getConfig();
      const apiUrl = publicRuntimeConfig.API_URL;
      const apiKey = publicRuntimeConfig.API_KEY;

      const headers = {
        Authorization: `Bearer ${apiKey}`,
      };
      console.log(apiKey);

      const response = await fetch(`${apiUrl}/v1/teachers/${id}`, {
        method: "DELETE",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.reload()
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchData = async () => {
    try {
      const { publicRuntimeConfig } = getConfig();
      const apiUrl = publicRuntimeConfig.API_URL;
      const apiKey = publicRuntimeConfig.API_KEY;

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await fetch(`${apiUrl}/v1/teachers`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setGuruStaffData(data.data);
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
          <h1 className="text-3xl font-bold">List Guru & Staff</h1>

          <a
            href="/admin/guru_staff/add"
            className="py-2 px-4 flex flex-row justify-center items-center bg-origin-blue hover:bg-[#1c0081] rounded-sm text-slate-100"
          >
            <div className="mr-2 cursor-pointer">Tambah Baru</div>
            <AddIcon />
          </a>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Foto
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Jenis PTK
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Email
                </th>

                <th className="px-6 py-3 bg-gray-200">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {guruStaffData.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="w-[150px] px-6 py-4 whitespace-nowrap">
                    <Image
                      src={item.teachersDetail.imageUrl}
                      className="object-cover rounded"
                      alt={`${item.title}`}
                      width={70}
                      height={70}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {item.teachersDetail.name}
                  </td>
                  <td className="px-6 py-4 w-[100px] whitespace-nowrap text-sm">
                    {item.jenisPTK}
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap text-sm">
                    {item.teachersDetail.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex flex-row gap-2 justify-center items-center">
                    <Link
                      href={`/admin/guru_staff/edit?id=${item.id}`}
                      className="text-slate-100 py-1 px-3 rounded-md text-slate-70 text-xs bg-blue-900
                    flex flex-row justify-center items-center gap-1"
                    >
                      <EditIcon />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-slate-100 py-1 px-3 rounded-md text-slate-70 text-xs bg-red-600
                      flex flex-row justify-center items-center gap-1"
                    >
                      <DeleteIcon />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
}
