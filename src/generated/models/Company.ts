/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Company = {
    id?: string;
    name?: string | null;
    founder?: string | null;
    founded?: number | null;
    employees?: number | null;
    vehicles?: number | null;
    launch_sites?: number | null;
    test_sites?: number | null;
    ceo?: string | null;
    cto?: string | null;
    coo?: string | null;
    cto_propulsion?: string | null;
    valuation?: number | null;
    headquarters?: {
        address?: string | null;
        city?: string | null;
        state?: string | null;
    };
    links?: {
        website?: string | null;
        flickr?: string | null;
        twitter?: string | null;
        elon_twitter?: string | null;
    };
    summary?: string | null;
};
