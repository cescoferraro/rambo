import * as React from "react"
import { View, Text } from "react-native"
import { ListItem } from "react-native-material-ui"

export const VoucherInserted = ({ voucher }) => {
    return (
        <ListItem
            divider={true}
            key={voucher.id}
            centerElement={{
                primaryText: `INSETED ${voucher.id}`
            }}
            onPress={() => { }}
        />
    )
}
