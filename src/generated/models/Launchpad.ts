/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Launchpad = {
    id?: string;
    name?: string;
    full_name?: string;
    status?: string;
    locality?: string;
    region?: string;
    timezone?: string;
    latitude?: number;
    longitude?: number;
    launch_attempts?: number;
    launch_successes?: number;
    rockets?: Array<string>;
    launches?: Array<string>;
    images?: {
        large?: Array<string>;
    };
    details?: string;
};
