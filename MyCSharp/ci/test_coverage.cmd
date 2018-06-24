REM choco install -y opencover.portable
REM choco install -y codecov
REM set CODECOV_TOKEN=<token>

opencover.console ^
    -target:"C:\ProgramData\chocolatey\bin\nunit3-console.exe" ^
    -targetargs:"MyCSharp\ci\tests.nunit -output MyCSharp\ci\TestResult.xml" ^
    -filter:"+[ClassLibrary1]* -[ClassLibrary1Test]*" ^
    -register:user ^
    -output:"MyCSharp\ci\CoverageResult.xml" && codecov --file "MyCSharp\ci\CoverageResult.xml"