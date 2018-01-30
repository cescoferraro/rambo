import * as React from "react"
import { View, Text, FlatList } from "react-native"
import { VoucherRead } from "../voucher/read"
import { VoucherUsed } from "../voucher/used"
import { VoucherInserted } from "../voucher/inserted"
import { VoucherError } from "../voucher/error"

export class Cart extends React.Component<{ cart: ICartStore }> {
    constructor(props) {
        super(props)
    }
    public render() {
        return (
            <FlatList
                data={this.props.cart.vouchers}
                extraData={this.props.cart}
                keyExtractor={(voucher, index) => voucher.id}
                renderItem={
                    ({ item }) => {
                        console.log("************")
                        console.log("list item")
                        console.log(item)
                        if (item.state === "inserted") {
                            return <VoucherInserted voucher={item} />
                        }
                        if (item.state === "read") {
                            return <VoucherRead voucher={item} />
                        }
                        if (item.state === "used") {
                            return <VoucherUsed voucher={item} />
                        }
                        if (item.state === "error") {
                            return <VoucherError voucher={item} />
                        }
                    }
                }
            />
        )
    }
}
