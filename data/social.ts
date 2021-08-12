import {
   faLinkedinIn, IconDefinition,
} from '@fortawesome/free-brands-svg-icons'; // import the icons you need

export interface SocialDataType  {
    platform: string;
    link: string;
    icon: IconDefinition;
}

export const SocialData: Array<SocialDataType> = [
    {
        platform: "LinkedIn",
        link: 'https://www.linkedin.com/in/washington-shoji-77171bb5/',
        icon: faLinkedinIn,
        //icon: require('../assets/linkedin.png').default,
    },
   
];