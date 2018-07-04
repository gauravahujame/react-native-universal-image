# UniversalImage

A responsive image component with progressive loading for react native

Image component that resizes itself to contain the image.
Progressively loads image with blur effect and spinner overlay.

## Installation

```bash
yarn add react-native-universal-image
```

## Usage

```javascript
import UniversalImage from 'react-native-universal-image';

<UniversalImage
    indicator
    indicatorColor="#1AD2EF"
    indicatorSize="large"
    defaultHeight={350}
    imageFadeDuration={2000}
    thumbnailFadeDuration={1000}
    thumbnailBlurRadius={1}
    imageSource={{ uri: image }}
    thumbnailSource={{ uri: imageThumbnail }} />
```

## Properties

| Prop | Description | Default |
|---|---|---|
| **`indicator`** | Spinner overlay on image | false |
| **`indicatorColor`** | Color of spinner component | None |
| **`indicatorSize`** | Size of spinner component ('small', 'large') | None |
| **`defaultHeight`** | Default height of the component while the thumbnail is being loaded | 350 |
| **`thumbnailSource`** | Should be a low resolution version of the image used in `imageSource`. | None |
| **`imageSource`** | Full size image to shown after the thumbnail | None |
| **`thumbnailBlurRadius`** | Blur radius for the low resolution thumbnail. | None |
| **`imageFadeDuration`** | Fade-in duration for the image in ms. | None |
| **`thumbnailFadeDuration`** | Fade-in duration for the thumbnail in ms. | None |
| **`onLoadThumbnail`** | Callback function that gets called when the thumbnail is loaded. | `noop` |
| **`onLoadImage`** | Callback function that gets called when the main image is loaded. | `noop` |
