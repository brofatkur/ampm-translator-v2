/**
 * AMPM Sworn Translator - Multi-Language Official Translation
 * High-Conversion Interactions & Realtime Social Proof
 */

document.addEventListener('DOMContentLoaded', () => {
  const WA_NUMBER = '62817322271';

  // --- 1. Quick Document Checker / Calculator Form ---
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const targetLang = document.getElementById('targetLang')?.value || 'Bahasa Belanda / Inggris';
      const docType = document.getElementById('docType')?.value || 'Dokumen Umum';
      const docPurpose = document.getElementById('docPurpose')?.value || 'Keperluan Studi / Visa / Bisnis';
      const docSpeedInput = document.querySelector('input[name="speedOption"]:checked');
      const docSpeed = docSpeedInput ? docSpeedInput.value : 'Normal (2-3 Hari Kerja)';
      const docPages = document.getElementById('docPages')?.value || 'Belum dihitung';

      const message = `Halo AMPM Sworn Translator, saya ingin konsultasi & cek dokumen GRATIS untuk Layanan Penerjemah Tersumpah:%0A%0A` +
        `🌐 *Bahasa Target:* ${encodeURIComponent(targetLang)}%0A` +
        `📄 *Jenis Dokumen:* ${encodeURIComponent(docType)}%0A` +
        `🎯 *Keperluan:* ${encodeURIComponent(docPurpose)}%0A` +
        `⏱️ *Waktu Pengerjaan:* ${encodeURIComponent(docSpeed)}%0A` +
        `📑 *Perkiraan Lembar/Catatan:* ${encodeURIComponent(docPages)}%0A%0A` +
        `Mohon info estimasi biaya resmi, persyaratan legalitas, dan alur pengerjaannya. Terima kasih!`;

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

  // --- 4. Dynamic Real-Time Multi-Language Social Proof Toast Notification ---
  const socialProofData = [
    { name: "Bpk. Hen***", city: "Jakarta Selatan", doc: "Akta Lahir & KK ke Bhs Belanda (Visa MVV)", time: "Baru saja (2 mnt lalu)" },
    { name: "Ibu Cla***", city: "Surabaya", doc: "Ijazah & Transkrip ke Bhs Inggris (Beasiswa LPDP)", time: "3 menit yang lalu" },
    { name: "PT Ind***", city: "Cikarang", doc: "Kontrak Joint Venture ke Bhs Mandarin (China)", time: "6 menit yang lalu" },
    { name: "Bpk. Dim***", city: "Bandung", doc: "Dokumen Visa Kerja ke Bhs Jerman (Ausbildung)", time: "9 menit yang lalu" },
    { name: "Bpk. Riz***", city: "Yogyakarta", doc: "Ijazah & SKCK ke Bhs Jepang (Visa COE)", time: "14 menit yang lalu" },
    { name: "dr. Ami***", city: "Jakarta Timur", doc: "Dokumen Medis & Ijazah ke Bhs Arab (Saudi)", time: "18 menit yang lalu" },
    { name: "Bpk. Kev***", city: "Medan", doc: "Akta Notaris & AD/ART ke Bhs Korea (Seoul)", time: "23 menit yang lalu" },
    { name: "Ibu Nat***", city: "Denpasar", doc: "Buku Nikah & Single Status ke Bhs Prancis", time: "29 menit yang lalu" }
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
      toastText.innerHTML = `<strong>${data.name}</strong> (${data.city}) baru saja konsultasi: <span style="color:#0284c7;font-weight:600;">${data.doc}</span>`;
    }
    if (toastTime) {
      toastTime.innerHTML = `<span>🟢</span> ${data.time}`;
    }
    if (toastAvatar) {
      const cleanName = data.name.replace(/^(Bpk\.|Ibu\.|dr\.|PT\s+)/i, '').trim();
      toastAvatar.textContent = (cleanName.charAt(0) || data.name.charAt(0)).toUpperCase();
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

  // Initial trigger after 3.5 seconds, then repeat every 11 seconds
  setTimeout(() => {
    showToast();
    toastTimer = setInterval(showToast, 11000);
  }, 3500);

  // --- 5. Quick WhatsApp helper functions ---
  window.sendQuickWA = function(lang = '', customDoc = '') {
    let msg = `Halo AMPM Sworn Translator, saya ingin konsultasi dan cek dokumen gratis untuk terjemahan tersumpah.`;
    if (lang && customDoc) {
      msg = `Halo AMPM Sworn Translator, saya ingin menerjemahkan dokumen *${customDoc}* ke *Bahasa ${lang}*. Mohon info estimasi biaya dan persyaratannya. Terima kasih!`;
    } else if (lang) {
      msg = `Halo AMPM Sworn Translator, saya butuh jasa penerjemah tersumpah untuk *Bahasa ${lang}*. Mohon dibantu info prosedurnya. Terima kasih!`;
    }
    const url = `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
});
