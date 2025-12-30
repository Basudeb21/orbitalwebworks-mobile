import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';

const OutlineInputBoxWithIcon = ({
    value,
    onChangeText,
    placeholder = {},
    text = {},
    startIcon,
    endIcon,
    secureTextEntry = false,
    passwordIcons,
    activeBorderColor = Colors.THEME,
    inactiveBorderColor = Colors.GRAY,
    activeIconColor,
    inactiveIconColor,
    keyboardType = 'default',
    containerStyle,
    inputStyle,

    inputProps = {},
}) => {
    const [hidePassword, setHidePassword] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    const renderIcon = (icon, onPress) => {
        if (!icon?.Component || !icon?.name) return null;

        const IconComponent = icon.Component;
        const color =
            isFocused
                ? icon.color || activeIconColor || Colors.THEME
                : icon.color || inactiveIconColor || Colors.GRAY;

        const iconView = (
            <IconComponent
                name={icon.name}
                size={icon.size || 22}
                color={color}
                style={styles.icon}
            />
        );

        return onPress ? (
            <TouchableOpacity onPress={onPress}>
                {iconView}
            </TouchableOpacity>
        ) : (
            iconView
        );
    };

    return (
        <View
            style={[
                styles.container,
                {
                    borderBottomColor: isFocused
                        ? activeBorderColor
                        : inactiveBorderColor,
                },
                containerStyle,
            ]}
        >
            {renderIcon(startIcon)}

            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder.text}
                placeholderTextColor={placeholder.color || Colors.GRAY}
                secureTextEntry={secureTextEntry ? hidePassword : false}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={[
                    styles.input,
                    {
                        color: text.color || Colors.BLACK,
                        fontSize: text.fontSize || scale(16),
                        fontFamily: text.fontFamily,
                        textAlign: text.align,
                    },
                    inputStyle,
                ]}
                {...inputProps}
            />

            {secureTextEntry && passwordIcons ? (
                renderIcon(
                    {
                        Component: passwordIcons.Component,
                        name: hidePassword
                            ? passwordIcons.hide
                            : passwordIcons.show,
                        size: passwordIcons.size,
                        color: passwordIcons.color,
                    },
                    () => setHidePassword(!hidePassword)
                )
            ) : (
                renderIcon(endIcon, endIcon?.onPress)
            )}
        </View>
    );
};

export default OutlineInputBoxWithIcon;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        paddingVertical: verticalScale(6),
        marginBottom: verticalScale(22),
    },
    input: {
        flex: 1,
        paddingVertical: verticalScale(6),
    },
    icon: {
        marginHorizontal: scale(8),
    },
});
