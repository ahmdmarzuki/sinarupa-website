import React from "react";
import Banner from "../../components/Banner";
import logo from "/images/logo.png";

const LatarBelakang1 = () => {
  return (
    <div className="h-screen w-screen">
      <h1 className="font-oddval text-[#4A3D8F] text-4xl sm:text-4xl flex justify-center top-0 py-8">
        Latar Belakang
      </h1>

      <div className="flex justify-center mb-3">
        <Banner className="w-[80vw] grid grid-cols-4">
          {/* Row 1 */}
          <div className="col-span-3">
            <p className="text-justify font-host text-[#4A3D8F]">
              <strong>Langkah Sapa</strong> hadir sebagai titik awal dari setiap
              perubahan. Audiens diajak untuk keluar dari zona nyaman dan
              menyelami dunia baru yang penuh ketidakpastian dan potensi. Dengan
              menghadirkan lomba mixed media art, kami mengajak peserta untuk
              menuangkan kreativitas dan mendalami proses perpisahan dengan
              menciptakan suatu karya yang menggambarkan perjalanan penuh
              perubahan.
              <br />
              <br />
              Langkah Sapa mempersembahkan ruang terbuka kepada para audiens
              untuk membenamkan diri pada perpisahan sebagai gestur awal untuk
              melangkah menuju transisi pada suatu perubahan.
            </p>
          </div>
          <div className="flex justify-end col-span-1 items-center">
            <img src={logo} className="w-[15vw] h-[15vw] object-center" />
          </div>

          {/* Row 2 */}
          <div className="flex col-span-1 items-center">
            <img src={logo} className="w-[15vw] h-[15vw] object-center" />
          </div>
          <div className="col-span-3">
            <p className="flex text-justify font-host text-[#4A3D8F]">
              Tema “Fragments of Change” merujuk pada kondisi transisi atau
              peralihan yang terjadi pada seseorang ataupun sesuatu. Dalam
              setiap perubahan, kondisi lama akan mengalami pemisahan untuk
              memberi ruang bagi sesuatu yang baru dan lebih berkembang.
              <br />
              <br />
              Maka dari itu, peserta dapat menuangkan ide dan kreativitas
              terkait pemisahan sebagai awal dari sebuah perubahan melalui
              objek, suasana, atau bentuk abstrak sesuai interpretasi
              masing-masing pribadi. Perubahan bukanlah akhir, melainkan awal
              dari sesuatu yang lebih besar. Melalui perpisahan, tercipta ruang
              bagi perkembangan yang lebih signifikan, di mana kita belajar
              untuk melepaskan yang lama demi menyambut yang baru.
            </p>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default LatarBelakang1;
