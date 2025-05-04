import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Banner from "../components/Banner";
import BannerOrange from "../components/BannerOrange";

function DetailRules() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="min-h-screen w-screen">
          <div className="relative w-full flex justify-center mt-10 mb-8">
            <BannerOrange className="w-[50vw] flex justify-center items-center py-4">
              <h1 className="font-oddval text-[#4A3D8F] text-5xl">
                PANDUAN TEKNIS LOMBA
              </h1>
            </BannerOrange>
          </div>

          <div className="flex justify-center">
            <Banner className="w-[80vw]">
              <div className="text-[#4A3D8F] text-justify text-lg space-y-6">

                <section className="mt-6">
                  <h3 className="font-bold text-xl">I. KETENTUAN PESERTA</h3>
                  <p>Lomba terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia.</p>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">II. KETENTUAN KARYA</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Karya mengangkat teknik <strong>Visual Abstrak</strong>.</li>
                    <li>Peserta wajib memanfaatkan kanvas 30 x 30 cm, kertas A4 dan medium lembaran yang telah disediakan oleh pihak panitia.</li>
                    <li>Peserta wajib menggunakan media campuran dengan pilihan media terbatas yang ditentukan panitia. Panitia tidak menyediakan media atau alat menggambar/lukis dalam bentuk apa pun selain kanvas.</li>
                    <li>Karya akhir tidak boleh melebihi dimensi <strong>30 cm x 30 cm x 1 cm</strong> di atas kanvas.</li>
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">III. PERATURAN LOMBA</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.</li>
                    <li>Peserta hanya diperkenankan melihat referensi berupa <em>print-out</em> atau sketsa dalam satu lembar kertas A4 saat lomba berlangsung.</li>
                    <li>Peserta bertanggung jawab atas alat dan bahan pribadi.</li>
                    <li>Peserta harus menyimpan perangkat digital di dalam tas masing-masing selama lomba.</li>
                    <li>Tidak ada perpanjangan waktu bagi peserta yang terlambat.</li>
                    <li>Karya akhir harus bersifat orisinal dan tidak mengandung unsur pornografi atau SARA.</li>
                    <li>Panitia berhak mendiskualifikasi peserta jika terjadi pelanggaran atau kecurangan.</li>
                    <li>Jika peserta mengundurkan diri, dana tidak akan dikembalikan.</li>
                    <li>Keputusan panitia bersifat <strong>final</strong> dan tidak dapat diganggu gugat.</li>
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">IV. KRITERIA PENILAIAN</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tema</li>
                    <li>Orisinalitas</li>
                    <li>Kerapihan</li>
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">V. HADIAH PEMENANG</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Juara I: Rp. 800.000</li>
                    <li>Juara II: Rp. 600.000</li>
                    <li>Juara III: Rp. 400.000</li>
                    <li>Juara Favorit: Rp. 200.000</li>
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">VI. RINCIAN LOMBA</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Pelaksanaan lomba bersifat individu dan akan berjalan secara luring (<em>offline</em>) pada Sabtu, 31 Mei 2025 di Gedung Serba Guna, ITB Jatinangor, Jl. Let. Jen. Purn. Dr. (HC) Mashudi No. 1 Jatinangor, Kab. Sumedang, Jawa Barat.
                    </li>
                    <li>Durasi pengerjaan: 240 menit.</li>
                    <li>
                      Hasil akhir pengumpulan akan berupa:
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Karya di atas kanvas 30 x 30 cm</li>
                        <li>Judul karya yang disertai deskripsi singkat</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="font-bold text-xl">VII. BATASAN OPSI MEDIA</h3>

                  <div className="pl-6 space-y-4">
                    <p>Peserta diwajibkan untuk membawa alat dan bahan pribadi yang mendukung pelaksanaan lomba. Guna mempermudah pelaksanaan, rincian dari media serta teknik yang diperbolehkan adalah sebagai berikut:</p>

                    <p>Peserta diwajibkan menggunakan minimal satu media dari tiap kategori media yang dipaparkan.</p>

                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Media A:</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>Cat akrilik</li>
                          <li>Cat poster</li>
                          <li><em>Oil pastel</em></li>
                          <li>Pilox</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Media B (lembaran):</strong>
                        <ul className="list-disc list-inside ml-6">
                          <li>Plastik</li>
                          <li>Kertas tekstur</li>
                          <li>Kain perca</li>
                          <li>Kardus</li>
                          <li>Koran</li>
                          <li>Majalah</li>
                          <li>Kemasan makanan</li>
                        </ul>
                      </li>
                    </ul>

                    <p className="mt-2">
                      Teknik yang <strong>diperbolehkan</strong> untuk <strong>dilakukan pada media</strong> yang dipilih dalam pelaksanaan lomba adalah <strong>digunting, dilipat, dicat, dilem, dan dijahit</strong>. Sehingga peserta juga diwajibkan untuk membawa mandiri alat untuk mendukung pembuatan karya tergantung media yang digunakan, contoh: gunting, <em>cutter</em>, kuas, palet cat, kain lap, jarum, benang, dll.
                    </p>
                  </div>
                </section>

              </div>
            </Banner>
          </div>

          <div className="flex justify-center pb-8 mt-6">
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