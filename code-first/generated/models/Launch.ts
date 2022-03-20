/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Launch = {
    id?: string;
    flight_number?: number;
    name?: string;
    date_utc?: string;
    date_unix?: number;
    date_local?: string;
    date_precision?: string;
    static_fire_date_utc?: string | null;
    static_fire_date_unix?: number | null;
    tbd?: boolean;
    net?: boolean;
    window?: number | null;
    rocket?: string | null;
    success?: boolean | null;
    failures?: Array<{
        time?: number | null;
        altitude?: number | null;
        reason?: string | null;
    }>;
    upcoming?: boolean;
    details?: string | null;
    fairings?: {
        reused?: boolean | null;
        recovery_attempt?: boolean | null;
        recovered?: boolean | null;
        ships?: Array<any>;
    };
    crew?: Array<string>;
    ships?: Array<string>;
    capsules?: Array<string>;
    payloads?: Array<string>;
    launchpad?: string | null;
    cores?: Array<{
        core?: string | null;
        flight?: number | null;
        gridfins?: boolean | null;
        legs?: boolean | null;
        reused?: boolean | null;
        landing_attempt?: boolean | null;
        landing_success?: boolean | null;
        landing_type?: string | null;
        landpad?: string | null;
    }>;
    links?: {
        patch?: {
            small?: string | null;
            large?: string | null;
        };
        reddit?: {
            campaign?: string | null;
            launch?: string | null;
            media?: string | null;
            recovery?: string | null;
        };
        flickr?: {
            small?: Array<string>;
            original?: Array<string>;
        };
        presskit?: string | null;
        webcast?: string | null;
        youtube_id?: string | null;
        article?: string | null;
        wikipedia?: string | null;
    };
    auto_update?: boolean;
    launch_library_id?: string | null;
};
