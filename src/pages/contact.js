import React from 'react';
import {Container} from 'react-bootstrap';
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => (
    <Layout>
    <Seo title="Contact" />
    <Container className="mt-4">
        This is Contact page.
    </Container>
    </Layout>
)

export default Contact