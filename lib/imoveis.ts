import { useImoveis } from '@/contexts/imoveis-context';

export async function getStaticProps() {
  const { imoveis } = await useImoveis();

  return {
    props: {
      imoveis,
    },
  };
}
