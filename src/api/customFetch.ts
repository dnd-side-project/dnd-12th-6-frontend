export type FetchOptions<B = BodyInit | object | null> = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: B;
  headers?: Record<string, string>;
  isJson?: boolean;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function customFetch<T, B = BodyInit | object | null>(
  endpoint: string,
  options: FetchOptions<B> = {},
): Promise<T> {
  const { method = 'GET', body, headers = {}, isJson = true } = options;

  const defaultHeaders: Record<string, string> = {
    ...headers,
    ...(isJson ? { 'Content-Type': 'application/json' } : {}),
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: defaultHeaders,
      credentials: 'include',
      body: body ? (isJson ? JSON.stringify(body) : (body as BodyInit)) : undefined,
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    return isJson ? ((await response.json()) as T) : ((await response.text()) as unknown as T);
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
