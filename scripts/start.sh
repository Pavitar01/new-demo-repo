#!/bin/bash
cd /home/ec2-user/app
pm2 stop all || true
pm2 start src/index.js
