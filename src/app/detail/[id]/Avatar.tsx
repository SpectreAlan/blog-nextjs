import React from 'react';
import Avatar from 'avataaars';

const getRandomValue = (array: any) => array[Math.floor(Math.random() * array.length)];
const RandomAvatar = () => {
    const randomOptions = {
        topType: ['NoHair', 'ShortHairShortCurly', 'Eyepatch', 'Hat'],
        accessoriesType: ['Blank', 'Round', 'Sunglasses'],
        facialHairType: ['BeardMedium', 'MoustacheFancy', 'Blank'],
        clotheType: ['Hoodie', 'Overall', 'ShirtCrewNeck'],
        eyeType: ['Happy', 'Squint', 'Dizzy'],
        eyebrowType: ['Angry', 'FlatNatural', 'Default'],
        mouthType: ['Twinkle', 'Disbelief', 'Serious'],
        skinColor: ['Light', 'Tanned', 'Yellow'],
    };

    const randomAvatarOptions = Object.fromEntries(
        Object.entries(randomOptions).map(([key, value]) => [key, getRandomValue(value)])
    );

    return (
        <div>
            <Avatar
                avatarStyle='Circle'
                style={{height: '100%', maxHeight: '80px', width: '100%', maxWidth: '80px'}}
                {...randomAvatarOptions}
            />
        </div>
    );
};
export default RandomAvatar;
