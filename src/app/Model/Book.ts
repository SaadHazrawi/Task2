export interface IBook { 
    title: string;
}
export interface IData {
    numFound: number;
    numFoundExact: boolean;
    start: number;
    docs: IBook[];
    q: string;
    num_found: string;
}