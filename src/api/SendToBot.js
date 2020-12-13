import * as axios from "axios";
export const SendToBot = async (data) => {
    const src = 'http://hugoapp-env.eba-x29tu6ju.us-east-1.elasticbeanstalk.com/hugo/advice';
    return await axios.post(src, data);
}
