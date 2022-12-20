export interface Filter {
    id: string,
    type: string,
    options: FilterOption[],
}

export interface FilterOption {
    value: string,
    selected: boolean
}