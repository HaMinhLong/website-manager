import { Linkedin } from "./product";

export interface CategoryType {
  id?: number | string;
  text?: string;
  description?: string;
  url?: string;
  position?: number;
  parent?: number;
  droppable?: boolean;
  isHome?: boolean;
  images?: string;
  websiteId?: number;
  categoryGroupId?: number;
  createdAt?: string | Date;
  status?: number;
  collections?: Linkedin[];
}
