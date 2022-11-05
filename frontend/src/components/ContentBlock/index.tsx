import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import CenterContentBlock from "./CenterContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "center") return <CenterContentBlock {...props}/>;
  return null;
};

export default ContentBlock;
