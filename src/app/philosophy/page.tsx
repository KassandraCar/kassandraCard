import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, person, philosophy } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: philosophy.title,
    description: philosophy.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(philosophy.title)}`,
    path: philosophy.path,
  });
}

export default function Philosophy() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingX="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={philosophy.title}
        description={philosophy.description}
        path={philosophy.path}
        image={`/api/og/generate?title=${encodeURIComponent(philosophy.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${philosophy.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-xl">
        Leadership Philosophy Statement
      </Heading>
      <Column fillWidth gap="m" textVariant="body-default-l">
        <Text variant="body-default-l" onBackground="neutral-weak">
          To me, leadership is about creating environments where people can access opportunities, feel like they belong, and grow into their potential. I don&apos;t see leadership as something tied to a title or authority. Instead, I understand it as influence, especially influence that removes barriers rather than reinforces them. Leadership is relational, equity-centered, and grounded in responsibility to others.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          At the core of my leadership philosophy are five principles: access, transparency, empathy, shared power, and accountability. I believe information is a form of power, and too often systems, especially in higher education and professional spaces, rely on unspoken rules that benefit those who already understand them. As a first-generation college student, I have experienced what it feels like to navigate institutions without inherited knowledge or guidance. That experience shifted how I think about leadership. I now see it as helping make systems clearer, sharing resources openly, and ensuring that opportunities are not limited to those who already know how to access them.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          For me, equity and inclusion are not add-ons to leadership; they are central to it. Leadership that ignores equity risks reinforcing the very hierarchies it should challenge. Inclusive leadership means intentionally designing spaces where different identities are not just present, but respected and valued. It requires asking whose voices are being heard, whose work goes unnoticed, and whose needs are overlooked. In my leadership roles, whether mentoring peers, leading organizations, or working on collaborative projects, I try to create environments where questions are welcomed, expectations are clear, and people feel psychologically safe to contribute. I aim to move beyond surface-level representation and toward meaningful structural change.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          My understanding of leadership has changed over time. In high school, I associated leadership with visibility and decisiveness. I believed leaders were the most confident people in the room, the ones who had answers and spoke the loudest. During my first year of college, that perspective began to shift. Navigating imposter syndrome and unfamiliar academic systems as a first-generation student taught me that leadership is less about having answers and more about creating clarity for others. I started to value listening just as much as speaking and came to understand mentorship as a powerful form of leadership.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Over the past year, my philosophy has continued to deepen. Through my involvement in accessibility initiatives, outreach efforts, and equity-focused programming, I have realized that leadership must also be systems-aware. Supporting individuals is important, but it is equally important to examine why barriers exist in the first place. Today, I see leadership as a long-term commitment to changing structures, building pathways rather than offering one-time solutions.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Anti-racism is an essential part of this philosophy. Educational and professional systems are shaped by racial inequities that affect access to information, resources, and opportunity. I believe leadership cannot be neutral in the face of those inequities. Anti-racist leadership requires intentional action: redistributing resources, amplifying marginalized voices, challenging exclusionary practices, and reflecting critically on one&apos;s own positionality. It also means recognizing how privilege operates and being accountable for how influence is used. In my leadership, I aim to disrupt patterns that disproportionately disadvantage students of color, first-generation students, and historically excluded communities by building transparent, supportive, and equitable systems of mentorship and access.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Ultimately, I believe leadership is measured by impact rather than recognition. If the people around me feel more informed, more confident, and more empowered because of my presence, then I am leading effectively. Leadership is not about standing at the center; it is about expanding the circle so more people can step into it.
        </Text>
      </Column>

      <Heading as="h2" variant="display-strong-s" marginTop="xl" marginBottom="l">
        Key Learning Experiences
      </Heading>
      <Column fillWidth gap="xl">
        {[
          {
            context: "Speaking with my lab mentor, I volunteered for an unpaid biomedical device project—then learned it would be paid and lead to a hospital research assistant position.",
            why: "Money had always been a source of stress in my family. For the first time I could pursue something I was passionate about without feeling guilty about reducing hours at my other job.",
            competencies: ["Self-Awareness & Development", "Personal Behavior"],
            reflection: "Doing things I care about can lead to amazing experiences and new perspectives—something I carry into everything I do.",
          },
          {
            context: "As a freshman I felt no passion in intro CS courses. I joined RSOs and tried new classes until neuroscience clicked, and I discovered I could merge it with Computer Science.",
            why: "Coming back from 16-hour warehouse shifts as a sophomore made it clear I needed to reclaim what excited me. I refused to let my major be a ceiling.",
            competencies: ["Learning & Reasoning", "Self-Awareness & Development"],
            reflection: "Nothing can limit you if you truly want something. Curiosity and excitement are not bound by a major, a class, or a job.",
          },
          {
            context: "The founder of my RSO challenged me to run for co-president of AVELA—a scale of leadership I had never taken on before.",
            why: "I had never held a presidential role or made decisions affecting students at a larger level. It was scary, but thinking of myself as president shifted something in me.",
            competencies: ["Group Dynamics", "Civic Responsibility", "Self-Awareness & Development"],
            reflection: "I now see myself as a leader, not just a member. Leadership is not a title—it is about helping those who rely on you.",
          },
          {
            context: "As King County Regional Coordinator I planned the annual trip to Olympia where students speak directly with representatives, the Governor, and legislators.",
            why: "It was my first large-scale event. Ensuring students knew about and could access this opportunity felt like a real civic responsibility.",
            competencies: ["Strategic Planning", "Communication", "Interpersonal Interaction", "Civic Responsibility"],
            reflection: "The experience taught me how to plan, communicate across organizations, and uphold civic responsibility while serving my community.",
          },
          {
            context: "Early in college, work and school consumed all my time and I grew increasingly distant from my family in Eastern Washington.",
            why: "As a first-generation student—my brother never attended college and my sister left after sophomore year—I feared I was paving a negative path by becoming so distant.",
            competencies: ["Communication", "Interpersonal Interaction"],
            reflection: "Everything I am doing is for my family. That clarity deepened how much I value staying connected even through difficult seasons.",
          },
          {
            context: "Despite nerves, I signed up for a study abroad program in Spain focused on cultural dance and history—the first in my family to leave the country.",
            why: "It was a milestone: my first time leaving the US and the first for anyone in my family.",
            competencies: ["Interpersonal Interaction", "Learning & Reasoning", "Self-Awareness & Development"],
            reflection: "The world is vast. Seeing other perspectives and ways of life was deeply moving and strengthened my desire to keep exploring.",
          },
          {
            context: "I enrolled in a biology lab course with almost no prior biology background, coming from purely CS coursework.",
            why: "It felt like a proactive step toward my passion for computational neuroscience—a real milestone.",
            competencies: ["Learning & Reasoning", "Self-Awareness & Development"],
            reflection: "Even a small step forward is a step in the right direction.",
          },
          {
            context: "During CSE 452 (Distributed Systems)—the hardest course I have taken at UW—a difficult personal situation at home prevented me from finishing on time. I reached out to the professor and took an incomplete.",
            why: "It was the first time I filed for an incomplete and I felt like I had given up. But it ultimately gave me the space to complete the labs with real care and effort.",
            competencies: ["Learning & Reasoning", "Communication", "Strategic Planning"],
            reflection: "During hard times, communicating early and planning ahead reduces stress and leads to better outcomes.",
          },
        ].map((exp, index) => (
          <Column key={index} fillWidth gap="m" padding="l" border="neutral-alpha-weak" radius="l">
            <Text variant="heading-strong-l" onBackground="neutral-strong">
              {exp.context}
            </Text>
            <Column gap="4">
              <Text variant="label-default-s" onBackground="neutral-weak">Why it mattered</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{exp.why}</Text>
            </Column>
            <Column gap="4">
              <Text variant="label-default-s" onBackground="neutral-weak">Reflected in my life now</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{exp.reflection}</Text>
            </Column>
            <Row wrap gap="8">
              {exp.competencies.map((c, i) => (
                <Tag key={i} size="m">{c}</Tag>
              ))}
            </Row>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
