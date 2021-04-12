import * as React from "react"
import { ListRenderItem, RefreshControl, StyleSheet, View } from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { useTheme } from "contexts/ThemeContext"

type ScreenViewProps = {
    children?: JSX.Element | JSX.Element[],
    onRefresh?: () => void,
    data?: any[],
    renderItem?: ListRenderItem<any>,
    headerComponent?: any
}

export const ScreenView = ({ children, onRefresh, data, renderItem, headerComponent }: ScreenViewProps) => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            minHeight: "100%",
            padding: theme.spacing.primary,
        },
        itemSeparator: {
            height: theme.spacing.primary
        }
    })

    const itemSeparator = () => (
        <View style={styles.itemSeparator} />
    )

    return (
        <>
            {data ?
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={onRefresh}
                        />
                    }
                    ListHeaderComponent={headerComponent}
                    ItemSeparatorComponent={itemSeparator}
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps='handled'
                />
                :
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps='handled'
                    refreshControl={
                        // Enables refresh functionality if a function has been passed in as onRefresh.  
                        <RefreshControl onRefresh={onRefresh} refreshing={false} enabled={onRefresh != undefined} />
                    }
                >
                    {children}
                </ScrollView>}
        </>
    )
}