import * as React from "react"
import { signOut } from "api/auth"
import { SettingsItem } from "./SettingsItem"
import { useToast } from "contexts/ToastContext"
import { useNavigation } from "@react-navigation/native"

export const SettingsItemSignOut = () => {
    const navigation = useNavigation()
    const { toast } = useToast()

    const handleSignOut = async () => {
        try {
            await signOut()
        } catch (err) {
            toast(err.message)
        }
    }

    return (
        <SettingsItem
            title="Sign Out"
            subtitle="Return to signin screen"
            icon="sign-out-alt"
            onPress={handleSignOut}
        />
    )
}
