import {createClient} from 'contentful'
interface  IBlogPostFields  { 
    space:any;
    accessToken:any;}

export default createClient({
    space (string) : process.env.REACT_APP_API_SPACE,
    accessToken (string): process.env.REACT_APP_ACCESS_TOKEN
});

