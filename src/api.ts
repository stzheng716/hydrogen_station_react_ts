import axios from "axios";

const BASE_URL: string = "http://localhost:3001";

class HydrogenStationsApi {

    static async request(
        endpoint: string,
        data: any = {},
        method: string = "get",
        contentType: string = "application/json"
    ) {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;

        const params = method === "get" ? data : {};
        const headers = {
            "Content-Type": contentType
        }

        try {
            return await axios({ url, method, data, params, headers });
        } catch (err: any) {
            if (err.response.data.msg) {
                let msg = err.response;
                console.log("messages", msg)
                //   throw Array.isArray(msg) ? msg : [msg];
            }
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getStations() {
        const res = await this.request("stations")
        console.log(res)
        return res?.data.station;
    }



}

export default HydrogenStationsApi;