#!/usr/bin/env bash
export REACT_APP_API_ROOT=https://api.lunchgator.absolutne.pro
npm run build
firebase deploy --only hosting