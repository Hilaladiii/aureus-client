import { TRequestParams } from "../types/request";

interface IFetch extends Omit<RequestInit, "body"> {
  url: string;
  params?: TRequestParams;
  body?: Record<string, any> | FormData;
}

export async function appFetch<T>({
  url,
  body,
  method = "GET",
  params,
  ...options
}: IFetch): Promise<T> {
  const isFormData = body instanceof FormData;

  const headers = new Headers(options.headers);

  if (!isFormData && body) {
    headers.set("Content-Type", "application/json");
  }
  const fetchOptions: RequestInit = {
    method,
    credentials: "include",
    ...options,
    headers,
  };

  if (body) {
    fetchOptions.body = isFormData ? (body as FormData) : JSON.stringify(body);
  }

  let finalUrl = `/api/${url}`;

  if (params) {
    const cleanParams: Record<string, string> = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        cleanParams[key] = String(value);
      }
    });

    const queryString = new URLSearchParams(cleanParams).toString();

    if (queryString) {
      finalUrl = `${finalUrl}?${queryString}`;
    }
  }

  const response = await fetch(finalUrl, fetchOptions);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors || "An error occurred");
  }

  return response.json();
}
