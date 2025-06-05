document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      alert('Silakan hubungi kami via WhatsApp untuk pemesanan!');
    });
  }

  // Scroll-Spy untuk Navigasi
  const navLinks = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Smooth Scroll saat klik navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // Event untuk tombol beli/isi pulsa
  const buyButtons = document.querySelectorAll('.btn-primary');
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.includes('Beli') || button.textContent.includes('Isi')) {
        alert(`Silakan hubungi kami untuk pembelian: ${button.parentElement.querySelector('h4')?.textContent || ''}`);
      }
    });
  });
});