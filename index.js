import * as React from 'react';
import {
    ActivityIndicator,
    Animated,
    StyleSheet,
    View,
    Dimensions,
    Image,
} from 'react-native';

class UniversalImage extends React.Component {
    constructor(props) {
        super(props);
        this.style = StyleSheet.flatten(props.style);
        this.onLoadImage = this.onLoadImage.bind(this);
        this.onLoadThumbnail = this.onLoadThumbnail.bind(this);
        this.onLoadStart = this.onLoadStart.bind(this);
        this.isFirstLoad = true;
        this.defaultHeight = 350;

        this.state = {
            isLoading: true,
            layoutWidth: 0,
            originalHeight: 0,
            originalWidth: 0,
            imageOpacity: new Animated.Value(0),
            thumbnailOpacity: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.fetchOriginalSizeFromRemoteImage();
    }

    onLoadThumbnail() {
        Animated.timing(this.state.thumbnailOpacity, {
            toValue: 1,
            duration: this.props.thumbnailFadeDuration,
        }).start();

        if (typeof this.props.onLoad === 'function') {
            this.props.onLoad();
        }
    }

    onLoadImage() {
        Animated.timing(this.state.imageOpacity, {
            toValue: 1,
            duration: this.props.imageFadeDuration,
        }).start(() => {
            if (this.state.isLoading) {
                this.setState({ isLoading: false });
            }
        });

        if (typeof this.props.onLoad === 'function') {
            this.props.onLoad();
        }
    }

    onLoadStart() {
        // if (this.isFirstLoad) {
        //     this.setState({ isLoading: true });
        //     this.isFirstLoad = false;
        // }
    }

    onLayout = (event) => {
        const { width: layoutWidth } = event.nativeEvent.layout;
        this.setState({ layoutWidth });
    }

    getRatio = () => {
        if (this.state.originalWidth === 0) {
            return 0;
        }

        return this.state.layoutWidth / this.getOriginalWidth();
    }

    getOriginalWidth = () => (
        this.props.originalWidth || this.state.originalWidth || 0
    )

    getOriginalHeight = () => (
        this.props.originalHeight || this.state.originalHeight || 0
    )

    getHeight = () => {
        if (this.style && this.style.height) {
            return this.style.height;
        }

        return Math.round(this.getOriginalHeight() * this.getRatio());
    }

    fetchOriginalSizeFromRemoteImage = () => {
        Image.getSize(
            this.props.thumbnailSource.uri,
            (originalWidth, originalHeight) => {
                this.setState({
                    originalHeight,
                    originalWidth,
                });
            },
            () => null,
        );
    }

    shouldDisplayIndicator() {
        return this.state.isLoading && this.props.indicator;
    }

    renderLoading() {
        const defaultHeight = this.getHeight() || this.props.defaultHeight || this.defaultHeight;
        return (
            <View style={{
                height: defaultHeight,
                width: Dimensions.get('window').width,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ActivityIndicator
                    color={this.props.indicatorColor}
                    size={this.props.indicatorSize} />
            </View>
        );
    }

    render() {
        return (
            <View style={{ height: this.getHeight() || this.props.defaultHeight || this.defaultHeight }}>
                <Animated.Image
                    {...this.props}
                    onLayout={this.onLayout}
                    onLoad={this.onLoadThumbnail}
                    onLoadStart={this.onLoadStart}
                    source={this.props.thumbnailSource}
                    blurRadius={this.props.thumbnailBlurRadius}
                    style={[
                        this.style,
                        styles.image,
                        { opacity: this.state.thumbnailOpacity },
                        { height: this.getHeight() },
                    ]} />
                {this.shouldDisplayIndicator() ? this.renderLoading() : null}
                <Animated.Image
                    {...this.props}
                    onLayout={this.onLayout}
                    onLoad={this.onLoadImage}
                    onLoadStart={this.onLoadStart}
                    source={this.props.imageSource}
                    style={[
                        this.style,
                        styles.image,
                        { opacity: this.state.imageOpacity },
                        { height: this.getHeight() },
                    ]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default UniversalImage;
