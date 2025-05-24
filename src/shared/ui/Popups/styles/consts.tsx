import {Direction} from "../../../types/ui";
import popupCls from "./Popup.module.scss";

export const mapDirection: Record<Direction, string> = {
    'top left': popupCls.topLeftOptions,
    'top right': popupCls.topRightOptions,
    'bottom right': popupCls.bottomRightOptions,
    'bottom left': popupCls.bottomLeftOptions,
}