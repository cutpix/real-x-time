import React from 'react';

import SiteWrapper from '../common/site.wrapper';
import PageContent from '../common/page.content';

import BOOKS from 'data/books';

const ReadmePage = () => {
    console.log(BOOKS);
    return (
        <SiteWrapper>
            <PageContent role="readme">
                <p>
                    <ul>
                        <li>
                            <a href="https://www.w3.org/">W3C</a> | <a href="https://www.w3.org/TR/json-ld/">JSON-LD 1.0</a>
                        </li>
                        <li>
                            <a href="http://json-ld.org/">JSON-LD</a> | <a href="http://json-ld.org/spec/">Spec</a> | <a href="http://json-ld.org/learn.html">Learn</a>
                        </li>
                        <li>
                            <a href="https://ru.wikipedia.org/wiki/Linked_data">Linked Data</a> | <a href="https://ru.wikipedia.org/wiki/JSON-LD">JSON-LD</a>
                        </li>
                    </ul>
                </p>
                <p>
                    <a href="http://html5doctor.com/">HTML5 Doctor</a>
                </p>
            </PageContent>
        </SiteWrapper>
    );
};

export default ReadmePage;