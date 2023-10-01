import type { PaginationItems } from "@/components/pages/CafesPage/components/Pagination/types";

export const calculateTotalPages = (total: number, perPage: number) => {
  return Math.ceil(total / perPage);
};

export const generatePaginateData = <T>(
  allData: T[],
  perPage: number,
): { page: number; data: T[] }[] => {
  const totalPages = calculateTotalPages(allData.length, perPage);
  return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
    return {
      page,
      data: allData.slice((page - 1) * perPage, page * perPage),
    };
  });
};

export const generatePaginateDataWithoutFirstPage = <T>(
  allData: T[],
  perPage: number,
): { page: number; data: T[] }[] => {
  return generatePaginateData(allData, perPage).slice(1);
};

export const generatePaginationItems = (
  currentPage: number,
  total: number,
  perPage: number,
): PaginationItems => {
  const totalPages = calculateTotalPages(total, perPage);

  return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
    return {
      page,
      isCurrent: page === currentPage,
    };
  });
};
