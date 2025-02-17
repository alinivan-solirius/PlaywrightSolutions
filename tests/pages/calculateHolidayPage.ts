import { Page } from 'playwright';
import {expect} from "@playwright/test";
import calculateHoliday_content from "../content/calculateHoliday_content";
import axeTest from "../accessibilityTestHelper";

class calculateHolidayPage {
    private readonly title: string;
    private readonly radioButtons: string[];

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.radioButtons = [
            `label[for="response-0"]`,
            `label[for="response-1"]`,
            `label[for="response-2"]`,
            `label[for="response-3"]`,
        ];
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(calculateHoliday_content.pageTitle),
            expect(page.locator(this.radioButtons[0])).toContainText(calculateHoliday_content.radio1),
            expect(page.locator(this.radioButtons[1])).toContainText(calculateHoliday_content.radio2),
            expect(page.locator(this.radioButtons[2])).toContainText(calculateHoliday_content.radio3),
            expect(page.locator(this.radioButtons[3])).toContainText(calculateHoliday_content.radio4),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, index: number): Promise<void> {
        await page.click(this.radioButtons[index - 1]);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default calculateHolidayPage;
