import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import WorkedPerWeekPage from "./pages/workedPerWeekPage";
import AnswersPage from "./pages/answersPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.continueOn(page);
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.continueOn(page);
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.continueOn(page);
    const workedPerWeekPage: WorkedPerWeekPage = new WorkedPerWeekPage();
    await workedPerWeekPage.checkPageLoads(page);
    await workedPerWeekPage.continueOn(page);
    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page);
});

test(`Page object model unhappy path`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.triggerErrorMessages(page);
});
