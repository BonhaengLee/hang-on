#!/bin/sh

# 환경 변수 로드
export $(grep -v '^#' .env | xargs)

# 마이그레이션 실행
npx prisma migrate deploy
