// Ambil elemen konten utama
const serviceContent = document.getElementById("service-content");

// === DATA SEMUA SERVICE ===
const services = {
  "Hair Service": `
    <div class="group-6">
      <div class="frame-15"><div class="text-wrapper-18">Haircut (Man/Woman)</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.35k/70k</div></div>
      <div class="frame-17">
        <p class="text-wrapper-20">
          Potongan rambut lengkap untuk pria dan wanita, termasuk keramas (wash) dan pengeringan (dry), menghasilkan tampilan rapi, segar, dan siap untuk aktivitas sehari-hari maupun acara khusus.
        </p>
      </div>
    </div>
    <div class="group-7">
      <div class="frame-15"><div class="text-wrapper-18">Wash &amp; Dry (Man/Woman)</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.25k/35k</div></div>
      <div class="frame-17">
        <p class="text-wrapper-20">
          Perawatan rambut lengkap untuk pria dan wanita dengan keramas menyegarkan dan pengeringan profesional, membuat rambut bersih, wangi, halus, dan rapi tanpa perlu potong rambut.
        </p>
      </div>
    </div>
    <div class="group-8">
      <div class="frame-15"><div class="text-wrapper-18">Bang’s Trim / Fringe</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.20k</div></div>
      <div class="frame-17">
        <p class="text-wrapper-20">
          Perawatan memotong dan merapikan poni atau fringe, menjaga bentuknya tetap rapi, sesuai gaya, dan tampak segar setiap hari.
        </p>
      </div>
    </div>
    <div class="group-9">
      <div class="frame-18"><div class="text-wrapper-18">Haircut + Blow</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.80k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Potongan rambut wanita lengkap dengan keramas, pengeringan, dan styling blow, menghasilkan tampilan rapi, segar, dan bervolume siap untuk berbagai kesempatan.
        </p>
      </div>
    </div>
    <div class="group-10">
      <div class="frame-15"><p class="text-wrapper-18">Catok Curly / Blow Variasi</p></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.60k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Perawatan pengeringan rambut dengan teknik catok atau blow dryer untuk menciptakan gelombang, keriting, atau variasi gaya rambut sesuai keinginan, memberikan tampilan stylish dan bervolume.
        </p>
      </div>
    </div>
    <div class="group-11">
      <div class="frame-15"><div class="text-wrapper-18">Catok / Blow SS</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.80k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Perawatan pengeringan rambut cepat dengan teknik catok atau blow dryer, memberikan rambut halus, rapi, dan siap tampil dalam waktu singkat.
        </p>
      </div>
    </div>
    <div class="group-12">
      <div class="frame-15"><div class="text-wrapper-18">Sanggul</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.35k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Tata rambut elegan dengan teknik sanggul, cocok untuk acara formal, pesta, atau pernikahan, memberikan tampilan anggun dan rapi sepanjang acara.
        </p>
      </div>
    </div>
    <div class="group-13">
      <div class="frame-15"><div class="text-wrapper-18">Sanggul SS</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.100k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Tata rambut cepat dengan teknik sanggul singkat, memberikan tampilan rapi dan elegan dalam waktu singkat, cocok untuk acara formal atau momen spesial.
        </p>
      </div>
    </div>
    <div class="group-14">
      <div class="frame-15"><div class="text-wrapper-18">Sanggul Home Service</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.100k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Tata rambut elegan langsung di rumah dengan teknik sanggul profesional, cocok untuk pernikahan atau acara formal, memberikan tampilan rapi dan anggun tanpa perlu ke salon.
        </p>
      </div>
    </div>
    <div class="group-15">
      <div class="frame-15"><div class="text-wrapper-18">Hairdo Simple</div></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.65k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Tata rambut praktis dan rapi untuk tampilan sehari-hari atau acara santai, memberikan kesan segar dan menawan tanpa perlu penataan rumit.
        </p>
      </div>
    </div>
    <div class="group-16">
      <div class="frame-15"><p class="text-wrapper-18">Catok Lurus / Blow Natural</p></div>
      <div class="frame-16"><div class="text-wrapper-19">Rp.50k</div></div>
      <div class="frame-19">
        <p class="text-wrapper-20">
          Perawatan pengeringan dan pelurusan rambut menggunakan teknik catok atau blow dryer, menghasilkan rambut halus, lurus, dan tampak natural tanpa keriting atau kusut.
        </p>
      </div>
    </div>
  `,

  // Placeholder — nanti bisa kamu isi pakai data yang sama seperti Hair Service
  "Hair Color": `
    <div class="group-17">
        <div class="frame-15"><div class="text-wrapper-18">Colouring (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.250k/350k/400k/450k/500k</div></div>
        <div class="frame-17">
            <p class="text-wrapper-20">
            Perawatan pewarnaan rambut untuk mengganti atau menyegarkan warna rambut sesuai keinginan, 
            menciptakan tampilan segar, rapi, dan stylish.
            </p>
        </div>
        </div>
        <div class="group-18">
        <div class="frame-15"><div class="text-wrapper-18">Highlight (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.300k/400k/450k/500k/550k</div></div>
        <div class="frame-17">
            <p class="text-wrapper-20">
            Perawatan pewarnaan rambut untuk menambahkan aksen warna lebih terang pada bagian tertentu, 
            menciptakan dimensi dan tampilan yang lebih hidup serta stylish.
            </p>
        </div>
        </div>
        <div class="group-19">
        <div class="frame-15"><div class="text-wrapper-18">Black Color (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.80k/100k/150k/175k/250k</div></div>
        <div class="frame-17">
            <p class="text-wrapper-20">
            Perawatan pewarnaan rambut untuk menghasilkan warna hitam yang pekat, alami, dan tahan lama, membuat 
            rambut tampak lebih sehat dan rapi.
            </p>
        </div>
        </div>
        <div class="group-20">
        <div class="frame-18"><div class="text-wrapper-18">Fashion Color (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.60k/85k/120k/175k/250k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-20">
            Perawatan pewarnaan rambut dengan pilihan warna trendi dan modis, menciptakan tampilan segar dan stylish.
            </p>
        </div>
        </div>
        <div class="group-21">
        <div class="frame-15"><p class="text-wrapper-18">Perming (Man/Short/Medium/Long/Xtra)</p></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.160k/250k/375k/400k/450k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-20">
            Perawatan pengeritingan rambut secara menyeluruh untuk menciptakan gelombang atau keriting yang tahan 
            lama, menambah volume dan tekstur rambut.
            </p>
        </div>
        </div>
        <div class="group-22">
        <div class="frame-15"><div class="text-wrapper-18">Smoothing Biasa (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.250k/375k/450k/500k/600k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-200">
            Tata rambut elegan dengan teknik sanggul, cocok untuk acara formal, pesta, atau pernikahan, memberikan 
            tampilan anggun dan rapi sepanjang acara.
            </p>
        </div>
        </div>
        <div class="group-23">
        <div class="frame-15"><div class="text-wrapper-18">Smoothing Keratin (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.260k/450k/500k/550k/650k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-200">
            Perawatan rambut dengan teknologi keratin untuk membuat rambut lebih halus, lurus, dan mudah diatur, 
            mengurangi kusut dan frizz. 
            </p>
        </div>
        </div>
        <div class="group-24">
        <div class="frame-15"><div class="text-wrapper-18">Retouch Fashion (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.260k/450k/500k/550k/650k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-200">
            Perawatan rambut dengan teknologi keratin untuk membuat rambut lebih halus, lurus, dan mudah diatur, 
            mengurangi kusut dan frizz. 
            </p>
        </div>
        </div>
        <div class="group-25">
        <div class="frame-150"><p class="text-wrapper-18">Bang’s / Crown Perming (Short/Medium/Long/Xtra)</p></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.200k</div></div>
        <div class="frame-19">
            <p class="text-wrapper-20">
            Perawatan pengeritingan rambut khusus bagian poni atau crown untuk menambah volume, tekstur, dan gaya 
            unik, membuat rambut tampak lebih hidup dan stylish. 
            </p>
        </div>
        </div>
  `,

  "Hair Treatment": `
  <div class="group-26">
        <div class="frame-15"><div class="text-wrapper-18">Creambath (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.50k/65k/70k/75k/80k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Perawatan rambut dengan pijatan lembut dan masker nutrisi yang menenangkan, membantu melembapkan,
            menyehatkan, dan membuat rambut lebih halus serta wangi. Tersedia untuk semua panjang rambut: pendek,
            medium, panjang, dan ekstra panjang.
          </p>
        </div>
      </div>
      <div class="group-27">
        <div class="frame-15"><div class="text-wrapper-18">Hair Spa (Man/Short/Medium/Long/Xtra)</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.60k/70k/80k/85/100k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Perawatan intensif untuk menutrisi dan melembapkan rambut serta kulit kepala, mengurangi ketombe dan
            kerusakan, membuat rambut lebih sehat, halus, dan berkilau. Tersedia untuk semua panjang rambut: pendek,
            medium, panjang, dan ekstra panjang.
          </p>
        </div>
      </div>
  `,
  "Make Up": `
  <div class="group-28">
        <div class="frame-15"><div class="text-wrapper-18">Make Up Reguler</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.400k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Riasan wajah sehari-hari yang natural dan rapi, cocok untuk aktivitas santai, work from home, atau tampil
            percaya diri di berbagai kesempatan.
          </p>
        </div>
      </div>
      <div class="group-29">
        <div class="frame-15"><div class="text-wrapper-18">Make Up Akad</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.750k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Riasan khusus untuk momen akad nikah, menampilkan tampilan anggun dan natural agar mempesona di hari
            istimewa Anda.
          </p>
        </div>
      </div>
      <div class="group-30">
        <div class="frame-15"><div class="text-wrapper-18">Home Service Reguler</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.500k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Layanan make up praktis di rumah dengan hasil riasan natural dan rapi, cocok untuk acara sehari-hari atau
            momen santai tanpa perlu pergi ke salon.
          </p>
        </div>
      </div>
      <div class="group-31">
        <div class="frame-15"><div class="text-wrapper-18">Salon Jam Normal</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.350k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Layanan rias wajah profesional di salon selama jam operasional normal, memberikan tampilan cantik dan rapi
            untuk berbagai keperluan sehari-hari.
          </p>
        </div>
      </div>
      <div class="group-32">
        <div class="frame-15"><div class="text-wrapper-18">Salon Special Service</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.400k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Riasan profesional di salon untuk momen istimewa, menghasilkan tampilan yang elegan dan tahan lama, cocok
            untuk pesta, acara formal, atau perayaan penting.
          </p>
        </div>
      </div>
      <div class="group-33">
        <div class="frame-15"><div class="text-wrapper-18">Eye’s Lashing</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.35k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Perawatan eyelash extension atau penataan bulu mata untuk membuat mata tampak lebih tegas, lentik, dan
            menawan, menambah kesan dramatis dan memikat.
          </p>
        </div>
      </div>
      <div class="group-34">
        <div class="frame-15"><div class="text-wrapper-18">Brow Shaping</div></div>
        <div class="frame-16"><div class="text-wrapper-19">Rp.20k</div></div>
        <div class="frame-17">
          <p class="text-wrapper-20">
            Perawatan membentuk alis agar rapi dan simetris, menyesuaikan bentuk wajah untuk tampilan lebih tegas dan
            menawan.
          </p>
        </div>
      </div>
  `,
  "Nail Service": `
  <div class="group-35">
    <div class="frame-15"><div class="text-wrapper-18">Express Meni + Nail Polish</div></div>
    <div class="frame-16"><div class="text-wrapper-19">Rp.75k</div></div>
    <div class="frame-17">
      <p class="text-wrapper-20">
        Perawatan kuku tangan cepat dan praktis dengan pemotongan, perapihan kutikula, dan pewarnaan kuku 
        menggunakan nail polish pilihan Anda untuk tampilan rapi dan menawan.
      </p>
    </div>
  </div>

  <div class="group-36">
    <div class="frame-15"><div class="text-wrapper-18">Express Pedi + Nail Polish Glitter (Free)</div></div>
    <div class="frame-16"><div class="text-wrapper-19">Rp.100k</div></div>
    <div class="frame-17">
      <p class="text-wrapper-20">
        Perawatan kaki cepat dan praktis dengan scrub ringan, pemijatan singkat, serta pewarnaan kuku 
        menggunakan nail polish glitter untuk tampilan yang cantik dan berkilau tanpa menunggu lama.
      </p>
    </div>
  </div>

  <div class="group-37">
    <div class="frame-15"><div class="text-wrapper-18">Cat Eye / Art (Perjari)</div></div>
    <div class="frame-16"><div class="text-wrapper-19">Rp.2,5k</div></div>
    <div class="frame-17">
      <p class="text-wrapper-20">
        Hiasan kuku unik per jari dengan efek cat eye atau nail art kreatif, memberikan tampilan kuku yang 
        menarik dan stylish sesuai selera Anda.
      </p>
    </div>
  </div>

  <div class="group-38">
    <div class="frame-15"><div class="text-wrapper-18">Salon Special Service</div></div>
    <div class="frame-16"><div class="text-wrapper-19">Rp.60k</div></div>
    <div class="frame-17">
      <p class="text-wrapper-20">
        Pijat refleksi kaki yang menenangkan, dirancang untuk meredakan pegal, meningkatkan sirkulasi, dan 
        memberi relaksasi total pada tubuh melalui titik-titik refleksi di telapak kaki.
      </p>
    </div>
  </div>
`,

};

// === INTERAKSI TOMBOL SERVICE ===
document.querySelectorAll(".frame-14").forEach(item => {
  item.addEventListener("click", () => {
    const selectedService = item.textContent.trim();

    // ubah isi konten sesuai tombol yang diklik
    serviceContent.innerHTML = services[selectedService] || "<p>Data belum tersedia</p>";

    // hapus kelas aktif dari semua tombol
    document.querySelectorAll(".frame-14").forEach(btn => btn.classList.remove("active"));

    // tambahkan kelas aktif pada tombol yang diklik
    item.classList.add("active");
  });
});

// === SET DEFAULT ===
document.addEventListener("DOMContentLoaded", () => {
  const firstButton = document.querySelector(".frame-14");
  if (firstButton) {
    firstButton.classList.add("active");
    serviceContent.innerHTML = services["Hair Service"];
  }
});

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



