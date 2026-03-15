"use client";

import {
  Avatar,
  Card,
  Column,
  Media,
  Row,
  Text,
} from "@once-ui-system/core";
import { person } from "@/resources";
import { formatDate } from "@/utils/formatDate";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  priority,
}) => {
  return (
    <Card
      fillWidth
      href={href}
      transition="micro-medium"
      direction="column"
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
    >
      {images?.[0] && (
        <Media
          priority={priority}
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={images[0]}
          alt={"Thumbnail of " + title}
          aspectRatio="16 / 9"
        />
      )}
      <Row fillWidth>
        <Column maxWidth={28} paddingY="24" paddingX="l" gap="20" vertical="center">
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {title}
          </Text>
          {description?.trim() && (
            <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
              {description}
            </Text>
          )}
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">Read case study</Text>
          </Row>
        </Column>
      </Row>
    </Card>
  );
};
