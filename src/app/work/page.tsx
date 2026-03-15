import { Column, Heading, Media, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      {about.work.display && (
        <>
          <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
            {about.work.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {about.work.experiences.map(
              (experience: (typeof about.work.experiences)[number], index: number) => (
                <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map(
                      (achievement: string, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                  {experience.images && experience.images.length > 0 && (
                    <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                      {experience.images.map(
                        (image: (typeof experience.images)[number], index: number) => (
                          <Row
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
      <Column fillWidth marginTop="40" marginBottom="xl" paddingX="l">
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Relevant Courses
        </Heading>
        <Column fillWidth gap="l">
          {[
            {
              title: "Distributed Systems",
              description: "Paxos/Multi-Paxos consensus, primary-backup replication, leader election, sharding, and linearizability guarantees in distributed key-value stores.",
            },
            {
              title: "Systems Programming",
              description: "Low-level C/C++ development, memory management, concurrency, and OS-level abstractions.",
            },
            {
              title: "Accessibility & Inclusive Design",
              description: "WCAG standards, semantic HTML, keyboard navigation, focus management, contrast audits, and designing for diverse user needs.",
            },
            {
              title: "Data Structures & Algorithms",
              description: "Algorithm analysis, trees, graphs, hashing, dynamic programming, and complexity tradeoffs.",
            },
            {
              title: "Computer Security",
              description: "Threat modeling, cryptography fundamentals, authentication, network security, and secure coding practices.",
            },
            {
              title: "Neural & Computational Engineering",
              description: "Signal processing, neural data analysis, brain-computer interfaces, and computational models of biological systems.",
            },
          ].map((course, index) => (
            <Column key={index} fillWidth gap="4">
              <Text variant="heading-strong-l">{course.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {course.description}
              </Text>
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
