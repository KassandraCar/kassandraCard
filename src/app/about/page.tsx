import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

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
      ),    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(
        (skill: (typeof about.technical.skills)[number]) =>
          skill.title
      ),    },
  ];
  return (
    <Column maxWidth="m">
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
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
              {person.languages.map((language: string, index: number) => (                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
            {about.studies.display && (
              <Column fillWidth gap="8" paddingTop="m">
                {about.studies.institutions.map(
                  (institution: (typeof about.studies.institutions)[number], index: number) => (
                    <Column key={`${institution.name}-${index}`} fillWidth gap="2">
                      <Text id={institution.name} variant="heading-strong-s">
                        {institution.name}
                      </Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  )
                )}
              </Column>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <a
                href={about.calendar.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Row
                  fitWidth
                  border="brand-alpha-medium"
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                  className={styles.blockAlign}
                  style={{
                    backdropFilter: "blur(var(--static-space-1))",
                    cursor: "pointer",
                  }}
                >
                  <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                  <Row paddingX="8">Schedule a call</Row>
                  <IconButton
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Row>
              </a>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item: (typeof social)[number]) => item.essential)
                  .map((item: (typeof social)[number]) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          <Column fillWidth marginBottom="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              Core Values
            </Heading>
            <Column fillWidth gap="l">
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
                <Column key={index} fillWidth gap="4">
                  <Text variant="heading-strong-l">{value.title}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {value.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>

          <Column fillWidth marginBottom="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              Leadership Identities
            </Heading>
            <Column fillWidth gap="l">
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
                    "Leadership requires continuous growth. I actively seek new knowledge across disciplines from neuroscience research to distributed systems—to expand how I think and lead.",
                },
                {
                  title: "Advocate for Opportunity",
                  description:
                    "As someone passionate about educational access and STEM outreach, I use leadership to advocate for opportunities that help others pursue their goals.",
                },
              ].map((identity, index) => (
                <Column key={index} fillWidth gap="4">
                  <Text variant="heading-strong-l">{identity.title}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {identity.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>

          <Column fillWidth marginBottom="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              My Why
            </Heading>
            <Column fillWidth gap="m" textVariant="body-default-l">
              <Text variant="body-default-l" onBackground="neutral-weak">
                My &ldquo;why&rdquo; is rooted in a belief that knowledge and opportunity should be accessible to everyone. Growing up, I saw how access to education, mentorship, and resources could dramatically shape the opportunities available to individuals and communities. These experiences shaped how I view leadership—not as authority, but as responsibility. Leadership, to me, means using the knowledge, skills, and positions we gain to create pathways for others.
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                As I pursued my education in computer science and engaged in research and technical projects, I began to see how technology has the power to both solve complex problems and influence society at large. However, technology alone is not enough; it must be designed and implemented with intention. The systems we build, whether they are software platforms, research tools, or community programs, reflect the values of the people who create them. This realization strengthened my commitment to developing technology and initiatives that prioritize accessibility, equity, and real-world impact.
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                My involvement in leadership roles and community initiatives has reinforced this purpose. Working with students and community members has shown me that mentorship and representation can change how individuals see their own potential. When people are given the tools, encouragement, and support to pursue their interests, they often exceed expectations—including their own. Being part of that process is one of the most meaningful aspects of leadership for me.
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                Ultimately, my &ldquo;why&rdquo; is driven by a desire to bridge the gap between innovation and opportunity. I want to contribute to environments where technology, education, and leadership intersect to create positive and lasting change. Whether through research, engineering, or community engagement, my goal is to use my skills not only to solve problems, but also to expand access to knowledge and possibility for others.
              </Text>
            </Column>
          </Column>

          <Column fillWidth marginBottom="xl">
            <Heading as="h2" variant="display-strong-s" marginBottom="m">
              Future Plans for Leadership
            </Heading>
            <Column fillWidth gap="m" textVariant="body-default-l">
              <Text variant="body-default-l" onBackground="neutral-weak">
                In the near term, I plan to deepen my technical expertise while continuing to build on the leadership foundations I have developed through AVELA, Partners for World Health, WashPIRG, and my research work. My long-term goal is to work at the intersection of engineering and public health or education, where I can use technical skills to design systems that address access gaps in meaningful, structural ways.
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                The experiences I have had as a student leader have taught me that impact requires more than passion. It requires strategy, communication, and a deep understanding of the people and systems you are working within. Moving forward, I plan to carry those lessons into technical and organizational leadership roles by focusing on building clear structures, creating transparent pathways, and prioritizing the voices of people most affected by the systems I help build.
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                I also intend to pursue graduate research or industry roles that allow me to contribute to biomedical technology or computational systems with public benefit. Whether that looks like building tools for clinical care, designing more equitable platforms, or mentoring the next generation of STEM students, leadership will remain central to how I work. Advancing in a career is not separate from community responsibility. The two are connected, and I plan to keep them that way.
              </Text>
            </Column>
          </Column>

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
              {about.technical.skills.map(
                (skill: (typeof about.technical.skills)[number], index: number) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map(
                          (tag: (typeof skill.tags)[number], tagIndex: number) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map(
                        (image: (typeof skill.images)[number], index: number) => (                          <Row
                            key={index}
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
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}