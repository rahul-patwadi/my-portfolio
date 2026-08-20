/**
 * Renders the portfolio from CONTENT (see js/content.js) and wires up
 * small interactions (mobile nav, scroll reveal). No content strings
 * live in this file — edit js/content.js instead.
 */

const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  if (opts.href) node.href = opts.href;
  if (opts.target) node.target = opts.target;
  if (opts.rel) node.rel = opts.rel;
  if (opts.attrs) {
    Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }
  children.forEach((c) => c && node.appendChild(c));
  return node;
}

function renderNav() {
  const desktop = document.getElementById("nav-links");
  const mobile = document.getElementById("nav-links-mobile");

  NAV_SECTIONS.forEach(({ id, label }) => {
    desktop.appendChild(el("a", { href: `#${id}`, text: label }));
    mobile.appendChild(el("a", { href: `#${id}`, text: label }));
  });

  const toggle = document.getElementById("nav-toggle");
  toggle.addEventListener("click", () => {
    const isOpen = mobile.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function renderHero() {
  const { hero, meta } = CONTENT;

  document.getElementById("hero-name").textContent = hero.heading;
  document.getElementById("hero-role").textContent = hero.subheading;
  document.getElementById("hero-description").textContent = hero.description;

  const links = document.getElementById("hero-links");
  links.appendChild(
    el("a", { href: `mailto:${meta.email}`, text: "Email", class: "is-primary" })
  );
  links.appendChild(
    el("a", { href: meta.github, target: "_blank", rel: "noopener noreferrer", text: "GitHub" })
  );
  links.appendChild(
    el("a", { href: meta.linkedin, target: "_blank", rel: "noopener noreferrer", text: "LinkedIn" })
  );
}

function renderAbout() {
  const { about } = CONTENT;
  document.getElementById("about-heading").textContent = about.heading;

  const body = document.getElementById("about-body");
  const list = el("ul", { class: "about-list" });

  about.points.forEach((point) => {
    list.appendChild(el("li", { text: point }));
  });

  body.appendChild(list);
}

function renderPipeline(steps, container) {
  steps.forEach((step, i) => {
    const isApproval = /approval/i.test(step);
    container.appendChild(
      el("span", { class: `pipeline__step${isApproval ? " is-approval" : ""}`, text: step })
    );
    if (i < steps.length - 1) {
      container.appendChild(el("span", { class: "pipeline__arrow", text: "→" }));
    }
  });
}

function renderExperience() {
  const { experience } = CONTENT;
  document.getElementById("experience-heading").textContent = experience.heading;
  document.getElementById("experience-company").textContent =
    `${experience.company} — ${experience.companyLocation}`;

  const container = document.getElementById("experience-roles");
  experience.roles.forEach((role) => {
    const card = el("article", { class: "role-card reveal" });

    card.appendChild(
      el("div", { class: "role-card__head" }, [
        el("h3", { class: "role-card__title", text: role.title }),
        el("span", { class: "role-card__dates", text: role.dates }),
      ])
    );

    const bullets = el("ul", { class: "role-card__bullets" });
    role.bullets.forEach((b) => bullets.appendChild(el("li", { text: b })));
    card.appendChild(bullets);

    if (role.metrics && role.metrics.length) {
      const row = el("div", { class: "metric-row" });
      role.metrics.forEach((m) => {
        row.appendChild(
          el("div", { class: "metric-chip" }, [
            el("span", { class: "metric-chip__value", text: m.value }),
            el("span", { class: "metric-chip__label", text: m.label }),
          ])
        );
      });
      card.appendChild(row);
    }

    if (role.pipeline && role.pipeline.length) {
      const pipeline = el("div", { class: "pipeline" });
      renderPipeline(role.pipeline, pipeline);
      card.appendChild(pipeline);
    }

    container.appendChild(card);
  });
}

function renderProject() {
  const { project } = CONTENT;

  document.getElementById("project-heading").textContent = project.heading;
  document.getElementById("project-tagline").textContent = project.tagline;

  const missions = document.getElementById("project-missions");
  project.missions.forEach((m) =>
    missions.appendChild(el("span", { class: "mission-tag", text: m }))
  );

  const pipeline = document.getElementById("project-pipeline");
  renderPipeline(project.pipeline, pipeline);

  const desc = document.getElementById("project-description");
  project.description.forEach((p) => desc.appendChild(el("p", { text: p })));

  const stats = document.getElementById("project-stats");
  project.stats.forEach((s) =>
    stats.appendChild(
      el("div", { class: "stat-card" }, [
        el("div", { class: "stat-card__value", text: s.value }),
        el("div", { class: "stat-card__label", text: s.label }),
      ])
    )
  );

  const tech = document.getElementById("project-tech");
  project.tech.forEach((t) => tech.appendChild(el("span", { class: "tech-tag", text: t })));

  const link = document.getElementById("project-github");
  link.href = project.github;
  link.textContent = project.githubLabel;
}

function renderSkills() {
  const { skills } = CONTENT;
  document.getElementById("skills-heading").textContent = skills.heading;

  const grid = document.getElementById("skills-grid");
  skills.categories.forEach((cat) => {
    const card = el("div", { class: "skill-card reveal" });
    card.appendChild(el("div", { class: "skill-card__name", text: cat.name }));
    const items = el("div", { class: "skill-card__items" });
    cat.items.forEach((i) => items.appendChild(el("span", { class: "skill-tag", text: i })));
    card.appendChild(items);
    grid.appendChild(card);
  });
}

function renderEducation() {
  const { education } = CONTENT;
  document.getElementById("education-heading").textContent = education.heading;

  const list = document.getElementById("education-list");
  education.entries.forEach((e) => {
    const card = el("div", { class: "edu-card reveal" });
    card.appendChild(
      el("div", { class: "edu-card__main" }, [
        el("div", { class: "edu-card__school", text: e.school }),
        el("div", { class: "edu-card__degree", text: e.degree }),
        el("div", { class: "edu-card__location", text: e.location }),
      ])
    );
    const meta = el("div", { class: "edu-card__meta" }, [
      el("span", { class: "edu-card__dates", text: e.dates }),
    ]);
    if (e.status) meta.appendChild(el("span", { class: "edu-badge", text: e.status }));
    card.appendChild(meta);
    list.appendChild(card);
  });
}

function renderContact() {
  const { contact, meta } = CONTENT;
  document.getElementById("contact-heading").textContent = contact.heading;
  document.getElementById("contact-description").textContent = contact.description;

  const links = document.getElementById("contact-links");
  links.appendChild(el("a", { href: `mailto:${meta.email}`, text: `Email — ${meta.email}` }));
  links.appendChild(
    el("a", { href: meta.linkedin, target: "_blank", rel: "noopener noreferrer", text: `LinkedIn — ${meta.linkedinLabel}` })
  );
  links.appendChild(
    el("a", { href: meta.github, target: "_blank", rel: "noopener noreferrer", text: `GitHub — ${meta.githubLabel}` })
  );
}

function renderFooter() {
  document.getElementById("footer-text").textContent =
    `${CONTENT.footer.text} — © ${new Date().getFullYear()}`;
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

function init() {
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderProject();
  renderSkills();
  renderEducation();
  renderContact();
  renderFooter();
  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
