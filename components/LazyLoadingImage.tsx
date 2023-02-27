import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { Skeleton } from '@rneui/base';

type LazyLoadingImageProps = {
    profilePictureUrl: string | undefined;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    isCircle?: boolean;
    borderWidth?: number;
    shadowOffset?: number;
}

const LazyLoadingImage = ({
    profilePictureUrl, 
    width=50, 
    height=50, 
    borderRadius=10, 
    isCircle=false,
    borderWidth=2,
    shadowOffset=2
}: LazyLoadingImageProps) => {

    const [isImageLoading, setIsImageLoading] = useState(false);

    return (
        <View style={[styles.container, {width: width, height: height, borderRadius: borderRadius, shadowOffset: {width: shadowOffset, height: shadowOffset}}]}>
            <Image 
                source={{
                    uri: profilePictureUrl
                }}
                style={{width: '100%', height: '100%', borderRadius: borderRadius, borderWidth: borderWidth}}
                onLoadStart={() => setIsImageLoading(true)}
                onLoadEnd={() => setIsImageLoading(false)}
            />

            {
                isImageLoading ? 
                <Skeleton style={[ 
                    styles.skeleton, 
                    {width: '100%', height: '100%', borderRadius: borderRadius, borderWidth: borderWidth}
                ]} 
                circle={isCircle}
                />
                :
                <></>
            }
        </View>
    )
}

export default LazyLoadingImage

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0
    },
    skeleton: {
        position: "absolute",
        width: '100%',
        height: '100%'
    }
})