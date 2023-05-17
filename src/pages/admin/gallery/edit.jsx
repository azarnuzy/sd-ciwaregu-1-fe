import SocialMedia from "@/components/Navbar/SocialMedia";
import AdminLayout from "@/layouts/AdminLayout";
import React, { useState } from "react";
import { AddIcon } from "@/components/Icons/AddIcon";

export default function EditGallery() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://34.128.103.61:8000/v1/galleries`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        title,
        imageUrl,
        description,
      }).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        navigate("admin/gallery");
      });
  };

  function fetchDetailQuiz() {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/quiz/${quizId}`)
      .then((response) => response.json())
      .then((data) => {
        setDetailQuiz(data);
        setJudulQuiz(data.quizName);
        setInputValues(data.koloms);
      });
  }

  const handleInputChange = (event, index) => {
    const koloms = JSON.parse(JSON.stringify(inputValues));
    koloms[index].kolom = event.target.value;
    setInputValues(koloms);
  };

  const submitUpdateQuiz = async () => {
    await updateGallery();

    // update kolom
    const promises = inputValues.map((input) =>
      updateKolomByKolomId(input.kolomId, input.kolom)
    );
    await Promise.all(promises);

    // kembali ke tampilan awal
    setShowModalUpdate(false);
    fetchDetailQuiz();
  };

  async function updateGallery() {
    await fetch(`${process.env.API_URL}/api/quiz/${quizId}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ quizName: judulQuiz }).toString(),
    })
      .then((response) => response.json()) // parse body menjadi object JavaScript
      .then((data) => {
        console.log(data.message);
      });
  }

  async function updateKolomByKolomId(kolomId, kolom) {
    kolom = kolom.split(",").map((item) => item.trim());

    await fetch(`${process.env.REACT_APP_BASE_URL}/api/kolom/${kolomId}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ kolom }).toString(),
    })
      .then((response) => response.json()) // parse body menjadi object JavaScript
      .then((data) => {
        console.log(data.message);
      });
  }

  return (
    <>
      <SocialMedia />
      <AdminLayout>
        <div className="w-full pb-10 pt-8 px-4 h-fit flex flex-row justify-center items-center">
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">
            Edit Galeri
          </h1>
        </div>
        <div className="w-[1000px] h-fit flex justify-center items-center">
          <div
            className="w-full bg-white rounded-xl flex flex-col border-slate-900 border-2 justify-center items-center 
          shadow-xl h-full overflow-hidden"
          >
            <div className="w-full h-full flex justify-center items-center py-16">
              <form className="w-5/6" onSubmit={handleSubmit}>
                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Nama Kegiatan
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    autoComplete="title"
                    required
                    className="my-3 w-full py-2 px-3 border border-slate-900 placeholder-black/30
              text-slate-900 rounded-sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
              shadow-md"
                    placeholder="Masukan nama kegiatan"
                  />
                </div>
                <div className="w-full">
                  <label className="text-xl font-semibold tracking-wide">
                    Deskripsi Kegiatan
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    autoComplete="description"
                    required
                    className="w-full my-3 py-2 px-3 border border-slate-900 placeholder-black/30
                    text-slate-900 rounded sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
                    shadow-md"
                    placeholder="Masukan deskripsi kegiatan"
                    rows="3"
                  ></textarea>
                </div>
                <div className="w-full mb-3">
                  <label className="text-xl font-semibold tracking-wide">
                    Deskripsi Kegiatan
                  </label>

                  <input
                    class="w-full my-3 py-2 px-3 border border-slate-900 placeholder-black/30
                    text-slate-900 rounded sm focus:outline-none focus:ring-light-purple focus:border-light-purple text-md
                    shadow-md
                    "
                    id="file_input"
                    type="file"
                  />
                </div>
                <div className="w-full">
                  <textarea
                    id="imageUrl"
                    name="imageUrl"
                    value="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    autoComplete="imageUrl"
                    onChange={handleImageUrlChange}
                    required
                    className="w-full hidden"
                    rows="3"
                  ></textarea>
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
