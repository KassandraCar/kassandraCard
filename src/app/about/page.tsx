import { Media, Row, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(
        (institution: (typeof about.studies.institutions)[number]) =>
          institution.name
      ),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(
        (skill: (typeof about.technical.skills)[number]) => skill.title
      ),
    },
  ];

  return (
    <div className={styles.pageRoot}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <TableOfContents structure={structure} about={about} />
      )}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroAtmos} aria-hidden="true" />
        <div className={styles.heroInner}>
          {about.avatar.display && (
            <div className={styles.avatarCol}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatarGlow} />
                <img
                  className={styles.avatarImg}
                  src={person.avatar}
                  alt={person.name}
                />
              </div>
            </div>
          )}
          <div className={styles.heroText}>
            {about.calendar.display && (
              <a
                href={about.calendar.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calLink}
              >
                <span className={styles.calDot} aria-hidden="true" />
                Schedule a call
                <span className={styles.calArrow} aria-hidden="true">&#8594;</span>
              </a>
            )}
            <h1 className={styles.heroName}>{person.name}</h1>
            <p className={styles.heroRole}>{person.role}</p>
            {social.length > 0 && (
              <div className={styles.socialRow}>
                {social
                  .filter((item: (typeof social)[number]) => item.essential)
                  .map((item: (typeof social)[number]) =>
                    item.link ? (
                      <a
                        key={item.name}
                        href={item.link}
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    ) : null
                  )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className={styles.heroDivider} />

      {/* Page body */}
      <div className={styles.layout}>
        {/* Sidebar: location, languages, studies */}
        {about.avatar.display && (
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <div className={styles.sideLocation}>
                <span className={styles.sideLocationDot} aria-hidden="true" />
                {person.location}
              </div>
              {person.languages && person.languages.length > 0 && (
                <div className={styles.sideLangs}>
                  {person.languages.map((language: string, index: number) => (
                    <span key={index} className={styles.sideLang}>
                      {language}
                    </span>
                  ))}
                </div>
              )}
              {about.studies.display && (
                <div className={styles.sideStudies}>
                  {about.studies.institutions.map(
                    (
                      institution: (typeof about.studies.institutions)[number],
                      index: number
                    ) => (
                      <div
                        key={`${institution.name}-${index}`}
                        className={styles.sideInstitution}
                      >
                        <span
                          id={institution.name}
                          className={styles.sideInstName}
                        >
                          {institution.name}
                        </span>
                        <span className={styles.sideInstDesc}>
                          {institution.description}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Main content */}
        <main className={styles.content}>
          {about.intro.display && (
            <section className={styles.sectionBlock} id={about.intro.title}>
              <div className={styles.introText}>{about.intro.description}</div>
            </section>
          )}

          <div className={styles.sectionDivider} />

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Core Values</h2>
            <div className={styles.valueGrid}>
              {[
                {
                  title: "Equity",
                  description:
                    "I believe technology and education should expand opportunity rather than reinforce barriers. Equity means designing systems, communities, and learning environments where people with different backgrounds and needs can succeed.",
                },
                {
                  title: "Curiosity",
                  description:
                    "Curiosity drives both my technical and leadership growth. Whether exploring neuroscience research, debugging distributed systems, or learning new technologies, I value asking questions and continuously learning.",
                },
                {
                  title: "Service",
                  description:
                    "Leadership is not just about direction but about service to others. My work in STEM outreach and mentorship reflects my belief that knowledge should be shared and used to support communities.",
                },
                {
                  title: "Integrity",
                  description:
                    "Integrity means taking responsibility for decisions, being transparent with collaborators, and committing to work that has meaningful impact.",
                },
                {
                  title: "Collaboration",
                  description:
                    "Complex problems require diverse perspectives. I value building teams where people feel respected, heard, and empowered to contribute their strengths.",
                },
              ].map((value, index) => (
                <div key={index} className={styles.valueItem}>
                  <span className={styles.valueTitle}>{value.title}</span>
                  <p className={styles.valueDesc}>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.sectionDivider} />

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Leadership Identities</h2>
            <div className={styles.valueGrid}>
              {[
                {
                  title: "Community Builder",
                  description:
                    "I build environments where people feel supported and able to grow. Through leadership roles such as AVELA co-president, I work to create opportunities for students to access STEM resources and mentorship.",
                },
                {
                  title: "Technical Problem Solver",
                  description:
                    "My computer science background shapes how I approach challenges: by analyzing systems, identifying root causes, and designing solutions that are both efficient and scalable.",
                },
                {
                  title: "Inclusive Innovator",
                  description:
                    "I aim to design technology that works for diverse communities. My work in accessibility and inclusive design reflects my commitment to ensuring technology benefits everyone.",
                },
                {
                  title: "Lifelong Learner",
                  description:
                    "Leadership requires continuous growth. I actively seek new knowledge across disciplines, from neuroscience research to distributed systems, to expand how I think and lead.",
                },
                {
                  title: "Advocate for Opportunity",
                  description:
                    "As someone passionate about educational access and STEM outreach, I use leadership to advocate for opportunities that help others pursue their goals.",
                },
              ].map((identity, index) => (
                <div key={index} className={styles.valueItem}>
                  <span className={styles.valueTitle}>{identity.title}</span>
                  <p className={styles.valueDesc}>{identity.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.sectionDivider} />

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>My Why</h2>
            <div className={styles.proseBlock}>
              <p>
                My "why" is rooted in a belief that knowledge and opportunity should be accessible
                to everyone. Growing up, I saw how access to education, mentorship, and resources
                could dramatically shape the opportunities available to individuals and communities.
                These experiences shaped how I view leadership, not as authority, but as
                responsibility. Leadership, to me, means using the knowledge, skills, and positions
                we gain to create pathways for others.
              </p>
              <p>
                As I pursued my education in computer science and engaged in research and technical
                projects, I began to see how technology has the power to both solve complex problems
                and influence society at large. However, technology alone is not enough; it must be
                designed and implemented with intention. The systems we build, whether they are
                software platforms, research tools, or community programs, reflect the values of
                the people who create them. This realization strengthened my commitment to
                developing technology and initiatives that prioritize accessibility, equity, and
                real-world impact.
              </p>
              <p>
                My involvement in leadership roles and community initiatives has reinforced this
                purpose. Working with students and community members has shown me that mentorship
                and representation can change how individuals see their own potential. When people
                are given the tools, encouragement, and support to pursue their interests, they
                often exceed expectations, including their own. Being part of that process is one
                of the most meaningful aspects of leadership for me.
              </p>
              <p>
                Ultimately, my "why" is driven by a desire to bridge the gap between innovation
                and opportunity. I want to contribute to environments where technology, education,
                and leadership intersect to create positive and lasting change. Whether through
                research, engineering, or community engagement, my goal is to use my skills not
                only to solve problems but also to expand access to knowledge and possibility for
                others.
              </p>
            </div>
          </section>

          <div className={styles.sectionDivider} />

          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Future Plans for Leadership</h2>
            <div className={styles.proseBlock}>
              <p>
                In the near term, I plan to deepen my technical expertise while continuing to
                build on the leadership foundations I have developed through AVELA, Partners for
                World Health, WashPIRG, and my research work. My long-term goal is to work at
                the intersection of engineering and public health or education, where I can use
                technical skills to design systems that address access gaps in meaningful,
                structural ways.
              </p>
              <p>
                The experiences I have had as a student leader have taught me that impact requires
                more than passion. It requires strategy, communication, and a deep understanding
                of the people and systems you are working within. Moving forward, I plan to carry
                those lessons into technical and organizational leadership roles by focusing on
                building clear structures, creating transparent pathways, and prioritizing the
                voices of people most affected by the systems I help build.
              </p>
              <p>
                I also intend to pursue graduate research or industry roles that allow me to
                contribute to biomedical technology or computational systems with public benefit.
                Whether that looks like building tools for clinical care, designing more equitable
                platforms, or mentoring the next generation of STEM students, leadership will
                remain central to how I work. Advancing in a career is not separate from community
                responsibility. The two are connected, and I plan to keep them that way.
              </p>
            </div>
          </section>

          {about.technical.display && (
            <>
              <div className={styles.sectionDivider} />
              <section
                className={styles.sectionBlock}
                id={about.technical.title}
              >
                <h2 className={styles.sectionHeading}>
                  {about.technical.title}
                </h2>
                <div className={styles.skillList}>
                  {about.technical.skills.map(
                    (
                      skill: (typeof about.technical.skills)[number],
                      index: number
                    ) => (
                      <div
                        key={`${skill.title}-${index}`}
                        className={styles.skillItem}
                      >
                        <span id={skill.title} className={styles.skillTitle}>
                          {skill.title}
                        </span>
                        <p className={styles.skillDesc}>{skill.description}</p>
                        {skill.tags && skill.tags.length > 0 && (
                          <div className={styles.tagRow}>
                            {skill.tags.map(
                              (
                                tag: (typeof skill.tags)[number],
                                tagIndex: number
                              ) => (
                                <span
                                  key={`${skill.title}-tag-${tagIndex}`}
                                  className={styles.skillTag}
                                >
                                  {tag.name}
                                </span>
                              )
                            )}
                          </div>
                        )}
                        {skill.images && skill.images.length > 0 && (
                          <Row fillWidth paddingTop="m" gap="12" wrap>
                            {skill.images.map(
                              (
                                image: (typeof skill.images)[number],
                                imgIndex: number
                              ) => (
                                <Row
                                  key={imgIndex}
                                  border="neutral-medium"
                                  radius="m"
                                  minWidth={image.width}
                                  height={image.height}
                                >
                                  <Media
                                    enlarge
                                    radius="m"
                                    sizes={image.width.toString()}
                                    alt={image.alt}
                                    src={image.src}
                                  />
                                </Row>
                              )
                            )}
                          </Row>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            </>
          )}
        </main>
      </div>

      <div className={styles.pagePad} />
    </div>
  );
}
