import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftHours_content from "../content/shiftHours_content";
import axeTest from "../accessibilityTestHelper";

class ShiftHoursPage {
    private readonly title: string;
    private readonly field: string;

    constructor() {
        this.title = `.govuk-label-wrapper`
        this.field = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftHours_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, hours: number): Promise<void> {
        await page.locator(this.field).fill(hours.toString());
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default ShiftHoursPage;