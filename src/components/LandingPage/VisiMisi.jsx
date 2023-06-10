import React, { useEffect } from "react";

function VisiMisi() {
  return (
    <div className="w-full max-w-7xl md:px-8 mb-10 gap-10 justify-center md:mx-auto flex flex-col">
      <h2 className="font-extrabold text-center text-2xl mb-4 mt-12">
        Visi & Misi
      </h2>
      <div className="flex flex-col md:flex-row px-4 md:px-32 gap-4 md:gap-12 justify-center ">
        <div className="text-center rounded-lg bg-light-red text-white p-5">
          <h3 className=" text-xl mb-3 font-bold">Visi</h3>
          <p>
            ”Terwujudnya peserta didik yang beriman, bertaqwa kepada Tuhan Yang
            Maha Esa, berakhlak mulia, cerdas, terampil, dan sehat
            jasmani-rohani”
          </p>
        </div>
        <div className="text-center rounded-lg bg-light-red text-white p-5">
          <h3 className=" text-xl mb-3 font-bold">Misi</h3>
          <p>
            1. Memberikan dasar-dasar keimanan dan ketakwaan terhadap Tuhan Yang
            Maha Esa
          </p>
          <p>
            2. Memupuk / menumbuh kembangkan rasa cinta terhadap sesama manusia dan lingkungannya
          </p>
          <p>3. Membiasakan siswa hidup bersih</p>
          <p>4. Menerapkan sikap disiplin dan bertanggung jawab</p>
          <p>5. Mengembangkan nilai – nilai budi pekerti luhur</p>
          <p>
            6. Meningkatkan profesionalisme guru / personil</p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
