import React, {useContext} from 'react';
import {CustomerContext} from '../CustomerContext';

export default function ListCustomerPage() {

    const context = useContext(CustomerContext);

    return (
        <>
            <h1>
                List All Customers
            </h1>
            {
                context.getCustomers().map(c => <div className="card">
                    <div className="card-body">
                        <h2>{c.first_name}{c.last_name}</h2>
                        <ul>
                            <li>Company ID: {c.company_id}</li>
                            <li>Rating:{c.rating}</li>
                            <li>Employees: {c.employees}</li>
                        </ul>
                        
                    </div>
                </div>)
            }
        </>
    )
}