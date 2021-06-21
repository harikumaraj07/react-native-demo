import theme from "../../theme";

const styles = {
    checkBoxTitle: {
        ...theme.text.titleSize,
        ...theme.text.textColor
    },
    container: {
        flexDirection: "row",
        height: 30,
        alignItems: "center"
    },
    checkBoxAtRight: {
        justifyContent: "space-between"
    },
    checkBox: {
        right: 0
    }
};

export default styles;
