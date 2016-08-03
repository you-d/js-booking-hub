export default class UtestHelperModule {
    constructor(helperModule) {
        this._helperModule = helperModule;

        console.log("******Performing Unit Test on the 'HelperModule'******");
    }
    runTestSuites() {
        let _testResultReport = null;
        console.log("******TEST RESULT******");

        _testResultReport = this.calculateNewDateBasedOnPivotDateTestSuite();
        console.log("Function Name : 'calculateNewDateBasedOnPivotDate'");
        console.log("Total executed Test Cases : " + _testResultReport.total +
                    " - Pass : " + _testResultReport.pass +
                    " - Fail : " + _testResultReport.fail);
        if (_testResultReport.fail > 0) {
            console.log("Failed Test Cases : " + _testResultReport.failedTestCases);
        }
        console.log("**********************");
        _testResultReport = this.ddMyyyyStringConvertorTestSuite();
        console.log("Function Name : 'ddMyyyyStringConvertor'");
        console.log("Total executed Test Cases : " + _testResultReport.total +
                    " - Pass : " + _testResultReport.pass +
                    " - Fail : " + _testResultReport.fail);
        if (_testResultReport.fail > 0) {
            console.log("Failed Test Cases : " + _testResultReport.failedTestCases);
        }
        console.log("**********************");
        _testResultReport = this.yyyymmddStringConvertorTestSuite();
        console.log("Function Name : 'yyyymmddStringConvertorTestSuite'");
        console.log("Total executed Test Cases : " + _testResultReport.total +
                    " - Pass : " + _testResultReport.pass +
                    " - Fail : " + _testResultReport.fail);
        if (_testResultReport.fail > 0) {
            console.log("Failed Test Cases : " + _testResultReport.failedTestCases);
        }
        console.log("**********************");
        console.log("******End Unit Test Execution for the 'HelperModule'******");
    }
    calculateNewDateBasedOnPivotDateTestSuite() {
        let _testResult = {
            "total" : 0, "pass" : 0, "fail" : 0, "failedTestCases" : []
        }

        // test case 1
        if (this.testCase1_1()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("1");
        }
        _testResult.total += 1;
        // test case 2
        if (this.testCase1_2()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("2");
        }
        _testResult.total += 1;
        // test case 3
        if (this.testCase1_3()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("3");
        }
        _testResult.total += 1;

        return _testResult;
    }
    ddMyyyyStringConvertorTestSuite() {
        let _testResult = {
            "total" : 0, "pass" : 0, "fail" : 0, "failedTestCases" : []
        }

        // test case 1
        if (this.testCase2_1()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("1");
        }
        _testResult.total += 1;
        // test case 2
        if (this.testCase2_2()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("2");
        }
        _testResult.total += 1;

        return _testResult;
    }
    yyyymmddStringConvertorTestSuite() {
        let _testResult = {
            "total" : 0, "pass" : 0, "fail" : 0, "failedTestCases" : []
        }

        // test case 1
        if (this.testCase3_1()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("1");
        }
        _testResult.total += 1;
        // test case 2
        if (this.testCase3_2()) {
            _testResult.pass += 1;
        } else {
            _testResult.fail += 1;
            _testResult.failedTestCases.push("2");
        }
        _testResult.total += 1;

        return _testResult;
    }

    // calculateNewDateBasedOnPivotDateTestSuite - test case 1
    testCase1_1() {
        let _verdict = false;
        let _tc1 = this._helperModule.calculateNewDateBasedOnPivotDate(new Date("2016-09-03"), -2);
        if (Number(_tc1) == Number(new Date("2016-09-01"))) {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // calculateNewDateBasedOnPivotDateTestSuite - test case 2
    testCase1_2() {
        let _verdict = false;
        let _tc1 = this._helperModule.calculateNewDateBasedOnPivotDate(new Date("2016-09-03"), 2);
        if (Number(_tc1) == Number(new Date("2016-09-05"))) {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // calculateNewDateBasedOnPivotDateTestSuite - test case 3
    testCase1_3() {
        let _verdict = false;
        let _tc1 = this._helperModule.calculateNewDateBasedOnPivotDate(new Date("2016-09-03"), 0);
        if (Number(_tc1) == Number(new Date("2016-09-03"))) {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // ddMyyyyStringConvertorTestSuite - test case 1
    testCase2_1() {
        let _verdict = false;
        let _tc = this._helperModule.ddMyyyyStringConvertor(new Date("2016-09-03"), " ");
        if (_tc == "3 Sept 2016") {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // ddMyyyyStringConvertorTestSuite - test case 2
    testCase2_2() {
        let _verdict = false;
        let _tc = this._helperModule.ddMyyyyStringConvertor(new Date("2016-09-03"), "-");
        if (_tc == "3-Sept-2016") {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // yyyymmddStringConvertorTestSuite - test case 1
    testCase3_1() {
        let _verdict = false;
        let _tc = this._helperModule.yyyymmddStringConvertor(new Date("2016-09-03"), "-");
        if (_tc == "2016-09-03") {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
    // yyyymmddStringConvertorTestSuite - test case 2
    testCase3_2() {
        let _verdict = false;
        let _tc = this._helperModule.yyyymmddStringConvertor(new Date("2016/09/03"), "/");
        if (_tc == "2016/09/03") {
            // passed the test
            _verdict = true;
        }

        return _verdict;
    }
}
