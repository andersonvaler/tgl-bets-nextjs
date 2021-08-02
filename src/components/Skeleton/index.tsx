import { Container } from "./style";
interface Props {
  width?: string;
  height?: string;
  radius?: string;
  margin?: string;
}

const Skeleton = ({ ...props }: Props) => {
  return (
    <Container>
      <span
        style={{
          width: props.width || "100%",
          height: props.height || "1rem",
          borderRadius: props.radius || "5px",
          margin: props.margin || "5px 0 ",
        }}
      />
    </Container>
  );
};

export default Skeleton;
