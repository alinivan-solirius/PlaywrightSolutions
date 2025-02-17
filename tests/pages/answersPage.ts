import { Page } from 'playwright';
import {expect} from "@playwright/test";
import answers_content from "../content/answers_content";
import axeTest from "../accessibilityTestHelper";

class AnswersPage {
    private readonly title: string;
    private readonly textAnswers: string[];

    constructor() {
        this.title = `.govuk-heading-xl`
        this.textAnswers = [
            `.summary`, 
            `.govuk-govspeak p:first-of-type`,
            `.summary`, 
        ];
    }

    async checkPageLoads(page: Page, index: number): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(answers_content.pageTitle),
            expect(page.locator(this.textAnswers[index - 1]))
            .toContainText(answers_content.divText[index - 1]),
        ]);
        await axeTest(page);
    }
}

export default AnswersPage;
