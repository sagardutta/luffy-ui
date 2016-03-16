#!/usr/bin/env bash
DEFAULT="web"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=ad-search-help
DIR=_site/
aws  s3  sync index.html s3://$BUCKET/ --profile "$PROFILE"
