document.addEventListener("DOMContentLoaded", function () {

	//tabs fixed
	(function () {
	const page = document.querySelector('.page-content');
	const section = document.querySelector('.section-tiles-box');
	if (!page || !section) return;

	function applyTabsFixed() {
		const r = section.getBoundingClientRect();

		const visible = r.bottom > 0 && r.top < window.innerHeight;

		const reachedTop = r.top <= 0;

		if (visible && reachedTop) {
		page.classList.add('tabs-fixed');
		} else {
		page.classList.remove('tabs-fixed');
		}
	}

	let ticking = false;
	function onScrollOrResize() {
		if (!ticking) {
		requestAnimationFrame(() => {
			applyTabsFixed();
			ticking = false;
		});
		ticking = true;
		}
	}

	window.addEventListener('scroll', onScrollOrResize, { passive: true });
	window.addEventListener('resize', onScrollOrResize);

	window.addEventListener('load', applyTabsFixed);
	document.addEventListener('DOMContentLoaded', applyTabsFixed);

	applyTabsFixed();
	})();





  //js tabs
  const tabsNav = document.querySelectorAll('.js-tabs-nav')
  const tabsBlocks = document.querySelectorAll('.js-tab-block')
  const tabsButtonTitle = document.querySelectorAll('.js-tab-title')
  const tabsButtonContent = document.querySelectorAll('.js-tab-content')
  console.log(tabsNav)
  function tabsActiveStart() {
	for (iTab = 0; iTab < tabsBlocks.length; iTab++) {
		if (tabsBlocks[iTab].classList.contains('active')) {
			tabsBlocks[iTab].classList.remove('active')
		}
	}
	for (i = 0; i < tabsNav.length; i++) {
		let tabsNavElements = tabsNav[i].querySelectorAll('[data-tab]')
		for (iElements = 0; iElements < tabsNavElements.length; iElements++) {
			if (tabsNavElements[iElements].classList.contains('active')) {
				let tabsNavElementActive = tabsNavElements[iElements].dataset.tab
				for (j = 0; j < tabsBlocks.length; j++) {
					if (tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive) > -1) {
						console.log(tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive))
						tabsBlocks[j].classList.add('active')
					}
				}
			}
		}
	}
	
  }
  for (i = 0; i < tabsButtonTitle.length; i++) {
	tabsButtonTitle[i].addEventListener('click', function (e) {
		this.classList.toggle('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
  }
  for (i = 0; i < tabsNav.length; i++) {
	tabsNav[i].addEventListener('click', function (e) {
		if (e.target.closest('[data-tab]')) {
			let tabsNavElements = this.querySelector('[data-tab].active')
			tabsNavElements ? tabsNavElements.classList.remove('active') : false
			e.target.closest('[data-tab]').classList.add('active')
			tabsActiveStart()
			e.preventDefault()
			e.stopPropagation()
			return false
		}
	})
  }
  tabsActiveStart()
  
  
  

  const tabsButtons = document.querySelectorAll(".tabs-menu-box .btn-tab");
  let activeTabIdx = 0;
  const tabSections = [];
  tabsButtons.forEach((tab) => {
    const href = tab.getAttribute("href");
    if (href && href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        tabSections.push({ tab, section });
      }
    }
  });
  function onScroll() {
    tabSections.forEach((item, i) => {
      const rect = item.section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        activeTabIdx = i;
      }
    });

    tabSections.forEach((item, i) => {
      if (i === activeTabIdx) {
        item.tab.classList.add("active");
      } else {
        item.tab.classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  onScroll();


  //button scroll 
  document.querySelectorAll('.js-anchor').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
  });



  //tiles-info-slider-box

  //section-brands-box

});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".slider-tiles").forEach((block) => {
    const swiperEl = block.querySelector(".swiper");
    const paginationEl = block.querySelector(".slider-tiles-pagination");
    const nextEl = block.querySelector(".button-slider-tiles-next");
    const prevEl = block.querySelector(".button-slider-tiles-prev");

    new Swiper(swiperEl, {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 0,
      autoHeight: true,
      speed: 400,
      autoplay: false,

      pagination: {
        el: paginationEl,
        clickable: true,
      },
      navigation: {
        nextEl,
        prevEl,
      },

      breakpoints: {
        960: { slidesPerView: 3 },
        1201: { slidesPerView: 4 },
      },
    });
  });


  document.querySelectorAll(".slider-tiles-info").forEach((block) => {
    const swiperEl = block.querySelector(".swiper");
    const paginationEl = block.querySelector(".slider-tiles-info-pagination");
    const nextEl = block.querySelector(".button-slider-tiles-info-next");
    const prevEl = block.querySelector(".button-slider-tiles-info-prev");

    new Swiper(swiperEl, {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 0,
      autoHeight: true,
      speed: 400,
      autoplay: false,

      pagination: {
        el: paginationEl,
        clickable: true,
      },
      navigation: {
        nextEl,
        prevEl,
      },

      breakpoints: {
        960: { slidesPerView: 2, slidesPerGroup: 2, },
        1400: { slidesPerView: 3, slidesPerGroup: 3, },
      },
    });
  });


  //slider line
  const swiperSliderLine = new Swiper('.slider-tiles-brands .swiper',
  {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	autoHeight: true,
	speed: 2000,
	pagination: false,
	centeredSlides: true,
	allowTouchMove: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	navigation: false,
  });


  //video play/pause
	const videoBtn = document.querySelector('.btn-action-ico[data-video]');
	const video = document.getElementById('video');
	function toggleVideo() {
		if (video.paused) {
			video.play();
			videoBtn.classList.add('active');
		} else {
			video.pause();
			videoBtn.classList.remove('active');
		}
	}
	videoBtn.addEventListener('click', function(e) {
		console.log('click')
		e.preventDefault(); 
		toggleVideo();
	});
	video.addEventListener('play', function() {
		videoBtn.classList.add('active');
	});
	video.addEventListener('pause', function() {
		videoBtn.classList.remove('active');
	});
	video.addEventListener('ended', function() {
		videoBtn.classList.remove('active');
	});



});