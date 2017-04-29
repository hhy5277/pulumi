// *** WARNING: this file was generated by the Coconut IDL Compiler (CIDLC).  ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as coconut from "@coconut/coconut";

import {ClientCertificate} from "./clientCertificate";
import {Deployment} from "./deployment";
import {MethodSetting} from "./method";
import {RestAPI} from "./restAPI";

export class Stage extends coconut.Resource implements StageArgs {
    public readonly name: string;
    public readonly restAPI: RestAPI;
    public readonly stageName: string;
    public deployment: Deployment;
    public cacheClusterEnabled?: boolean;
    public cacheClusterSize?: string;
    public clientCertificate?: ClientCertificate;
    public description?: string;
    public methodSettings?: MethodSetting[];
    public variables?: {[key: string]: string};

    constructor(args: StageArgs) {
        super();
        if (args.name === undefined) {
            throw new Error("Missing required argument 'name'");
        }
        this.name = args.name;
        if (args.restAPI === undefined) {
            throw new Error("Missing required argument 'restAPI'");
        }
        this.restAPI = args.restAPI;
        if (args.stageName === undefined) {
            throw new Error("Missing required argument 'stageName'");
        }
        this.stageName = args.stageName;
        if (args.deployment === undefined) {
            throw new Error("Missing required argument 'deployment'");
        }
        this.deployment = args.deployment;
        this.cacheClusterEnabled = args.cacheClusterEnabled;
        this.cacheClusterSize = args.cacheClusterSize;
        this.clientCertificate = args.clientCertificate;
        this.description = args.description;
        this.methodSettings = args.methodSettings;
        this.variables = args.variables;
    }
}

export interface StageArgs {
    readonly name: string;
    readonly restAPI: RestAPI;
    readonly stageName: string;
    deployment: Deployment;
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: string;
    clientCertificate?: ClientCertificate;
    description?: string;
    methodSettings?: MethodSetting[];
    variables?: {[key: string]: string};
}

