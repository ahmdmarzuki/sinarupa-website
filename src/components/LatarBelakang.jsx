import React from 'react'
import Banner from "./Banner";
import gif from "/images/gif.gif";
import frameoren from "/images/frameoren.png"

const LatarBelakang = () => {
  return (
    <div>
       <Banner className="w-[80vw] grid grid-cols-4 py-10 items-center">

          <div className="col-span-2">
            <p className="text-justify font-host text-[#4A3D8F] leading-loose">
            <b>Langkah Sapa</b> hadir sebagai titik awal dari setiap perubahan. Pengunjung diajak untuk keluar dari zona nyaman dan menyelami dunia baru yang penuh ketidakpastian dan potensi. Dengan menghadirkan lomba mixed media art, kami mengajak peserta untuk menuangkan kreativitas dan mendalami proses perpisahan dengan <b>menciptakan suatu karya yang menggambarkan perjalanan penuh perubahan.</b> Langkah Sapa mempersembahkan ruang terbuka kepada para pengunjung untuk membenamkan diri pada perpisahan sebagai gestur awal untuk melangkah menuju transisi pada suatu perubahan.
            </p>
          </div>

       

          <div className="col-span-2 flex justify-center items-center">
            <img src={frameoren} className="absolute w-[30vw] h-[20vw]" />
                <img src={gif} className="w-[30vw] h-[20vw]" />
          </div>
        </Banner>
      </div>
  )
}

export default LatarBelakang
