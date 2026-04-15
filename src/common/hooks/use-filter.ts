import { useSearchParams } from "next/navigation";
import { useMemo, useCallback } from "react";

type FilterParams = {
  page: number;
  perPage: number;
  [key: string]: any;
};

export interface Meta {
  total: number;
  perPage: number;
  page: number;
  totalPage: number;
}

export const useFilter = (
  initialFilters: Record<string, any> = {},
  meta?: Meta,
) => {
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    const params: FilterParams = {
      page: parseInt(searchParams.get("page") || "1", 10),
      perPage: parseInt(searchParams.get("perPage") || "10", 10),
      ...initialFilters,
    };

    for (const [key, value] of searchParams.entries()) {
      if (key !== "page" && key !== "perPage") {
        params[key] = value;
      }
    }
    return params;
  }, [searchParams, initialFilters]);

  const onChange = useCallback(
    (page: number, pageSize: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", String(page));
      newParams.set("perPage", String(pageSize));
    },
    [searchParams],
  );

  const setPage = useCallback(
    (page: number) => {
      onChange(page, filters.perPage);
    },
    [onChange, filters.perPage],
  );

  const setFilter = useCallback(
    (key: string, value: any) => {
      const newParams = new URLSearchParams(searchParams);
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }

      newParams.set("page", "1");
    },
    [searchParams],
  );

  const totalPages =
    meta?.totalPage || Math.ceil((meta?.total || 0) / filters.perPage) || 1;

  const pagination = useMemo(
    () => ({
      current: filters.page,
      pageSize: filters.perPage,
      total: meta?.total || 0,
      showSizeChanger: true,
      pageSizeOptions: ["10", "20", "50"],
      onChange: onChange,
    }),
    [filters.page, filters.perPage, meta, onChange],
  );

  return {
    filters,
    pagination,
    onChange,
    setFilter,
    setPage,
    totalPages,
  };
};
