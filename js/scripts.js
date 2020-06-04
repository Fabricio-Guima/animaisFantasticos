function initTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //ativar informação da raposa
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTab();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativo = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);
    function activeAccordion() {
      this.classList.toggle(ativo);
      this.nextElementSibling.classList.toggle(ativo);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //window.scrollTo({
    //    top: topo,
    //    behavior: 'smooth'
    // });
  }

  linkInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

if(sections.length){
    function animaScroll(){
        sections.forEach(section =>{
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if( sectionTop < 0 ){
                section.classList.add('ativo');
            } else {
             section.classList.add('remove');
            }
        })
     }
     


animaScroll();

window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();

