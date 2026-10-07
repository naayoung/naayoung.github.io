(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var ext = function (url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; };

  $("logo").textContent = S.nameEn;
  $("heroRole").textContent = S.role + " · " + S.location;
  $("heroName").innerHTML = "안녕하세요,<br>" + esc(S.name) + "입니다." +
    '<span class="en">' + esc(S.nameEn) + "</span>";
  $("heroTagline").textContent = S.tagline;
  $("heroLinks").innerHTML =
    '<a class="btn primary" href="#projects">프로젝트 보기</a>' +
    S.links.map(function (l) {
      return '<a class="btn" href="' + esc(l.url) + '"' + ext(l.url) + ">" + esc(l.label) + " ↗</a>";
    }).join("");

  $("aboutBody").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

  var tags = function (arr) {
    return '<div class="tags">' + arr.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>";
  };

  $("skillsBody").innerHTML = S.skills.map(function (g) {
    return '<div class="skill-row"><h3>' + esc(g.group) + "</h3>" + tags(g.items) + "</div>";
  }).join("");

  $("expBody").innerHTML = S.experience.map(function (e) {
    return '<li><span class="period">' + esc(e.period) + "</span><h3>" + esc(e.title) + "</h3><p>" + esc(e.desc) + "</p></li>";
  }).join("");

  $("projectsBody").innerHTML = S.projects.map(function (p) {
    var links = "";
    if (p.github) links += '<a href="' + esc(p.github) + '"' + ext(p.github) + ">GitHub ↗</a>";
    if (p.demo) links += '<a href="' + esc(p.demo) + '"' + ext(p.demo) + ">Demo ↗</a>";
    return '<article class="card"><span class="period">' + esc(p.period) + "</span><h3>" + esc(p.title) +
      "</h3><p>" + esc(p.desc) + "</p>" + tags(p.tags) +
      (links ? '<div class="card-links">' + links + "</div>" : "") + "</article>";
  }).join("");

  var mail = $("contactMail");
  mail.href = "mailto:" + S.email;
  mail.textContent = S.email + " ↗";
  mail.className = "btn primary";

  $("footerText").textContent = "© " + new Date().getFullYear() + " " + S.nameEn + ". All rights reserved.";

  // theme toggle
  $("themeBtn").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("visible"); });
  }
})();
