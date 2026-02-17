#!/bin/bash
set -e


cd /app/dist
nginx -g 'daemon off;'