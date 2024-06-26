/*-
 *
 * Hedera Local Node
 *
 * Copyright (C) 2023-2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export const CONTAINERS = [
    {
        name: "Consensus Node",
        label: "network-node",
        port: 50211,
    },
    {
        name: "Mirror Node",
        label: "mirror-node-grpc",
        port: 5600,
    },
    {
        name: "Relay",
        label: "json-rpc-relay",
        port: 7546,
    },
];

export const CONSENSUS_NODE_LABEL = "network-node";
export const MIRROR_NODE_LABEL = "mirror-node-rest";
export const RELAY_LABEL = "json-rpc-relay";
export const IS_WINDOWS = process.platform === "win32";
export const UNKNOWN_VERSION = "Unknown";
export const NECESSARY_PORTS = [5551, 8545, 5600, 5433, 50211, 8082, 6379];
export const OPTIONAL_PORTS = [7546, 8080, 3000];
export const EVM_ADDRESSES_BLOCKLIST_FILE_RELATIVE_PATH = '../../compose-network/network-node'
export const RELATIVE_TMP_DIR_PATH = 'services/record-parser/temp';
export const RELATIVE_RECORDS_DIR_PATH = 'network-logs/node/recordStreams/record0.0.3';
export const RECORD_PARSER_SOURCE_REL_PATH = '../../src/services/record-parser';
export const NETWORK_NODE_CONFIG_DIR_PATH = 'compose-network/network-node/data/config';
export const APPLICATION_YML_RELATIVE_PATH = 'compose-network/mirror-node/application.yml';
export const MIN_MEMORY_SINGLE_MODE = 4;
export const MIN_MEMORY_MULTI_MODE = 14;
export const RECOMMENDED_MEMORY_SINGLE_MODE = 8;
export const MIN_CPUS = 4;
export const RECOMMENDED_CPUS = 6;

//Logger Colors for the terminal logging
// reset / black
export const COLOR_RESET = '\x1b[0m'
// bright / white
export const COLOR_DIM = '\x1b[2m'
// red
export const ERROR_COLOR = '\x1b[31m'
// yellow
export const WARNING_COLOR = '\x1b[33m'
// green
export const INFO_COLOR = '\x1b[32m'
// cyan
export const DEBUG_COLOR = '\x1b[36m'
// white
export const TRACE_COLOR = '\x1b[37m'

// Start State
export const START_STATE_INIT_MESSAGE = 'Start State Initialized!';
export const START_STATE_STARTING_MESSAGE = 'Starting Hedera Local Node...';
export const START_STATE_ON_START_MESSAGE = 'Initiating start procedure. Trying to start docker containers...';
export const START_STATE_STARTED_DETECTING = 'Detecting network...';
export const START_STATE_STARTED_MESSAGE = 'Hedera Local Node successfully started!';

// Stop State
export const STOP_STATE_INIT_MESSAGE = 'Stop State Initialized!';
export const STOP_STATE_ON_START_MESSAGE = 'Initiating stop procedure. Trying to stop docker containers and clean up volumes...';
export const STOP_STATE_STOPPING_MESSAGE = 'Stopping the network...';
export const STOP_STATE_STOPPED_MESSAGE = 'Hedera Local Node was stopped successfully.';

// Docker commands
export const DOCKER_STOPPING_CONTAINERS_MESSAGE = 'Stopping the docker containers...';
export const DOCKER_CLEANING_VALUMES_MESSAGE = 'Cleaning the volumes and temp files...';

// Recovery state
export const RECOVERY_STATE_INIT_MESSAGE = 'Recovery State Initialized!';
export const RECOVERY_STATE_STARTING_MESSAGE = "Starting Recovery State...";

// Network Prep State
export const NETWORK_PREP_STATE_INIT_MESSAGE = 'Network Preparation State Initialized!'
export const NETWORK_PREP_STATE_STARTING_MESSAGE = 'Starting Network Preparation State...';
export const NETWORK_PREP_STATE_IMPORT_FEES_START = 'Starting Fees import...';
export const NETWORK_PREP_STATE_IMPORT_FEES_END = 'Imported fees successfully';
export const NETWORK_PREP_STATE_WAITING_TOPIC_CREATION = 'Waiting for topic creation...';
export const NETWORK_PREP_STATE_TOPIC_CREATED = 'Topic was created!';

// Init state
export const INIT_STATE_INIT_MESSAGE = 'Initialization State Initialized!';
export const INIT_STATE_STARTING_MESSAGE = 'Initialization State Starting...';
export const INIT_STATE_START_DOCKER_CHECK = "Making sure that Docker is started and it's correct version...";
export const INIT_STATE_CONFIGURING_ENV_VARIABLES_FINISH = 'Needed environment variables were set for this configuration.';
export const INIT_STATE_RELAY_LIMITS_DISABLED = 'Hedera JSON-RPC Relay rate limits were disabled.';
export const INIT_STATE_BOOTSTRAPPED_PROP_SET = 'Needed bootsrap properties were set for this configuration.';
export const INIT_STATE_MIRROR_PROP_SET = 'Needed mirror node properties were set for this configuration.';
export const INIT_STATE_NO_NODE_CONF_NEEDED = 'No additional node configuration needed.';
export const INIT_STATE_NO_ENV_VAR_CONFIGURED = 'No new environment variables were configured.';

// Debug state
export const DEBUG_STATE_INIT_MESSAGE = 'Debug State Initialized!';
export const DEBUG_STATE_STARTING_MESSAGE = 'Debug State Starting...';
// StateController
export const STATE_CONTROLLER_MISSING_STATE_CONFIG_ERROR = 'Something is wrong with state configuration!';


// Account Creation State

export const ACCOUNT_CREATION_STATE_INIT_MESSAGE = 'Account Creaton State Initialized!';
export const ACCOUNT_CREATION_STARTING_SYNCHRONOUS_MESSAGE = 'Starting Account Creation state in synchronous mode ';
export const ACCOUNT_CREATION_STARTING_ASYNCHRONOUS_MESSAGE ='Starting Account Creation state in asynchronous mode ';
export const ACCOUNT_CREATION_STARTING_ASYNCHRONOUS_BLOCKLIST_MESSAGE = 'Starting Account Creation state in asynchronous mode with 1 blocklisted accounts';
