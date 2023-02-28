import { isParagraph, Record } from 'datocms-structured-text-utils';
import { Fragment } from 'react';
import {
  renderNodeRule,
  StructuredText,
  StructuredTextPropTypes,
} from 'react-datocms/structured-text';

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
