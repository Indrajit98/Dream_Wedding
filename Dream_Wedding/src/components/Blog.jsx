import React from "react";
import { useTitle } from "../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  
    return (
        <div className="my-20 md:w-3/4 mx-auto">
            <div className="collapse border border-collapse my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    1.Difference between SQL and NoSQL
                </div>
                <div className="collapse-content ">
                    <p className="md:text-xl font-semibold py-3">SQL databases</p>
                    <p className="text-justify">MS-SQL is Microsoft’s relational database product, accessed with the proprietary Transact-SQL (T-SQL), and offered in a dozen editions targeted to different end users. Microsoft Azure includes a dedicated component for scaling MS-SQL databases in the cloud.
                        Oracle Database is among the oldest and most-established RDBMSs. Its relational store is interfaced by PL/SQL, though it is adapting into a multi-model system.
                        Other major RDBMSs include Access, Ingres, PostgreSQL, Sybase, and SQLite.</p>
                    <p className="md:text-xl font-semibold py-3">NoSQL databases.</p>
                    <p className="text-justify">Apache CouchDB, like MongoDB, is a document-oriented database with JSON schemata and querying over JavaScript. CouchDB’s scaling capabilities stand out, employing a multi-master architecture over the typical single-master distributed design.
                        Redis (Remote Dictionary Server), is the most popular key-value database. It is open-source, with a fast and distributed in-memory implementation, and supports many abstract data structures (some rarely found in other NoSQL).
                        InfinityDB and Amazon’s DynamoDB implement two other key-value stores. Columnar stores like Cassandra, MariaDB, and Scylla scale well horizontally, and popular graph databases include ArangoDB, InfiniteGraph, and Neo4j.</p>
                </div>
            </div>
            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify py-3">
                        What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
                    </p>
                    <p className="text-justify">
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                </div>
            </div>

            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify py-3">
                        1. NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    </p>
                    <p className="text-justify">
                        2. JavaScript :
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.

                        Difference between Nodejs and JavaScript :
                    </p>
                </div>
            </div>

            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify py-3">
                        When I was new in the Node.js world, I was wondering know how many requests can actually handle my Node.js application in production (as a real-world app). Or how many server instances do I need to handle a specific amount of traffic.
                        Last year I read something very interesting for me in an article from a unicorn company PicsArt. They handle 40K requests per second having Node.js (mostly) for the backend.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
