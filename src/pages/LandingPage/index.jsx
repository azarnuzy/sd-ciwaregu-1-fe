export default function LandingPage() {
  return (
    <div>
      <div className="w-full h-fit">
        {/* navbar */}
        <div className="py-4 flex justify-between px-20 bg-black shadow-xl fixed w-full">
          <div className="font-bold italic text-xl uppercase text-white">
            sdn ciwaregu
          </div>
          <div className="flex space-x-4 text-md font-medium text-white">
            <button className="uppercase">beranda</button>
            <button className="uppercase">profil</button>
            <button className="uppercase">guru & staff</button>
            <button className="uppercase">gallery</button>
            <button className="uppercase">ppdb</button>
          </div>
        </div>
        {/* section1 */}
        <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold uppercase text-white">
              selamat datang di
            </h1>
            <h1 className="text-4xl font-bold uppercase text-orange-600 py-2">
              sdn ciwaregu
            </h1>
            <p className="w-[45%] mt-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ipsa provident consequuntur amet possimus cupiditate
              eum placeat fuga labore nihil! Ipsum laboriosam non numquam? Quam
              ullam vitae officiis quia animi!
            </p>
          </div>
        </div>
        {/* section2 */}
        <div className="w-full h-[500px] flex flex-row justify-center items-center my-20">
          <div className="w-2/5 flex justify-center items-center py-20 h-full pl-20">
            <div className="p-[200px] relative">
              <div className="p-[180px] bg-blue-200 rounded-xl shadow-xl absolute top-0 left-0"></div>
              <div className="p-[180px] bg-orange-300 rounded-xl shadow-xl absolute bottom-0 right-0"></div>
            </div>
          </div>
          <div className="w-3/5 h-full p-20 flex justify-center items-center">
            <div>
              <h4 className="text-3xl font-bold">Tentang Sekolah</h4>
              <p className="text-md text-justify my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, minus? Possimus cupiditate voluptate sapiente
                nesciunt, magni perspiciatis dignissimos at accusamus sed
                deleniti officia nobis nihil aliquid asperiores cum delectus
                repudiandae impedit beatae eveniet dicta consequatur autem minus
                nulla? Architecto obcaecati esse sint hic ipsa! Labore amet
                illum excepturi quaerat aspernatur?
              </p>
              <button
                className="py-2 px-4 bg-purple-700 text-sm rounded-md shadow-xl font-medium text-slate-100 tracking-wide
              hover:bg-purple-900 transit"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="w-full h-[200px]">
          <div className="flex flex-row justify-evenly items-center h-full">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-5xl font-bold text-orange-600 tracking-wider">
                13
              </h4>
              <p className="font-semibold mt-2 tracking-wide">Guru & Staff</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-5xl font-bold text-orange-600 tracking-wider">
                400+
              </h4>
              <p className="font-semibold mt-2 tracking-wide">Siswa</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-5xl font-bold text-orange-600 tracking-wider">
                15
              </h4>
              <p className="font-semibold mt-2 tracking-wide">Program</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-5xl font-bold text-orange-600 tracking-wider">
                10
              </h4>
              <p className="font-semibold mt-2 tracking-wide">Prestasi</p>
            </div>
          </div>
        </div>

        {/* section4 */}
        <div className="w-full h-[800px] my-16 flex flex-row">
          <div className="w-2/5 flex justify-center items-center">
            <div className="pl-20 pr-8">
              <h4 className="text-3xl font-bold">Program Sekolah</h4>
              <p className="text-md text-justify my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                libero, nemo aspernatur magnam sapiente ad aliquid illo
                voluptate quo, aliquam nisi eaque earum accusantium. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Saepe, aspernatur.
              </p>
              <button
                className="py-2 px-4 bg-purple-700 text-sm rounded-md shadow-xl font-medium text-slate-100 tracking-wide
              hover:bg-purple-900 transit"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="w-3/5 flex justify-center items-center ">
            <div className="py-[270px] px-[390px] relative ">
              <div className="absolute py-[120px] px-[220px] bg-slate-500 top-4 left-0 rounded-xl shadow-xl"></div>
              <div className="absolute py-[175px] px-[160px] bg-blue-500 -top-24 right-0 rounded-xl shadow-xl"></div>
              <div className="absolute py-[180px] px-[160px] bg-purple-500 -bottom-24 left-0 rounded-xl shadow-xl"></div>
              <div className="absolute py-[132px] px-[220px] bg-red-500 bottom-0 right-0 rounded-xl shadow-xl"></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* section5 */}
        <div className="w-full h-[500px] bg-black flex flex-row">
          <div className="w-3/5 bg-gray-400 flex justify-center items-center">
            <div className="w-[40%]">
              <h2 className="text-3xl font-bold">
                Penerimaan Peserta Didik Baru
              </h2>
              <p className="text-md my-4">
                Temukan informasi lengkap tentang proses penerimaan dan
                pesyaratan yang dibutuhkan
              </p>
              <div className="flex flex-row space-x-2">
                <button
                  className="py-2 px-4 bg-purple-700 text-sm rounded-md shadow-xl font-medium text-slate-100 tracking-wide
              hover:bg-purple-900 transit"
                >
                  Pendaftaran
                </button>
                <button
                  className="py-2 px-4 bg-purple-700 text-sm rounded-md shadow-xl font-medium text-slate-100 tracking-wide
              hover:bg-purple-900 transit"
                >
                  Tata Cara
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-100"></div>
        </div>
        {/* section6 */}
        <div className="w-full h-[600px] flex justify-center items-center">
          <div>
            <h2 className="text-2xl font-bold text-center py-10">
              Visi & Misi
            </h2>
            <div className="flex flex-row space-x-20 text-white">
              <div className="w-[300px] h-[250px]  bg-red-500 rounded-xl shadow-xl flex flex-col justify-center items-center p-4">
                <h4 className="text-2xl font-bold">Visi</h4>
                <p className="text-center text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet harum eligendi optio ducimus unde et impedit
                  laudantium. Adipisci, tempore?
                </p>
              </div>
              <div className="w-[300px] h-[250px] bg-red-500 rounded-xl shadow-xl flex flex-col justify-center items-center p-4">
                <h4 className="text-2xl font-bold">Misi</h4>
                <p className="text-center text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet harum eligendi optio ducimus unde et impedit
                  laudantium. Adipisci, tempore?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section7 */}
        <div className="w-full my-20">
          <center>scroll page</center>
        </div>

        {/* section8 */}
        <div className="w-full h-[500px] border-t border-red-600 flex flex-row">
          <div className="w-1/2 flex justify-center items-center">
            <div className="">
              <h5 className="text-xl font-semibold">SDN CIWAREGU</h5>
              <p className="text-sm my-2">Follow Us Here!</p>
              <div>
                logo
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-center py-20 pr-52">
            <div className="">
              <h5 className="text-xl font-semibold mb-6">Hubungi Kami</h5>
              <p className="text-sm">
                Kp. Ciwaregu, RT.01 / RW.7, Mekargalih, Kec, Cikalonkulon,
                Kabupaten Cianjur, Jawa Barat 43291
              </p>

              <p className="text-sm my-2">0858-6451-9008</p>

              <p className="text-sm">sd.ciwaregu@gmail.comail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
