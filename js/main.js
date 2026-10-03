/**
 * Imam Teguh Portfolio - Interactive Controller
 * Handles filtering, case study modals, media simulators, theme toggling, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentFilter = 'all';
  let activeModalProject = null;
  let activeCarouselSlide = 0;
  let isVideoPlaying = false;
  let videoProgressTimer = null;
  let videoProgressPercent = 30;

  // DOM Elements
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navbar = document.querySelector('.navbar');
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const toastBox = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const contactForm = document.getElementById('contactForm');

  // ==========================================
  // 1. THEME TOGGLE (DARK / LIGHT)
  // ==========================================
  const initTheme = () => {
    const savedTheme = localStorage.getItem('imam_portfolio_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('imam_portfolio_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  };

  const updateThemeIcon = (theme) => {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  initTheme();

  // Mobile navigation
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navbar.classList.toggle('nav-mobile-open');
    });
  }

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-mobile-open');
    });
  });

  // ==========================================
  // 2. RENDER PORTFOLIO ITEMS
  // ==========================================
  const renderPortfolio = (category = 'all') => {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const filtered = category === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(item => {
          if (category === 'video-editing') return item.category === 'video-editing';
          if (category === 'talking-head') return item.category === 'video-editing' && item.subCategory === 'talking-head';
          if (category === 'motion-graphic') return item.category === 'video-editing' && item.subCategory === 'motion-graphic';
          return item.category === category;
        });

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);

      // Badge class
      let badgeClass = 'badge-graphic';
      if (project.category === 'video-editing') {
        badgeClass = project.subCategory === 'motion-graphic' ? 'badge-motion' : 'badge-video';
      } else if (project.category === 'social-media') {
        badgeClass = 'badge-social';
      } else if (project.category === 'document-layout') {
        badgeClass = 'badge-doc';
      }

      const tagsHtml = project.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('');
      const subBadgeText = project.subLabel ? ` • ${project.subLabel}` : '';

      card.innerHTML = `
        <div class="project-thumbnail">
          ${project.svgIllustration}
          <div class="thumbnail-overlay">
            <span class="overlay-btn">
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
          <span class="project-category-badge ${badgeClass}">${project.categoryLabel}${subBadgeText}</span>
        </div>
        <div class="project-info">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-year">${project.year}</span>
          </div>
          <p class="project-subtitle">${project.subtitle}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(project.id));
      portfolioGrid.appendChild(card);
    });

    // Update filter count badge
    updateFilterCounts();
  };

  const updateFilterCounts = () => {
    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const countEl = btn.querySelector('.filter-count');
      if (!countEl) return;

      let count = 0;
      if (cat === 'all') {
        count = PORTFOLIO_DATA.length;
      } else if (cat === 'talking-head') {
        count = PORTFOLIO_DATA.filter(p => p.subCategory === 'talking-head').length;
      } else if (cat === 'motion-graphic') {
        count = PORTFOLIO_DATA.filter(p => p.subCategory === 'motion-graphic').length;
      } else {
        count = PORTFOLIO_DATA.filter(p => p.category === cat).length;
      }
      countEl.textContent = count;
    });
  };

  // Filter Buttons click handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderPortfolio(currentFilter);
    });
  });

  // ==========================================
  // 3. CASE STUDY DETAIL MODAL & INTERACTIVE MEDIA
  // ==========================================
  const openModal = (projectId) => {
    const project = PORTFOLIO_DATA.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    activeModalProject = project;
    activeCarouselSlide = 0;
    stopVideoSimulator();

    const modalTitle = document.getElementById('modalProjectTitle');
    const modalSubtitle = document.getElementById('modalProjectSubtitle');
    const modalClient = document.getElementById('modalClient');
    const modalRole = document.getElementById('modalRole');
    const modalYear = document.getElementById('modalYear');
    const modalCategory = document.getElementById('modalCategory');
    const modalDetails = document.getElementById('modalDetails');
    const modalStatsArea = document.getElementById('modalStatsArea');
    const modalTools = document.getElementById('modalTools');
    const modalMediaArea = document.getElementById('modalMediaArea');

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
    if (modalClient) modalClient.textContent = project.client;
    if (modalRole) modalRole.textContent = project.role;
    if (modalYear) modalYear.textContent = project.year;
    if (modalCategory) modalCategory.textContent = `${project.categoryLabel} ${project.subLabel ? `(${project.subLabel})` : ''}`;
    if (modalDetails) modalDetails.textContent = project.details;

    // Render Stats
    if (modalStatsArea) {
      modalStatsArea.innerHTML = project.stats.map(s => `
        <div class="modal-stat-box">
          <div class="modal-stat-val">${s.value}</div>
          <div class="modal-stat-lbl">${s.label}</div>
        </div>
      `).join('');
    }

    // Render Tools
    if (modalTools) {
      modalTools.innerHTML = project.tools.map(tool => `
        <span class="tag-pill" style="border: 1px solid var(--border-color);">${tool}</span>
      `).join('');
    }

    // Render Media based on Preview Type
    if (modalMediaArea) {
      if (project.previewType === 'video') {
        renderVideoPlayer(modalMediaArea, project);
      } else if (project.previewType === 'carousel' && project.carouselSlides) {
        renderCarouselViewer(modalMediaArea, project);
      } else if (project.previewType === 'document' && project.docPages) {
        renderDocumentViewer(modalMediaArea, project);
      } else {
        // Standard Image / Graphic Design
        modalMediaArea.innerHTML = `
          <div style="width: 100%; aspect-ratio: 16/10; overflow: hidden; border-radius: var(--radius-md);">
            ${project.svgIllustration}
          </div>
        `;
      }
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    stopVideoSimulator();
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // ==========================================
  // MEDIA COMPONENT 1: INTERACTIVE VIDEO PLAYER
  // ==========================================
  const renderVideoPlayer = (container, project) => {
    isVideoPlaying = false;
    videoProgressPercent = 35;

    container.innerHTML = `
      <div class="interactive-player" id="interactivePlayer">
        <div class="player-canvas-area">
          ${project.svgIllustration}
        </div>
        <div class="player-controls-bar">
          <div class="player-progress-bar" id="playerScrubber">
            <div class="player-progress-fill" id="playerFill" style="width: ${videoProgressPercent}%;"></div>
          </div>
          <div class="player-buttons-row">
            <div class="player-left-controls">
              <button class="player-ctrl-btn" id="playPauseBtn" title="Play/Pause">
                <svg id="playIcon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <div class="audio-wave-box" id="audioWaveBox" style="opacity: 0.5;">
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
              </div>
              <span class="player-time" id="playerTimeDisplay">00:15 / ${project.videoDuration || '01:00'}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="tag-pill" style="color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">4K 60FPS</span>
              <button class="player-ctrl-btn" id="soundToggleBtn" title="Sound Mute/Unmute">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const playerScrubber = document.getElementById('playerScrubber');
    const playerFill = document.getElementById('playerFill');
    const playerTimeDisplay = document.getElementById('playerTimeDisplay');
    const audioWaveBox = document.getElementById('audioWaveBox');
    const soundToggleBtn = document.getElementById('soundToggleBtn');

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        isVideoPlaying = !isVideoPlaying;
        if (isVideoPlaying) {
          playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
          audioWaveBox.style.opacity = '1';
          startVideoProgress();
          showToast("Playing video preview");
        } else {
          playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
          audioWaveBox.style.opacity = '0.5';
          stopVideoSimulator();
        }
      });
    }

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        showToast("Audio track unmuted (48kHz 24-bit)");
      });
    }

    if (playerScrubber) {
      playerScrubber.addEventListener('click', (e) => {
        const rect = playerScrubber.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        videoProgressPercent = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
        playerFill.style.width = `${videoProgressPercent}%`;
      });
    }
  };

  const startVideoProgress = () => {
    stopVideoSimulator();
    videoProgressTimer = setInterval(() => {
      videoProgressPercent += 1.5;
      if (videoProgressPercent > 100) videoProgressPercent = 0;
      const fill = document.getElementById('playerFill');
      const timeDisplay = document.getElementById('playerTimeDisplay');
      if (fill) fill.style.width = `${videoProgressPercent}%`;
      if (timeDisplay) {
        const seconds = Math.floor((videoProgressPercent / 100) * 45);
        timeDisplay.textContent = `00:${seconds < 10 ? '0' : ''}${seconds} / 00:45`;
      }
    }, 200);
  };

  const stopVideoSimulator = () => {
    if (videoProgressTimer) {
      clearInterval(videoProgressTimer);
      videoProgressTimer = null;
    }
    isVideoPlaying = false;
  };

  // ==========================================
  // MEDIA COMPONENT 2: INTERACTIVE CAROUSEL VIEWER
  // ==========================================
  const renderCarouselViewer = (container, project) => {
    const slides = project.carouselSlides;
    container.innerHTML = `
      <div class="modal-carousel-box">
        <div class="carousel-slide-view" id="carouselSlideContent">
          <!-- Dynamic slide content -->
        </div>
        <div class="carousel-nav-row">
          <button class="carousel-arrow-btn" id="prevSlideBtn" title="Previous Slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="carousel-indicators" id="carouselIndicators"></div>
          <button class="carousel-arrow-btn" id="nextSlideBtn" title="Next Slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    `;

    const updateSlide = () => {
      const slide = slides[activeCarouselSlide];
      const slideContent = document.getElementById('carouselSlideContent');
      const indicators = document.getElementById('carouselIndicators');
      if (!slideContent || !indicators) return;

      slideContent.innerHTML = `
        <span class="tag-pill" style="background: rgba(16, 185, 129, 0.2); color: #10b981; margin-bottom: 1rem;">${slide.badge} • Slide ${slide.slideNum} of ${slides.length}</span>
        <h4 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 0.75rem; color: #ffffff;">${slide.title}</h4>
        <p style="color: #94a3b8; font-size: 0.95rem; max-width: 480px;">${slide.caption}</p>
      `;

      indicators.innerHTML = slides.map((_, idx) => `
        <span class="carousel-dot ${idx === activeCarouselSlide ? 'active' : ''}"></span>
      `).join('');
    };

    updateSlide();

    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        activeCarouselSlide = (activeCarouselSlide - 1 + slides.length) % slides.length;
        updateSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        activeCarouselSlide = (activeCarouselSlide + 1) % slides.length;
        updateSlide();
      });
    }
  };

  // ==========================================
  // MEDIA COMPONENT 3: INTERACTIVE DOCUMENT VIEWER
  // ==========================================
  const renderDocumentViewer = (container, project) => {
    let currentPageIdx = 0;
    const pages = project.docPages || [];

    container.innerHTML = `
      <div style="background: #020617; border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
        <div style="margin-bottom: 1rem; border-radius: var(--radius-sm); overflow: hidden;">
          ${project.svgIllustration}
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-tertiary); border-radius: var(--radius-sm);">
          <div style="text-align: left;">
            <div style="font-size: 0.85rem; font-weight: 700; color: #f8fafc;" id="docPageTitle">${pages[0]?.title || 'Page Preview'}</div>
            <div style="font-size: 0.75rem; color: #94a3b8;" id="docPageNote">${pages[0]?.note || 'CMYK Prepress & High-Res Screen PDF'}</div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" style="padding: 0.4rem 0.9rem; font-size: 0.8rem;" id="docDownloadBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download PDF Sample</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const downloadBtn = document.getElementById('docDownloadBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        showToast("PDF Sample download started");
      });
    }
  };

  // Next / Previous Project Navigation in Modal
  const modalPrevProjectBtn = document.getElementById('modalPrevProjectBtn');
  const modalNextProjectBtn = document.getElementById('modalNextProjectBtn');

  if (modalPrevProjectBtn) {
    modalPrevProjectBtn.addEventListener('click', () => {
      if (!activeModalProject) return;
      const curIdx = PORTFOLIO_DATA.findIndex(p => p.id === activeModalProject.id);
      const prevIdx = (curIdx - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
      openModal(PORTFOLIO_DATA[prevIdx].id);
    });
  }

  if (modalNextProjectBtn) {
    modalNextProjectBtn.addEventListener('click', () => {
      if (!activeModalProject) return;
      const curIdx = PORTFOLIO_DATA.findIndex(p => p.id === activeModalProject.id);
      const nextIdx = (curIdx + 1) % PORTFOLIO_DATA.length;
      openModal(PORTFOLIO_DATA[nextIdx].id);
    });
  }

  // ==========================================
  // 4. CONTACT FORM & FEEDBACK
  // ==========================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        <span>Sending Message...</span>
      `;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast("✨ Message sent! Imam will get back to you within 24 hours.");
      }, 1200);
    });
  }

  // Toast Function
  const showToast = (message) => {
    if (!toastBox || !toastMessage) return;
    toastMessage.textContent = message;
    toastBox.classList.add('show');
    setTimeout(() => {
      toastBox.classList.remove('show');
    }, 3500);
  };

  // Copy email shortcut
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = "imamteguh.porto@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("📋 Email copied: " + email);
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  }

  // Initial render
  renderPortfolio('all');
});
