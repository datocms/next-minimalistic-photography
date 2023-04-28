/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query About {\n    aboutPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n\n      kicker\n      title\n      subtitle {\n        value\n      }\n      content {\n        value\n      }\n      signature {\n        responsiveImage(imgixParams: { auto: format, w: 150 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n      image {\n        focalPoint {\n          x\n          y\n        }\n        responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n": types.AboutDocument,
    "\n  query Contact {\n    contactPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      kicker\n      title\n      content {\n        value\n      }\n      phoneNumber\n      formsparkFormId\n    }\n  }\n": types.ContactDocument,
    "\n  query Layout {\n    site: _site {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n    }\n    contactPage {\n      phoneNumber\n    }\n    theme {\n      accentColor {\n        red\n        green\n        blue\n      }\n      highlightColor {\n        red\n        green\n        blue\n      }\n    }\n  }\n": types.LayoutDocument,
    "\n  query Home {\n    homepage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      title\n      tagline {\n        value\n      }\n      description {\n        value\n      }\n    }\n\n    photoshoots: allPhotoshoots(orderBy: position_ASC) {\n      id\n      ...Photoshoot_photoshoot\n    }\n\n    meta: _allPhotoshootsMeta {\n      count\n    }\n  }\n": types.HomeDocument,
    "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n": types.DatoImage_ResponsiveImageFragmentDoc,
    "\n  fragment Photoshoot_photoshoot on PhotoshootRecord {\n    coverImage {\n      responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n        width\n        height\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n": types.Photoshoot_PhotoshootFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query About {\n    aboutPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n\n      kicker\n      title\n      subtitle {\n        value\n      }\n      content {\n        value\n      }\n      signature {\n        responsiveImage(imgixParams: { auto: format, w: 150 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n      image {\n        focalPoint {\n          x\n          y\n        }\n        responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query About {\n    aboutPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n\n      kicker\n      title\n      subtitle {\n        value\n      }\n      content {\n        value\n      }\n      signature {\n        responsiveImage(imgixParams: { auto: format, w: 150 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n      image {\n        focalPoint {\n          x\n          y\n        }\n        responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n          ...DatoImage_responsiveImage\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Contact {\n    contactPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      kicker\n      title\n      content {\n        value\n      }\n      phoneNumber\n      formsparkFormId\n    }\n  }\n"): (typeof documents)["\n  query Contact {\n    contactPage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      kicker\n      title\n      content {\n        value\n      }\n      phoneNumber\n      formsparkFormId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Layout {\n    site: _site {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n    }\n    contactPage {\n      phoneNumber\n    }\n    theme {\n      accentColor {\n        red\n        green\n        blue\n      }\n      highlightColor {\n        red\n        green\n        blue\n      }\n    }\n  }\n"): (typeof documents)["\n  query Layout {\n    site: _site {\n      faviconMetaTags {\n        tag\n        attributes\n        content\n      }\n    }\n    contactPage {\n      phoneNumber\n    }\n    theme {\n      accentColor {\n        red\n        green\n        blue\n      }\n      highlightColor {\n        red\n        green\n        blue\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Home {\n    homepage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      title\n      tagline {\n        value\n      }\n      description {\n        value\n      }\n    }\n\n    photoshoots: allPhotoshoots(orderBy: position_ASC) {\n      id\n      ...Photoshoot_photoshoot\n    }\n\n    meta: _allPhotoshootsMeta {\n      count\n    }\n  }\n"): (typeof documents)["\n  query Home {\n    homepage {\n      _seoMetaTags {\n        tag\n        attributes\n        content\n      }\n      title\n      tagline {\n        value\n      }\n      description {\n        value\n      }\n    }\n\n    photoshoots: allPhotoshoots(orderBy: position_ASC) {\n      id\n      ...Photoshoot_photoshoot\n    }\n\n    meta: _allPhotoshootsMeta {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"): (typeof documents)["\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Photoshoot_photoshoot on PhotoshootRecord {\n    coverImage {\n      responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n        width\n        height\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Photoshoot_photoshoot on PhotoshootRecord {\n    coverImage {\n      responsiveImage(imgixParams: { auto: format, h: 1400 }) {\n        width\n        height\n        ...DatoImage_responsiveImage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;