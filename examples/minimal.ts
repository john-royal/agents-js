// SPDX-FileCopyrightText: 2024 LiveKit, Inc.
//
// SPDX-License-Identifier: Apache-2.0

import { cli, JobContext, JobRequest, WorkerOptions } from '@livekit/agents';
import { fileURLToPath } from 'url';

// your entry file *has* to include an exported function [entry].
// this file will be imported from inside the library, and this function
// will be called.
export const entry = async (_: JobContext) => {
  console.log('starting voice assistant...');

  // etc
};

const requestFunc = async (req: JobRequest) => {
  console.log('received request', req);
  await req.accept(__filename);
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  cli.runApp(new WorkerOptions({ requestFunc }));
}
