import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftPatternDays_content from "../content/shiftPatternDays_content";
import axeTest from "../accessibilityTestHelper";

class ShiftPatternDays {
    private readonly title: string;
    private readonly field: string;

    constructor() {
        this.title = `.govuk-label-wrapper`
        this.field = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftPatternDays_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, days: number): Promise<void> {
        await page.locator(this.field).fill(days.toString());
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default ShiftPatternDays;