import * as workaroundCrypto from "crypto";
global.crypto = workaroundCrypto.webcrypto;
import * as osc from "outscale-api";

async function createVolume(accessKey: string, secretKey: string, region: string, endpoint: string|undefined): Promise<osc.Volume | string> {
    let config = new osc.Configuration({
        basePath: endpoint == undefined ? "https://api." + region + ".outscale.com/api/v1" : endpoint,
        awsV4SignParameters: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
            service: "api",
            region: region,
        },
        // You can change the User-Agent like that
        headers: {
            "User-Agent": "node-volumes"
        }
    });

    const createParameters : osc.CreateVolumeOperationRequest = {
        createVolumeRequest: {subregionName: "eu-west-2a"}
    };

    const api = new osc.VolumeApi(config)
    return await api.createVolume(createParameters)
        .catch((error) => {
            return "Promise error" + error;
        })
        .then((result: osc.CreateVolumeResponse | string) => {
            if (typeof result === "string") {
                return result;
            } else if (result.volume == undefined) {
		return "result.volume is undefined for undefined reasons";
	    }
            return result.volume;
        }, (err_: any) => {
            return "bad credential or region?";
        });
}

function printVolume(volume: osc.Volume) {
    console.log("- volumeId: " + volume.volumeId);
    console.log("  size: " + volume.size);
    console.log("  state: " + volume.state);
    console.log("  volumeType: " + volume.volumeType);
    console.log("  subregionName: " + volume.subregionName);
    console.log("  iops: " + volume.iops);
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

    const endpoint = process.env.OSC_ENDPOINT_API;

    const result = await createVolume(accessKey, secretKey, region, endpoint);
/*        .catch((reason: any) => {
            return "Promise error 2";
        });*/
    if (typeof result === "string") {
        console.error("error: " + result);
        process.exit(1);
    }
    printVolume(result);
}

main();
