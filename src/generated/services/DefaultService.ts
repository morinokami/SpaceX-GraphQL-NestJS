/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capsule } from '../models/Capsule';
import type { Company } from '../models/Company';
import type { Core } from '../models/Core';
import type { Crew } from '../models/Crew';
import type { DocMeta } from '../models/DocMeta';
import type { Landpad } from '../models/Landpad';
import type { Launch } from '../models/Launch';
import type { QueryOptions } from '../models/QueryOptions';
import type { Roadster } from '../models/Roadster';
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
     * @returns any default
     * @throws ApiError
     */
    public static getOneCore(
        coreId: string,
    ): CancelablePromise<any> {
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
     * @returns any default
     * @throws ApiError
     */
    public static getAllCrewMembers(): CancelablePromise<any> {
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
     * @returns any default
     * @throws ApiError
     */
    public static getOneLandpad(
        id: string,
    ): CancelablePromise<any> {
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
     * @returns any default
     * @throws ApiError
     */
    public static getAllStarlinkSats(): CancelablePromise<any> {
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