import React from 'react'
import Head from 'next/head'

const Error = () => {
    return (
        <>
            <Head>
                <title>Error</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="min-h-[34vh] w-full bg-slate-300 flex items-center justify-center">
                <h1 className="text-center text-2xl">Error! 404 This page is not found</h1>
            </div>
        </>
    )
}

export default Error
