import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AppLayout.scss';

const { Content } = Layout;

const menu = [
    { id: '1', text: 'Menu 1', url: '/' },
    { id: '2', text: 'Menu 2', url: '/posts' },
    { id: '3', text: 'Menu 3', url: '/dksjfbsjdkh' },
];

const AppLayout = ({ children }) => (
    <Layout className={styles.appLayout}>
        <Header menu={menu} />

        <Content className={styles.content}>
            <Breadcrumb className={styles.breadcrumb}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <div className={styles.container}>
                {children}
            </div>
        </Content>

        <Footer />
    </Layout>
);

AppLayout.propTypes = {
    children: PropTypes.element,
};

AppLayout.defaultProps = {
    children: null,
};

export default AppLayout;
