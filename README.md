# Imam Teguh - Visual Designer & Video Editor Portfolio

Website portofolio interaktif dan modern untuk **Imam Teguh**, mencakup 4 pilar kreatif utama:
1. **Graphic Design** (Brand Identity, Posters, Packaging)
2. **Social Media Post** (Instagram Educational Carousels, 9-Grid Aesthetic, LinkedIn Infographics)
3. **Video Editing** (Talking Head & 2D Motion Graphics)
4. **Document Layout** (Corporate Annual Reports, E-Books, Investor Pitch Decks)

---

## 🚀 Fitur Utama

- **Interactive Portfolio Filter**: Filter instan berdasarkan kategori (*All, Graphic Design, Social Media, Video Editing, Talking Head, Motion Graphics, Document Layout*).
- **Interactive Case Study Modal**:
  - **Video Player Simulator**: Play/pause, scrub bar, animated sound wave, format quality badge.
  - **Social Carousel Swipe Viewer**: Navigasi slide 1 hingga 5 dengan slide counter dan dynamic dot indicators.
  - **Document Layout Inspection**: Preview spread editorial 2 halaman dengan catatan prepress dan tombol download sample PDF.
- **Dark & Light Mode**: Switch tema dengan penyimpanan state di `localStorage`.
- **Software Mastery Matrix**: Progress bar animasi untuk Adobe Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Illustrator, InDesign, Figma, dan Canva.
- **Responsive & Mobile Ready**: Menggunakan Glassmorphism modern dan layout fleksibel untuk semua perangkat.
- **Vercel Ready**: Konfigurasi `vercel.json` sudah terpasang untuk optimasi deployment.

---

## 📁 Struktur Direktori

```
imam-teguh-portfolio/
├── index.html              # Halaman utama portofolio
├── css/
│   └── style.css           # Styling lengkap (CSS variables, animations, glassmorphism)
├── js/
│   ├── portfolio-data.js   # Dataset karya, testimonial, skills, dan profil
│   └── main.js             # Logic interaktif, modal, theme switch, form handling
├── assets/                 # Folder aset tambahan
├── vercel.json             # Konfigurasi deployment Vercel
├── .gitignore              # Git ignore file
└── README.md               # Dokumentasi proyek
```

---

## 🛠️ Cara Menjalankan Secara Lokal

Buka file `index.html` langsung di browser Anda, atau jalankan local server:

```bash
# Menggunakan Ruby built-in server (macOS):
ruby -run -e httpd . -p 8080

# Atau menggunakan Python jika tersedia:
python3 -m http.server 8080

# Atau menggunakan npx serve jika Node.js terpasang:
npx serve .
```

Akses di browser: `http://localhost:8080`

---

## 🌐 Panduan Deploy ke GitHub & Vercel

### Langkah 1: Push ke GitHub
1. Pastikan Git sudah aktif di komputer Anda.
2. Inisialisasi repository dan push:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit Imam Teguh portfolio"
   git branch -M main
   git remote add origin https://github.com/<USERNAME-GITHUB-ANDA>/<NAMA-REPO>.git
   git push -u origin main
   ```

### Langkah 2: Deploy ke Vercel
1. Kunjungi [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik **Add New...** > **Project**.
3. Pilih repository GitHub portofolio yang baru saja Anda push.
4. Klik **Deploy**. Website portofolio Anda langsung aktif secara global dalam hitungan detik!
