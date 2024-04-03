import { HeroSection } from '@/components/page-components/HeroSection';
import { Header } from '@radix-ui/react-accordion';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <Header />
      <HeroSection title={'Veja nosso Blog'} />
      <h1>Blog</h1>
    </>
  );
}
