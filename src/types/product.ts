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
