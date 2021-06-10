import { useToast } from "contexts/ToastContext"
import { Input } from "library/Input"
import * as React from "react"

interface CreateCardInputProps {
    value: string
    setValue: (value: string) => void
    label: string
    enableAttachBtn?: boolean
}

export const CreateCardInput = (props: CreateCardInputProps) => {
    const { toast } = useToast()

    const { value, setValue, label, enableAttachBtn = true } = props

    return (
        <Input
            value={value}
            setValue={setValue}
            label={label}
            multiline={true}
            rightIcon={enableAttachBtn ? "paperclip" : undefined}
            rightIconOnPress={
                enableAttachBtn ? () => toast("Attach coming soon") : undefined
            }
        />
    )
}
