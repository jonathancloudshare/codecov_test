@echo off

REM choco install -y codecov
REM set CODECOV_TOKEN=<token>

SETLOCAL
SET CI_DIR=%~dp0
SET CI_DIR=%CI_DIR:~0,-1%
SET REPO_ROOT=%CI_DIR%\..

REM codecov has to run from the repository's root directory
pushd %REPO_ROOT%

@echo on
    codecov %*
@echo off

popd

ENDLOCAL