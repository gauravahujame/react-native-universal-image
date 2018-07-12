# UniversalImage

An auto sizing image component with progressive loading for react native.

![Universal Image](https://user-images.githubusercontent.com/33686528/42342900-14fcb654-80b5-11e8-8e52-83e4a458a4ae.gif)

Image component that resizes itself to contain the image.
Progressively loads image with blur effect and spinner overlay.

Note: For auto resize, please make sure your thumbnails are the same aspect ratio as the original image.

## Installation

Since the library is a JS-based solution, to install the latest version of react-native-universal-image you only need to run:

```bash
yarn add react-native-universal-image
```

or

```bash
npm install --save react-native-universal-image
```

## Use Cases

- Rendering remote images with variable dimensions.
- Building a feeds / timeline screen ?
- Leverage progressive loading for a performant UI.
- Looking for an instagram like animation for your images ?
- Default resize modes (cover / contain) don't provide what you are looking for?

## Usage

```javascript
import UniversalImage from 'react-native-universal-image';

<UniversalImage
    indicator
    indicatorColor="#1AD2EF"
    indicatorSize="large"
    defaultHeight={350}
    imageFadeDuration={3000}
    thumbnailFadeDuration={1000}
    thumbnailBlurRadius={1}
    imageSource={{ uri: IMAGE_URL }}
    thumbnailSource={{ uri: THUMBNAIL_URL }} />
```

## Properties

| Prop | Description | Default | Required |
|---|---|---|---|
| **`indicator`** | Spinner overlay on image | false |
| **`indicatorColor`** | Color of spinner component | None |
| **`indicatorSize`** | Size of spinner component ('small', 'large') | None |
| **`defaultHeight`** | Default height of the component while the thumbnail is being loaded | 350 |
| **`thumbnailSource`** | Provide a low resolution version of the image used in `imageSource`. | None | Required |
| **`imageSource`** | Original image uri| None | Required |
| **`thumbnailBlurRadius`** | Blur radius for the low resolution thumbnail. | None |
| **`imageFadeDuration`** | Fade-in duration for the image in ms. | None |
| **`thumbnailFadeDuration`** | Fade-in duration for the thumbnail in ms. | None |
| **`onLoadThumbnail`** | Callback function that gets called when the thumbnail is loaded. | `noop` |
| **`onLoadImage`** | Callback function that gets called when the main image is loaded. | `noop` |

## Contributing

Interested in contributing to this repo?
Feel free to raise a pull request or report an issue at [react-native-universal-image](https://github.com/gauravahujame/react-native-universal-image).
