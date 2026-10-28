# Lab6Web — JavaScript DOM dan Event Handling

## Identitas Praktikum
- **Mata kuliah:** Pemrograman Web
- **Pertemuan:** 7
- **Topik:** JavaScript DOM dan Event Handling
- **Folder proyek:** `lab6_dom_event`

> Isi nama, NIM, dan kelas pada bagian ini sebelum dikumpulkan.

## Tujuan
1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Memilih elemen HTML dengan `getElementById()` dan selector DOM.
3. Mengubah teks dan kelas CSS melalui JavaScript.
4. Menangani event menggunakan `addEventListener()`.
5. Membuat validasi form dan pesan sesuai kondisi input.
6. Membuat halaman interaktif dengan beberapa fungsi yang berjalan.

## Struktur File

```text
lab6_dom_event/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — struktur halaman dan elemen interaktif.
- `style.css` — desain halaman dan tampilan responsif.
- `script.js` — manipulasi DOM, event listener, validasi, dan to-do list.
- `README.md` — dokumentasi proyek.

## Cara Menjalankan
1. Unduh atau salin folder proyek ke komputer.
2. Buka folder `lab6_dom_event` menggunakan Visual Studio Code.
3. Pastikan ketiga file utama (`index.html`, `style.css`, dan `script.js`) berada dalam folder yang sama.
4. Buka `index.html` di browser. Bisa juga menggunakan ekstensi **Live Server** di VS Code.
5. Klik tombol dan isi form untuk mencoba semua fungsi.
6. Untuk melihat pesan debug, buka Developer Tools browser (`F12`) dan pilih tab **Console**.

Tidak diperlukan instalasi package atau server khusus.

## Fitur dan Langkah Pengujian

### 1. Mengubah teks dengan DOM
JavaScript mengubah judul dan paragraf menggunakan `textContent`. Klik **Klik Saya** untuk melihat waktu saat tombol ditekan.

### 2. Mengubah kelas dan gaya CSS
Klik **Ubah Gaya** untuk menambah atau menghapus kelas `highlight` dan `teks-besar` melalui `classList.toggle()`.

### 3. Penghitung karakter
Ketik atau hapus teks di kolom nama. Jumlah karakter diperbarui secara langsung dengan event `input`.

### 4. Form pendaftaran workshop
Form memeriksa:
- Nama minimal 3 karakter.
- Format email valid.
- Usia berupa bilangan bulat antara 17 dan 100.
- Sesi workshop sudah dipilih.

Event `submit` menggunakan `preventDefault()` agar halaman tidak dimuat ulang ketika validasi dilakukan. Tombol **Reset Form** mengosongkan isian.

**Skenario pengujian yang disarankan:**
1. Semua kolom kosong — tampil pesan validasi nama.
2. Nama kurang dari 3 karakter — tampil pesan nama minimal 3 karakter.
3. Email salah, misalnya `bagas@` — tampil pesan email tidak valid.
4. Usia `16` — tampil pesan batas usia.
5. Sesi belum dipilih — tampil pesan untuk memilih sesi.
6. Isi seluruh kolom dengan data valid — tampil pesan pendaftaran berhasil.

### 5. Daftar tugas (To-do List)
Masukkan tugas lalu klik **Tambah**. Setiap tugas dapat ditandai selesai atau dihapus. Memasukkan teks kosong akan menampilkan peringatan. Tekan Enter juga dapat menambahkan tugas.

### 6. Tampilkan atau sembunyikan paragraf
Klik tombol untuk menyembunyikan atau menampilkan paragraf menggunakan kelas CSS `hidden`.

## Konsep JavaScript yang Digunakan
- `document.getElementById()`
- `textContent`
- `addEventListener()` untuk event `click`, `input`, `change`, `submit`, `reset`, dan `keydown`
- `classList.toggle()`
- `event.preventDefault()`
- `document.createElement()`, `appendChild()`, dan `remove()`
- Validasi input menggunakan kondisi `if/else` dan ekspresi reguler email

Teks tugas ditambahkan dengan `textContent`, bukan `innerHTML`, agar masukan pengguna diperlakukan sebagai teks biasa.

## Screenshot Hasil
Ambil screenshot hasil proyek dari browser, lalu simpan di folder `screenshots/`. Disarankan menyertakan:
1. Tampilan halaman utama.
2. Penghitung karakter setelah mengetik.
3. Form dengan pesan validasi tidak valid.
4. Form dengan pesan pendaftaran berhasil.
5. To-do list dengan tugas yang ditambahkan dan ditandai selesai.

Jika screenshot sudah tersedia, tambahkan gambar di bawah ini dengan format Markdown, misalnya:

```md
![Tampilan halaman utama](screenshots/halaman-utama.png)
```

## Pengumpulan ke GitHub
1. Buat repository bernama `Lab6Web`.
2. Masukkan file proyek dan README ini.
3. Tambahkan screenshot hasil pengujian.
4. Commit dan push semua file ke repository.
5. Kirim URL repository melalui e-learning/ecampus sesuai instruksi dosen.

## Referensi
- MDN Web Docs — [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- MDN Web Docs — [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- MDN Web Docs — [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
