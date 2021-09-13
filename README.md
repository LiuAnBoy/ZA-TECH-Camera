# ZA Tech Camera

Use WebRTC to build this project.

### start project
> npm start 
>
> yarn start

## Camera

src/camera/index.js

## Hook
WebRTC function

>src/hooks/useUserMedia.js

### import useUserMedia into src/camera/index.js


### function - Camera/index.js

> handleCapture - capture image
>
> handleClear - clean image

### Callback function - src/components PictureSection.js

onPictureSend 
>
>     callbackObj = {
>         type: vehicleType,
>         angle: vehicleAngle,
>         blob: cardImage
>     }
