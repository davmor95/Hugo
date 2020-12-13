import * as axios from "axios";
export const SendToBot = () => {
    const src = 'http://hugoapp-env.eba-x29tu6ju.us-east-1.elasticbeanstalk.com/hugo/advice';
    return axios.post(src, );
}
