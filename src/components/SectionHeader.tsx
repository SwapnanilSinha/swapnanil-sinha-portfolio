import React from "react";
import { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  index: string;
  title: string;
  icon: LucideIcon;
};

/**
 * Editorial section marker: a tracked index label, a hairline rule, and a
 * trailing icon — used in place of a repeated colored icon-badge per section.
 */
const SectionHeader = ({ index, title, icon: Icon }: SectionHeaderProps) => {
  return (
    <div className="mb-10 md:mb-14">
      <div className="section-eyebrow">
        <span className="section-eyebrow-index">{index}</span>
        <span className="section-eyebrow-rule" aria-hidden="true" />
        <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionHeader;
