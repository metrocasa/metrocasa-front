// Imovel
export interface Meta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface Imovel {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string;
    subtitle: string;
    address: string;
    address_json: {
      src: string;
    };
    fachada: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    address_link: string;
    materiais: {
      is_active: boolean;
      ri: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      a3: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      fase_1: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      fase_2: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      fase_3: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    panoramas: {
      is_active: boolean;
      data: {
        url: string;
        link: [number, number, number];
        name: string;
        position: [number, number, number];
      }[];
    };
    facilities: string[];
    about_the_region: string;
    video_hero: string;
    video_background: string;
    tour_virtual: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    main_gallery: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    activate_planta_section: boolean;
    zone: string;
    neighborhoods: string;
    status: string;
    hash: string;
    planta_comp: {
      id: string;
      planta_title: string;
      planta_image: {
        data: {
          attributes: {
            url: string;
            width: string;
            height: string;
          };
        };
      };
    }[];
    evolucao_obras: {
      is_active: boolean;
      percentual_de_obras: number;
      acabamento: number;
      terraplanagem: number;
      demolicao: number;
      estrutura: number;
      fechamento: number;
      fundacao_profunda: number;
      fundacao_superficial: number;
      gallery: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    };
  };
}

export interface Imoveis {
  data: Imovel[];
  meta: Meta;
}

// Materiais
export interface Materiais {
  data: {
    attributes: {
      books_valorizacao: {
        title: string;
        book_de_valorizacao: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
      campanha_semanal: {
        criativo_desktop: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        criativo_mobile: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        flyers: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
      fb_google_ads: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        }[];
      };
      links_uteis: {
        title: string;
        link: string;
      }[];
      materiais_graficos: {
        title: string;
        media: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

// POSTS
export interface Posts {
  data: {
    id: string;
    attributes: {
      title: string;
      createdAt: Date;
      updatedAt: Date;
      author: {
        data: {
          attributes: {
            username: string;
          };
        };
      };
      capa: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

// FEIRÃO
export interface FeiraoProps {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      imagem: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

// BANNER PROPS
export interface BannerProps {
  data: {
    id: number;
    attributes: {
      banner_title: string;
      banner_link: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      desktop_image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      mobile_image: {
        attributes: {
          url: string;
        };
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
