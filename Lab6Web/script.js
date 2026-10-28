// 1. Manipulasi teks DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString("id-ID");
});

// 2. Mengubah class CSS dengan classList.toggle()
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// 3. Penghitung karakter secara langsung
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// 4. Event change untuk sesi workshop
const sesi = document.getElementById("sesi");
const sesiTerpilih = document.getElementById("sesiTerpilih");

sesi.addEventListener("change", function () {
  sesiTerpilih.textContent = sesi.value
    ? "Sesi yang dipilih: " + sesi.value
    : "Sesi belum dipilih.";
});

// Validasi form pendaftaran workshop
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const sesiDipilih = sesi.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  pesanForm.className = "notice";

  if (nama.length < 3) {
    tampilkanPesanForm("Nama wajib diisi dan minimal 3 karakter.", false);
  } else if (!polaEmail.test(email)) {
    tampilkanPesanForm("Masukkan alamat email yang valid.", false);
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    tampilkanPesanForm("Usia harus berupa bilangan bulat 17–100.", false);
  } else if (sesiDipilih === "") {
    tampilkanPesanForm("Silakan pilih sesi workshop.", false);
  } else {
    tampilkanPesanForm(
      "Pendaftaran berhasil! Terima kasih, " + nama + ". Sesi: " + sesiDipilih + ".",
      true
    );
  }
});

function tampilkanPesanForm(teks, berhasil) {
  pesanForm.textContent = teks;
  pesanForm.classList.add(berhasil ? "success" : "error");
}

form.addEventListener("reset", function () {
  pesanForm.textContent = "";
  pesanForm.className = "notice";
  sesiTerpilih.textContent = "Sesi belum dipilih.";
});

// 5. To-do list: tambah, tandai selesai, dan hapus tugas
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

function tambahItemTugas() {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const aksi = document.createElement("div");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button");

  label.textContent = teks;
  aksi.className = "task-actions";

  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "delete-button";
  hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas dihapus.";
  });

  aksi.append(selesai, hapus);
  item.append(label, aksi);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.textContent = "Tugas berhasil ditambahkan.";
  inputTugas.focus();
}

tambahTugas.addEventListener("click", tambahItemTugas);
inputTugas.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    tambahItemTugas();
  }
});

// 6. Tampilkan atau sembunyikan paragraf
const paragrafToggle = document.getElementById("paragrafToggle");
const tombolToggle = document.getElementById("tombolToggle");

tombolToggle.addEventListener("click", function () {
  paragrafToggle.classList.toggle("hidden");
  tombolToggle.textContent = paragrafToggle.classList.contains("hidden")
    ? "Tampilkan Paragraf"
    : "Sembunyikan Paragraf";
});
