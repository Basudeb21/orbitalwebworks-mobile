import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimatedText = ({
    text,
    textStyle,
    letterDelay = 120, // ⌨️ typing speed (slower = bigger)
    animDuration = 300, // fade/slide smoothness
    pause = 1000,
}) => {
    const animatedValues = useRef(
        text.split('').map(() => new Animated.Value(0))
    ).current;

    const startAnimation = () => {
        animatedValues.forEach(anim => anim.setValue(0));

        const animations = animatedValues.map((anim) =>
            Animated.timing(anim, {
                toValue: 1,
                duration: animDuration,
                useNativeDriver: true,
            })
        );

        Animated.stagger(letterDelay, animations).start(() => {
            setTimeout(startAnimation, pause);
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <View style={styles.container}>
            {text.split('').map((char, index) => (
                <Animated.Text
                    key={index}
                    style={[
                        textStyle,
                        {
                            opacity: animatedValues[index],
                            transform: [
                                {
                                    translateY: animatedValues[index].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [6, 0],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    {char}
                </Animated.Text>
            ))}
        </View>
    );
};

export default AnimatedText;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
