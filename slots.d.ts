declare module '@croct/plug/slot' {
  // Declare the versions of the slot
  type HomeBannerV1 = {
    title: string;
    subtitle: string;
    cta: {
      label: string;
      link: string;
    };
  };

  // Declare the slot map (slotName@2/3/4...)
  interface VersionedSlotMap {
    'banner-p': {
      latest: HomeBannerV1;
      '1': HomeBannerV1;
    };
  }
}

export {};
