import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Banner from "../components/Banner";

function DetailRules() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section id="latar-belakang" className="min-h-screen w-screen">
          <h1 className="font-oddval text-[#4A3D8F] text-4xl flex justify-center py-8">
            Latar Belakang
          </h1>

          <div className="flex justify-center mb-3">
            <Banner className="w-[80vw] grid grid-cols-4">
          
              <div className="bg-[#ff7e00] text-yellow-100 text-center py-4 rounded-t-md col-span-4">
                <h1 className="text-4xl font-oddval tracking-wide">
                  PANDUAN TEKNIS LOMBA
                </h1>
              </div>

        
              <div className="px-8 py-6 text-white text-sm leading-relaxed space-y-6 col-span-4 text-justify">
               
                <div>
                  <h2 className="font-bold text-white">I. KETENTUAN PESERTA</h2>
                  <p>Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia</p>
                </div>

         
                <div className="mt-4">
                  <h2 className="font-bold text-white">II. PERATURAN LOMBA</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.</li>
                    <li>Karya akhir tidak boleh melebihi ukuran kanvas 30 × 40 cm.</li>
                    <li>Peserta wajib menggunakan palet warna yang disediakan panitia dalam hasil akhir karya.</li>
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

            
                <div className="mt-4">
                  <h2 className="font-bold text-white">III. KRITERIA PENILAIAN</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Kreativitas dan Orisinalitas Ide: 30%</li>
                    <li>Pengembangan Konsep: 20%</li>
                    <li>Komposisi: 20%</li>
                    <li>Kohesi Variasi Media: 20%</li>
                    <li>Kerapian: 10%</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h2 className="font-bold text-white">IV. HADIAH PEMENANG</h2>
                  <ul className="space-y-1">
                    <li><strong>Juara I:</strong> 1.000.000 + (device)</li>
                    <li><strong>Juara II:</strong> 600.000 + bundle art merk ternama (Winsor, Polychromos, Prisma, Van Gogh)</li>
                    <li><strong>Juara III:</strong> 200.000 + voucher Artemedia 200.000</li>
                    <li><strong>Juara Favorit:</strong> voucher Artemedia 200.000</li>
                  </ul>
                </div>

               
                <div className="mt-4">
                  <h2 className="font-bold text-white">V. RINCIAN LOMBA</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Lomba bersifat individu dan akan berjalan secara luring (offline) pada Sabtu, 31 Mei 2025 di GSG ITB Jatinangor.</li>
                    <li>Durasi pengerjaan: 240 menit.</li>
                    <li>Hasil akhir pengumpulan akan berupa:
                      <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Karya di atas kanvas 30 x 40 cm</li>
                        <li>Deskripsi singkat dengan format tertentu</li>
                      </ul>
                    </li>
                  </ul>
                </div>

               
                <div className="mt-4">
                  <h2 className="font-bold text-white">VI. PELAKSANAAN LOMBA</h2>

                  <p className="font-semibold">• Tahap Pendaftaran Ulang</p>
                  <p>Peserta hadir di GSG, ITB Jatinangor dan wajib melakukan pendaftaran ulang sebelum pemaparan materi dimulai.</p>

                  <p className="font-semibold mt-2">• Tahap Pengerjaan Karya</p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li><strong>Pengarahan:</strong> Materi dari dosen-dosen FSRD ITB.</li>
                    <li><strong>Persiapan:</strong> 10 menit untuk menata alat & bahan. Kanvas A3 dan kertas deskripsi disediakan panitia.</li>
                    <li><strong>Pelaksanaan:</strong> Pengerjaan karya dan deskripsi selama 240 menit.</li>
                  </ul>

                  <p className="font-semibold mt-2">• Tahap Pengumpulan Karya</p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Peserta berhenti saat waktu habis dan mengumpulkan karya.</li>
                    <li>Karya diunggah panitia ke website pameran untuk voting karya favorit.</li>
                  </ul>

                  <p className="font-semibold mt-2">• Tahap Pengumuman Pemenang</p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Pengumuman di pameran Sintesa Rupa 2025.</li>
                    <li>Pengambilan karya & feedback personal dilakukan di pameran Sintesa Rupa 2025.</li>
                  </ul>
                </div>
              </div>
            </Banner>
          </div>

          <div className="flex justify-center pb-8">
            <Link to="/panduan">
              <button className="bg-[#fc6423] text-white font-semibold px-8 py-2 rounded-md hover:bg-[#e2561a] transition">
                KEMBALI
              </button>
            </Link>
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
}

export default DetailRules;
