/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WordPressSiteMetadata {
  status: {
    /**
     * Critical issues related to security vulnerabilities or performance issues
     */
    criticalIssues: {
      [k: string]: unknown;
    }[];
    /**
     * Recommended improvements for better security and performance
     */
    recommendedImprovements: {
      [k: string]: unknown;
    }[];
    /**
     * Passed tests with no issues
     */
    passedTests: {
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  info: {
    wordpress: {
      version: string;
      siteLanguage: string;
      userLanguage: string;
      timezone: string;
      homeUrl: string;
      siteUrl: string;
      permalinkStructure: string;
      isHttps: boolean;
      isMultisite: boolean;
      allowRegistration: boolean;
      discouragingSearchEngines: boolean;
      defaultCommentStatus: string;
      environmentType: string;
      userCount: number;
      communicationWithWordpressOrg: boolean;
      [k: string]: unknown;
    };
    directoriesAndSizes: {
      wordpressDirectory: {
        location: string;
        size: number;
        [k: string]: unknown;
      };
      uploadsDirectory: {
        location: string;
        size: number;
        [k: string]: unknown;
      };
      themesDirectory: {
        location: string;
        size: number;
        [k: string]: unknown;
      };
      pluginsDirectory: {
        location: string;
        size: number;
        [k: string]: unknown;
      };
      databaseSize: number;
      totalInstallationSize: number;
      [k: string]: unknown;
    };
    activeTheme: {
      name: string;
      version: string;
      author: string;
      authorWebsite?: string;
      parentTheme: string;
      features: string[];
      directoryLocation: string;
      autoUpdates: boolean;
      [k: string]: unknown;
    };
    inactiveThemes: {
      name: string;
      version: string;
      author: string;
      autoUpdates: boolean;
      [k: string]: unknown;
    }[];
    activePlugins: {
      name: string;
      version: string;
      author: string;
      autoUpdates: boolean;
      [k: string]: unknown;
    }[];
    inactivePlugins: {
      name: string;
      version: string;
      author: string;
      autoUpdates: boolean;
      [k: string]: unknown;
    }[];
    mediaHandling: {
      activeEditor: string;
      imageMagickVersion: {
        number: number;
        string: string;
        [k: string]: unknown;
      };
      imagickVersion: string;
      /**
       * Whether file uploads are enabled
       */
      fileUploads: boolean;
      /**
       * Maximum combined size of an HTTP POST request
       */
      maxPostDataSize: number;
      /**
       * Maximum size of a single uploaded file
       */
      maxUploadFileSize: number;
      /**
       * Smaller of max post data size and max upload file size
       */
      maxEffectiveFileSize: number;
      /**
       * Maximum number of files allowed in a single HTTP POST request
       */
      maxFilesAllowed: number;
      /**
       * Version of the GD image optimization library
       */
      gdVersion: string;
      /**
       * File formats supported by the GD library
       */
      gdSupportedFormats: string[];
      /**
       * Version of the Ghostscript PDF rendering engine
       */
      ghostscriptVersion?: string;
      [k: string]: unknown;
    };
    serverEnvironment: {
      serverArchitecture: string;
      webServer: string;
      phpVariables: {
        [k: string]: unknown;
      };
      maxInputTime: number;
      maxUploadFileSize: number;
      curlVersion: string;
      suhosinInstalled: boolean;
      imagickInstalled: boolean;
      prettyPermalinksEnabled: boolean;
      htaccessRules: string[];
      [k: string]: unknown;
    };
    databaseConfiguration: {
      extension: string;
      serverVersion: string;
      clientVersion: string;
      databaseCredentials: {
        username: string;
        host: string;
        name: string;
        [k: string]: unknown;
      };
      charset: string;
      collation: string;
      maxPacketSize: number;
      maxConnections: number;
      [k: string]: unknown;
    };
    wordpressConstants: {
      abspath: string;
      wpHome: string;
      wpSiteurl: string;
      contentDirectory: string;
      pluginDirectory: string;
      memoryLimit: string;
      debuggingSettings: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    filesystemPermissions: {
      wordpressDirectory: boolean;
      wpContentDirectory: boolean;
      uploadsDirectory: boolean;
      pluginsDirectory: boolean;
      themesDirectory: boolean;
      [k: string]: unknown;
    };
    customPostTypesAndTaxonomies: {
      [k: string]: unknown;
    };
    /**
     * Debug log entries since the last saved state, keeping only unique logs
     */
    debugLog: {
      [k: string]: unknown;
    }[];
    databaseSchema: {
      tables: {
        [k: string]: unknown;
      }[];
      structure: {
        [k: string]: unknown;
      };
      rowCounts: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
