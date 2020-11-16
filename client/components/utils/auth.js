import { Component, useState, useEffect } from 'react'
import Router from 'next/router'
import jwt_decode from 'jwt-decode'

let inMemoryToken;
let refreshToken;

function login(jwt_token, expiry, refresh_token, noRedirect) {
    inMemoryToken = {
        token: jwt_token,
        expiry: expiry
    };
    refreshToken = refresh_token;
    if (!noRedirect) {
       // Router.push('/app')
    }
}

async function logout() {
    inMemoryToken = null;
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    Router.push('/login')
}

async function auth(ctx) {
    const { refresh_token } = nextCookie(ctx)
    if (!inMemoryToken) {
        const headers = ctx && ctx.req ? {
            'Cookie': ctx.req.headers.cookie
        } : {}
        const hostname = typeof window === 'object' ? `${window.location.protocol}${window.location.host}` : `${ctx.req.headers.referer.split('://')[0]}://${ctx.req.headers.host}`
        const url = ctx && ctx.req ? `${hostname}/api/refresh-token` : '/api/refresh-token'
        console.log(url)
        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    ...headers
                },
                body: JSON.stringify({})
            })
            if (response.status === 200) {
                const { jwt_token, refresh_token, jwt_token_expiry, refresh_token_expiry } = await response.json()
                // setup httpOnly cookie if SSR
                if (ctx && ctx.req) {
                    ctx.res.setHeader('Set-Cookie', `refresh_token=${refresh_token};HttpOnly;Max-Age=${refresh_token_expiry};Path="/"`);
                }
                await login({ jwt_token, jwt_token_expiry }, true)
            } else {
                let error = new Error(response.statusText)
                error.response = response
                throw error
            }
        } catch (error) {
            console.log(error)
            if (ctx && ctx.req) {
                ctx.res.writeHead(302, { Location: '/login' })
                ctx.res.end()
            }
            Router.push('/login')
        }
    }

    const jwt_token = inMemoryToken;

    // We already checked for server. This should only happen on client.
    if (!jwt_token) {
        Router.push('/login')
    }

    return jwt_token
}

function getToken() {
    return inMemoryToken
}

const getCurrentPath = (originalUrl) => {
    if (typeof window === 'object') {
        return window.location.host
    } else {
        return originalUrl
    }
}


export { login, logout, auth, getToken, getCurrentPath }