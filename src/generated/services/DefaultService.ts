/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capsule } from '../models/Capsule';
import type { Company } from '../models/Company';
import type { Core } from '../models/Core';
import type { Crew } from '../models/Crew';
import type { DocMeta } from '../models/DocMeta';
import type { Dragon } from '../models/Dragon';
import type { History } from '../models/History';
import type { Landpad } from '../models/Landpad';
import type { Launch } from '../models/Launch';
import type { Launchpad } from '../models/Launchpad';
import type { Payload } from '../models/Payload';
import type { QueryOptions } from '../models/QueryOptions';
import type { Roadster } from '../models/Roadster';
import type { Rocket } from '../models/Rocket';
import type { Ship } from '../models/Ship';
import type { Starlink } from '../models/Starlink';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Get all capsules
     * @returns Capsule default
     * @throws ApiError
     */
    public static getAllCapsules(): CancelablePromise<Array<Capsule>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/capsules',
        });
    }

    /**
     * Get one capsule
     * @param capsuleId ID of capsule
     * @returns Capsule default
     * @throws ApiError
     */
    public static getOneCapsule(
        capsuleId: string,
    ): CancelablePromise<Capsule> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryCapsules(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Capsule>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/capsules/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get company info
     * @returns Company default
     * @throws ApiError
     */
    public static getCompanyInfo(): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/company',
        });
    }

    /**
     * Get all cores
     * @returns Core default
     * @throws ApiError
     */
    public static getAllCores(): CancelablePromise<Array<Core>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/cores',
        });
    }

    /**
     * Get one core
     * @param coreId ID of core
     * @returns Core default
     * @throws ApiError
     */
    public static getOneCore(
        coreId: string,
    ): CancelablePromise<Core> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryCores(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Core>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/cores/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all crew members
     * @returns Crew default
     * @throws ApiError
     */
    public static getAllCrewMembers(): CancelablePromise<Array<Crew>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/crew',
        });
    }

    /**
     * Get one crew member
     * @param id ID of crew member
     * @returns Crew default
     * @throws ApiError
     */
    public static getOneCrewMember(
        id: string,
    ): CancelablePromise<Crew> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryCrewMembers(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Crew>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/crew/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all Dragons
     * @returns Dragon default
     * @throws ApiError
     */
    public static getAllDragons(): CancelablePromise<Array<Dragon>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/dragons',
        });
    }

    /**
     * Get one Dragon
     * @param id ID of Dragon
     * @returns Dragon default
     * @throws ApiError
     */
    public static getOneDragon(
        id: string,
    ): CancelablePromise<Dragon> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryDragons(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Dragon>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/dragons/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all history events
     * @returns History default
     * @throws ApiError
     */
    public static getAllHistory(): CancelablePromise<Array<History>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/history',
        });
    }

    /**
     * Get one history event
     * @param id ID of historic event
     * @returns History default
     * @throws ApiError
     */
    public static getOneHistory(
        id: string,
    ): CancelablePromise<History> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/history/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Query history events
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryHistory(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<History>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/history/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all landpads
     * @returns Landpad default
     * @throws ApiError
     */
    public static getAllLandpads(): CancelablePromise<Array<Landpad>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/landpads',
        });
    }

    /**
     * Get one landpad
     * @param id ID of landpad
     * @returns Landpad default
     * @throws ApiError
     */
    public static getOneLandpad(
        id: string,
    ): CancelablePromise<Landpad> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryLandpads(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Landpad>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/landpads/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all launches
     * @returns Launch default
     * @throws ApiError
     */
    public static getAllLaunches(): CancelablePromise<Array<Launch>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launches',
        });
    }

    /**
     * Get one launch
     * @param id ID of launch
     * @returns Launch default
     * @throws ApiError
     */
    public static getOneLaunch(
        id: string,
    ): CancelablePromise<Launch> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryLaunches(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Launch>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/launches/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all launchpads
     * @returns Launchpad default
     * @throws ApiError
     */
    public static getAllLaunchpads(): CancelablePromise<Array<Launchpad>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/launchpads',
        });
    }

    /**
     * Get one launchpad
     * @param id ID of launchpad
     * @returns Launchpad default
     * @throws ApiError
     */
    public static getOneLaunchpad(
        id: string,
    ): CancelablePromise<Launchpad> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryLaunchpads(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Launchpad>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/launchpads/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all payloads
     * @returns Payload default
     * @throws ApiError
     */
    public static getAllPayloads(): CancelablePromise<Array<Payload>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/payloads',
        });
    }

    /**
     * Get one payload
     * @param id ID of payload
     * @returns Payload default
     * @throws ApiError
     */
    public static getOnePayload(
        id: string,
    ): CancelablePromise<Payload> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryPayloads(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Payload>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/payloads/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Roadster Info
     * @returns Roadster default
     * @throws ApiError
     */
    public static getRoadsterInfo(): CancelablePromise<Roadster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/roadster',
        });
    }

    /**
     * Get all rockets
     * @returns Rocket default
     * @throws ApiError
     */
    public static getAllRockets(): CancelablePromise<Array<Rocket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/rockets',
        });
    }

    /**
     * Get one rocket
     * @param id ID of rocket
     * @returns Rocket default
     * @throws ApiError
     */
    public static getOneRocket(
        id: string,
    ): CancelablePromise<Rocket> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryRockets(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Rocket>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/rockets/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all ships
     * @returns Ship default
     * @throws ApiError
     */
    public static getAllShips(): CancelablePromise<Array<Ship>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/ships',
        });
    }

    /**
     * Get one ship
     * @param id ID of ship
     * @returns Ship default
     * @throws ApiError
     */
    public static getOneShip(
        id: string,
    ): CancelablePromise<Ship> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryShips(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Ship>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/ships/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all Starlink sats
     * @returns Starlink default
     * @throws ApiError
     */
    public static getAllStarlinkSats(): CancelablePromise<Array<Starlink>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v4/starlink',
        });
    }

    /**
     * Get one Starlink sat
     * @param id ID of starlink sat
     * @returns Starlink default
     * @throws ApiError
     */
    public static getOneStarlinkSat(
        id: string,
    ): CancelablePromise<Starlink> {
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
     * @param requestBody
     * @returns any default
     * @throws ApiError
     */
    public static queryStarlinkSats(
        requestBody: QueryOptions,
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Starlink>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/starlink/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}