#!/bin/sh

# 実行先のディレクトリへ移動
cd `dirname $0`

tsc ts/*.ts -watch --outDir js/