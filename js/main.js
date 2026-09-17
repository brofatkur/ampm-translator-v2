/**
 * AMPM Sworn Translator - Penerjemah Tersumpah Belanda
 * High-Conversion Interactions & Realtime Social Proof
 */

document.addEventListener('DOMContentLoaded', () => {
  const WA_NUMBER = '62817322271';

  // --- 1. Quick Document Checker / Calculator Form ---
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const docType = document.getElementById('docType')?.value || 'Dokumen Umum';
      const docPurpose = document.getElementById('docPurpose')?.value || 'Keperluan Umum / Studi / Visa';
      const docSpeedInput = document.querySelector('input[name="speedOption"]:checked');
      const docSpeed = docSpeedInput ? docSpeedInput.value : 'Normal (2-3 Hari Kerja)';
      const docPages = document.getElementById('docPages')?.value || 'Belum dihitung';

      const message = `Halo AMPM Sworn Translator, saya ingin konsultasi & cek dokumen GRATIS untuk Terjemahan Tersumpah Belanda:%0A%0A` +
        `📄 *Jenis Dokumen:* ${encodeURIComponent(docType)}%0A` +
        `🎯 *Keperluan:* ${encodeURIComponent(docPurpose)}%0A` +
        `⏱️ *Waktu Pengerjaan:* ${encodeURIComponent(docSpeed)}%0A` +
        `📑 *Perkiraan Jumlah:* ${encodeURIComponent(docPages)}%0A%0A` +
        `Mohon estimasi biaya resmi, persyaratan, dan alur pengerjaannya. Terima kasih!`;

      const waUrl = `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${message}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // --- 2. Interactive Document Category Tabs ---
  const tabButtons = document.querySelectorAll('.doc-tab-btn');
  const tabPanes = document.querySelectorAll('.doc-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --- 3. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 4. Dynamic Real-Time Social Proof Toast Notification ---
  const socialProofData = [
    { name: "Bpk. Hendra S.", city: "Jakarta Selatan", doc: "Akta Lahir & Kartu Keluarga untuk Visa MVV", time: "Baru saja (2 mnt lalu)" },
    { name: "Sarah Oktaviani", city: "Bandung", doc: "Ijazah & Transkrip S2 Universiteit Leiden", time: "4 menit yang lalu" },
    { name: "PT Samudera Logistik", city: "Surabaya", doc: "Kontrak Bisnis Bilateral Belanda - Kilat 24 Jam", time: "7 menit yang lalu" },
    { name: "Ibu Laksmi Handayani", city: "Tangerang", doc: "Buku Nikah & Surat Single untuk Gemeente", time: "11 menit yang lalu" },
    { name: "dr. Kevin Pratama", city: "Semarang", doc: "Dokumen Medis & Registrasi Spesialis Belanda", time: "15 menit yang lalu" },
    { name: "Bpk. Aditya Dharma", city: "Yogyakarta", doc: "SKCK Mabes Polri & Legalisasi Apostille", time: "18 menit yang lalu" },
    { name: "Fadhil Ramadhan", city: "Bekasi", doc: "Transkrip Nilai & Motivation Letter TU Delft", time: "22 menit yang lalu" },
    { name: "Maya Siregar", city: "Medan", doc: "Akta Cerai & Akta Lahir Kedubes Belanda", time: "28 menit yang lalu" }
  ];

  const toastEl = document.getElementById('socialProofToast');
  const toastText = document.getElementById('toastText');
  const toastTime = document.getElementById('toastTime');
  const toastAvatar = document.getElementById('toastAvatar');
  const toastClose = document.getElementById('toastClose');

  let currentIndex = 0;
  let toastTimer = null;
  let isToastDismissed = false;

  function showToast() {
    if (isToastDismissed || !toastEl) return;

    const data = socialProofData[currentIndex];
    if (toastText) {
      toastText.innerHTML = `<strong>${data.name}</strong> (${data.city}) baru saja konsultasi & cek dokumen: <span style="color:#0284c7;font-weight:600;">${data.doc}</span>`;
    }
    if (toastTime) {
      toastTime.innerHTML = `<span>🟢</span> ${data.time}`;
    }
    if (toastAvatar) {
      toastAvatar.textContent = data.name.charAt(0);
    }

    toastEl.classList.add('show');

    // Auto hide after 4.5 seconds
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 4500);

    // Prepare next
    currentIndex = (currentIndex + 1) % socialProofData.length;
  }

  if (toastClose) {
    toastClose.addEventListener('click', (e) => {
      e.stopPropagation();
      toastEl.classList.remove('show');
      isToastDismissed = true;
      if (toastTimer) clearInterval(toastTimer);
    });
  }

  // Initial trigger after 3.5 seconds, then repeat every 10 seconds
  setTimeout(() => {
    showToast();
    toastTimer = setInterval(showToast, 11000);
  }, 3500);

  // --- 5. Quick WhatsApp helper buttons ---
  window.sendQuickWA = function(customDoc = '') {
    let msg = `Halo AMPM Sworn Translator, saya ingin konsultasi dan cek dokumen gratis untuk terjemahan tersumpah Belanda.`;
    if (customDoc) {
      msg = `Halo AMPM Sworn Translator, saya butuh bantuan terjemahan tersumpah Bahasa Belanda untuk dokumen: *${customDoc}*. Mohon info estimasi biaya dan persyaratannya. Terima kasih!`;
    }
    const url = `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
});
