document.addEventListener("DOMContentLoaded", function() {
    // ilk defa tetikleme
    handleScroll();
  
    // scroll olayını dinle
    window.addEventListener("scroll", handleScroll);
  });
  
  function handleScroll() {
    const skillLevels = document.querySelectorAll(".skill-level");
    const trigger = window.innerHeight * 0.8; // barların ne zaman görünmesi gerektiğini belirleyen eşik değeri
    skillLevels.forEach(skillLevel => {
      const skillLevelTop = skillLevel.getBoundingClientRect().top;
      const skillLevelHeight = skillLevel.offsetHeight;
      const skillLevelTrigger = trigger - skillLevelHeight;
      if (skillLevelTop < skillLevelTrigger) {
        const skillLevelWidth = skillLevel.getAttribute("data-level");
        skillLevel.style.width = skillLevelWidth;
      }
    });
  }
  