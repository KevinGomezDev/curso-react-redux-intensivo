import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.scss';

const AntdFooter = Layout.Footer;

const Footer = () => (
    <AntdFooter className={styles.footer}>
        Endava ©2018 Created by Me
    </AntdFooter>
);

export default Footer;
