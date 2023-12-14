import {NextResponse} from 'next/server'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import dbConnection from '../../components/dbconnect.mjs'
import { compare } from 'bcryptjs'
import { TailwindConverter } from 'css-to-tailwindcss';
import { JSDOM } from 'jsdom';
const dotenv = require('dotenv')
dotenv.config()
const { DOMParser, XMLSerializer, Node } = new JSDOM().window;

export async function POST(request) {
    const res = await request.json()
    //console.log("html code: " + res.htmlcode)
    //console.log("css code: " + res.csscode)
    const session = await getIronSession(cookies(), { password: process.env.SESSION_PASSWORD, cookieName: "tailwindify" })
    if (!session.name) {
      if (!session.saves && !(session.saves===0)) {
        session.saves = 2
        await session.save()
    }
      if (session.saves) {
        session.saves = session.saves - 1
        await session.save()
      }
    }
    if (!session.name && !(session.saves >= 0)) {
      return NextResponse.json({result: 'No free conversions remaining. Create a free account to get unlimited free conversions.'})
    }
    const converter = new TailwindConverter({
        remInPx: null, // set null if you don't want to convert rem to pixels
        postCSSPlugins: [], // add any postcss plugins to this array
        tailwindConfig: {
          // your tailwind config here
          content: [],
          theme: {
            extend: {
              colors: {
                'custom-color': {
                  100: '#123456',
                  200: 'hsla(210, 100%, 51.0%, 0.016)',
                  300: '#654321',
                  gold: 'hsl(41, 28.3%, 79.8%)',
                  marine: 'rgb(4, 55, 242, 0.75)',
                },
              },
              screens: {
                'custom-screen': { min: '768px', max: '1024px' },
              },
            },
            supports: {
              grid: 'display: grid',
              flex: 'display: flex',
            },
          },
        },
      });

    let { convertedRoot, nodes } = await converter.convertCSS(res.csscode)
    console.log(convertedRoot.toString())
    let tailwindcss = convertedRoot.toString()
    let rules = extractSelectorExpressions(tailwindcss)
    let modifiedHTML = addTailwindToHTML(res.htmlcode, rules)

    return NextResponse.json({result: modifiedHTML})
}

function extractSelectorExpressions(css) {
    const rules = [];
    const lines = css.split('\n');
    let currentRule = null;
  
    for (const line of lines) {
      if (line.trim() === '') {
        continue; // Skip empty lines
      }
  
      if (line.includes('{')) {
        // Start of a ruleset
        const selectors = line.split('{')[0].trim();
        currentRule = { expression: selectors, tailwind: '' };
      } else if (line.includes('}')) {
        // End of a ruleset
        if (currentRule) {
          rules.push(currentRule);
          currentRule = null;
        }
      } else if (currentRule) {
        // Inside a ruleset, update the expression
        currentRule.tailwind += `${line.trim().slice(7, -1)}`;
      }
    }
  
    return rules;
  }

function addTailwindToHTML(html, rules) {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
  
    const doc = parser.parseFromString(html, 'text/html');
    rules.forEach(rule => {
        /*console.log(rule)
        console.log(rule.expression)*/
      const elements = doc.querySelectorAll(rule.expression);
        /*console.log(elements)
        console.log(elements.length)*/
        for (let i = 0; i < elements.length; i++) {
            const classes = rule.tailwind.split(' ')
            /*console.log(rule)
            console.log(classes)
            console.log(elements[i])
            console.log(elements[i].classList)*/
            elements[i].classList.add(...classes);
            //console.log(elements[i].classList)
          }
    });
  
    return serializer.serializeToString(doc);
  }
/*export async function POST(request) {
    const res = await request.json()

    let session = await getIronSession(cookies(), { password: process.env.SESSION_PASSWORD, cookieName: "handcraftedhaven" })
    session.destroy()

    session = await getIronSession(cookies(), { password: process.env.SESSION_PASSWORD, cookieName: "handcraftedhaven" })
    let query = { email: res.email }
    const clients = await dbConnection.queryCollection('clients', query)
    const client = clients[0]

    const result = compare(res.password, client.passwordHash)
    if (result) {
        session.name = client.name
        session.email = client.email
        session.sellerName = client.sellerName
        await session.save()
    }

    return NextResponse.json({result: result})
}*/