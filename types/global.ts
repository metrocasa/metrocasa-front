// Imovel
export interface Imovel {
  id: number;
  attributes: {
    slug: string;
    title: string;
    description: string;
    subtitle: string;
    address: string;
    address_json: {
      className: string;
      height: string;
      width: string;
      loading: 'eager' | 'lazy';
      src: string;
      style: {
        border: number;
      };
    };
    fachada: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    active_on_materiais: boolean;
    materiais: {
      ri: string;
      books: {
        a3: string;
        fase_2: {
          link: string;
          disponivel: boolean;
        };
        fase_3: {
          link: string;
          disponivel: boolean;
        };
      };
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
  };
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
