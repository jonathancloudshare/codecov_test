pushd myjs
call npm run codecov
popd

call MyCSharp\ci\test_unit_coverage.cmd
call MyCSharp\ci\test_integ_coverage.cmd
