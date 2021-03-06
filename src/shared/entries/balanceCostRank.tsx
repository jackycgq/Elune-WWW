import * as React from "react";
import Header from "components/header";
import BalanceView from "views/balance";
import Footer from "components/footer";
import GlobalStore from "store/GlobalStore";
import BalanceStore from "store/BalanceStore";
import { IS_NODE } from "../../../env";

interface BalanceCostRankEntryProps {
    location: any;
    match: any;
}

interface BalanceCostRankEntryState {}

export default class BalanceCostRankEntry extends React.Component<
    BalanceCostRankEntryProps,
    BalanceCostRankEntryState
> {
    // SSR 在入口组件中获知Store类并初始化用于实例注入
    static STORE_CLASSES = [GlobalStore, BalanceStore];

    constructor(props) {
        super(props);
        if (!IS_NODE) {
            const { location, match } = props;
            GlobalStore.getInstance({ location, match, cookies: "" });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <main className="app-content">
                    <BalanceView type="costrank" />
                </main>
                <Footer />
            </div>
        );
    }
}
