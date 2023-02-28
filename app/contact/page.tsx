import { ContactDocument } from '@/graphql/generated';
import { request } from '@/lib/dato';
import { renderMetaTags } from 'react-datocms/seo';
import {
  StructuredText,
  StructuredTextDocument,
} from 'react-datocms/structured-text';

import { ContactForm } from '@/components/ContactForm';
import { WhatsappIcon } from '@/components/WhatsappIcon';

export default async function Home() {
  const { contact } = await request(ContactDocument);

  if (!contact) {
    return null;
  }

  return (
    <main className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center">
      {renderMetaTags(contact._seoMetaTags)}
      <div className="mx-7 py-12 max-w-[700px] lg:m-0 lg:pr-32 lg:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20">
            {contact.kicker}
          </div>
          <h1 className="text-black font-serif mb-12 text-5xl lg:text-8xl tracking-tight">
            {contact.title}
          </h1>
          <div className="prose max-w-none">
            <StructuredText
              data={contact.content.value as StructuredTextDocument}
            />
          </div>
          <div className="mt-5">
            <a
              href="https://wa.me/message/22R7RKDSMVMYC1"
              className="w-full font-bold flex space-x-4 items-center text-[#128c7e] underline underline-offset-2 decoration-[#128c7e]"
            >
              <WhatsappIcon className="w-[2em]" />
              <span>Send me a WhatsApp message</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-7 py-12 lg:mx-0 lg:py-0 lg:flex lg:items-center lg:justify-center">
        <ContactForm />
      </div>
    </main>
  );
}
