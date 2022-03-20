/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Ship = {
    id?: string;
    name?: string;
    legacy_id?: string | null;
    model?: string | null;
    type?: string | null;
    roles?: Array<string>;
    active?: boolean;
    imo?: number | null;
    mmsi?: number | null;
    abs?: number | null;
    class?: number | null;
    mass_kg?: number | null;
    mass_lbs?: number | null;
    year_built?: number | null;
    home_port?: string | null;
    status?: string | null;
    speed_kn?: number | null;
    course_deg?: number | null;
    latitude?: number | null;
    longitude?: number | null;
    last_ais_update?: string | null;
    link?: string | null;
    image?: string | null;
    launches?: Array<string>;
};
