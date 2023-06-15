const sections = [...document.querySelectorAll("section")];

const spySection = (entries, observer) => {
  entries.forEach((entry) => {
    const { id } = entry.target;
    if (!entry.isIntersecting) return;
    // Add hash location to URL
    history.pushState(null, null, `#${id}`);
  });
};

const observer = new IntersectionObserver(spySection, {
  //   rootMargin: "-5% 0% -95% 0%",
  threshold: 0.7,
});

sections.forEach((section) => observer.observe(section));
