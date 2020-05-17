export enum ProjectChoice {
  VIZ = 'viz',
  CONNECTOR = 'connector',
}

export interface CommonConfig {
  yarn: boolean;
  projectName: string;
  projectChoice: ProjectChoice;
  basePath: string;
}

export enum AuthType {
  NONE = 'NONE',
  OAUTH2 = 'OAUTH2',
  KEY = 'KEY',
  USER_PASS = 'USER_PASS',
  USER_TOKEN = 'USER_TOKEN',
}

export interface VizConfigHasDefaults {
  ts: boolean;
}

export interface ConnectorConfigHasDefaults {
  manifestLogoUrl: string;
  manifestCompany: string;
  manifestCompanyUrl: string;
  manifestAddonUrl: string;
  manifestSupportUrl: string;
  manifestDescription: string;
  manifestSources: string;
  authType: AuthType;
}

export interface ConnectorConfig
  extends CommonConfig,
    ConnectorConfigHasDefaults {
  scriptId?: string;
  ts?: boolean;
}

export interface VizConfig extends CommonConfig, VizConfigHasDefaults {
  devBucket: string;
  prodBucket: string;
  ts?: boolean;
}

export interface Template {
  match: RegExp;
  replace: string;
}
