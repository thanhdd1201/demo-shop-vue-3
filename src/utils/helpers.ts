import { AxiosError, AxiosResponse } from "axios";

export function transformData<T>(promise: Promise<AxiosResponse<T>>) {
    const data = promise.then(
        (val: AxiosResponse<T>) => val.data as T,
        (err: AxiosError) => [err, null] as [AxiosError, null]
    );
    return data;
}

