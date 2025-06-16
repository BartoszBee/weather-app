export type WheaterResultProps = {
    data:{
        current_condition:{
            temp_C:string;
            weatherDesc:{value:string}[];
            humidity:string;
            windspeedKmph:string;
        }[]
    }
}