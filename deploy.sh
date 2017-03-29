#!/usr/bin/env bash
export REACT_APP_API_ROOT=https://lunchagator.herokuapp.com
npm run build
firebase deploy --only hosting