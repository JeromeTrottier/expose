import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import { Skeleton } from '@rneui/base';

type LazyLoadingImageProps = {
    profilePictureUrl: string | undefined;
    width?: number;
    height?: number;
    borderRadius?: number;
    isCircle?: boolean;
}

const LazyLoadingImage = ({
    profilePictureUrl, 
    width=50, 
    height=50, 
    borderRadius=10, 
    isCircle=false
}: LazyLoadingImageProps) => {

    const [isImageLoading, setIsImageLoading] = useState(false);

    return (
        <View>
            <Image 
                source={{
                    uri: profilePictureUrl
                }}
                style={{width: width, height: height, borderRadius: borderRadius}}
                onLoadStart={() => setIsImageLoading(true)}
                onLoadEnd={() => setIsImageLoading(false)}
            />

            {
                isImageLoading ? 
                <Skeleton style={[ 
                    styles.skeleton, 
                    {width: width, height: height, borderRadius: borderRadius}
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
    skeleton: {
        position: "absolute" 
    }
})