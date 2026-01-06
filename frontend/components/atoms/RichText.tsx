type RichTextProps = {
  content: string;
};

const RichText = ({ content }: RichTextProps) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

export default RichText;
