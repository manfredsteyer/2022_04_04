export interface Flight {

    id: number;         // int + double -2^52 ... +2^52 -1
    from: string;
    to: string;
    date: string;       // 2022-02-22T17:00:00+01:00, date-fns
    delayed: boolean;   // true, false, undefined, null

}