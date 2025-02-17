import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import WorkedPerWeekPage from "./pages/workedPerWeekPage";
import LeaveYearStartPage from "./pages/leaveYearStartPage";
import EmploymentStartDatePage from "./pages/employmentStartDatePage";
import EmploymentEndDatePage from "./pages/employmentEndDatePage";
import ShiftHoursPage from "./pages/shiftHoursPage";
import ShiftPatternShiftsPage from "./pages/shiftPatternShiftsPage";
import ShiftPatternDaysPage from "./pages/shiftPatternDaysPage";
import CalculateHolidayPage from "./pages/calculateHolidayPage";
import AnswersPage from "./pages/answersPage";


test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page, false);
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.continueOn(page, 1);
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.continueOn(page, 1);
    const workedPerWeekPage: WorkedPerWeekPage = new WorkedPerWeekPage();
    await workedPerWeekPage.checkPageLoads(page);
    await workedPerWeekPage.continueOn(page);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page, 1);
});

test(`Page object model unhappy path`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.triggerErrorMessages(page);
});

test(`Calculate Holiday Entitlement for a full leave year with annualised hours and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page, true);
    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
    await leaveYearStartPage.checkPageLoads(page);
    await leaveYearStartPage.continueOn(page, "01", "01", "2024");
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.continueOn(page, 3);
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.continueOn(page, 1);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page, 2);
});

test(`Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page, true);
    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
    await leaveYearStartPage.checkPageLoads(page);
    await leaveYearStartPage.continueOn(page, "01", "01", "2024");
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.continueOn(page, 5);
    const calculateHolidayPage: CalculateHolidayPage = new CalculateHolidayPage();
    await calculateHolidayPage.checkPageLoads(page);
    await calculateHolidayPage.continueOn(page, 4);
    const employmentStartDatePage: EmploymentStartDatePage = new EmploymentStartDatePage();
    await employmentStartDatePage.checkPageLoads(page);
    await employmentStartDatePage.continueOn(page, "01", "04", "2024");
    const employmentEndDatePage: EmploymentEndDatePage = new EmploymentEndDatePage();
    await employmentEndDatePage.checkPageLoads(page);
    await employmentEndDatePage.continueOn(page, "01", "08", "2024");
    const shiftHoursPage: ShiftHoursPage = new ShiftHoursPage();
    await shiftHoursPage.checkPageLoads(page);
    await shiftHoursPage.continueOn(page, 8);
    const shiftPatternShifts: ShiftPatternShiftsPage = new ShiftPatternShiftsPage();
    await shiftPatternShifts.checkPageLoads(page);
    await shiftPatternShifts.continueOn(page, 5);
    const shiftPatternDaysPage: ShiftPatternDaysPage = new ShiftPatternDaysPage();
    await shiftPatternDaysPage.checkPageLoads(page);
    await shiftPatternDaysPage.continueOn(page, 7);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page, 3);
});
