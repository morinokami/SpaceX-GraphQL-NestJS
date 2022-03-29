/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Payload = {
    id?: string;
    name?: string;
    type?: string;
    reused?: boolean;
    launch?: string;
    customers?: Array<string>;
    norad_ids?: Array<number>;
    nationalities?: Array<string>;
    manufacturers?: Array<string>;
    mass_kg?: number;
    mass_lbs?: number;
    orbit?: string;
    reference_system?: string;
    regime?: string;
    longitude?: string;
    semi_major_axis_km?: string;
    eccentricity?: string;
    periapsis_km?: string;
    apoapsis_km?: string;
    inclination_deg?: string;
    period_min?: string;
    lifespan_years?: string;
    epoch?: string;
    mean_motion?: string;
    raan?: string;
    arg_of_pericenter?: string;
    mean_anomaly?: string;
    dragon?: {
        capsule?: string;
        mass_returned_kg?: string;
        mass_returned_lbs?: string;
        flight_time_sec?: string;
        manifest?: string;
        water_landing?: string;
        land_landing?: string;
    };
};
