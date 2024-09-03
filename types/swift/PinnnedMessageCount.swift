//
// Copyright 2021 New Vector Ltd
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import Foundation

// GENERATED FILE, DO NOT EDIT. FOR MORE INFORMATION VISIT
// https://github.com/matrix-org/matrix-analytics-events/

/// Number of pinned messages in a room.
extension AnalyticsEvent {
    public struct PinnnedMessageCount: AnalyticsEventProtocol {
        public let eventName = "PinnedMessageCount"

        /// Number of pinned messages in a room.
        public let count: Int

        public init(count: Int) {
            self.count = count
        }

        public var properties: [String: Any] {
            return [
                "count": count
            ]
        }
    }
}
