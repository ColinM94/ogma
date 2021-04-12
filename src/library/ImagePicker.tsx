import * as React from "react"
import * as ExpoImagePicker from 'expo-image-picker'

type ImagePickerProps = {
    image: any,
    setImage: any
}

export const ImagePicker = () => {
    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    return (
        ]
    )
}