import { memo } from "react";

import { Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";

export interface TextProps {
  title: string;
}

const Text = ({ title }: TextProps) => {
  return <Section>{!!title && <Heading>{title}</Heading>}</Section>;
};

export default memo(Text);
