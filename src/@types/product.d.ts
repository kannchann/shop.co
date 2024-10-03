export interface Product {
    _id: string;
    name: string;
    category: string;
    owner: string;
    price: number;
    mainImage: {
      localPath: string;
      url: string;
      _id: string;
    };
    stock: number;
    subImages: [
      {
        localPath: string;
        url: string;
        _id: string;
      },
    ];
    description: string;
  }

  export type ProductItemType = {
    id: string;
    name: string;
    price: number;
    mainImage: {
      url: string;
      localPath: string;
    };
    description: string;
    stock: number;
  };

  export interface CategoryType {
    name: string;
    _id: string;

  }