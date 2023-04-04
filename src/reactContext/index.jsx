import Heading from "./component/Heading";
import Section from "./component/Section";

const ContextApp = () => {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={4}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={5}>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Section level={1}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default ContextApp;
