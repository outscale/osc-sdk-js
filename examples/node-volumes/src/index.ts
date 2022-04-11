import * as workaroundCrypto from "crypto";
global.crypto = workaroundCrypto.webcrypto;
import * as osc from "outscale-api";

async function getVolumes(accessKey: string, secretKey: string, region: string): Promise<Array<osc.Volume> | string> {
    let config = new osc.Configuration({
        basePath: "https://api." + region + ".outscale.com/api/v1",
        awsV4SignParameters: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            service: "api",
            region: region,
        }
    });
    const readParameters : osc.ReadVolumesOperationRequest = {
        readVolumesRequest: {}
    };

    const api = new osc.VolumeApi(config)
    return await api.readVolumes(readParameters)
        .catch((error) => {
            return "Promise error" + error;
        })
        .then((result: osc.ReadVolumesResponse | string) => {
            if (typeof result === "string") {
                return result;
            }
            if (result.volumes === undefined || result.volumes.length == 0) {
                return "listing suceeded but it seems you have no volumes";
            }
            return result.volumes;
        }, (err_: any) => { 
            return "bad credential or region?";
        });
}

function printVolumes(volumes: Array<osc.Volume>) {
    for (const volume of volumes) {
        console.log("- volumeId: " + volume.volumeId);
        console.log("  size: " + volume.size);
        console.log("  state: " + volume.state);
        console.log("  volumeType: " + volume.volumeType);
        console.log("  subregionName: " + volume.subregionName);
        console.log("  iops: " + volume.iops);
    }
}

async function main() {
    const accessKey = process.env.OSC_ACCESS_KEY;
    if (accessKey == undefined) {
        console.error("OSC_ACCESS_KEY environment variable not set");
        process.exit(1);
    }

    const secretKey = process.env.OSC_SECRET_KEY;
    if (secretKey == undefined) {
        console.error("OSC_SECRET_KEY environment variable not set");
        process.exit(1);
    }

    const region = process.env.OSC_REGION;
    if (region == undefined) {
        console.error("OSC_REGION environment variable not set");
        process.exit(1);
    }

    const result = await getVolumes(accessKey, secretKey, region);
/*        .catch((reason: any) => {
            return "Promise error 2";
        });*/
    if (typeof result === "string") {
        console.error("error: " + result);
        process.exit(1);
    }
    printVolumes(result);
}

main();