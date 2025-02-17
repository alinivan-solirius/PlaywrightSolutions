import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftPatternShifts_content from "../content/shiftPatternShifts_content";
import axeTest from "../accessibilityTestHelper";

class ShiftPatternShiftsPage {
    private readonly title: string;
    private readonly field: string;

    constructor() {
        this.title = `.govuk-label-wrapper`
        this.field = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftPatternShifts_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, shifts: number): Promise<void> {
        await page.locator(this.field).fill(shifts.toString());
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default ShiftPatternShiftsPage;