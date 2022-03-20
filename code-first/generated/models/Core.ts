/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Core = {
    id?: string;
    serial?: string;
    block?: string;
    status?: string;
    reuse_count?: number;
    rtls_attempts?: number;
    rtls_landings?: number;
    asds_attempts?: number;
    asds_landings?: number;
    last_update?: string;
    launches?: Array<string>;
};
