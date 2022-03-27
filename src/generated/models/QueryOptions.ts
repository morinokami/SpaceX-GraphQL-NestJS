/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QueryOptions = {
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
};
