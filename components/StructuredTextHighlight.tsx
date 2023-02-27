import { isParagraph, Record } from 'datocms-structured-text-utils';
import { ReactNode, createElement, ComponentType, Fragment } from 'react';
import {
  renderNodeRule,
  StructuredText,
  StructuredTextPropTypes,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

function Highligh({ children }: { children: ReactNode }) {
  return (
    <strong className="bg-gradient-to-r from-[#f4cf58] to-[#f4cf58] bg-no-repeat bg-[length:100%_0.4em] bg-[0_88%]">
      {children}
    </strong>
  );
}

type Props = Omit<StructuredTextPropTypes<Record, Record>, 'data'> & {
  data: StructuredTextDocument;
  highlightWith?: ComponentType<{ children: ReactNode }>;
};

export const StructuredTextHighlight = ({
  highlightWith: Highlighter = Highligh,
  ...props
}: Props) => {
  return (
    <StructuredText
      {...props}
      renderNode={(rawTagName, props, ...children) => {
        const tagName = ['mark'].includes(rawTagName)
          ? Highlighter
          : rawTagName;
        return createElement(tagName, props, ...children);
      }}
      customNodeRules={[
        renderNodeRule(isParagraph, ({ children, key }) => {
          return <Fragment key={key}>{children}</Fragment>;
        }),
      ]}
    />
  );
};
