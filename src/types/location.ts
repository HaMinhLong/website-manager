export interface LocationType {
  id?: number;
  name?: string;
  mobile?: string;
  email?: string;
  bankName?: string;
  address?: string;
  location?: string;
  websiteId?: number | string;
  website?: { id: number; name: string };
  createdAt?: string | Date;
  status?: number;
}
