#!/usr/bin/env bash
# exit on error
set -o errexit

poetry install
pip install -r requirements.txt
pip install gunicorn 