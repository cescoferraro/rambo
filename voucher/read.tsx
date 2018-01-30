import * as React from "react"
import { View, Text } from "react-native"
import { apiURL } from "../shared/etc";
import { ListItem } from "react-native-material-ui"

export const VoucherRead = ({ voucher }) => {
    return (<ListItem
        roundAvatar={true}
        hideChevron={true}
        key={voucher.id}
        avatar={{ uri: `${apiURL()}file/${voucher.product.image.fileId}` }}
        title={voucher.product.name}
        subtitle={voucher.customerName + "READ"}
    />
    )
}
