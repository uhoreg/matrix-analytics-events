/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggered when the user changed screen
 */
export interface Screen {
  eventName: "Screen";
  screenName: (
    | "Welcome"
    | "Login"
    | "ForgotPassword"
    | "Register"
    | "Home"
    | "Room"
    | "RoomDetails"
    | "RoomMembers"
    | "User"
    | "RoomSearch"
    | "RoomUploads"
    | "RoomSettings"
    | "RoomNotifications"
    | "RoomDirectory"
    | "RoomFilter"
    | "StartChat"
    | "CreateRoom"
    | "Settings"
    | "SettingsSecurity"
    | "SettingsDefaultNotifications"
    | "SettingsMentionsAndKeywords"
    | "DeactivateAccount"
    | "Group"
    | "MyGroups"
    | "MobileSidebar"
    | "MobileFavourites"
    | "MobilePeople"
    | "MobileRooms"
    | "MobileDialpad"
    | "MobileSearchRooms"
    | "MobileSearchMessages"
    | "MobileSearchPeople"
    | "MobileSearchFiles"
    | "MobileSwitchDirectory"
    | "MobileInviteFriends"
    | "MobileBreadcrumbs"
    | "WebLoading"
    | "WebCompleteSecurity"
    | "WebE2ESetup"
    | "WebSoftLogout"
    | "SpaceMenu"
    | "SpaceExploreRooms"
    | "SpaceMembers"
  ) &
    string;
  /**
   * How long the screen was displayed for in milliseconds.
   */
  durationMs?: number;
}
