import * as React from "react"
import { View, Text } from "react-native"
import { Card, List, Button } from "react-native-elements"
import { ListItem } from "react-native-elements";
import { apiURL } from "../shared/etc"

export const VoucherError = ({ voucher }: { voucher: IVoucherRequest }) => {
    return (
        <View>
            <Text>skdjfn</Text>
            <ListItem
                roundAvatar={true}
                hideChevron={true}
                key={voucher.id}
                avatar={{ uri: `${apiURL()}file/${voucher.product.image.fileId}` }}
                title={voucher.product.name}
                subtitle={voucher.customerName + " ERROR"}
            />
        </View>
    )
}
