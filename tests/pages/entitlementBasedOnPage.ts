import { Page } from 'playwright';
import {expect} from "@playwright/test";
import entitlementBasedOn_content from "../content/entitlementBasedOn_content";
import axeTest from "../accessibilityTestHelper";

class EntitlementBasedOnPage {
    private readonly title: string;
    private readonly text: string;
    private readonly radioButtons: string[];

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-hint`
        this.radioButtons = [
            `label[for="response-0"]`,
            `label[for="response-1"]`,
            `label[for="response-2"]`,
            `label[for="response-3"]`,
            `label[for="response-4"]`,
        ];
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(entitlementBasedOn_content.pageTitle),
            expect(page.locator(this.text)).toContainText(entitlementBasedOn_content.divText),
            expect(page.locator(this.radioButtons[0])).toContainText(entitlementBasedOn_content.radio1),
            expect(page.locator(this.radioButtons[1])).toContainText(entitlementBasedOn_content.radio2),
            expect(page.locator(this.radioButtons[2])).toContainText(entitlementBasedOn_content.radio3),
            expect(page.locator(this.radioButtons[3])).toContainText(entitlementBasedOn_content.radio4),
            expect(page.locator(this.radioButtons[4])).toContainText(entitlementBasedOn_content.radio5),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page, index: number): Promise<void> {
        await page.click(this.radioButtons[index - 1]);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default EntitlementBasedOnPage;
