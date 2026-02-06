import envConfig from "@infrastructure/constants/env";

type CustomOptions = RequestInit & {
    baseUrl?: string;
};

const request = async <Response>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    options: CustomOptions = {}
) => {
    const isFormData = options.body instanceof FormData;

    const headers: Record<string, string> = {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        'x-internal-token': envConfig?.INTERNAL_API_TOKEN ?? "",
        ...options.headers as Record<string, string>,
    };
    const baseUrl = options.baseUrl || envConfig?.API_URL;
    const fullUrl = `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;

    const res = await fetch(fullUrl, {
        ...options,
        method,
        headers: headers as HeadersInit,
        body: isFormData ? options.body : options.body ? JSON.stringify(options.body) : undefined,
    });

    return await res.json() as Response;
};

const fetchPublic = {
    get: <T>(url: string, options?: Omit<CustomOptions, "body">) => request<T>("GET", url, options),
    post: <T>(url: string, body: any, options?: Omit<CustomOptions, "body">) => request<T>("POST", url, { ...options, body }),
    put: <T>(url: string, body: any, options?: Omit<CustomOptions, "body">) => request<T>("PUT", url, { ...options, body }),
    patch: <T>(url: string, body: any, options?: Omit<CustomOptions, "body">) => request<T>("PATCH", url, { ...options, body }),
    delete: <T>(url: string, body: any, options?: Omit<CustomOptions, "body">) => request<T>("DELETE", url, { ...options, body }),
};

export default fetchPublic;