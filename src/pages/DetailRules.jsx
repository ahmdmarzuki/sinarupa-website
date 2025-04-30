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
            {/* Box */}
            <div className="bg-[#543080] w-full rounded-md shadow-lg">
              {/* Header */}
              <div className="bg-[#fc6423] text-purple-900 text-center py-4 rounded-t-md">
                <h1 className="text-2xl font-bold tracking-wide">PANDUAN TEKNIS LOMBA</h1>
              </div>

              {/* Rules */}
              <div className="px-8 py-6 text-[#ffe6b5] text-sm leading-relaxed">
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

                <p className="font-bold mb-2">III. KRITERIA PENILAIAN</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Kreativitas dan Orisinalitas Ide: 30%</li>
                  <li>Pengembangan Konsep: 20%</li>
                  <li>Komposisi: 20%</li>
                  <li>Kohesi Variasi Media: 20%</li>
                  <li>Kerapian: 10%</li>
                </ul>

                <p className="font-bold mb-2">IV. HADIAH PEMENANG</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Juara I : 1.000.000 + (device)</li>
                  <li>Juara II : 600.000 + (bundle art merk ternama package (winsor, polychromos, prisma, van gogh))</li>
                  <li>Juara III : 200.000 + voucher artemedia 200.000</li>
                  <li>Juara Favorit : voucher artemedia 200.000</li>
                </ul>

                <p className="font-bold mb-2">V. RINCIAN LOMBA</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pelaksanaan lomba bersifat individu dan akan berjalan secara luring (offline) pada Sabtu, 31 Mei 2025 di Gedung Serba Guna, ITB Jatinangor, Jl. Let. Jen. Purn. Dr. (HC) Mashudi No. 1 Jatinangor, Kab. Sumedang, Jawa Barat.</li>
                  <li>Durasi Pengerjaan Karya: 240 menit.</li>
                  <li>Hasil akhir pengumpulan akan berupa:</li>
                  <li>Karya di atas kanvas 30 x 40 cm.</li>
                  <li>Deskripsi singkat dengan format sebagai berikut.</li>
                </ul>

                <p className="font-bold mb-2">VI. PELAKSANAAN LOMBA</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tahap Pendaftaran Ulang</li>
                  <li>Peserta hadir di GSG, ITB Jatinangor dan wajib melakukan pendaftaran ulang sebelum pemaparan materi dimulai.</li>
                  <li>Tahap Pengerjaan Karya</li>
                  <li>Pengarahan: Peserta diberikan pemaparan materi oleh dosen-dosen FSRD ITB selaku tim penilai.</li>
                  <li>Persiapan: Peserta memiliki 10 menit untuk menata ataupun mempersiapkan alat dan bahan yang telah dibawa oleh pribadi untuk pelaksanaan lomba. Kanvas A3 dan kertas deskripsi karya akan difasilitasi oleh pihak panitia dan disediakan di lapak tiap peserta pada hari pelaksanaan lomba.</li>
                  <li>Pelaksanaan: Pengerjaan karya dan deskripsinya dilakukan selama 240 menit.</li>
                  <li>Tahap Pengumpulan Karya</li>
                  <li>Ketika waktu pengerjaan sudah habis, peserta harus berhenti mengerjakan karya dan mengumpulkannya ke tempat yang telah ditentukan panitia.</li>
                  <li>Karya peserta akan di-input oleh panitia ke dalam website pameran yang dapat diakses oleh khalayak umum untuk pelaksanaan voting karya favorit.</li>
                  <li>Tahap Pengumuman Pemenang</li>
                  <li>Pengumuman dan penghargaan pemenang lomba akan dilaksanakan pada pameran Sintesa Rupa 2025.</li>
                  <li>Pengambilan karya beserta feedback personal untuk tiap peserta akan diadakan pada pameran Sintesa Rupa 2025.</li>
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
