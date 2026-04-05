import { InteractiveLink } from "@/components/interactive-button";
import { PageIntro, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SkillsShowcase } from "@/components/skills-showcase";
import { portfolioData } from "@/data/portfolio";

function formatMonthYear(value: string) {
  if (value === "Present") {
    return value;
  }

  const [year, month] = value.split("-");
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1));
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <PageIntro className="page-intro">
        <header className="site-header">
          <InteractiveLink href="#home" className="brand-mark">
            {portfolioData.profile.firstName[0]}
            {portfolioData.profile.lastName[0]}
          </InteractiveLink>
          <nav className="nav-links" aria-label="Primary">
            {portfolioData.navigation
              .filter((item) => item.visible)
              .map((item) => (
                <InteractiveLink key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </InteractiveLink>
              ))}
          </nav>
        </header>
      </PageIntro>

      <section id="home" className="hero-section section section-shell">
        <PageIntro className="hero-copy">
          {/* <span className="status-pill">{portfolioData.profile.availability}</span> */}
          <p className="eyebrow">Senior iOS Engineer • Gurgaon, India</p>
          <h1>{portfolioData.profile.fullName}</h1>
          <h2>{portfolioData.hero.tagline}</h2>
          <p className="hero-text">{portfolioData.hero.shortIntro}</p>
          <div className="cta-row">
            <InteractiveLink className="primary-cta" href={portfolioData.hero.ctaPrimary.href}>
              {portfolioData.hero.ctaPrimary.label}
            </InteractiveLink>
            <InteractiveLink
              className="secondary-cta"
              href={portfolioData.hero.ctaSecondary.href}
            >
              {portfolioData.hero.ctaSecondary.label}
            </InteractiveLink>
          </div>
        </PageIntro>

        <PageIntro className="hero-panel" transition={{ delay: 0.12, duration: 0.8 }}>
          <Reveal className="panel-card profile-card" delay={0.12}>
            <p className="eyebrow">Current Role</p>
            <h3>{portfolioData.profile.currentRole}</h3>
            <p>{portfolioData.profile.subHeadline}</p>
          </Reveal>
          <StaggerGroup className="stats-grid">
            <StaggerItem className="stat-card">
              <strong>{portfolioData.stats.yearsOfExperience}+</strong>
              <span>Years of experience</span>
            </StaggerItem>
            <StaggerItem className="stat-card">
              <strong>{portfolioData.stats.companiesWorked}</strong>
              <span>Companies worked</span>
            </StaggerItem>
            <StaggerItem className="stat-card">
              <strong>{portfolioData.stats.featuredProjects}</strong>
              <span>Featured projects</span>
            </StaggerItem>
            <StaggerItem className="stat-card">
              <strong>{portfolioData.stats.awardsCount}</strong>
              <span>Awards</span>
            </StaggerItem>
          </StaggerGroup>
        </PageIntro>
      </section>

      <section id="about" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Engineering depth with product awareness</h2>
        </Reveal>
        <StaggerGroup className="content-grid two-column">
          <StaggerItem className="panel-card">
            <p>{portfolioData.about.summary}</p>
            <p>{portfolioData.about.shortCoverDescription}</p>
          </StaggerItem>
          <StaggerItem className="panel-card">
            <h3>Highlights</h3>
            <StaggerGroup className="stack-list">
              {portfolioData.about.highlights.map((item) => (
                <StaggerItem key={item} className="list-card">
                  {item}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </StaggerItem>
        </StaggerGroup>
        <StaggerGroup className="pill-row domain-row">
          {portfolioData.domainExpertise.map((domain) => (
            <StaggerItem key={domain}>
              <span className="mini-pill">{domain}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="experience" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Career timeline shaped around scalable mobile delivery</h2>
        </Reveal>
        <StaggerGroup className="timeline">
          {portfolioData.experience.map((item) => (
            <StaggerItem className="timeline-card" key={item.id}>
              <div className="timeline-marker" />
              <div className="timeline-content panel-card elevated-card">
                <div className="timeline-topline">
                  <div>
                    <p className="eyebrow">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <div className="timeline-meta">
                    <span>
                      {formatMonthYear(item.startDate)} - {formatMonthYear(item.endDate)}
                    </span>
                    <span>{item.location}</span>
                  </div>
                </div>
                <p>{item.summary}</p>
                <StaggerGroup className="stack-list compact">
                  {item.achievements.map((achievement) => (
                    <StaggerItem className="list-card" key={achievement}>
                      {achievement}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="skills" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Interactive overview of technical strengths</h2>
        </Reveal>
        <SkillsShowcase />
      </section>

      <section id="projects" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work across banking, fintech, healthcare, and consumer apps</h2>
        </Reveal>
        <ProjectsShowcase />
      </section>

      <section id="awards" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Recognition</p>
          <h2>Awards and professional achievements</h2>
        </Reveal>
        <StaggerGroup className="content-grid two-column">
          <StaggerItem className="panel-card">
            <h3>Awards</h3>
            <StaggerGroup className="stack-list">
              {portfolioData.awards.map((award) => (
                <StaggerItem className="list-card" key={`${award.title}-${award.year}`}>
                  <strong>{award.title}</strong>
                  <span>{award.organization}</span>
                  <span>
                    {award.year}
                    {award.count ? ` • ${award.count} times` : ""}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </StaggerItem>
          <StaggerItem className="panel-card">
            <h3>Professional notes</h3>
            <StaggerGroup className="stack-list">
              {portfolioData.achievements.map((achievement) => (
                <StaggerItem className="list-card" key={achievement}>
                  {achievement}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <section id="education" className="section section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation</h2>
        </Reveal>
        <StaggerGroup className="education-stack">
          {portfolioData.education.map((item) => (
            <StaggerItem className="panel-card education-card elevated-card" key={item.institution}>
              <div>
                <p className="eyebrow">{item.institution}</p>
                <h3>{item.degree}</h3>
              </div>
              <div className="education-meta">
                <span>
                  {formatMonthYear(item.startDate)} - {formatMonthYear(item.endDate)}
                </span>
                <span>Score: {item.score}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section id="contact" className="section section-shell">
        <Reveal className="contact-banner" distance={24}>
          <div>
            <p className="eyebrow">Contact</p>
            <h2>{portfolioData.contact.contactTitle}</h2>
            <p>{portfolioData.contact.contactDescription}</p>
          </div>
          <div className="contact-actions">
            <InteractiveLink className="primary-cta" href={`mailto:${portfolioData.contact.email}`}>
              {portfolioData.contact.email}
            </InteractiveLink>
            <InteractiveLink
              className="secondary-cta"
              href={`tel:${portfolioData.contact.phonePrimary}`}
            >
              {portfolioData.contact.phonePrimary}
            </InteractiveLink>
            <p className="muted">
              {portfolioData.contact.phoneSecondary} • {portfolioData.contact.locationLabel}
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
