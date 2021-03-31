import React from 'react'
import Head from 'next/Head'
function index({children,title}) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta></meta>
        </Head>
            {children}
        </>
    )
}

export default index
