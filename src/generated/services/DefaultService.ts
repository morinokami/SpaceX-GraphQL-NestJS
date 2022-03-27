/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capsule } from '../models/Capsule';
import type { Company } from '../models/Company';
import type { Core } from '../models/Core';
import type { DocMeta } from '../models/DocMeta';
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