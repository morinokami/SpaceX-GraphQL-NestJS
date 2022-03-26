/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capsule } from '../models/Capsule';
import type { Company } from '../models/Company';
import type { Core } from '../models/Core';
import type { DocMeta } from '../models/DocMeta';
import type { Launch } from '../models/Launch';
import type { Ship } from '../models/Ship';

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
        requestBody: {
            /**
             * Accepts any valid MongoDB find() query
             */
            query?: any;
            options?: {
                /**
                 * Fields to return (by default returns all fields)
                 */
                select?: string;
                /**
                 * Sort order
                 */
                sort?: string;
                /**
                 * Use offset or page to set skip position
                 */
                offset?: number;
                page?: number;
                limit?: number;
                /**
                 * If set to false, it will return all docs without adding limit condition
                 */
                pagination?: boolean;
                /**
                 * Paths which should be populated with other documents
                 */
                populate?: Array<any>;
            };
        },
    ): CancelablePromise<(DocMeta & {
        docs?: Array<Capsule>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v4/capsules/query',
            body: requestBody,
            mediaType: '*/*',
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

}