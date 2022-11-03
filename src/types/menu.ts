export interface MenuType {
  id?: number | string;
  text?: string;
  url: string;
  orderBy?: number;
  position?: number;
  location?: number;
  parent?: string;
  icon?: string;
  websiteId?: string;
  website?: {
    id: number;
    name: string;
  };
  createdAt?: string | Date;
  status?: number;
  children: MenuType[];
  droppable?: boolean;
}
