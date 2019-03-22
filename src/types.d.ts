declare module 'clear';
declare module 'dotf';
declare module 'insight' {
  export = Insight;
  class Insight {
    // tslint:disable-next-line:variable-name
    public _permissionTimeout: number;
    public optOut: boolean | undefined;

    constructor(options: {trackingCode: string; pkg: {name: string}});

    public askPermission(
      msg: string | undefined,
      cb: (err: any, result: any) => void
    ): void;

    public trackEvent(options: {
      category: string;
      action: string;
      label: string;
      value?: string;
    }): void;
  }
}
