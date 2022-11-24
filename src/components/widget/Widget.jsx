import "./widget.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined"; 
import { AssignmentLate, CheckCircleOutline, FunctionsTwoTone, KeyboardArrowDown, WatchLater } from "@mui/icons-material";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";

const Widget = ({ type }) => {
  let data;

switch (type) {
    case "user":
        data = {
            title: "PAYED",
            isMoney: false,
            link: "See all Checked Student",
            amount : 100,
            diff : 25,
            icon: (
                <CheckCircleOutline
                className="icon" 
                style={{
                    color: "green",
                    backgroundColor: " rgb(14, 168, 52,0.2)",
                }}
                 />
             ),
        };
        break;
        case "order":
            data = {
                title: "Late",
                isMoney: false,
                link: "All Student feedback with mail",
                amount : 95,
                diff : -26,
                icon: (
                    <AssignmentLate className="icon" 
                    style={{
                        color: "goldenrod",
                        backgroundColor: " rgba(218,165,32,0.2)",
                    }}
                        />
                ),
            };
            break;
            case "earning":
                data = {
                    title: "Overdue",
                    isMoney: true,
                    link: "All Student with no feedback",
                    amount : 25,
                    diff : 23,
                    icon: (
                        <WatchLater className="icon" 
                        style={{
                            color: "red",
                            backgroundColor: " rgba(0,128,0,0.2)",
                        }}
                            />
                    ),
                };
                break;
                case "balance":
                    data = {
                        title: "UNPAYED",
                        isMoney: true,
                        link: "See details",
                        amount : 120,
                        diff : -1,
                        icon: (
                            <FunctionsTwoTone className="icon" 
                            style={{
                                color: "purple",
                                backgroundColor: " rgba(128,0,128,0.2)",
                            }}
                                />
                        ),
                    };
                    break;
               default:
                    break;
}

  return (
    <div className="widget">
      <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney } {data.amount}</span>
            <span className="link">{data.link}</span>
      </div>
      <div className="right">
            <div className="percentage positive">
            {data.diff} %
              {
                data.diff > 0 ?
                <KeyboardArrowUp /> :
                <KeyboardArrowDown
                style={{
                    color: "red",
                }}/>
              }
               
            </div>
        {data.icon}
      </div>
      
    </div>
  );

}

export default Widget
