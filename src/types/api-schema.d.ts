/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/currencies": {
    /** List of currencies */
    get: {
      responses: {
        200: {
          content: {
            "application/json": {
              [key: string]: string;
            };
          };
        };
      };
    };
  };
  "/update_rates": {
    /** Update exchange rate */
    post: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
        400: {
          content: {
            "application/json": components["schemas"]["HttpException"];
          };
        };
        500: {
          content: {
            "application/json": components["schemas"]["HttpException"];
          };
        };
      };
    };
  };
  "/date/{date}": {
    /** Exchange rate by date */
    get: {
      parameters: {
        query?: {
          /** @example usd,eur,cny */
          symbols?: string;
        };
        path: {
          /**
           * Format: date
           * @example 2024-02-14
           */
          date: string;
        };
      };
      responses: {
        200: {
          content: {
            "application/json": components["schemas"]["Rates"];
          };
        };
      };
    };
  };
  "/period/simple/{period}": {
    /** Exchange rate by period (simple) */
    get: {
      parameters: {
        query?: {
          /** @example usd,eur,cny */
          symbols?: string;
        };
        path: {
          /** @example 2024-02 */
          period: string;
        };
      };
      responses: {
        200: {
          content: {
            "application/json": {
                /** Format: date */
                date?: string;
                rates?: components["schemas"]["Rates"];
              }[];
          };
        };
      };
    };
  };
  "/period/advanced": {
    /** Exchange rate by period (advanced) */
    get: {
      parameters: {
        query: {
          /** @example 2024-01 */
          from: string;
          /** @example 2024-02-14 */
          to: string;
          /** @example usd,eur */
          symbols?: string;
        };
      };
      responses: {
        200: {
          content: {
            "application/json": {
                /** Format: date */
                date?: string;
                rates?: components["schemas"]["Rates"];
              }[];
          };
        };
      };
    };
  };
  "/last": {
    /** Current exchange rate */
    get: {
      parameters: {
        query?: {
          /** @example usd,eur,cny */
          symbols?: string;
        };
      };
      responses: {
        200: {
          content: {
            "application/json": {
              /** Format: date */
              date?: string;
              rates?: components["schemas"]["Rates"];
            };
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * @example {
     *   "EUR": 1.1,
     *   "RUB": 0.011,
     *   "USD": 1
     * }
     */
    Rates: {
      [key: string]: number;
    };
    HttpException: {
      message?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
