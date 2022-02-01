/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggered when the user clicks/taps on a UI element.
 */
export interface Click {
  eventName: "Click";
  /**
   * The unique name of this element.
   */
  name: ("SendMessageButton" | "SideMenuSelectedSpace" | "SideMenuSwitchSpace" | "UserNotification" | "MatrixToLink") &
    string;
  /**
   * The index of the element, if its in a list of elements.
   */
  index?: number;
}
