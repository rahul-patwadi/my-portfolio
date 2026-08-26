

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

const ICONS = {
  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`,

  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.73.8 1.17 1.83 1.17 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,

  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 .77 24 1.73v20.54C24 23.23 23.2 24 22.22 24z"/></svg>`,

resume: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 3h7v7"/>
  <path d="M10 14 21 3"/>
  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
</svg>`
};

function renderHero() {
  const { hero, meta } = CONTENT;

  document.getElementById("hero-name").textContent = hero.heading;
  document.getElementById("hero-role").textContent = hero.subheading;
  document.getElementById("hero-description").textContent = hero.description;

  const links = document.getElementById("hero-links");

  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${meta.email}`;
  emailLink.className = "is-primary";
  emailLink.innerHTML = `${ICONS.email}<span>Email</span>`;
  links.appendChild(emailLink);

  const githubLink = document.createElement("a");
  githubLink.href = meta.github;
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  githubLink.innerHTML = `${ICONS.github}<span>GitHub</span>`;
  links.appendChild(githubLink);

  const linkedinLink = document.createElement("a");
  linkedinLink.href = meta.linkedin;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
  linkedinLink.innerHTML = `${ICONS.linkedin}<span>LinkedIn</span>`;
  links.appendChild(linkedinLink);

  const resumeLink = document.createElement("a");
  resumeLink.href = meta.resumeUrl;
  resumeLink.target = "_blank";
  resumeLink.rel = "noopener noreferrer";
  resumeLink.innerHTML = `${ICONS.resume}<span>Resume</span>`;
  links.appendChild(resumeLink);
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

  const gitubLink = document.getElementById("project-github");
  gitubLink.href = project.github;
  gitubLink.textContent = "Github Repo: " + project.githubLabel;

  
  const siteLink = document.getElementById("project-site");
  siteLink.href = project.site;
  siteLink.textContent = "Live URL: " + project.siteLabel;
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
