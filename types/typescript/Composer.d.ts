/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggered when the user sends a message via the composer.
 */
export interface Composer {
  eventName: "Composer";
  /**
   * Whether the user's composer interaction was editing a previously sent event.
   */
  isEditing: boolean;
  /**
   * Whether the user's composer interaction was a reply to a previously sent event.
   */
  isReply: boolean;
  /**
   * Whether the user was using the composer inside of a thread.
   */
  inThread: boolean;
  /**
   * Whether this message begins a new thread or not.
   */
  startsThread?: boolean;
}
