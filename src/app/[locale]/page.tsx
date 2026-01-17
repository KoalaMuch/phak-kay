import { unstable_setRequestLocale } from 'next-intl/server';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { Gallery } from '@/components/Gallery';
import { Rooms } from '@/components/Rooms';
import { Benefits } from '@/components/Benefits';
import { Location } from '@/components/Location';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Highlights />
        <Gallery />
        <Rooms />
        <Benefits />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
