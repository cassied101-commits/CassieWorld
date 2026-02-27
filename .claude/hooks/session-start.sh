#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web (remote environment)
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Start a static file server for the site if one isn't already running
PORT=8080
if ! curl -s --max-time 1 "http://localhost:${PORT}" > /dev/null 2>&1; then
  cd "$CLAUDE_PROJECT_DIR"
  nohup python3 -m http.server "$PORT" --bind 0.0.0.0 > /tmp/site-server.log 2>&1 &
  echo "Static file server started on port ${PORT}"
else
  echo "Server already running on port ${PORT}"
fi
