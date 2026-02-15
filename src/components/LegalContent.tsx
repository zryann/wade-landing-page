type LegalContentProps = {
  text: string;
};

const isSubHeading = (block: string) => /^\d+\.\d+\s+/.test(block);
const isMainHeading = (block: string) => /^\d+\.\s+/.test(block);

const isTitleLike = (block: string) => {
  if (block.length > 80) return false;
  if (/[.!?:]$/.test(block)) return false;
  return true;
};

const LegalContent = ({ text }: LegalContentProps) => {
  const blocks = text
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
      {blocks.map((block, index) => {
        if (isSubHeading(block)) {
          return (
            <h3 key={`${index}-${block.slice(0, 20)}`} className="text-lg font-display font-medium text-foreground mt-4">
              {block}
            </h3>
          );
        }

        if (isMainHeading(block) || isTitleLike(block)) {
          return (
            <h2 key={`${index}-${block.slice(0, 20)}`} className="text-xl font-display font-semibold text-foreground">
              {block}
            </h2>
          );
        }

        return <p key={`${index}-${block.slice(0, 20)}`}>{block}</p>;
      })}
    </div>
  );
};

export default LegalContent;
