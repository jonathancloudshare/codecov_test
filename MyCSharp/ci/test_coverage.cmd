REM choco install -y opencover.portable
REM choco install -y codecov
opencover.console ^
    -target:"C:\ProgramData\chocolatey\bin\nunit3-console.exe" ^
    -targetargs:"tests.nunit" ^
    -filter:"+[ClassLibrary1]* -[ClassLibrary1Test]*" ^
    -register:user ^
    -output:"CoverageResult.xml"

codecov --token "%1" ^
        --file "CoverageResult.xml"