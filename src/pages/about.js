import React from 'react';
import {Container} from 'react-bootstrap';
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => (
    <Layout>
    <Seo title="About" />
    <Container className="mt-4">
        This is About page.
    </Container>
    </Layout>
)

export default About