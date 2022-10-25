// import {AccountNoValidator,AmountValidator,DateValidator,DebitCreditValidator,IdValidator,ParticularValidator} from "./Validation"

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        // Cell : IdValidator
    },
    {
        Header: 'Particular',
        Footer: 'Particular',
        accessor: 'particular',
        // Cell: ParticularValidator
    },
    {
        Header: 'Debit/Credit',
        Footer: 'Debit/Credit',
        accessor: 'debit-credit',
        // Cell : DebitCreditValidator
    },
    {
        Header: 'AccountNo',
        Footer: 'AccountNo',
        accessor: 'accountno',
        // Cell : AccountNoValidator
    },
    {
        Header: 'Amount',
        Footer: 'Amount',
        accessor: 'amount',
        // Cell : AmountValidator
    },
    {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
        // Cell : DateValidator
    }
]

