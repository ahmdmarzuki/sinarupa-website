import React from 'react'
import Banner from "./Banner";
import gif from "/images/gif.gif";
import frameoren from "/images/frameoren.png";


const LatarBelakangMobile = () => {
  return (
    <div>
       <Banner className="w-[80vw] grid grid-cols-1 py-10 items-center">
        <div className="col-span-1 flex justify-center items-center mb-15">
                <img src={frameoren} className="absolute w-[60vw] h-[50vw] object-cover" />
                    <img src={gif} className="w-[60vw] h-[50vw] object-cover" />
        </div>

          <div className="col-span-1">
            <p className="text-justify font-host text-[#4A3D8F] leading-loose">
            <b>Langkah Sapa</b> hadir sebagai titik awal dari setiap perubahan. Pengunjung diajak untuk keluar dari zona nyaman dan menyelami dunia baru yang penuh ketidakpastian dan potensi. Dengan menghadirkan lomba mixed media art, kami mengajak peserta untuk menuangkan kreativitas dan mendalami proses perpisahan dengan <b>menciptakan suatu karya yang menggambarkan perjalanan penuh perubahan.</b> Langkah Sapa mempersembahkan ruang terbuka kepada para pengunjung untuk membenamkan diri pada perpisahan sebagai gestur awal untuk melangkah menuju transisi pada suatu perubahan.
            </p>
          </div>
          
        </Banner>
      </div>
  )
}

export default LatarBelakangMobile
