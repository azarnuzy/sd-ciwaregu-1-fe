import Image from "next/image";
import React from "react";
import content1 from "../../assets/images/content-1.jpg";
function About() {
  return (
    <div className="mt-14 mb-20 px-10  max-w-7xl w-full mx-auto">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="w-1/2 gap-10 relative">
          <div className="absolute top-0 left-0">
            <Image
              src={content1}
              alt="Siswa Sedang Berbaris di Lapangan Upacara"
              className="shadow-lg rounded-2xl max-w-[470px] md:w-[50vw] w-[70vw] max-h-[500px] h-[80vh] object-cover opacity-30 z-0"
            />
          </div>
          <div className=" bg-[#22222225] max-w-[470px] max-h-[500px] h-[80vh] md:w-[50vw] w-[70vw] rounded-2xl"></div>
          <div className="absolute left-10 top-10 ">
            <Image
              src={content1}
              alt="Siswa Sedang Berbaris di Lapangan Upacara"
              className="shadow-lg rounded-2xl max-w-[470px] md:w-[50vw] w-[70vw] max-h-[500px] h-[80vh] object-cover"
            />
          </div>
          <div className="absolute z-10 left-10 top-10 bg-[#2222223a] max-w-[470px] max-h-[500px] h-[80vh] md:w-[50vw] w-[70vw] rounded-2xl"></div>
        </div>
        <div className="w-auto md:mt-0 mt-16 flex flex-col justify-center items-start md:ml-24">
          <h2 className="font-bold text-3xl mb-5 tracking-wider">
            Tentang Sekolah
          </h2>
          <p className="text-light-dark text-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste
            mollitia et sunt consequatur fuga natus maiores. Hic dolore eum aut
            ab facere incidunt doloremque, minima voluptatem dolores sunt culpa
            repudiandae consequatur ipsam harum exercitationem nemo! Autem
            cumque, quasi vitae provident odit atque fugiat? Totam commodi
            voluptatum architecto deserunt dolores!
          </p>
          <a
            href="#"
            className="flex gap-4 items-center py-4 px-6 mt-10 bg-light-purple text-white rounded-xl"
          >
            View More{" "}
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="5" y1="12" x2="19" y2="12" />{" "}
              <line x1="13" y1="18" x2="19" y2="12" />{" "}
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
