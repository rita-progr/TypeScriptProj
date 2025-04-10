type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

export function getQueryParams(params: OptionalRecord<string,string>){
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if(value!==undefined){
            searchParams.set(name, value);
        }
    })
    return `?${searchParams.toString()}`

}

/**
 * Функция добавления параметров строки запросов
 * @param params
 */

export function addQueryParams(params: OptionalRecord<string,string>){

    window.history.pushState(null, "", getQueryParams(params));
}