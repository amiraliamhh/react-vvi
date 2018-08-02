import { IOptions } from './interfaces/main';

export const options: IOptions[] = [{
        aacForms: [{
                required: true,
                title: 'Buy',
                value: 'Buy'
            },
            {
                required: true,
                title: 'Sell',
                value: 'Sell'
            },
            {
                required: false,
                title: 'Trading Fee',
                value: 'TradingFee'
            }
        ],
        text: 'Trade (Exchange)',
        value: 'trade'
    },
    {
        aacForms: [{
                required: true,
                title: 'Deposit',
                value: 'Deposit'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[In] General Deposit (Transfer)',
        value: 'genDepositIn'
    },
    {
        aacForms: [{
                required: true,
                title: 'Income',
                value: 'Income'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[In] Income',
        value: 'incomeIn'
    },
    {
        aacForms: [{
                required: true,
                title: 'Mining',
                value: 'Mining'
            },
            {
                required: false,
                title: 'Mining Fee',
                value: 'MiningFee'
            }
        ],
        text: '[In] Mining',
        value: 'miningIn'
    },
    {
        aacForms: [{
                required: true,
                title: 'Gift / Tip',
                value: 'GiftTip'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[In] Gift / Tip',
        value: 'giftTopIn'
    },
    {
        aacForms: [{
                required: true,
                title: 'Withdrawal',
                value: 'Withdrawal'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[Out] General Withdrawal (Transfer)',
        value: 'genWithdrawalOut'
    },
    {
        aacForms: [{
                required: true,
                title: 'Spend',
                value: 'Spend'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[Out] Spend',
        value: 'spendOut'
    },
    {
        aacForms: [{
                required: true,
                title: 'Donation',
                value: 'Donation'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[Out] Donation',
        value: 'donateOut'
    },
    {
        aacForms: [{
            required: true,
                title: 'Gift',
                value: 'Gift'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: '[Out] Gift',
        value: 'giftOut'
    },
    {
        aacForms: [{
            required: true,
            title: 'Stolen',
            value: 'Stolen'
        }],
        text: '[Out] Stolen / Hacked / Fraud',
        value: 'stolenHackedOut'
    },
    {
        aacForms: [{
            required: true,
            title: 'Lost',
            value: 'Lost'
        }],
        text: '[Out] Lost',
        value: 'lostOut'
    },
    {
        aacForms: [{
                required: true,
                title: 'Transfered Amount',
                value: 'TransferedAmount'
            },
            {
                required: false,
                title: 'Transaction Fee',
                value: 'TransactionFee'
            }
        ],
        text: 'Transfer',
        value: 'transfer'
    }
];