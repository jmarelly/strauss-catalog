import type { Product } from '../../types';

export type ProductCardProps = {
  product: Product;
  onClick?: () => void;
};

export type ProductGridProps = {
  products: Product[];
  onProductClick?: (product: Product) => void;
};

export type ProductFiltersProps = {
  onFilterChange: (filters: import('../../types').ProductsQuery) => void;
  onLimitChange: (limit: number) => void;
  totalItems: number;
  currentLimit: number;
};
