export interface Products {
  data: Product[];
  meta: Meta;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
  total: number;
  page: number;
  lastPage: number;
}
