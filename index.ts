import type { Address, Agent, Language, LanguageContext, Interaction } from '@perspect3vism/ad4m'
import Adapter from './adapter'
import { IframeExpressionUI } from './iframExpressionUI'


function interactions(expression: Address): Interaction[] {
    return []
}

export const name: string = "https-language"

export default function create(context: LanguageContext): Language {
    const expressionAdapter = new Adapter(context)
    const expressionUI = new IframeExpressionUI()

    return {
        name,
        expressionAdapter,
        expressionUI,
        interactions,
    } as Language
}
