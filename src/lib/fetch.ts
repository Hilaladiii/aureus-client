interface IFetch extends Omit<RequestInit, "body"> {
  url: string;
  body?: Record<string, any> | FormData;
}

export async function appFetch<T>({
  url,
  body,
  method = "GET",
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

  const response = await fetch(`/api/${url}`, fetchOptions);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors || "An error occurred");
  }

  return response.json();
}
