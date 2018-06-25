@echo off

REM choco install -y opencover.portable
REM choco install -y codecov
REM set CODECOV_TOKEN=<token>

SETLOCAL
SET CI_DIR=%~dp0
SET CI_DIR=%CI_DIR:~0,-1%
SET REPO_ROOT=%CI_DIR%\..\..
SET TEST_LIST_FILE=%1
SET FLAG=%2

FOR /F "tokens=* USEBACKQ" %%F IN (`where nunit3-console`) DO (
    SET NUNIT3_CONSOLE_PATH=%%F
)

REM codecov has to run from the repository's root directory
pushd %REPO_ROOT%

@echo on
opencover.console ^
    -target:"%NUNIT3_CONSOLE_PATH%" ^
    -targetargs:"%CI_DIR%\MyCSharp.nunit --testlist=%CI_DIR%\%TEST_LIST_FILE% --work %CI_DIR%" ^
    -filter:"+[ClassLibrary1]* -[ClassLibrary1Test]*" ^
    -register:user ^
    -output:"%CI_DIR%\CoverageResult.xml" && codecov --file "%CI_DIR%\CoverageResult.xml" --flag %FLAG% -d
@echo off

popd