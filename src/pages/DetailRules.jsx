import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function DetailRules() {
  return (
    <PageWrapper>
      <motion.div
        className="min-h-screen bg-yellow-100 py-10 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/07.png')" }}
      >
        <div className="min-h-screen pt-[22vh] pb-20 px-4 flex justify-center">
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
            {/* Box konten */}
            <div className="bg-[#D9D9D9] w-full rounded-md shadow-lg">
              {/* Header */}
              <div className="bg-[#595959] text-white text-center py-4 rounded-t-md">
                <h1 className="text-2xl font-bold tracking-wide">DETAILED RULES</h1>
              </div>

              {/* Isi aturan */}
              <div className="px-8 py-6 text-[#1E1E1E] text-sm leading-relaxed">
                <p className="font-bold mb-1">I. KETENTUAN PESERTA</p>
                <p className="mb-4">Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia</p>

                <p className="font-bold mb-2">II. PERATURAN LOMBA</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.</li>
                  <li>Karya akhir tidak boleh melebihi ukuran kanvas 30 × 40 cm.</li>
                  <li>Peserta wajib menggunakan palet warna yang disediakan panitia dalam hasil akhir karya (link pdf copal).</li>
                  <li>Peserta hanya diperkenankan melihat referensi berupa print out atau sketsa dalam satu lembar kertas A4 saat lomba berlangsung.</li>
                  <li>Peserta bertanggung jawab atas alat dan bahan pribadi, panitia hanya menyediakan kanvas A3.</li>
                  <li>Peserta harus menyimpan perangkat digital di dalam tas masing-masing selama lomba.</li>
                  <li>Tidak ada perpanjangan waktu bagi peserta yang terlambat.</li>
                  <li>Karya akhir harus bersifat orisinal dan tidak mengandung unsur pornografi atau SARA.</li>
                  <li>Panitia berhak mendiskualifikasi peserta jika terjadi pelanggaran atau kecurangan.</li>
                  <li>Jika peserta mengundurkan diri, dana tidak akan dikembalikan.</li>
                  <li>Keputusan panitia bersifat final dan tidak dapat diganggu gugat.</li>
                </ul>
              </div>
            </div>

            {/* Tombol kembali */}
            <Link to="/">
              <button className="bg-[#4A3D8F] text-white font-semibold px-8 py-2 rounded-md hover:bg-[#3a2f6b] transition">
                KEMBALI
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
