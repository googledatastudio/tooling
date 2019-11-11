import { ClearInteraction, FieldsByConfigId, Message, ObjectTransform, ParsedImage, SendInteraction, SubscriptionsOptions, TableTransform } from './types';
export * from './types';
/**
 * Returns the width (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myWidth = dscc.getWidth();
 * console.log('My width is: ', myWidth);
 * ```
 */
export declare const getWidth: () => number;
/**
 * Returns the height (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myHeight = dscc.getHeight();
 * console.log('My height is: ', myHeight);
 * ```
 */
export declare const getHeight: () => number;
/**
 * Returns the componentId of the vis. Component ids uniquely identify a vis to
 * Data Studio.
 *
 * Usage:
 * ```
 * var myComponentId = dscc.getComponentId();
 * console.log('My componentId is: ', myComponentId);
 * ```
 */
export declare const getComponentId: () => string;
/**
 * Parses a `'\u00a0\u00a0'` delimited string into component parts. If any parts
 * are missing, they will be returned as undefined.
 *
 * Usage:
 * ```
 * const myImage = parseImage('originalurl.com\u00a0\u00a0proxiedurl.com\u00a0\u00a0alt text');
 *
 * expect(myImage).toEqual({
 *   originalUrl: 'originalurl.com',
 *   proxiedUrl: 'proxiedurl.com',
 *   altText: 'alt text',
 * });
 * ```
 */
export declare const parseImage: (value: string) => ParsedImage;
/**
 * Returns the fields indexed by their config id. Since many fields can be in
 * the same `METRIC`/`DIMENSION` selection, `configId` is mapped to `Field[]`.
 */
export declare const fieldsByConfigId: (message: Message) => FieldsByConfigId;
/**
 * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`
 */
export declare const tableTransform: TableTransform;
/**
 * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`
 */
export declare const objectTransform: ObjectTransform;
export declare const subscribeToData: <T>(cb: (componentData: T) => void, options: SubscriptionsOptions<T>) => () => void;
export declare const sendInteraction: SendInteraction;
export declare const clearInteraction: ClearInteraction;
