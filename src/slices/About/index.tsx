import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("min-h-screen flex items-center justify-center")}
    >
      Placeholder component for about (variation: {slice.variation}) Slices
    </section>
  );
};

export default About;
