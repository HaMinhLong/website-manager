export interface ProductType {
  id?: number;
  name?: string;
  url: string;
  price: number;
  negotiablePrice: number;
  description?: string;
  content: string;
  isSale?: boolean;
  images: string;
  websiteId?: string | number;
  categoryId?: string | number;
  producerId?: string | number;
  supplierId?: string | number;
  website?: Linkedin;
  category?: Linkedin;
  categoryName?: string;
  producer?: Linkedin;
  supplier?: Linkedin;
  createdAt?: string | Date;
  status?: number;
  productClass1s: ProductClass[];
  productClass2s: ProductClass[];
  productPrices: ProductPricesType[];
}

export interface ProductClass {
  id: number;
  name: string;
  images?: string;
  flag: string;
  productClass1s?: any;
  productClass2s?: any;
}

export interface ProductPricesType {
  id: number;
  price: number;
  negotiablePrice: number;
  amount: number;
  productClass1Id: number;
  productClass2Id: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  flag: "add" | "delete";
}
export interface Linkedin {
  id: number;
  name?: string;
  text?: string;
  title?: string;
}

export interface PaginationType {
  current?: number;
  total?: number;
  pageSize?: number;
}
