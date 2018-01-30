import * as React from "react"
import { View, Text } from "react-native"
import { Card, List, Button } from "react-native-elements"
import { ListItem } from "react-native-elements";
import { apiURL } from "../shared/etc"
export const VoucherUsed = ({ voucher }: { voucher: IVoucherRequest }) => {
    return (
        <ListItem
            roundAvatar={true}
            hideChevron={true}
            key={voucher.id}
            avatar={{ uri: `${apiURL()}file/${voucher.product.image.fileId}` }}
            title={voucher.product.name}
            subtitle={voucher.customerName + "USED"}
        />
    )
}
