/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Get all capsules
     * Detailed info for all serialized Dragon capsules.
     * @returns any default
     * @throws ApiError
     */
    public static getAllCapsules(): CancelablePromise<Array<{
        /**
         * The reuse count.
         */
        reuse_count?: number;
        /**
         * The number of water landings.
         */
        water_landings?: number;
        /**
         * The number of land landings.
         */
        land_landings?: number;
        /**
         * When last updated.
         */
        last_update?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The serial number.
         */
        serial?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/capsules',
        });
    }

    /**
     * Get a capsule
     * Detailed info for a serialized Dragon capsule.
     * @param capsuleId The ID of the capsule.
     * @returns any default
     * @throws ApiError
     */
    public static getACapsule(
        capsuleId: string,
    ): CancelablePromise<{
        /**
         * The reuse count.
         */
        reuse_count?: number;
        /**
         * The number of water landings.
         */
        water_landings?: number;
        /**
         * The number of land landings.
         */
        land_landings?: number;
        /**
         * When last updated.
         */
        last_update?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The serial number.
         */
        serial?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/capsules/{capsuleID}',
            path: {
                'capsuleID': capsuleId,
            },
        });
    }

    /**
     * Query capsules
     * Detailed info for queried serialized Dragon capsules.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryCapsules(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The reuse count.
             */
            reuse_count?: number;
            /**
             * The number of water landings.
             */
            water_landings?: number;
            /**
             * The number of land landings.
             */
            land_landings?: number;
            /**
             * When last updated.
             */
            last_update?: string;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The serial number.
             */
            serial?: string;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/capsules/query',
            body: body,
        });
    }

    /**
     * Get company info
     * Detailed info about SpaceX as a company.
     * @returns any default
     * @throws ApiError
     */
    public static getCompanyInfo(): CancelablePromise<{
        /**
         * The headquarter address.
         */
        headquarters?: {
            /**
             * The street address.
             */
            address?: string;
            /**
             * The city.
             */
            city?: string;
            /**
             * The state.
             */
            state?: string;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The website address.
             */
            website?: string;
            /**
             * The Flickr address.
             */
            flickr?: string;
            /**
             * The Twitter address.
             */
            twitter?: string;
            /**
             * Elon Musk's Twitter address.
             */
            elon_twitter?: string;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The founder.
         */
        founder?: string;
        /**
         * The year founded.
         */
        founded?: number;
        /**
         * The number of employees.
         */
        employees?: number;
        /**
         * The number of vehicles.
         */
        vehicles?: number;
        /**
         * The number of launch sites.
         */
        launch_sites?: number;
        /**
         * The number of test sites.
         */
        test_sites?: number;
        /**
         * The current CEO.
         */
        ceo?: string;
        /**
         * The current CTO.
         */
        cto?: string;
        /**
         * The current COO.
         */
        coo?: string;
        /**
         * The CTO of Propulsion.
         */
        cto_propulsion?: string;
        /**
         * The current valuation.
         */
        valuation?: number;
        /**
         * The company summary.
         */
        summary?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/company',
        });
    }

    /**
     * Get all cores
     * Detailed info for all serialized first stage cores.
     * @returns any default
     * @throws ApiError
     */
    public static getAllCores(): CancelablePromise<{
        /**
         * The state.
         */
        headquarters?: {
            /**
             * The street address.
             */
            address?: string;
            /**
             * The city.
             */
            city?: string;
            /**
             * The state.
             */
            state?: string;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The website address.
             */
            website?: string;
            /**
             * The Flickr address.
             */
            flickr?: string;
            /**
             * The Twitter address.
             */
            twitter?: string;
            /**
             * Elon Musk's Twitter address.
             */
            elon_twitter?: string;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The founder.
         */
        founder?: string;
        /**
         * The year founded.
         */
        founded?: number;
        /**
         * The number of employees.
         */
        employees?: number;
        /**
         * The number of vehicles.
         */
        vehicles?: number;
        /**
         * The number of launch sites.
         */
        launch_sites?: number;
        /**
         * The number of test sites.
         */
        test_sites?: number;
        /**
         * The current CEO.
         */
        ceo?: string;
        /**
         * The current CTO.
         */
        cto?: string;
        /**
         * The current COO.
         */
        coo?: string;
        /**
         * The CTO of Propulsion.
         */
        cto_propulsion?: string;
        /**
         * The current valuation.
         */
        valuation?: number;
        /**
         * The company summary.
         */
        summary?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/cores',
        });
    }

    /**
     * Get a core
     * Detailed info for a serialized first stage core.
     * @param coreId The ID of the core.
     * @returns any default
     * @throws ApiError
     */
    public static getACore(
        coreId: string,
    ): CancelablePromise<{
        /**
         * The block.
         */
        block?: string;
        /**
         * The reuse count.
         */
        reuse_count?: number;
        /**
         * The number of RTLS attempts.
         */
        rtls_attempts?: number;
        /**
         * The number of RTLS landings.
         */
        rtls_landings?: number;
        /**
         * The number of ASDS attempts.
         */
        asds_attempts?: number;
        /**
         * The number of ASDS landings.
         */
        asds_landings?: number;
        /**
         * When last updated.
         */
        last_update?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The serial number.
         */
        serial?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/cores/{coreID}',
            path: {
                'coreID': coreId,
            },
        });
    }

    /**
     * Query cores
     * Detailed info for queried serialized first stage cores.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryCores(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The number of blocks.
             */
            block?: number;
            /**
             * The reuse count.
             */
            reuse_count?: number;
            /**
             * The number of RTLS attempts.
             */
            rtls_attempts?: number;
            /**
             * The number of RTLS landings.
             */
            rtls_landings?: number;
            /**
             * The number of ASDS attempts.
             */
            asds_attempts?: number;
            /**
             * The number of ASDS landings.
             */
            asds_landings?: number;
            /**
             * When last updated.
             */
            last_update?: string;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The serial number.
             */
            serial?: string;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/cores/query',
            body: body,
        });
    }

    /**
     * Get all crew members
     * Detailed info on all Dragon crew members.
     * @returns any default
     * @throws ApiError
     */
    public static getAllCrew(): CancelablePromise<Array<{
        /**
         * The name.
         */
        name?: string;
        /**
         * The space agency.
         */
        agency?: string;
        /**
         * An image.
         */
        image?: string;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/crew',
        });
    }

    /**
     * Get a crew member
     * Detailed info on a Dragon crew member.
     * @param id The ID of the crew member.
     * @returns any default
     * @throws ApiError
     */
    public static getACrewMember(
        id: string,
    ): CancelablePromise<{
        /**
         * The name.
         */
        name?: string;
        /**
         * The space agency.
         */
        agency?: string;
        /**
         * Image.
         */
        image?: string;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<any>;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/crew/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query crew members
     * Detailed info on queried Dragon crew members.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryCrewMembers(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The name.
             */
            name?: string;
            /**
             * The space agency.
             */
            agency?: string;
            /**
             * An image.
             */
            image?: string;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/crew/query',
            body: body,
        });
    }

    /**
     * Get all Dragons
     * Detailed info about all Dragon capsule versions.
     * @returns any default
     * @throws ApiError
     */
    public static getAllDragons(): CancelablePromise<Array<{
        /**
         * The heat shield.
         */
        heat_shield?: {
            /**
             * The heat shield material.
             */
            material?: string;
            /**
             * The heat shield size in meters.
             */
            size_meters?: number;
            /**
             * The heat shield temperature rating in degrees.
             */
            temp_degrees?: number;
            /**
             * The heat shield developing partner.
             */
            dev_partner?: string;
        };
        /**
         * The launch payload mass.
         */
        launch_payload_mass?: {
            /**
             * The launch mass in kilograms.
             */
            kg?: number;
            /**
             * The launch mass in pounds
             */
            lb?: number;
        };
        /**
         * The launch payload volume
         */
        launch_payload_vol?: {
            /**
             * The volume in cubic meters.
             */
            cubic_meters?: number;
            /**
             * The volume in cubic feet.
             */
            cubic_feet?: number;
        };
        /**
         * return_payload_mass
         */
        return_payload_mass?: {
            /**
             * The mass in kilograms.
             */
            kg?: number;
            /**
             * The mass in pounds
             */
            lb?: number;
        };
        /**
         * The return payload volume.
         */
        return_payload_vol?: {
            /**
             * The volume in cubic meters.
             */
            cubic_meters?: number;
            /**
             * The volume in cubic feet.
             */
            cubic_feet?: number;
        };
        /**
         * The Pressurized Capsule.
         */
        pressurized_capsule?: {
            /**
             * The Pressurized Capsule's Volume.
             */
            payload_volume?: {
                /**
                 * The pressurized capsule's volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The pressurized capsule's volume in cubic feet.
                 */
                cubic_feet?: number;
            };
        };
        /**
         * The trunk.
         */
        trunk?: {
            /**
             * The trunk volume.
             */
            trunk_volume?: {
                /**
                 * The trunk volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The trunk volume in cubic feet.
                 */
                cubic_feet?: number;
            };
            /**
             * The cargo.
             */
            cargo?: {
                /**
                 * The number of solar arrays in cargo.
                 */
                solar_array?: number;
                /**
                 * Whether the cargo is unpressurized.
                 */
                unpressurized_cargo?: boolean;
            };
        };
        /**
         * The height with trunk.
         */
        height_w_trunk?: {
            /**
             * The height with trunk in meters.
             */
            meters?: number;
            /**
             * The height with trunk in feet.
             */
            feet?: number;
        };
        /**
         * The diameter.
         */
        diameter?: {
            /**
             * The diameter in meters.
             */
            meters?: number;
            /**
             * The diameter in feet.
             */
            feet?: number;
        };
        /**
         * The first flight.
         */
        first_flight?: string;
        /**
         * The Flickr image links.
         */
        flickr_images?: Array<string>;
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The crew capacity.
         */
        crew_capacity?: number;
        /**
         * The sidewall angle in degrees.
         */
        sidewall_angle_deg?: number;
        /**
         * The orbit duration in years.
         */
        orbit_duration_yr?: number;
        /**
         * The dry mass in kilograms.
         */
        dry_mass_kg?: number;
        /**
         * The dry mass in kilograms.
         */
        dry_mass_lb?: number;
        /**
         * The thrusters.
         */
        thrusters?: Array<{
            /**
             * The thruster type.
             */
            type?: string;
            /**
             * The thruster amount.
             */
            amount?: number;
            /**
             * The number of thruster pods.
             */
            pods?: number;
            /**
             * The thruster fuel 1 type.
             */
            fuel_1?: string;
            /**
             * The thruster fuel 2 type
             */
            fuel_2?: string;
            /**
             * The specific impulse.
             */
            isp?: number;
            /**
             * The thrust.
             */
            thrust?: {
                /**
                 * The thrust in newtons.
                 */
                kN?: number;
                /**
                 * The thrust in total impulse.
                 */
                lbf?: number;
            };
        }>;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The description.
         */
        description?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/dragons',
        });
    }

    /**
     * Get a Dragon
     * Detailed info about a Dragon capsule version.
     * @param id The ID of the Dragon.
     * @returns any default
     * @throws ApiError
     */
    public static getADragon(
        id: string,
    ): CancelablePromise<{
        /**
         * The heat shield.
         */
        heat_shield?: {
            /**
             * The heat shield material
             */
            material?: string;
            /**
             * The heat shield size in meters.
             */
            size_meters?: number;
            /**
             * The heat shield maximum temperature in degrees.
             */
            temp_degrees?: number;
            /**
             * The heat shield developing partner.
             */
            dev_partner?: string;
        };
        /**
         * The launch payload mass.
         */
        launch_payload_mass?: {
            /**
             * The launch payload mass in kilograms.
             */
            kg?: number;
            /**
             * The mass in pounds.
             */
            lb?: number;
        };
        /**
         * The launch payload volume
         */
        launch_payload_vol?: {
            /**
             * The launch payload volume in cubic meters.
             */
            cubic_meters?: number;
            /**
             * The launch payload volume in cubic feet.
             */
            cubic_feet?: number;
        };
        /**
         * The return payload mass.
         */
        return_payload_mass?: {
            /**
             * The return payload mass in kilograms.
             */
            kg?: number;
            /**
             * The return payload mass in pounds.
             */
            lb?: number;
        };
        /**
         * The return payload volume.
         */
        return_payload_vol?: {
            /**
             * The return payload volume in cubic meters.
             */
            cubic_meters?: number;
            /**
             * The return payload volume in cubic feet.
             */
            cubic_feet?: number;
        };
        /**
         * The pressurized capsule.
         */
        pressurized_capsule?: {
            /**
             * The payload volume.
             */
            payload_volume?: {
                /**
                 * The pressurized capsule volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The pressurized capsulevolume in cubic feet.
                 */
                cubic_feet?: number;
            };
        };
        /**
         * The trunk.
         */
        trunk?: {
            /**
             * The trunk volume.
             */
            trunk_volume?: {
                /**
                 * The trunk volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The trunk volume in cubic feet.
                 */
                cubic_feet?: number;
            };
            /**
             * The cargo.
             */
            cargo?: {
                /**
                 * The solar array in cargo.
                 */
                solar_array?: number;
                /**
                 * The unpressurized cargo.
                 */
                unpressurized_cargo?: boolean;
            };
        };
        /**
         * The height with trunk.
         */
        height_w_trunk?: {
            /**
             * The height with trunk in meters
             */
            meters?: number;
            /**
             * The height with trunk in feet.
             */
            feet?: number;
        };
        /**
         * The diameter.
         */
        diameter?: {
            /**
             * The diameter in meters
             */
            meters?: number;
            /**
             * The diaameter in feet.
             */
            feet?: number;
        };
        /**
         * The first flight.
         */
        first_flight?: string;
        /**
         * Flickr image links.
         */
        flickr_images?: Array<string>;
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The crew capacity.
         */
        crew_capacity?: number;
        /**
         * The sidewall angle in degrees.
         */
        sidewall_angle_deg?: number;
        /**
         * The orbit duration in years.
         */
        orbit_duration_yr?: number;
        /**
         * The dry mass in kilograms.
         */
        dry_mass_kg?: number;
        /**
         * The dry mass in pounds.
         */
        dry_mass_lb?: number;
        /**
         * The thrusters.
         */
        thrusters?: Array<{
            /**
             * The thruster type.
             */
            type?: string;
            /**
             * The thruster amount.
             */
            amount?: number;
            /**
             * The number of thruster pods.
             */
            pods?: number;
            /**
             * The thruster fuel 1 type.
             */
            fuel_1?: string;
            /**
             * The thruster fuel 2 type.
             */
            fuel_2?: string;
            /**
             * The specific impulse.
             */
            isp?: number;
            /**
             * The thrust.
             */
            thrust?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
        }>;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The description.
         */
        description?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/dragons/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query Dragons
     * Detailed info about queried Dragon capsule versions.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryDragons(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The heat shield.
             */
            heat_shield?: {
                /**
                 * The heat shield material type.
                 */
                material?: string;
                /**
                 * The heat shield size in meters.
                 */
                size_meters?: number;
                /**
                 * The heat shield maximum temperature in degrees.
                 */
                temp_degrees?: number;
                /**
                 * The heat shield developing partner.
                 */
                dev_partner?: string;
            };
            /**
             * The launch payload mass.
             */
            launch_payload_mass?: {
                /**
                 * The launch payload mass in kilograms.
                 */
                kg?: number;
                /**
                 * The launch payload mass in pounds.
                 */
                lb?: number;
            };
            /**
             * The launch payload.
             */
            launch_payload_vol?: {
                /**
                 * The launch payload volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The  launch payload volume in cubic feet.
                 */
                cubic_feet?: number;
            };
            /**
             * The return payload mass.
             */
            return_payload_mass?: {
                /**
                 * The return payload mass in kilograms.
                 */
                kg?: number;
                /**
                 * The return payload mass in pounds.
                 */
                lb?: number;
            };
            /**
             * The return payload volume.
             */
            return_payload_vol?: {
                /**
                 * The return payload volume in cubic meters.
                 */
                cubic_meters?: number;
                /**
                 * The return payload volume in cubic feet.
                 */
                cubic_feet?: number;
            };
            /**
             * The pressurized capsule.
             */
            pressurized_capsule?: {
                /**
                 * The pressurized capsule payload volume.
                 */
                payload_volume?: {
                    /**
                     * The pressurized capsule volume in cubic meter.
                     */
                    cubic_meters?: number;
                    /**
                     * The pressurized capsule volume in cubic feet.
                     */
                    cubic_feet?: number;
                };
            };
            /**
             * The trunk.
             */
            trunk?: {
                /**
                 * The trunk volume.
                 */
                trunk_volume?: {
                    /**
                     * The trunk volume in cubic meter.
                     */
                    cubic_meters?: number;
                    /**
                     * The trunk volume in cubic feet.
                     */
                    cubic_feet?: number;
                };
                /**
                 * The cargo.
                 */
                cargo?: {
                    /**
                     * The solar array in cargo.
                     */
                    solar_array?: number;
                    /**
                     * Whether the cargo is unpressurized.
                     */
                    unpressurized_cargo?: boolean;
                };
            };
            /**
             * The height with trunk.
             */
            height_w_trunk?: {
                /**
                 * The height with trunk in meters.
                 */
                meters?: number;
                /**
                 * The height with trunk in feet.
                 */
                feet?: number;
            };
            /**
             * The diameter.
             */
            diameter?: {
                /**
                 * The diamter in meters.
                 */
                meters?: number;
                /**
                 * The diameter in feet.
                 */
                feet?: number;
            };
            /**
             * The first flight.
             */
            first_flight?: string;
            /**
             * The Flickr images links.
             */
            flickr_images?: Array<string>;
            /**
             * The name.
             */
            name?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * Whether active.
             */
            active?: boolean;
            /**
             * The crew capacity.
             */
            crew_capacity?: number;
            /**
             * The sidewall angle in degrees.
             */
            sidewall_angle_deg?: number;
            /**
             * The orbit duration in years.
             */
            orbit_duration_yr?: number;
            /**
             * The dry mass in kilograms.
             */
            dry_mass_kg?: number;
            /**
             * The dry mass in pounds.
             */
            dry_mass_lb?: number;
            /**
             * The thrusters.
             */
            thrusters?: Array<{
                /**
                 * The thruster type.
                 */
                type?: string;
                /**
                 * The thruster amount.
                 */
                amount?: number;
                /**
                 * The thruster pods.
                 */
                pods?: number;
                /**
                 * The thruster fuel 1.
                 */
                fuel_1?: string;
                /**
                 * The thruster fuel 2.
                 */
                fuel_2?: string;
                /**
                 * The thruster Isp.
                 */
                isp?: number;
                /**
                 * The thrust.
                 */
                thrust?: {
                    /**
                     * The thrust in kN.
                     */
                    kN?: number;
                    /**
                     * The thrust in lbf.
                     */
                    lbf?: number;
                };
            }>;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
            /**
             * The description.
             */
            description?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/dragons/query',
            body: body,
        });
    }

    /**
     * Get all history events
     * Detailed info on all SpaceX historical events.
     * @returns any default
     * @throws ApiError
     */
    public static getAllHistory(): CancelablePromise<Array<{
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The article.
             */
            article?: string;
        };
        /**
         * The title.
         */
        title?: string;
        /**
         * The event date in UTC.
         */
        event_date_utc?: string;
        /**
         * The event date in UNIX.
         */
        event_date_unix?: number;
        /**
         * The event details.
         */
        details?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/history',
        });
    }

    /**
     * Get a historic event
     * Detailed info on a SpaceX historical event.
     * @param id The ID of the historic event.
     * @returns any default
     * @throws ApiError
     */
    public static getAHistory(
        id: string,
    ): CancelablePromise<{
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The article.
             */
            article?: string;
        };
        /**
         * The title.
         */
        title?: string;
        /**
         * The event date in UTC.
         */
        event_date_utc?: string;
        /**
         * The event date in UNIX.
         */
        event_date_unix?: number;
        /**
         * The event details.
         */
        details?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/history/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query historic events
     * Detailed info on queried SpaceX historical events.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryHistory(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The links.
             */
            links?: {
                /**
                 * The article.
                 */
                article?: string;
            };
            /**
             * The title.
             */
            title?: string;
            /**
             * The event date in UTC.
             */
            event_date_utc?: string;
            /**
             * The event date in UNIX.
             */
            event_date_unix?: number;
            /**
             * The event details.
             */
            details?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/history/query',
            body: body,
        });
    }

    /**
     * Get all landpads
     * Detailed info about all landing pads and ships.
     * @returns any default
     * @throws ApiError
     */
    public static getAllLandpads(): CancelablePromise<Array<{
        /**
         * The images.
         */
        images?: {
            /**
             * The large images.
             */
            large?: Array<string>;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The full name.
         */
        full_name?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The locality.
         */
        locality?: string;
        /**
         * The region.
         */
        region?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The number of landing attempts.
         */
        landing_attempts?: number;
        /**
         * The number of landing successes.
         */
        landing_successes?: number;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The landpad details.
         */
        details?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/landpads',
        });
    }

    /**
     * Get a landpad
     * Detailed info about a landing pad or ship.
     * @param id The ID of the landpad.
     * @returns any default
     * @throws ApiError
     */
    public static getALandpad(
        id: string,
    ): CancelablePromise<{
        /**
         * The images.
         */
        images?: {
            /**
             * The large images.
             */
            large?: Array<string>;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The full name.
         */
        full_name?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The locality.
         */
        locality?: string;
        /**
         * The region.
         */
        region?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The number of landing attempts.
         */
        landing_attempts?: number;
        /**
         * The number of landing successes.
         */
        landing_successes?: number;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The landpad details.
         */
        details?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/landpads/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query landpads
     * Detailed info about queried landing pads and ships.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryLandpads(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The images.
             */
            images?: {
                /**
                 * The large images.
                 */
                large?: Array<string>;
            };
            /**
             * The name.
             */
            name?: string;
            /**
             * The full name.
             */
            full_name?: string;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * The locality.
             */
            locality?: string;
            /**
             * The region.
             */
            region?: string;
            /**
             * The latitude.
             */
            latitude?: number;
            /**
             * The longitude.
             */
            longitude?: number;
            /**
             * The number of landind attempts.
             */
            landing_attempts?: number;
            /**
             * The landing successes.
             */
            landing_successes?: number;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
            /**
             * The landpad details.
             */
            details?: string;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/landpads/query',
            body: body,
        });
    }

    /**
     * Get all launches
     * Detailed info about all launches.
     * @returns any default
     * @throws ApiError
     */
    public static getAllLaunches(): CancelablePromise<Array<{
        /**
         * The fairings.
         */
        fairings?: {
            /**
             * Reused.
             */
            reused?: boolean;
            /**
             * The recovery attempt.
             */
            recovery_attempt?: boolean;
            /**
             * Recovered.
             */
            recovered?: boolean;
            /**
             * The ships.
             */
            ships?: Array<any>;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * Reddit.
             */
            reddit?: {
                /**
                 * The campaign.
                 */
                campaign?: string;
                /**
                 * The launch.
                 */
                launch?: string;
                /**
                 * The media.
                 */
                media?: string;
                /**
                 * The recovery.
                 */
                recovery?: string;
            };
            /**
             * The Flickr images.
             */
            flickr?: {
                /**
                 * The small images on Flickr.
                 */
                small?: Array<any>;
                /**
                 * The original images on Flickr.
                 */
                original?: Array<string>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in UNIX.
         */
        static_fire_date_unix?: number;
        /**
         * Whether by net.
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * The success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<{
            /**
             * The time.
             */
            time?: number;
            /**
             * The altitue.
             */
            altitude?: number;
            /**
             * The reason.
             */
            reason?: string;
        }>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<string>;
        /**
         * The ships.
         */
        ships?: Array<string>;
        /**
         * The capsules.
         */
        capsules?: Array<string>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * The date in UNIX.
         */
        date_unix?: number;
        /**
         * The local date.
         */
        date_local?: string;
        /**
         * The date precision.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The core.
             */
            core?: string;
            /**
             * The flight number.
             */
            flight?: number;
            /**
             * Whether has gridfins.
             */
            gridfins?: boolean;
            /**
             * Whether has legs.
             */
            legs?: boolean;
            /**
             * Whether reused.
             */
            reused?: boolean;
            /**
             * Whether landing attempted.
             */
            landing_attempt?: boolean;
            /**
             * The landing success.
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updating.
         */
        auto_update?: boolean;
        /**
         * Whether to-be-determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches',
        });
    }

    /**
     * Get a launch
     * Detailed info about a launch.
     * @param id The ID of the launch.
     * @returns any default
     * @throws ApiError
     */
    public static getALaunch(
        id: string,
    ): CancelablePromise<{
        /**
         * The fairings.
         */
        fairings?: {
            /**
             * The fairings reused.
             */
            reused?: boolean;
            /**
             * The recovery attempt.
             */
            recovery_attempt?: boolean;
            /**
             * The recovered.
             */
            recovered?: boolean;
            /**
             * The ships.
             */
            ships?: Array<any>;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * The reddit links
             */
            reddit?: {
                /**
                 * The reddit campaign
                 */
                campaign?: string;
                /**
                 * The reddit launch.
                 */
                launch?: string;
                /**
                 * The reddit media.
                 */
                media?: string;
                /**
                 * The reddit recovery.
                 */
                recovery?: string;
            };
            /**
             * The Flickr images.
             */
            flickr?: {
                /**
                 * The Flickr small images.
                 */
                small?: Array<any>;
                /**
                 * The Flickr original images.
                 */
                original?: Array<any>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in
         */
        static_fire_date_unix?: number;
        /**
         * Whether used a net.
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * The success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<any>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<any>;
        /**
         * The ships.
         */
        ships?: Array<any>;
        /**
         * The capsules.
         */
        capsules?: Array<any>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * Date in UNIX
         */
        date_unix?: number;
        /**
         * The date at local.
         */
        date_local?: string;
        /**
         * The precision date.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The cores' core.
             */
            core?: string;
            /**
             * The cores' flight.
             */
            flight?: string;
            /**
             * The cores' gridfins.
             */
            gridfins?: string;
            /**
             * The cores' legs.
             */
            legs?: string;
            /**
             * Reused.
             */
            reused?: boolean;
            /**
             * The landing attempt.
             */
            landing_attempt?: string;
            /**
             * The landing success.
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updated.
         */
        auto_update?: boolean;
        /**
         * To be determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query launches
     * Detailed info about queried launches.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryLaunches(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The fairings.
             */
            fairings?: string;
            /**
             * The links.
             */
            links?: {
                /**
                 * The patch.
                 */
                patch?: {
                    /**
                     * The small patch.
                     */
                    small?: string;
                    /**
                     * The large patch.
                     */
                    large?: string;
                };
                /**
                 * Reddit links.
                 */
                reddit?: {
                    /**
                     * The reddit campaign.
                     */
                    campaign?: string;
                    /**
                     * The reddit launch.
                     */
                    launch?: string;
                    /**
                     * The reddit media.
                     */
                    media?: string;
                    /**
                     * The reddit recovery.
                     */
                    recovery?: string;
                };
                /**
                 * Flickr images.
                 */
                flickr?: {
                    /**
                     * The Flickr small images.
                     */
                    small?: Array<any>;
                    /**
                     * The Flickr original images.
                     */
                    original?: Array<any>;
                };
                /**
                 * The presskit.
                 */
                presskit?: string;
                /**
                 * The webcast.
                 */
                webcast?: string;
                /**
                 * The YouTube ID.
                 */
                youtube_id?: string;
                /**
                 * The article.
                 */
                article?: string;
                /**
                 * The Wikipedia.
                 */
                wikipedia?: string;
            };
            /**
             * The static fire date in UTC.
             */
            static_fire_date_utc?: string;
            /**
             * The static fire date in UNIX
             */
            static_fire_date_unix?: number;
            /**
             * Whether a net was used.
             */
            net?: boolean;
            /**
             * The number of windows.
             */
            window?: number;
            /**
             * The rocket.
             */
            rocket?: string;
            /**
             * Whether a success.
             */
            success?: boolean;
            /**
             * The failures.
             */
            failures?: Array<{
                /**
                 * The failure time.
                 */
                time?: number;
                /**
                 * The failure altitude.
                 */
                altitude?: number;
                /**
                 * The failure reason.
                 */
                reason?: string;
            }>;
            /**
             * The launch details.
             */
            details?: string;
            /**
             * The crew.
             */
            crew?: Array<any>;
            /**
             * The ships.
             */
            ships?: Array<string>;
            /**
             * The capsules.
             */
            capsules?: Array<string>;
            /**
             * The payloads.
             */
            payloads?: Array<string>;
            /**
             * The launchpad.
             */
            launchpad?: string;
            /**
             * The flight number.
             */
            flight_number?: number;
            /**
             * The name.
             */
            name?: string;
            /**
             * The date in UTC.
             */
            date_utc?: string;
            /**
             * The date in UNIX.
             */
            date_unix?: number;
            /**
             * The date at local.
             */
            date_local?: string;
            /**
             * The date precision.
             */
            date_precision?: string;
            /**
             * Whether upcoming.
             */
            upcoming?: boolean;
            /**
             * The cores.
             */
            cores?: Array<{
                /**
                 * The cores core.
                 */
                core?: string;
                /**
                 * The flight number.
                 */
                flight?: number;
                /**
                 * The gridfins.
                 */
                gridfins?: boolean;
                /**
                 * The legs.
                 */
                legs?: boolean;
                /**
                 * Whether reused.
                 */
                reused?: boolean;
                /**
                 * Whether landing attempted.
                 */
                landing_attempt?: boolean;
                /**
                 * Whether landing successful.
                 */
                landing_success?: boolean;
                /**
                 * The landing type.
                 */
                landing_type?: string;
                /**
                 * The landpad.
                 */
                landpad?: string;
            }>;
            /**
             * Whether auto-updating.
             */
            auto_update?: boolean;
            /**
             * Whether to be determined.
             */
            tbd?: boolean;
            /**
             * The launch library ID.
             */
            launch_library_id?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/launches/query',
            body: body,
        });
    }

    /**
     * Get past launches
     * Detailed info about past launches.
     * @returns any default
     * @throws ApiError
     */
    public static getPastLaunches(): CancelablePromise<Array<{
        /**
         * The fairings.
         */
        fairings?: string;
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * Reddit.
             */
            reddit?: {
                /**
                 * The reddit campaign.
                 */
                campaign?: string;
                /**
                 * The reddit launch.
                 */
                launch?: string;
                /**
                 * The reddit media.
                 */
                media?: string;
                /**
                 * The reddit recovery.
                 */
                recovery?: string;
            };
            /**
             * The Flickr images.
             */
            flickr?: {
                /**
                 * The Flickr small images.
                 */
                small?: Array<any>;
                /**
                 * The Flickr original images.
                 */
                original?: Array<string>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in UNIX.
         */
        static_fire_date_unix?: number;
        /**
         * Whether by net
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * The success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<{
            /**
             * The failure time.
             */
            time?: number;
            /**
             * The failure altitude.
             */
            altitude?: number;
            /**
             * The failure reason.
             */
            reason?: string;
        }>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<string>;
        /**
         * The ships.
         */
        ships?: Array<string>;
        /**
         * The capsules.
         */
        capsules?: Array<string>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * The date in UNIX.
         */
        date_unix?: number;
        /**
         * The local date.
         */
        date_local?: string;
        /**
         * The date precision.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The core.
             */
            core?: string;
            /**
             * The flight number.
             */
            flight?: number;
            /**
             * Whether has gridfins.
             */
            gridfins?: boolean;
            /**
             * Whether has legs.
             */
            legs?: boolean;
            /**
             * Whether reused.
             */
            reused?: boolean;
            /**
             * Whether landing attempted.
             */
            landing_attempt?: boolean;
            /**
             * The landing success
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updated.
         */
        auto_update?: boolean;
        /**
         * To be determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches/past',
        });
    }

    /**
     * Get upcoming launches
     * Detailed info about upcoming launches.
     * @returns any default
     * @throws ApiError
     */
    public static getUpcomingLaunches(): CancelablePromise<Array<{
        /**
         * The fairings.
         */
        fairings?: {
            /**
             * Reused.
             */
            reused?: boolean;
            /**
             * The recovery attempt.
             */
            recovery_attempt?: boolean;
            /**
             * Recovered.
             */
            recovered?: boolean;
            /**
             * The ships.
             */
            ships?: Array<any>;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * Reddit.
             */
            reddit?: {
                /**
                 * The campaign.
                 */
                campaign?: string;
                /**
                 * The launch.
                 */
                launch?: string;
                /**
                 * The media.
                 */
                media?: string;
                /**
                 * The recovery.
                 */
                recovery?: string;
            };
            /**
             * The Flickr images.
             */
            flickr?: {
                /**
                 * The Flickr small images.
                 */
                small?: Array<any>;
                /**
                 * The Flickr original images.
                 */
                original?: Array<any>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in UNIX.
         */
        static_fire_date_unix?: number;
        /**
         * Whether by net
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * The success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<any>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<string>;
        /**
         * The ships.
         */
        ships?: Array<any>;
        /**
         * The capsules.
         */
        capsules?: Array<any>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * The date in UNIX.
         */
        date_unix?: number;
        /**
         * The local date.
         */
        date_local?: string;
        /**
         * The date precision.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The core.
             */
            core?: string;
            /**
             * The flight number.
             */
            flight?: number;
            /**
             * Whether has gridfins.
             */
            gridfins?: boolean;
            /**
             * Whether has legs.
             */
            legs?: boolean;
            /**
             * Whether reused.
             */
            reused?: boolean;
            /**
             * Whether landing attempted.
             */
            landing_attempt?: boolean;
            /**
             * The landing success
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updated.
         */
        auto_update?: boolean;
        /**
         * To be determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches/upcoming',
        });
    }

    /**
     * Get latest launch
     * Detailed info about latest launch.
     * @returns any default
     * @throws ApiError
     */
    public static getLatestLaunch(): CancelablePromise<{
        /**
         * The fairings.
         */
        fairings?: string;
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * The reddit links.
             */
            reddit?: {
                /**
                 * The reddit campaign.
                 */
                campaign?: string;
                /**
                 * The reddit launch.
                 */
                launch?: string;
                /**
                 * The reddit media.
                 */
                media?: string;
                /**
                 * The reddit recovery.
                 */
                recovery?: string;
            };
            /**
             * Flickr Images
             */
            flickr?: {
                /**
                 * The small Flickr images.
                 */
                small?: Array<any>;
                /**
                 * The original Flickr images.
                 */
                original?: Array<any>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in UNIX.
         */
        static_fire_date_unix?: number;
        /**
         * Whether used a net.
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * Whether a success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<any>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<string>;
        /**
         * The ships.
         */
        ships?: Array<string>;
        /**
         * The capsules.
         */
        capsules?: Array<string>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * The date in UNIX.
         */
        date_unix?: number;
        /**
         * The date at local.
         */
        date_local?: string;
        /**
         * The date precision.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The core's core.
             */
            core?: string;
            /**
             * The flight.
             */
            flight?: number;
            /**
             * Whether had gridfins.
             */
            gridfins?: boolean;
            /**
             * Whether had legs.
             */
            legs?: boolean;
            /**
             * Reused.
             */
            reused?: boolean;
            /**
             * Whether landing attempted
             */
            landing_attempt?: boolean;
            /**
             * Whether landing successful.
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updating.
         */
        auto_update?: boolean;
        /**
         * Whether to be determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches/latest',
        });
    }

    /**
     * Get next launch
     * Detailed info about next launches.
     * @returns any default
     * @throws ApiError
     */
    public static getNextLaunch(): CancelablePromise<{
        /**
         * The fairings.
         */
        fairings?: {
            /**
             * The reused fairings.
             */
            reused?: boolean;
            /**
             * The recovery attempt.
             */
            recovery_attempt?: boolean;
            /**
             * The recovered.
             */
            recovered?: boolean;
            /**
             * The ships.
             */
            ships?: Array<any>;
        };
        /**
         * Link addresses.
         */
        links?: {
            /**
             * The patch.
             */
            patch?: {
                /**
                 * The small patch.
                 */
                small?: string;
                /**
                 * The large patch.
                 */
                large?: string;
            };
            /**
             * The reddit links.
             */
            reddit?: {
                /**
                 * The reddit campaign.
                 */
                campaign?: string;
                /**
                 * The reddit launch.
                 */
                launch?: string;
                /**
                 * The reddit media.
                 */
                media?: string;
                /**
                 * The reddit recovery.
                 */
                recovery?: string;
            };
            /**
             * Flickr Images
             */
            flickr?: {
                /**
                 * The Flickr small images.
                 */
                small?: Array<any>;
                /**
                 * The Flickr original images.
                 */
                original?: Array<any>;
            };
            /**
             * The presskit.
             */
            presskit?: string;
            /**
             * The webcast.
             */
            webcast?: string;
            /**
             * The YouTube ID.
             */
            youtube_id?: string;
            /**
             * The article.
             */
            article?: string;
            /**
             * The Wikipedia.
             */
            wikipedia?: string;
        };
        /**
         * The static fire date in UTC.
         */
        static_fire_date_utc?: string;
        /**
         * The static fire date in UNIX.
         */
        static_fire_date_unix?: string;
        /**
         * Whether used a net.
         */
        net?: boolean;
        /**
         * The window.
         */
        window?: number;
        /**
         * The rocket.
         */
        rocket?: string;
        /**
         * Whether a success.
         */
        success?: boolean;
        /**
         * The failures.
         */
        failures?: Array<any>;
        /**
         * The launch details.
         */
        details?: string;
        /**
         * The crew.
         */
        crew?: Array<any>;
        /**
         * The ships.
         */
        ships?: Array<any>;
        /**
         * The capsules.
         */
        capsules?: Array<any>;
        /**
         * The payloads.
         */
        payloads?: Array<string>;
        /**
         * The launchpad.
         */
        launchpad?: string;
        /**
         * The flight number.
         */
        flight_number?: number;
        /**
         * The name.
         */
        name?: string;
        /**
         * The date in UTC.
         */
        date_utc?: string;
        /**
         * The date in UNIX.
         */
        date_unix?: number;
        /**
         * The date at local.
         */
        date_local?: string;
        /**
         * The date precision.
         */
        date_precision?: string;
        /**
         * Whether upcoming.
         */
        upcoming?: boolean;
        /**
         * The cores.
         */
        cores?: Array<{
            /**
             * The core's core.
             */
            core?: string;
            /**
             * The flight.
             */
            flight?: string;
            /**
             * Whether had gridfins.
             */
            gridfins?: boolean;
            /**
             * Whether had legs.
             */
            legs?: boolean;
            /**
             * Reused.
             */
            reused?: boolean;
            /**
             * Whether landing attempted
             */
            landing_attempt?: boolean;
            /**
             * Whether landing successful.
             */
            landing_success?: boolean;
            /**
             * The landing type.
             */
            landing_type?: string;
            /**
             * The landpad.
             */
            landpad?: string;
        }>;
        /**
         * Whether auto-updating.
         */
        auto_update?: boolean;
        /**
         * Whether to be determined.
         */
        tbd?: boolean;
        /**
         * The launch library ID.
         */
        launch_library_id?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches/next',
        });
    }

    /**
     * Get all launchpads
     * Detailed info about all launchpads.
     * @returns any default
     * @throws ApiError
     */
    public static getAllLaunchpads(): CancelablePromise<Array<{
        /**
         * The images.
         */
        images?: {
            /**
             * The large images.
             */
            large?: Array<string>;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The full name.
         */
        full_name?: string;
        /**
         * The locality.
         */
        locality?: string;
        /**
         * The region.
         */
        region?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The launch attempts.
         */
        launch_attempts?: number;
        /**
         * The launch successes.
         */
        launch_successes?: number;
        /**
         * The rockets.
         */
        rockets?: Array<string>;
        /**
         * The timezone.
         */
        timezone?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The launchpad details.
         */
        details?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launchpads',
        });
    }

    /**
     * Get a launchpad
     * Detailed info about a launchpad.
     * @param id The ID of the launchpad.
     * @returns any default
     * @throws ApiError
     */
    public static getALaunchpad(
        id: string,
    ): CancelablePromise<{
        /**
         * The images.
         */
        images?: {
            /**
             * The large images.
             */
            large?: Array<string>;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The full name.
         */
        full_name?: string;
        /**
         * The locality.
         */
        locality?: string;
        /**
         * The region.
         */
        region?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The launch attempts.
         */
        launch_attempts?: number;
        /**
         * The launch successes.
         */
        launch_successes?: number;
        /**
         * The rockets.
         */
        rockets?: Array<string>;
        /**
         * The timezone.
         */
        timezone?: string;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The launchpad details.
         */
        details?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launchpads/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query launchpads
     * Detailed info about queried launchpads.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryLaunchpads(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The images.
             */
            images?: {
                /**
                 * The large images.
                 */
                large?: Array<string>;
            };
            /**
             * The name.
             */
            name?: string;
            /**
             * The full name.
             */
            full_name?: string;
            /**
             * The locality.
             */
            locality?: string;
            /**
             * The region.
             */
            region?: string;
            /**
             * The latitude.
             */
            latitude?: number;
            /**
             * The longitude.
             */
            longitude?: number;
            /**
             * The launch attempts.
             */
            launch_attempts?: number;
            /**
             * The launch successes.
             */
            launch_successes?: number;
            /**
             * The rockets.
             */
            rockets?: Array<string>;
            /**
             * The timezone.
             */
            timezone?: string;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The launchpad details.
             */
            details?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/launchpads/query',
            body: body,
        });
    }

    /**
     * Get all payloads
     * Detailed info about all launch payloads.
     * @returns any default
     * @throws ApiError
     */
    public static getAllPayloads(): CancelablePromise<Array<{
        /**
         * The Dragon
         */
        dragon?: {
            /**
             * The Dragon capsule.
             */
            capsule?: string;
            /**
             * The mass returned in kilograms.
             */
            mass_returned_kg?: string;
            /**
             * The mass returned in pounds.
             */
            mass_returned_lbs?: string;
            /**
             * The flight time in seconds.
             */
            flight_time_sec?: string;
            /**
             * The manifest.
             */
            manifest?: string;
            /**
             * The water landing.
             */
            water_landing?: string;
            /**
             * The land landing.
             */
            land_landing?: string;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether reused.
         */
        reused?: boolean;
        /**
         * The launch.
         */
        launch?: string;
        /**
         * The customers.
         */
        customers?: Array<string>;
        /**
         * The NORAD IDs.
         */
        norad_ids?: Array<number>;
        /**
         * The nationalities.
         */
        nationalities?: Array<string>;
        /**
         * The manufacturers.
         */
        manufacturers?: Array<string>;
        /**
         * The mass in kilograms.
         */
        mass_kg?: number;
        /**
         * The mass in pounds.
         */
        mass_lbs?: number;
        /**
         * The orbit.
         */
        orbit?: string;
        /**
         * The reference system.
         */
        reference_system?: string;
        /**
         * the regime.
         */
        regime?: string;
        /**
         * The longitude.
         */
        longitude?: string;
        /**
         * The semi-major axix in kilometers.
         */
        semi_major_axis_km?: string;
        /**
         * The eccentricity.
         */
        eccentricity?: string;
        /**
         * The periapsis in kilometers.
         */
        periapsis_km?: string;
        /**
         * The apoapsis in kilometers.
         */
        apoapsis_km?: string;
        /**
         * The inclination degree.
         */
        inclination_deg?: string;
        /**
         * The period minimum.
         */
        period_min?: string;
        /**
         * The lifespan in years.
         */
        lifespan_years?: string;
        /**
         * The epoch.
         */
        epoch?: string;
        /**
         * The mean motion.
         */
        mean_motion?: string;
        /**
         * The right ascension of the ascending node.
         */
        raan?: string;
        /**
         * The argument of pericenter.
         */
        arg_of_pericenter?: string;
        /**
         * The mean anomaly.
         */
        mean_anomaly?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/payloads',
        });
    }

    /**
     * Get a payload
     * Detailed info about a launch payload.
     * @param id The ID of the payload.
     * @returns any default
     * @throws ApiError
     */
    public static getAPayload(
        id: string,
    ): CancelablePromise<{
        /**
         * The Dragon.
         */
        dragon?: {
            /**
             * The Dragon capsule.
             */
            capsule?: string;
            /**
             * The mass returned in kilograms.
             */
            mass_returned_kg?: string;
            /**
             * The mass returned in pounds.
             */
            mass_returned_lbs?: string;
            /**
             * The flight time in seconds.
             */
            flight_time_sec?: string;
            /**
             * The manifest.
             */
            manifest?: string;
            /**
             * The water landing.
             */
            water_landing?: string;
            /**
             * The land landing.
             */
            land_landing?: string;
        };
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether reused.
         */
        reused?: boolean;
        /**
         * The launch.
         */
        launch?: string;
        /**
         * The customers.
         */
        customers?: Array<string>;
        /**
         * The NORAD IDs.
         */
        norad_ids?: Array<any>;
        /**
         * The nationalities.
         */
        nationalities?: Array<string>;
        /**
         * The manufacturers.
         */
        manufacturers?: Array<string>;
        /**
         * The mass in kilograms.
         */
        mass_kg?: number;
        /**
         * The mass in pounds.
         */
        mass_lbs?: number;
        /**
         * The orbit.
         */
        orbit?: string;
        /**
         * The reference system.
         */
        reference_system?: string;
        /**
         * The regime.
         */
        regime?: string;
        /**
         * The longitude.
         */
        longitude?: string;
        /**
         * The semi-major axis in kilometers.
         */
        semi_major_axis_km?: string;
        /**
         * The eccesntricity.
         */
        eccentricity?: string;
        /**
         * The periapsis in kilometers.
         */
        periapsis_km?: string;
        /**
         * The apoapsis in kilometers.
         */
        apoapsis_km?: string;
        /**
         * The inclination in degrees.
         */
        inclination_deg?: string;
        /**
         * The period minimum.
         */
        period_min?: string;
        /**
         * The lifespan in years.
         */
        lifespan_years?: string;
        /**
         * The epoch.
         */
        epoch?: string;
        /**
         * The mean motion.
         */
        mean_motion?: string;
        /**
         * The right ascension of the ascending node.
         */
        raan?: string;
        /**
         * The argument of pericenter.
         */
        arg_of_pericenter?: string;
        /**
         * The mean anomaly.
         */
        mean_anomaly?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/payloads/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query payloads
     * Detailed info about queried launch payloads.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryPayloads(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The Dragon.
             */
            dragon?: {
                /**
                 * The capsule.
                 */
                capsule?: string;
                /**
                 * The mass returned in kilograms.
                 */
                mass_returned_kg?: string;
                /**
                 * The mass returned in pounds.
                 */
                mass_returned_lbs?: string;
                /**
                 * The flight time seconds.
                 */
                flight_time_sec?: number;
                /**
                 * The manifest.
                 */
                manifest?: string;
                /**
                 * The water landing.
                 */
                water_landing?: boolean;
                /**
                 * The land landing.
                 */
                land_landing?: boolean;
            };
            /**
             * The name.
             */
            name?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * Whether reused.
             */
            reused?: boolean;
            /**
             * The launch.
             */
            launch?: string;
            /**
             * The customers.
             */
            customers?: Array<string>;
            /**
             * The NORAG IDs.
             */
            norad_ids?: Array<number>;
            /**
             * The nationalities.
             */
            nationalities?: Array<string>;
            /**
             * The manufacturers.
             */
            manufacturers?: Array<string>;
            /**
             * The mass in kilograms.
             */
            mass_kg?: number;
            /**
             * The mass in pounds.
             */
            mass_lbs?: number;
            /**
             * The orbit.
             */
            orbit?: string;
            /**
             * The reference system.
             */
            reference_system?: string;
            /**
             * The regime.
             */
            regime?: string;
            /**
             * The longitude.
             */
            longitude?: string;
            /**
             * The semi-major axis in kilometers.
             */
            semi_major_axis_km?: number;
            /**
             * The excentricity.
             */
            eccentricity?: number;
            /**
             * The periapsis in kilometers.
             */
            periapsis_km?: number;
            /**
             * The apoapsis in kilometers.
             */
            apoapsis_km?: number;
            /**
             * The inclination in degrees.
             */
            inclination_deg?: number;
            /**
             * The period minimum.
             */
            period_min?: number;
            /**
             * The lifespan in years.
             */
            lifespan_years?: string;
            /**
             * The epoch.
             */
            epoch?: string;
            /**
             * The mean motion.
             */
            mean_motion?: number;
            /**
             * The right ascension of the ascending node.
             */
            raan?: number;
            /**
             * The argument of pericenter.
             */
            arg_of_pericenter?: number;
            /**
             * The mean anomaly.
             */
            mean_anomaly?: number;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/payloads/query',
            body: body,
        });
    }

    /**
     * Get Roadster Info
     * Detailed info about Elon's Tesla Roadster's current position.
     * @returns any default
     * @throws ApiError
     */
    public static getRoadsterInfo(): CancelablePromise<{
        /**
         * The name.
         */
        name?: string;
        /**
         * The launch date in UTC.
         */
        launch_date_utc?: string;
        /**
         * The launch date in UNIX.
         */
        launch_date_unix?: number;
        /**
         * The launch mass in kilograms.
         */
        launch_mass_kg?: number;
        /**
         * The launch mass in pounds.
         */
        launch_mass_lbs?: number;
        /**
         * The NORAD ID
         */
        norad_id?: number;
        /**
         * The discrete epoch.
         */
        epoch_jd?: number;
        /**
         * The orbit type.
         */
        orbit_type?: string;
        /**
         * The apoapsis astromical unit
         */
        apoapsis_au?: number;
        /**
         * The periapsis astronomical unit.
         */
        periapsis_au?: number;
        /**
         * The semi-major axis astronomical unit.
         */
        semi_major_axis_au?: number;
        /**
         * The eccentricity.
         */
        eccentricity?: number;
        /**
         * The inclination.
         */
        inclination?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The periapsis argument.
         */
        periapsis_arg?: number;
        /**
         * The period in days.
         */
        period_days?: number;
        /**
         * The speed in kilometers per hour.
         */
        speed_kph?: number;
        /**
         * The speed in miles per hour.
         */
        speed_mph?: number;
        /**
         * The Earth distance in kilomters.
         */
        earth_distance_km?: number;
        /**
         * The Earth distance in miles.
         */
        earth_distance_mi?: number;
        /**
         * The Mars distance in kilometers.
         */
        mars_distance_km?: number;
        /**
         * The Mars distance in miles.
         */
        mars_distance_mi?: number;
        /**
         * Flickr image links.
         */
        flickr_images?: Array<string>;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The video.
         */
        video?: string;
        /**
         * The Roadster details.
         */
        details?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/roadster',
        });
    }

    /**
     * Get all rockets
     * Detailed info about all rockets.
     * @returns any default
     * @throws ApiError
     */
    public static getAllRockets(): CancelablePromise<Array<{
        /**
         * The height.
         */
        height?: {
            /**
             * The height in meters.
             */
            meters?: number;
            /**
             * The height in feet.
             */
            feet?: number;
        };
        /**
         * The diameter.
         */
        diameter?: {
            /**
             * The height in meters.
             */
            meters?: number;
            /**
             * The height in feet.
             */
            feet?: number;
        };
        /**
         * The mass.
         */
        mass?: {
            /**
             * The mass in kilograms.
             */
            kg?: number;
            /**
             * The mass in pounds
             */
            lb?: number;
        };
        /**
         * The first stage.
         */
        first_stage?: {
            /**
             * The thrust at sea level.
             */
            thrust_sea_level?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The thrust vacuum.
             */
            thrust_vacuum?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * Whether reusable.
             */
            reusable?: boolean;
            /**
             * The engines
             */
            engines?: number;
            /**
             * The fuel amount in tons.
             */
            fuel_amount_tons?: number;
            /**
             * The burn time in seconds.
             */
            burn_time_sec?: number;
        };
        /**
         * The second stage.
         */
        second_stage?: {
            /**
             * The thrust.
             */
            thrust?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The payloads.
             */
            payloads?: {
                /**
                 * The fairing composite.
                 */
                composite_fairing?: {
                    /**
                     * The height.
                     */
                    height?: {
                        /**
                         * The height in meters.
                         */
                        meters?: number;
                        /**
                         * The height in feet.
                         */
                        feet?: string;
                    };
                    /**
                     * The diameter.
                     */
                    diameter?: {
                        /**
                         * The diameter in meters.
                         */
                        meters?: number;
                        /**
                         * The diameter in feet.
                         */
                        feet?: string;
                    };
                };
                /**
                 * The option 1.
                 */
                option_1?: string;
            };
            /**
             * Whether reusable.
             */
            reusable?: boolean;
            /**
             * The engines
             */
            engines?: number;
            /**
             * The fuel amount in tons.
             */
            fuel_amount_tons?: number;
            /**
             * The burn time in seconds.
             */
            burn_time_sec?: number;
        };
        /**
         * The engines.
         */
        engines?: {
            /**
             * The specific impulse.
             */
            isp?: {
                /**
                 * The Isp at sea level.
                 */
                sea_level?: number;
                /**
                 * The vacuum at sea level.
                 */
                vacuum?: number;
            };
            /**
             * The thrust at sea level.
             */
            thrust_sea_level?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The thrust vacuum.
             */
            thrust_vacuum?: {
                /**
                 * The thrust in kilogram newtons.
                 */
                kN?: number;
                /**
                 * The thrust in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The number.
             */
            number?: number;
            /**
             * The type.
             */
            type?: string;
            /**
             * The version.
             */
            version?: string;
            /**
             * The layout.
             */
            layout?: string;
            /**
             * The engine loss maximum.
             */
            engine_loss_max?: number;
            /**
             * The propellant 1.
             */
            propellant_1?: string;
            /**
             * The propellant 2.
             */
            propellant_2?: string;
            /**
             * The thrust to weight ratio.
             */
            thrust_to_weight?: number;
        };
        /**
         * The landing legs.
         */
        landing_legs?: {
            /**
             * The number of landing legs.
             */
            number?: number;
            /**
             * The landing legs material.
             */
            material?: string;
        };
        /**
         * The payload weights.
         */
        payload_weights?: Array<{
            /**
             * The item ID.
             */
            id?: string;
            /**
             * The item name.
             */
            name?: string;
            /**
             * The weight in kilograms.
             */
            kg?: number;
            /**
             * The weight in pounds.
             */
            lb?: number;
        }>;
        /**
         * The Flickr image links.
         */
        flickr_images?: Array<string>;
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The stages.
         */
        stages?: number;
        /**
         * The boosters.
         */
        boosters?: number;
        /**
         * The cost per launch.
         */
        cost_per_launch?: number;
        /**
         * The success rate percentage.
         */
        success_rate_pct?: number;
        /**
         * The first flight.
         */
        first_flight?: string;
        /**
         * The country.
         */
        country?: string;
        /**
         * The company.
         */
        company?: string;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The description.
         */
        description?: string;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/rockets',
        });
    }

    /**
     * Get a rocket
     * Detailed info about a rocket.
     * @param id The ID of the rocket.
     * @returns any default
     * @throws ApiError
     */
    public static getARocket(
        id: string,
    ): CancelablePromise<{
        /**
         * The height.
         */
        height?: {
            /**
             * The height in meters
             */
            meters?: number;
            /**
             * The height in feet.
             */
            feet?: number;
        };
        /**
         * The diameter.
         */
        diameter?: {
            /**
             * The height in meters
             */
            meters?: number;
            /**
             * The height in feet.
             */
            feet?: number;
        };
        /**
         * The mass.
         */
        mass?: {
            /**
             * The mass in kilograms.
             */
            kg?: number;
            /**
             * The mass in pounds.
             */
            lb?: number;
        };
        /**
         * The first stage.
         */
        first_stage?: {
            /**
             * The thrust at sea level.
             */
            thrust_sea_level?: {
                /**
                 * The kilonewtons.
                 */
                kN?: number;
                /**
                 * The pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The thrust vacuum.
             */
            thrust_vacuum?: {
                /**
                 * The kilonewtons.
                 */
                kN?: number;
                /**
                 * The pounds of force.
                 */
                lbf?: number;
            };
            /**
             * Whether reusable.
             */
            reusable?: boolean;
            /**
             * The number of engines.
             */
            engines?: number;
            /**
             * The fuel amount in tons.
             */
            fuel_amount_tons?: number;
            /**
             * The burn time in seconds.
             */
            burn_time_sec?: number;
        };
        /**
         * The second stage.
         */
        second_stage?: {
            /**
             * The thrust.
             */
            thrust?: {
                /**
                 * The kilonewtons.
                 */
                kN?: number;
                /**
                 * The pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The payloads.
             */
            payloads?: {
                /**
                 * The composite fairing.
                 */
                composite_fairing?: {
                    /**
                     * The height.
                     */
                    height?: {
                        /**
                         * The height in meters.
                         */
                        meters?: number;
                        /**
                         * The height in feet.
                         */
                        feet?: string;
                    };
                    /**
                     * The diameter.
                     */
                    diameter?: {
                        /**
                         * The diamter in meters.
                         */
                        meters?: number;
                        /**
                         * The diameter in feet.
                         */
                        feet?: string;
                    };
                };
                /**
                 * Option 1
                 */
                option_1?: string;
            };
            /**
             * Whether reusable.
             */
            reusable?: boolean;
            /**
             * The number of engines.
             */
            engines?: number;
            /**
             * The fuel amount in tons.
             */
            fuel_amount_tons?: number;
            /**
             * The burn time in seconds.
             */
            burn_time_sec?: number;
        };
        /**
         * The engines.
         */
        engines?: {
            /**
             * The Isp.
             */
            isp?: {
                /**
                 * The Isp at sea level.
                 */
                sea_level?: number;
                /**
                 * The Isp vacuum.
                 */
                vacuum?: number;
            };
            /**
             * The thrust at sea level.
             */
            thrust_sea_level?: {
                /**
                 * The thrust at sea level in kilonewtons.
                 */
                kN?: number;
                /**
                 * The thrust at sea level in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The thrust vacuum.
             */
            thrust_vacuum?: {
                /**
                 * The thrust vacuum in kilonewtons.
                 */
                kN?: number;
                /**
                 * The thrust vacuum in pounds of force.
                 */
                lbf?: number;
            };
            /**
             * The number.
             */
            number?: number;
            /**
             * The type.
             */
            type?: string;
            /**
             * The version.
             */
            version?: string;
            /**
             * The layout.
             */
            layout?: string;
            /**
             * The engine loss maximum.
             */
            engine_loss_max?: number;
            /**
             * The propellant 1.
             */
            propellant_1?: string;
            /**
             * The propellant 2.
             */
            propellant_2?: string;
            /**
             * The thrust to weight.
             */
            thrust_to_weight?: number;
        };
        /**
         * The landing legs.
         */
        landing_legs?: {
            /**
             * The number of landing legs.
             */
            number?: number;
            /**
             * The material.
             */
            material?: string;
        };
        /**
         * The payload weights.
         */
        payload_weights?: Array<{
            /**
             * The identifier.
             */
            id?: string;
            /**
             * The name.
             */
            name?: string;
            /**
             * The mass in kilograms.
             */
            kg?: number;
            /**
             * The mass in pounds
             */
            lb?: number;
        }>;
        /**
         * Flickr image links.
         */
        flickr_images?: Array<string>;
        /**
         * The name.
         */
        name?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The number of stages.
         */
        stages?: number;
        /**
         * The number of boosters.
         */
        boosters?: number;
        /**
         * The cost per launch.
         */
        cost_per_launch?: number;
        /**
         * The success rate PCT.
         */
        success_rate_pct?: number;
        /**
         * The first flight.
         */
        first_flight?: string;
        /**
         * The country.
         */
        country?: string;
        /**
         * The company.
         */
        company?: string;
        /**
         * The Wikipedia address.
         */
        wikipedia?: string;
        /**
         * The description.
         */
        description?: string;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/rockets/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query rockets
     * Detailed info about queried rockets.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryRockets(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The height.
             */
            height?: {
                /**
                 * The height in meters.
                 */
                meters?: number;
                /**
                 * The height in feet.
                 */
                feet?: number;
            };
            /**
             * The diameter.
             */
            diameter?: {
                /**
                 * The height in meters.
                 */
                meters?: number;
                /**
                 * The height in feet.
                 */
                feet?: number;
            };
            /**
             * The mass.
             */
            mass?: {
                /**
                 * The mass in kilograms.
                 */
                kg?: number;
                /**
                 * The mass in pounds.
                 */
                lb?: number;
            };
            /**
             * The first stage.
             */
            first_stage?: {
                /**
                 * The thrust at sea level.
                 */
                thrust_sea_level?: {
                    /**
                     * The kilonewtons.
                     */
                    kN?: number;
                    /**
                     * The pounds of force.
                     */
                    lbf?: number;
                };
                /**
                 * The thrust vacuum.
                 */
                thrust_vacuum?: {
                    /**
                     * The kilonewtons.
                     */
                    kN?: number;
                    /**
                     * The pounds of force.
                     */
                    lbf?: number;
                };
                /**
                 * Whether reusable.
                 */
                reusable?: boolean;
                /**
                 * The engines.
                 */
                engines?: number;
                /**
                 * The fuel amount in tons.
                 */
                fuel_amount_tons?: number;
                /**
                 * The burn time in seconds.
                 */
                burn_time_sec?: number;
            };
            /**
             * The second stage.
             */
            second_stage?: {
                /**
                 * The thrust.
                 */
                thrust?: {
                    /**
                     * The kilonewtons.
                     */
                    kN?: number;
                    /**
                     * The pounds of force.
                     */
                    lbf?: number;
                };
                /**
                 * The payloads.
                 */
                payloads?: {
                    /**
                     * The composite fairing.
                     */
                    composite_fairing?: {
                        /**
                         * The height.
                         */
                        height?: {
                            /**
                             * The height in meters.
                             */
                            meters?: number;
                            /**
                             * The height in feet.
                             */
                            feet?: string;
                        };
                        /**
                         * The diameter.
                         */
                        diameter?: {
                            /**
                             * The diameter in meters.
                             */
                            meters?: number;
                            /**
                             * The diameter in feet.
                             */
                            feet?: string;
                        };
                    };
                    /**
                     * The option 1.
                     */
                    option_1?: string;
                };
                /**
                 * Whether reusable.
                 */
                reusable?: boolean;
                /**
                 * The engines.
                 */
                engines?: number;
                /**
                 * The fuel amount in tons.
                 */
                fuel_amount_tons?: number;
                /**
                 * The burn time in seconds.
                 */
                burn_time_sec?: number;
            };
            /**
             * The engines
             */
            engines?: {
                /**
                 * The Isp.
                 */
                isp?: {
                    /**
                     * The Isp at sea level.
                     */
                    sea_level?: number;
                    /**
                     * The vacuum at sea level.
                     */
                    vacuum?: number;
                };
                /**
                 * The thrust at sea level.
                 */
                thrust_sea_level?: {
                    /**
                     * The kilonewtons.
                     */
                    kN?: number;
                    /**
                     * The pounds of force.
                     */
                    lbf?: number;
                };
                /**
                 * The thrust vacuum.
                 */
                thrust_vacuum?: {
                    /**
                     * The kilonewtons.
                     */
                    kN?: number;
                    /**
                     * The pounds of force.
                     */
                    lbf?: number;
                };
                /**
                 * The number.
                 */
                number?: number;
                /**
                 * The type.
                 */
                type?: string;
                /**
                 * The version
                 */
                version?: string;
                /**
                 * The layout.
                 */
                layout?: string;
                /**
                 * The engine loss maximum.
                 */
                engine_loss_max?: number;
                /**
                 * The propellant 1.
                 */
                propellant_1?: string;
                /**
                 * The propellant 2.
                 */
                propellant_2?: string;
                /**
                 * The thrust to weight.
                 */
                thrust_to_weight?: number;
            };
            /**
             * The landing legs.
             */
            landing_legs?: {
                /**
                 * The number of landing legs.
                 */
                number?: number;
                /**
                 * The material type.
                 */
                material?: string;
            };
            /**
             * The payload weights.
             */
            payload_weights?: Array<{
                /**
                 * The ID.
                 */
                id?: string;
                /**
                 * The name.
                 */
                name?: string;
                /**
                 * The weight in kilograms.
                 */
                kg?: number;
                /**
                 * The weight in pounds.
                 */
                lb?: number;
            }>;
            /**
             * The Flickr images links.
             */
            flickr_images?: Array<string>;
            /**
             * The name.
             */
            name?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * Whether active
             */
            active?: boolean;
            /**
             * The number of stages.
             */
            stages?: number;
            /**
             * The number of boosters.
             */
            boosters?: number;
            /**
             * The cost per launch.
             */
            cost_per_launch?: number;
            /**
             * The success rate percentage.
             */
            success_rate_pct?: number;
            /**
             * The first flight.
             */
            first_flight?: string;
            /**
             * The country.
             */
            country?: string;
            /**
             * The company.
             */
            company?: string;
            /**
             * The Wikipedia link.
             */
            wikipedia?: string;
            /**
             * The description.
             */
            description?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/rockets/query',
            body: body,
        });
    }

    /**
     * Get all ships
     * Detailed info about all ships in the SpaceX fleet.
     * @returns any default
     * @throws ApiError
     */
    public static getAllShips(): CancelablePromise<Array<{
        /**
         * The last AIS update.
         */
        last_ais_update?: string;
        /**
         * The legacy ID.
         */
        legacy_id?: string;
        /**
         * The model.
         */
        model?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The roles.
         */
        roles?: Array<string>;
        /**
         * The International Maritime Organization number.
         */
        imo?: number;
        /**
         * The Maritime Mobile Service Identity number.
         */
        mmsi?: number;
        /**
         * The number of autonomous spaceport drone ships.
         */
        abs?: number;
        /**
         * The class number.
         */
        class?: number;
        /**
         * The mass in kilograms.
         */
        mass_kg?: number;
        /**
         * The mass in pounds.
         */
        mass_lbs?: number;
        /**
         * The year built.
         */
        year_built?: number;
        /**
         * The home port.
         */
        home_port?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The speed in KN.
         */
        speed_kn?: string;
        /**
         * The course in degrees.
         */
        course_deg?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The link.
         */
        link?: string;
        /**
         * An image.
         */
        image?: string;
        /**
         * The name.
         */
        name?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/ships',
        });
    }

    /**
     * Get a ship
     * Detailed info about a ship in the SpaceX fleet.
     * @param id The ID of the ship.
     * @returns any default
     * @throws ApiError
     */
    public static getAShip(
        id: string,
    ): CancelablePromise<{
        /**
         * The last AIS update.
         */
        last_ais_update?: string;
        /**
         * The legacy ID.
         */
        legacy_id?: string;
        /**
         * The model
         */
        model?: string;
        /**
         * The type.
         */
        type?: string;
        /**
         * The roles.
         */
        roles?: Array<string>;
        /**
         * The International Maritime Organization number
         */
        imo?: number;
        /**
         * The Maritime Mobile Service Identity number.
         */
        mmsi?: number;
        /**
         * The autonomous spaceport drone ship.
         */
        abs?: string;
        /**
         * The class.
         */
        class?: string;
        /**
         * The mass in kilograms.
         */
        mass_kg?: number;
        /**
         * The mass in pounds.
         */
        mass_lbs?: number;
        /**
         * The year built.
         */
        year_built?: number;
        /**
         * The home port.
         */
        home_port?: string;
        /**
         * The current status.
         */
        status?: string;
        /**
         * The speed in KN.
         */
        speed_kn?: string;
        /**
         * The course in degrees.
         */
        course_deg?: string;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The link.
         */
        link?: string;
        /**
         * Image.
         */
        image?: string;
        /**
         * The name.
         */
        name?: string;
        /**
         * Whether active.
         */
        active?: boolean;
        /**
         * The launch identifiers.
         */
        launches?: Array<string>;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/ships/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query ships
     * Detailed info about queried ships in the SpaceX fleet.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryShips(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The last AIS update.
             */
            last_ais_update?: string;
            legacy_id?: string;
            /**
             * The model.
             */
            model?: string;
            /**
             * The type.
             */
            type?: string;
            /**
             * The roles.
             */
            roles?: Array<string>;
            /**
             * The International Maritime Organization number.
             */
            imo?: number;
            /**
             * The Maritime Mobile Service Identity number.
             */
            mmsi?: number;
            /**
             * The autonomous spaceport drone ship number.
             */
            abs?: number;
            /**
             * The class.
             */
            class?: number;
            /**
             * The mass in kilograms.
             */
            mass_kg?: number;
            /**
             * The mass in pounds.
             */
            mass_lbs?: number;
            /**
             * The year built.
             */
            year_built?: number;
            /**
             * The home port.
             */
            home_port?: string;
            /**
             * The current status.
             */
            status?: string;
            /**
             * The speed in KN.
             */
            speed_kn?: string;
            /**
             * The course in degrees.
             */
            course_deg?: string;
            /**
             * The latitude.
             */
            latitude?: number;
            /**
             * The longitude.
             */
            longitude?: number;
            /**
             * The link.
             */
            link?: string;
            /**
             * An image.
             */
            image?: string;
            /**
             * The name.
             */
            name?: string;
            /**
             * Whether active
             */
            active?: boolean;
            /**
             * The launch identifiers.
             */
            launches?: Array<string>;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/ships/query',
            body: body,
        });
    }

    /**
     * Get all Starlink sats
     * Detailed info about all Starlink satellites and orbits.
     * @returns any default
     * @throws ApiError
     */
    public static getAllStarlinkSats(): CancelablePromise<Array<{
        /**
         * The space track.
         */
        spaceTrack?: {
            /**
             * The Consultative Committee for Space Data Systems Orbit Mean-Elements Message version.
             */
            CCSDS_OMM_VERS?: string;
            /**
             * The comment
             */
            COMMENT?: string;
            /**
             * The creation date.
             */
            CREATION_DATE?: string;
            /**
             * The originator.
             */
            ORIGINATOR?: string;
            /**
             * The object name.
             */
            OBJECT_NAME?: string;
            /**
             * The object ID.
             */
            OBJECT_ID?: string;
            /**
             * The center name.
             */
            CENTER_NAME?: string;
            /**
             * The refernece frame.
             */
            REF_FRAME?: string;
            /**
             * The time system.
             */
            TIME_SYSTEM?: string;
            /**
             * The mean element theory.
             */
            MEAN_ELEMENT_THEORY?: string;
            /**
             * The epoch
             */
            EPOCH?: string;
            /**
             * The mean motion.
             */
            MEAN_MOTION?: number;
            /**
             * The excentricity.
             */
            ECCENTRICITY?: number;
            /**
             * The inclination.
             */
            INCLINATION?: number;
            /**
             * The RA of ASC node.
             */
            RA_OF_ASC_NODE?: number;
            /**
             * The argument of pericenter.
             */
            ARG_OF_PERICENTER?: number;
            /**
             * The mean anomaly.
             */
            MEAN_ANOMALY?: number;
            /**
             * The ephemeris type.
             */
            EPHEMERIS_TYPE?: number;
            /**
             * The classification type.
             */
            CLASSIFICATION_TYPE?: string;
            /**
             * The NORAD catalog ID.
             */
            NORAD_CAT_ID?: number;
            /**
             * The number of element sets.
             */
            ELEMENT_SET_NO?: number;
            /**
             * The rev at epoch.
             */
            REV_AT_EPOCH?: number;
            /**
             * The BSTAR.
             */
            BSTAR?: number;
            /**
             * The mean motion at DOT.
             */
            MEAN_MOTION_DOT?: number;
            /**
             * The mean motion at DDOT.
             */
            MEAN_MOTION_DDOT?: number;
            /**
             * The semimajor axis.
             */
            SEMIMAJOR_AXIS?: number;
            /**
             * The period.
             */
            PERIOD?: number;
            /**
             * The apoapsis.
             */
            APOAPSIS?: number;
            /**
             * The periapsis.
             */
            PERIAPSIS?: number;
            /**
             * The object type.
             */
            OBJECT_TYPE?: string;
            /**
             * The radar cross-section size.
             */
            RCS_SIZE?: string;
            /**
             * The country code.
             */
            COUNTRY_CODE?: string;
            /**
             * The launch date.
             */
            LAUNCH_DATE?: string;
            /**
             * The SITE.
             */
            SITE?: string;
            /**
             * The decay date.
             */
            DECAY_DATE?: string;
            /**
             * The decayed number.
             */
            DECAYED?: number;
            /**
             * The file.
             */
            FILE?: number;
            /**
             * The GP ID.
             */
            GP_ID?: number;
            /**
             * The TLE line 0.
             */
            TLE_LINE0?: string;
            /**
             * The TLE line 1.
             */
            TLE_LINE1?: string;
            /**
             * The TLE line 2.
             */
            TLE_LINE2?: string;
        };
        /**
         * The launch.
         */
        launch?: string;
        /**
         * The version.
         */
        version?: string;
        /**
         * The height in kilometers.
         */
        height_km?: number;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The velocity kilometers per second.
         */
        velocity_kms?: number;
        /**
         * The identifier.
         */
        id?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/starlink',
        });
    }

    /**
     * Get a Starlink sat
     * Detailed info about a Starlink satellite and orbit.
     * @param id The ID of the Starlink.
     * @returns any default
     * @throws ApiError
     */
    public static getAStarlinkSat(
        id: string,
    ): CancelablePromise<{
        /**
         * The space track.
         */
        spaceTrack?: {
            /**
             * The Consultative Committee for Space Data Systems Orbit Mean-Elements Message version.
             */
            CCSDS_OMM_VERS?: string;
            /**
             * The comment.
             */
            COMMENT?: string;
            /**
             * The creation date.
             */
            CREATION_DATE?: string;
            /**
             * The originator.
             */
            ORIGINATOR?: string;
            /**
             * The object name.
             */
            OBJECT_NAME?: string;
            /**
             * The object ID.
             */
            OBJECT_ID?: string;
            /**
             * The center name.
             */
            CENTER_NAME?: string;
            /**
             * The reference frame.
             */
            REF_FRAME?: string;
            /**
             * The time system.
             */
            TIME_SYSTEM?: string;
            /**
             * The mean element theory.
             */
            MEAN_ELEMENT_THEORY?: string;
            /**
             * The epoch.
             */
            EPOCH?: string;
            /**
             * The mean motion.
             */
            MEAN_MOTION?: number;
            /**
             * The eccentricity.
             */
            ECCENTRICITY?: number;
            /**
             * The inclination.
             */
            INCLINATION?: number;
            /**
             * The RA of ASC node.
             */
            RA_OF_ASC_NODE?: number;
            /**
             * The argument of pericenter.
             */
            ARG_OF_PERICENTER?: number;
            /**
             * The mean anomaly.
             */
            MEAN_ANOMALY?: number;
            /**
             * The ephemeris type.
             */
            EPHEMERIS_TYPE?: number;
            /**
             * The classification type.
             */
            CLASSIFICATION_TYPE?: string;
            /**
             * The NORAD catalog ID.
             */
            NORAD_CAT_ID?: number;
            /**
             * The number of element sets.
             */
            ELEMENT_SET_NO?: number;
            /**
             * The rev at epoch.
             */
            REV_AT_EPOCH?: number;
            /**
             * The BSTAR.
             */
            BSTAR?: number;
            /**
             * The mean motion at DOT.
             */
            MEAN_MOTION_DOT?: number;
            /**
             * The mean motion at DDOT.
             */
            MEAN_MOTION_DDOT?: number;
            /**
             * The semimajor axis.
             */
            SEMIMAJOR_AXIS?: number;
            /**
             * The period.
             */
            PERIOD?: number;
            /**
             * The apoapsis.
             */
            APOAPSIS?: number;
            /**
             * The periapsis.
             */
            PERIAPSIS?: number;
            /**
             * The object type.
             */
            OBJECT_TYPE?: string;
            /**
             * The radar cross-section size.
             */
            RCS_SIZE?: string;
            /**
             * The country code.
             */
            COUNTRY_CODE?: string;
            /**
             * The launch date
             */
            LAUNCH_DATE?: string;
            /**
             * The site.
             */
            SITE?: string;
            /**
             * The decay date.
             */
            DECAY_DATE?: string;
            /**
             * The decayed number.
             */
            DECAYED?: number;
            /**
             * The file.
             */
            FILE?: number;
            /**
             * The GP ID.
             */
            GP_ID?: number;
            /**
             * The TLE line 0.
             */
            TLE_LINE0?: string;
            /**
             * The TLE line 1.
             */
            TLE_LINE1?: string;
            /**
             * The TLE line 2.
             */
            TLE_LINE2?: string;
        };
        /**
         * The launch.
         */
        launch?: string;
        /**
         * The version.
         */
        version?: string;
        /**
         * The height in kilometers.
         */
        height_km?: number;
        /**
         * The latitude.
         */
        latitude?: number;
        /**
         * The longitude.
         */
        longitude?: number;
        /**
         * The velocity kilometers per second.
         */
        velocity_kms?: number;
        /**
         * The identifier.
         */
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/starlink/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query Starlink sats
     * Detailed info about queried Starlink satellites and orbits.
     * @param body
     * @returns any default
     * @throws ApiError
     */
    public static queryStarlinkSats(
        body: {
            /**
             * Accepts any valid MongoDB find() query.
             */
            query?: any;
            /**
             * Requested options
             */
            options?: {
                /**
                 * Fields to return (by default returns all fields).
                 */
                select?: string;
                /**
                 * Specify the collation
                 */
                collation?: any;
                /**
                 * Sort order.
                 */
                sort?: string;
                /**
                 * Paths which should be populated with other documents.
                 */
                populate?: Array<any>;
                /**
                 * Get/set the query projection.
                 */
                projection?: string;
                /**
                 * Should return plain javascript objects instead of Mongoose documents.
                 */
                lean?: boolean;
                /**
                 * If lean and leanWithId are true adds id field with string representation of _id to every document.
                 */
                leanWithId?: boolean;
                /**
                 * Use offset or page to set skip position.
                 */
                offset?: number;
                /**
                 * The page number.
                 */
                page?: number;
                /**
                 * The limit per page.
                 */
                limit?: number;
                /**
                 * Developers can provide custom labels for manipulating the response data.
                 */
                customLabels?: any;
                /**
                 * If pagination is set to false it will return all docs without adding limit condition.
                 */
                pagination?: boolean;
                /**
                 * Enable estimatedDocumentCount for larger datasets. Does not count based on given query so the count will match entire collection size.
                 */
                useEstimatedCount?: boolean;
                /**
                 * Enable custom function for count datasets.
                 */
                useCustomCountFn?: boolean;
                /**
                 * Set this to true if you need to support $geo queries.
                 */
                forceCountFn?: boolean;
                /**
                 * Set this to true which allows the MongoDB server to use more than 100 MB for query. This option can let you work around QueryExceededMemoryLimitNoDiskUseAllowed errors from the MongoDB server.
                 */
                allowDiskUse?: boolean;
                /**
                 * Determines the MongoDB nodes from which to read.
                 */
                options?: {
                    /**
                     * A of the listed preference options or aliases.
                     */
                    pref?: string;
                    /**
                     * Optional tags for this query (must be used with pref).
                     */
                    tags?: string;
                };
            };
        },
    ): CancelablePromise<{
        /**
         * The documentation.
         */
        docs?: Array<{
            /**
             * The space track.
             */
            spaceTrack?: {
                /**
                 * The Consultative Committee for Space Data Systems Orbit Mean-Elements Message version.
                 */
                CCSDS_OMM_VERS?: string;
                /**
                 * The comment.
                 */
                COMMENT?: string;
                /**
                 * The creation date.
                 */
                CREATION_DATE?: string;
                /**
                 * The originator.
                 */
                ORIGINATOR?: string;
                /**
                 * The object name.
                 */
                OBJECT_NAME?: string;
                /**
                 * The object ID.
                 */
                OBJECT_ID?: string;
                /**
                 * The center name.
                 */
                CENTER_NAME?: string;
                /**
                 * The reference frame.
                 */
                REF_FRAME?: string;
                /**
                 * The time system.
                 */
                TIME_SYSTEM?: string;
                /**
                 * The mean element theory.
                 */
                MEAN_ELEMENT_THEORY?: string;
                /**
                 * The epoch.
                 */
                EPOCH?: string;
                /**
                 * The mean motion.
                 */
                MEAN_MOTION?: number;
                /**
                 * The eccentricity.
                 */
                ECCENTRICITY?: number;
                /**
                 * The inclination.
                 */
                INCLINATION?: number;
                /**
                 * he RA of ASC node.
                 */
                RA_OF_ASC_NODE?: number;
                /**
                 * The argument of pericenter.
                 */
                ARG_OF_PERICENTER?: number;
                /**
                 * The mean anomaly.
                 */
                MEAN_ANOMALY?: number;
                /**
                 * The ephemeris type.
                 */
                EPHEMERIS_TYPE?: number;
                /**
                 * The classification type.
                 */
                CLASSIFICATION_TYPE?: string;
                /**
                 * The NORAD catalog ID.
                 */
                NORAD_CAT_ID?: number;
                /**
                 * The element set number.
                 */
                ELEMENT_SET_NO?: number;
                /**
                 * The rev at epoch.
                 */
                REV_AT_EPOCH?: number;
                /**
                 * The BSTAR.
                 */
                BSTAR?: number;
                /**
                 * The mean motion at DOT.
                 */
                MEAN_MOTION_DOT?: number;
                /**
                 * The mean motion at DDOT.
                 */
                MEAN_MOTION_DDOT?: number;
                /**
                 * The semimajor axis.
                 */
                SEMIMAJOR_AXIS?: number;
                /**
                 * The period.
                 */
                PERIOD?: number;
                /**
                 * The apoapsis.
                 */
                APOAPSIS?: number;
                /**
                 * The periapsis.
                 */
                PERIAPSIS?: number;
                /**
                 * The object type.
                 */
                OBJECT_TYPE?: string;
                /**
                 * The RCS size.
                 */
                RCS_SIZE?: string;
                /**
                 * The country code.
                 */
                COUNTRY_CODE?: string;
                /**
                 * The launch date.
                 */
                LAUNCH_DATE?: string;
                /**
                 * The SITE.
                 */
                SITE?: string;
                /**
                 * The decay date.
                 */
                DECAY_DATE?: string;
                /**
                 * The decayed.
                 */
                DECAYED?: number;
                /**
                 * The file.
                 */
                FILE?: number;
                /**
                 * The GP ID.
                 */
                GP_ID?: number;
                /**
                 * The TLE line 0.
                 */
                TLE_LINE0?: string;
                /**
                 * The TLE line 1.
                 */
                TLE_LINE1?: string;
                /**
                 * The TLE line 2.
                 */
                TLE_LINE2?: string;
            };
            /**
             * The launch.
             */
            launch?: string;
            /**
             * The version.
             */
            version?: string;
            /**
             * The height in kilometers.
             */
            height_km?: string;
            /**
             * The latitude.
             */
            latitude?: number;
            /**
             * The longitude.
             */
            longitude?: number;
            /**
             * The veloity in kilometers per second.
             */
            velocity_kms?: string;
            /**
             * The identifier.
             */
            id?: string;
        }>;
        /**
         * The total number of documentations.
         */
        totalDocs?: number;
        /**
         * The response offset.
         */
        offset?: number;
        /**
         * The response limit.
         */
        limit?: number;
        /**
         * The total number of pages.
         */
        totalPages?: number;
        /**
         * The current page.
         */
        page?: number;
        /**
         * The paging counter.
         */
        pagingCounter?: number;
        /**
         * Whether has previous page.
         */
        hasPrevPage?: boolean;
        /**
         * Whether has next page.
         */
        hasNextPage?: boolean;
        /**
         * The previous page.
         */
        prevPage?: string;
        /**
         * The next page.
         */
        nextPage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/starlink/query',
            body: body,
        });
    }

}