import { isParagraph, Record } from 'datocms-structured-text-utils';
import { Fragment } from 'react';
import {
  renderNodeRule,
  StructuredText,
  StructuredTextPropTypes,
} from 'react-datocms/structured-text';

// This component removes paragraphs from structured text coming from DatoCMS

export const UnwrapStructuredText = (
  props: StructuredTextPropTypes<Record, Record>,
) => {
  return (
    <StructuredText
      {...props}
      customNodeRules={[
        renderNodeRule(isParagraph, ({ children, key }) => {
          return <Fragment key={key}>{children}</Fragment>;
        }),
      ]}
    />
  );
};
