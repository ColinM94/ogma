import * as React from "react"
import { StyleSheet, Modal, View, FlatList, Text } from "react-native"
import { useTheme } from "contexts/ThemeContext"
import { Pressable } from "../Pressable"

export type PickerItem = {
    /** If set, this text will be shown in the picker instead of value. */
    text?: string
    value: string
}

export interface PickerProps {
    value: string
    setValue: (value: string) => void
    show: boolean
    setShow: (show: boolean) => void
    data: PickerItem[]
    /** Default: true. Whether picker has a cancel button or not. */
    cancelBtnEnabled?: boolean
}

export const Picker = (props: PickerProps) => {
    const { theme } = useTheme()
    const { value, setValue, show, setShow, data, cancelBtnEnabled = true } = props

    const hidePicker = () => {
        setShow(false)
    }

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            bottom: 0,
            backgroundColor: theme.colors.card,
            width: "100%",
            borderTopWidth: 1,
            borderTopColor: theme.colors.text.tertiary,
        },
        item: {
            padding: 16,
        },
        selectableItem: {
            backgroundColor: theme.colors.card,
        },
        cancelItem: {
            backgroundColor: theme.colors.secondary,
            borderRadius: 0,
        },
    })

    const handlePress = (item: PickerItem) => {
        setValue(item.value)
        hidePicker()
    }

    const renderItem = ({ item }: { item: PickerItem }) => (
        <Pressable
            onPress={() => handlePress(item)}
            style={[styles.item, styles.selectableItem]}
        >
            <Text
                style={[
                    theme.typography.subtitle,
                    {
                        color:
                            item.value === value
                                ? theme.colors.text.primary
                                : theme.colors.text.secondary,
                    },
                ]}
            >
                {item.text ?? item.value}
            </Text>
        </Pressable>
    )

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}
        >
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                />
                {cancelBtnEnabled && (
                    <Pressable
                        onPress={hidePicker}
                        style={[styles.item, styles.cancelItem]}
                    >
                        <Text style={theme.typography.body}>Cancel</Text>
                    </Pressable>
                )}
            </View>
        </Modal>
    )
}
