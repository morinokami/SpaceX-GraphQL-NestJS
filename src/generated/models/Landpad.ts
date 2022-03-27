/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Landpad = {
    id?: string;
    name?: string;
    full_name?: string;
    status?: string;
    type?: string;
    locality?: string;
    region?: string;
    latitude?: number;
    longitude?: number;
    landing_attempts?: number;
    landing_successes?: number;
    wikipedia?: string;
    details?: string;
    launches?: Array<string>;
    images?: {
        large?: Array<string>;
    };
};
