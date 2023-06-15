import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query Home {
    homepage {
      _seoMetaTags {
        tag
        attributes
        content
      }
      title
      tagline {
        value
      }
      description {
        value
      }
    }

    photoshoots: allPhotoshoots(orderBy: position_ASC) {
      id
      ...Photoshoot_photoshoot
    }

    meta: _allPhotoshootsMeta {
      count
    }
  }
`);