@echo off

SETLOCAL
SET CI_DIR=%~dp0
SET CI_DIR=%CI_DIR:~0,-1%
SET JS_DIR=%CI_DIR%\..\myjs

pushd %JS_DIR%

@echo on
call npm install && call npm test && call %CI_DIR%\run_codecov.cmd --file "%JS_DIR%\coverage\coverage-final.json" --flag js_unit
@echo off

popd