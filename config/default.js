/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const sites = require('./sites.js')

module.exports = {
    app: {
        url: {
            site: 'path',
            locale: 'path',
            showDefaults: true
        },
        defaultSite: 'RefArchGlobal',
        siteAliases: {
            RefArch: 'us',
            RefArchGlobal: 'global'
        },
        sites,
        commerceAPI: {
            proxyPath: `/mobify/proxy/api`,
            parameters: {
                clientId: 'acd41d84-721c-4df0-b217-5144751a6f43',
                organizationId: 'f_ecom_zzrb_289',
                shortCode: 'kv7kzm78',
                siteId: 'RefArch'
            },
            ocapi: {
                baseTokenUrl: 'https://account.demandware.com/dw/oauth2/access_token',
                proxyPath: `/mobify/proxy/ocapi`,
                ocapi_clientId: 'd53e494e-20f4-4c40-9c22-b6f5146709aa',
                ocapi_clientPwd: 'j)p9()JZx80Gur',
                api_version: 'v22_8'
            }
        },
        einsteinAPI: {
            proxyPath: `/mobify/proxy/einstein`,
            einsteinId: 'undefined',
            // This differs from the siteId in commerceAPIConfig for testing purposes
            siteId: 'RefArch'
        }
    },
    externals: [],
    pageNotFoundURL: '/page-not-found',
    ssrEnabled: true,
    ssrOnly: ['ssr.js', 'ssr.js.map', 'node_modules/**/*.*'],
    ssrShared: [
        'static/ico/favicon.ico',
        'static/robots.txt',
        '**/*.js',
        '**/*.js.map',
        '**/*.json'
    ],
    ssrParameters: {
        ssrFunctionNodeVersion: '14.x',
        proxyConfigs: [
            {
                host: 'kv7kzm78.api.commercecloud.salesforce.com',
                path: 'api'
            },
            {
                protocol: 'https',
                host: 'prd.us.shopper.commercecloud.salesforce.com',
                path: 'slas'
            },
            {
                host: 'zzrb-289.sandbox.us03.dx.commercecloud.salesforce.com',
                path: 'ocapi'
            },
            {
                host: 'api.cquotient.com',
                path: 'einstein'
            }
        ]
    }
}
