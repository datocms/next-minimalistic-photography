'use client';

import { Image } from 'react-datocms';

// The Eslint rules in Next.js impose limitations on the next/image component.
// To prevent conflicts with the Next.js Image component and avoid unnecessary
// warnings or errors, we are giving a local alias to the DatoCMS Image
// component, renaming it as DatoImage

export const DatoImage = Image;
