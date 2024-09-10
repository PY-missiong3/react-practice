import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableOpacityProps } from "react-native";
 
interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    title: string;
    bgVariant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
    textVariant?: 'primary' | 'secondary' | 'danger' | 'success' | 'default';
    IconLeft?: React.ComponentType;
    IconRight?: React.ComponentType;
    style?: object;  // For additional styles passed dynamically
}
 
const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return styles.bgSecondary;
        case "danger":
            return styles.bgDanger;
        case "success":
            return styles.bgSuccess;
        case "outline":
            return styles.bgOutline;
        default:
            return styles.bgPrimary;
    }
};
 
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return styles.textPrimary;
        case "secondary":
            return styles.textSecondary;
        case "danger":
            return styles.textDanger;
        case "success":
            return styles.textSuccess;
        default:
            return styles.textDefault;
    }
};
 
const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    style,
    ...props
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, getBgVariantStyle(bgVariant), style]}
            {...props}
        >
            {IconLeft && <View style={styles.iconLeft}>{<IconLeft />}</View>}
            <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
                {title}
            </Text>
            {IconRight && <View style={styles.iconRight}>{<IconRight />}</View>}
        </TouchableOpacity>
    );
};
 
export default CustomButton;
 
const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconLeft: {
        marginRight: 8,
    },
    iconRight: {
        marginLeft: 8,
    },
    bgPrimary: {
        backgroundColor: '#323091',
    },
    bgSecondary: {
        backgroundColor: '#6B7280',
    },
    bgDanger: {
        backgroundColor: '#DC2626',
    },
    bgSuccess: {
        backgroundColor: '#16A34A',
    },
    bgOutline: {
        backgroundColor: 'transparent',
        borderColor: '#D1D5DB',
        borderWidth: 0.5,
    },
    textPrimary: {
        color: '#000',
    },
    textSecondary: {
        color: '#F3F4F6',
    },
    textDanger: {
        color: '#FEE2E2',
    },
    textSuccess: {
        color: '#D1FAE5',
    },
    textDefault: {
        color: '#FFF',
    },
});