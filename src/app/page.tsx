import { Schema, Meta } from "@once-ui-system/core";
import { baseURL, home, about, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import styles from "./home.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const posts = getPosts(["src", "app", "blog", "posts"])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            className={styles.brainImg}
            src="/images/gallery/brain.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroAvatarSide}>
            <div className={styles.profileWrap}>
              <div className={styles.profileGlow} />
              <img
                className={styles.profileImg}
                src={person.avatar}
                alt={person.name}
              />
            </div>
          </div>
          <div className={styles.heroTextSide}>
            <p className={styles.overline}>
              Computer Science · Neural Engineering · Systems Design
            </p>
            <h1 className={styles.headline}>Hi, I'm Kass.</h1>
            <p className={styles.subline}>
              I build across distributed systems, embedded biomedical research,
              and community-centered engineering. Currently at UW, exploring
              computation at the scale of neurons and servers.
            </p>
            <div className={styles.profileRow}>
              <span className={styles.profileName}>{person.name}</span>
              <span className={styles.profileSep} aria-hidden="true" />
              <span className={styles.location}>Seattle, WA</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* Work */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Selected Work</span>
          <a className={styles.sectionLink} href="/work">
            View all
          </a>
        </div>
        <div className={styles.workList}>
          {projects.map((p) => (
            <a
              key={p.slug}
              className={styles.workRow}
              href={`/work/${p.slug}`}
            >
              <div className={styles.workRowLeft}>
                <span className={styles.workTitle}>{p.metadata.title}</span>
                {p.metadata.tag && (
                  <span className={styles.workTag}>{p.metadata.tag}</span>
                )}
              </div>
              <span className={styles.workArrow}>&#8594;</span>
            </a>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* Blog */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Latest Writing</span>
          <a className={styles.sectionLink} href="/blog">
            View all
          </a>
        </div>
        <div className={styles.blogGrid}>
          {posts.map((p) => (
            <a
              key={p.slug}
              className={styles.blogCard}
              href={`/blog/${p.slug}`}
            >
              <div className={styles.blogCardImage}>
                {p.metadata.image ? (
                  <img src={p.metadata.image} alt={p.metadata.title} />
                ) : (
                  <div className={styles.blogCardImagePlaceholder} />
                )}
              </div>
              <div className={styles.blogCardBody}>
                {p.metadata.tag && (
                  <span className={styles.blogTag}>{p.metadata.tag}</span>
                )}
                <span className={styles.blogTitle}>{p.metadata.title}</span>
                <p className={styles.blogSummary}>{p.metadata.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className={styles.pagePad} />
    </div>
  );
}
