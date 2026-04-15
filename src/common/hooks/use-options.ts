import useSWR from "swr";
import { TRequestParams } from "../types/request";

interface UseOptionsProps<T> {
  keyFetch: string | null;
  params?: TRequestParams;
  fetcher: (url: string, params: TRequestParams) => Promise<any>;
  labelKey: keyof T;
  valueKey: keyof T;
}

export function useOptions<T>({
  keyFetch,
  fetcher,
  labelKey,
  valueKey,
  params,
}: UseOptionsProps<T>) {
  const { data, error, isLoading } = useSWR(
    keyFetch ? [keyFetch, params] : null,
    ([url, argParams]) => fetcher(url, argParams as TRequestParams),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  const rawItems: T[] = Array.isArray(data?.data?.items) ? data.data.items : [];

  const options = rawItems.map((item) => ({
    label: String(item[labelKey]),
    value: String(item[valueKey]),
  }));

  return {
    options,
    isLoading,
    isError: error,
  };
}
