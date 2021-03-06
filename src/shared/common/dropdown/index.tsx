import * as React from "react";
import ClassNames from "classnames";

const styles = require("./index.less");

interface DropdownProps {
    className?: any;
    anchorNode: React.ReactNode;
    menuPosition?: "top" | "right";
    autoClose?: boolean;
}

interface DropdownState {
    open: boolean;
}

export default class Dropdown extends React.Component<
    DropdownProps,
    DropdownState
> {
    public static Item;
    public static Divider;
    private timer;

    static defaultProps = {
        className: "",
        menuPosition: "right",
        autoClose: true
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    blurClose = () => {
        const { autoClose } = this.props;
        if (!autoClose) {
            return;
        }
        this.timer = setTimeout(() => {
            this.setState({
                open: false
            });
        }, 200);
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { className, anchorNode, children, menuPosition } = this.props;
        const { open } = this.state;
        return (
            <div
                className={ClassNames(
                    "btn-group",
                    [styles.dropdown],
                    [className],
                    { [styles.open]: open }
                )}
                onBlur={this.blurClose}
            >
                <button
                    className={ClassNames("btn btn--flat", [styles.toggle])}
                    onClick={this.toggle}
                >
                    {anchorNode}
                </button>
                {open && (
                    <ul
                        className={ClassNames(
                            [styles.Menu],
                            { [styles.MenuTop]: menuPosition === "top" },
                            { [styles.MenuRight]: menuPosition !== "top" }
                        )}
                    >
                        {children}
                    </ul>
                )}
            </div>
        );
    }
}

interface DropDownItemProps {
    className: any;
    hasIcon: boolean;
}

interface DropDownItemState {}

class DropDownItem extends React.Component<
    DropDownItemProps,
    DropDownItemState
> {
    static defaultProps = {
        hasIcon: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { className, children, hasIcon } = this.props;
        return (
            <li
                className={ClassNames([className], [styles.item], {
                    [styles.hasIcon]: !!hasIcon
                })}
            >
                {children}
            </li>
        );
    }
}

class DropDownDivider extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className={ClassNames([styles.divider], [styles.item])} />;
    }
}

Dropdown.Item = DropDownItem;
Dropdown.Divider = DropDownDivider;
