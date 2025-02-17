import { Page } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearStart_content from "../content/leaveYearStart_content";
import axeTest from "../accessibilityTestHelper";

class LeaveYearStartPage {
    private readonly title: string;
    private readonly text: string;
    private readonly fieldDay: string;
    private readonly fieldMonth: string;
    private readonly fieldYear: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-hint`
        this.fieldDay = `#response-0`
        this.fieldMonth = `#response-1`
        this.fieldYear = `#response-2`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(leaveYearStart_content.pageTitle),
            expect(page.locator(this.text)).toContainText(leaveYearStart_content.divText),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, day: string, month: string, year: string): Promise<void> {
        await page.locator(this.fieldDay).fill(day);
        await page.locator(this.fieldMonth).fill(month);
        await page.locator(this.fieldYear).fill(year);
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default LeaveYearStartPage;
