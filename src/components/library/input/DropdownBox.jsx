import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import React, { useState, useRef } from 'react';
import { Colors } from '../../../constants';
import { scale, verticalScale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownBox = ({
    value,
    onValueChange,
    items = [],
    placeholder = "Select an option...",
    error = false,
    disabled = false,
    searchable = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
    const containerRef = useRef();

    const filteredItems = searchable
        ? items.filter(item =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    const selectedItem = items.find(item => item.value === value);

    const handleSelect = (itemValue) => {
        onValueChange(itemValue);
        setIsOpen(false);
        setSearchQuery('');
        setIsFocused(false);
    };

    const openDropdown = () => {
        if (!disabled) {
            containerRef.current.measure((x, y, width, height, pageX, pageY) => {
                setDropdownPosition({
                    top: pageY + height + verticalScale(2), // Add small gap
                    left: pageX,
                    width: width
                });
                setIsOpen(true);
                setIsFocused(true);
            });
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.option,
                value === item.value && styles.selectedOption,
            ]}
            onPress={() => handleSelect(item.value)}
            activeOpacity={0.7}
        >
            <Text
                style={[
                    styles.optionText,
                    value === item.value && styles.selectedOptionText,
                ]}
            >
                {item.label}
            </Text>
            {value === item.value && (
                <MaterialIcons
                    name="check"
                    size={scale(20)}
                    color={Colors.THEME}
                />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.wrapper} ref={containerRef}>
            {/* Dropdown Trigger */}
            <TouchableOpacity
                style={[
                    styles.dropdownTrigger,
                    isFocused && styles.active,
                    error && styles.error,
                    disabled && styles.disabled,
                ]}
                onPress={openDropdown}
                activeOpacity={0.7}
                disabled={disabled}
            >
                <Text
                    style={[
                        styles.selectedText,
                        !value && styles.placeholderText,
                        disabled && styles.disabledText,
                    ]}
                    numberOfLines={1}
                >
                    {selectedItem?.label || placeholder}
                </Text>

                <MaterialIcons
                    name={isOpen ? "arrow-drop-up" : "arrow-drop-down"}
                    size={scale(24)}
                    color={disabled ? Colors.DISABLED : Colors.THEME}
                />
            </TouchableOpacity>

            {/* Dropdown List */}
            {isOpen && (
                <View style={styles.dropdownWrapper}>
                    <View style={[styles.dropdownContainer, {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: dropdownPosition.width,
                        maxHeight: verticalScale(250),
                    }]}>
                        {/* Search Input (if searchable) */}
                        {searchable && (
                            <View style={styles.searchContainer}>
                                <MaterialIcons
                                    name="search"
                                    size={scale(20)}
                                    color={Colors.PLACEHOLDER}
                                    style={styles.searchIcon}
                                />
                                <TextInput
                                    style={styles.searchInput}
                                    value={searchQuery}
                                    onChangeText={setSearchQuery}
                                    placeholder="Search..."
                                    placeholderTextColor={Colors.PLACEHOLDER}
                                    autoFocus={true}
                                />
                                {searchQuery !== '' && (
                                    <TouchableOpacity
                                        onPress={() => setSearchQuery('')}
                                        style={styles.clearButton}
                                    >
                                        <MaterialIcons
                                            name="close"
                                            size={scale(18)}
                                            color={Colors.PLACEHOLDER}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}

                        {/* Options List */}
                        <FlatList
                            data={filteredItems}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={renderItem}
                            style={styles.list}
                            nestedScrollEnabled={true}
                            ListEmptyComponent={
                                <View style={styles.emptyContainer}>
                                    <Text style={styles.emptyText}>No options found</Text>
                                </View>
                            }
                            keyboardShouldPersistTaps="handled"
                        />
                    </View>
                </View>
            )}

            {/* Overlay to close dropdown when clicking outside */}
            {isOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => {
                        setIsOpen(false);
                        setIsFocused(false);
                    }}
                />
            )}
        </View>
    );
};

export default DropdownBox;

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        zIndex: 1,
    },
    dropdownTrigger: {
        borderWidth: scale(1),
        borderRadius: scale(5),
        padding: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
        backgroundColor: Colors.WHITE,
    },
    active: {
        borderColor: Colors.THEME,
    },
    error: {
        borderColor: Colors.ERROR,
    },
    disabled: {
        backgroundColor: Colors.DISABLED_BACKGROUND || '#f5f5f5',
    },
    selectedText: {
        fontSize: scale(14),
        color: Colors.BLACK,
        flex: 1,
    },
    placeholderText: {
        color: Colors.PLACEHOLDER,
    },
    disabledText: {
        color: Colors.DISABLED,
    },
    dropdownWrapper: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    dropdownContainer: {
        backgroundColor: Colors.WHITE,
        borderRadius: scale(5),
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth: scale(1),
        borderColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(8),
        backgroundColor: Colors.WHITE,
    },
    searchIcon: {
        marginRight: scale(8),
    },
    searchInput: {
        flex: 1,
        fontSize: scale(14),
        color: Colors.BLACK,
        padding: 0,
    },
    clearButton: {
        padding: scale(4),
    },
    list: {
        maxHeight: verticalScale(250),
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
        backgroundColor: Colors.WHITE,
    },
    selectedOption: {
        backgroundColor: Colors.THEME + '10', // 10% opacity of theme color
    },
    optionText: {
        fontSize: scale(14),
        color: Colors.BLACK,
    },
    selectedOptionText: {
        color: Colors.THEME,
        fontWeight: '600',
    },
    emptyContainer: {
        padding: verticalScale(20),
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    emptyText: {
        fontSize: scale(14),
        color: Colors.PLACEHOLDER,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
    },
});