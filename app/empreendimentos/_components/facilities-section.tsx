import { Title } from '@/components/title';
import { Imovel } from '@/types/global';
import {
  DumbbellIcon,
  WavesIcon,
  WifiIcon,
  BikeIcon,
  SunIcon,
  BabyIcon,
  BeefIcon,
  BriefcaseIcon,
  PackageIcon,
  ShowerHeadIcon,
  StarIcon,
  WineIcon,
  BookIcon,
  BeerIcon,
  LeafIcon,
  KeyIcon,
  ConciergeBellIcon,
  WashingMachineIcon,
  StoreIcon,
  DogIcon,
  FlameIcon,
  UsersIcon,
  PuzzleIcon,
  CakeIcon,
  JoystickIcon,
  MedalIcon,
} from 'lucide-react';

interface FacilitiesSectionProps {
  imovel: Imovel;
}

const facilitiesIcons: { [key: string]: React.ComponentType | null } = {
  academia: DumbbellIcon,
  bicicletário: BikeIcon,
  brinquedoteca: BabyIcon,
  churrasqueira: BeefIcon,
  'churrasqueira-com-pergolado': BeefIcon,
  coworking: BriefcaseIcon,
  'delivery-space': PackageIcon,
  ducha: ShowerHeadIcon,
  'espaço-com-espelho-dagua': StarIcon,
  'espaço-cross-training': DumbbellIcon,
  'espaço-gourmet': WineIcon,
  'espaço-kids': BabyIcon,
  'espaço-leitura': BookIcon,
  'espaço-multiuso': StarIcon,
  'espaço-pet-care': DogIcon,
  'espaço-sport-bar': BeerIcon,
  'espaço-zen': LeafIcon,
  'fitness-externo': DumbbellIcon,
  'hall-de-acesso': KeyIcon,
  'hall-social': ConciergeBellIcon,
  lavanderia: WashingMachineIcon,
  living: LeafIcon,
  lobby: StarIcon,
  lounge: StarIcon,
  market: StoreIcon,
  paisagismo: null,
  'patinete-place': StarIcon,
  'pet-place': DogIcon,
  piscina: WavesIcon,
  playground: PuzzleIcon,
  portaria: KeyIcon,
  'portária-com-clausura': KeyIcon,
  'praça-da-fogueira': FlameIcon,
  'praça-de-convivência': UsersIcon,
  'praça-de-leitura': BookIcon,
  'quadra-poliesportiva': null,
  'quadra-recreativa': PuzzleIcon,
  redário: LeafIcon,
  'sala-de-estudos': BookIcon,
  'salão-de-festas': CakeIcon,
  'salão-de-jogos': JoystickIcon,
  sauna: FlameIcon,
  'sky-lounge': StarIcon,
  solário: SunIcon,
  'spa-sauna': LeafIcon,
  'sport-play': MedalIcon,
};

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ imovel }) => {
  const facilityWIcons = imovel.attributes.facilities.map((facility) => {
    const Icon =
      facilitiesIcons[
        facility
          .toLowerCase()
          .replace(' ', '-')
          .replace('/', '')
          .replace(' ', '-')
          .replace('--', '-')
          .replace(' ', '')
      ];

    return {
      facility: facility,
      icon: Icon ? <Icon /> : <StarIcon />,
    };
  });

  return (
    <section className="w-full py-8 px-[15px] bg-main-red bg-no-repeat bg-cover">
      <div className="w-full max-w-[1216px] mx-auto">
        <Title
          subtitle="Mais facilidades para você"
          title="O Espaço que você precisa!"
          className="text-white"
        />

        {/* Listagem */}
        <div className="py-14">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {facilityWIcons.map((facilityWIcon, i) => (
              <li
                className="text-white font-medium text-xl flex items-center gap-4"
                key={i}
              >
                {facilityWIcon.icon}
                {facilityWIcon.facility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
