import { request } from '@/lib/dato';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';
import { ContactForm } from '@/components/ContactForm';
import { WhatsappIcon } from '@/components/WhatsappIcon';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { graphql } from '@/gql';

const query = graphql(/* GraphQL */ `
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


export default async function Home() {
  const { contactPage } = await request(query);

  if (!contactPage) {
    return null;
  }

  return (
    <main className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center">
      {renderMetaTags(contactPage._seoMetaTags)}
      <div className="mx-7 py-12 max-w-[700px] lg:m-0 lg:pr-32 lg:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
            {contactPage.kicker}
          </div>
          <h1 className="text-black font-serif mb-12 text-5xl lg:text-8xl tracking-tight">
            {contactPage.title}
          </h1>
          <div className="prose max-w-none">
            <StructuredText
              data={contactPage.content.value as StructuredTextDocument}
            />
          </div>
          {contactPage.phoneNumber && <div className="mt-5">
            <a
              href={generateWhatsAppLink(contactPage.phoneNumber)}
              className="w-full font-bold flex space-x-4 items-center text-[#128c7e] underline underline-offset-2 decoration-[#128c7e]"
            >
              <WhatsappIcon className="w-[2em]" />
              <span>Prefer to chat? WhatsApp me!</span>
            </a>
          </div>}
        </div>
      </div>
      <div className="mx-7 py-12 lg:mx-0 lg:py-0 lg:flex lg:items-center lg:justify-center">
        <ContactForm formId={contactPage.formsparkFormId} />
      </div>
    </main>
  );
}
