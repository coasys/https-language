import type { Address, ExpressionAdapter, ReadOnlyLanguage } from '@perspect3vism/ad4m'
import { Agent, Expression, ExpressionProof, LanguageContext } from '@perspect3vism/ad4m'
import { UrlPutAdapter } from './putAdapter'

export default class Adapter implements ExpressionAdapter {
    putAdapter: ReadOnlyLanguage

    constructor(context: LanguageContext) {
        this.putAdapter = new UrlPutAdapter()
    }

    async get(address: Address): Promise<Expression> {
        let url
        try {
            url = new URL(address)
        } catch(e) {
            address = 'https:' + address
            url = new URL(address)
        }

        const data = { url: address }

        const expression = {
            author: new Agent(url.hostname),
            timestamp: 'unknown',
            data,
            proof: new ExpressionProof('', '')
        };

        return expression

    }
}