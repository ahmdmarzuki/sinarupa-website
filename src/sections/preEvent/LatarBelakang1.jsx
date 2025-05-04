import React from "react";
import Banner from "../../components/Banner";
import logo from "/images/logo.png";
import BannerOrange from "../../components/BannerOrange";

const LatarBelakang1 = () => {
  return (
    <div className="h-screen w-screen">
      <div className="relative w-full flex justify-center mb-13">
              <BannerOrange className="w-[40vw] flex justify-center items-center">
                <h1 className="font-oddval text-[#4A3D8F] text-5xl">Latar Belakang</h1>
              </BannerOrange>
            </div>

      <div className="flex justify-center mb-3">
        <Banner className="w-[80vw] grid grid-cols-4">
          {/* Row 1 */}
          <div className="col-span-3">
            <p className="text-justify font-host text-[#4A3D8F]">
            <b>Langkah Sapa</b> hadir sebagai titik awal dari setiap perubahan. Pengunjung diajak untuk keluar dari zona nyaman dan menyelami dunia baru yang penuh ketidakpastian dan potensi. Dengan menghadirkan lomba mixed media art, kami mengajak peserta untuk menuangkan kreativitas dan mendalami proses perpisahan dengan <b>menciptakan suatu karya yang menggambarkan perjalanan penuh perubahan.</b>
            <br />
            <br />
            Langkah Sapa mempersembahkan ruang terbuka kepada para audiens untuk membenamkan diri pada perpisahan sebagai gestur awal untuk melangkah menuju transisi pada suatu perubahan.
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
            <p className="text-justify font-host text-[#4A3D8F]">
            Tema <b>“Fragments of Change”</b> merujuk pada kondisi transisi atau peralihan yang terjadi pada seseorang ataupun sesuatu. Dalam setiap perubahan, kondisi lama akan mengalami pemisahan untuk memberi ruang bagi sesuatu yang baru dan lebih berkembang. 
            <br />
            <br />
            Maka dari itu, peserta dapat menuangkan ide dan kreativitas terkait pemisahan sebagai awal dari sebuah perubahan melalui objek, suasana, atau bentuk abstrak sesuai interpretasi masing-masing pribadi. <b>Perubahan bukanlah akhir, melainkan awal dari sesuatu yang lebih besar.</b> Melalui perpisahan, tercipta ruang bagi perkembangan yang lebih signifikan, di mana kita belajar untuk melepaskan yang lama demi menyambut yang baru.
            </p>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default LatarBelakang1;
