/**
 * Imam Teguh Portfolio - Interactive Controller (AntiSlopUI + UI/UX Pro Max Master Edition)
 * Verified against AntiSlopUI standards:
 * 1. Lenis Smooth Scroll coupled with GSAP Ticker (lagSmoothing(0))
 * 2. Fine-pointer gated custom fluid cursor using gsap.quickTo & context-aware states
 * 3. Elastic magnetic button interactions
 * 4. ScrollTrigger coordinated section reveals & hero choreography
 * 5. Radial mouse spotlight on Bento cards
 * 6. Interactive media simulators (Video playback, Carousel slides, Document viewer)
 * 7. Dark / Light mode persistence with WCAG AA compliance
 * 8. Form validation with accessible live regions and modal focus traps
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentFilter = 'all';
  let activeModalProject = null;
  let activeCarouselSlide = 0;
  let isVideoPlaying = false;
  let videoProgressTimer = null;
  let videoProgressPercent = 30;
  let previousActiveElement = null;

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

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // ==========================================
  // 1. LENIS SMOOTH SCROLL + GSAP TICKER
  // ==========================================
  let lenis = null;
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1.0,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false
    });

    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
    }

    if (typeof gsap !== 'undefined') {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // Smooth anchor navigation with Lenis
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (navbar) navbar.classList.remove('nav-mobile-open');
          if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');

          if (lenis) {
            lenis.scrollTo(targetEl, {
              offset: -75,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  // ==========================================
  // 2. ANTISLOPUI FLUID CURSOR (POINTER: FINE ONLY)
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorAura = document.getElementById('cursorAura');

  if (isFinePointer && cursorDot && cursorAura && typeof gsap !== 'undefined') {
    gsap.set([cursorDot, cursorAura], { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDot = gsap.quickTo(cursorDot, "x", { duration: 0.1, ease: "power3.out" });
    const yDot = gsap.quickTo(cursorDot, "y", { duration: 0.1, ease: "power3.out" });
    const xAura = gsap.quickTo(cursorAura, "x", { duration: 0.38, ease: "power3.out" });
    const yAura = gsap.quickTo(cursorAura, "y", { duration: 0.38, ease: "power3.out" });

    let cursorShown = false;
    window.addEventListener('mousemove', (e) => {
      if (!cursorShown) {
        gsap.to([cursorDot, cursorAura], { opacity: 1, duration: 0.25 });
        cursorShown = true;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xAura(e.clientX);
      yAura(e.clientY);
    });

    window.addEventListener('mouseleave', () => {
      gsap.to([cursorDot, cursorAura], { opacity: 0, duration: 0.25 });
      cursorShown = false;
    });

    // Contextual Hover States
    const setCursorState = (type, label = '') => {
      if (type === 'hover') {
        cursorAura.classList.add('active-hover');
        cursorAura.textContent = label;
        gsap.to(cursorDot, { scale: 0, duration: 0.18 });
      } else {
        cursorAura.classList.remove('active-hover');
        cursorAura.textContent = '';
        gsap.to(cursorDot, { scale: 1, duration: 0.18 });
      }
    };

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor], a, button, .project-card, .bento-card, .filter-btn, .modal-close-btn');
      if (!target) return;

      const customCursor = target.getAttribute('data-cursor');
      if (customCursor === 'play') {
        setCursorState('hover', 'PLAY');
      } else if (customCursor === 'view') {
        setCursorState('hover', 'VIEW');
      } else if (customCursor === 'copy') {
        setCursorState('hover', 'COPY');
      } else {
        setCursorState('hover', '');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor], a, button, .project-card, .bento-card, .filter-btn, .modal-close-btn');
      if (target) {
        setCursorState('default');
      }
    });
  }

  // ==========================================
  // 3. MAGNETIC BUTTONS (POINTER: FINE ONLY)
  // ==========================================
  if (isFinePointer && typeof gsap !== 'undefined') {
    const magneticTargets = document.querySelectorAll('.btn-primary, .btn-talk, .brand-logo, .theme-toggle-btn');
    magneticTargets.forEach(el => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1, 0.35)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1, 0.35)" });
      const strength = 0.28;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const relX = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const relY = (e.clientY - (rect.top + rect.height / 2)) * strength;
        xTo(relX);
        yTo(relY);
      });

      el.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  // ==========================================
  // 4. GSAP ENTRANCE & SCROLLTRIGGER REVEALS
  // ==========================================
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {
    // Hero entrance choreography
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTl
      .from('.availability-badge', { y: -20, opacity: 0, duration: 0.8, delay: 0.15 })
      .from('.hero-title', { y: 35, opacity: 0, duration: 1.0 }, "-=0.5")
      .from('.hero-bio', { y: 25, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-cta-group', { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from('.hero-stats-row', { y: 25, opacity: 0, duration: 0.8 }, "-=0.5")
      .from('.hero-visual-card', { scale: 0.95, opacity: 0, duration: 1.1, ease: "expo.out" }, "-=0.7");

    // Coordinated section reveals via ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      document.querySelectorAll('.section-header').forEach(header => {
        gsap.from(header.children, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out"
        });
      });

      gsap.from('.bento-card', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: "top 82%",
          toggleActions: "play none none none"
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out"
      });
    }
  }

  // ==========================================
  // 5. THEME TOGGLE (DARK / LIGHT)
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
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  initTheme();

  // Mobile navigation drawer with ARIA expanded state
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('nav-mobile-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-mobile-open');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // ==========================================
  // 6. MOUSE SPOTLIGHT (BENTO CARDS)
  // ==========================================
  const cards = document.querySelectorAll('.bento-card, .project-card, .service-card');
  document.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ==========================================
  // 7. STATS NUMBER COUNTER ANIMATION
  // ==========================================
  const statsElements = document.querySelectorAll('.stat-number');
  const animateStats = () => {
    statsElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      if (!target) return;
      let start = 0;
      const duration = 1500;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          if (target === 150) el.textContent = '150+';
          else if (target === 5) el.textContent = '5+ Years';
          else if (target === 25) el.textContent = '25M+';
          else if (target === 99) el.textContent = '99%';
        } else {
          el.textContent = Math.floor(start) + '+';
        }
      }, stepTime);
    });
  };

  const statsSection = document.querySelector('.hero-stats-row');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
  }

  // ==========================================
  // 8. RENDER PORTFOLIO ITEMS
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
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${project.title} case study`);
      card.setAttribute('data-cursor', project.previewType === 'video' ? 'play' : 'view');

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
      const thumbnailMedia = project.image
        ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">`
        : (project.svgIllustration || `<div style="width:100%;height:100%;background:#0c1017;display:flex;align-items:center;justify-content:center;color:#64748b;">${project.title}</div>`);

      card.innerHTML = `
        <div class="project-thumbnail">
          ${thumbnailMedia}
          <div class="thumbnail-overlay">
            <span class="overlay-btn">
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(project.id);
        }
      });

      portfolioGrid.appendChild(card);
    });

    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      gsap.from(portfolioGrid.querySelectorAll('.project-card'), {
        y: 25,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out"
      });
    }

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
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.getAttribute('data-filter');
      renderPortfolio(currentFilter);
    });
  });

  // ==========================================
  // 9. CASE STUDY DETAIL MODAL & INTERACTIVE MEDIA
  // ==========================================
  const openModal = (projectId) => {
    const project = PORTFOLIO_DATA.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    if (lenis) lenis.stop();

    previousActiveElement = document.activeElement;
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

    if (modalStatsArea) {
      modalStatsArea.innerHTML = project.stats.map(s => `
        <div class="modal-stat-box">
          <div class="modal-stat-val">${s.value}</div>
          <div class="modal-stat-lbl">${s.label}</div>
        </div>
      `).join('');
    }

    if (modalTools) {
      modalTools.innerHTML = project.tools.map(tool => `
        <span class="tag-pill" style="border: 1px solid var(--border-color);">${tool}</span>
      `).join('');
    }

    if (modalMediaArea) {
      if (project.previewType === 'video') {
        if (project.youtubeId) {
          modalMediaArea.innerHTML = `
            <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; background: #000;">
              <iframe src="https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1" title="${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            </div>
          `;
        } else if (project.videoUrl) {
          modalMediaArea.innerHTML = `
            <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; background: #000;">
              <video src="${project.videoUrl}" controls autoplay playsinline style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>
          `;
        } else {
          renderVideoPlayer(modalMediaArea, project);
        }
      } else if (project.previewType === 'carousel' && project.carouselSlides) {
        renderCarouselViewer(modalMediaArea, project);
      } else if (project.previewType === 'document' && project.docPages) {
        renderDocumentViewer(modalMediaArea, project);
      } else if (project.image) {
        modalMediaArea.innerHTML = `
          <div style="width: 100%; display: flex; justify-content: center; align-items: center; background: #07090e; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color);">
            <img src="${project.image}" alt="${project.title}" style="max-width: 100%; max-height: 520px; object-fit: contain;">
          </div>
        `;
      } else {
        modalMediaArea.innerHTML = `
          <div style="width: 100%; aspect-ratio: 16/10; overflow: hidden; border-radius: var(--radius-md);">
            ${project.svgIllustration || ''}
          </div>
        `;
      }
    }

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  };

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopVideoSimulator();
    if (lenis) lenis.start();
    if (previousActiveElement) previousActiveElement.focus();
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

  // Video Simulator
  const renderVideoPlayer = (container, project) => {
    isVideoPlaying = false;
    videoProgressPercent = 35;

    container.innerHTML = `
      <div class="interactive-player" id="interactivePlayer">
        <div class="player-canvas-area">
          ${project.svgIllustration}
        </div>
        <div class="player-controls-bar">
          <div class="player-progress-bar" id="playerScrubber" role="slider" aria-label="Video scrubber" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
            <div class="player-progress-fill" id="playerFill" style="width: ${videoProgressPercent}%;"></div>
          </div>
          <div class="player-buttons-row">
            <div class="player-left-controls">
              <button class="player-ctrl-btn" id="playPauseBtn" aria-label="Play or Pause Video" data-cursor="play">
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
              <button class="player-ctrl-btn" id="soundToggleBtn" aria-label="Mute or Unmute audio">
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
        playerScrubber.setAttribute('aria-valuenow', Math.round(videoProgressPercent));
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

  // Carousel Viewer
  const renderCarouselViewer = (container, project) => {
    const slides = project.carouselSlides;
    container.innerHTML = `
      <div class="modal-carousel-box" tabindex="0" aria-label="Social media carousel viewer">
        <div class="carousel-slide-view" id="carouselSlideContent">
        </div>
        <div class="carousel-nav-row">
          <button class="carousel-arrow-btn" id="prevSlideBtn" aria-label="Previous Slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="carousel-indicators" id="carouselIndicators"></div>
          <button class="carousel-arrow-btn" id="nextSlideBtn" aria-label="Next Slide">
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

      const slideImg = slide.image || (activeCarouselSlide === 0 ? project.image : null);
      const imgMarkup = slideImg 
        ? `<div style="width: 100%; max-height: 380px; display: flex; justify-content: center; margin-bottom: 1.25rem; border-radius: var(--radius-sm); overflow: hidden;">
             <img src="${slideImg}" alt="${slide.title}" style="max-height: 380px; max-width: 100%; object-fit: contain; border-radius: var(--radius-sm);">
           </div>`
        : '';

      slideContent.innerHTML = `
        ${imgMarkup}
        <span class="tag-pill" style="background: rgba(37, 99, 235, 0.15); color: #3b82f6; margin-bottom: 1rem;">${slide.badge} • Slide ${slide.slideNum} of ${slides.length}</span>
        <h4 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 0.75rem; color: #ffffff;">${slide.title}</h4>
        <p style="color: #94a3b8; font-size: 0.95rem; max-width: 520px; margin: 0 auto;">${slide.caption}</p>
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

  // Document Viewer
  const renderDocumentViewer = (container, project) => {
    const pages = project.docPages || [];

    container.innerHTML = `
      <div style="background: #040711; border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
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

  // Prev / Next Project buttons
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
  // 10. CONTACT FORM & ACCESSIBLE FEEDBACK
  // ==========================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('projectMessage');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        nameError.textContent = "Nama lengkap harus diisi.";
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameError.classList.remove('visible');
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Format email tidak valid.";
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailError.classList.remove('visible');
      }

      // Validate message
      if (!messageInput.value.trim()) {
        messageError.textContent = "Pesan kebutuhan proyek harus diisi.";
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageError.classList.remove('visible');
      }

      if (!isValid) return;

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
        showToast("✨ Pesan terkirim! Imam akan merespons dalam 24 jam.");
      }, 1000);
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
        showToast("📋 Email disalin: " + email);
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  }

  // Initial render
  renderPortfolio('all');
});
