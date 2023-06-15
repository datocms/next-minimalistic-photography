import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query Contact {
    contactPage {
      _seoMetaTags {
        tag
        attributes
        content
      }
      kicker
      title
      content {
        value
      }
      phoneNumber
      formsparkFormId
    }
  }
`);