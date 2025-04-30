import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";


export default function RincianLomba1() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-yellow-100 py-10 px-4"
      >
        <div className="pt-[22vh] pb-20 flex justify-center">
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
            <div className="bg-[#543080] w-full rounded-md shadow-lg">
              <div className="bg-[#fc6423] text-purple-900 text-center py-4 rounded-t-md">
                <h1 className="text-2xl font-bold tracking-wide">
                  PANDUAN TEKNIS LOMBA
                </h1>
              </div>

              <div className="px-8 py-6 text-[#ffe6b5] text-sm leading-relaxed space-y-6">
                {/* I. KETENTUAN PESERTA */}
                <section>
                  <p className="font-bold mb-1">I. KETENTUAN PESERTA</p>
                  <p>Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia</p>
                </section>

                {/* II. PERATURAN LOMBA */}
                <section>
                  <p className="font-bold mb-2">II. PERATURAN LOMBA</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.</li>
                    <li>Karya akhir tidak boleh melebihi ukuran kanvas 30 × 40 cm.</li>
                    <li>Peserta wajib menggunakan palet warna yang disediakan panitia dalam hasil akhir karya (link pdf copal).</li>
                    <li>Referensi hanya boleh berupa satu lembar print/sketsa ukuran A4.</li>
                    <li>Peserta membawa alat dan bahan sendiri; panitia hanya menyediakan kanvas A3.</li>
                    <li>Perangkat digital harus disimpan selama lomba.</li>
                    <li>Tidak ada perpanjangan waktu bagi yang terlambat.</li>
                    <li>Karya harus orisinal dan bebas unsur pornografi/SARA.</li>
                    <li>Panitia berhak mendiskualifikasi peserta jika terjadi pelanggaran.</li>
                    <li>Pengunduran diri tidak akan mendapatkan pengembalian dana.</li>
                    <li>Keputusan panitia bersifat final dan mutlak.</li>
                  </ul>
                </section>

                {/* III. KRITERIA PENILAIAN */}
                <section>
                  <p className="font-bold mb-2">III. KRITERIA PENILAIAN</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Kreativitas dan Orisinalitas Ide: 30%</li>
                    <li>Pengembangan Konsep: 20%</li>
                    <li>Komposisi: 20%</li>
                    <li>Kohesi Variasi Media: 20%</li>
                    <li>Kerapian: 10%</li>
                  </ul>
                </section>

                {/* IV. HADIAH PEMENANG */}
                <section>
                  <p className="font-bold mb-2">IV. HADIAH PEMENANG</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Juara I : Rp1.000.000 + (device)</li>
                    <li>Juara II : Rp600.000 + bundle art (Winsor, Polychromos, Prisma, Van Gogh)</li>
                    <li>Juara III : Rp200.000 + voucher Artemedia Rp200.000</li>
                    <li>Juara Favorit : voucher Artemedia Rp200.000</li>
                  </ul>
                </section>

                {/* V. RINCIAN LOMBA */}
                <section>
                  <p className="font-bold mb-2">V. RINCIAN LOMBA</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Lomba individu, luring (offline) pada Sabtu, 31 Mei 2025</li>
                    <li>Lokasi: Gedung Serba Guna, ITB Jatinangor</li>
                    <li>Durasi: 240 menit</li>
                    <li>Hasil akhir: karya di atas kanvas 30x40 cm</li>
                    <li>Deskripsi singkat karya dengan format yang akan ditentukan panitia</li>
                  </ul>
                </section>

                {/* VI. PELAKSANAAN LOMBA */}
                <section>
                  <p className="font-bold mb-2">VI. PELAKSANAAN LOMBA</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Pendaftaran Ulang:</strong> di GSG, ITB Jatinangor</li>
                    <li><strong>Pengarahan:</strong> oleh dosen-dosen FSRD ITB</li>
                    <li><strong>Persiapan:</strong> 10 menit menata alat & bahan. Kanvas A3 & kertas deskripsi disediakan.</li>
                    <li><strong>Pengerjaan:</strong> 240 menit untuk karya & deskripsi</li>
                    <li><strong>Pengumpulan:</strong> Karya dikumpulkan dan dipamerkan di website voting</li>
                    <li><strong>Pengumuman:</strong> dilaksanakan saat pameran Sintesa Rupa 2025</li>
                    <li><strong>Pengambilan karya & feedback:</strong> juga di pameran Sintesa Rupa 2025</li>
                  </ul>
                </section>
              </div>
            </div>

            {/* Tombol Kembali */}
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
