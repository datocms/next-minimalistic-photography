import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query About {
    aboutPage {
      _seoMetaTags {
        tag
        attributes
        content
      }

      kicker
      title
      subtitle {
        value
      }
      content {
        value
      }
      signature {
        responsiveImage(imgixParams: { auto: format, w: 150 }) {
          ...DatoImage_responsiveImage
        }
      }
      image {
        focalPoint {
          x
          y
        }
        responsiveImage(imgixParams: { auto: format, h: 1400 }) {
          ...DatoImage_responsiveImage
        }
      }
    }
  }
`);