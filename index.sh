#!/bin/bash
read -p 'description: ' desc
git add -A
git commit -m "$desc"
git pull
git push
echo 'successfully'
